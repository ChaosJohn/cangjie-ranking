# cangjie-ranking

> GitCode 上仓颉（Cangjie）编程语言生态项目的精选榜单与检索工具。
> 
> 数据快照会通过 GitHub Actions 自动更新：每日刷新已知项目指标，每周全量重爬发现新项目。

🌐 在线访问：<https://gitcode.com/ChaosJohn/cangjie-ranking> （注：根据 CNAME 配置）

## 文档

- [**实施方案与任务执行记录**](docs/IMPLEMENTATION.md) — 系统架构、7 个子任务的交付物与验证、关键 bug 修复、已知限制、部署指南
- [精选清单说明](awesome-cangjie.md) — 人工策展的 GitCode 仓颉三方库/工具/应用清单
- [全量索引](all-cangjie-projects.md) — 3,248 个仓颉项目的完整分类索引

## 快速开始

### 本地预览

```bash
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

### 手动跑数据更新

```bash
# 安装依赖
pip install -r scripts/requirements.txt

# 抓单个项目（验证连通性）
python scripts/scraper.py --mode test --url Cangjie-TPC/CangjieMagic

# 每日 refresh（更新 322 个 curated 项目的指标）
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

## 数据来源

- [Cangjie-TPC 组织](https://gitcode.com/cangjie-tpc)
- [Cangjie-SIG 组织](https://gitcode.com/cangjie-sig)
- [GitCode 仓颉频道](https://gitcode.com/?tn=68db866406fdf740df364584)

## License

数据文件遵循各原项目许可证；本仓库代码采用 MIT。
