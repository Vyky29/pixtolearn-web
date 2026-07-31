(function () {
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
  initMissionProgress();
  initAcademyWaitlist();
  initAcademyStage();
  initAcademyGain();
  initAcademyKits();
  initFooterNewsletter();

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
        note.textContent =
          "Thanks. You are on the Academy updates list. You can buy courses any time from the pricing section.";
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
            <h2 id="lead-title">Let's be in touch</h2>
            <p>Subscribe for PixtoLearn updates and get a <strong>free swimming printable trial</strong>. Tell us what else you want and we will tailor what we send.</p>
            <form class="lead-form" data-lead-form>
              <div class="lead-row">
                <label>Name<input type="text" name="name" placeholder="Name" required autocomplete="given-name" /></label>
                <label>Surname<input type="text" name="surname" placeholder="Surname" required autocomplete="family-name" /></label>
              </div>
              <label>Email<input type="email" name="email" placeholder="Email" required autocomplete="email" /></label>
              <div class="lead-checks">
                <label><input type="checkbox" name="gift_swim" value="1" checked disabled /> Free swimming printable trial</label>
                <label><input type="checkbox" name="want_wow" value="1" /> Also send a WOW cards sample when ready</label>
                <label><input type="checkbox" name="want_app" value="1" /> PixtoLearn App launch tips</label>
                <label><input type="checkbox" name="want_academy" value="1" /> PixtoLearn Academy waiting list</label>
                <label><input type="checkbox" name="privacy" value="1" required /> I agree to the <a href="privacy.html" target="_blank" rel="noopener">Privacy Policy</a></label>
              </div>
              <button class="lead-submit" type="submit">Submit</button>
              <p class="lead-note" data-lead-note hidden></p>
            </form>
          </div>
          <div class="lead-visual" aria-hidden="true">
            <img src="assets/packs/card-sample-a.jpeg" alt="" />
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
      const first = root.querySelector('input[name="name"]');
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
    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(leadForm);
      const payload = {
        name: String(data.get("name") || "").trim(),
        surname: String(data.get("surname") || "").trim(),
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
})();
