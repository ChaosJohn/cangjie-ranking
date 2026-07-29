# 使用文档

> 本仓库的数据抓取、本地预览与自动更新机制的说明。榜单本身的实施记录见 [IMPLEMENTATION.md](./IMPLEMENTATION.md)。

## Data & Documentation

- [**实施方案与任务执行记录**](./IMPLEMENTATION.md) — 系统架构、7 个子任务的交付物与验证、关键 bug 修复、已知限制、部署指南
- [精选清单说明](../awesome-cangjie.md) — 人工策展的 GitCode 仓颉三方库/工具/应用清单
- [全量索引](../all-cangjie-projects.md) — 3,248 个仓颉项目的完整分类索引
- [机器可读全量数据](../gitcode-cangjie-all-projects.json) — 每周覆写的全量快照
- [精选原始快照](../gitcode-cangjie-projects.json) — 人工策展的 curated 项目清单

## 快速开始

### 本地预览

```bash
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

### Manual Data Update

```bash
# 安装依赖
pip install -r scripts/requirements.txt

# 抓单个项目（验证连通性）
python scripts/scraper.py --mode test --url Cangjie-TPC/CangjieMagic

# 每日 refresh（更新 curated 项目的指标）
python scripts/scraper.py --mode refresh \
  --input gitcode-cangjie-projects.json \
  --output data.json --verbose

# 每周 recrawl（全量重爬 + 新项目 HTML 补全 + 月度归档）
python scripts/scraper.py --mode full \
  --curated gitcode-cangjie-projects.json \
  --merge-into data.json \
  --output gitcode-cangjie-all-projects.json \
  --archive-dir archive --verbose
```

## Data Update Mechanism

榜单通过 GitHub Actions 自动维护，README 中的 Top Stars / Top Forks / 分类统计会随 `data.json` 一并更新（由 [`scripts/lib/readme_gen.py`](../scripts/lib/readme_gen.py) 生成）。

| 模式 | 触发 | 数据源 | 输出 |
|---|---|---|---|
| refresh（每日） | `cron 0 2 * * *` | 组织 API（匿名） | `data.json` 覆写 + README 榜单刷新 |
| recrawl（每周） | `cron 0 3 * * 1` | 组织 API + 新项目 HTML 详情页 | `data.json` + 全量快照 + 月度归档 + README 榜单刷新 |
