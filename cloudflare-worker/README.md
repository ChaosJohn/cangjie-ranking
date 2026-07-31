# 许愿功能 Cloudflare Worker 部署指南

本文档指导你部署许愿功能的 Cloudflare Worker，使其作为前端和 GitHub Issue 之间的安全代理。

## 架构概览

```
[浏览器前端 index.html]
   ├── POST /api/wish          → 提交许愿（创建 GitHub Issue）
   └── GET  /api/wishes/count  → 拉取已收集许愿数量
            │
            ▼
[Cloudflare Worker wish.js]
   ├── 1. 校验 Origin / Referer 白名单
   ├── 2. 验证 Cloudflare Turnstile token + hostname
   ├── 3. 同 IP 频率限制（默认 5 次/小时）
   ├── 4. 调用 GitHub API 创建 Issue（label: wish）
   └── 5. 返回 Issue 链接给前端
            │
            ▼
[GitHub Issues]
   └── ChaosJohn/cangjie-ranking 中带 wish label 的 Issue
```

## 准备工作（所需账号）

- Cloudflare 账号（已注册）
- GitHub 仓库管理员权限（用于创建 fine-grained PAT 和 label）

---

## 步骤 1：在 GitHub 仓库创建 `wish` label

许愿提交后所有 Issue 都会自动打上 `wish` 标签，便于后续筛选。

1. 打开 `https://github.com/ChaosJohn/cangjie-ranking/labels`
2. 点击 **New label**
3. Label name: `wish`
4. Description: `用户许愿提交（仓颉社区希望的三方库/工具）`
5. Color: 随意（推荐 `fbca04` 金黄）
6. 点击 **Create label**

也可通过 API（需管理员 token）：

```bash
curl -X POST \
  -H "Authorization: token YOUR_GITHUB_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/ChaosJohn/cangjie-ranking/labels \
  -d '{"name":"wish","color":"fbca04","description":"用户许愿提交（仓颉社区希望的三方库/工具）"}'
```

---

## 步骤 2：创建 GitHub fine-grained PAT

用于 Worker 调用 GitHub API 创建 Issue。

1. 打开 `https://github.com/settings/personal-access-tokens/new`（GitHub Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token）
2. **Token name**：`cangjie-ranking-wish-worker`
3. **Expiration**：建议 90 天（到期前需续期，重新生成并更新 Worker secret）
4. **Resource owner**：选择 `ChaosJohn`
5. **Repository access**：选择 **Only select repositories** → 勾选 `cangjie-ranking`
6. **Permissions** → **Repository permissions**：
   - **Issues**：选择 `Read and write`（创建 Issue 必须）
   - 其他保持 `No access`
7. 点击 **Generate token**，复制 `github_pat_...` 形式的 token（**只显示一次**，妥善保存）

> 安全说明：此 token 仅可创建/读取本仓库的 Issue，即便泄露，最大损失是仓库里多几条垃圾 Issue。

---

## 步骤 3：在 Cloudflare 申请 Turnstile 站点

Turnstile 是 Cloudflare 的人机验证（hCaptcha/reCAPTCHA 替代品，免费、对用户体验友好，多数情况下无需点击即可通过）。

1. 登录 Cloudflare Dashboard → 左侧菜单 **Turnstile**（地址：`https://dash.cloudflare.com/?to=/:account/turnstile`）
2. 点击 **Add site**
3. **Site name**：`cangjie-ranking-wish`
4. **Domain**：填入你的 Pages 域名，例如 `rank.cangjie-lang.cc`
   - 如果有多个域名（含预览域名），逐行添加
5. **Widget mode**：选择 **Managed**（推荐，Cloudflare 自动选择挑战强度）
6. **Pre-clearance**：关闭
7. 点击 **Create**
8. 创建完成后，页面会显示两个值：
   - **Site Key**（公钥，形如 `0x4AAAAAAA...`）—— 用于前端 `config.js`
   - **Secret Key**（私钥，形如 `0x4AAAAAAA...`）—— 仅用于 Worker secret，**不要放进前端**

---

## 步骤 4：安装 Wrangler CLI 并登录

Wrangler 是 Cloudflare Workers 的命令行工具，用于本地开发和部署。

1. 安装 Node.js（如未安装，下载 LTS 版：`https://nodejs.org/`）
2. 全局安装 wrangler：

   ```bash
   npm install -g wrangler
   ```

3. 登录 Cloudflare：

   ```bash
   wrangler login
   ```

   浏览器会打开授权页面，点击 **Allow** 即可。

> 也可不安装 wrangler，直接在 Cloudflare Dashboard 在线编辑 Worker，但命令行更便于版本管理。

---

## 步骤 5：部署 Worker

### 方式 A：用 wrangler 部署（推荐）

1. 在仓库根目录创建 `wrangler.toml`（或复制下面的模板到任意目录）：

   ```toml
   name = "cangjie-wish"
   main = "cloudflare-worker/wish.js"
   compatibility_date = "2024-09-23"
   ```

2. 设置 secrets（敏感信息用 `wrangler secret put`，不写入代码仓库）：

   ```bash
   wrangler secret put GITHUB_TOKEN
   # 粘贴步骤 2 的 github_pat_xxx，回车

   wrangler secret put GITHUB_REPO
   # 输入 ChaosJohn/cangjie-ranking

   wrangler secret put TURNSTILE_SECRET
   # 粘贴步骤 3 的 Secret Key

   wrangler secret put TURNSTILE_SITE_KEY
   # 粘贴步骤 3 的 Site Key（用于 hostname 校验）

   wrangler secret put ALLOWED_ORIGIN
   # 输入 https://rank.cangjie-lang.cc

   wrangler secret put SECRET_SALT
   # 随便输入一串随机字符串，用于 IP hash 加盐
   ```

3. 部署：

   ```bash
   wrangler deploy
   ```

4. 部署完成后会输出 Worker URL，形如：
   `https://cangjie-wish.<your-subdomain>.workers.dev`
   **记下这个 URL**。

### 方式 B：Dashboard 在线编辑

1. Cloudflare Dashboard → Workers & Pages → Create application → Create Worker
2. 命名为 `cangjie-wish`，点击 **Deploy**
3. 进入该 Worker → **Edit code**
4. 把 `cloudflare-worker/wish.js` 的完整内容粘贴进去，点击 **Save and deploy**
5. 进入该 Worker → **Settings** → **Variables** → **Add variable**：
   - 依次添加 `GITHUB_TOKEN`、`GITHUB_REPO`、`TURNSTILE_SECRET`、`TURNSTILE_SITE_KEY`、`ALLOWED_ORIGIN`、`SECRET_SALT`
   - 每个变量都勾选 **Encrypt**（变成 secret，不可再次查看）

---

## 步骤 6：配置前端 config.js

回到仓库根目录 `config.js`，把 `workerUrl` 和 `turnstileSiteKey` 填上：

```js
window.WISH_CONFIG = {
  workerUrl: 'https://cangjie-wish.your-subdomain.workers.dev',
  turnstileSiteKey: '0x4AAAAAAA你的站点公钥',
};
```

提交到仓库并部署到 GitHub Pages 后，许愿按钮即可启用。

> 检测启用条件：前端在 `wishEnabled()` 中要求 `workerUrl` 和 `turnstileSiteKey` 同时非空，否则按钮 disabled。

---

## 步骤 7：验证

### 7.1 测试计数接口

```bash
curl https://cangjie-wish.your-subdomain.workers.dev/api/wishes/count
# 预期返回：{"count":0,"recent":[]}
```

### 7.2 测试完整提交流程

1. 打开 `https://rank.cangjie-lang.cc/`
2. 点击右上角「许愿」按钮
3. 填写表单，完成 Turnstile 人机验证
4. 点击「提交许愿」
5. 应跳转到成功页面，显示 Issue 链接
6. 检查 `https://github.com/ChaosJohn/cangjie-ranking/issues?q=is:issue+label:wish`，应看到刚创建的 Issue

### 7.3 测试防护层

| 测试 | 预期 |
|---|---|
| 从其他域名调 `/api/wish` | 403 来源不合法 |
| 不带 turnstileToken | 400 请先完成人机验证 |
| 同 IP 连续提交 6 次（默认上限 5） | 第 6 次 429 提交过于频繁 |
| 从其他域名用你的 sitekey 渲染 Turnstile 拿 token | siteverify 时 hostname 校验失败 → 403 |

---

## 步骤 8：自定义域名（可选）

如果不想用 `*.workers.dev` 子域：

1. Cloudflare Dashboard → Workers & Pages → 你的 Worker → **Triggers** → **Custom Domains** → **Add Custom Domain**
2. 输入 `wish.rank.cangjie-lang.cc`（需先在 Cloudflare DNS 添加该子域）
3. 部署后，把 `config.js` 的 `workerUrl` 改为 `https://wish.rank.cangjie-lang.cc`

---

## 维护与故障排查

### 续期 GitHub PAT
PAT 到期前重新生成（步骤 2），然后：
```bash
wrangler secret put GITHUB_TOKEN
# 粘贴新 token
wrangler deploy
```

### 查看 Worker 日志
```bash
wrangler tail
```
实时查看所有请求和错误，便于排查 502、403 等问题。

### 调整频率限制
```bash
wrangler secret put IP_RATE_LIMIT_PER_HOUR
# 输入数字，如 10
wrangler deploy
```

### Turnstile widget 不显示
- 检查 `config.js` 的 `turnstileSiteKey` 是否正确
- 检查 Turnstile 站点设置中是否包含当前域名（含 Pages 预览域名）
- 浏览器 Console 查看是否有 CSP 拦截

### CORS 报错
确认 `ALLOWED_ORIGIN` 与前端实际域名完全一致（含协议、端口、末尾不带 `/`）。

### GitHub API 401/403
- PAT 过期：重新生成
- PAT 权限不足：确认 Issues = Read and write
- 仓库选择错误：确认只勾选了 cangjie-ranking

---

## 安全审计清单

- [ ] `GITHUB_TOKEN` 只在 Worker secret，不在前端、不在 git 仓库
- [ ] `TURNSTILE_SECRET` 只在 Worker secret，不在前端、不在 git 仓库
- [ ] `config.js` 只有 `workerUrl` 和 `turnstileSiteKey`（设计上公开）
- [ ] PAT 过期时间 ≤ 90 天
- [ ] PAT 仅 `issues:write` 权限
- [ ] `ALLOWED_ORIGIN` 已设置且与生产域名一致
- [ ] `wish` label 已在 GitHub 仓库创建
- [ ] IP 频率限制生效（手动测试 6 次提交）

---

## 文件清单

| 文件 | 用途 |
|---|---|
| `cloudflare-worker/wish.js` | Worker 源码（部署到 Cloudflare） |
| `cloudflare-worker/README.md` | 本文档 |
| `config.js` | 前端配置（公开信息，部署时填入 workerUrl 和 turnstileSiteKey） |
| `main.js` 中的 wish 模块 | 前端许愿逻辑（按钮、弹窗、提交、计数） |
| `style.css` 中的 wish 样式 | 弹窗、表单、badge 样式 |
| `docs/WISH.md` | 用户使用说明 |
