"""rank_change.py - 排名变化基线快照与 ``rank_base`` 注入。

为 Top 排行 / 活跃度视图提供「日 / 周 / 月」三窗口排名变化数据：

1. 每次运行把当日精简快照（仅 url + 排名指标）写入
   ``archive/daily/YYYY-MM-DD.json``（同日覆写，幂等）
2. 按规则选三个基线快照：
   - ``day``：最近的早于今天的 daily 快照
   - ``week``：距今 6-13 天、最接近 7 天的 daily 快照
   - ``month``：距今 25-45 天、最接近 30 天的 daily 快照；
     无满足条件的 daily 时回退到月度归档 ``archive/YYYY-MM.json``
     （snapshot_date 距今 ≥25 天，取最新一份）
3. 把各窗口基线指标值注入每个项目的 ``rank_base`` 字段，
   顶层返回 ``rank_windows``（各窗口基线日期，无基线为 None）
4. 清理超过 ``RETENTION_DAYS`` 天的 daily 快照

设计说明：注入的是基线指标值而非预计算的排名位次。前端会按 is_new
过滤可见集合，排名需在可见集合上现算，才能与榜单展示的名次口径一致。
"""

from __future__ import annotations

import json
import re
import sys
import time
from datetime import date, timedelta
from pathlib import Path

# 参与排名的指标（与前端 Top 排行排序键对应）
RANK_METRICS = ("stars", "forks", "issues", "pull_requests")

# daily 快照滚动保留天数（需覆盖 month 窗口的 30 天基线）
RETENTION_DAYS = 45

# 窗口与基线年龄（天）的对应规则
_WEEK_AGE = (6, 13, 7)     # (最小, 最大, 目标)
_MONTH_AGE = (25, 45, 30)


def _today(snapshot_date: str | None) -> date:
    try:
        return date.fromisoformat(snapshot_date)
    except (ValueError, TypeError):
        return date.today()


def save_daily_snapshot(projects: list[dict], snapshot_date: str, daily_dir: Path) -> Path:
    """写当日精简快照（仅排名所需字段），同日覆写。返回路径。"""
    slim: list[dict] = []
    for p in projects:
        url = p.get("url")
        if not url:
            continue
        entry = {"url": url}
        for m in RANK_METRICS:
            entry[m] = p.get(m)
        slim.append(entry)
    daily_dir.mkdir(parents=True, exist_ok=True)
    path = daily_dir / f"{snapshot_date}.json"
    payload = {"snapshot_date": snapshot_date, "projects": slim}
    with path.open("w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, separators=(",", ":"))
    return path


def _iter_daily(daily_dir: Path):
    """yield (date, path)：`daily_dir` 下文件名合法的 daily 快照。"""
    if not daily_dir.is_dir():
        return
    for f in sorted(daily_dir.glob("*.json")):
        try:
            d = date.fromisoformat(f.stem)
        except ValueError:
            continue
        yield d, f


def _read_json(path: Path) -> dict | None:
    try:
        with path.open(encoding="utf-8") as f:
            return json.load(f)
    except (ValueError, OSError):
        return None


def _pick_by_age(cands: list[tuple[date, Path]], today: date,
                 lo: int, hi: int, target: int) -> tuple[Path, date] | None:
    """从候选中挑年龄落在 [lo, hi] 且最接近 target 天的快照。"""
    best = None
    for d, p in cands:
        age = (today - d).days
        if lo <= age <= hi:
            key = abs(age - target)
            if best is None or key < best[0]:
                best = (key, d, p)
    if best is None:
        return None
    return (best[2], best[1])


def _pick_month_archive(archive_dir: Path, today: date) -> tuple[Path, date] | None:
    """month 窗口回退：月度归档 archive/YYYY-MM.json 中取距今 ≥25 天的最新一份。"""
    if not archive_dir.is_dir():
        return None
    best = None
    for f in sorted(archive_dir.glob("*.json")):
        if not re.fullmatch(r"\d{4}-\d{2}", f.stem):
            continue  # 排除 daily 目录外的其他 json（daily 在子目录，不会匹配到）
        data = _read_json(f)
        snap = None
        if data:
            try:
                snap = date.fromisoformat(data.get("snapshot_date") or "")
            except ValueError:
                snap = None
        if snap is None:
            try:
                snap = date.fromisoformat(f"{f.stem}-01")
            except ValueError:
                continue
        if (today - snap).days >= 25 and (best is None or snap > best[1]):
            best = (f, snap)
    return best


def pick_baselines(daily_dir: Path, archive_dir: Path, today: date) -> dict:
    """选 day/week/month 基线。返回 {window: (path, date) | None}。"""
    cands = [(d, p) for d, p in _iter_daily(daily_dir) if d < today]
    out: dict[str, tuple[Path, date] | None] = {"day": None, "week": None, "month": None}
    if cands:
        d, p = max(cands, key=lambda x: x[0])  # day：最新一份历史快照
        out["day"] = (p, d)
        out["week"] = _pick_by_age(cands, today, *_WEEK_AGE)
        out["month"] = _pick_by_age(cands, today, *_MONTH_AGE)
    if out["month"] is None:
        out["month"] = _pick_month_archive(archive_dir, today)
    return out


def apply_rank_base(projects: list[dict], baselines: dict) -> dict:
    """把各窗口基线指标注入项目的 ``rank_base`` 字段。

    项目在某窗口基线中不存在 → 该窗口缺省（前端显示 NEW）。
    所有窗口都无基线 → 移除 rank_base（清掉上次运行的旧值）。

    返回 ``rank_windows``：{window: 基线日期字符串 | None}。
    """
    windows: dict[str, str | None] = {}
    maps: dict[str, dict[str, dict]] = {}
    for w, sel in baselines.items():
        if not sel:
            windows[w] = None
            continue
        path, d = sel
        data = _read_json(path)
        if not data:
            windows[w] = None
            continue
        windows[w] = data.get("snapshot_date") or d.isoformat()
        maps[w] = {
            p["url"]: p for p in data.get("projects", []) if p.get("url")
        }
    for proj in projects:
        url = proj.get("url")
        rb: dict[str, dict] = {}
        for w, m in maps.items():
            entry = m.get(url)
            if entry:
                rb[w] = {k: entry.get(k) for k in RANK_METRICS}
        if rb:
            proj["rank_base"] = rb
        else:
            proj.pop("rank_base", None)
    return windows


def prune_daily(daily_dir: Path, today: date) -> int:
    """删除超过 RETENTION_DAYS 天的 daily 快照，返回删除数。"""
    removed = 0
    for d, p in _iter_daily(daily_dir):
        if (today - d).days > RETENTION_DAYS:
            p.unlink()
            removed += 1
    return removed


def enrich(projects: list[dict], snapshot_date: str,
           archive_dir: Path | str, *, verbose: bool = False) -> dict:
    """主入口：存当日快照 → 选基线 → 注入 rank_base → 清理旧快照。

    返回 ``rank_windows``（供写入 data.json 顶层）。
    """
    archive_dir = Path(archive_dir)
    daily_dir = archive_dir / "daily"
    today = _today(snapshot_date)

    snap_path = save_daily_snapshot(projects, snapshot_date, daily_dir)
    baselines = pick_baselines(daily_dir, archive_dir, today)
    windows = apply_rank_base(projects, baselines)
    removed = prune_daily(daily_dir, today)

    if verbose:
        picked = {w: f"{sel[0].name}@{sel[1]}" if sel else None
                  for w, sel in baselines.items()}
        print(
            f"[rank_change] 快照 {snap_path} · 基线 {picked} · 清理旧快照 {removed} 份",
            file=sys.stderr,
        )
    return windows


# ============== 独立 CLI（离线回填/测试用） ==============

def main(argv: list[str] | None = None) -> int:
    import argparse
    p = argparse.ArgumentParser(
        prog="rank_change",
        description="对既有 data.json 离线注入 rank_base（不抓网络）",
    )
    p.add_argument("--data", default="data.json", help="data.json 路径")
    p.add_argument("--archive-dir", default="archive", help="归档目录")
    p.add_argument("--verbose", "-v", action="store_true")
    args = p.parse_args(argv)

    data_path = Path(args.data)
    with data_path.open(encoding="utf-8") as f:
        data = json.load(f)
    snapshot_date = data.get("snapshot_date") or time.strftime("%Y-%m-%d", time.gmtime())
    windows = enrich(data.get("projects", []), snapshot_date,
                     Path(args.archive_dir), verbose=args.verbose)
    data["rank_windows"] = windows
    with data_path.open("w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, separators=(",", ":"))
    print(f"OK: rank_windows={windows} → {data_path}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
