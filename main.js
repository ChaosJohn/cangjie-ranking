'use strict';

// =================== 全局状态 ===================
const state = {
  data: null,             // { snapshot_date, counts, projects: [...] }
  projects: [],           // 排好序的工作集
  view: 'top',            // 当前视图：top / category / source / activity / search
  sort: 'stars',          // top/activity 视图排序键
  sortDir: 'desc',       // 仅在 sort=name 时启用升序/降序切换
  topN: 100,
  showNew: false,        // 是否显示 is_new=true 的项目（默认隐藏）
  filters: {
    q: '',
    sources: new Set(),
    classifications: new Set(),
    activities: new Set(),
    licenses: new Set(),
    newOnly: false,      // 搜索视图专用：仅看新项目
    minStars: null,
    minForks: null,
  },
  collapsed: new Set(),  // 分组视图折叠的组
};

// =================== 工具 ===================
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const el = (tag, props = {}, ...children) => {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === 'class') e.className = v;
    else if (k === 'html') e.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') e.addEventListener(k.slice(2), v);
    else if (v !== null && v !== undefined) e.setAttribute(k, v);
  }
  for (const c of children) {
    if (c == null) continue;
    e.append(c.nodeType ? c : document.createTextNode(String(c)));
  }
  return e;
};
const fmtNum = n => (n ?? 0).toLocaleString('en-US');
const fmtDate = s => {
  if (!s) return '—';
  const d = new Date(s);
  if (isNaN(d)) return s;
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};
const sortCmp = (key, dir = 'desc') => (a, b) => {
  const va = a[key] ?? 0, vb = b[key] ?? 0;
  if (typeof va === 'number' && typeof vb === 'number') {
    return dir === 'desc' ? vb - va : va - vb;
  }
  const sa = String(va), sb = String(vb);
  return dir === 'desc' ? sb.localeCompare(sa) : sa.localeCompare(sb);
};

// =================== 数据加载 ===================
async function loadData() {
  const res = await fetch('data.json');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  state.data = await res.json();
  state.projects = state.data.projects.slice();
}

// =================== 主入口 ===================
async function init() {
  try {
    await loadData();
  } catch (err) {
    $('#content').innerHTML = `<div class="empty">数据加载失败：${err.message}<br>请通过本地 HTTP 服务器（如 <code>python3 -m http.server</code>）打开。</div>`;
    return;
  }
  $('#snapshot-date').textContent = state.data.snapshot_date || '—';
  $('#total-records').textContent = fmtNum(state.projects.length);

  bindTabs();
  bindGlobalToggle();
  bindKeyboard();
  updateNewCount();
  renderView();
  initWishBadge();
}

// =================== 新项目过滤（全局开关）===================

function isHiddenNew(p) {
  // 默认隐藏 is_new=true 的项目；勾选 showNew 后全部显示
  return !state.showNew && p.is_new === true;
}

function updateNewCount() {
  const n = state.projects.filter(p => p.is_new === true).length;
  const el = $('#new-count');
  if (!el) return;
  if (n > 0) {
    el.textContent = `+${n}`;
    el.hidden = false;
  } else {
    el.hidden = true;
  }
}

function bindGlobalToggle() {
  const cb = $('#show-new');
  const lbl = cb?.closest('.global-toggle');
  if (!cb) return;
  cb.addEventListener('change', () => {
    state.showNew = cb.checked;
    lbl.classList.toggle('active', cb.checked);
    renderView();
  });
}

// =================== Tab 切换 ===================
function bindTabs() {
  $$('#tabs .tab').forEach(t => {
    t.addEventListener('click', () => {
      $$('#tabs .tab').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      state.view = t.dataset.view;
      state.collapsed.clear();
      renderView();
    });
  });
}

function bindKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.key === '/' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      const q = $('#search-q');
      if (q) q.focus();
    }
  });
}

// =================== 视图渲染入口 ===================
function renderView() {
  const c = $('#controls');
  c.innerHTML = '';
  c.hidden = true;
  const content = $('#content');
  content.innerHTML = '';

  switch (state.view) {
    case 'top':       renderTop(content, c); break;
    case 'category':  renderGrouped(content, c, 'category', '分类分组'); break;
    case 'source':    renderGrouped(content, c, 'source', '来源分组'); break;
    case 'activity':  renderActivity(content, c); break;
    case 'search':    renderSearch(content, c); break;
  }
}

// =================== 视图 1：Top 排行 ===================
function renderTop(root, ctrl) {
  // 清空旧内容，避免排序/方向/Top N 变化时叠加渲染
  ctrl.innerHTML = '';
  ctrl.hidden = false;
  root.innerHTML = '';
  ctrl.append(
    group('排序', selectInput('sort', state.sort, [
      ['stars', '★ Star'],
      ['forks', '⑂ Fork'],
      ['issues', 'Issues'],
      ['pull_requests', 'PR'],
      ['name', '名称'],
      ['updated_at', '更新时间'],
    ], e => {
      state.sort = e.target.value;
      if (state.sort !== 'name') state.sortDir = 'desc';
      renderTop(root, ctrl);
    })),
    ...(state.sort === 'name' ? [selectInput('dir', state.sortDir, [
      ['desc', '降序'],
      ['asc', '升序'],
    ], e => { state.sortDir = e.target.value; renderTop(root, ctrl); })] : []),
    label('展示', numberInput('topN', state.topN, 5, 500, e => {
      const v = Math.max(5, Math.min(500, +e.target.value || 100));
      state.topN = v; renderTop(root, ctrl);
    })),
    span(`共 ${state.projects.length} 条`),
  );

  const visible = state.projects.filter(p => !isHiddenNew(p));
  const sorted = visible.slice().sort(sortCmp(state.sort, state.sortDir));
  const list = sorted.slice(0, state.topN);
  const list2 = el('ol', { class: 'rank-list' });
  list.forEach((p, i) => list2.append(rankItem(p, i + 1)));
  root.append(list2);

  if (sorted.length > state.topN) {
    root.append(el('div', { class: 'empty' },
      `仅展示前 ${state.topN} 条，共 ${sorted.length} 条。`));
  }
}

function rankItem(p, rank) {
  const item = el('article', { class: 'rank-item' });
  item.append(
    el('div', { class: `rank-num${rank <= 3 ? ' top3' : ''}` }, String(rank)),
    el('div', { class: 'rank-main' },
      el('a', {
        class: 'rank-name',
        href: p.url, target: '_blank', rel: 'noopener',
      }, p.display_name || p.name),
      p.is_new === true ? el('span', { class: 'badge is-new' }, '新') : null,
      sourceBadge(p.source),
      el('div', { class: 'rank-desc' }, p.description || '—'),
      el('div', { class: 'rank-meta' },
        span(p.category || '—'),
        p.language ? span(`· ${p.language}`) : null,
        p.license ? span(`· ${p.license}`) : null,
        span(`· ${fmtDate(p.updated_at)}`),
      ),
    ),
    el('div', { class: 'rank-side' },
      el('div', { class: 'rank-stars' }, fmtNum(p.stars)),
      el('div', { class: 'rank-stars-label' }, 'stars'),
      el('div', { class: 'rank-forks' }, `⑂ ${fmtNum(p.forks)}`),
    ),
  );
  return item;
}

// =================== 视图 2/3：分组 ===================
function renderGrouped(root, ctrl, key, title) {
  ctrl.innerHTML = '';
  ctrl.hidden = false;
  root.innerHTML = '';
  const groups = new Map();
  let visibleCount = 0;
  for (const p of state.projects) {
    if (isHiddenNew(p)) continue;
    visibleCount++;
    const g = p[key] || '未分类';
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(p);
  }

  // 排序组：组内 Star 之和降序
  const sortedGroups = [...groups.entries()]
    .sort((a, b) => sumStars(b[1]) - sumStars(a[1]));

  // 控件：每组的 Top N、排序键
  ctrl.append(
    group('每组织录', numberInput('perGroup', 8, 1, 50, e => {
      const v = Math.max(1, Math.min(50, +e.target.value || 8));
      state._perGroup = v;
      renderGrouped(root, ctrl, key, title);
    })),
    span(`· ${sortedGroups.length} 个分组 · ${visibleCount} 条记录`),
  );

  const perGroup = state._perGroup ?? 8;

  for (const [groupName, items] of sortedGroups) {
    const top = items.slice().sort(sortCmp('stars', 'desc')).slice(0, perGroup);
    const section = el('section', { class: `group-section${state.collapsed.has(groupName) ? ' collapsed' : ''}` });
    section.append(el('h2', { class: 'group-title' },
      groupName,
      el('span', { class: 'group-count' }, `${items.length} 项 · 展示前 ${top.length}`),
      el('button', {
        class: 'group-collapser',
        onclick: () => {
          if (state.collapsed.has(groupName)) state.collapsed.delete(groupName);
          else state.collapsed.add(groupName);
          section.classList.toggle('collapsed');
        },
      }, state.collapsed.has(groupName) ? '展开' : '收起'),
    ));
    const grid = el('div', { class: 'grid' });
    top.forEach((p, i) => grid.append(projectCard(p, i + 1)));
    section.append(grid);
    root.append(section);
  }
}

function sumStars(arr) { return arr.reduce((s, p) => s + (p.stars || 0), 0); }

// =================== 视图 4：活跃度 ===================
function renderActivity(root, ctrl) {
  ctrl.innerHTML = '';
  ctrl.hidden = false;
  root.innerHTML = '';
  const order = ['活跃', '维护中', '低活跃', '沉寂'];
  const buckets = new Map(order.map(a => [a, []]));
  for (const p of state.projects) {
    if (isHiddenNew(p)) continue;
    const a = p.activity || '未知';
    if (!buckets.has(a)) buckets.set(a, []);
    buckets.get(a).push(p);
  }

  ctrl.append(
    group('排序', selectInput('sort', state.sort, [
      ['stars', '★ Star'],
      ['forks', '⑂ Fork'],
      ['name', '名称'],
      ['updated_at', '更新时间'],
    ], e => {
      state.sort = e.target.value;
      if (state.sort !== 'name') state.sortDir = 'desc';
      renderActivity(root, ctrl);
    })),
    ...(state.sort === 'name' ? [selectInput('dir', state.sortDir, [
      ['desc', '降序'],
      ['asc', '升序'],
    ], e => { state.sortDir = e.target.value; renderActivity(root, ctrl); })] : []),
    span(`· ${order.length} 个活跃度级别`),
  );

  for (const a of order) {
    const items = buckets.get(a) || [];
    if (!items.length) continue;
    const sorted = items.slice().sort(sortCmp(state.sort, state.sortDir));
    const section = el('section', { class: 'group-section' });
    section.append(el('h2', { class: 'group-title' },
      a,
      el('span', { class: 'group-count' }, `${sorted.length} 项`),
    ));
    const list = el('ol', { class: 'rank-list' });
    sorted.forEach((p, i) => list.append(rankItem(p, i + 1)));
    section.append(list);
    root.append(section);
  }
}

// =================== 视图 5：搜索过滤 ===================
function renderSearch(root, ctrl) {
  ctrl.innerHTML = '';
  ctrl.hidden = false;
  root.innerHTML = '';
  const f = state.filters;

  // 唯一值列表
  const sources = [...new Set(state.projects.map(p => p.source).filter(Boolean))].sort();
  const classes = [...new Set(state.projects.map(p => p.classification).filter(Boolean))].sort();
  const acts = [...new Set(state.projects.map(p => p.activity).filter(Boolean))].sort();
  const lics = [...new Set(state.projects.map(p => p.license).filter(Boolean))].sort();

  ctrl.append(
    group('关键词', searchInput('q', f.q, e => {
      f.q = e.target.value.trim().toLowerCase();
      renderSearchResults(root);
    }, '搜索名称 / 简介（按 / 聚焦）')),
    checkboxGroup('来源', sources, f.sources, () => renderSearchResults(root)),
    checkboxGroup('类型', classes, f.classifications, () => renderSearchResults(root)),
    checkboxGroup('活跃度', acts, f.activities, () => renderSearchResults(root)),
    checkboxGroup('许可证', lics, f.licenses, () => renderSearchResults(root)),
    newOnlyGroup(f, () => renderSearchResults(root)),
    group('最小', numberInput('minStars', f.minStars ?? '', 0, 10000, e => {
      f.minStars = e.target.value === '' ? null : +e.target.value;
      renderSearchResults(root);
    }), '★',
       numberInput('minForks', f.minForks ?? '', 0, 10000, e => {
      f.minForks = e.target.value === '' ? null : +e.target.value;
      renderSearchResults(root);
    }), '⑂'),
    el('button', {
      class: 'tab',
      onclick: () => {
        f.q = '';
        f.sources.clear(); f.classifications.clear();
        f.activities.clear(); f.licenses.clear();
        f.newOnly = false;
        f.minStars = null; f.minForks = null;
        renderSearch(root, ctrl);
      },
    }, '清除筛选'),
  );

  renderSearchResults(root);
}

function renderSearchResults(root) {
  const f = state.filters;
  const filtered = state.projects.filter(p => {
    // 新项目：仅当 newOnly=true 时显示
    if (p.is_new === true) {
      if (!f.newOnly) return false;
    } else {
      // newOnly 模式下，排除非新项目
      if (f.newOnly) return false;
    }
    if (f.q) {
      const hay = `${p.name || ''} ${p.display_name || ''} ${p.description || ''} ${p.category || ''}`.toLowerCase();
      if (!hay.includes(f.q)) return false;
    }
    if (f.sources.size && !f.sources.has(p.source)) return false;
    if (f.classifications.size && !f.classifications.has(p.classification)) return false;
    if (f.activities.size && !f.activities.has(p.activity)) return false;
    if (f.licenses.size && !f.licenses.has(p.license)) return false;
    if (f.minStars != null && (p.stars || 0) < f.minStars) return false;
    if (f.minForks != null && (p.forks || 0) < f.minForks) return false;
    return true;
  }).sort(sortCmp('stars', 'desc'));

  root.innerHTML = '';
  root.append(el('div', { class: 'empty' },
    `命中 ${filtered.length} 条 / 共 ${state.projects.length} 条`
    + (f.newOnly ? '（仅新项目）' : '')));
  if (!filtered.length) return;

  const grid = el('div', { class: 'grid' });
  filtered.forEach((p, i) => grid.append(projectCard(p, i + 1)));
  root.append(grid);
}

// 搜索视图专用：「仅看新项目」开关
function newOnlyGroup(f, onChange) {
  const wrap = el('div', { class: 'control-group' });
  wrap.append(el('span', { class: 'label' }, '新项目'));
  const box = el('div', { class: 'checkbox-group' });
  const lbl = el('label', {}, '仅看新项目');
  const inp = el('input', {
    type: 'checkbox',
    id: 'new-only-toggle',
    ...(f.newOnly ? { checked: '' } : {}),
    onchange: e => {
      f.newOnly = e.target.checked;
      lbl.classList.toggle('active', e.target.checked);
      onChange();
    },
  });
  lbl.prepend(inp);
  if (f.newOnly) lbl.classList.add('active');
  box.append(lbl);
  wrap.append(box);
  return wrap;
}

// =================== 卡片 ===================
function projectCard(p, rank) {
  const tpl = $('#card-template').content.cloneNode(true);
  const card = tpl.querySelector('.card');
  card.querySelector('.card-name').textContent = p.display_name || p.name;
  card.querySelector('.card-name').href = p.url;
  card.querySelector('.card-rank').textContent = `#${rank}`;
  card.querySelector('.card-desc').textContent = p.description || '—';
  const badges = card.querySelector('.card-badges');
  if (p.is_new === true) badges.append(el('span', { class: 'badge is-new' }, '新项目'));
  if (p.source) badges.append(el('span', { class: `badge source-${p.source}` }, p.source));
  if (p.activity) badges.append(el('span', { class: `badge activity-${p.activity}` }, p.activity));
  if (p.official_catalog) badges.append(el('span', { class: 'badge' }, 'TPC 官方'));
  if (p.category) badges.append(el('span', { class: 'badge' }, p.category));
  const stats = card.querySelector('.card-stats');
  stats.append(
    el('span', { class: 'stat stat-star' }, `★ ${fmtNum(p.stars)}`),
    el('span', { class: 'stat stat-fork' }, `⑂ ${fmtNum(p.forks)}`),
    el('span', { class: 'stat' }, `Issue ${fmtNum(p.issues)}`),
    el('span', { class: 'stat' }, `PR ${fmtNum(p.pull_requests)}`),
  );
  card.querySelector('.card-foot').append(
    el('span', {}, p.language || '—'),
    el('span', {}, `${p.license || '—'} · ${fmtDate(p.updated_at)}`),
  );
  return card;
}

// =================== 辅助构造控件 ===================
function span(text) { return el('span', {}, text); }
function label(text, ...children) {
  return el('label', { class: 'control-group' }, el('span', {}, text), ...children);
}
function group(text, ...children) {
  return el('div', { class: 'control-group' }, el('span', { class: 'label' }, text), ...children);
}
function searchInput(name, val, onInput, placeholder) {
  const attrs = {
    class: 'search-input',
    type: 'search', name, value: val, placeholder,
    oninput: onInput,
  };
  if (name === 'q') attrs.id = 'search-q';
  return el('input', attrs);
}
function selectInput(name, val, opts, onChange) {
  const sel = el('select', { class: 'input', name, onchange: onChange });
  for (const [v, t] of opts) {
    sel.append(el('option', { value: v, ...(v === val ? { selected: '' } : {}) }, t));
  }
  return sel;
}
function numberInput(name, val, min, max, onChange) {
  return el('input', {
    class: 'input', type: 'number', name, value: val,
    min: String(min), max: String(max),
    oninput: onChange,
  });
}
function checkboxGroup(labelText, options, selectedSet, onChange) {
  const wrap = el('div', { class: 'control-group' });
  wrap.append(el('span', { class: 'label' }, labelText));
  const box = el('div', { class: 'checkbox-group' });
  for (const opt of options) {
    const lbl = el('label', {}, opt);
    const inp = el('input', {
      type: 'checkbox', value: opt,
      ...(selectedSet.has(opt) ? { checked: '' } : {}),
      onchange: e => {
        if (e.target.checked) selectedSet.add(opt);
        else selectedSet.delete(opt);
        lbl.classList.toggle('active', e.target.checked);
        onChange();
      },
    });
    lbl.prepend(inp);
    if (selectedSet.has(opt)) lbl.classList.add('active');
    box.append(lbl);
  }
  wrap.append(box);
  return wrap;
}

function sourceBadge(source) {
  if (!source) return null;
  return el('span', { class: 'rank-source' }, source);
}

// =================== 主题切换 ===================
const THEME_KEY = 'theme';
const THEME_CYCLE = [
  { id: 'system', icon: '🖥️', label: '自动' },
  { id: 'light', icon: '☀️', label: '浅色' },
  { id: 'dark', icon: '🌙', label: '深色' },
];

function getStoredTheme() {
  try {
    const t = localStorage.getItem(THEME_KEY);
    return THEME_CYCLE.some(x => x.id === t) ? t : 'system';
  } catch (e) {
    return 'system';
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const cfg = THEME_CYCLE.find(t => t.id === theme) || THEME_CYCLE[0];
  const iconEl = document.getElementById('theme-icon');
  const labelEl = document.getElementById('theme-label');
  const btn = document.getElementById('theme-toggle');
  if (iconEl) iconEl.textContent = cfg.icon;
  if (labelEl) labelEl.textContent = cfg.label;
  if (btn) btn.title = `切换主题（当前：${cfg.label}）`;
}

function cycleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'system';
  const idx = THEME_CYCLE.findIndex(t => t.id === current);
  const next = THEME_CYCLE[(idx + 1) % THEME_CYCLE.length];
  try { localStorage.setItem(THEME_KEY, next.id); } catch (e) { /* 忽略写入失败 */ }
  applyTheme(next.id);
}

function initThemeToggle() {
  applyTheme(getStoredTheme());
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', cycleTheme);
}

// ====================================================================
// 许愿池 v2（Wish Pool）
// 自闭环的许愿管理：列表 / 详情 / +1 / 提交 / 查重
// 后端：Cloudflare Worker + D1（SQLite）+ FTS5 全文检索
// 不再依赖 GitHub Issues，全部数据走自有 API
// ====================================================================

const WISH_VOTED_KEY = 'wish_voted_ids';
const WISH_CATEGORIES = [
  ['库', '库（Library）'],
  ['工具', '工具（Tool）'],
  ['框架', '框架（Framework）'],
  ['其他', '其他'],
];
const WISH_LANGS = [
  ['', '请选择…'],
  ['Cangjie', 'Cangjie'],
  ['Rust', 'Rust'],
  ['Go', 'Go'],
  ['Python', 'Python'],
  ['Java', 'Java'],
  ['JavaScript', 'JavaScript'],
  ['TypeScript', 'TypeScript'],
  ['C++', 'C++'],
  ['C', 'C'],
  ['其他', '其他'],
];
const WISH_STATUSES = [
  ['pending', '待实现'],
  ['done', '已实现'],
  ['rejected', '不实现'],
];

// 运行时状态
const wishState = {
  view: 'list',              // list / detail / form
  sort: 'hot',               // hot / latest / category
  status: 'pending',         // pending / done / rejected / all
  items: [],
  total: 0,
  loaded: 0,
  loading: false,
  newWishId: null,           // 刚提交成功的 id，用于高亮
};

function wishConfig() {
  return window.WISH_CONFIG || { workerUrl: '', turnstileSiteKey: '', wishesPageSize: 20 };
}
function wishEnabled() {
  const c = wishConfig();
  return !!(c.workerUrl && c.turnstileSiteKey);
}
function wishPageSize() {
  return Math.max(5, Math.min(100, wishConfig().wishesPageSize || 20));
}

// ---------- 已投票记录（localStorage） ----------
function getVotedIds() {
  try { return new Set(JSON.parse(localStorage.getItem(WISH_VOTED_KEY) || '[]')); }
  catch (e) { return new Set(); }
}
function saveVotedId(id) {
  const s = getVotedIds();
  s.add(id);
  try { localStorage.setItem(WISH_VOTED_KEY, JSON.stringify([...s])); } catch (e) {}
}

// ---------- badge 初始化 ----------
async function initWishBadge() {
  const btn = document.getElementById('wish-btn');
  const badge = document.getElementById('wish-count');
  if (!btn) return;
  if (!wishEnabled()) {
    btn.disabled = true;
    btn.title = '许愿池尚未启用（管理员未配置 Cloudflare Worker / Turnstile）';
    return;
  }
  btn.addEventListener('click', openWishPool);
  try {
    const c = wishConfig();
    const res = await fetch(`${c.workerUrl}/api/wishes/count`, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) return;
    const data = await res.json();
    if (badge && typeof data.count === 'number' && data.count >= 0) {
      badge.textContent = String(data.count);
      badge.hidden = data.count === 0;
    }
  } catch (e) { /* 静默 */ }
}

function bumpWishBadge(delta) {
  const badge = document.getElementById('wish-count');
  if (!badge) return;
  const n = (parseInt(badge.textContent, 10) || 0) + delta;
  badge.textContent = String(n);
  badge.hidden = n <= 0;
}

// ---------- 弹层骨架 ----------
let wishTurnstileWidgetId = null;
let wishTurnstileReady = false;
let wishSearchTimer = null;
let wishPendingSubmit = null;   // 二次确认时暂存的提交数据

function openWishPool() {
  closeWishPool(true);
  const overlay = el('div', { class: 'wish-overlay', id: 'wish-overlay' });
  // 仅清单视图允许点击外部空白关闭；表单/详情视图有 × 按钮，不点外部关闭（避免误触丢失已填数据）
  overlay.addEventListener('click', e => {
    if (e.target === overlay && wishState.view === 'list') closeWishPool();
  });
  const wrap = el('div', { class: 'wish-modal-wrap' });
  const modal = el('div', { class: 'wish-modal', id: 'wish-modal' });
  // body 容器：各视图（list/detail/form）的内容都塞这里；× 按钮由非 list 视图自行加入 body
  const body = el('div', { class: 'wish-modal-body', id: 'wish-modal-body' });
  modal.append(body);
  wrap.append(modal);
  overlay.append(wrap);
  document.body.append(overlay);
  document.body.style.overflow = 'hidden';
  // 重置状态
  wishState.view = 'list';
  wishState.sort = 'hot';
  wishState.status = 'pending';
  wishState.items = [];
  wishState.total = 0;
  wishState.loaded = 0;
  wishState.newWishId = null;
  renderWishPool();
}

// 清空 modal body 内容，并一次性 append 所有节点
function setWishBody(...nodes) {
  const body = document.getElementById('wish-modal-body');
  if (!body) return;
  body.innerHTML = '';
  for (const n of nodes) body.append(n);
}

// 构造 × 关闭按钮（仅用于表单/详情视图，清单视图靠点击外部关闭）
function wishCloseBtn() {
  return el('button', {
    class: 'wish-close', type: 'button', 'aria-label': '关闭', onclick: () => closeWishPool(),
  }, '×');
}

function closeWishPool() {
  const overlay = document.getElementById('wish-overlay');
  if (overlay) overlay.remove();
  document.body.style.overflow = '';
  destroyTurnstile();
  wishState.items = [];
  wishState.total = 0;
  wishState.loaded = 0;
  wishPendingSubmit = null;
}

// ---------- 视图：列表 ----------
async function renderWishPool() {
  const body = document.getElementById('wish-modal-body');
  if (!body) return;
  wishState.view = 'list';

  // 头部：标题 + 提交按钮
  const header = el('div', { class: 'wish-pool-header' });
  header.append(
    el('h2', {}, '许愿池'),
    el('button', {
      class: 'wish-submit',
      type: 'button',
      onclick: () => renderWishForm(),
    }, '+ 提交许愿'),
  );

  // 工具栏：排序 + 状态
  const toolbar = el('div', { class: 'wish-pool-toolbar' });
  toolbar.append(
    el('div', { class: 'seg' },
      segBtn('hot', '🔥 热门', wishState.sort, () => switchSort('hot')),
      segBtn('latest', '🕐 最新', wishState.sort, () => switchSort('latest')),
      segBtn('category', '📚 分类', wishState.sort, () => switchSort('category')),
    ),
    el('div', { class: 'seg' },
      segBtn('pending', '待实现', wishState.status, () => switchStatus('pending')),
      segBtn('done', '已实现', wishState.status, () => switchStatus('done')),
      segBtn('rejected', '不实现', wishState.status, () => switchStatus('rejected')),
      segBtn('all', '全部', wishState.status, () => switchStatus('all')),
    ),
    el('span', { class: 'meta', id: 'wish-meta' }, '加载中…'),
  );

  // 列表容器
  const pool = el('div', { class: 'wish-pool', id: 'wish-pool' });
  pool.append(el('div', { class: 'wish-empty' }, '加载中…'));

  // 一次性渲染骨架（header + toolbar + pool），避免分步渲染造成 UI 跳变
  setWishBody(header, toolbar, pool);

  await loadWishes(true);
}

function segBtn(value, label, current, onClick) {
  return el('button', {
    type: 'button',
    class: value === current ? 'active' : '',
    onclick: onClick,
  }, label);
}

async function switchSort(s) {
  if (wishState.sort === s) return;
  wishState.sort = s;
  wishState.items = [];
  wishState.loaded = 0;
  await loadWishes(true);
}
async function switchStatus(s) {
  if (wishState.status === s) return;
  wishState.status = s;
  wishState.items = [];
  wishState.loaded = 0;
  await loadWishes(true);
}

async function loadWishes(reset) {
  const pool = document.getElementById('wish-pool');
  if (!pool) return;
  if (wishState.loading) return;
  wishState.loading = true;

  const limit = wishPageSize();
  const offset = wishState.loaded;
  if (reset) {
    wishState.items = [];
    wishState.loaded = 0;
    pool.innerHTML = '<div class="wish-empty">加载中…</div>';
  }

  try {
    const c = wishConfig();
    const url = `${c.workerUrl}/api/wishes?sort=${encodeURIComponent(wishState.sort)}&status=${encodeURIComponent(wishState.status)}&limit=${limit}&offset=${offset}`;
    const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    wishState.items = wishState.items.concat(data.items || []);
    wishState.total = data.total || 0;
    wishState.loaded = wishState.items.length;
    renderWishList();
  } catch (e) {
    pool.innerHTML = `<div class="wish-empty">加载失败：${escapeHtml(e.message)}</div>`;
  } finally {
    wishState.loading = false;
  }
}

function renderWishList() {
  const pool = document.getElementById('wish-pool');
  if (!pool) return;
  pool.innerHTML = '';
  const items = wishState.items;
  const meta = document.getElementById('wish-meta');
  if (meta) meta.textContent = `共 ${wishState.total} 条`;

  if (items.length === 0) {
    pool.append(el('div', { class: 'wish-empty' }, '还没有许愿，点击右上角「+ 提交许愿」来许第一个吧！'));
    return;
  }

  const voted = getVotedIds();

  if (wishState.sort === 'category') {
    // 按类别分组
    const groups = new Map();
    for (const w of items) {
      const g = w.category || '未分类';
      if (!groups.has(g)) groups.set(g, []);
      groups.get(g).push(w);
    }
    for (const [cat, ws] of groups) {
      pool.append(el('h3', { style: 'margin:14px 0 6px;font-size:14px;color:var(--text-mute);' }, cat));
      for (const w of ws) pool.append(renderWishCard(w, voted));
    }
  } else {
    for (const w of items) pool.append(renderWishCard(w, voted));
  }

  // 加载更多
  if (wishState.loaded < wishState.total) {
    const btn = el('button', {
      class: 'wish-load-more',
      onclick: () => loadWishes(false),
    }, `加载更多（还剩 ${wishState.total - wishState.loaded} 条）`);
    pool.append(btn);
  }
}

function renderWishCard(w, voted) {
  const isVoted = voted.has(w.id);
  const card = el('div', {
    class: `wish-card${w.id === wishState.newWishId ? ' is-new' : ''}`,
    onclick: () => renderWishDetail(w.id),
  });
  card.append(
    el('div', { class: 'wish-card-row' },
      el('div', { class: 'wish-card-main' },
        el('h3', { class: 'wish-card-title' }, w.title),
        el('div', { class: 'wish-card-meta' },
          el('span', { class: 'cat' }, w.category || '—'),
          statusBadge(w.status),
          el('span', {}, `· ${w.competitor_count || 0} 个竞品`),
          el('span', {}, `· ${fmtDate(new Date(w.created_at).toISOString())}`),
          el('span', {}, `· by ${w.nickname || '匿名'}`),
        ),
      ),
      el('div', { class: 'wish-card-side' },
        renderUpvoteBtn(w, isVoted),
      ),
    ),
  );
  return card;
}

function renderUpvoteBtn(w, isVoted) {
  const btn = el('button', {
    class: `wish-upvote${isVoted ? ' voted' : ''}`,
    type: 'button',
    disabled: isVoted,
    onclick: async (e) => {
      e.stopPropagation();
      await upvoteWish(w.id, btn);
    },
  },
    el('span', { class: 'uv-icon' }, '👍'),
    el('span', { class: 'uv-num' }, String(w.upvotes || 0)),
  );
  return btn;
}

function statusBadge(status) {
  const map = { pending: '待实现', done: '已实现', rejected: '不实现', hidden: '已隐藏' };
  return el('span', { class: `wish-status-badge ${status || 'pending'}` }, map[status] || status);
}

async function upvoteWish(id, btn) {
  if (btn.disabled) return;
  const voted = getVotedIds();
  if (voted.has(id)) {
    btn.classList.add('voted');
    btn.disabled = true;
    return;
  }
  btn.disabled = true;
  const orig = btn.querySelector('.uv-num').textContent;
  btn.querySelector('.uv-num').textContent = '…';
  try {
    const c = wishConfig();
    const res = await fetch(`${c.workerUrl}/api/wishes/${id}/upvote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.ok) {
      btn.querySelector('.uv-num').textContent = String(data.upvotes);
      btn.classList.add('voted');
      saveVotedId(id);
      // 同步本地状态
      const w = wishState.items.find(x => x.id === id);
      if (w) w.upvotes = data.upvotes;
    } else if (res.status === 409) {
      // 已投过
      btn.classList.add('voted');
      btn.querySelector('.uv-num').textContent = String(data.upvotes || orig);
      saveVotedId(id);
    } else {
      btn.disabled = false;
      btn.querySelector('.uv-num').textContent = orig;
      alert(data.error || '投票失败');
    }
  } catch (e) {
    btn.disabled = false;
    btn.querySelector('.uv-num').textContent = orig;
    alert('网络错误，投票失败');
  }
}

// ---------- 视图：详情 ----------
async function renderWishDetail(id) {
  const body = document.getElementById('wish-modal-body');
  if (!body) return;
  wishState.view = 'detail';
  setWishBody(wishCloseBtn(), el('div', { class: 'wish-empty' }, '加载中…'));
  try {
    const c = wishConfig();
    const res = await fetch(`${c.workerUrl}/api/wishes/${id}`, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const w = await res.json();
    const detail = el('div', { class: 'wish-detail' });
    const voted = getVotedIds();
    detail.append(
      el('h3', {}, w.title),
      el('div', { class: 'wish-card-meta', style: 'margin-bottom:14px;' },
        el('span', { class: 'cat' }, w.category || '—'),
        statusBadge(w.status),
        el('span', {}, `· ${fmtDate(new Date(w.created_at).toISOString())}`),
        el('span', {}, `· by ${w.nickname || '匿名'}`),
      ),
      el('div', { class: 'detail-section' },
        el('h4', {}, '详细描述'),
        el('div', { class: 'detail-desc' }, w.description || '—'),
      ),
      el('div', { class: 'detail-section' },
        el('h4', {}, `竞品参考（${(w.competitors || []).length}）`),
        el('div', { class: 'wish-competitor-list' },
          ...(w.competitors || []).map(c =>
            el('div', { class: 'wish-competitor-item' },
              el('span', { class: 'comp-name' }, c.name),
              el('span', { class: 'comp-lang' }, c.lang),
              el('a', { class: 'comp-link', href: c.url, target: '_blank', rel: 'noopener' }, '查看 →'),
            ),
          ),
        ),
      ),
      el('div', { class: 'detail-back' },
        el('button', { type: 'button', class: 'wish-cancel', onclick: () => backToList() }, '← 返回列表'),
        el('span', { style: 'margin-left:auto;' }, renderUpvoteBtn(w, voted.has(w.id))),
      ),
    );
    setWishBody(wishCloseBtn(), detail);
  } catch (e) {
    setWishBody(wishCloseBtn(), el('div', { class: 'wish-empty' }, `加载失败：${escapeHtml(e.message)}`));
  }
}

function backToList() {
  renderWishPool();
}

// ---------- 视图：表单（创建许愿） ----------
function renderWishForm() {
  const body = document.getElementById('wish-modal-body');
  if (!body) return;
  wishState.view = 'form';
  const intro = el('div', {});
  intro.append(
    el('h2', {}, '提交许愿'),
    el('p', { class: 'wish-intro' },
      '告诉我们你希望仓颉社区建设哪些三方库或工具，并附上竞品来源，便于社区参考实现。匿名提交即可。'),
  );

  const form = el('form', { class: 'wish-form', id: 'wish-form' });

  // 标题（带实时查重）
  const titleInput = el('input', {
    type: 'text', id: 'wish-title', name: 'title', required: '',
    maxlength: '120', placeholder: '例如：仓颉版 Markdown 解析库', autocomplete: 'off',
  });
  titleInput.addEventListener('input', () => {
    clearTimeout(wishSearchTimer);
    const v = titleInput.value.trim();
    const similar = document.getElementById('wish-similar');
    if (!v) { if (similar) similar.remove(); return; }
    wishSearchTimer = setTimeout(() => searchSimilar(v), 400);
  });
  form.append(fieldEl('wish-title', '许愿标题', true, titleInput, '一句话描述你希望有的库/工具'));

  // 相似许愿提示容器（动态插入到 title field 之后）
  const similarBox = el('div', { class: 'wish-similar', id: 'wish-similar', hidden: '' });
  form.append(similarBox);

  // 详细描述
  form.append(fieldEl('wish-desc', '详细描述', true,
    el('textarea', { id: 'wish-desc', name: 'description', required: '',
      maxlength: '2000', placeholder: '说明使用场景、期望特性、为什么需要它……' }),
    '最多 2000 字'));

  // 类别
  form.append(fieldEl('wish-category', '类别', true,
    selectEl('category', [['', '请选择…'], ...WISH_CATEGORIES])));

  // 多竞品行
  const compBox = el('div', { class: 'wish-competitor-rows', id: 'wish-competitors' });
  compBox.append(buildCompetitorRow());
  const compField = el('div', { class: 'field' });
  compField.append(
    el('label', { class: 'field-label' }, '竞品参考', el('span', { class: 'required' }, ' *')),
    compBox,
    el('button', {
      type: 'button', class: 'wish-add-competitor',
      onclick: () => compBox.append(buildCompetitorRow()),
    }, '+ 添加竞品'),
    el('div', { class: 'field-hint' }, '至少一个，可添加多个同类竞品'),
  );
  form.append(compField);

  // 可选昵称 + 邮箱
  form.append(el('div', { class: 'field-row' },
    fieldEl('wish-nickname', '昵称（可选）', false,
      el('input', { type: 'text', id: 'wish-nickname', name: 'nickname',
        maxlength: '60', placeholder: '匿名', autocomplete: 'off' }),
      '留空将标记为「匿名」'),
    fieldEl('wish-email', '邮箱（可选）', false,
      el('input', { type: 'email', id: 'wish-email', name: 'email',
        maxlength: '120', placeholder: '便于后续反馈，不会公开展示', autocomplete: 'off' }),
      ''),
  ));

  // Turnstile + 错误 + 按钮
  form.append(el('div', { class: 'wish-turnstile', id: 'wish-turnstile' }));
  form.append(el('div', { class: 'wish-error', id: 'wish-error', hidden: '' }));
  form.append(el('div', { class: 'wish-actions' },
    el('button', { type: 'button', class: 'wish-cancel', onclick: () => renderWishPool() }, '← 返回列表'),
    el('button', { type: 'submit', class: 'wish-submit', id: 'wish-submit' }, '提交许愿'),
  ));

  form.addEventListener('submit', submitWish);
  setWishBody(wishCloseBtn(), intro, form);
  loadTurnstileWidget();
}

function buildCompetitorRow() {
  const row = el('div', { class: 'wish-competitor-row' });
  row.append(
    el('input', { type: 'text', name: 'comp_name',
      maxlength: '120', placeholder: '竞品名称', autocomplete: 'off' }),
    el('input', { type: 'url', name: 'comp_url',
      maxlength: '500', placeholder: 'https://github.com/...', autocomplete: 'off' }),
    selectEl('comp_lang', WISH_LANGS),
    el('button', {
      type: 'button', class: 'row-del', title: '删除此竞品',
      onclick: () => {
        const box = document.getElementById('wish-competitors');
        if (box && box.children.length > 1) row.remove();
      },
    }, '×'),
  );
  return row;
}

// ---------- 查重搜索 ----------
async function searchSimilar(q) {
  const box = document.getElementById('wish-similar');
  if (!box) return;
  try {
    const c = wishConfig();
    const res = await fetch(`${c.workerUrl}/api/wishes/search?q=${encodeURIComponent(q)}&limit=5`,
      { headers: { 'Accept': 'application/json' } });
    if (!res.ok) { box.hidden = true; return; }
    const data = await res.json();
    const items = data.items || [];
    if (items.length === 0) { box.hidden = true; return; }
    box.innerHTML = '';
    box.append(el('div', { class: 'wish-similar-title' },
      data.similar ? '⚠️ 检测到高度相似许愿，请先确认：' : '💡 看看是否有相似许愿：'));
    const list = el('div', { class: 'wish-similar-list' });
    for (const it of items) {
      const item = el('div', {
        class: 'wish-similar-item',
        onclick: () => renderWishDetail(it.id),
      }, `· ${it.title}（👍 ${it.upvotes || 0}）`);
      list.append(item);
    }
    box.append(list);
    box.hidden = false;
  } catch (e) {
    box.hidden = true;
  }
}

// ---------- Turnstile ----------
function loadTurnstileScript() {
  return new Promise((resolve, reject) => {
    if (window.turnstile) return resolve();
    const s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    s.async = true; s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Turnstile 加载失败'));
    document.head.append(s);
  });
}

async function loadTurnstileWidget() {
  const c = wishConfig();
  const container = document.getElementById('wish-turnstile');
  if (!container) return;
  wishTurnstileReady = false;
  try {
    await loadTurnstileScript();
    if (!window.turnstile) throw new Error('Turnstile 不可用');
    wishTurnstileWidgetId = window.turnstile.render(container, {
      sitekey: c.turnstileSiteKey,
      theme: document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light',
      callback: () => { wishTurnstileReady = true; clearWishError(); },
      'error-callback': () => { wishTurnstileReady = false; showWishError('人机验证加载失败，请刷新重试'); },
      'expired-callback': () => { wishTurnstileReady = false; },
    });
  } catch (e) {
    container.innerHTML = '';
    showWishError(e.message || 'Turnstile 加载失败');
  }
}

function destroyTurnstile() {
  if (wishTurnstileWidgetId && window.turnstile) {
    try { window.turnstile.remove(wishTurnstileWidgetId); } catch (e) {}
  }
  wishTurnstileWidgetId = null;
  wishTurnstileReady = false;
}

function getTurnstileToken() {
  if (!wishTurnstileWidgetId || !window.turnstile) return '';
  try { return window.turnstile.getResponse(wishTurnstileWidgetId) || ''; }
  catch (e) { return ''; }
}

// ---------- 表单提交 ----------
async function submitWish(e) {
  e.preventDefault();
  clearWishError();

  const form = e.currentTarget;
  const title = form.querySelector('#wish-title').value.trim();
  const description = form.querySelector('#wish-desc').value.trim();
  const category = form.querySelector('select[name="category"]').value;
  const nickname = form.querySelector('#wish-nickname').value.trim();
  const email = form.querySelector('#wish-email').value.trim();
  const token = getTurnstileToken();

  // 收集竞品行
  const compRows = [...form.querySelectorAll('.wish-competitor-row')];
  const competitors = compRows.map(r => ({
    name: r.querySelector('input[name="comp_name"]').value.trim(),
    url: r.querySelector('input[name="comp_url"]').value.trim(),
    lang: r.querySelector('select[name="comp_lang"]').value,
  })).filter(c => c.name && c.url && c.lang);

  // 前端校验
  if (!title || !description || !category) {
    showWishError('请填写所有必填字段'); return;
  }
  if (competitors.length === 0) {
    showWishError('至少需要提供一个完整竞品（名称/链接/语言）'); return;
  }
  if (!token) { showWishError('请先完成人机验证'); return; }

  const payload = { title, description, category, nickname, email, competitors, turnstileToken: token };

  // 如果是二次确认后的提交，带 force=true 跳过查重
  if (wishPendingSubmit && wishPendingSubmit.title === title) {
    payload.force = true;
    wishPendingSubmit = null;
  }

  const btn = document.getElementById('wish-submit');
  if (btn) { btn.disabled = true; btn.textContent = '提交中…'; }

  try {
    const c = wishConfig();
    const res = await fetch(`${c.workerUrl}/api/wishes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (res.status === 409 && data.code === 'DUPLICATE_FOUND') {
      // 检测到高度相似，弹二次确认
      btn.disabled = false; btn.textContent = '提交许愿';
      wishPendingSubmit = { title };  // 标记下一次同标题提交带 force=true
      showDuplicateConfirm(data.similarWishes || []);
      return;
    }
    if (!res.ok || !data.ok) {
      throw new Error(data.error || `提交失败（HTTP ${res.status}）`);
    }
    // 成功
    bumpWishBadge(1);
    wishState.newWishId = data.id;
    // 返回列表并刷新
    await renderWishPool();
    // 滚到顶部，便于看到新条目
    const modal = document.getElementById('wish-modal');
    if (modal) modal.scrollTop = 0;
  } catch (err) {
    showWishError(err.message || '提交失败，请稍后重试');
    if (btn) { btn.disabled = false; btn.textContent = '提交许愿'; }
  }
}

function showDuplicateConfirm(similarWishes) {
  const body = document.getElementById('wish-modal-body');
  if (!body) return;
  // 隐藏表单（保留 DOM 以便「坚持提交」重新触发）
  const form = document.getElementById('wish-form');
  if (form) form.style.display = 'none';

  const box = el('div', { class: 'wish-result' });
  box.append(
    el('div', { class: 'result-icon' }, '⚠️'),
    el('h3', {}, '检测到高度相似许愿'),
    el('p', {}, '以下许愿可能与你想提交的重复，建议先查看或给已有的 +1：'),
  );
  const list = el('div', { class: 'wish-similar-list', style: 'margin-bottom:16px;' });
  for (const w of similarWishes) {
    list.append(el('div', {
      class: 'wish-similar-item',
      onclick: () => renderWishDetail(w.id),
    }, `· ${w.title}（👍 ${w.upvotes || 0}）`));
  }
  box.append(list);
  box.append(el('p', {}, '仍要提交新许愿？'));
  box.append(el('div', { class: 'wish-actions' },
    el('button', {
      type: 'button', class: 'wish-cancel',
      onclick: () => {
        // 取消：恢复表单显示
        box.remove();
        wishPendingSubmit = null;
        if (form) form.style.display = '';
      },
    }, '取消，去查看'),
    el('button', {
      type: 'button', class: 'wish-submit',
      onclick: () => {
        // 重新触发表单提交（wishPendingSubmit 已设置，将带 force=true）
        if (form) {
          form.style.display = '';
          form.requestSubmit();
        }
      },
    }, '坚持提交'),
  ));
  body.append(box);
}

// ---------- 工具 ----------
function fieldEl(id, labelText, required, control, hint) {
  const f = el('div', { class: 'field' });
  const lbl = el('label', { class: 'field-label', for: id }, labelText,
    required ? el('span', { class: 'required' }, ' *') : null);
  f.append(lbl, control);
  if (hint) f.append(el('div', { class: 'field-hint' }, hint));
  return f;
}
function selectEl(name, options) {
  const sel = el('select', { name });
  if (!options.find(o => o[0] === '')) sel.setAttribute('required', '');
  for (const [v, t] of options) {
    sel.append(el('option', { value: v }, t));
  }
  return sel;
}
function showWishError(msg) {
  const err = document.getElementById('wish-error');
  if (!err) return;
  err.textContent = msg;
  err.hidden = false;
}
function clearWishError() {
  const err = document.getElementById('wish-error');
  if (!err) return;
  err.textContent = '';
  err.hidden = true;
}
function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

// 许愿池仅通过右上角 × 按钮关闭（ESC 不关闭，避免误触丢失已填表单）

// =================== 启动 ===================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThemeToggle);
  document.addEventListener('DOMContentLoaded', init);
} else {
  initThemeToggle();
  init();
}
