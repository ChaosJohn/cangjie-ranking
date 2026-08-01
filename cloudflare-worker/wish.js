/**
 * 许愿池 v2 Cloudflare Worker
 * ====================================================================
 * 完全自闭环的许愿管理后端，基于 Cloudflare D1 (SQLite) 存储。
 * 前端不再依赖 GitHub Issues，所有创建/列表/详情/+1/查重均走本 API。
 *
 * 路由：
 *   GET    /api/wishes              —— 列表（分页 + 排序 + 状态筛选）
 *   GET    /api/wishes/:id          —— 单条详情（含竞品数组）
 *   GET    /api/wishes/search?q=xxx —— 查重搜索（FTS5）
 *   GET    /api/wishes/count        —— 总数（badge 用）
 *   POST   /api/wishes              —— 创建（带 Turnstile + competitors 数组）
 *   POST   /api/wishes/:id/upvote   —— +1（IP 维度去重）
 *   PATCH  /api/wishes/:id/status   —— 改状态（管理员 token）
 *
 * 防护层：
 *   1. Origin / Referer 白名单（ALLOWED_ORIGIN）
 *   2. Cloudflare Turnstile 人机验证 + hostname 校验
 *   3. 同 IP 频率限制（IP_RATE_LIMIT_PER_HOUR，默认 5 次提交/小时，20 次 +1/小时）
 *   4. +1 去重：UNIQUE(wish_id, ip_hash)
 *   5. 管理员接口需 X-Admin-Token 头匹配 ADMIN_TOKEN
 *
 * 环境变量（在 wrangler.toml 或 Dashboard 配置）：
 *   DB                     —— D1 数据库 binding
 *   TURNSTILE_SECRET       —— Cloudflare Turnstile 私钥
 *   TURNSTILE_SITE_KEY     —— Cloudflare Turnstile 站点公钥（用于 hostname 校验）
 *   ALLOWED_ORIGIN         —— 形如 https://rank.cangjie-lang.cc
 *   ADMIN_TOKEN            —— 管理员密码（保护 PATCH /status）
 *   IP_RATE_LIMIT_PER_HOUR —— 可选，默认 5（创建许愿）
 *   IP_UPVOTE_LIMIT_PER_HOUR —— 可选，默认 20（+1 操作）
 *   SECRET_SALT            —— IP hash 加盐
 *
 * 部署：参见 cloudflare-worker/README.md
 * ====================================================================
 */

const DEFAULT_IP_RATE_LIMIT = 5;        // 创建许愿：每 IP 每小时
const DEFAULT_IP_UPVOTE_LIMIT = 20;     // +1：每 IP 每小时
const LIST_PAGE_SIZE = 20;
const SEARCH_LIMIT = 5;
const STATUS_VALUES = new Set(['pending', 'done', 'rejected', 'hidden']);

// 简易内存计数器（Worker 实例维度；多实例下大约降级生效）
const ipCreateBuckets = new Map();
const ipUpvoteBuckets = new Map();

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const corsHeaders = buildCors(env);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    try {
      const path = url.pathname;
      // 路由匹配
      if (path === '/api/wishes' && request.method === 'GET') {
        return await handleList(request, env, corsHeaders);
      }
      if (path === '/api/wishes/count' && request.method === 'GET') {
        return await handleCount(request, env, corsHeaders);
      }
      if (path === '/api/wishes/search' && request.method === 'GET') {
        return await handleSearch(request, env, corsHeaders);
      }
      if (path === '/api/wishes' && request.method === 'POST') {
        return await handleCreate(request, env, corsHeaders);
      }
      let m;
      if (m = path.match(/^\/api\/wishes\/(\d+)$/)) {
        if (request.method === 'GET') return await handleDetail(m[1], env, corsHeaders);
      }
      if (m = path.match(/^\/api\/wishes\/(\d+)\/upvote$/) && request.method === 'POST') {
        return await handleUpvote(m[1], request, env, corsHeaders);
      }
      if (m = path.match(/^\/api\/wishes\/(\d+)\/status$/) && request.method === 'PATCH') {
        return await handleStatus(m[1], request, env, corsHeaders);
      }
      return json({ error: 'Not Found' }, 404, corsHeaders);
    } catch (err) {
      console.error('wish worker error', err);
      return json({ error: 'Internal Server Error' }, 500, corsHeaders);
    }
  },
};

// ------------------------------ GET /api/wishes（列表） ------------------------------
async function handleList(request, env, corsHeaders) {
  if (!env.DB) return json({ error: 'DB 未配置' }, 500, corsHeaders);
  const url = new URL(request.url);
  const sort = url.searchParams.get('sort') || 'hot';   // hot / latest / category
  const status = url.searchParams.get('status') || 'pending';
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '', 10) || LIST_PAGE_SIZE, 100);
  const offset = Math.max(parseInt(url.searchParams.get('offset') || '', 10) || 0, 0);
  const category = url.searchParams.get('category') || '';

  // 仅允许 pending / done / rejected（hidden 不公开返回），或 all
  let statusFilter = '';
  const params = [];
  if (status === 'all') {
    statusFilter = "status IN ('pending','done','rejected')";
  } else if (STATUS_VALUES.has(status) && status !== 'hidden') {
    statusFilter = 'status = ?';
    params.push(status);
  } else {
    statusFilter = "status = 'pending'";
  }

  let orderBy = 'upvotes DESC, created_at DESC';
  if (sort === 'latest') orderBy = 'created_at DESC';
  // category 模式：前端做分组，后端按 upvotes 排，前端再二次分组
  if (sort === 'category') orderBy = 'category ASC, upvotes DESC, created_at DESC';

  let categoryFilter = '';
  if (category) {
    categoryFilter = ' AND category = ?';
    params.push(category);
  }

  const sql = `SELECT id, title, description, category, nickname, status, upvotes,
                      created_at, updated_at,
                      (SELECT COUNT(*) FROM competitors c WHERE c.wish_id = wishes.id) AS competitor_count
               FROM wishes
               WHERE ${statusFilter}${categoryFilter}
               ORDER BY ${orderBy}
               LIMIT ? OFFSET ?`;
  params.push(limit, offset);

  const { results } = await env.DB.prepare(sql).bind(...params).all();
  // 获取总数用于分页
  const countSql = `SELECT COUNT(*) AS total FROM wishes WHERE ${statusFilter}${categoryFilter}`;
  const countParams = params.slice(0, status === 'all' ? 0 : (status === 'pending' || !STATUS_VALUES.has(status) || status === 'hidden' ? 0 : 1));
  // 简化：重新构造 count 参数
  const cntParams = [];
  if (status === 'all') {
    // 无参数
  } else {
    cntParams.push(status === 'pending' || !STATUS_VALUES.has(status) || status === 'hidden' ? 'pending' : status);
  }
  if (category) cntParams.push(category);
  const cntRes = await env.DB.prepare(countSql).bind(...cntParams).first();

  return json({
    items: results || [],
    total: cntRes?.total || 0,
    limit,
    offset,
  }, 200, corsHeaders);
}

// ------------------------------ GET /api/wishes/count ------------------------------
async function handleCount(request, env, corsHeaders) {
  if (!env.DB) return json({ count: 0 }, 200, corsHeaders);
  const res = await env.DB.prepare(
    "SELECT COUNT(*) AS total FROM wishes WHERE status IN ('pending','done','rejected')"
  ).first();
  return json({ count: res?.total || 0 }, 200, corsHeaders);
}

// ------------------------------ GET /api/wishes/search（查重） ------------------------------
async function handleSearch(request, env, corsHeaders) {
  if (!env.DB) return json({ items: [] }, 200, corsHeaders);
  const url = new URL(request.url);
  const q = (url.searchParams.get('q') || '').trim();
  if (!q) return json({ items: [], similar: false }, 200, corsHeaders);

  // 把查询转为 FTS5 安全的 token 序列（用空格分隔，去掉特殊字符）
  const ftsQuery = sanitizeFtsQuery(q);
  if (!ftsQuery) return json({ items: [], similar: false }, 200, corsHeaders);

  try {
    const { results } = await env.DB.prepare(
      `SELECT w.id, w.title, w.description, w.category, w.status, w.upvotes, w.created_at,
              bm25(wishes_fts) AS score
       FROM wishes_fts
       JOIN wishes w ON w.id = wishes_fts.rowid
       WHERE wishes_fts MATCH ? AND w.status != 'hidden'
       ORDER BY score
       LIMIT ?`
    ).bind(ftsQuery, SEARCH_LIMIT).all();

    const items = results || [];
    // 判定是否「高度相似」：取 query 与结果 title 的 token 重叠数
    const qTokens = tokenize(q);
    let similar = false;
    for (const it of items) {
      const tTokens = tokenize(it.title || '');
      const overlap = qTokens.filter(t => tTokens.includes(t)).length;
      if (overlap >= 2) { similar = true; break; }
    }
    return json({ items, similar }, 200, corsHeaders);
  } catch (err) {
    console.error('search error', err);
    return json({ items: [], similar: false, error: 'search_failed' }, 200, corsHeaders);
  }
}

// ------------------------------ GET /api/wishes/:id（详情） ------------------------------
async function handleDetail(idStr, env, corsHeaders) {
  if (!env.DB) return json({ error: 'DB 未配置' }, 500, corsHeaders);
  const id = parseInt(idStr, 10);
  if (!id) return json({ error: '无效 id' }, 400, corsHeaders);

  const wish = await env.DB.prepare(
    `SELECT id, title, description, category, nickname, status, upvotes, created_at, updated_at
     FROM wishes WHERE id = ?`
  ).bind(id).first();
  if (!wish) return json({ error: '不存在' }, 404, corsHeaders);
  if (wish.status === 'hidden') return json({ error: '不存在' }, 404, corsHeaders);

  const { results: competitors } = await env.DB.prepare(
    'SELECT name, url, lang FROM competitors WHERE wish_id = ? ORDER BY id ASC'
  ).bind(id).all();

  return json({ ...wish, competitors: competitors || [] }, 200, corsHeaders);
}

// ------------------------------ POST /api/wishes（创建） ------------------------------
async function handleCreate(request, env, corsHeaders) {
  // 1. Origin 白名单
  const originCheck = checkOrigin(request, env);
  if (!originCheck.ok) {
    return json({ error: originCheck.reason }, 403, corsHeaders);
  }

  // 2. 解析请求体
  let body;
  try { body = await request.json(); } catch (e) {
    return json({ error: '请求体格式错误' }, 400, corsHeaders);
  }
  const { title, description, category, nickname, email, competitors, turnstileToken, force } = body || {};

  // 3. 必填校验
  if (!str(title) || !str(description) || !str(category)) {
    return json({ error: '缺少必填字段：title / description / category' }, 400, corsHeaders);
  }
  if (!Array.isArray(competitors) || competitors.length === 0) {
    return json({ error: '至少需要提供一个竞品' }, 400, corsHeaders);
  }
  for (const c of competitors) {
    if (!str(c.name) || !str(c.url) || !str(c.lang)) {
      return json({ error: '竞品字段不完整（name/url/lang 均必填）' }, 400, corsHeaders);
    }
    if (c.url.length > 500 || !/^https?:\/\//i.test(c.url)) {
      return json({ error: `竞品链接不合法：${c.url}` }, 400, corsHeaders);
    }
    if (c.name.length > 120) {
      return json({ error: '竞品名称过长' }, 400, corsHeaders);
    }
  }

  // 4. 长度校验
  if (title.length > 120) return json({ error: '标题过长' }, 400, corsHeaders);
  if (description.length > 2000) return json({ error: '描述过长' }, 400, corsHeaders);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: '邮箱格式不正确' }, 400, corsHeaders);
  }

  // 5. Turnstile 人机验证
  if (!turnstileToken) return json({ error: '请先完成人机验证' }, 400, corsHeaders);
  const tsResult = await verifyTurnstile(turnstileToken, env, request);
  if (!tsResult.ok) {
    return json({ error: tsResult.reason || '人机验证失败' }, 403, corsHeaders);
  }

  // 6. IP 频率限制
  const ip = getClientIp(request);
  const limit = parseInt(env.IP_RATE_LIMIT_PER_HOUR || '', 10) || DEFAULT_IP_RATE_LIMIT;
  if (!checkIpRate(ipCreateBuckets, ip, limit)) {
    return json({ error: '提交过于频繁，请稍后再试' }, 429, corsHeaders);
  }

  // 7. 查重检测（除非 force=true 跳过）
  if (!force) {
    const dup = await detectDuplicate(env, title, description);
    if (dup.similar) {
      return json({
        error: '检测到高度相似许愿',
        code: 'DUPLICATE_FOUND',
        similarWishes: dup.items,
      }, 409, corsHeaders);
    }
  }

  // 8. 写入数据库
  const ipHash = await sha256(ip + (env.SECRET_SALT || ''));
  const ipPrefix = ipHash.slice(0, 16);
  const ua = (request.headers.get('user-agent') || '—').slice(0, 200);
  const safeNick = str(nickname) ? nickname.slice(0, 60) : '匿名';
  const safeEmail = str(email) ? email.slice(0, 120) : '';
  const now = Date.now();

  const insertWish = await env.DB.prepare(
    `INSERT INTO wishes (title, description, category, nickname, email, status, upvotes, ip_hash, user_agent, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, 'pending', 0, ?, ?, ?, ?)`
  ).bind(title, description, category, safeNick, safeEmail, ipPrefix, ua, now, now).run();

  const wishId = insertWish.meta?.last_row_id;
  if (!wishId) {
    return json({ error: '创建失败' }, 500, corsHeaders);
  }

  // 写入竞品
  for (const c of competitors) {
    await env.DB.prepare(
      'INSERT INTO competitors (wish_id, name, url, lang, created_at) VALUES (?, ?, ?, ?, ?)'
    ).bind(wishId, c.name.slice(0, 120), c.url.slice(0, 500), c.lang, now).run();
  }

  return json({
    ok: true,
    id: wishId,
    title,
    description,
    category,
    nickname: safeNick,
    status: 'pending',
    upvotes: 0,
    competitors,
    created_at: now,
  }, 200, corsHeaders);
}

// ------------------------------ POST /api/wishes/:id/upvote（+1） ------------------------------
async function handleUpvote(idStr, request, env, corsHeaders) {
  if (!env.DB) return json({ error: 'DB 未配置' }, 500, corsHeaders);
  const id = parseInt(idStr, 10);
  if (!id) return json({ error: '无效 id' }, 400, corsHeaders);

  // Origin 白名单
  const originCheck = checkOrigin(request, env);
  if (!originCheck.ok) return json({ error: originCheck.reason }, 403, corsHeaders);

  // IP 频率限制
  const ip = getClientIp(request);
  const limit = parseInt(env.IP_UPVOTE_LIMIT_PER_HOUR || '', 10) || DEFAULT_IP_UPVOTE_LIMIT;
  if (!checkIpRate(ipUpvoteBuckets, ip, limit)) {
    return json({ error: '操作过于频繁，请稍后再试' }, 429, corsHeaders);
  }

  const ipHash = await sha256(ip + (env.SECRET_SALT || ''));
  const ipPrefix = ipHash.slice(0, 16);
  const now = Date.now();

  // 检查 wish 是否存在且非 hidden
  const wish = await env.DB.prepare(
    "SELECT id, status, upvotes FROM wishes WHERE id = ? AND status != 'hidden'"
  ).bind(id).first();
  if (!wish) return json({ error: '许愿不存在' }, 404, corsHeaders);

  // 尝试插入 upvote_logs（UNIQUE 约束会拦截同 IP 重复）
  try {
    await env.DB.prepare(
      'INSERT INTO upvote_logs (wish_id, ip_hash, created_at) VALUES (?, ?, ?)'
    ).bind(id, ipPrefix, now).run();
    // 成功插入，更新计数
    await env.DB.prepare(
      'UPDATE wishes SET upvotes = upvotes + 1, updated_at = ? WHERE id = ?'
    ).bind(now, id).run();
    const updated = await env.DB.prepare('SELECT upvotes FROM wishes WHERE id = ?').bind(id).first();
    return json({ ok: true, upvotes: updated?.upvotes || 0, voted: true }, 200, corsHeaders);
  } catch (err) {
    // UNIQUE 冲突 = 已投过
    return json({ ok: false, error: '已经为这条许愿点过赞了', upvotes: wish.upvotes, voted: false }, 409, corsHeaders);
  }
}

// ------------------------------ PATCH /api/wishes/:id/status（管理员） ------------------------------
async function handleStatus(idStr, request, env, corsHeaders) {
  if (!env.DB) return json({ error: 'DB 未配置' }, 500, corsHeaders);
  // 管理员鉴权
  const adminToken = request.headers.get('x-admin-token') || '';
  if (!env.ADMIN_TOKEN || adminToken !== env.ADMIN_TOKEN) {
    return json({ error: '未授权' }, 403, corsHeaders);
  }
  const id = parseInt(idStr, 10);
  if (!id) return json({ error: '无效 id' }, 400, corsHeaders);

  let body;
  try { body = await request.json(); } catch (e) {
    return json({ error: '请求体格式错误' }, 400, corsHeaders);
  }
  const { status } = body || {};
  if (!STATUS_VALUES.has(status)) {
    return json({ error: `无效状态，允许：${[...STATUS_VALUES].join('/')}` }, 400, corsHeaders);
  }

  const now = Date.now();
  await env.DB.prepare('UPDATE wishes SET status = ?, updated_at = ? WHERE id = ?')
    .bind(status, now, id).run();
  return json({ ok: true, id, status }, 200, corsHeaders);
}

// ------------------------------ 工具函数 ------------------------------
function buildCors(env) {
  const allow = env.ALLOWED_ORIGIN || '*';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Admin-Token',
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
    method: 'POST', body: form,
  });
  if (!res.ok) return { ok: false, reason: 'Turnstile 验证服务不可用' };
  const data = await res.json();
  if (!data.success) return { ok: false, reason: '人机验证失败' };
  // hostname 校验
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

function checkIpRate(bucketMap, ip, limitPerHour) {
  if (!ip) return true;
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  let bucket = bucketMap.get(ip);
  if (!bucket || now - bucket.windowStart > windowMs) {
    bucket = { windowStart: now, count: 0 };
    bucketMap.set(ip, bucket);
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

function json(obj, status, headers) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers },
  });
}

// FTS5 查询安全化：去掉特殊字符，用空格分隔 token，每个 token 加前缀 *
function sanitizeFtsQuery(q) {
  // FTS5 中双引号包裹整个查询串作为 phrase，避免特殊字符被当作操作符
  // 但 unicode61 分词对中文支持有限，这里用 OR 连接各 token
  const tokens = tokenize(q).slice(0, 10);
  if (tokens.length === 0) return '';
  // 用 OR 连接，并加 * 支持前缀匹配
  return tokens.map(t => `"${t.replace(/"/g, '""')}"*`).join(' OR ');
}

function tokenize(s) {
  if (!s) return [];
  // 简易分词：英文按空格/标点分，中文按字分
  const cleaned = String(s).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  if (!cleaned) return [];
  const tokens = [];
  // 对中文字符（CJK 统一表意）按字分
  for (const ch of cleaned) {
    if (/[\u4e00-\u9fff]/.test(ch)) {
      tokens.push(ch);
    }
  }
  // 对英文/数字按空格分
  for (const w of cleaned.split(/\s+/)) {
    if (w && !/[\u4e00-\u9fff]/.test(w)) tokens.push(w);
  }
  // 去重
  return [...new Set(tokens)];
}

// 查重检测：调 FTS5 + 判定相似度
async function detectDuplicate(env, title, description) {
  try {
    const ftsQuery = sanitizeFtsQuery(title);
    if (!ftsQuery) return { similar: false, items: [] };
    const { results } = await env.DB.prepare(
      `SELECT w.id, w.title, w.description, w.category, w.status, w.upvotes, w.created_at,
              bm25(wishes_fts) AS score
       FROM wishes_fts
       JOIN wishes w ON w.id = wishes_fts.rowid
       WHERE wishes_fts MATCH ? AND w.status != 'hidden'
       ORDER BY score LIMIT 5`
    ).bind(ftsQuery, SEARCH_LIMIT).all();
    const items = results || [];
    if (items.length === 0) return { similar: false, items: [] };

    // 判定高度相似：title token 重叠 >= 2，或 description 命中 >= 3 个关键词
    const tTokens = tokenize(title);
    const dTokens = tokenize(description);
    let similar = false;
    for (const it of items) {
      const itTTokens = tokenize(it.title || '');
      const titleOverlap = tTokens.filter(t => itTTokens.includes(t)).length;
      const itDTokens = tokenize(it.description || '');
      const descOverlap = dTokens.filter(t => itDTokens.includes(t)).length;
      if (titleOverlap >= 2 || descOverlap >= 3) { similar = true; break; }
    }
    return { similar, items };
  } catch (err) {
    console.error('detect duplicate error', err);
    return { similar: false, items: [] };
  }
}
