/**
 * 许愿功能 Cloudflare Worker
 * ====================================================================
 * 接收前端许愿表单提交，校验后调用 GitHub API 自动创建 Issue（label: wish）。
 *
 * 路由：
 *   POST /api/wish         —— 提交一条许愿，创建 GitHub Issue
 *   GET  /api/wishes/count —— 拉取已有许愿数量 + 最近 5 条
 *
 * 防护层：
 *   1. Origin / Referer 白名单（ALLOWED_ORIGIN）
 *   2. Cloudflare Turnstile 人机验证 + hostname 校验
 *   3. 同 IP 频率限制（IP_RATE_LIMIT_PER_HOUR，默认 5 次/小时）
 *   4. Issue body 写入来源 IP hash 前缀 + UA，便于事后追溯
 *   5. GitHub PAT 最小权限（仅 issues:write，仅本仓库，建议设过期时间）
 *
 * 部署：参见 cloudflare-worker/README.md
 *
 * Secrets / 环境变量（在 wrangler.toml 或 Cloudflare Dashboard 配置）：
 *   GITHUB_TOKEN       —— GitHub fine-grained PAT（仅 issues:write，仅本仓库）
 *   GITHUB_REPO        —— 形如 ChaosJohn/cangjie-ranking
 *   TURNSTILE_SECRET   —— Cloudflare Turnstile 私钥
 *   TURNSTILE_SITE_KEY —— Cloudflare Turnstile 站点公钥（用于 hostname 校验）
 *   ALLOWED_ORIGIN     —— 形如 https://rank.cangjie-lang.cc
 *   IP_RATE_LIMIT_PER_HOUR —— 可选，默认 5
 *
 * 开发：npx wrangler dev wish.js
 * 部署：npx wrangler deploy wish.js
 * ====================================================================
 */

const DEFAULT_IP_RATE_LIMIT = 5;       // 默认每 IP 每小时 5 次
const RECENT_ISSUE_COUNT = 5;          // count 接口返回最近 N 条
const LABEL_WISH = 'wish';

// 简易内存计数器（按 Worker 实例维度；多实例下大约降级生效，足够防刷）
const ipBuckets = new Map();

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const corsHeaders = buildCors(env);

    // 预检
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    try {
      if (url.pathname === '/api/wish' && request.method === 'POST') {
        return await handleWish(request, env, corsHeaders);
      }
      if (url.pathname === '/api/wishes/count' && request.method === 'GET') {
        return await handleCount(request, env, corsHeaders);
      }
      return json({ error: 'Not Found' }, 404, corsHeaders);
    } catch (err) {
      console.error('wish worker error', err);
      return json({ error: 'Internal Server Error' }, 500, corsHeaders);
    }
  },
};

// ------------------------------ 业务：提交许愿 ------------------------------
async function handleWish(request, env, corsHeaders) {
  // 1. Origin / Referer 白名单
  const originCheck = checkOrigin(request, env);
  if (!originCheck.ok) {
    return json({ error: originCheck.reason }, 403, corsHeaders);
  }

  // 2. 解析请求体
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: '请求体格式错误' }, 400, corsHeaders);
  }

  const {
    title, description, category, competitor_name, competitor_url,
    competitor_lang, nickname, email, turnstileToken,
  } = body || {};

  // 3. 必填校验
  const missing = [];
  if (!str(title)) missing.push('title');
  if (!str(description)) missing.push('description');
  if (!str(category)) missing.push('category');
  if (!str(competitor_name)) missing.push('competitor_name');
  if (!str(competitor_url)) missing.push('competitor_url');
  if (!str(competitor_lang)) missing.push('competitor_lang');
  if (missing.length) {
    return json({ error: `缺少必填字段：${missing.join(', ')}` }, 400, corsHeaders);
  }

  // 4. 长度 / URL 校验
  if (title.length > 120) return json({ error: '标题过长' }, 400, corsHeaders);
  if (description.length > 2000) return json({ error: '描述过长' }, 400, corsHeaders);
  if (competitor_name.length > 120) return json({ error: '竞品名称过长' }, 400, corsHeaders);
  if (competitor_url.length > 500 || !/^https?:\/\//i.test(competitor_url)) {
    return json({ error: '竞品链接不合法' }, 400, corsHeaders);
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: '邮箱格式不正确' }, 400, corsHeaders);
  }

  // 5. Turnstile 人机验证
  if (!turnstileToken) {
    return json({ error: '请先完成人机验证' }, 400, corsHeaders);
  }
  const tsResult = await verifyTurnstile(turnstileToken, env, request);
  if (!tsResult.ok) {
    return json({ error: tsResult.reason || '人机验证失败' }, 403, corsHeaders);
  }

  // 6. IP 频率限制
  const ip = getClientIp(request);
  const limit = parseInt(env.IP_RATE_LIMIT_PER_HOUR || '', 10) || DEFAULT_IP_RATE_LIMIT;
  if (!checkIpRate(ip, limit)) {
    return json({ error: '提交过于频繁，请稍后再试' }, 429, corsHeaders);
  }

  // 7. 构造 Issue body
  const ipHash = await sha256(ip + (env.SECRET_SALT || ''));
  const ipPrefix = ipHash.slice(0, 8);
  const ua = request.headers.get('user-agent') || '—';
  const safeNick = str(nickname) ? nickname.slice(0, 60) : '匿名';

  const issueBody = [
    `### 许愿内容`,
    '',
    `**类别**：${escapeMd(category)}`,
    '',
    `${escapeMd(description)}`,
    '',
    `### 竞品参考`,
    '',
    `- **名称**：${escapeMd(competitor_name)}`,
    `- **语言**：${escapeMd(competitor_lang)}`,
    `- **链接**：${competitor_url}`,
    '',
    `### 提交者`,
    '',
    `- **昵称**：${escapeMd(safeNick)}`,
    `- **邮箱**：${email ? escapeMd(email) : '（未提供）'}`,
    '',
    `---`,
    '',
    `<details><summary>审计信息（管理员可见）</summary>`,
    '',
    `- 来源 IP hash 前缀：\`${ipPrefix}\``,
    `- User-Agent：\`${escapeMd(ua.slice(0, 200))}\``,
    `- 提交时间：${new Date().toISOString()}`,
    `- 来源域名：${tsResult.hostname || '—'}`,
    '',
    `</details>`,
  ].join('\n');

  // 8. 调用 GitHub API 创建 Issue
  const repo = env.GITHUB_REPO;
  const token = env.GITHUB_TOKEN;
  if (!repo || !token) {
    return json({ error: '服务端未配置 GITHUB_REPO / GITHUB_TOKEN' }, 500, corsHeaders);
  }

  const ghRes = await fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'cangjie-ranking-wish-worker',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: `[许愿] ${title}`,
      body: issueBody,
      labels: [LABEL_WISH],
    }),
  });

  if (!ghRes.ok) {
    const errText = await ghRes.text();
    console.error('github create issue failed', ghRes.status, errText);
    return json({ error: `创建 Issue 失败（HTTP ${ghRes.status}）` }, 502, corsHeaders);
  }

  const issue = await ghRes.json();
  return json({
    ok: true,
    issueUrl: issue.html_url,
    issueNumber: issue.number,
  }, 200, corsHeaders);
}

// ------------------------------ 业务：拉取计数 ------------------------------
async function handleCount(request, env, corsHeaders) {
  const repo = env.GITHUB_REPO;
  const token = env.GITHUB_TOKEN;
  if (!repo || !token) {
    return json({ error: '服务端未配置' }, 500, corsHeaders);
  }

  // GitHub Issues 接口分页拉取所有 wish Issue，最多 1000 条用于计数
  let count = 0;
  let recent = [];
  let page = 1;
  while (page <= 10) {
    const res = await fetch(
      `https://api.github.com/repos/${repo}/issues?labels=${LABEL_WISH}&state=all&per_page=100&page=${page}&sort=created&direction=desc`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          'User-Agent': 'cangjie-ranking-wish-worker',
        },
      },
    );
    if (!res.ok) break;
    const arr = await res.json();
    if (!Array.isArray(arr) || arr.length === 0) break;
    count += arr.length;
    if (recent.length < RECENT_ISSUE_COUNT) {
      recent = recent.concat(arr.slice(0, RECENT_ISSUE_COUNT - recent.length).map(it => ({
        number: it.number,
        title: it.title,
        url: it.html_url,
        state: it.state,
        createdAt: it.created_at,
      })));
    }
    if (arr.length < 100) break;
    page++;
  }

  return json({ count, recent }, 200, corsHeaders);
}

// ------------------------------ 工具函数 ------------------------------
function buildCors(env) {
  const allow = env.ALLOWED_ORIGIN || '*';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  };
}

function checkOrigin(request, env) {
  const allowed = env.ALLOWED_ORIGIN;
  if (!allowed) return { ok: false, reason: '服务端未配置 ALLOWED_ORIGIN' };
  const origin = request.headers.get('origin') || '';
  const referer = request.headers.get('referer') || '';
  if (origin && origin === allowed) return { ok: true };
  if (referer && referer.startsWith(allowed)) return { ok: true };
  return { ok: false, reason: '来源不合法' };
}

async function verifyTurnstile(token, env, request) {
  const secret = env.TURNSTILE_SECRET;
  if (!secret) return { ok: false, reason: '服务端未配置 TURNSTILE_SECRET' };

  const form = new URLSearchParams();
  form.append('secret', secret);
  form.append('response', token);
  const remoteip = getClientIp(request);
  if (remoteip) form.append('remoteip', remoteip);

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: form,
  });
  if (!res.ok) return { ok: false, reason: 'Turnstile 验证服务不可用' };
  const data = await res.json();

  if (!data.success) {
    return { ok: false, reason: '人机验证失败' };
  }
  // hostname 校验：必须等于允许的域名
  const allowedHost = extractHost(env.ALLOWED_ORIGIN);
  if (allowedHost && data.hostname && data.hostname !== allowedHost) {
    return { ok: false, reason: 'hostname 校验失败' };
  }
  return { ok: true, hostname: data.hostname };
}

function extractHost(origin) {
  if (!origin) return '';
  try { return new URL(origin).hostname; } catch (e) { return ''; }
}

function checkIpRate(ip, limitPerHour) {
  if (!ip) return true;  // 拿不到 IP 就放行，避免误伤
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  let bucket = ipBuckets.get(ip);
  if (!bucket || now - bucket.windowStart > windowMs) {
    bucket = { windowStart: now, count: 0 };
    ipBuckets.set(ip, bucket);
  }
  if (bucket.count >= limitPerHour) return false;
  bucket.count++;
  return true;
}

function getClientIp(request) {
  const headers = ['cf-connecting-ip', 'x-forwarded-for', 'x-real-ip'];
  for (const h of headers) {
    const v = request.headers.get(h);
    if (v) return v.split(',')[0].trim();
  }
  return '';
}

async function sha256(s) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function str(v) { return typeof v === 'string' && v.trim().length > 0; }
function escapeMd(s) {
  return String(s == null ? '' : s).replace(/([\\`*_{}\[\]()#+\-.!|])/g, '\\$1');
}
function json(obj, status, headers) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers },
  });
}
