"""仓颉生态榜单 - 数据抓取 CLI 入口。

用法:
  # 抓取单个项目（验证连通性）
  python scripts/scraper.py --mode test --url Cangjie-TPC/CangjieMagic

  # 轻量模式：刷新已知 352 项目（每日）
  python scripts/scraper.py --mode refresh \
      --input gitcode-cangjie-projects.json \
      --output data.json

  # 全量模式：a-z + 关键词 + 组织页重爬（每周）
  python scripts/scraper.py --mode full \
      --output gitcode-cangjie-all-projects.json \
      --merge-into data.json \
      --curated gitcode-cangjie-projects.json
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

# 让 ``python scripts/scraper.py`` 也能 import lib
sys.path.insert(0, str(Path(__file__).parent))

from lib import gitcode  # noqa: E402


def cmd_test(args: argparse.Namespace) -> int:
    """模式 test：抓单个项目页并打印解析结果。"""
    client = gitcode.GitCodeClient()
    target = args.url.strip().strip("/")
    if "/" not in target:
        print(f"--url 期望 owner/repo 形态，收到 {args.url!r}", file=sys.stderr)
        return 2
    owner, repo = target.split("/", 1)
    print(f"→ 抓取 {owner}/{repo} ...")
    data = client.fetch_project(owner, repo)
    if not data:
        print("抓取失败", file=sys.stderr)
        return 1
    print(json.dumps(data, ensure_ascii=False, indent=2))
    return 0


def cmd_refresh(args: argparse.Namespace) -> int:
    """模式 refresh：刷新已知项目指标（在任务 2 实现）。"""
    from lib import refresh  # 延迟导入，避免循环依赖
    return refresh.run(args)


def cmd_full(args: argparse.Namespace) -> int:
    """模式 full：全量重爬（在任务 3 实现）。"""
    from lib import recrawl
    return recrawl.run(args)


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        prog="scraper",
        description="GitCode 仓颉生态数据抓取",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    p.add_argument(
        "--mode",
        choices=["test", "refresh", "full"],
        required=True,
        help="运行模式",
    )
    p.add_argument(
        "--url",
        help="[test 模式] 要抓取的 owner/repo",
        default="",
    )
    p.add_argument("--input", help="[refresh 模式] 已知项目 JSON 输入路径")
    p.add_argument("--output", help="输出 JSON 路径")
    p.add_argument("--merge-into", help="[full 模式] 合并 is_new 后写入的目标文件")
    p.add_argument("--curated", help="[full 模式] curated 项目清单路径（用于判断 is_new）")
    p.add_argument("--limit", type=int, help="[refresh/full] 截断到 N 项，便于本地小样本调试")
    p.add_argument("--enrich-limit", type=int, help="[full 模式] 限制 HTML 补全的项目数，便于联调")
    p.add_argument("--archive-dir", help="[full 模式] 归档目录，默认 archive/")
    p.add_argument("--force-archive", action="store_true", help="[full 模式] 强制归档（忽略月初判断，用于测试/补归档）")
    p.add_argument("--letter", help="[full 模式] 仅跑指定字母，便于联调")
    p.add_argument("--verbose", "-v", action="store_true", help="详细输出")
    return p


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    handlers = {
        "test": cmd_test,
        "refresh": cmd_refresh,
        "full": cmd_full,
    }
    try:
        return handlers[args.mode](args)
    except ModuleNotFoundError as e:
        # refresh/full 在尚未实现的阶段会触发
        print(f"模块未实现：{e.name}（这是占位，会在后续任务中补全）", file=sys.stderr)
        return 2
    except KeyboardInterrupt:
        print("\n中断", file=sys.stderr)
        return 130


if __name__ == "__main__":
    sys.exit(main())
