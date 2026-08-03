"""recrawl 模式 - 每周全量重爬。

输入：
  --curated gitcode-cangjie-projects.json  # 352 curated 项目清单
  --merge-into data.json                   # 上一次的 web 数据（保留静态字段）
输出：
  --output gitcode-cangjie-all-projects.json  # 全量快照（所有 org 的全部仓库）
  --merge-into data.json                       # 覆写：refresh + 新项目 HTML 补全

流程：
1-5. 复用 refresh 逻辑：load curated → derive orgs → fetch org APIs → merge
6.   新项目 HTML 补全：is_new=true 且无 license 的，逐个抓 HTML 详情页，
     补 license/language/topics/PRs/description（仅静态字段，计数仍以 API 为准）
7.   写全量快照（args.output，scope 反映 org API 方法论）
8.   写 data.json（args.merge_into）
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from pathlib import Path

from . import gitcode, refresh
from . import archive as archive_mod


def parse_owner_repo(url: str) -> tuple[str | None, str | None]:
    """``https://gitcode.com/Cangjie-TPC/CangjieMagic`` → ``("Cangjie-TPC", "CangjieMagic")``。"""
    m = re.match(r"https?://gitcode\.com/([^/]+)/([^/?#]+)", url or "")
    return (m.group(1), m.group(2)) if m else (None, None)


# ============== HTML 补全 ==============

# HTML 详情页能补的字段（仅静态；计数仍以 API 为准）
ENRICH_FIELDS = ["license", "language", "topics", "description", "pull_requests"]


def enrich_projects(
    client: gitcode.GitCodeClient,
    projects: list[dict],
    enrich_limit: int | None = None,
    verbose: bool = False,
) -> tuple[int, int]:
    """对尚未补全（``enriched != true``）的项目抓 HTML 详情页补全静态字段。

    早期版本只对 ``is_new=true`` 且无 license 的项目补全；为支持 G-Star 等徽章，
    现已拓宽为「任何未补全过的项目」都抓一次 HTML。``enriched=True`` 标记
    避免每周重复抓取（已尝试过一次即标记，即使 license/topics 仍为空）。

    首次拓宽后跑一次会抓取所有 curated 项目（约 322 个 × 1.5s 退避 ≈ 8 分钟），
    后续每周仅新发现的项目需要补全。

    返回 (成功补全数, 失败/跳过数)。
    """
    to_enrich = [
        p for p in projects
        if p.get("enriched") is not True
    ]
    if enrich_limit is not None:
        to_enrich = to_enrich[:enrich_limit]

    succeeded = 0
    failed = 0
    for i, p in enumerate(to_enrich, 1):
        url = p.get("url", "")
        owner, repo = parse_owner_repo(url)
        if not owner or not repo:
            p["enriched"] = True  # URL 无法解析，永久跳过
            failed += 1
            continue
        if verbose:
            print(f"  [{i}/{len(to_enrich)}] HTML 抓取: {owner}/{repo}", file=sys.stderr)
        detail = client.fetch_project(owner, repo)
        if not detail or detail.get("_error"):
            # 失败不标 enriched，下周重试
            failed += 1
            if verbose and detail:
                print(f"    失败: {detail.get('_error')}", file=sys.stderr)
            continue
        # 仅覆盖静态字段
        for k in ENRICH_FIELDS:
            v = detail.get(k)
            if v:
                p[k] = v
        p["enriched"] = True  # 标记已尝试，无论是否拿到 license
        succeeded += 1

    return succeeded, failed


# ============== G-Star 派生 ==============

def derive_g_star(projects: list[dict]) -> int:
    """从 ``topics`` 字段派生 ``g_star`` 布尔值。

    GitCode json-ld 的 ``keywords`` 中若含 "G-Star项目" 等 topic，HTML 解析会
    写入 ``topics`` 列表。这里扫描是否含有以 "G-Star" 开头的 topic（兼容
    "G-Star项目" / "G-Star" / "G-Star 项目" 等变体）。

    返回标记为 G-Star 的项目数。
    """
    count = 0
    for p in projects:
        topics = p.get("topics") or []
        is_g_star = any(
            isinstance(t, str) and t.startswith("G-Star")
            for t in topics
        )
        p["g_star"] = is_g_star
        if is_g_star:
            count += 1
    return count


# ============== 全量快照写入 ==============

def write_full_snapshot(path: Path, api_repos: list[dict], orgs: list[str], snapshot_date: str) -> None:
    """写 gitcode-cangjie-all-projects.json 全量快照。"""
    # 规整字段：API 原始字段 + 简化的 owner/repo
    projects = []
    for r in api_repos:
        url = r.get("html_url", "")
        owner, repo = parse_owner_repo(url)
        if not owner:
            continue
        projects.append({
            "name": r.get("name"),
            "owner": owner,
            "repo": repo,
            "url": url,
            "description": r.get("description"),
            "stars": r.get("stargazers_count"),
            "forks": r.get("forks_count"),
            "issues": r.get("open_issues_count"),
            "pushed_at": r.get("pushed_at"),
            "updated_at": r.get("updated_at"),
            "created_at": r.get("created_at"),
            "default_branch": r.get("default_branch"),
            "private": r.get("private"),
            "fork": r.get("fork"),
            "project_creator": r.get("project_creator"),
        })

    out = {
        "schema_version": 2,
        "snapshot_date": snapshot_date,
        "scope": {
            "platform": "GitCode",
            "approach": "org_repos_api",
            "api_endpoint": "/api/v5/orgs/{org}/repos?per_page=100&page=N",
            "focus_organizations": orgs,
            "dedupe_key": "html_url",
            "interpretation": "全量 = 本轮扫描的所有 org 的全部仓库并集（按 html_url 去重）",
            "limitations": [
                "仅扫描 curated 列表里出现过的 org；新 org 不会被自动发现",
                "GitCode 搜索 API 需 private-token；未配置 GITCODE_TOKEN 时不发现新 org 下的项目",
            ],
        },
        "collection": {
            "orgs_scanned": len(orgs),
            "total_repos_returned": len(api_repos),
            "unique_repos": len(projects),
        },
        "projects": projects,
    }
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, separators=(",", ":"))


def write_data_json(path: Path, projects: list[dict], snapshot_date: str, curated_count: int, new_count: int) -> None:
    """写 data.json（与 refresh 模式输出格式一致）。"""
    out = {
        "schema_version": 1,
        "snapshot_date": snapshot_date,
        "title": "GitCode Cangjie ecosystem project snapshot (weekly recrawl)",
        "counts": {
            "curated": curated_count,
            "total_records": len(projects),
            "new_since_last_run": new_count,
        },
        "projects": projects,
    }
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, separators=(",", ":"))


# ============== 主流程 ==============

def run(args: argparse.Namespace) -> int:
    verbose = args.verbose
    curated_path = Path(args.curated)
    merge_into_path = Path(args.merge_into) if args.merge_into else None
    output_path = Path(args.output)
    enrich_limit = args.enrich_limit

    if not curated_path.exists():
        print(f"curated 文件不存在: {curated_path}", file=sys.stderr)
        return 1

    # 1. 读 curated 列表
    with curated_path.open(encoding="utf-8") as f:
        curated_data = json.load(f)
    curated_projects = curated_data.get("projects", [])
    if args.limit:
        curated_projects = curated_projects[: args.limit]
    if verbose:
        print(f"curated 项目数: {len(curated_projects)}", file=sys.stderr)

    # 2. 读既有 data.json
    existing_by_url: dict[str, dict] = {}
    if merge_into_path and merge_into_path.exists():
        try:
            with merge_into_path.open(encoding="utf-8") as f:
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
        org = refresh.extract_org_from_url(p.get("url", ""))
        if org:
            orgs.add(org)
    sorted_orgs = sorted(orgs)
    if verbose:
        print(f"将访问 org 数: {len(orgs)} → {sorted_orgs}", file=sys.stderr)

    # 4. 抓取每个 org 的全部仓库
    client = gitcode.GitCodeClient()
    api_repos_list: list[dict] = []
    api_by_url: dict[str, dict] = {}
    for i, org in enumerate(sorted_orgs, 1):
        t0 = time.time()
        repos = client.fetch_org_repos_api(org)
        if verbose:
            print(
                f"[{i}/{len(sorted_orgs)}] {org}: 拉到 {len(repos)} 个仓库 "
                f"({time.time() - t0:.1f}s)",
                file=sys.stderr,
            )
        api_repos_list.extend(repos)
        for r in repos:
            url = r.get("html_url")
            if url:
                api_by_url[url] = r

    # 5. 合并：curated + existing + API
    curated_urls = {p.get("url") for p in curated_projects if p.get("url")}
    output_projects: list[dict] = []
    missing_in_api: list[str] = []

    for p in curated_projects:
        url = p.get("url")
        api = api_by_url.get(url)
        if not api:
            missing_in_api.append(url or "(no url)")
        existing = existing_by_url.get(url, {})
        merged = refresh.merge_counts(p, api, existing)
        output_projects.append(merged)

    new_count = 0
    for url, api in api_by_url.items():
        if url in curated_urls:
            continue
        existing = existing_by_url.get(url, {})
        if existing:
            # 已知新项目：保留旧 license/language/PRs/enriched，刷新计数；不重复补全
            merged = refresh.merge_counts(existing, api, existing)
            merged["is_new"] = True
            output_projects.append(merged)
        else:
            # 本次新发现：加入待补全队列
            new_proj = refresh.api_repo_to_project(api, is_new=True)
            output_projects.append(new_proj)
            new_count += 1

    if verbose:
        print(
            f"合并后项目数: {len(output_projects)} "
            f"(curated={len(curated_projects)}, 本次新发现={new_count}, "
            f"已知新={len(output_projects) - len(curated_projects) - new_count}, "
            f"curated 在 API 中缺失={len(missing_in_api)})",
            file=sys.stderr,
        )

    # 6. HTML 补全（recrawl 独有步骤）
    #    对所有 enriched != true 的项目（含 curated + is_new）抓 HTML 详情页，
    #    补 license/language/topics/PRs/description 静态字段。
    #    enriched=True 标记避免每周重复抓取。
    if enrich_limit is None or enrich_limit > 0:
        # 统计待补数（在 enrich 函数内做实际筛选，这里只用于日志）
        to_enrich_count = sum(
            1 for p in output_projects
            if p.get("enriched") is not True
        )
        if verbose:
            print(
                f"开始 HTML 补全（{to_enrich_count} 个待抓，"
                f"上限 {enrich_limit if enrich_limit is not None else '不限'}）…",
                file=sys.stderr,
            )
        succeeded, failed = enrich_projects(
            client, output_projects, enrich_limit=enrich_limit, verbose=verbose
        )
        if verbose:
            print(f"HTML 补全完成: 成功 {succeeded} 个，失败/跳过 {failed} 个", file=sys.stderr)

    # 7. 派生 g_star（基于 topics 中是否含 "G-Star" 前缀 topic）
    g_star_count = derive_g_star(output_projects)
    if verbose:
        print(f"G-Star 项目数: {g_star_count}", file=sys.stderr)

    # 8. 重算 activity
    snapshot_date = time.strftime("%Y-%m-%d", time.gmtime())
    for p in output_projects:
        act = refresh.recompute_activity(p.get("updated_at"), snapshot_date)
        if act:
            p["activity"] = act

    # 9. 写全量快照
    write_full_snapshot(output_path, api_repos_list, sorted_orgs, snapshot_date)
    if verbose:
        print(f"已写入全量快照: {output_path}", file=sys.stderr)

    # 10. 写 data.json
    if merge_into_path:
        write_data_json(merge_into_path, output_projects, snapshot_date,
                        curated_count=len(curated_projects), new_count=new_count)
        if verbose:
            print(f"已写入 data.json: {merge_into_path}", file=sys.stderr)

        # 11. 月度归档（月初且本月未归档时触发）
        archive_dir = Path(args.archive_dir) if args.archive_dir else Path("archive")
        archive_mod.archive_if_needed(
            merge_into_path, archive_dir, force=args.force_archive, verbose=verbose,
        )

    return 0
