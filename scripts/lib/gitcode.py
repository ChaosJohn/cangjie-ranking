"""GitCode HTTP client + HTML parser.

抽取项目页和搜索页的关键字段。所有 HTTP 都走这个模块，统一退避/重试。
"""

from __future__ import annotations

import os
import random
import re
import time
from dataclasses import dataclass, field
from typing import Any, Iterable

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://gitcode.com"
DEFAULT_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}


@dataclass
class FetchResult:
    """单次抓取结果。"""

    url: str
    status: int
    ok: bool
    html: str | None = None
    error: str | None = None
    elapsed_ms: int = 0


@dataclass
class GitCodeClient:
    """对 GitCode 站点的 HTTP 抓取客户端。

    鉴权：默认匿名；若环境变量 ``GITCODE_TOKEN`` 存在则加入 Authorization 头。
    限流：单线程串行 + 域间退避；并发由调用方控制。
    重试：429 / 5xx 指数退避 ``max_retries`` 次。
    """

    token: str | None = field(default_factory=lambda: os.environ.get("GITCODE_TOKEN"))
    backoff: float = 1.5  # 域间最小间隔（秒）
    max_retries: int = 3
    timeout: int = 20
    jitter: float = 0.4  # 退避抖动系数

    _session: requests.Session = field(init=False, default_factory=requests.Session)
    _last_request_ts: float = field(init=False, default=0.0)

    def __post_init__(self) -> None:
        self._session.headers.update(DEFAULT_HEADERS)
        if self.token:
            self._session.headers["Authorization"] = f"Bearer {self.token}"

    # ---------- 底层 GET ----------

    def get(self, url: str, params: dict | None = None) -> FetchResult:
        """带退避 + 重试的 GET。"""
        import time as _t

        # 域间退避
        gap = _t.time() - self._last_request_ts
        if gap < self.backoff:
            _t.sleep(self.backoff - gap + random.uniform(0, self.jitter))

        last_err: str | None = None
        for attempt in range(1, self.max_retries + 1):
            t0 = _t.time()
            try:
                resp = self._session.get(url, params=params, timeout=self.timeout)
                self._last_request_ts = _t.time()
                if resp.status_code in (429, *range(500, 600)):
                    last_err = f"HTTP {resp.status_code}"
                    if attempt < self.max_retries:
                        wait = self.backoff * (2 ** (attempt - 1)) + random.uniform(0, self.jitter)
                        _t.sleep(wait)
                        continue
                return FetchResult(
                    url=url,
                    status=resp.status_code,
                    ok=resp.ok,
                    html=resp.text if resp.ok else None,
                    elapsed_ms=int((_t.time() - t0) * 1000),
                    error=None if resp.ok else f"HTTP {resp.status_code}",
                )
            except requests.RequestException as e:
                last_err = f"{type(e).__name__}: {e}"
                if attempt < self.max_retries:
                    _t.sleep(self.backoff * (2 ** (attempt - 1)))
                    continue
        return FetchResult(url=url, status=0, ok=False, error=last_err or "unknown")

    # ---------- 项目页 ----------

    def fetch_project(self, owner: str, repo: str) -> dict[str, Any] | None:
        """抓取 ``/{owner}/{repo}`` 项目页，提取关键指标。

        返回字典：name, stars, forks, issues, pull_requests,
                 updated_at, license, language, description, url。
        解析失败返回 None。
        """
        url = f"{BASE_URL}/{owner}/{repo}"
        r = self.get(url)
        if not r.ok or not r.html:
            return {"name": repo, "url": url, "_error": r.error or "no html"}
        return parse_project_page(r.html, fallback_url=url)

    # ---------- 搜索页 ----------

    def fetch_search_page(self, query: str, page: int = 1, lang: str = "Cangjie") -> list[dict[str, str]]:
        """抓取站内搜索一页结果。

        返回 ``[{owner, repo, url, name, display_path}, ...]``。
        """
        params = {"q": query, "type": "repo", "l": lang, "page": str(page)}
        r = self.get(f"{BASE_URL}/search", params=params)
        if not r.ok or not r.html:
            return []
        return parse_search_page(r.html)

    # ---------- 组织页 ----------

    def fetch_org_page(self, org: str, page: int = 1) -> list[dict[str, str]]:
        """抓取组织仓库列表一页。"""
        url = f"{BASE_URL}/{org}"
        params = {"page": str(page)} if page > 1 else None
        r = self.get(url, params=params)
        if not r.ok or not r.html:
            return []
        return parse_org_page(r.html, org)

    # ---------- 组织仓库 API（推荐路径）----------

    def fetch_org_repos_api(self, org: str, per_page: int = 100, max_pages: int = 50) -> list[dict[str, Any]]:
        """通过 ``/api/v5/orgs/{org}/repos`` 分页拉取组织下全部仓库。

        匿名访问，返回 API 原始字段（``stargazers_count`` / ``forks_count`` /
        ``open_issues_count`` / ``updated_at`` / ``pushed_at`` / ``description`` 等）。
        注意：此 API 不返回 ``open_merge_requests_count``、``license``、
        ``main_repository_language``、``topic_names`` —— 这些需走 HTML 详情页。
        """
        all_repos: list[dict[str, Any]] = []
        for page in range(1, max_pages + 1):
            r = self.get(
                f"{BASE_URL}/api/v5/orgs/{org}/repos",
                params={"per_page": str(per_page), "page": str(page)},
            )
            if not r.ok or not r.html:
                break
            try:
                import json
                data = json.loads(r.html)
            except (ValueError, TypeError):
                break
            if not isinstance(data, list) or not data:
                break
            all_repos.extend(data)
            if len(data) < per_page:
                break  # 最后一页
        return all_repos


# ============== HTML 解析器（纯函数，便于单测）==============

_INT_RE = re.compile(r"\d+")


def _first_int(text: str | None) -> int | None:
    if not text:
        return None
    m = _INT_RE.search(text)
    return int(m.group()) if m else None


def parse_project_page(html: str, fallback_url: str | None = None) -> dict[str, Any]:
    """从项目页 HTML 抽取指标。"""
    soup = BeautifulSoup(html, "lxml")
    out: dict[str, Any] = {"url": fallback_url}

    # 1) json-ld（含 license / language / description / dateModified）
    ld = _extract_jsonld(soup)
    if ld:
        out["name"] = (ld.get("name") or ld.get("title") or "").split(":")[0].strip() or None
        out["description"] = ld.get("description")
        out["language"] = ld.get("programmingLanguage")
        out["license"] = ld.get("license")
        out["updated_at"] = ld.get("dateModified")
        code_repo = ld.get("codeRepository")
        if code_repo:
            out["url"] = code_repo
        # topics: json-ld 的 keywords 是逗号分隔字符串
        kw = ld.get("keywords") or ""
        if kw:
            out["topics"] = [k.strip() for k in kw.split(",") if k.strip()]

    # 2) Star：.status-btn.is-no-wrapper 文本 "Star N"
    star_btn = soup.select_one(".status-btn.is-no-wrapper")
    if star_btn:
        out["stars"] = _first_int(star_btn.get_text(" ", strip=True))

    # 兜底：repo-action-group 含 Star 字样的元素
    if "stars" not in out or out["stars"] is None:
        for grp in soup.select(".repo-action-group"):
            txt = grp.get_text(" ", strip=True)
            if "Star" in txt:
                out["stars"] = _first_int(txt)
                break

    # 3) Fork：a.repo-action-group__count-link[href$="/forks"]
    fork_link = soup.select_one('a.repo-action-group__count-link[href$="/forks"]')
    if fork_link:
        out["forks"] = _first_int(fork_link.get_text(strip=True))

    # 4) Issues / PRs：菜单项 .menu-tab-num
    for item in soup.select("a.g-menu-item"):
        href = item.get("href", "")
        num_el = item.select_one(".menu-tab-num")
        num = _first_int(num_el.get_text(strip=True)) if num_el else None
        if num is None:
            continue
        if href.endswith("/issues"):
            out["issues"] = num
        elif href.endswith("/pulls"):
            out["pull_requests"] = num

    return out


def _extract_jsonld(soup: BeautifulSoup) -> dict[str, Any]:
    for script in soup.find_all("script", attrs={"type": "application/ld+json"}):
        if not script.string:
            continue
        try:
            import json
            data = json.loads(script.string)
            if isinstance(data, dict) and data.get("@type") in (
                "SoftwareSourceCode",
                "Code",
                "Repository",
            ):
                return data
        except (ValueError, TypeError):
            continue
    return {}


def parse_search_page(html: str) -> list[dict[str, str]]:
    """从搜索结果页提取仓库列表。

    GitCode 搜索结果卡片锚点形如 ``/owner/repo``。这里只取仓库根，
    忽略分支路径与文件路径。
    """
    soup = BeautifulSoup(html, "lxml")
    seen: set[str] = set()
    out: list[dict[str, str]] = []
    for a in soup.find_all("a", href=True):
        href = a["href"]
        # 仅接受 /owner/repo 形态
        path = href.split("?", 1)[0].split("#", 1)[0]
        if path.startswith("http"):
            continue
        m = re.match(r"^/([^/]+/[^/]+)$", path)
        if not m:
            continue
        owner_repo = m.group(1)
        if owner_repo in seen:
            continue
        seen.add(owner_repo)
        owner, repo = owner_repo.split("/", 1)
        out.append({
            "owner": owner,
            "repo": repo,
            "url": f"{BASE_URL}/{owner}/{repo}",
            "name": repo,
            "display_path": owner_repo,
        })
    return out


def parse_org_page(html: str, org: str) -> list[dict[str, str]]:
    """从组织页提取仓库列表。"""
    soup = BeautifulSoup(html, "lxml")
    seen: set[str] = set()
    out: list[dict[str, str]] = []
    for a in soup.find_all("a", href=True):
        href = a["href"]
        path = href.split("?", 1)[0].split("#", 1)[0]
        # 形如 /{org}/{repo}，但排除 /{org}/{repo}/.../...
        m = re.match(rf"^/{re.escape(org)}/([^/]+)$", path)
        if not m:
            continue
        repo = m.group(1)
        owner_repo = f"{org}/{repo}"
        if owner_repo in seen:
            continue
        seen.add(owner_repo)
        out.append({
            "owner": org,
            "repo": repo,
            "url": f"{BASE_URL}/{owner_repo}",
            "name": repo,
            "display_path": owner_repo,
        })
    return out


def iterate_letters() -> Iterable[str]:
    """a-z 字母生成器。"""
    for c in "abcdefghijklmnopqrstuvwxyz":
        yield c
