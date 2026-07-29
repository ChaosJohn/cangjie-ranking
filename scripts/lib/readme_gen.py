"""仓颉生态榜单 - README 自动榜单生成。

仿照 https://github.com/EvanLi/Github-Ranking 的范式，根据 data.json 的最新快照，
把 Top Stars / Top Forks / 分类统计等榜单写回 README.md 中由占位标记界定的区块。

占位区块形如（成对出现，标记本身会被保留以便下次再替换）：

    <!-- AUTO: top-stars:START -->
    （脚本生成的内容）
    <!-- AUTO: top-stars:END -->

可独立运行：

    python scripts/lib/readme_gen.py --data data.json --readme README.md

集成在 GitHub Actions 中：每次 refresh / recrawl 生成 data.json 后调用本脚本，
README.md 的榜单会与 data.json 一起被 commit，从而保持 README 永远反映最新快照。
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from collections import Counter
from pathlib import Path

TOP_N = 10          # Top Stars / Top Forks 展示条数
CATEGORY_TOP_N = 5  # 分类分组榜单每个分类展示条数
CATEGORY_GROUP_TOP = 10  # 分类分组最多展示的分组数
DESC_LIMIT = 90    # 描述列最大字符数（超出截断）
SOURCE_TOP = 15    # 来源表最多展示条数（排除“未知”后取前 N）

# 表头（与 Github-Ranking 对齐：Last Commit 在此用 Last Updated）
STARS_HEADER = (
    "| Ranking | Project Name | Stars | Forks | Language | Open Issues | "
    "Description | Last Updated |\n"
    "| --- | --- | --- | --- | --- | --- | --- | --- |"
)


def md_escape(s) -> str:
    """转义表格单元格里的管道符与换行，并对过长描述截断。"""
    if s is None:
        return ""
    s = str(s).replace("|", "\\|").replace("\n", " ").replace("\r", " ").strip()
    if len(s) > DESC_LIMIT:
        s = s[: DESC_LIMIT - 3] + "..."
    return s


def short_date(value) -> str:
    """把 ISO 时间截到 YYYY-MM-DD。"""
    if not value:
        return "—"
    s = str(value)
    return s[:10] if len(s) >= 10 else s


def project_link(p: dict) -> str:
    name = p.get("display_name") or p.get("name") or ""
    url = p.get("url") or ""
    if url:
        return f"[{md_escape(name)}]({url})"
    return md_escape(name)


def rank_row(rank: int, p: dict) -> str:
    return (
        f"| {rank} | {project_link(p)} "
        f"| {p.get('stars') or 0} | {p.get('forks') or 0} "
        f"| {md_escape(p.get('language')) or '—'} | {p.get('issues') or 0} "
        f"| {md_escape(p.get('description'))} | {short_date(p.get('updated_at'))} |"
    )


def render_top(projects: list[dict], key: str, n: int = TOP_N) -> str:
    ordered = sorted(projects, key=lambda p: (p.get(key) or 0), reverse=True)[:n]
    rows = [STARS_HEADER]
    rows += [rank_row(i, p) for i, p in enumerate(ordered, 1)]
    return "\n".join(rows)


def render_snapshot(data: dict) -> str:
    counts = data.get("counts", {})
    snapshot = data.get("snapshot_date", "—")
    total = counts.get("total_records", len(data.get("projects", [])))
    curated = counts.get("curated", 0)
    new = counts.get("new_since_last_run", 0)
    return (
        f"*Last Automatic Update Time: {snapshot}* · "
        f"数据快照 **{total}** 项（{curated} curated + {new} 新发现）"
    )


def render_counter(counter: Counter, headers: list[str], exclude=()) -> str:
    lines = ["| " + " | ".join(headers) + " |", "| " + " | ".join(["---"] * len(headers)) + " |"]
    for key, n in counter.most_common():
        if key in exclude:
            continue
        lines.append(f"| {md_escape(key)} | {n} |")
    return "\n".join(lines)


def render_by_activity(projects: list[dict]) -> str:
    counter = Counter(p.get("activity") or "未知" for p in projects)
    return render_counter(counter, ["Activity", "Count"])


def render_by_classification(projects: list[dict]) -> str:
    counter = Counter(p.get("classification") or "未分类" for p in projects)
    return render_counter(counter, ["Classification", "Count"], exclude=("未分类",))


def render_by_source(projects: list[dict]) -> str:
    counter = Counter(p.get("source") or "未知" for p in projects)
    lines = [
        "| Source | Count |",
        "| --- | --- |",
    ]
    shown = 0
    for key, n in counter.most_common():
        if key == "未知":
            continue
        lines.append(f"| {md_escape(key)} | {n} |")
        shown += 1
        if shown >= SOURCE_TOP:
            break
    return "\n".join(lines)


def render_by_category(projects: list[dict]) -> str:
    """按 category 字段分组（与 web 页面 renderGrouped(key='category') 完全一致）：
    - 无 category 的项目归为「未分类」并跳过；
    - 组排序：组内 stars 之和降序；
    - 组内：按 stars 降序，每组取前 CATEGORY_TOP_N 个；
    - 为控制 README 长度，仅展示 stars 之和前 CATEGORY_GROUP_TOP 个分组。
    """
    groups: dict[str, list[dict]] = {}
    for p in projects:
        g = p.get("category") or "未分类"
        groups.setdefault(g, []).append(p)

    sorted_groups = sorted(
        ((g, m) for g, m in groups.items() if g != "未分类"),
        key=lambda gm: sum(p.get("stars") or 0 for p in gm[1]),
        reverse=True,
    )[:CATEGORY_GROUP_TOP]

    blocks = []
    for group_name, members in sorted_groups:
        members_sorted = sorted(members, key=lambda p: (p.get("stars") or 0), reverse=True)
        top = members_sorted[:CATEGORY_TOP_N]
        lines = [f"### {group_name}", ""]
        lines.append(f"共 **{len(members)}** 个项目，按 Stars 取前 {len(top)}：")
        lines.append("")
        lines.append(STARS_HEADER)
        lines += [rank_row(i, p) for i, p in enumerate(top, 1)]
        blocks.append("\n".join(lines))
    return "\n\n".join(blocks)


# 占位区块名 → 渲染函数
SECTIONS = {
    "snapshot": lambda d: render_snapshot(d),
    "top-stars": lambda d: render_top(d["projects"], "stars"),
    "top-forks": lambda d: render_top(d["projects"], "forks"),
    "by-activity": lambda d: render_by_activity(d["projects"]),
    "by-classification": lambda d: render_by_classification(d["projects"]),
    "by-source": lambda d: render_by_source(d["projects"]),
    "by-category": lambda d: render_by_category(d["projects"]),
}


def replace_section(text: str, name: str, content: str) -> str:
    """替换 README 中 <!-- AUTO: name:START --> ... <!-- AUTO: name:END --> 之间的内容。"""
    pattern = re.compile(
        rf"(<!-- AUTO: {re.escape(name)}:START -->\n)"
        r"([\s\S]*?)"
        rf"(<!-- AUTO: {re.escape(name)}:END -->)"
    )
    if not pattern.search(text):
        return text  # 该区块不存在，跳过
    # 内容末尾去掉多余换行，保证 END 标记紧跟内容后一行
    return pattern.sub(rf"\1{content.rstrip()}\n\3", text)


def generate(data: dict, readme_text: str) -> str:
    out = readme_text
    for name, fn in SECTIONS.items():
        out = replace_section(out, name, fn(data))
    return out


def main(argv: list[str] | None = None) -> int:
    p = argparse.ArgumentParser(
        prog="readme_gen",
        description="根据 data.json 生成 README 榜单区块",
    )
    p.add_argument("--data", default="data.json", help="data.json 路径")
    p.add_argument("--readme", default="README.md", help="README.md 路径")
    p.add_argument("--check", action="store_true", help="仅检查是否需要更新，不写文件")
    args = p.parse_args(argv)

    data_path = Path(args.data)
    readme_path = Path(args.readme)
    if not data_path.exists():
        print(f"data.json 不存在：{data_path}", file=sys.stderr)
        return 1
    if not readme_path.exists():
        print(f"README.md 不存在：{readme_path}", file=sys.stderr)
        return 1

    data = json.loads(data_path.read_text(encoding="utf-8"))
    readme_text = readme_path.read_text(encoding="utf-8")
    updated = generate(data, readme_text)

    if updated == readme_text:
        print("README 已是最新，无需更新")
        return 0

    if args.check:
        print("README 需要更新（--check 模式未写入）")
        return 1

    readme_path.write_text(updated, encoding="utf-8")
    print(f"README 已更新：{readme_path}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
