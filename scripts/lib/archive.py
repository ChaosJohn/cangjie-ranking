"""archive.py - 月度归档 data.json 到 ``archive/YYYY-MM.json``。

策略（"覆写 + 月度归档"）：
- ``data.json`` 每次跑都覆写（最新状态由 git log 提供版本历史）
- 每月第一次跑（mday ≤ 7）时，把当前 ``data.json`` 复制到
  ``archive/YYYY-MM.json``，**永不覆写**（保证月度快照不可变）
- 已存在的月度文件跳过，避免重复覆盖

可作为独立脚本运行：
  python scripts/lib/archive.py --data data.json --archive-dir archive/
  python scripts/lib/archive.py --data data.json --archive-dir archive/ --force
"""

from __future__ import annotations

import argparse
import shutil
import sys
import time
from pathlib import Path


def should_archive(now: time.struct_time | None = None) -> bool:
    """是否应该归档：每月第 1-7 天（第一周）。"""
    now = now or time.gmtime()
    return now.tm_mday <= 7


def archive_filename(now: time.struct_time | None = None) -> str:
    """归档文件名，例如 ``2026-07.json``。"""
    now = now or time.gmtime()
    return f"{now.tm_year}-{now.tm_mon:02d}.json"


def archive_path(archive_dir: Path | str, now: time.struct_time | None = None) -> Path:
    """归档目标路径 ``archive_dir/YYYY-MM.json``。"""
    return Path(archive_dir) / archive_filename(now)


def archive_if_needed(
    data_path: Path | str,
    archive_dir: Path | str,
    *,
    force: bool = False,
    now: time.struct_time | None = None,
    verbose: bool = False,
) -> tuple[bool, str]:
    """如果是月初且本月未归档，则把 ``data_path`` 复制到 ``archive_dir/YYYY-MM.json``。

    返回 ``(是否归档, 原因)``。原因用于日志/输出：
      - ``archived``：本次执行了归档
      - ``skipped_not_month_start``：非月初且未指定 force
      - ``skipped_exists``：本月已归档过
      - ``skipped_no_source``：源文件不存在
    """
    now = now or time.gmtime()
    src = Path(data_path)
    dst_dir = Path(archive_dir)

    if not force and not should_archive(now):
        msg = f"skipped_not_month_start (mday={now.tm_mday} > 7, use --force to override)"
        if verbose:
            print(f"[archive] {msg}", file=sys.stderr)
        return False, msg

    if not src.exists():
        msg = f"skipped_no_source ({src} 不存在)"
        if verbose:
            print(f"[archive] {msg}", file=sys.stderr)
        return False, msg

    dst = archive_path(dst_dir, now)
    if dst.exists():
        msg = f"skipped_exists ({dst} 已存在，本月已归档)"
        if verbose:
            print(f"[archive] {msg}", file=sys.stderr)
        return False, msg

    dst_dir.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dst)
    msg = f"archived ({src} → {dst})"
    if verbose:
        print(f"[archive] {msg}", file=sys.stderr)
    return True, msg


# ============== 独立 CLI ==============

def main(argv: list[str] | None = None) -> int:
    p = argparse.ArgumentParser(
        prog="archive",
        description="月度归档 data.json 到 archive/YYYY-MM.json",
    )
    p.add_argument("--data", default="data.json", help="源数据文件路径（默认 data.json）")
    p.add_argument("--archive-dir", default="archive", help="归档目录（默认 archive/）")
    p.add_argument("--force", action="store_true", help="强制归档（忽略月初判断，用于测试/补归档）")
    p.add_argument("--verbose", "-v", action="store_true", help="详细输出")
    args = p.parse_args(argv)

    ok, msg = archive_if_needed(
        args.data, args.archive_dir, force=args.force, verbose=args.verbose,
    )
    print(f"{'OK' if ok else 'SKIP'}: {msg}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
