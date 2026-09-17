# PIXTOLEARN web — restructure plan

**Repo:** `/Users/raulgallego/Desktop/Swimming Training/PIXTOLEARN`  
**Remote:** `https://github.com/Vyky29/pixtolearn-web.git`  
**Stack:** static HTML + `css/site.css` + `js/site.js`

Spoken “Pistulen” = **PixtoLearn** on the site. Product lines match the app plan.

---

## Goals

1. **Academy out of the primary story** — remove from home paths and main nav (page can stay linked from footer / later).
2. **Three commercial doors:** Routines · Activity · App (plans / digital suite).
3. **Physical honesty:** only what exists in stock today is sold as physical.
4. **App story:** every line explains how it works digitally and how it is sold in the app.
5. **Print later:** Climbing / Yoga / other Activity modules + Routines physical = *print / make on request* (coming soon), not fake shop inventory.

---

## Information architecture

### Nav (primary)

| Item | Page | Role |
|------|------|------|
| Activity | `activity.html` (new hub) → Swimming deep | Body / water / wall / calm |
| Routines | `routines.html` | Everyday WOW → digital first |
| App | `app.html` | One app, three lines, SKUs |
| Shop | `shop.html` | Physical + digital CTAs |
| About | `about.html` | Impact lives here / on product pages |

**Removed from primary nav/home:** Academy, Updates (Updates → footer or About).

### Home (`index.html`)

1. **Hero:** PIXTOLEARN brand + one line + CTA (Shop / Explore products). Full-bleed, no path dashboard clutter.
2. **Three products** (not four paths): Routines · Activity · App.
3. **Impact** short strip (keep Ghana / real-world, link into Activity/Swimming).
4. **Shop teaser** — physical swimming + app.
5. No Academy tile.

### Activity hub (`activity.html` — new)

Umbrella page:

- **Swimming** — flagship. Physical packs live here + in Shop. Dual story: *In the pool (physical)* and *In the app (digital sessions)*.
- **Physical** — app module; print on request coming soon.
- **Climbing** — app; print on request coming soon.
- **Yoga** — app; print on request coming soon.

Deep page keeps / evolves `swimming.html` (personality, system, packs, impact, then app bridge).

### Routines (`routines.html`)

Rewrite focus:

1. What PIXTOLEARN Routines / WOW is (reuse strong WOW content).
2. **In the app** — how families use routines digitally (primary buy path).
3. **Print / physical** — later, on request with our materials (CTA contact), not a priced SKU grid pretending stock.

### App (`app.html`)

Align to product matrix:

- Routines · Activity (modules) · My Voice  
- SKUs: single modules · Activity Pack · Full  
- Link out to Parents app; drop Academy / old Free-Plus-Premium as main story where possible.

### Shop (`shop.html`)

Sections:

1. **Physical — Swimming** — Full / Basic / Fun + stands + (keyring if kept).
2. **Digital — App** — CTAs into app / plans (no fake Academy bundle as hero).
3. **On request** — WOW / Routines print, other Activity print (Ask / coming soon).
4. Academy packs removed from shop hero.

### Academy

- Keep `academy.html` file for now.
- No home path, no primary nav, no shop “learn the method” push.
- Footer optional: “Academy — coming back”.

---

## Physical vs digital matrix (copy truth)

| Product | Physical now | App now | Later |
|---------|--------------|---------|--------|
| Activity · Swimming | Yes (Full/Basic/Fun, stands, toys) | Yes | — |
| Activity · Physical / Climbing / Yoga | No | Yes | Print on request |
| Routines (WOW) | Soft (price on request already) | Yes (primary) | Print on request with materials |
| My Voice | No | Yes (via App) | — |
| Academy | — | — | Out of scope |

---

## Personality / content priorities

**Swimming page:** keep visual system, folders, waterproof story, impact — add clear **App twin** section (same language in digital sessions).

**Routines page:** WOW personality stays; lead with digital use + sell path; physical = request.

**Activity hub:** brand Activity as body/movement/water/wall/calm — not “sports”.

---

## Implementation phases

1. **Shell** — shared nav pattern, home rewrite, hide Academy from primary surfaces.
2. **Activity hub** + swimming dual physical/app narrative.
3. **Routines** rewrite (app-first + request physical).
4. **App + Shop** align to SKUs; strip Academy CTAs.
5. **Polish** — meta, footer, redirects (`academy.html` soft note), impact placement.

---

## Out of scope this pass

- Stripe / live billing wiring  
- Building Academy content  
- Inventing Physical Activity waterproof SKUs that are not in shop yet  
- Rebranding domain away from PixtoLearn  

---

## Decision locks

- Brand on web = **PixtoLearn**  
- Lines = Routines / Activity / App (+ My Voice inside App)  
- Physical shop inventory = swimming line (+ accessories)  
- Academy parked  
- Other Activity modules + Routines print = on request / coming soon  
