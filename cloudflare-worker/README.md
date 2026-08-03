# 许愿池 v2 Cloudflare Worker 部署指南

本文档指导你部署许愿池后端，基于 Cloudflare D1 (SQLite) + Worker，完全自闭环，不依赖 GitHub Issues。

## 架构概览

```
[浏览器前端 index.html]
   ├── GET  /api/wishes              → 列表（分页 + 排序 + 状态筛选）
   ├── GET  /api/wishes/:id          → 单条详情（含竞品数组）
   ├── GET  /api/wishes/search?q=xxx → 查重搜索（FTS5）
   ├── GET  /api/wishes/count        → 总数（badge）
   ├── POST /api/wishes              → 创建（带 Turnstile + competitors）
   ├── POST /api/wishes/:id/upvote   → +1（IP 去重）
   └── PATCH /api/wishes/:id/status  → 改状态（管理员）
            │
            ▼
[Cloudflare Worker wish.js]
   ├── 1. 校验 Origin / Referer 白名单
   ├── 2. 验证 Cloudflare Turnstile token + hostname
   ├── 3. 同 IP 频率限制（创建 5 次/小时，+1 20 次/小时）
   ├── 4. +1 去重：UNIQUE(wish_id, ip_hash)
   ├── 5. FTS5 全文检索（查重）
   └── 6. 写入 D1 数据库
            │
            ▼
[Cloudflare D1]
   ├── wishes          —— 许愿主表
   ├── competitors     —— 竞品（一对多）
   ├── wishes_fts      —— FTS5 全文索引
   └── upvote_logs     —— +1 去重日志
```

---

## 步骤 1：创建 Cloudflare D1 数据库

1. 登录 Cloudflare Dashboard → 左侧 **Workers & Pages** → **D1**（地址：`https://dash.cloudflare.com/?to=/:account/workers/d1`）
2. 点击 **Create database**
3. **Database name**：`cangjie-wish-db`
4. 点击 **Create**
5. 创建完成后，记下数据库 ID（后续配置 binding 时需要）

也可用 wrangler 创建：

```bash
wrangler d1 create cangjie-wish-db
```

命令输出会包含 `database_id`，记下它。

---

## 步骤 2：执行 schema.sql 建表

仓库已包含建表脚本 `cloudflare-worker/schema.sql`。在仓库根目录执行：

```bash
wrangler d1 execute cangjie-wish-db --remote --file=cloudflare-worker/schema.sql
```

> ⚠️ **必须加 `--remote`**
> wrangler 默认操作本地 SQLite 文件（`.wrangler/state/`），不会影响部署后 Worker 实际访问的远程 D1。如果不加 `--remote`，本地建表成功但线上 Worker 仍会报 `D1_ERROR: no such table: wishes`。
>
> 如果旧版 wrangler 不支持 `--remote`，命令行不带该 flag 时会交互式询问 `?Execute in remote database?`，输入 `y` 确认即可（等价于 `--remote`）。

或者，在 Cloudflare Dashboard：
1. 进入 **D1** → `cangjie-wish-db` → **Console**
2. 打开 `cloudflare-worker/schema.sql`，复制全部内容粘贴进去
3. 点击 **Execute**

验证表已创建（同样需要 `--remote`）：

```bash
wrangler d1 execute cangjie-wish-db --remote --command "SELECT name FROM sqlite_master WHERE type='table';"
```

应看到：`wishes`、`competitors`、`wishes_fts`、`upvote_logs`、`_cf_KV` 等。

---

## 步骤 3：申请 Cloudflare Turnstile 站点

1. Cloudflare Dashboard → **Turnstile**（`https://dash.cloudflare.com/?to=/:account/turnstile`）
2. 点击 **Add site**
3. **Site name**：`cangjie-ranking-wish`
4. **Domain**：逐行添加你的 Pages 域名，例如：
   - `rank.cangjie-lang.cc`
   - 含预览域名也可加上
5. **Widget mode**：**Managed**（推荐）
6. **Pre-clearance**：关闭
7. 点击 **Create**
8. 记下两个值：
   - **Site Key**（公钥，形如 `0x4AAAAAAA...`）—— 用于前端 `config.js`
   - **Secret Key**（私钥）—— 仅用于 Worker secret

---

## 步骤 4：设置管理员密码（ADMIN_TOKEN）

自己定一个随机字符串，例如：

```bash
openssl rand -hex 32
# 输出形如：a3f5e1d8c2b9...（64 字符）
```

记下这个值，后续作为 `ADMIN_TOKEN` secret。用于保护 `PATCH /api/wishes/:id/status` 接口。

---

## 步骤 5：配置 wrangler.toml

在仓库根目录创建 `wrangler.toml`：

```toml
name = "cangjie-wish"
main = "cloudflare-worker/wish.js"
compatibility_date = "2024-09-23"

[[d1_databases]]
binding = "DB"
database_name = "cangjie-wish-db"
database_id = "你的数据库ID（步骤 1 中记录的）"
```

---

## 步骤 6：设置 Secrets

在仓库根目录执行（每个命令会提示你输入值并加密存储）：

```bash
wrangler secret put TURNSTILE_SECRET
# 粘贴步骤 3 的 Secret Key（私钥）

wrangler secret put TURNSTILE_SITE_KEY
# 粘贴步骤 3 的 Site Key（公钥，用于 hostname 校验）

wrangler secret put ALLOWED_ORIGIN
# 输入 https://rank.cangjie-lang.cc（你的前端域名，不带末尾 /）

wrangler secret put ADMIN_TOKEN
# 粘贴步骤 4 生成的随机字符串

wrangler secret put SECRET_SALT
# 输入任意随机字符串（用于 IP hash 加盐，提升匿名性）

# 可选：调整频率限制（不设置则用默认值）
wrangler secret put IP_RATE_LIMIT_PER_HOUR
# 输入数字，如 5（创建许愿：每 IP 每小时）

wrangler secret put IP_UPVOTE_LIMIT_PER_HOUR
# 输入数字，如 20（+1：每 IP 每小时）
```

也可在 Dashboard 设置：Workers & Pages → 你的 Worker → Settings → Variables → Add variable（勾选 Encrypt）。

---

## 步骤 7：部署 Worker

```bash
wrangler deploy
```

部署完成后输出形如：
```
Published cangjie-wish (x.xx sec)
  https://cangjie-wish.<your-subdomain>.workers.dev
```

记下 Worker URL。

---

## 步骤 8：配置前端 config.js

编辑仓库根目录 `config.js`：

```js
window.WISH_CONFIG = {
  workerUrl: 'https://cangjie-wish.<your-subdomain>.workers.dev',
  turnstileSiteKey: '0x4AAAAAAA你的站点公钥',
  wishesPageSize: 20,
};
```

提交到仓库并部署到 GitHub Pages 后，许愿池即可启用。

---

## 步骤 9：验证

### 9.1 测试计数接口

```bash
curl https://cangjie-wish.<your-subdomain>.workers.dev/api/wishes/count
# 预期：{"count":0}
```

### 9.2 测试列表接口

```bash
curl "https://cangjie-wish.<your-subdomain>.workers.dev/api/wishes?sort=hot&status=pending&limit=20&offset=0"
# 预期：{"items":[],"total":0,"limit":20,"offset":0}
```

### 9.3 测试查重搜索

```bash
curl "https://cangjie-wish.<your-subdomain>.workers.dev/api/wishes/search?q=markdown"
# 预期：{"items":[],"similar":false}
```

### 9.4 完整提交流程

1. 打开 `https://rank.cangjie-lang.cc/`
2. 点击右上角「许愿池」按钮
3. 列表加载（初次为空，会显示「还没有许愿」提示）
4. 点击列表右上角「+ 提交许愿」
5. 填写表单（标题会触发实时查重提示）
6. 完成 Turnstile 验证，点击「提交许愿」
7. 若后端检测到高度相似，会弹二次确认框
8. 提交成功后自动返回列表，新条目高亮显示在顶部，badge 计数 +1

### 9.5 测试 +1

1. 在列表中点击某条许愿右侧的「👍」按钮
2. 数量 +1，按钮变灰
3. 刷新页面后，按钮仍为已投票状态（localStorage 记录）
4. 同 IP 再次点同一许愿会被拒绝（409）

### 9.6 测试管理员改状态

```bash
# 假设某条许愿 id=1，标记为「已实现」
curl -X PATCH \
  -H "X-Admin-Token: 你的ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"status":"done"}' \
  https://cangjie-wish.<your-subdomain>.workers.dev/api/wishes/1/status
# 预期：{"ok":true,"id":1,"status":"done"}
```

可选状态：`pending`（待实现）、`done`（已实现）、`rejected`（不实现）、`hidden`（隐藏，不在公开列表显示）

### 9.7 防护层测试

| 测试 | 预期 |
|---|---|
| 从其他域名调 POST /api/wishes | 403 来源不合法 |
| 不带 turnstileToken 提交 | 400 请先完成人机验证 |
| 同 IP 连续提交 6 次（默认 5 上限） | 第 6 次 429 |
| 同 IP 对同一许愿 +1 两次 | 第二次 409 已投过 |
| 从其他域名用你的 sitekey 渲染 Turnstile | siteverify 时 hostname 校验失败 → 403 |
| PATCH /status 不带 X-Admin-Token | 403 未授权 |
| PATCH /status 带错误的 token | 403 未授权 |

---

## 步骤 10：自定义域名（可选）

如果不想用 `*.workers.dev` 子域：

1. Cloudflare Dashboard → Workers & Pages → 你的 Worker → **Triggers** → **Custom Domains** → **Add Custom Domain**
2. 输入 `wish.rank.cangjie-lang.cc`（需先在 Cloudflare DNS 添加该子域）
3. 部署后，把 `config.js` 的 `workerUrl` 改为 `https://wish.rank.cangjie-lang.cc`
4. **同时更新 Turnstile 站点的 Domain 列表**，把新域名加进去

---

## 查重机制说明

许愿池使用 SQLite FTS5 + 自定义相似度判定：

- **实时查重**（输入标题时）：前端 debounce 400ms 后调 `/api/wishes/search?q=xxx`，后端用 FTS5 全文检索返回最多 5 条结果，前端在标题输入框下方显示相似许愿列表。此时**不阻拦**提交。

- **提交时查重**：POST `/api/wishes` 时后端再次跑 FTS5 查询，并按以下规则判定「高度相似」：
  - 标题 token 重叠 ≥ 2 个，或
  - 描述 token 重叠 ≥ 3 个
  
  若判定为高度相似，返回 `409 DUPLICATE_FOUND` + 相似列表，前端弹二次确认框：「取消，去查看」或「坚持提交」。「坚持提交」会带 `force=true` 重新提交，跳过查重。

- **分词**：英文按空格/标点分，中文按单字分（unicode61 tokenizer），用 OR 连接，加前缀 `*` 支持模糊匹配。

---

## 维护与故障排查

### 查看日志
```bash
wrangler tail
```
实时查看所有请求和错误，排查 502、403、429 等。

### `/api/wishes` 返回 `Internal Server Error`
部署后调用接口报 500，外层 catch 会把根因放进响应体 `detail` 字段：

```bash
curl https://cangjie-wish.<your-subdomain>.workers.dev/api/wishes
# {"error":"Internal Server Error","detail":"D1_ERROR: no such table: wishes: SQLITE_ERROR"}
```

常见根因：

| `detail` 内容 | 原因 | 解决 |
|---|---|---|
| `D1_ERROR: no such table: wishes` | 远程 D1 没建表（很可能是建表时漏了 `--remote`，只建到了本地 `.wrangler/state/`） | `wrangler d1 execute cangjie-wish-db --remote --file=cloudflare-worker/schema.sql` |
| `D1_ERROR: no such column: ...` | schema.sql 版本旧，缺字段 | 重新执行 schema.sql（`CREATE TABLE IF NOT EXISTS` 不会改已有表结构，必要时需手动 `ALTER TABLE`） |
| `Cannot read properties of undefined (reading 'prepare')` | `env.DB` 为 undefined，binding 未生效 | 检查 `wrangler.toml` 的 `[[d1_databases]]` binding 名是 `DB`（不是 `cangjie_wish_db` 等其他名字）；重新 `wrangler deploy` |

> 💡 `wrangler tail` 有时拿不到日志（请求未落到 console.error 的实例上），优先看响应体 `detail` 字段，最直接。

### 续期 / 重置 Turnstile
1. Cloudflare Dashboard → Turnstile → 你的站点 → 重新生成 secret
2. `wrangler secret put TURNSTILE_SECRET`（粘贴新 secret）
3. `wrangler deploy`

### 修改频率限制
```bash
wrangler secret put IP_RATE_LIMIT_PER_HOUR
# 输入新值
wrangler deploy
```

### 备份数据
```bash
wrangler d1 execute cangjie-wish-db --remote --command "SELECT * FROM wishes;" --output backup.json
wrangler d1 execute cangjie-wish-db --remote --command "SELECT * FROM competitors;" --output backup_comp.json
```

### 重置管理员密码
```bash
wrangler secret put ADMIN_TOKEN
# 输入新值
wrangler deploy
```

### Turnstile widget 不显示
- 检查 `config.js` 的 `turnstileSiteKey` 是否正确
- 检查 Turnstile 站点设置中是否包含当前域名（含 Pages 预览域名）
- 浏览器 Console 查看是否有 CSP 拦截

### CORS 报错
确认 `ALLOWED_ORIGIN` 与前端实际域名完全一致（含协议、端口、末尾不带 `/`）。

### 查重没命中
- FTS5 表为空时查重自然返回空，第一次提交任意标题都会成功
- 检查 `wishes_fts` 表是否有数据：`wrangler d1 execute cangjie-wish-db --remote --command "SELECT COUNT(*) FROM wishes_fts;"`
- 若主表有数据但 FTS 表为空（可能触发器未生效），手动重建：
  ```bash
  wrangler d1 execute cangjie-wish-db --remote --command "INSERT INTO wishes_fts(wishes_fts) VALUES('rebuild');"
  ```

### +1 不生效
- 检查 `upvote_logs` 表的 UNIQUE 约束是否生效
- 同一 IP 对同一 wish 只能 +1 一次（设计如此，防止刷量）
- 共享 IP 场景：同一公司多人各自有不同浏览器 → 各自 localStorage 独立 → 各自可对不同 wish 投票；只有同 IP 同 wish 才会去重

---

## 安全审计清单

- [ ] `TURNSTILE_SECRET` 只在 Worker secret，不在前端、不在 git 仓库
- [ ] `ADMIN_TOKEN` 只在 Worker secret，不在前端、不在 git 仓库
- [ ] `SECRET_SALT` 只在 Worker secret
- [ ] `config.js` 只有 `workerUrl` / `turnstileSiteKey` / `wishesPageSize`（设计上公开）
- [ ] `ALLOWED_ORIGIN` 已设置且与生产域名一致
- [ ] D1 数据库已执行 `schema.sql`（包含 FTS5 触发器）
- [ ] IP 频率限制生效（手动测试 6 次提交）
- [ ] +1 去重生效（同 IP 同 wish 第二次返回 409）
- [ ] 管理员接口需 X-Admin-Token（不带或错误都返回 403）

---

## 数据库表结构速查

参见 [`cloudflare-worker/schema.sql`](schema.sql)。核心表：

| 表 | 用途 |
|---|---|
| `wishes` | 许愿主表（标题、描述、类别、状态、+1 数、IP hash、UA） |
| `competitors` | 竞品（一对多关联 wishes.id） |
| `wishes_fts` | FTS5 虚拟表（通过触发器同步 wishes 的 title/description） |
| `upvote_logs` | +1 去重日志（UNIQUE(wish_id, ip_hash)） |

---

## 文件清单

| 文件 | 用途 |
|---|---|
| `cloudflare-worker/wish.js` | Worker 源码（7 个 API） |
| `cloudflare-worker/schema.sql` | D1 建表脚本 |
| `cloudflare-worker/README.md` | 本文档 |
| `config.js` | 前端配置（workerUrl / turnstileSiteKey / wishesPageSize） |
| `main.js` 中的 wish 模块 | 前端许愿池逻辑（列表 / 详情 / 表单 / +1 / 查重） |
| `style.css` 中的 wish 样式 | 弹窗 / 列表 / 卡片 / 详情 / 表单样式 |
| `docs/WISH.md` | 用户使用说明 |
