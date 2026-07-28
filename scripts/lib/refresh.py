"""refresh 模式 - 通过 GitCode org API 刷新已知项目指标 + 发现新项目。

输入：``--input gitcode-cangjie-projects.json``（curated 352 项清单）
输出：``--output data.json``（站点数据，覆写）

流程：
1. 读 curated 列表，提取所有 (owner, repo) 与唯一 org 集合
2. 读已存在的 data.json（如有），保留 license/language/topics/PRs 等静态字段
3. 对每个 org 调 ``/api/v5/orgs/{org}/repos`` 拉满
4. 在 curated 列表里的项目：覆盖 stars/forks/issues/updated_at，``is_new=false``
5. 不在 curated 列表但被 API 返回的项目：作为「新项目」追加，``is_new=true``，
   字段仅取 API 能给的（无 license/language/PRs，UI 上以「新」badge 标注）
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from pathlib import Path

from . import gitcode


# ============== 字段映射 ==============

# API 字段 → data.json 字段
# 注意：API 的 pushed_at = 最后代码推送时间，等价于 HTML json-ld 的 dateModified。
# 用它作为 data.json 的 updated_at（语义一致：代码活跃度），而非 API 的 updated_at
# （那是仓库元数据更新时间，例如改 description 会变，与代码活跃度无关）。
API_FIELD_MAP = {
    "stargazers_count": "stars",
    "forks_count": "forks",
    "open_issues_count": "issues",
    "pushed_at": "updated_at",   # 覆盖 curated/existing 的 updated_at
    "description": "description",
    "name": "name",
    "html_url": "url",
    "default_branch": "default_branch",
}

# 这些字段 API 不返回，必须从既有 data.json 保留
PRESERVED_FIELDS = [
    "display_name", "source", "source_kind", "classification", "category",
    "language", "license", "topics", "pull_requests", "activity",
    "official_catalog", "selected_for_awesome", "verification", "display_path",
]


# ============== 工具 ==============

def extract_org_from_url(url: str) -> str | None:
    """``https://gitcode.com/Cangjie-TPC/CangjieMagic`` → ``Cangjie-TPC``。
    
    搜索链接（``/search?q=...``）等非 owner/repo 形态返回 None。
    """
    m = re.match(r"https?://gitcode\.com/([^/]+)(?:/|$)", url or "")
    if not m:
        return None
    org = m.group(1)
    # 排除 search / api / - 等非真实 owner 路径
    if org in ("search", "api", "-", "explore", "about") or org.startswith("?"):
        return None
    # 排除含 query string 的（说明是搜索链接）
    if "?" in org or "=" in org:
        return None
    return org


def api_repo_to_project(api: dict, *, is_new: bool) -> dict:
    """把 API 响应转成 data.json project 条目（仅 API 字段，无 license/language）。"""
    out: dict = {}
    for api_key, data_key in API_FIELD_MAP.items():
        if api_key in api:
            out[data_key] = api[api_key]
    out["display_name"] = out.get("name")
    out["pull_requests"] = None
    out["license"] = None
    out["language"] = None
    out["topics"] = []
    out["is_new"] = is_new
    return out


def merge_counts(curated: dict, api: dict | None, existing: dict | None) -> dict:
    """合并：curated 字段（基础）+ API 字段（动态计数）+ existing 字段（保留静态）。

    - curated: 来自 gitcode-cangjie-projects.json，包含 source/category 等策展字段
    - api: 来自 org API，含 stars/forks/issues/updated_at（覆盖式）
    - existing: 上一次 data.json，含 license/language/topics/PRs（保留式）
    """
    out: dict = {}
    # 1) 先放 curated 基础字段
    out.update(curated)
    # 2) 再放 existing 里的保留字段（覆盖策展文件里没有的，比如 display_path）
    if existing:
        for k in PRESERVED_FIELDS:
            if k in existing:
                out[k] = existing[k]
    # 3) 最后覆盖 API 的动态字段
    if api:
        for api_key, data_key in API_FIELD_MAP.items():
            if api_key in api and api[api_key] is not None:
                out[data_key] = api[api_key]
    out["is_new"] = False
    return out


def recompute_activity(updated_at: str | None, snapshot_date: str) -> str | None:
    """根据 updated_at 重算活跃度。

    ≤180 天 → 活跃；181–365 → 维护中；366–730 → 低活跃；>730 → 沉寂。
    """
    if not updated_at:
        return None
    try:
        from datetime import date, datetime
        # 容错：截掉毫秒 + 时区
        ts = updated_at.replace("Z", "+08:00")
        # 处理 +08:00 形态
        d = datetime.fromisoformat(ts).date()
        snap = date.fromisoformat(snapshot_date)
        days = (snap - d).days
        if days <= 180:
            return "活跃"
        if days <= 365:
            return "维护中"
        if days <= 730:
            return "低活跃"
        return "沉寂"
    except (ValueError, TypeError):
        return None


# ============== 主流程 ==============

def run(args: argparse.Namespace) -> int:
    verbose = args.verbose
    input_path = Path(args.input)
    output_path = Path(args.output)
    limit = args.limit

    if not input_path.exists():
        print(f"输入文件不存在: {input_path}", file=sys.stderr)
        return 1

    # 1. 读 curated 列表
    with input_path.open(encoding="utf-8") as f:
        curated_data = json.load(f)
    curated_projects = curated_data.get("projects", [])
    if limit:
        curated_projects = curated_projects[:limit]
    if verbose:
        print(f"curated 项目数: {len(curated_projects)}", file=sys.stderr)

    # 2. 读既有 data.json
    existing_by_url: dict[str, dict] = {}
    if output_path.exists():
        try:
            with output_path.open(encoding="utf-8") as f:
                existing_data = json.load(f)
            for p in existing_data.get("projects", []):
                if p.get("url"):
                    existing_by_url[p["url"]] = p
            if verbose:
                print(f"既有 data.json 项目数: {len(existing_by_url)}", file=sys.stderr)
        except (ValueError, OSError) as e:
            print(f"既有 data.json 读取失败，将丢弃: {e}", file=sys.stderr)

    # 3. 提取 orgs
    orgs: set[str] = set()
    for p in curated_projects:
        org = extract_org_from_url(p.get("url", ""))
        if org:
            orgs.add(org)
    if verbose:
        print(f"将访问 org 数: {len(orgs)} → {sorted(orgs)}", file=sys.stderr)

    # 4. 抓取每个 org 的全部仓库
    client = gitcode.GitCodeClient()
    api_by_url: dict[str, dict] = {}
    for i, org in enumerate(sorted(orgs), 1):
        t0 = time.time()
        repos = client.fetch_org_repos_api(org)
        if verbose:
            print(
                f"[{i}/{len(orgs)}] {org}: 拉到 {len(repos)} 个仓库 "
                f"({time.time() - t0:.1f}s)",
                file=sys.stderr,
            )
        for r in repos:
            url = r.get("html_url")
            if url:
                api_by_url[url] = r

    # 5. 合并：curated 项目 + 新发现项目
    curated_urls = {p.get("url") for p in curated_projects if p.get("url")}
    output_projects: list[dict] = []

    # 5a) curated 项目
    missing_in_api: list[str] = []
    for p in curated_projects:
        url = p.get("url")
        api = api_by_url.get(url)
        if not api:
            missing_in_api.append(url or "(no url)")
        existing = existing_by_url.get(url, {})
        merged = merge_counts(p, api, existing)
        output_projects.append(merged)

    # 5b) 新发现项目（不在 curated 列表里）
    new_count = 0
    for url, api in api_by_url.items():
        if url in curated_urls:
            continue
        # 已在上一次 data.json 里被标过 is_new=true 的，沿用既有静态字段
        existing = existing_by_url.get(url, {})
        if existing:
            # 已知新项目：保留 license/language/PRs，刷新计数
            merged = merge_counts(existing, api, existing)
            merged["is_new"] = True
            output_projects.append(merged)
        else:
            # 全新发现
            output_projects.append(api_repo_to_project(api, is_new=True))
            new_count += 1

    if verbose:
        print(
            f"输出项目数: {len(output_projects)} "
            f"(curated={len(curated_projects)}, 已知新={len(api_by_url) - new_count - (len(curated_projects) - len(missing_in_api))}, "
            f"本次新发现={new_count}, curated 在 API 中缺失={len(missing_in_api)})",
            file=sys.stderr,
        )
        if missing_in_api:
            print(f"  缺失 URL 示例: {missing_in_api[:3]}", file=sys.stderr)

    # 6. 重算 activity（仅对有 updated_at 的项目）
    snapshot_date = time.strftime("%Y-%m-%d", time.gmtime())
    for p in output_projects:
        act = recompute_activity(p.get("updated_at"), snapshot_date)
        if act:
            p["activity"] = act

    # 7. 写 output
    out_data = {
        "schema_version": 1,
        "snapshot_date": snapshot_date,
        "title": "GitCode Cangjie ecosystem project snapshot (auto-refreshed)",
        "counts": {
            "curated": len(curated_projects),
            "total_records": len(output_projects),
            "new_since_last_run": new_count,
        },
        "projects": output_projects,
    }
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with output_path.open("w", encoding="utf-8") as f:
        json.dump(out_data, f, ensure_ascii=False, separators=(",", ":"))
    if verbose:
        print(f"已写入 {output_path}", file=sys.stderr)
    return 0
