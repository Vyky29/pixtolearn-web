#!/usr/bin/env python3
"""Audit every deployed page for asset references that fail to load.

Fetches each page the way a browser would (following redirects), resolves every
local css/js/img/link reference against the FINAL url, and reports non-200s.
This catches clean-URL trailing-slash bugs that a filesystem check cannot see.
"""
import argparse
import concurrent.futures as cf
import http.cookiejar
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request

ASSET_RE = re.compile(
    r'(?:href|src)\s*=\s*"([^"]+)"|(?:href|src)\s*=\s*\'([^\']+)\'',
    re.IGNORECASE,
)
ASSET_EXT = (
    '.css', '.js', '.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif', '.ico', '.mp4', '.pdf',
    '.html',
)


def local_pages(root):
    pages = []
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in {'.git', '.vercel', 'node_modules', 'tools'}]
        for name in filenames:
            if name.endswith('.html'):
                rel = os.path.relpath(os.path.join(dirpath, name), root)
                pages.append(rel.replace(os.sep, '/'))
    return sorted(pages)


class _Redirect308(urllib.request.HTTPRedirectHandler):
    """Python's default opener ignores 308, which is exactly what Vercel emits."""

    def http_error_308(self, req, fp, code, msg, headers):
        return self.http_error_301(req, fp, 301, msg, headers)


_JAR = http.cookiejar.CookieJar()
_OPENER = urllib.request.build_opener(_Redirect308, urllib.request.HTTPCookieProcessor(_JAR))


def request(url, method='GET'):
    req = urllib.request.Request(url, headers={'User-Agent': 'link-audit/1.0'}, method=method)
    try:
        with _OPENER.open(req, timeout=30) as resp:
            return resp.status, resp.geturl(), resp.read()
    except urllib.error.HTTPError as exc:
        return exc.code, url, b''
    except Exception as exc:  # noqa: BLE001 - report as a failure, keep auditing
        return 0, url, str(exc).encode()


def fetch(url):
    return request(url)


def head_ok(url, cache):
    if url in cache:
        return cache[url]
    code = request(url, method='HEAD')[0]
    cache[url] = code
    return code


def page_urls(base, page):
    """URL shapes a visitor can realistically land on."""
    shapes = ['/' + page]
    if page.endswith('/index.html'):
        shapes.append('/' + page[: -len('index.html')])
        shapes.append('/' + page[: -len('/index.html')])
    elif page == 'index.html':
        shapes.append('/')
    return [base + s for s in shapes]


def audit_page(base, page, cache):
    problems = []
    for url in page_urls(base, page):
        status, final, body = fetch(url)
        if status != 200:
            problems.append((url, status, 'page', ''))
            continue
        html = body.decode('utf-8', 'replace')
        for m in ASSET_RE.finditer(html):
            ref = m.group(1) or m.group(2)
            if not ref or ref.startswith(('#', 'mailto:', 'tel:', 'data:', 'http://', 'https://', '//')):
                continue
            if not ref.lower().split('?')[0].split('#')[0].endswith(ASSET_EXT):
                continue
            target = urllib.parse.urljoin(final, ref)
            code = head_ok(target, cache)
            if code != 200:
                problems.append((final, code, ref, target))
    return problems


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('base', help='deployment base url, e.g. https://example.vercel.app')
    ap.add_argument('--root', default=os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    ap.add_argument('--share', help='_vercel_share token for a protected preview deployment')
    args = ap.parse_args()
    base = args.base.rstrip('/')

    if args.share:
        request(f'{base}/?_vercel_share={args.share}')

    pages = local_pages(args.root)
    print(f'Auditing {len(pages)} pages against {base}')
    cache = {}
    failures = []
    with cf.ThreadPoolExecutor(max_workers=12) as pool:
        futures = {pool.submit(audit_page, base, p, cache): p for p in pages}
        for fut in cf.as_completed(futures):
            page = futures[fut]
            for url, code, ref, target in fut.result():
                failures.append((page, url, code, ref, target))

    if not failures:
        print('OK: every page loads and every local asset resolves.')
        return 0

    failures.sort()
    print(f'\n{len(failures)} broken reference(s):\n')
    for page, url, code, ref, target in failures:
        if ref == 'page':
            print(f'  [{code}] PAGE {url}')
        else:
            print(f'  [{code}] {url}\n         ref={ref}\n         -> {target}')
    return 1


if __name__ == '__main__':
    sys.exit(main())
