#!/usr/bin/env python3
"""Install all ready B-brushing-teeth assets in one lock transaction."""
from __future__ import annotations

import json
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from claim_and_mark import _with_lock, load, save  # noqa: E402

ASSETS = Path.home() / ".cursor/projects/Users-raulgallego-Desktop-Swimming-Training/assets"
INDEX = ROOT / "data" / "variants-index.json"
SUPPORT_INDEX = ROOT.parents[2] / "pixtolearn-support" / "data" / "avatar" / "variants-index.json"
STEMS = [
    "cover",
    "brush-top-teeth",
    "brush-bottom-teeth",
    "brush-tongue",
    "get-toothbrush",
    "put-toothpaste",
    "wet-brush",
    "put-toothbrush-away",
    "fill-cup-up",
    "rinse-mouth-with-water",
    "spit-out-water",
    "tap",
    "wipe-mouth",
]
TARGETS = [
    "teen-boy-brown",
    "teen-boy-deep",
    "teen-boy-east-asian",
    "teen-neutral-light",
    "teen-neutral-medium",
    "teen-neutral-brown",
    "teen-neutral-deep",
    "teen-neutral-east-asian",
    "teen-boy-medium",
]


def _batch() -> int:
    q, p = load()
    done = set(p.get("done") or [])
    idx = json.loads(INDEX.read_text(encoding="utf-8")) if INDEX.exists() else {
        "version": "1.0",
        "wow": {},
        "sports": {},
        "stories": {},
    }
    installed = 0
    jobs_by_id = {j["id"]: j for j in q["jobs"]}

    for av in TARGETS:
        out_dir = ROOT / "generated" / "brushing-teeth" / av
        out_dir.mkdir(parents=True, exist_ok=True)
        for stem in STEMS:
            jid = f"B-brushing-teeth-{av}-{stem}"
            if jid in done:
                continue
            src = ASSETS / f"{jid}.png"
            if not src.exists():
                continue
            job = jobs_by_id.get(jid)
            if not job:
                print("skip unknown", jid)
                continue
            dst = out_dir / f"{stem}.png"
            if src.resolve() != dst.resolve():
                shutil.copy2(src, dst)
            for key in ("outTool", "outPublic"):
                out = Path(job[key])
                out.parent.mkdir(parents=True, exist_ok=True)
                if dst.resolve() != out.resolve():
                    shutil.copy2(dst, out)
            job["status"] = "done"
            done.add(jid)
            pack = idx.setdefault("wow", {}).setdefault(job["folder"], {})
            cards = pack.setdefault(job["avatarId"], [])
            if job["cardFile"] not in cards:
                cards.append(job["cardFile"])
                cards.sort()
            installed += 1
            print("installed", jid)

    p["done"] = sorted(done)
    p["in_progress"] = [i for i in p.get("in_progress") or [] if not i.startswith("B-brushing-teeth-")]
    text = json.dumps(idx, indent=2) + "\n"
    INDEX.write_text(text, encoding="utf-8")
    if SUPPORT_INDEX.parent.exists():
        SUPPORT_INDEX.write_text(text, encoding="utf-8")
    save(q, p)
    return installed


def main() -> None:
    n = _with_lock(_batch)
    print("total_installed", n)


if __name__ == "__main__":
    main()
