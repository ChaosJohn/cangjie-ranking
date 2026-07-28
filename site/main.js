'use strict';

// =================== 全局状态 ===================
const state = {
  data: null,             // { snapshot_date, counts, projects: [...] }
  projects: [],           // 排好序的工作集
  view: 'top',            // 当前视图：top / category / source / activity / search
  sort: 'stars',          // top 视图排序键
  sortDir: 'desc',
  topN: 100,
  filters: {
    q: '',
    sources: new Set(),
    classifications: new Set(),
    activities: new Set(),
    licenses: new Set(),
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
  bindKeyboard();
  renderView();
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
  // 控件：排序键、方向、Top N
  ctrl.hidden = false;
  ctrl.append(
    group('排序', selectInput('sort', state.sort, [
      ['stars', '★ Star'],
      ['forks', '⑂ Fork'],
      ['issues', 'Issues'],
      ['pull_requests', 'PR'],
      ['name', '名称'],
      ['updated_at', '更新时间'],
    ], e => { state.sort = e.target.value; renderTop(root, ctrl); })),
    selectInput('dir', state.sortDir, [
      ['desc', '降序'],
      ['asc', '升序'],
    ], e => { state.sortDir = e.target.value; renderTop(root, ctrl); }),
    label('展示', numberInput('topN', state.topN, 5, 500, e => {
      const v = Math.max(5, Math.min(500, +e.target.value || 100));
      state.topN = v; renderTop(root, ctrl);
    })),
    span(`共 ${state.projects.length} 条`),
  );

  const sorted = state.projects.slice().sort(sortCmp(state.sort, state.sortDir));
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
  ctrl.hidden = false;
  const groups = new Map();
  for (const p of state.projects) {
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
    span(`· ${sortedGroups.length} 个分组 · ${state.projects.length} 条记录`),
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
  ctrl.hidden = false;
  const order = ['活跃', '维护中', '低活跃', '沉寂'];
  const buckets = new Map(order.map(a => [a, []]));
  for (const p of state.projects) {
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
    ], e => { state.sort = e.target.value; renderActivity(root, ctrl); })),
    span(`· ${order.length} 个活跃度级别`),
  );

  for (const a of order) {
    const items = buckets.get(a) || [];
    if (!items.length) continue;
    const sorted = items.slice().sort(sortCmp(state.sort, 'desc'));
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
  ctrl.hidden = false;
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
    `命中 ${filtered.length} 条 / 共 ${state.projects.length} 条`));
  if (!filtered.length) return;

  const grid = el('div', { class: 'grid' });
  filtered.forEach((p, i) => grid.append(projectCard(p, i + 1)));
  root.append(grid);
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
  const sel = el('select', { class: 'input', onchange: onChange });
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

// =================== 启动 ===================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
