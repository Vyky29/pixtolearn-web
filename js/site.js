(function () {
  /* Flip to false when Academy courses should go live. Preview the full page with ?preview=1 */
  const ACADEMY_LOCKED = true;

  function academyPreviewUnlocked() {
    try {
      return new URLSearchParams(location.search).get("preview") === "1";
    } catch (_) {
      return false;
    }
  }

  function academyIsLocked() {
    return ACADEMY_LOCKED && !academyPreviewUnlocked();
  }

  const LOCK_ICON =
    '<svg class="nav-lock" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';

  function initAcademyLock() {
    const locked = academyIsLocked();
    document.body.classList.toggle("academy-is-locked", locked);

    document.querySelectorAll('.nav-links a[data-nav="academy.html"]').forEach((a) => {
      a.classList.toggle("is-locked", locked);
      if (locked) {
        a.setAttribute("aria-label", "Academy, coming soon");
        if (!a.querySelector(".nav-lock")) a.insertAdjacentHTML("beforeend", LOCK_ICON);
      } else {
        a.removeAttribute("aria-label");
        a.querySelectorAll(".nav-lock").forEach((el) => el.remove());
      }
    });

    const homePath = document.querySelector('.home-path[href="academy.html"]');
    if (homePath) {
      homePath.classList.toggle("is-locked", locked);
      const media = homePath.querySelector(".home-path-media");
      if (media && locked && !homePath.querySelector(".path-lock")) {
        media.insertAdjacentHTML(
          "beforeend",
          '<span class="path-lock" aria-hidden="true">' + LOCK_ICON + "Soon</span>"
        );
      }
      if (!locked) homePath.querySelectorAll(".path-lock").forEach((el) => el.remove());
    }

    document.querySelectorAll('[data-academy-locked]').forEach((el) => {
      el.hidden = !locked;
    });
    document.querySelectorAll('[data-academy-open]').forEach((el) => {
      el.hidden = locked;
    });
  }

  initAcademyLock();

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    const closeNav = () => {
      header.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      document.body.classList.remove("nav-open");
    };
    const openNav = () => {
      header.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
      document.body.classList.add("nav-open");
    };
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (header.classList.contains("open")) closeNav();
      else openNav();
    });
    header.querySelectorAll(".nav-links a").forEach((a) => {
      a.addEventListener("click", () => closeNav());
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && header.classList.contains("open")) closeNav();
    });
  }

  /* Soft shadow plate: pull heroes under the opaque bar */
  const photoHero = document.querySelector("main .hero, #main > .hero, .hero");
  if (header && photoHero && photoHero.querySelector(".hero-media")) {
    document.documentElement.classList.add("has-photo-hero");
  }

  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a[data-nav]").forEach((a) => {
    const key = a.getAttribute("data-nav");
    if (
      (key === "home" && (path === "" || path === "index.html")) ||
      path === key ||
      path === key + ".html"
    ) {
      a.setAttribute("aria-current", "page");
    }
  });

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  const form = document.querySelector("[data-contact-form]");
  if (form) {
    const params = new URLSearchParams(location.search);
    const interest = params.get("interest");
    if (interest && form.interest) {
      const opt = Array.from(form.interest.options).find(
        (o) => o.value === interest || interest.startsWith(o.value)
      );
      if (opt) form.interest.value = opt.value;
      else if (interest.startsWith("wow")) form.interest.value = "wow";
      else if (interest.includes("pack")) {
        const match = Array.from(form.interest.options).find((o) => interest.includes(o.value));
        if (match) form.interest.value = match.value;
      }
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = form.querySelector("[data-form-note]");
      if (note) {
        note.textContent =
          "Thanks. This static preview does not send mail yet. Email hello@pixtolearn.com and we will reply soon.";
      }
      form.reset();
    });
  }

  initLeadPopup();
  initHelpChat();
  initSwimWaves();
  initCardRailMomentum();
  initAccountPortal();
  initVideoCards();
  initSwimUsers();
  initPackCarousel();
  initFlashStage();
  initModeStage();
  initWowMoment();
  initWowSpotlight();
  initWowPortable();
  initMissionProgress();
  initAcademyWaitlist();
  initAcademyStage();
  initAcademyGain();
  initAcademyKits();
  initAcademyPath();
  initFooterNewsletter();
  initSystemList();
  initSystemRewrite();

  function initSystemList() {
    const root = document.querySelector("[data-system-list]");
    if (!root) return;
    const items = Array.from(root.querySelectorAll("[data-system-item]"));
    items.forEach((item) => {
      item.addEventListener("click", () => {
        const already = item.classList.contains("is-open");
        items.forEach((el) => {
          el.classList.remove("is-open");
          el.setAttribute("aria-expanded", "false");
        });
        if (!already) {
          item.classList.add("is-open");
          item.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  function initSystemRewrite() {
    const root = document.querySelector("[data-system-rewrite]");
    if (!root) return;
    const lines = Array.from(root.querySelectorAll("[data-rewrite-line]"));
    if (!lines.length) return;
    const layout = root.closest("[data-system-layout]");
    const result = layout ? layout.querySelector("[data-system-result]") : null;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      lines.forEach((line) => {
        line.classList.add("is-striking", "is-flipped");
      });
      if (result) {
        result.classList.remove("is-waiting");
        result.classList.add("is-shown");
      }
      return;
    }

    let index = 0;
    let timer = null;
    let running = false;

    const clearTimer = () => {
      if (timer) {
        window.clearTimeout(timer);
        timer = null;
      }
    };

    const reset = () => {
      lines.forEach((line) => {
        line.classList.remove("is-striking", "is-flipped");
      });
      if (result) {
        result.classList.remove("is-shown");
        result.classList.add("is-waiting");
      }
      index = 0;
    };

    const revealResult = () => {
      if (result) {
        result.classList.remove("is-waiting");
        result.classList.add("is-shown");
      }
      timer = window.setTimeout(() => {
        reset();
        timer = window.setTimeout(tick, 800);
      }, 2800);
    };

    const flipLine = (line) => {
      line.classList.add("is-flipped");
      index += 1;
      timer = window.setTimeout(tick, 550);
    };

    const tick = () => {
      if (index < lines.length) {
        const line = lines[index];
        line.classList.add("is-striking");
        timer = window.setTimeout(() => flipLine(line), 420);
        return;
      }
      revealResult();
    };

    const start = () => {
      if (running) return;
      running = true;
      reset();
      timer = window.setTimeout(tick, 500);
    };

    const stop = () => {
      running = false;
      clearTimer();
    };

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) start();
            else stop();
          });
        },
        { threshold: 0.35 }
      );
      io.observe(layout || root);
    } else {
      start();
    }
  }

  function initAcademyStage() {
    const stage = document.querySelector("[data-aca-stage]");
    if (!stage) return;
    const tabs = stage.querySelectorAll("[data-aca-screen]");
    const panels = stage.querySelectorAll("[data-aca-panel]");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const key = tab.getAttribute("data-aca-screen");
        tabs.forEach((t) => {
          const on = t === tab;
          t.classList.toggle("is-active", on);
          t.setAttribute("aria-selected", on ? "true" : "false");
        });
        panels.forEach((panel) => {
          panel.querySelectorAll(".aca-ui").forEach((ui) => {
            ui.classList.toggle("is-active", ui.getAttribute("data-screen") === key);
          });
        });
      });
    });
  }

  function initAcademyGain() {
    const root = document.querySelector("[data-aca-gain]");
    if (!root) return;
    const tabs = root.querySelectorAll("[data-gain-tab]");
    const panels = root.querySelectorAll("[data-gain-panel]");
    const imgs = root.querySelectorAll("[data-gain-img]");
    const caption = root.querySelector("[data-gain-caption]");
    const captions = {
      you: "A method you can run tomorrow",
      them: "Less confusion. More access. More dignity.",
    };

    const setSide = (side) => {
      tabs.forEach((t) => {
        const on = t.getAttribute("data-gain-tab") === side;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      panels.forEach((p) => {
        const on = p.getAttribute("data-gain-panel") === side;
        p.classList.toggle("is-active", on);
        p.hidden = !on;
      });
      imgs.forEach((img) => {
        img.classList.toggle("is-active", img.getAttribute("data-gain-img") === side);
      });
      if (caption) caption.textContent = captions[side] || "";
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => setSide(tab.getAttribute("data-gain-tab")));
    });

    root.querySelectorAll("[data-gain-panel]").forEach((panel) => {
      panel.querySelectorAll("[data-gain-tile]").forEach((tile) => {
        tile.addEventListener("click", () => {
          panel.querySelectorAll("[data-gain-tile]").forEach((t) => t.classList.remove("is-open"));
          tile.classList.add("is-open");
        });
      });
    });
  }

  function initAcademyKits() {
    document.querySelectorAll("[data-aca-kit]").forEach((kit) => {
      const picks = kit.querySelectorAll("[data-kit-pick]");
      if (!picks.length) return;
      const imgs = kit.querySelectorAll("[data-kit-img]");
      const lines = kit.querySelectorAll("[data-kit-line]");
      const buys = kit.querySelectorAll("[data-kit-buy]");
      const prices = kit.querySelectorAll("[data-kit-price]");
      const badges = kit.querySelectorAll("[data-kit-badge]");
      const screens = kit.querySelectorAll("[data-kit-screen]");
      const phones = kit.querySelectorAll("[data-kit-phone]");

      const setPack = (key) => {
        picks.forEach((p) => {
          const on = p.getAttribute("data-kit-pick") === key;
          p.classList.toggle("is-active", on);
          p.setAttribute("aria-selected", on ? "true" : "false");
        });
        imgs.forEach((img) => {
          img.classList.toggle("is-active", img.getAttribute("data-kit-img") === key);
        });
        lines.forEach((line) => {
          line.classList.toggle("is-active", line.getAttribute("data-kit-line") === key);
        });
        prices.forEach((price) => {
          price.hidden = price.getAttribute("data-kit-price") !== key;
        });
        badges.forEach((badge) => {
          badge.hidden = badge.getAttribute("data-kit-badge") !== key;
        });
        screens.forEach((screen) => {
          screen.classList.toggle("is-active", screen.getAttribute("data-kit-screen") === key);
        });
        phones.forEach((phone) => {
          phone.hidden = phone.getAttribute("data-kit-phone") !== key;
        });
        buys.forEach((btn) => {
          btn.hidden = btn.getAttribute("data-kit-buy") !== key;
        });
      };

      picks.forEach((pick) => {
        pick.addEventListener("click", () => setPack(pick.getAttribute("data-kit-pick")));
      });
    });
  }

  function initFooterNewsletter() {
    document.querySelectorAll("[data-footer-newsletter]").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const email = String(data.get("email") || "").trim();
        if (!email) return;
        const payload = {
          email,
          source: "footer",
          at: new Date().toISOString(),
          page: location.pathname.split("/").pop() || "index.html",
        };
        try {
          const prev = JSON.parse(localStorage.getItem("pixto_footer_newsletter") || "[]");
          prev.push(payload);
          localStorage.setItem("pixto_footer_newsletter", JSON.stringify(prev.slice(-80)));
        } catch (_) {}
        const note = form.querySelector("[data-footer-news-note]");
        if (note) {
          note.hidden = false;
          note.textContent = "Thanks. You are subscribed for product and Academy updates.";
        }
        form.reset();
      });
    });
  }

  function initAcademyWaitlist() {
    const form = document.querySelector("[data-academy-waitlist]");
    if (!form) return;

    const params = new URLSearchParams(location.search);
    const interest = params.get("interest");
    if (interest) {
      const box = form.querySelector(`input[name="interest"][value="${CSS.escape(interest)}"]`);
      if (box) box.checked = true;
    }

    document.querySelectorAll("[data-aca-interest]").forEach((link) => {
      link.addEventListener("click", () => {
        const value = link.getAttribute("data-aca-interest");
        const box = form.querySelector(`input[name="interest"][value="${CSS.escape(value || "")}"]`);
        if (box) box.checked = true;
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const interests = data.getAll("interest").map(String);
      const payload = {
        first_name: String(data.get("first_name") || "").trim(),
        email: String(data.get("email") || "").trim(),
        role: String(data.get("role") || "").trim(),
        interests,
        at: new Date().toISOString(),
        page: "academy.html",
      };
      try {
        const prev = JSON.parse(localStorage.getItem("pixto_academy_waitlist") || "[]");
        prev.push(payload);
        localStorage.setItem("pixto_academy_waitlist", JSON.stringify(prev.slice(-80)));
      } catch (_) {}
      const note = form.querySelector("[data-academy-note]");
      if (note) {
        note.hidden = false;
        note.textContent = academyIsLocked()
          ? "Thanks. You are on the Academy waiting list. We will email you when courses open."
          : "Thanks. You are on the Academy updates list. You can buy courses any time from the pricing section.";
      }
      form.reset();
      if (interest) {
        const box = form.querySelector(`input[name="interest"][value="${CSS.escape(interest)}"]`);
        if (box) box.checked = true;
      }
    });
  }

  function initMissionProgress() {
    document.querySelectorAll("[data-mission-progress]").forEach((panel) => {
      const current = Math.max(0, Number(panel.getAttribute("data-current") || 0));
      const goal = Math.max(1, Number(panel.getAttribute("data-goal") || 100));
      const pct = Math.min(100, Math.round((current / goal) * 100));
      const fill = panel.querySelector("[data-mission-fill]");
      const count = panel.querySelector("[data-mission-count]");
      const bar = panel.querySelector(".mission-bar");
      if (fill) fill.style.width = pct + "%";
      if (count) count.textContent = String(current);
      if (bar) {
        bar.setAttribute("aria-valuenow", String(current));
        bar.setAttribute("aria-valuemax", String(goal));
      }
    });
  }

  function initSwimWaves() {
    const host = document.querySelector("[data-swim-waves]");
    if (!host) return;
    const canvas = host.querySelector("canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;
    let mx = 0.5;
    let my = 0.5;

    const resize = () => {
      const rect = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);
      const layers = [
        { amp: 18, len: 0.008, speed: 1.1, color: "rgba(76,184,176,0.28)", y: 0.42 },
        { amp: 14, len: 0.012, speed: 1.6, color: "rgba(221,69,150,0.16)", y: 0.55 },
        { amp: 10, len: 0.018, speed: 2.1, color: "rgba(233,174,46,0.18)", y: 0.68 },
      ];
      layers.forEach((layer, i) => {
        ctx.beginPath();
        const base = h * layer.y + (my - 0.5) * 28 * (i + 1) * 0.25;
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 8) {
          const n =
            Math.sin(x * layer.len + t * layer.speed + mx * 2) * layer.amp +
            Math.sin(x * layer.len * 0.45 - t * 0.7) * (layer.amp * 0.35);
          ctx.lineTo(x, base + n);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fillStyle = layer.color;
        ctx.fill();
      });
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", () => {
      resize();
      if (reduce) draw();
    });
    window.addEventListener(
      "pointermove",
      (e) => {
        const rect = host.getBoundingClientRect();
        mx = (e.clientX - rect.left) / Math.max(rect.width, 1);
        my = (e.clientY - rect.top) / Math.max(rect.height, 1);
      },
      { passive: true }
    );
  }

  function initCardRailMomentum() {
    document.querySelectorAll(".card-rail").forEach((rail) => {
      let down = false;
      let startX = 0;
      let scrollLeft = 0;
      rail.addEventListener("pointerdown", (e) => {
        down = true;
        startX = e.pageX;
        scrollLeft = rail.scrollLeft;
        rail.setPointerCapture(e.pointerId);
      });
      rail.addEventListener("pointerup", () => {
        down = false;
      });
      rail.addEventListener("pointermove", (e) => {
        if (!down) return;
        rail.scrollLeft = scrollLeft - (e.pageX - startX);
      });
    });
  }

  function ensureFloatStack() {
    let stack = document.querySelector("[data-float-stack]");
    if (stack) return stack;
    stack = document.createElement("div");
    stack.className = "float-stack";
    stack.setAttribute("data-float-stack", "");
    document.body.appendChild(stack);
    return stack;
  }

  function initLeadPopup() {
    if (path === "printable-trial.html") return;
    if (document.body.hasAttribute("data-launch-page") || document.body.classList.contains("launch-page")) return;
    const subscribed = localStorage.getItem("pixto_lead_subscribed") === "1";
    const foreverOff = localStorage.getItem("pixto_lead_dismissed") === "1";
    if (subscribed || foreverOff) return;

    const minimized = localStorage.getItem("pixto_lead_minimized") === "1";
    const stack = ensureFloatStack();

    const root = document.createElement("div");
    root.className = "lead-root";
    root.hidden = true;
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-labelledby", "lead-title");
    root.innerHTML = `
      <div class="lead-backdrop" data-lead-close></div>
      <div class="lead-modal">
        <button class="lead-close" type="button" aria-label="Close" data-lead-close>&times;</button>
        <div class="lead-grid">
          <div class="lead-copy">
            <span class="lead-pill">Free gift</span>
            <form class="lead-form" data-lead-form>
              <div class="lead-step is-active" data-lead-step="1">
                <h2 id="lead-title">Get your free swimming printable</h2>
                <p>Enter your email and we’ll send the trial. You can choose extra updates next — optional.</p>
                <label>Email<input type="email" name="email" placeholder="you@email.com" required autocomplete="email" /></label>
                <label class="lead-privacy"><input type="checkbox" name="privacy" value="1" required /> I agree to the <a href="privacy.html" target="_blank" rel="noopener">Privacy Policy</a></label>
                <button class="lead-submit" type="button" data-lead-next>Continue</button>
              </div>
              <div class="lead-step" data-lead-step="2" hidden>
                <h2 id="lead-title-2">Anything else?</h2>
                <p>Optional — tap what you’d like to hear about. Then grab your free trial.</p>
                <div class="lead-chips" role="group" aria-label="Optional updates">
                  <label class="lead-chip"><input type="checkbox" name="want_wow" value="1" /><span>WOW sample</span></label>
                  <label class="lead-chip"><input type="checkbox" name="want_app" value="1" /><span>App tips</span></label>
                  <label class="lead-chip"><input type="checkbox" name="want_academy" value="1" /><span>Academy list</span></label>
                </div>
                <input type="hidden" name="gift_swim" value="1" />
                <button class="lead-submit" type="submit">Get my free trial</button>
                <button class="lead-skip" type="submit">Skip — just the trial</button>
              </div>
              <p class="lead-note" data-lead-note hidden></p>
            </form>
          </div>
          <div class="lead-visual" aria-hidden="true">
            <img src="assets/flashcards/float-on-back.png" alt="" />
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(root);

    const miniWrap = document.createElement("div");
    miniWrap.className = "lead-mini-wrap";
    miniWrap.hidden = true;
    miniWrap.innerHTML = `
      <button type="button" class="lead-mini" data-lead-reopen aria-label="Open free gift signup">
        <img src="assets/flashcards/float-on-back.png" alt="" />
        <span class="lead-mini-copy">
          <strong>Free gift</strong>
          <span>Get your printable trial</span>
        </span>
      </button>
      <button type="button" class="lead-mini-x" data-lead-forever aria-label="Dismiss forever">&times;</button>
    `;
    stack.prepend(miniWrap);

    const showMini = () => {
      miniWrap.hidden = false;
      localStorage.setItem("pixto_lead_minimized", "1");
    };

    const hideMini = () => {
      miniWrap.hidden = true;
    };

    const open = () => {
      hideMini();
      root.hidden = false;
      document.body.style.overflow = "hidden";
      sessionStorage.setItem("pixto_lead_shown", "1");
      const modal = root.querySelector(".lead-modal");
      if (modal) modal.scrollTop = 0;
      const s1 = root.querySelector('[data-lead-step="1"]');
      const s2 = root.querySelector('[data-lead-step="2"]');
      if (s1 && s2) {
        s1.hidden = false;
        s1.classList.add("is-active");
        s2.hidden = true;
        s2.classList.remove("is-active");
        root.setAttribute("aria-labelledby", "lead-title");
      }
      const note = root.querySelector("[data-lead-note]");
      if (note) {
        note.hidden = true;
        note.textContent = "";
      }
      const first = root.querySelector('input[name="email"]');
      if (first) setTimeout(() => first.focus(), 180);
    };

    const closeToCorner = () => {
      root.hidden = true;
      document.body.style.overflow = "";
      showMini();
    };

    const closeForever = () => {
      root.hidden = true;
      document.body.style.overflow = "";
      hideMini();
      localStorage.setItem("pixto_lead_dismissed", "1");
      localStorage.removeItem("pixto_lead_minimized");
    };

    root.querySelectorAll("[data-lead-close]").forEach((el) => {
      el.addEventListener("click", () => closeToCorner());
    });

    miniWrap.querySelector("[data-lead-reopen]").addEventListener("click", () => open());
    miniWrap.querySelector("[data-lead-forever]").addEventListener("click", (e) => {
      e.stopPropagation();
      closeForever();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !root.hidden) closeToCorner();
    });

    const leadForm = root.querySelector("[data-lead-form]");
    const step1 = root.querySelector('[data-lead-step="1"]');
    const step2 = root.querySelector('[data-lead-step="2"]');
    const nextBtn = root.querySelector("[data-lead-next]");

    const goStep2 = () => {
      const email = leadForm.querySelector('input[name="email"]');
      const privacy = leadForm.querySelector('input[name="privacy"]');
      if (!email.checkValidity() || !privacy.checkValidity()) {
        leadForm.reportValidity();
        return;
      }
      step1.hidden = true;
      step1.classList.remove("is-active");
      step2.hidden = false;
      step2.classList.add("is-active");
      root.setAttribute("aria-labelledby", "lead-title-2");
    };

    nextBtn.addEventListener("click", goStep2);

    const finishLead = (clearExtras) => {
      const data = new FormData(leadForm);
      if (clearExtras) {
        data.delete("want_wow");
        data.delete("want_app");
        data.delete("want_academy");
      }
      const payload = {
        email: String(data.get("email") || "").trim(),
        gift_swim: true,
        want_wow: data.get("want_wow") === "1",
        want_app: data.get("want_app") === "1",
        want_academy: data.get("want_academy") === "1",
        at: new Date().toISOString(),
        page: path,
      };
      try {
        const prev = JSON.parse(localStorage.getItem("pixto_lead_leads") || "[]");
        prev.push(payload);
        localStorage.setItem("pixto_lead_leads", JSON.stringify(prev.slice(-50)));
      } catch (_) {}
      localStorage.setItem("pixto_lead_subscribed", "1");
      localStorage.removeItem("pixto_lead_minimized");
      const note = root.querySelector("[data-lead-note]");
      note.hidden = false;
      note.textContent = "You're in. Opening your free printable trial...";
      setTimeout(() => {
        root.hidden = true;
        document.body.style.overflow = "";
        hideMini();
        window.location.href = "printable-trial.html";
      }, 700);
    };

    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const skip = e.submitter && e.submitter.classList.contains("lead-skip");
      finishLead(Boolean(skip));
    });

    if (minimized) {
      showMini();
      return;
    }

    if (sessionStorage.getItem("pixto_lead_shown") === "1") {
      showMini();
      return;
    }

    const delay = path === "index.html" || path === "" ? 5200 : 3500;
    setTimeout(open, delay);

    let exitArmed = true;
    document.addEventListener("mouseout", (e) => {
      if (!exitArmed || !root.hidden) return;
      if (localStorage.getItem("pixto_lead_minimized") === "1") return;
      if (e.clientY > 12) return;
      exitArmed = false;
      open();
    });
  }

  function initHelpChat() {
    const stack = ensureFloatStack();
    const wrap = document.createElement("div");
    wrap.className = "help-chat";
    wrap.innerHTML = `
      <div class="help-chat-panel" hidden data-help-panel>
        <div class="help-chat-head">
          <strong>Need help?</strong>
          <button type="button" aria-label="Close help" data-help-close>&times;</button>
        </div>
        <div class="help-chat-body">
          <p>Ask about packs, the app, or how to use the cards. We usually reply within one working day.</p>
          <div class="help-chat-actions">
            <a class="primary" href="contact.html">Contact form</a>
            <a class="ghost" href="mailto:hello@pixtolearn.com?subject=PixtoLearn%20help">Email hello@pixtolearn.com</a>
          </div>
        </div>
      </div>
      <button type="button" class="help-chat-btn" aria-label="Open help chat" data-help-toggle>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 18.5V7.8A2.8 2.8 0 0 1 7.8 5h8.4A2.8 2.8 0 0 1 19 7.8v6.4A2.8 2.8 0 0 1 16.2 17H9.2L5 18.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
          <path d="M9 10h6M9 13h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </button>
    `;
    stack.appendChild(wrap);

    const panel = wrap.querySelector("[data-help-panel]");
    const toggle = wrap.querySelector("[data-help-toggle]");
    const closeBtn = wrap.querySelector("[data-help-close]");

    const setOpen = (open) => {
      panel.hidden = !open;
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close help chat" : "Open help chat");
    };

    toggle.addEventListener("click", () => setOpen(panel.hidden));
    closeBtn.addEventListener("click", () => setOpen(false));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !panel.hidden) setOpen(false);
    });
  }

  function initAccountPortal() {
    const gate = document.querySelector("[data-account-gate]");
    const shell = document.querySelector("[data-account-shell]");
    if (!gate || !shell) return;

    const KEY = "ptl_account_v1";
    const read = () => {
      try {
        return JSON.parse(localStorage.getItem(KEY) || "null");
      } catch {
        return null;
      }
    };
    const write = (data) => localStorage.setItem(KEY, JSON.stringify(data));
    const clear = () => localStorage.removeItem(KEY);

    const nameNodes = document.querySelectorAll("[data-account-name]");
    const detailsDisplay = document.querySelector("[data-details-display]");
    const detailsEmail = document.querySelector("[data-details-email]");

    function showPanel(id) {
      document.querySelectorAll("[data-account-tab]").forEach((btn) => {
        btn.classList.toggle("is-active", btn.getAttribute("data-account-tab") === id);
      });
      document.querySelectorAll("[data-account-panel]").forEach((panel) => {
        const on = panel.getAttribute("data-account-panel") === id;
        panel.hidden = !on;
        panel.classList.toggle("is-active", on);
      });
    }

    function render(user) {
      if (user) {
        gate.hidden = true;
        shell.hidden = false;
        nameNodes.forEach((n) => {
          n.textContent = user.name || "Member";
        });
        if (detailsDisplay) detailsDisplay.value = user.name || "";
        if (detailsEmail) detailsEmail.value = user.email || "";
        showPanel("dashboard");
      } else {
        gate.hidden = false;
        shell.hidden = true;
      }
    }

    document.querySelectorAll("[data-auth-tab]").forEach((tab) => {
      tab.addEventListener("click", () => {
        const id = tab.getAttribute("data-auth-tab");
        document.querySelectorAll("[data-auth-tab]").forEach((t) => {
          const on = t === tab;
          t.classList.toggle("is-active", on);
          t.setAttribute("aria-selected", on ? "true" : "false");
        });
        document.querySelectorAll("[data-auth-panel]").forEach((panel) => {
          const on = panel.getAttribute("data-auth-panel") === id;
          panel.hidden = !on;
          panel.classList.toggle("is-active", on);
        });
      });
    });

    const loginForm = document.querySelector("[data-login-form]");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = String(loginForm.email.value || "").trim();
        const local = email.split("@")[0] || "Member";
        const name = local.replace(/[._-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
        write({ name, email, at: Date.now() });
        const note = loginForm.querySelector("[data-login-note]");
        if (note) note.textContent = "Signed in. Welcome back.";
        render(read());
      });
    }

    const registerForm = document.querySelector("[data-register-form]");
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = String(registerForm.name.value || "").trim() || "Member";
        const email = String(registerForm.email.value || "").trim();
        write({ name, email, at: Date.now() });
        const note = registerForm.querySelector("[data-register-note]");
        if (note) note.textContent = "Account ready. Opening your dashboard.";
        render(read());
      });
    }

    document.querySelectorAll("[data-account-tab]").forEach((btn) => {
      btn.addEventListener("click", () => showPanel(btn.getAttribute("data-account-tab")));
    });

    document.querySelectorAll("[data-jump]").forEach((btn) => {
      btn.addEventListener("click", () => showPanel(btn.getAttribute("data-jump")));
    });

    document.querySelectorAll("[data-account-logout]").forEach((btn) => {
      btn.addEventListener("click", () => {
        clear();
        render(null);
      });
    });

    const detailsForm = document.querySelector("[data-details-form]");
    if (detailsForm) {
      detailsForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const current = read() || {};
        const first = String(detailsForm.first.value || "").trim();
        const last = String(detailsForm.last.value || "").trim();
        const display = String(detailsForm.display.value || "").trim();
        const email = String(detailsForm.email.value || "").trim();
        const name = display || [first, last].filter(Boolean).join(" ") || current.name || "Member";
        write({ ...current, name, email: email || current.email, at: Date.now() });
        const note = detailsForm.querySelector("[data-details-note]");
        if (note) note.textContent = "Saved for this browser preview.";
        render(read());
        showPanel("details");
      });
    }

    render(read());
  }

  function initVideoCards() {
    const cards = Array.from(document.querySelectorAll("[data-video-card]"));
    if (!cards.length) return;

    function pauseOthers(except) {
      cards.forEach((card) => {
        if (card === except) return;
        const video = card.querySelector(".video-el");
        if (video && !video.paused) video.pause();
        card.classList.remove("is-playing");
      });
    }

    cards.forEach((card) => {
      const playBtn = card.querySelector(".video-play");
      const video = card.querySelector(".video-el");
      if (!playBtn || !video) return;

      playBtn.addEventListener("click", () => {
        pauseOthers(card);
        card.classList.add("is-playing");
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {
            card.classList.remove("is-playing");
          });
        }
      });

      video.addEventListener("play", () => {
        pauseOthers(card);
        card.classList.add("is-playing");
      });

      video.addEventListener("pause", () => {
        if (video.ended) return;
      });

      video.addEventListener("ended", () => {
        card.classList.remove("is-playing");
        video.currentTime = 0;
      });
    });
  }

  function initSwimUsers() {
    const root = document.querySelector("[data-swim-users]");
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll(".swim-users-node[data-user]"));
    const tabs = Array.from(root.querySelectorAll(".swim-users-tabs [data-user]"));
    const panels = Array.from(root.querySelectorAll("[data-user-panel]"));
    const orbit = root.querySelector("[data-swim-orbit]");
    let active = root.getAttribute("data-active") || "";
    let pauseTimer = null;

    function setActive(key, { pause = true } = {}) {
      active = key || "";
      root.setAttribute("data-active", active);
      root.classList.toggle("is-selected", Boolean(active));

      const panelWrap = root.querySelector("[data-swim-panel]");
      if (panelWrap) {
        panelWrap.setAttribute("aria-hidden", active ? "false" : "true");
      }

      nodes.forEach((node) => {
        const on = Boolean(active) && node.getAttribute("data-user") === active;
        node.classList.toggle("is-active", on);
        node.setAttribute("aria-pressed", on ? "true" : "false");
      });

      tabs.forEach((tab) => {
        const on = Boolean(active) && tab.getAttribute("data-user") === active;
        tab.classList.toggle("is-active", on);
        tab.setAttribute("aria-selected", on ? "true" : "false");
      });

      panels.forEach((panel) => {
        const panelKey = panel.getAttribute("data-user-panel");
        const on = Boolean(active) && panelKey === active;
        panel.hidden = !on;
        if (on) {
          panel.style.animation = "none";
          // Force reflow so the entrance animation can replay
          void panel.offsetWidth;
          panel.style.animation = "";
        }
      });

      if (pause && active) {
        root.classList.add("is-paused");
        clearTimeout(pauseTimer);
        pauseTimer = setTimeout(() => {
          root.classList.remove("is-paused");
        }, 4500);
      }
    }

    function onSelect(key) {
      if (!key) return;
      const mobile = window.matchMedia("(max-width: 960px)").matches;
      // Desktop: clicking the active role again recenters the orbit
      if (!mobile && active === key) {
        setActive("", { pause: false });
        return;
      }
      setActive(key, { pause: true });
    }

    nodes.forEach((node) => {
      node.addEventListener("click", () => onSelect(node.getAttribute("data-user")));
      node.addEventListener("mouseenter", () => root.classList.add("is-paused"));
      node.addEventListener("mouseleave", () => {
        // Keep paused briefly after leaving a node so reading is comfortable
        clearTimeout(pauseTimer);
        pauseTimer = setTimeout(() => root.classList.remove("is-paused"), 1200);
      });
    });

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => onSelect(tab.getAttribute("data-user")));
    });

    if (orbit) {
      orbit.addEventListener("mouseenter", () => root.classList.add("is-paused"));
      orbit.addEventListener("mouseleave", () => {
        clearTimeout(pauseTimer);
        pauseTimer = setTimeout(() => root.classList.remove("is-paused"), 900);
      });
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) root.classList.add("is-paused");
    reduceMotion.addEventListener("change", (e) => {
      root.classList.toggle("is-paused", e.matches);
    });

    const mobileQuery = window.matchMedia("(max-width: 960px)");
    if (mobileQuery.matches && !active) active = "instructors";
    setActive(active, { pause: false });
  }

  function initPackCarousel() {
    const root = document.querySelector("[data-pack-carousel]");
    if (!root) return;
    const slides = Array.from(root.querySelectorAll("[data-pack-slide]"));
    const dots = Array.from(root.querySelectorAll("[data-pack-dot]"));
    const prev = root.querySelector(".pack-nav-prev");
    const next = root.querySelector(".pack-nav-next");
    if (!slides.length) return;
    let index = Math.max(
      0,
      slides.findIndex((s) => s.classList.contains("is-active"))
    );

    function stopVideos() {
      root.querySelectorAll(".video-el").forEach((v) => {
        v.pause();
        v.currentTime = 0;
      });
      root.querySelectorAll("[data-video-card]").forEach((c) => c.classList.remove("is-playing"));
    }

    function show(i) {
      index = (i + slides.length) % slides.length;
      stopVideos();
      slides.forEach((s, n) => s.classList.toggle("is-active", n === index));
      dots.forEach((d, n) => d.classList.toggle("is-active", n === index));
    }

    if (prev) prev.addEventListener("click", () => show(index - 1));
    if (next) next.addEventListener("click", () => show(index + 1));
    dots.forEach((d) => {
      d.addEventListener("click", () => show(Number(d.getAttribute("data-pack-dot")) || 0));
    });

    let touchX = null;
    root.addEventListener(
      "touchstart",
      (e) => {
        touchX = e.changedTouches[0].clientX;
      },
      { passive: true }
    );
    root.addEventListener(
      "touchend",
      (e) => {
        if (touchX == null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        touchX = null;
        if (Math.abs(dx) < 48) return;
        if (dx < 0) show(index + 1);
        else show(index - 1);
      },
      { passive: true }
    );

    show(index);
  }

  function initFlashStage() {
    const root = document.querySelector("[data-flash-stage]");
    if (!root) return;
    const buttons = Array.from(root.querySelectorAll("[data-flash-side]"));
    const panels = Array.from(root.querySelectorAll("[data-flash-panel]"));
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const side = btn.getAttribute("data-flash-side");
        buttons.forEach((b) => b.classList.toggle("is-active", b === btn));
        panels.forEach((p) => {
          const on = p.getAttribute("data-flash-panel") === side;
          p.hidden = !on;
          p.classList.toggle("is-active", on);
        });
      });
    });
  }

  function initWowMoment() {
    const root = document.querySelector("[data-wow-moment]");
    if (!root) return;

    const board = root.querySelector(".wow-moment-board");
    const stage = root.querySelector("[data-wow-stage]");
    const insight = root.querySelector("[data-wow-insight]");
    const note = root.querySelector("[data-wow-note]");
    const exampleTabs = Array.from(root.querySelectorAll("[data-wow-example]"));
    const lensTabs = Array.from(root.querySelectorAll("[data-wow-lens]"));
    const slots = Array.from(root.querySelectorAll("[data-wow-slot] img"));
    if (!board || !stage || !slots.length) return;

    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");

    const lensCopy = {
      words: {
        insight: "Words name the moment.",
        note: "Everyday vocabulary with clear image associations.",
      },
      objects: {
        insight: "Objects unlock Ways.",
        note: "Tangible items that unlock interaction with the world.",
      },
      ways: {
        insight: "Ways show how it gets done.",
        note: "Methods and sequences for how things get done.",
      },
    };

    const moments = {
      dressed: {
        words: [
          { src: "assets/packs/keyring/1/7_look.png", alt: "look" },
          { src: "assets/packs/keyring/1/6_sitdown.png", alt: "sit down" },
          { src: "assets/packs/keyring/1/24_help.png", alt: "help" },
        ],
        objects: [
          { src: "assets/packs/keyring/2/1_shoes.png", alt: "shoes" },
          { src: "assets/packs/keyring/2/2_socks.png", alt: "socks" },
          { src: "assets/packs/keyring/2/8_jumper.png", alt: "jumper" },
        ],
        ways: [
          { src: "assets/packs/keyring/2/1_shoeson.png", alt: "shoes on" },
          { src: "assets/packs/keyring/2/3_sockson.png", alt: "socks on" },
          { src: "assets/packs/keyring/2/15_jumperon.png", alt: "jumper on" },
        ],
      },
      climb: {
        words: [
          { src: "assets/packs/keyring/1/7_look.png", alt: "look" },
          { src: "assets/packs/keyring/1/17_wait.png", alt: "wait" },
          { src: "assets/packs/keyring/1/25_listen.png", alt: "listen" },
        ],
        objects: [
          { src: "assets/packs/keyring/5/2_harness.png", alt: "harness" },
          { src: "assets/packs/keyring/5/5_helmet.png", alt: "helmet" },
          { src: "assets/packs/keyring/5/4_climbingshoes.png", alt: "climbing shoes" },
        ],
        ways: [
          { src: "assets/packs/keyring/5/2_putharnesson.png", alt: "put harness on" },
          { src: "assets/packs/keyring/5/3_puthelmeton.png", alt: "put helmet on" },
          { src: "assets/packs/keyring/5/4_putclimbingshoeson.png", alt: "put climbing shoes on" },
        ],
      },
      teeth: {
        words: [
          { src: "assets/packs/keyring/1/7_look.png", alt: "look" },
          { src: "assets/packs/keyring/1/4_get.png", alt: "get" },
          { src: "assets/packs/keyring/1/14_finish.png", alt: "finish" },
        ],
        objects: [
          { src: "assets/packs/keyring/3/1_toothbrush.png", alt: "toothbrush" },
          { src: "assets/packs/keyring/3/2_toothpaste.png", alt: "toothpaste" },
          { src: "assets/packs/keyring/3/6_cup.png", alt: "cup" },
        ],
        ways: [
          { src: "assets/packs/keyring/3/1_gettoothbrush.png", alt: "get toothbrush" },
          { src: "assets/packs/keyring/3/2_puttoothpaste.png", alt: "put toothpaste" },
          { src: "assets/packs/keyring/3/3_brushtopteeth.png", alt: "brush top teeth" },
        ],
      },
    };

    let example = "dressed";
    let lens = "objects";
    let timer = null;

    function paint(animate) {
      const cards = moments[example][lens];
      const copy = lensCopy[lens];
      board.setAttribute("data-lens", lens);
      if (insight) insight.textContent = copy.insight;
      if (note) note.textContent = copy.note;

      const apply = () => {
        cards.forEach((card, i) => {
          const img = slots[i];
          if (!img) return;
          img.src = card.src;
          img.alt = card.alt;
        });
        stage.classList.remove("is-swap");
      };

      if (animate && !calm.matches) {
        stage.classList.add("is-swap");
        window.setTimeout(apply, 180);
      } else {
        apply();
      }
    }

    function setExample(next, animate) {
      example = next;
      exampleTabs.forEach((tab) => {
        const on = tab.getAttribute("data-wow-example") === example;
        tab.classList.toggle("is-on", on);
        tab.setAttribute("aria-selected", on ? "true" : "false");
      });
      paint(animate);
    }

    function setLens(next, animate) {
      lens = next;
      lensTabs.forEach((tab) => {
        const on = tab.getAttribute("data-wow-lens") === lens;
        tab.classList.toggle("is-on", on);
        tab.setAttribute("aria-selected", on ? "true" : "false");
      });
      paint(animate);
    }

    function stop() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    function play() {
      if (calm.matches) return;
      stop();
      const order = ["objects", "ways", "words"];
      timer = window.setInterval(() => {
        const i = order.indexOf(lens);
        setLens(order[(i + 1) % order.length], true);
      }, 4200);
    }

    exampleTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        setExample(tab.getAttribute("data-wow-example"), true);
        stop();
      });
    });

    lensTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        setLens(tab.getAttribute("data-wow-lens"), true);
        stop();
      });
    });

    board.addEventListener("mouseenter", stop);
    board.addEventListener("mouseleave", play);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) play();
          else stop();
        });
      },
      { threshold: 0.35 }
    );
    io.observe(board);

    setExample(example, false);
    setLens(lens, false);
  }

  function createExclusiveVisibleCycles() {
    const items = new Map();
    let active = null;
    let io = null;

    function score(el) {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const top = Math.max(r.top, 0);
      const bottom = Math.min(r.bottom, vh);
      const visible = Math.max(0, bottom - top);
      if (visible < 80 || r.height <= 0) return 0;
      const ratio = visible / Math.min(r.height, vh);
      if (ratio < 0.22) return 0;
      const mid = (r.top + r.bottom) / 2;
      const centerDist = Math.abs(mid - vh / 2) / vh;
      return ratio * (1.15 - Math.min(1, centerDist));
    }

    function pick() {
      let winner = null;
      let best = 0;
      items.forEach((m, el) => {
        const s = score(el);
        m.score = s;
        if (s > best) {
          best = s;
          winner = el;
        }
      });

      if (winner === active) {
        const current = winner ? items.get(winner) : null;
        if (winner && current && !current.held && !current.playing) {
          current.playing = true;
          current.onPlay();
        }
        return;
      }

      if (active) {
        const prev = items.get(active);
        if (prev) {
          prev.playing = false;
          prev.onStop();
        }
        active = null;
      }

      if (!winner) return;
      const next = items.get(winner);
      if (!next || next.held) return;
      active = winner;
      next.playing = true;
      next.onPlay();
    }

    function ensureIo() {
      if (io || !("IntersectionObserver" in window)) return;
      io = new IntersectionObserver(() => pick(), {
        threshold: [0, 0.15, 0.28, 0.4, 0.55, 0.7, 0.85, 1]
      });
      window.addEventListener("scroll", pick, { passive: true });
      window.addEventListener("resize", pick);
    }

    return {
      register(el, onPlay, onStop) {
        const m = { onPlay, onStop, score: 0, held: false, playing: false };
        items.set(el, m);
        ensureIo();
        if (io) io.observe(el);
        pick();
        return {
          hold() {
            m.held = true;
            if (active === el) {
              m.playing = false;
              m.onStop();
              active = null;
            }
          },
          release() {
            m.held = false;
            pick();
          }
        };
      }
    };
  }

  function wowAutoCycles() {
    if (!wowAutoCycles._inst) wowAutoCycles._inst = createExclusiveVisibleCycles();
    return wowAutoCycles._inst;
  }

  function initWowSpotlight() {
    const root = document.querySelector("[data-wow-spotlight]");
    if (!root) return;

    const cards = Array.from(root.querySelectorAll("[data-spotlight-card]"));
    const labels = Array.from(root.querySelectorAll("[data-spotlight-label]"));
    const live = root.querySelector("[data-spotlight-live]");
    const note = root.querySelector("[data-spotlight-copy]");
    if (!cards.length || !labels.length) return;

    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const watch = root.closest(".wow-outcomes") || root;
    let index = Math.max(
      0,
      labels.findIndex((label) => label.classList.contains("is-active"))
    );
    let timer = null;

    function show(next) {
      index = ((next % cards.length) + cards.length) % cards.length;
      cards.forEach((card, i) => {
        card.classList.toggle("is-active", i === index);
      });
      labels.forEach((label, i) => {
        const on = i === index;
        label.classList.toggle("is-active", on);
        label.setAttribute("aria-pressed", on ? "true" : "false");
      });
      const label = labels[index];
      const title = label.textContent.trim();
      if (live) live.textContent = title;
      if (note) note.textContent = label.getAttribute("data-note") || "";
    }

    function stop() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    function play() {
      if (calm.matches) return;
      stop();
      timer = window.setInterval(() => show(index + 1), 1100);
    }

    const gate = wowAutoCycles().register(watch, play, stop);

    labels.forEach((label, i) => {
      label.addEventListener("click", () => {
        show(i);
        gate.hold();
        window.clearTimeout(root._wowSpotlightResume);
        root._wowSpotlightResume = window.setTimeout(() => gate.release(), 4000);
      });
    });

    root.addEventListener("focusin", () => gate.hold());
    root.addEventListener("focusout", (e) => {
      if (!root.contains(e.relatedTarget)) gate.release();
    });

    show(index);
  }

  function initWowPortable() {
    const section = document.querySelector("[data-portable-section]");
    const rail = document.querySelector("[data-portable-rail]");
    if (!rail) return;

    const shots = Array.from(rail.querySelectorAll(".wow-portable-shot"));
    if (!shots.length) return;

    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const watch = section || rail;
    let index = Math.max(0, shots.findIndex((shot) => shot.classList.contains("is-spotlight")));
    let timer = null;

    function setSpotlight(active, focus = false) {
      index = Math.max(0, shots.indexOf(active));
      shots.forEach((shot, i) => {
        const on = i === index;
        shot.classList.toggle("is-spotlight", on);
        shot.setAttribute("aria-pressed", on ? "true" : "false");
      });
      if (focus) shots[index].focus({ preventScroll: true });
    }

    function nextShot(from) {
      let i = from;
      for (let n = 0; n < shots.length; n++) {
        i = (i + 1) % shots.length;
        if (!shots[i].querySelector(".photo-ph")) return shots[i];
      }
      return shots[i];
    }

    function stop() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    function play() {
      if (calm.matches) return;
      stop();
      timer = window.setInterval(() => {
        if (calm.matches) return;
        setSpotlight(nextShot(index));
      }, 2000);
    }

    const gate = wowAutoCycles().register(watch, play, stop);

    function pauseTemporarily(ms = 5000) {
      gate.hold();
      window.clearTimeout(rail._portableResume);
      rail._portableResume = window.setTimeout(() => gate.release(), ms);
    }

    shots.forEach((shot) => {
      shot.addEventListener("click", () => {
        setSpotlight(shot);
        pauseTemporarily();
      });
      shot.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setSpotlight(shot);
          pauseTemporarily();
        }
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          setSpotlight(nextShot(index), true);
          pauseTemporarily();
        }
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          let i = index;
          for (let n = 0; n < shots.length; n++) {
            i = (i - 1 + shots.length) % shots.length;
            if (!shots[i].querySelector(".photo-ph")) break;
          }
          setSpotlight(shots[i], true);
          pauseTemporarily();
        }
      });
    });

    rail.addEventListener("focusin", () => gate.hold());
    rail.addEventListener("focusout", (e) => {
      if (!rail.contains(e.relatedTarget)) gate.release();
    });

    if (!shots[index]?.classList.contains("is-spotlight") || shots[index].querySelector(".photo-ph")) {
      const firstReal = shots.find((shot) => !shot.querySelector(".photo-ph")) || shots[0];
      setSpotlight(firstReal);
    }
  }

  function initAcademyPath() {
    const root = document.querySelector("[data-aca-path]");
    if (!root) return;

    const items = [
      {
        deep: false,
        bundle: false,
        level: "Course",
        title: "Visual Teaching Foundations",
        price: "£19",
        meta: "About 45–60 minutes · laptop or phone",
        kicker: "After this course",
        after: "Explain the visual method to a colleague and spot one place to use it tomorrow.",
        openLabel: "Open course",
        openHref: "learn/course/visual-teaching-foundations/index.html",
        buyLabel: "Buy £19",
        buyHref: "cart.html",
        buyAttrs: {
          id: "aca-foundations",
          name: "Academy: Visual Teaching Foundations",
          price: "19",
          image: "assets/photos/mode/first-then.jpg",
          href: "learn/course/visual-teaching-foundations/index.html",
        },
        accent: "var(--pink-deep)",
      },
      {
        deep: false,
        bundle: false,
        level: "Course",
        title: "Using Packs and the App",
        price: "£29",
        meta: "About 45–60 minutes · laptop or phone",
        kicker: "After this course",
        after: "Run one Focus or First & Then board with Packs and the App as one system.",
        openLabel: "Open course",
        openHref: "learn/course/using-pixtolearn-packs-and-app/index.html",
        buyLabel: "Buy £29",
        buyHref: "cart.html",
        buyAttrs: {
          id: "aca-packs-app",
          name: "Academy: Using PixtoLearn Packs and App",
          price: "29",
          image: "assets/photos/hero-app.jpg",
          href: "learn/course/using-pixtolearn-packs-and-app/index.html",
        },
        accent: "var(--pink-deep)",
      },
      {
        deep: false,
        bundle: false,
        level: "Course",
        title: "Teaching Swimming with Visuals",
        price: "£29",
        meta: "About 45–60 minutes · laptop or phone",
        kicker: "After this course",
        after: "Place three poolside visuals and coach one skill step without extra talk.",
        openLabel: "Open course",
        openHref: "learn/course/teaching-swimming-visual-systems/index.html",
        buyLabel: "Buy £29",
        buyHref: "cart.html",
        buyAttrs: {
          id: "aca-swimming",
          name: "Academy: Teaching Swimming with Visual Systems",
          price: "29",
          image: "assets/photos/mode/session-match.jpg",
          href: "learn/course/teaching-swimming-visual-systems/index.html",
        },
        accent: "var(--pink-deep)",
      },
      {
        deep: false,
        bundle: false,
        level: "Course",
        title: "Everyday Routines for Toddlers",
        price: "£29",
        meta: "About 45–60 minutes · laptop or phone",
        kicker: "After this course",
        after: "Set one home transition at child height with WOW cards.",
        openLabel: "Open course",
        openHref: "learn/course/everyday-visual-routines-toddlers/index.html",
        buyLabel: "Buy £29",
        buyHref: "cart.html",
        buyAttrs: {
          id: "aca-toddlers",
          name: "Academy: Everyday Visual Routines for Toddlers",
          price: "29",
          image: "assets/icons/audience/families.jpg",
          href: "learn/course/everyday-visual-routines-toddlers/index.html",
        },
        accent: "var(--pink-deep)",
      },
      {
        deep: false,
        bundle: true,
        level: "Best value",
        title: "All four courses",
        price: "£79",
        meta: "Full Launch set · team licence £249 for 10 seats",
        kicker: "After the bundle",
        after: "Method, tools, pool and home — one shared language across Packs, WOW and the App.",
        openLabel: "Buy pathway",
        openHref: "cart.html",
        buyLabel: "Team £249",
        buyHref: "cart.html",
        openBuyAttrs: {
          id: "aca-pathway",
          name: "Academy: Launch Pathway (4 courses)",
          price: "79",
          image: "assets/photos/academy-hero.jpg",
          href: "learn/index.html",
        },
        buyAttrs: {
          id: "aca-team",
          name: "Academy: Team licence (10 seats / 1 year)",
          price: "249",
          image: "assets/photos/workshop.jpg",
          href: "contact.html?interest=academy-team",
        },
        accent: "var(--pink-deep)",
      },
      {
        deep: true,
        bundle: false,
        level: "Specialisation",
        title: "Neurodiversity Visual Specialist",
        price: "£199",
        meta: "Full pathway · team £399",
        kicker: "After this specialisation",
        after: "Design and sustain a shared visual system across home, school, therapy, community and pool.",
        openLabel: "Open",
        openHref: "learn/course/neurodiversity-visual-specialist/index.html",
        buyLabel: "Buy £199",
        buyHref: "cart.html",
        buyAttrs: {
          id: "aca-neuro-specialist",
          name: "Academy: Neurodiversity Visual Specialist",
          price: "199",
          image: "assets/icons/audience/occupational-therapist.jpg",
          href: "learn/course/neurodiversity-visual-specialist/index.html",
        },
        accent: "var(--slate-deep)",
      },
      {
        deep: true,
        bundle: false,
        level: "Specialisation",
        title: "Aquatic Pathway I + II",
        price: "£199",
        meta: "PixtoLearn with clubSENsational · team £399",
        kicker: "After this specialisation",
        after: "Run deeper aquatic pedagogy and skills progression with clubSENsational.",
        openLabel: "Open",
        openHref: "learn/course/aquatic-specialist-pathway/index.html",
        buyLabel: "Buy £199",
        buyHref: "cart.html",
        buyAttrs: {
          id: "aca-aquatic-specialist",
          name: "Academy: Aquatic Pathway (PixtoLearn with clubSENsational)",
          price: "199",
          image: "assets/photos/mode/session-logo-back.jpg",
          href: "learn/course/aquatic-specialist-pathway/index.html",
        },
        accent: "var(--slate-deep)",
      },
      {
        deep: true,
        bundle: false,
        level: "Coming next",
        title: "Older Adults & Dementia",
        price: "TBA",
        meta: "Outline available · price with release",
        kicker: "Coming next",
        after: "Preview calm visual routines for later-life care.",
        openLabel: "View outline",
        openHref: "learn/curriculum/dementia-older-adults-outline.html",
        buyLabel: "Contact",
        buyHref: "contact.html?interest=academy",
        buyAttrs: null,
        accent: "var(--slate-deep)",
      },
    ];

    const stops = Array.from(root.querySelectorAll(".aca-path-stop"));
    const panel = root.querySelector("[data-aca-path-panel]");
    const body = root.querySelector("[data-aca-path-body]");
    const levelEl = root.querySelector("[data-aca-path-level]");
    const titleEl = root.querySelector("[data-aca-path-title]");
    const priceEl = root.querySelector("[data-aca-path-price]");
    const metaEl = root.querySelector("[data-aca-path-meta]");
    const kickerEl = root.querySelector("[data-aca-path-kicker]");
    const afterEl = root.querySelector("[data-aca-path-after]");
    const openEl = root.querySelector("[data-aca-path-open]");
    const buyEl = root.querySelector("[data-aca-path-buy]");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    let index = 0;
    let timer = null;
    let userLocked = false;
    let spyPaused = false;
    let scrollIdle = null;
    let clickGuardUntil = 0;
    const courseCount = 5;
    const CYCLE_MS = 2500;

    function setBuyAttrs(el, attrs, asBuy) {
      if (!el) return;
      if (!attrs) {
        el.removeAttribute("data-aca-buy");
        el.removeAttribute("data-product-id");
        el.removeAttribute("data-product-name");
        el.removeAttribute("data-product-price");
        el.removeAttribute("data-product-image");
        el.removeAttribute("data-product-href");
        return;
      }
      if (asBuy) el.setAttribute("data-aca-buy", "");
      else el.removeAttribute("data-aca-buy");
      el.setAttribute("data-product-id", attrs.id);
      el.setAttribute("data-product-name", attrs.name);
      el.setAttribute("data-product-price", attrs.price);
      el.setAttribute("data-product-image", attrs.image);
      el.setAttribute("data-product-href", attrs.href);
    }

    function apply(item) {
      if (levelEl) levelEl.textContent = item.level;
      if (titleEl) titleEl.textContent = item.title;
      if (priceEl) priceEl.textContent = item.price;
      if (metaEl) metaEl.textContent = item.meta;
      if (kickerEl) kickerEl.textContent = item.kicker;
      if (afterEl) afterEl.textContent = item.after;
      if (openEl) {
        openEl.textContent = item.openLabel;
        openEl.setAttribute("href", item.openHref);
        if (item.openBuyAttrs) {
          openEl.setAttribute("data-aca-buy", "");
          setBuyAttrs(openEl, item.openBuyAttrs, true);
        } else {
          openEl.removeAttribute("data-aca-buy");
          setBuyAttrs(openEl, null, false);
        }
      }
      if (buyEl) {
        buyEl.textContent = item.buyLabel;
        buyEl.setAttribute("href", item.buyHref);
        setBuyAttrs(buyEl, item.buyAttrs, Boolean(item.buyAttrs));
      }
      if (panel) {
        panel.style.setProperty("--panel-accent", item.accent);
        panel.classList.toggle("is-deep", item.deep);
      }
    }

    function show(next, fromUser) {
      index = ((next % items.length) + items.length) % items.length;
      if (fromUser) userLocked = items[index].deep || items[index].bundle;

      stops.forEach((stop, i) => {
        stop.classList.toggle("is-active", i === index);
      });

      const item = items[index];
      if (!body || calm.matches) {
        apply(item);
        return;
      }

      body.classList.add("is-swap");
      window.setTimeout(() => {
        apply(item);
        body.classList.remove("is-swap");
      }, 160);
    }

    function stopAuto() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    function playAuto() {
      if (calm.matches || userLocked || spyPaused) return;
      stopAuto();
      timer = window.setInterval(() => {
        if (userLocked || spyPaused) {
          stopAuto();
          return;
        }
        show((index + 1) % courseCount, false);
      }, CYCLE_MS);
    }

    function sectionInView() {
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      return rect.top < vh * 0.85 && rect.bottom > vh * 0.2;
    }

    function spyFromScroll() {
      if (!sectionInView()) return;
      if (Date.now() < clickGuardUntil) return;

      const focusY = (window.innerHeight || 0) * 0.42;
      let best = index;
      let bestDist = Infinity;

      stops.forEach((stop, i) => {
        const rect = stop.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > (window.innerHeight || 0)) return;
        const mid = rect.top + rect.height * 0.5;
        const dist = Math.abs(mid - focusY);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });

      if (best !== index) {
        show(best, false);
        if (items[best].deep) {
          userLocked = true;
          stopAuto();
        }
      }
    }

    function onScroll() {
      spyPaused = true;
      stopAuto();
      spyFromScroll();
      if (scrollIdle) window.clearTimeout(scrollIdle);
      scrollIdle = window.setTimeout(() => {
        spyPaused = false;
        if (!userLocked) playAuto();
      }, 900);
    }

    root.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-aca-path-i]");
      if (!btn || !root.contains(btn)) return;
      const next = Number(btn.getAttribute("data-aca-path-i"));
      clickGuardUntil = Date.now() + 700;
      show(next, true);
      const stop = stops[next];
      if (stop?.scrollIntoView) {
        stop.scrollIntoView({
          block: "nearest",
          behavior: calm.matches ? "auto" : "smooth",
        });
      }
      if (items[index].deep) stopAuto();
      else playAuto();
    });

    root.addEventListener("mouseenter", stopAuto);
    root.addEventListener("mouseleave", () => {
      if (!userLocked && !spyPaused) playAuto();
    });
    root.addEventListener("focusin", stopAuto);
    root.addEventListener("focusout", (e) => {
      if (!root.contains(e.relatedTarget) && !userLocked && !spyPaused) playAuto();
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", spyFromScroll, { passive: true });

    const hash = (location.hash || "").toLowerCase();
    let start = 0;
    if (
      hash === "#specialisations" ||
      hash === "#specialist" ||
      hash === "#pathways"
    ) {
      start = 5;
      userLocked = true;
    } else if (hash === "#cobrand") {
      start = 6;
      userLocked = true;
    } else if (hash === "#launch" || hash === "#path") {
      start = 0;
    }

    show(start, false);
    if (!userLocked) playAuto();
  }

  function initModeStage() {
    const stage = document.querySelector("[data-mode-stage]");
    if (!stage) return;

    const tabs = Array.from(stage.querySelectorAll(".plmode-tab"));
    const panels = Array.from(stage.querySelectorAll(".plmode-panel"));
    if (!tabs.length || !panels.length) return;

    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    let index = Math.max(
      0,
      tabs.findIndex((tab) => tab.classList.contains("is-on"))
    );
    let timer = null;

    function show(next) {
      index = ((next % panels.length) + panels.length) % panels.length;
      const mode = tabs[index].getAttribute("data-mode");
      tabs.forEach((tab, i) => {
        const on = i === index;
        tab.classList.toggle("is-on", on);
        tab.setAttribute("aria-selected", on ? "true" : "false");
      });
      panels.forEach((panel) => {
        panel.classList.toggle("is-on", panel.getAttribute("data-panel") === mode);
      });
    }

    function stop() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    function play() {
      if (calm.matches) return;
      stop();
      timer = window.setInterval(() => show(index + 1), 3600);
    }

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => {
        show(i);
        stop();
      });
    });

    stage.addEventListener("mouseenter", stop);
    stage.addEventListener("mouseleave", play);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) play();
          else stop();
        });
      },
      { threshold: 0.35 }
    );
    io.observe(stage);
    show(index);
  }
})();
