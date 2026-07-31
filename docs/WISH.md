# 许愿功能

仓颉生态榜单提供「许愿」功能，让外部用户匿名提交希望仓颉社区建设的三方库 / 工具，并附上竞品来源，便于社区参考实现。

## 使用方式

1. 打开 [在线榜单](https://rank.cangjie-lang.cc/)
2. 点击页面右上角的「许愿」按钮（带 🎯 图标）
3. 在弹出的表单中填写以下字段
4. 完成 Cloudflare Turnstile 人机验证
5. 点击「提交许愿」

提交后会跳转到成功页面，显示对应的 GitHub Issue 链接，可点击查看或参与讨论。提交按钮旁的计数会实时 +1，反映已收集到的许愿总数。

## 字段说明

| 字段 | 是否必填 | 说明 |
|---|---|---|
| 许愿标题 | 必填 | 一句话描述你希望的库 / 工具，≤ 120 字 |
| 详细描述 | 必填 | 使用场景、期望特性、为什么需要它，≤ 2000 字 |
| 类别 | 必填 | 库 / 工具 / 框架 / 其他 |
| 竞品名称 | 必填 | 已有的同类项目名称，例如 `marked` |
| 竞品链接 | 必填 | 竞品仓库或官网 URL |
| 竞品语言 | 必填 | 竞品的实现语言（Cangjie / Rust / Go / Python / Java / JavaScript / C++ / 其他） |
| 昵称 | 可选 | 留空将标记为「匿名」 |
| 邮箱 | 可选 | 便于后续反馈，不会公开展示 |

## 提交后会发生什么

- 系统自动在本仓库创建一条 GitHub Issue，打上 `wish` 标签
- Issue 标题格式：`[许愿] {你的标题}`
- Issue 正文包含你填写的所有信息（除邮箱外）+ 一段审计信息（仅管理员可见）
- 你可以在 [许愿列表](https://github.com/ChaosJohn/cangjie-ranking/issues?q=is:issue+label:wish) 中查看所有已提交的许愿
- 社区成员可在对应 Issue 下方评论、点赞、认领实现

## 隐私声明

- **匿名性**：默认匿名提交，填写昵称会公开展示在 Issue 中
- **邮箱**：仅管理员可见，不会出现在公开 Issue 正文里，用于后续反馈进展
- **来源 IP**：不记录原始 IP，仅记录其 SHA-256 hash 的前 8 位（加盐），写入 Issue 的「审计信息」折叠区。该前缀无法反推原始 IP，仅用于事后追溯刷量行为
- **User-Agent**：截断到 200 字符后写入审计信息，用于排查异常请求
- **Turnstile**：使用 Cloudflare Turnstile 进行人机验证，Cloudflare 会按其隐私政策处理相关数据
- **GitHub**：所有提交内容（除邮箱外）会公开出现在 GitHub Issue 中，请勿包含敏感信息

## 防滥用措施

为防止恶意刷量，许愿功能部署了多层防护：

| 防护层 | 说明 |
|---|---|
| 来源白名单 | 仅接受来自 `rank.cangjie-lang.cc` 的请求 |
| 人机验证 | Cloudflare Turnstile，多数情况无感通过 |
| hostname 校验 | 防止站点公钥被盗用到其他域名 |
| IP 频率限制 | 同一 IP 每小时最多 5 次提交（可由管理员调整） |
| GitHub PAT 最小权限 | 即便 token 泄露，最大损失仅限本仓库 Issue |

## 功能未启用？

如果许愿按钮灰色不可点，说明管理员尚未完成 Cloudflare Worker 和 Turnstile 配置。部署步骤参见 [cloudflare-worker/README.md](../cloudflare-worker/README.md)。

## 反馈与建议

许愿功能本身的反馈（不是通过许愿提交的库/工具需求），请直接在 [GitHub Issues](https://github.com/ChaosJohn/cangjie-ranking/issues) 提交。
