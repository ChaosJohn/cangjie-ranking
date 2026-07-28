# 仓颉生态榜单 - 实施记录

> 本文档记录「定时更新排行榜 + 持久化」系统的设计方案与 7 个子任务的执行情况。
> 
> 完成日期：2026-07-29
> 仓库：`ChaosJohn/cangjie-ranking`

## 目录

- [一、执行方案](#一执行方案)
  - [1.1 需求确认](#11-需求确认)
  - [1.2 系统架构](#12-系统架构)
  - [1.3 数据源与字段映射](#13-数据源与字段映射)
  - [1.4 持久化策略](#14-持久化策略)
  - [1.5 调度方案](#15-调度方案)
  - [1.6 风险与降级](#16-风险与降级)
- [二、执行任务表](#二执行任务表)
  - [任务 1：scripts/ 骨架 + gitcode.py 抓取封装](#任务-1scripts-骨架--gitcodepy-抓取封装)
  - [任务 2：refresh 模式](#任务-2refresh-模式)
  - [任务 3：recrawl 模式](#任务-3recrawl-模式)
  - [任务 4：merge.py + is_new 标记 + archive.py 月度归档](#任务-4mergepy--is_new-标记--archivepy-月度归档)
  - [任务 5：GitHub Actions workflows](#任务-5github-actions-workflows)
  - [任务 6：Web UI: is_new badge + 过滤开关](#任务-6web-ui-is_new-badge--过滤开关)
  - [任务 7：端到端联调测试](#任务-7端到端联调测试)
- [三、关键 bug 修复](#三关键-bug-修复)
- [四、已知限制](#四已知限制)
- [五、部署后必做](#五部署后必做)

---

## 一、执行方案

### 1.1 需求确认

通过 4 轮单选问答与用户确认以下需求边界：

| 维度 | 用户确认答案 |
|---|---|
| 爬取脚本现状 | 需要从零写爬取器 |
| 每次更新的范围 | 两者都要（轻量刷新 + 全量重爬） |
| 两个模式的频率 | 中频：每天 + 每周 |
| 新发现项目处理 | 自动进榜 + 标记隐藏（默认不显示，UI 有开关） |
| 持久化形态 | 覆写 + 月度归档（archive/YYYY-MM.json） |

附加约束：仓库已确认为 `ChaosJohn/cangjie-ranking`，公开仓库，主分支 `main`，GitHub Pages 已启用。

### 1.2 系统架构

```
cangjie-ranking/
├── scripts/                          # Python 抓取器
│   ├── scraper.py                    # CLI 入口：--mode test/refresh/full
│   ├── requirements.txt              # requests, beautifulsoup4, lxml
│   └── lib/
│       ├── gitcode.py                # GitCodeClient + HTML/API 解析
│       ├── refresh.py                # 每日 refresh 逻辑
│       ├── recrawl.py                # 每周 recrawl + HTML 补全
│       └── archive.py                # 月度归档
├── .github/workflows/
│   ├── daily-refresh.yml             # cron 0 2 * * *
│   └── weekly-recrawl.yml            # cron 0 3 * * 1
├── index.html / main.js / style.css  # 静态站点（GitHub Pages）
├── data.json                         # 站点数据（每次覆写，git log 提供历史）
├── gitcode-cangjie-projects.json     # 322 curated 项目清单（人工策展源）
├── gitcode-cangjie-all-projects.json # 全量快照（每周覆写）
├── archive/YYYY-MM.json              # 月度归档（不覆写）
├── awesome-cangjie.md                # 人工策展清单（继续手工维护）
└── all-cangjie-projects.md           # 全量索引（人工辅助）
```

**双模式设计**

| 模式 | 触发 | 数据源 | 输出 | 耗时 |
|---|---|---|---|---|
| refresh（每日） | cron 0 2 * * * | org API（匿名） | data.json 覆写 | ~48s |
| recrawl（每周） | cron 0 3 * * 1 | org API + 新项目 HTML 详情页 | data.json + all-projects.json + 月度归档 | ~2 分钟 |

### 1.3 数据源与字段映射

**关键发现**：GitCode 有公开 API（无需 token）

| Endpoint | 鉴权 | 返回 |
|---|---|---|
| `/api/v5/orgs/{org}/repos?per_page=100&page=N` | **匿名** ✅ | name/path/stars/forks/issues/pushed_at/updated_at/description |
| `/api/v5/repos/{owner}/{repo}` | 需 private-token | 含 license/language/topics |
| `/api/v5/search/repositories?q=...` | 需 private-token | 搜索结果 |
| 项目页 HTML json-ld | 匿名 | license/language/topics/PRs/description/updated_at |

**字段映射策略**：

| 字段 | 来源 | 频率 |
|---|---|---|
| stars / forks / issues / updated_at | org API（每日 refresh） | 高 |
| license / language / description / topics | HTML 详情页（仅新项目一次） | 静态 |
| name / path / html_url | org API | 高 |
| PRs | HTML 详情页（仅新项目一次） | 静态 |

**关键设计**：API 的 `pushed_at`（最后代码推送时间）映射到 data.json 的 `updated_at`，与 HTML json-ld 的 `dateModified` 语义一致，而非 API 的 `updated_at`（仓库元数据更新时间）。

### 1.4 持久化策略

| 文件 | 行为 | 历史来源 |
|---|---|---|
| `data.json` | 每次覆写，commit 到 main | git log |
| `archive/YYYY-MM.json` | 月度新增，永不覆写 | 文件名 + git log |
| `gitcode-cangjie-all-projects.json` | 每周覆写 | git log |
| `gitcode-cangjie-projects.json` | 人工策展 | git log |

**月度归档触发条件**：
- 当前是月初（mday ≤ 7）的每周一跑 recrawl 时
- `--force-archive` 强制触发（用于测试/补归档）
- 已存在的 archive 文件跳过（永不覆盖）

### 1.5 调度方案

| Workflow | 触发器 | 频率 | timeout |
|---|---|---|---|
| `daily-refresh.yml` | schedule + workflow_dispatch + push(curated) | 每天 02:00 UTC（北京 10:00） | 15 min |
| `weekly-recrawl.yml` | schedule + workflow_dispatch（带 enrich_limit/force_archive 输入） | 周一 03:00 UTC（北京 11:00） | 30 min |

**关键步骤**：checkout → setup-python 3.11 → pip install → run scraper → git diff → 若有变化 commit + push（用 `github-actions[bot]` 身份）→ Pages 自动重建。

### 1.6 风险与降级

| 风险 | 降级方案 |
|---|---|
| GitCode 限流 GitHub Actions IP | 切到 self-hosted runner 或外部 CI |
| 全量重爬超 30 分钟 | 用 `--enrich-limit` 限制 HTML 抓取数 |
| 月度归档失败 | 失败不阻塞主流程，下次跑会补 |
| 匿名 token 被风控 | 用户加 `GITCODE_TOKEN` Secret，scraper 自动走 token 路径（搜索 API 可用） |

---

## 二、执行任务表

| # | 任务 | 状态 | 优先级 |
|---|---|---|---|
| 1 | scripts/ 骨架 + lib/gitcode.py 抓取封装 + requirements.txt | ✅ 完成 | high |
| 2 | refresh 模式：lib/refresh.py + scraper.py --mode refresh | ✅ 完成 | high |
| 3 | recrawl 模式：lib/recrawl.py + scraper.py --mode full | ✅ 完成 | high |
| 4 | merge.py + is_new 标记 + archive.py 月度归档 | ✅ 完成 | high |
| 5 | GitHub Actions workflows: daily-refresh.yml + weekly-recrawl.yml | ✅ 完成 | high |
| 6 | Web UI: is_new badge + 过滤开关 (main.js + style.css + index.html) | ✅ 完成 | high |
| 7 | 端到端联调测试 | ✅ 完成 | medium |

### 任务 1：scripts/ 骨架 + gitcode.py 抓取封装

**交付物**：
- `scripts/requirements.txt`：requests + beautifulsoup4 + lxml
- `scripts/scraper.py`：CLI 入口，支持 `--mode test/refresh/full` + `--limit` + `--enrich-limit` + `--archive-dir` + `--force-archive` + `--verbose`
- `scripts/lib/__init__.py`：包标记
- `scripts/lib/gitcode.py`：`GitCodeClient` dataclass + 3 个纯解析函数
- `scripts/lib/refresh.py` + `recrawl.py`：占位 stub

**关键设计**：
- `GitCodeClient` 支持匿名 + 可选 `GITCODE_TOKEN`（环境变量自动读取）
- `backoff=1.5s + jitter=0.4s` 域间退避；429/5xx 指数退避重试 3 次
- 解析函数 `parse_project_page` / `parse_search_page` / `parse_org_page` 是纯函数
- `fetch_org_repos_api(org, per_page=100)`：分页拉满组织所有仓库

**验证**：`--mode test --url Cangjie-TPC/CangjieMagic` 抓取并解析成功，所有字段对齐既有 data.json。

### 任务 2：refresh 模式

**交付物**：
- `scripts/lib/refresh.py` 完整实现
- `scripts/lib/gitcode.py` 加 `fetch_org_repos_api` 方法

**关键设计**：
- 三层合并：curated（策展基础字段）→ existing data.json（保留 license/language/topics/PRs）→ API（覆盖动态计数）
- API 字段映射：`stargazers_count`→`stars`、`forks_count`→`forks`、`open_issues_count`→`issues`、`pushed_at`→`updated_at`
- 活跃度重算：基于 `updated_at` 与 `snapshot_date` 的天数差
- 新项目自动加入 data.json，`is_new=true`，无 license/language（等 weekly recrawl 补）

**验证**：
- `--limit 5` 跑 Cangjie-TPC：5 curated + 164 新发现 = 169 项
- CangjieMagic 全字段对比正确（stars 716→715 自然变化，license/language 保留）
- 全量 19 orgs 估算 ~1.5 分钟，~42 个 HTTP 请求（vs 原方案 352 → 8x ↓）

### 任务 3：recrawl 模式

**交付物**：
- `scripts/lib/recrawl.py` 完整实现
- `scripts/lib/gitcode.py` 的 `parse_project_page` 加 `topics` 提取（来自 json-ld `keywords`）
- `scripts/scraper.py` 加 `--enrich-limit` 参数

**关键设计**：
- recrawl = refresh 逻辑 + 新项目 HTML 补全 + 写两个文件
- HTML 补全：仅覆盖 `license/language/topics/PRs/description` 五个静态字段，不动 stars/forks/issues/updated_at
- 幂等性保证：只补 `is_new=true 且 license=None 且 enriched≠true` 的项目
- 全量快照 `gitcode-cangjie-all-projects.json` 含 `scope.approach=org_repos_api` 方法论说明

**验证**：
- `--limit 5 --enrich-limit 3`：3 个新项目 HTML 补全成功，cbc-engine/cjc-hotfix-plugin 拿到 language=C++ 和 topics
- 两次跑验证幂等性：第二次跑不重复补已 enriched 的项目

### 任务 4：archive.py 月度归档

**交付物**：
- `scripts/lib/archive.py`：纯函数模块 + 独立 CLI 入口
- `scripts/lib/recrawl.py` 集成归档调用
- `scripts/scraper.py` 加 `--archive-dir` 和 `--force-archive` 参数

**核心策略**：
- `data.json` 每次覆写（最新状态由 git log 提供版本历史）
- `archive/YYYY-MM.json` 月度新增，永不覆写
- 已存在的月度文件跳过

**触发条件矩阵**：

| 触发条件 | 行为 | 原因 |
|---|---|---|
| 非月初（mday > 7）且未 --force | SKIP | `skipped_not_month_start` |
| 月初（mday ≤ 7）且文件不存在 | 归档 | `archived` |
| 月初但文件已存在 | SKIP | `skipped_exists` |
| 源 data.json 不存在 | SKIP | `skipped_no_source` |
| `--force-archive` + 文件不存在 | 归档 | `archived` |
| `--force-archive` + 文件已存在 | SKIP | `skipped_exists` |

**验证**：7 个测试场景全过（独立 CLI 4 个 + 集成到 recrawl 3 个 + should_archive 单元逻辑）

### 任务 5：GitHub Actions workflows

**交付物**：
- `.github/workflows/daily-refresh.yml`
- `.github/workflows/weekly-recrawl.yml`

**共享字段**：
- `permissions: contents: write`（让 GITHUB_TOKEN 能 push）
- `concurrency.group` 各自独立，`cancel-in-progress: false`
- `actions/checkout@v4` + `fetch-depth: 1`（浅克隆）
- `actions/setup-python@v5` + `cache: pip`（缓存依赖）
- `GITCODE_TOKEN: ${{ secrets.GITCODE_TOKEN }}`（可选注入）
- commit identity: `github-actions[bot]`
- commit/push step 有 `if: steps.diff.outputs.changed == 'true'` 守护

**验证**：YAML 语法 + 关键字段 PyYAML 严格解析通过。

### 任务 6：Web UI: is_new badge + 过滤开关

**交付物**：
- `index.html`：tabs 改 `.tabs-bar` 容器，旁边加全局「显示新项目」复选框 + 隐藏的新项目计数 badge
- `style.css`：新增 `--new-badge-bg` 变量；`.tabs-bar` 布局；`.global-toggle` 样式；`.badge.is-new` 红底白字
- `main.js`：`state.showNew` 全局开关；`state.filters.newOnly` 搜索专用；`isHiddenNew(p)` 工具函数；4 个视图的渲染函数都加 `if (isHiddenNew(p)) continue`；`rankItem` / `projectCard` 都加红色「新」badge

**两层过滤设计**：

| 层级 | 触发位置 | 行为 |
|---|---|---|
| 全局开关 | tabs 旁「显示新项目」checkbox | 默认 off → 所有视图都隐藏 is_new=true 项目；on → 全部显示 |
| 搜索专用 | 搜索视图里「仅看新项目」checkbox | 默认 off；on → 只看 is_new=true 项目 |

**验证**：jsdom 注入 5 个 is_new=true 项目测试全过（默认隐藏、勾选显示、仅看新项目、取消复原）。

### 任务 7：端到端联调测试

**测试流程**：refresh 全量 → recrawl + archive → jsdom 验证 web

**关键发现 2 个 bug 并修复**（详见第三节）：
- `extract_org_from_url` 把搜索链接当 org
- recrawl 只补「本次新发现」项目，已 refresh 过的新项目永远缺 license

**端到端结果**：

| Step | 命令 | 结果 |
|---|---|---|
| 1. refresh | `scraper.py --mode refresh --input curated --output data.json` | 793 项（322 curated + 471 新发现），48s |
| 2. recrawl | `scraper.py --mode full --enrich-limit 3 --force-archive` | HTML 补全 3 个，归档 2026-07.json |
| 3. recrawl 二跑 | 同上 | 跳过已 enriched 的，补 3 个新的；archive 跳过 ✓ 幂等 |

**Web 端 jsdom 验证**：

| 检查项 | 结果 |
|---|---|
| snapshot_date 显示 | 2026-07-28 ✓ |
| total-records 显示 | 793 ✓ |
| new-count badge 显示 | +471 ✓ |
| 默认（showNew=false）5 视图 is_new badge 数 | 全部 0（隐藏生效）✓ |
| 全局勾选「显示新项目」后 | Top 视图 2 个新 badge 进入 Top 100；activity/search 显示全部 471 个 ✓ |
| 搜索「仅看新项目」 | 命中 471 个全部带 badge ✓ |
| enriched 字段不暴露到 UI | ✓ |

---

## 三、关键 bug 修复

### Bug 1：`extract_org_from_url` 把搜索链接当 org

**现象**：refresh 全量跑时，10 个搜索链接项目（如 `https://gitcode.com/search?q=CM_AreaSolver&type=repo&l=Cangjie`）被解析成 `org="search?q=CM_AreaSolver..."`，浪费 10 个 HTTP 请求调不存在的 org API。

**修复**：在 `extract_org_from_url` 加白名单逻辑，跳过 `search`/`api`/含 `?` 或 `=` 的非 owner 路径。

**位置**：`scripts/lib/refresh.py`

### Bug 2：recrawl 只补「本次新发现」项目，已 refresh 过的新项目永远缺 license

**现象**：refresh 模式（每日）把发现的新项目加进 data.json（is_new=true, license=None）。recrawl 模式（每周）只对「本次新发现」补 HTML → 已经 refresh 过的新项目永远不会被补 HTML。

**修复**：
1. recrawl 改为对 **is_new=true 且 license=None 且 enriched≠true** 的项目补 HTML
2. 新增 `enriched` 标记，避免每周重复抓取无 LICENSE 文件的项目
3. 补完后 set `enriched=true`（无论是否拿到 license，都标记为已尝试）
4. 失败的不 set `enriched=true`，下周重试

**位置**：`scripts/lib/recrawl.py` 的 `enrich_new_projects` 函数

---

## 四、已知限制

1. **PRs 计数**：API 不返回 `open_merge_requests_count`，从既有 data.json 保留，每日不刷新。新项目首次补 HTML 时一次性写入。如要刷新 PRs，需走 HTML 详情页（量较大，建议每周一次）。

2. **7 个搜索链接项目**：data.json 里 7 个 `source=梅科尔工作室` 等的项目，URL 是 `gitcode.com/search?q=...` 而非直接 `gitcode.com/owner/repo`，无法走 org API。它们会被保留在 data.json 中但 stars 等不再刷新。修复方式：在 `gitcode-cangjie-projects.json` 里把它们的 URL 改成直接仓库 URL（人工一次性补全）。

3. **OpenHarmony 已排除**：根据用户要求，OpenHarmony + OpenHarmony-SIG 的 30 个项目已从 curated 和 data.json 中移除，不再纳入 ranking 范围。

4. **新 org 不会自动发现**：搜索 API 需 private-token；未配置 `GITCODE_TOKEN` 时不发现新 org 下的项目。仅监控已知 19 个 org。

5. **新项目缺 license 几天**：refresh 把新项目加进 data.json 时缺 license/language，要等下次 weekly recrawl 才补全 HTML。中间几天用户看到的新项目是「待补全」状态。

---

## 五、部署后必做

1. **推到 GitHub**：`git push origin main` 把所有改动推到远程
2. **Settings → Pages**：确认 Source = main 分支 / root（已有的话不动）
3. **Settings → Actions → General**：
   - Workflow permissions = `Read and write permissions`（让 GITHUB_TOKEN 有 push 权限）
   - 勾选允许手动触发 workflow
4. **Settings → Secrets and variables → Actions**（可选）：
   - 加 `GITCODE_TOKEN`（仅当需要走认证搜索 API 发现新 org 时）
5. **手动触发验证**：在 Actions 页面
   - 选 `daily-refresh` → Run workflow → 看是否生成 `chore(data): daily refresh ...` commit
   - 选 `weekly-recrawl` → Run workflow → 填 `enrich_limit=3` 和 `force_archive=true` → 看 archive/2026-07.json 是否生成

---

## 附录：本地开发与测试

### 安装依赖

```bash
pip install -r scripts/requirements.txt
```

### 单元测试

```bash
# 验证单仓库抓取
python scripts/scraper.py --mode test --url Cangjie-TPC/CangjieMagic

# 小样本 refresh
python scripts/scraper.py --mode refresh \
  --input gitcode-cangjie-projects.json \
  --output /tmp/data.json \
  --limit 5 --verbose

# 小样本 recrawl + 强制归档
python scripts/scraper.py --mode full \
  --curated gitcode-cangjie-projects.json \
  --merge-into /tmp/data.json \
  --output /tmp/all-projects.json \
  --archive-dir /tmp/archive \
  --limit 5 --enrich-limit 3 --force-archive --verbose

# 独立 archive CLI
python scripts/lib/archive.py --data /tmp/data.json --archive-dir /tmp/archive --force -v
```

### 本地预览 web

```bash
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

### Web UI 联调（jsdom）

```bash
npm install jsdom  # 一次性
node <<'EOF'
const { JSDOM } = require('jsdom');
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('main.js', 'utf8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const dom = new JSDOM(html, { url: 'http://localhost/', runScripts: 'dangerously' });
const { window } = dom;
window.fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve(data) });
const s = window.document.createElement('script');
s.textContent = js;
window.document.body.appendChild(s);
setTimeout(() => {
  console.log('projects:', window.document.querySelectorAll('.rank-item').length);
}, 500);
EOF
```
