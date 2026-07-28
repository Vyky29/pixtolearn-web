#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from pathlib import Path
import html as H
import json

ROOT = Path(__file__).resolve().parents[1]
shop = (ROOT / "shop.html").read_text(encoding="utf-8")
header = shop.split('<main id="main">')[0]
footer = "<footer" + shop.split("<footer", 1)[1]
footer = footer.replace(
    '<script src="js/site.js"></script>',
    '<script src="js/site.js"></script>\n  <script src="js/product.js"></script>',
)

raw = json.loads((ROOT / "js/product-data.json").read_text(encoding="utf-8"))
raw["keyring"] = raw["keyring-with-lanyard"]

products = {
    "full-pack": {
        "file": "product-full-pack.html",
        "title": "Full Pack",
        "eyebrow": "PixtoLearn Swimming",
        "price": "329.00",
        "badge": "Most complete",
        "image": "assets/packs/shop-full.png",
        "thumbs": [
            ("assets/packs/shop-full.png", "image"),
            ("assets/packs/shop-full.png", "video", "assets/videos/team-swimming.mp4"),
        ],
        "blurb": "The Full Pack is a complete, thoughtfully designed resource that supports structured, engaging, and inclusive swimming lessons. Built around visual learning and clear routines, it helps swimmers of all ages and abilities develop confidence, skills, and safety awareness in the water.",
        "interest": "full-pack",
    },
    "basic-pack": {
        "file": "product-basic-pack.html",
        "title": "Basic Pack",
        "eyebrow": "PixtoLearn Swimming",
        "price": "74.99",
        "badge": None,
        "image": "assets/packs/shop-basic.png",
        "thumbs": [
            ("assets/packs/shop-basic.png", "image"),
            ("assets/packs/shop-basic.png", "video", "assets/videos/basic-pack.mp4"),
        ],
        "blurb": "Start your aquatic journey with the Basic Pack and build the essential skills and knowledge needed for a safe and enjoyable swimming experience. A thoughtfully curated set of waterproof flashcards that introduce the water progressively: confidence, safety, strokes, dives, turns, and games.",
        "interest": "basic-pack",
    },
    "fun-pack": {
        "file": "product-fun-pack.html",
        "title": "Fun Pack",
        "eyebrow": "PixtoLearn Swimming",
        "price": "74.99",
        "badge": None,
        "image": "assets/packs/shop-fun.png",
        "thumbs": [
            ("assets/packs/shop-fun.png", "image"),
            ("assets/packs/shop-fun.png", "video", "assets/videos/fun-pack.mp4"),
        ],
        "blurb": "Embark on a joyous aquatic journey with the Fun Pack. Play-based waterproof visuals focused on games, toys, equipment, and everyday pool routines that boost motivation, communication, and participation for swimmers of every level.",
        "interest": "fun-pack",
    },
    "stands-holder": {
        "file": "product-stands-holder.html",
        "title": "Stands & Holder",
        "eyebrow": "Accessories",
        "price": "19.99",
        "badge": None,
        "image": "assets/photos/stands-holder.png",
        "thumbs": [("assets/photos/stands-holder.png", "image")],
        "blurb": "Keep flashcards organised and accessible poolside. Clear acrylic stands labeled First, Next, and Then, plus a holder for creating visual schedules and sequences that make lessons more structured and predictable.",
        "interest": "stands",
    },
    "keyring": {
        "file": "product-keyring.html",
        "title": "Keyring + free Lanyard",
        "eyebrow": "Accessories",
        "price": "19.99",
        "badge": None,
        "image": "assets/photos/cards-hands.png",
        "thumbs": [("assets/photos/cards-hands.png", "image")],
        "blurb": "Carry personalised WOW Card sets hands-free. A durable metal keyring holder with a complimentary lanyard, made for daily routines at home, school, and therapy settings.",
        "interest": "keyring",
    },
}


def bullets_html(text):
    if not text:
        return '<p class="muted">Details coming soon.</p>'
    lines = [ln.strip() for ln in text.replace("\r", "").split("\n")]
    html = []
    ul_open = False
    for ln in lines:
        if not ln:
            if ul_open:
                html.append("</ul>")
                ul_open = False
            continue
        stripped = ln.lstrip()
        if stripped and ord(stripped[0]) in (0x25CF, 0x25CB, 0x2022, 0x25E6, 0x2192):
            clean = stripped[1:].lstrip(" \t")
            nested = ord(stripped[0]) in (0x25CB, 0x25E6)
            if stripped.startswith("\u2192"):
                if ul_open:
                    html.append("</ul>")
                    ul_open = False
                html.append(f'<p class="product-subhead">{H.escape(clean)}</p>')
                continue
            if not ul_open:
                html.append("<ul>")
                ul_open = True
            cls = ' class="is-nested"' if nested else ""
            html.append(f"<li{cls}>{H.escape(clean)}</li>")
            continue
        if stripped.startswith(("-", "*")):
            clean = stripped[1:].lstrip()
            if not ul_open:
                html.append("<ul>")
                ul_open = True
            html.append(f"<li>{H.escape(clean)}</li>")
            continue
        if ul_open:
            html.append("</ul>")
            ul_open = False
        if stripped in ("Who Is It For", "Specifications"):
            continue
        if len(stripped) < 70:
            html.append(f'<p class="product-subhead">{H.escape(stripped)}</p>')
        else:
            html.append(f"<p>{H.escape(stripped)}</p>")
    if ul_open:
        html.append("</ul>")
    return "\n".join(html)


def thumbs_html(thumbs):
    bits = []
    for i, t in enumerate(thumbs):
        src = t[0]
        kind = t[1]
        active = " is-active" if i == 0 else ""
        if kind == "video":
            video = t[2]
            bits.append(
                f'<button type="button" class="product-thumb{active}" data-product-thumb="video" '
                f'data-video="{H.escape(video)}" data-poster="{H.escape(src)}" aria-label="Play product video">'
                f'<img src="{H.escape(src)}" alt="" /><span class="product-thumb-play" aria-hidden="true"></span></button>'
            )
        else:
            bits.append(
                f'<button type="button" class="product-thumb{active}" data-product-thumb="image" '
                f'data-src="{H.escape(src)}" aria-label="Show product image">'
                f'<img src="{H.escape(src)}" alt="" /></button>'
            )
    return "\n".join(bits)


for key, meta in products.items():
    acc = raw.get(key) or {}
    inside = acc.get("What\u2019s Inside") or acc.get("What's Inside") or ""
    sections = [
        ("Key Highlights", acc.get("Key Highlights", "")),
        ("What's Inside", inside),
        ("Who Is It For", acc.get("Who Is It For", "")),
        ("Specifications", acc.get("Specifications", "")),
    ]
    acc_html = []
    for i, (title, body) in enumerate(sections):
        open_attr = " open" if i == 1 else ""
        acc_html.append(
            f'<details class="product-acc"{open_attr}>\n'
            f"            <summary>{H.escape(title)}</summary>\n"
            f'            <div class="product-acc-body">{bullets_html(body)}</div>\n'
            f"          </details>"
        )

    badge = (
        f'<span class="badge pink">{H.escape(meta["badge"])}</span>'
        if meta["badge"]
        else ""
    )
    joined = "\n".join(acc_html)

    main = f"""<main id="main">

  <section class="product-page">
    <div class="wrap product-layout reveal">
      <div class="product-gallery">
        <div class="product-stage" data-product-stage>
          <img class="product-main-img" src="{H.escape(meta['image'])}" alt="{H.escape(meta['title'])}" data-product-image />
          <video class="product-main-video" data-product-video playsinline controls hidden></video>
        </div>
        <div class="product-thumbs">
          {thumbs_html(meta['thumbs'])}
        </div>
      </div>

      <div class="product-buy">
        <p class="eyebrow">{H.escape(meta['eyebrow'])}</p>
        <h1>{H.escape(meta['title'])}</h1>
        {badge}
        <p class="lede product-blurb">{H.escape(meta['blurb'])}</p>
        <p class="product-price">&pound;{H.escape(meta['price'])}</p>

        <form class="product-purchase" data-product-purchase data-product-id="{H.escape(key)}" data-product-name="{H.escape(meta['title'])}" data-product-price="{H.escape(meta['price'])}">
          <label class="product-qty">
            <span class="visually-hidden">Quantity</span>
            <input type="number" name="qty" min="1" max="99" value="1" inputmode="numeric" />
          </label>
          <button class="btn btn-primary product-add" type="submit" data-add-cart>Add to cart</button>
        </form>

        <div class="product-pay" aria-label="Payment options">
          <button type="button" class="pay-btn pay-paypal" data-pay="paypal" aria-label="Pay with PayPal">
            <span class="pay-paypal-mark">Pay<span>Pal</span></span>
          </button>
          <button type="button" class="pay-btn pay-later" data-pay="pay-later" aria-label="Pay Later with PayPal">
            <span class="pay-later-left"><strong>Pay</strong> Later</span>
            <span class="pay-later-right">PayPal</span>
          </button>
          <p class="note product-pay-note">Secure checkout connects next. For now these buttons reserve your interest.</p>
        </div>

        <div class="product-accordions">
          {joined}
        </div>

        <p class="note" style="margin-top:1rem"><a href="shop.html">&larr; Back to shop</a> &middot; <a href="contact.html?interest={H.escape(meta['interest'])}">Ask a question</a></p>
      </div>
    </div>
  </section>

  </main>
"""

    page = header + main + footer
    page = page.replace(
        "<title>Shop | PixtoLearn</title>",
        f"<title>{meta['title']} | PixtoLearn Shop</title>",
        1,
    )
    page = page.replace(
        'content="Shop PixtoLearn Swimming packs, WOW cards, accessories, and PixtoLearn App memberships."',
        f'content="Buy PixtoLearn {meta["title"]}. Specs, what is inside, and checkout options."',
        1,
    )
    (ROOT / meta["file"]).write_text(page, encoding="utf-8")
    print("wrote", meta["file"])

print("done")
