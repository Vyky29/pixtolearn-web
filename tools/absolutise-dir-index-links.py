#!/usr/bin/env python3
"""Make directory index pages use root-absolute href/src values.

Vercel's clean URLs serve `learn/course/x/index.html` at `/learn/course/x`, with
no trailing slash. A browser then resolves relative references against
`/learn/course/`, one level too high, so stylesheets, scripts and nav links all
404. Root-absolute paths resolve identically whichever URL shape is served, so
these pages stay correct with or without the trailing slash.

Only `*/index.html` files need this; pages with their own filename already
resolve correctly under clean URLs.
"""
import argparse
import os
import posixpath
import re
import sys

REF_RE = re.compile(r'\b(href|src)="([^"]+)"')
SKIP_PREFIXES = ('#', '/', 'http://', 'https://', '//', 'mailto:', 'tel:', 'data:', 'javascript:')


def site_root():
    return os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def target_pages(root):
    pages = []
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in {'.git', '.vercel', 'node_modules', 'tools'}]
        if 'index.html' not in filenames:
            continue
        rel = os.path.relpath(os.path.join(dirpath, 'index.html'), root).replace(os.sep, '/')
        if rel != 'index.html':
            pages.append(rel)
    return sorted(pages)


def convert(root, page, report):
    path = os.path.join(root, page)
    with open(path, encoding='utf-8') as fh:
        html = fh.read()
    page_dir = posixpath.dirname(page)

    def replace(match):
        attr, ref = match.group(1), match.group(2)
        if ref.startswith(SKIP_PREFIXES) or not ref.strip():
            return match.group(0)
        body = ref
        suffix = ''
        for sep in ('#', '?'):
            idx = body.find(sep)
            if idx != -1:
                suffix = body[idx:] + suffix
                body = body[:idx]
        if not body:
            return match.group(0)
        resolved = posixpath.normpath(posixpath.join(page_dir, body))
        if resolved.startswith('..'):
            report.append(('ESCAPES ROOT', page, ref))
            return match.group(0)
        if not os.path.exists(os.path.join(root, resolved)):
            report.append(('MISSING TARGET', page, ref))
            return match.group(0)
        return f'{attr}="/{resolved}{suffix}"'

    updated = REF_RE.sub(replace, html)
    return html, updated


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--apply', action='store_true', help='write changes (default is a dry run)')
    args = ap.parse_args()

    root = site_root()
    report = []
    changed = 0
    total_refs = 0
    for page in target_pages(root):
        before, after = convert(root, page, report)
        if before == after:
            continue
        changed += 1
        diffs = sum(1 for a, b in zip(REF_RE.findall(before), REF_RE.findall(after)) if a != b)
        total_refs += diffs
        print(f'{"write" if args.apply else "would change"}: {page} ({diffs} refs)')
        if args.apply:
            with open(os.path.join(root, page), 'w', encoding='utf-8') as fh:
                fh.write(after)

    for kind, page, ref in report:
        print(f'  !! {kind}: {page} -> {ref}')

    print(f'\n{changed} file(s), {total_refs} reference(s){"" if args.apply else " (dry run)"}')
    return 1 if any(k == 'MISSING TARGET' for k, _, _ in report) else 0


if __name__ == '__main__':
    sys.exit(main())
