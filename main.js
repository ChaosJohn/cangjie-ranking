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
// 许愿功能（Wish）
// 收集外部用户希望仓颉社区建设的三方库/工具，并附竞品来源。
// 提交 → Cloudflare Worker → 校验 Turnstile + Origin + 频率限 → GitHub Issue（label: wish）
// ====================================================================

const WISH_LABEL = 'wish';
const WISH_ISSUES_URL = `https://github.com/ChaosJohn/cangjie-ranking/issues?q=is:issue+label:${WISH_LABEL}`;

function wishConfig() {
  return (window.WISH_CONFIG) || { workerUrl: '', turnstileSiteKey: '' };
}

function wishEnabled() {
  const c = wishConfig();
  return !!(c.workerUrl && c.turnstileSiteKey);
}

// ---------- 计数 badge 初始化 ----------
async function initWishBadge() {
  const btn = document.getElementById('wish-btn');
  const badge = document.getElementById('wish-count');
  if (!btn) return;

  if (!wishEnabled()) {
    btn.disabled = true;
    btn.title = '许愿功能尚未启用（管理员未配置 Cloudflare Worker / Turnstile）';
    return;
  }
  btn.addEventListener('click', openWishModal);

  // 拉取当前已收集许愿数量
  try {
    const c = wishConfig();
    const res = await fetch(`${c.workerUrl}/api/wishes/count`, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) return;
    const data = await res.json();
    if (badge && typeof data.count === 'number' && data.count >= 0) {
      badge.textContent = String(data.count);
      badge.hidden = data.count === 0;
    }
  } catch (e) {
    // 静默忽略：badge 不显示不影响主流程
  }
}

// ---------- 弹窗渲染 ----------
let wishTurnstileWidgetId = null;
let wishTurnstileReady = false;

function openWishModal() {
  closeWishModal(true);
  const overlay = el('div', { class: 'wish-overlay', id: 'wish-overlay' });
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeWishModal();
  });

  const wrap = el('div', { class: 'wish-modal-wrap' });
  const modal = el('div', { class: 'wish-modal' });
  modal.append(
    el('button', {
      class: 'wish-close',
      type: 'button',
      'aria-label': '关闭',
      onclick: () => closeWishModal(),
    }, '×'),
    el('h2', {}, '许愿'),
    el('p', { class: 'wish-intro' },
      '告诉我们你希望仓颉社区建设哪些三方库或工具，并附上竞品来源，便于社区参考实现。匿名提交即可。'),
  );

  const form = el('form', { class: 'wish-form', id: 'wish-form' });
  form.append(
    // 标题（必填）
    field('wish-title', '许愿标题', true,
      el('input', { type: 'text', id: 'wish-title', name: 'title', required: '',
        maxlength: '120', placeholder: '例如：仓颉版 Markdown 解析库', autocomplete: 'off' }),
      '一句话描述你希望有的库/工具'),

    // 详细描述（必填）
    field('wish-desc', '详细描述', true,
      el('textarea', { id: 'wish-desc', name: 'description', required: '',
        maxlength: '2000', placeholder: '说明使用场景、期望特性、为什么需要它……' }),
      '最多 2000 字'),

    // 类别（必填）+ 竞品语言（必填）
    el('div', { class: 'field-row' },
      field('wish-category', '类别', true,
        selectEl('category', [
          ['', '请选择…'],
          ['库', '库（Library）'],
          ['工具', '工具（Tool）'],
          ['框架', '框架（Framework）'],
          ['其他', '其他'],
        ], '请选择类别'),
        ''),
      field('wish-competitor-lang', '竞品语言', true,
        selectEl('competitor_lang', [
          ['', '请选择…'],
          ['Cangjie', 'Cangjie'],
          ['Rust', 'Rust'],
          ['Go', 'Go'],
          ['Python', 'Python'],
          ['Java', 'Java'],
          ['JavaScript', 'JavaScript'],
          ['C++', 'C++'],
          ['其他', '其他'],
        ], '请选择竞品实现语言'),
        ''),
    ),

    // 竞品名称（必填）+ 竞品链接（必填）
    el('div', { class: 'field-row' },
      field('wish-competitor-name', '竞品名称', true,
        el('input', { type: 'text', id: 'wish-competitor-name', name: 'competitor_name',
          required: '', maxlength: '120', placeholder: '例如：marked', autocomplete: 'off' }),
        ''),
      field('wish-competitor-url', '竞品链接', true,
        el('input', { type: 'url', id: 'wish-competitor-url', name: 'competitor_url',
          required: '', maxlength: '500', placeholder: 'https://github.com/...', autocomplete: 'off' }),
        ''),
    ),

    // 可选昵称 + 可选邮箱
    el('div', { class: 'field-row' },
      field('wish-nickname', '昵称（可选）', false,
        el('input', { type: 'text', id: 'wish-nickname', name: 'nickname',
          maxlength: '60', placeholder: '匿名', autocomplete: 'off' }),
        '留空将标记为「匿名」'),
      field('wish-email', '邮箱（可选）', false,
        el('input', { type: 'email', id: 'wish-email', name: 'email',
          maxlength: '120', placeholder: '便于后续反馈，不会公开展示', autocomplete: 'off' }),
        ''),
    ),
  );

  // Turnstile 容器
  form.append(el('div', { class: 'wish-turnstile', id: 'wish-turnstile' }));
  // 错误提示
  form.append(el('div', { class: 'wish-error', id: 'wish-error', hidden: '' }));
  // 操作按钮
  form.append(
    el('div', { class: 'wish-actions' },
      el('button', { type: 'button', class: 'wish-cancel', onclick: () => closeWishModal() }, '取消'),
      el('button', { type: 'submit', class: 'wish-submit', id: 'wish-submit' }, '提交许愿'),
    ),
  );

  form.addEventListener('submit', submitWish);
  modal.append(form);
  wrap.append(modal);
  overlay.append(wrap);
  document.body.append(overlay);
  document.body.style.overflow = 'hidden';

  // 加载 Turnstile widget
  loadTurnstileWidget();
}

function field(id, labelText, required, control, hint) {
  const f = el('div', { class: 'field' });
  const lbl = el('label', { class: 'field-label', for: id }, labelText,
    required ? el('span', { class: 'required' }, ' *') : null);
  f.append(lbl, control);
  if (hint) f.append(el('div', { class: 'field-hint' }, hint));
  return f;
}

function selectEl(name, options, placeholder) {
  const sel = el('select', { name, required: '' });
  for (const [v, t] of options) {
    sel.append(el('option', { value: v }, t));
  }
  return sel;
}

// ---------- Turnstile ----------
function loadTurnstileScript() {
  return new Promise((resolve, reject) => {
    if (window.turnstile) return resolve();
    const s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    s.async = true;
    s.defer = true;
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
  const data = Object.fromEntries(new FormData(form).entries());
  const token = getTurnstileToken();

  if (!token) {
    showWishError('请先完成人机验证');
    return;
  }

  // 简单前端校验
  if (!data.title?.trim() || !data.description?.trim() ||
      !data.category || !data.competitor_name?.trim() ||
      !data.competitor_url?.trim() || !data.competitor_lang) {
    showWishError('请填写所有必填字段');
    return;
  }

  const btn = document.getElementById('wish-submit');
  if (btn) btn.disabled = true;
  const origText = btn ? btn.textContent : '';
  if (btn) btn.textContent = '提交中…';

  try {
    const c = wishConfig();
    const res = await fetch(`${c.workerUrl}/api/wish`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, turnstileToken: token }),
    });
    const payload = await res.json().catch(() => ({}));
    if (!res.ok || !payload.ok) {
      throw new Error(payload.error || `提交失败（HTTP ${res.status}）`);
    }
    // 提交成功：badge +1，显示结果
    const badge = document.getElementById('wish-count');
    if (badge) {
      const n = (parseInt(badge.textContent, 10) || 0) + 1;
      badge.textContent = String(n);
      badge.hidden = false;
    }
    renderWishResult(payload.issueUrl, payload.issueNumber);
  } catch (err) {
    showWishError(err.message || '提交失败，请稍后重试');
    if (btn) { btn.disabled = false; btn.textContent = origText; }
  }
}

function renderWishResult(issueUrl, issueNumber) {
  const modal = document.querySelector('.wish-modal');
  if (!modal) return;
  modal.innerHTML = '';
  modal.append(
    el('div', { class: 'wish-result' },
      el('div', { class: 'result-icon' }, '🎉'),
      el('h3', {}, '许愿提交成功'),
      el('p', {}, '感谢你的建议！已自动创建 GitHub Issue 用于后续讨论和跟踪。'),
      issueUrl ? el('a', { class: 'result-link', href: issueUrl, target: '_blank', rel: 'noopener' },
        `查看 Issue #${issueNumber || ''}`) : null,
      el('p', {}, '想看看其他人都许了什么愿？'),
      el('a', { class: 'result-link', href: WISH_ISSUES_URL, target: '_blank', rel: 'noopener' },
        '查看许愿列表'),
      el('div', { class: 'wish-actions' },
        el('button', { type: 'button', class: 'wish-submit', onclick: () => closeWishModal() }, '关闭'),
      ),
    ),
  );
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

function closeWishModal(silent) {
  const overlay = document.getElementById('wish-overlay');
  if (overlay) overlay.remove();
  document.body.style.overflow = '';
  if (wishTurnstileWidgetId && window.turnstile) {
    try { window.turnstile.remove(wishTurnstileWidgetId); } catch (e) {}
  }
  wishTurnstileWidgetId = null;
  wishTurnstileReady = false;
}

// ESC 关闭
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('wish-overlay')) closeWishModal();
});

// =================== 启动 ===================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThemeToggle);
  document.addEventListener('DOMContentLoaded', init);
} else {
  initThemeToggle();
  init();
}
