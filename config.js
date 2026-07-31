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
// - GITHUB_TOKEN   GitHub fine-grained PAT（仅 issues:write，仅本仓库）
// - TURNSTILE_SECRET  Cloudflare Turnstile 私钥
// - GITHUB_REPO    形如 ChaosJohn/cangjie-ranking
// - ALLOWED_ORIGIN 形如 https://rank.cangjie-lang.cc
// ====================================================================
window.WISH_CONFIG = {
  // Cloudflare Worker 部署后填入完整 URL（部署前留空将自动禁用许愿按钮）
  workerUrl: '',
  // Cloudflare Turnstile 站点公钥（申请见 cloudflare-worker/README.md）
  turnstileSiteKey: '',
};
