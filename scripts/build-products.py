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
          <p class="product-pay-label">Express checkout</p>
          <div class="product-pay-express">
            <button type="button" class="pay-btn pay-apple" data-pay="apple-pay" aria-label="Pay with Apple Pay">
              <span class="pay-apple-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <strong>Pay</strong>
              </span>
            </button>
            <button type="button" class="pay-btn pay-google" data-pay="google-pay" aria-label="Pay with Google Pay">
              <span class="pay-google-mark" aria-hidden="true">
                <svg class="pay-google-g" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Pay
              </span>
            </button>
          </div>
          <div class="product-pay-divider" role="presentation"><span>or</span></div>
          <button type="button" class="pay-btn pay-paypal" data-pay="paypal" aria-label="Pay with PayPal">
            <span class="pay-paypal-mark">Pay<span>Pal</span></span>
          </button>
          <button type="button" class="pay-later-link" data-pay="pay-later">
            Pay in 3 with <strong>Pay Later</strong> <em>PayPal</em>
          </button>
          <p class="note product-pay-note">Apple Pay, Google Pay and PayPal connect at secure checkout. For now these buttons save your interest.</p>
        </div>

        <div class="product-accordions">
          {joined}
        </div>

        <p class="note" style="margin-top:1rem"><a href="shop.html">&larr; Back to shop</a> &middot; <a href="contact.html?interest={H.escape(meta['interest'])}">Ask a question</a></p>
      </div>
    </div>
  </section>

    <div class="wrap product-below">
      <section class="product-reviews" data-product-reviews aria-label="Customer reviews"></section>
      <section class="product-related" data-product-related aria-label="Related products"></section>
    </div>

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
