'use strict';

// ====================================================================
// 部署相关配置（公开信息，可安全暴露在前端）
// ====================================================================
// 详细部署步骤参见 cloudflare-worker/README.md
//
// 安全说明：
// - workerUrl: 任何 API 端点的 URL 都必然公开（浏览器 DevTools 可见），真正的防护
//   在 Worker 内部完成（Origin 白名单 + Turnstile + hostname 校验 + IP 频率限）。
// - turnstileSiteKey: Cloudflare Turnstile 的「站点密钥」是设计上的公钥，必须嵌入
//   前端用于渲染 widget。私钥 TURNSTILE_SECRET 只存在于 Worker 环境变量中。
//
// 真正不能泄露的（仅放在 Worker Secrets 里，不要写到这里）：
// - TURNSTILE_SECRET   Cloudflare Turnstile 私钥
// - ADMIN_TOKEN        管理员密码（保护 PATCH /api/wishes/:id/status）
// - SECRET_SALT        IP hash 加盐随机字符串
// - ALLOWED_ORIGIN     形如 https://rank.cangjie-lang.cc
// - DB                 D1 数据库 binding（在 wrangler.toml 配置）
// ====================================================================
window.WISH_CONFIG = {
  // Cloudflare Worker 部署后填入完整 URL（部署前留空将自动禁用许愿按钮）
  workerUrl: 'https://cangjie-wish.cangjie-lang.workers.dev',
  // Cloudflare Turnstile 站点公钥（申请见 cloudflare-worker/README.md）
  turnstileSiteKey: '0x4AAAAAAEDNKz0eHJ-kEhie',
  // 许愿池列表分页大小
  wishesPageSize: 20,
};
