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
  initSwimWaves();
  initCardRailMomentum();
  initAccountPortal();
  initVideoCards();
  initSwimUsers();
  initPackCarousel();

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

  function initLeadPopup() {
    if (path === "printable-trial.html") return;
    const dismissed = localStorage.getItem("pixto_lead_dismissed");
    const subscribed = localStorage.getItem("pixto_lead_subscribed");
    if (dismissed === "1" || subscribed === "1") return;
    if (sessionStorage.getItem("pixto_lead_shown") === "1") return;

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

    const open = () => {
      root.hidden = false;
      document.body.style.overflow = "hidden";
      sessionStorage.setItem("pixto_lead_shown", "1");
      const first = root.querySelector('input[name="name"]');
      if (first) setTimeout(() => first.focus(), 180);
    };

    const close = (persistDismiss) => {
      root.hidden = true;
      document.body.style.overflow = "";
      if (persistDismiss) localStorage.setItem("pixto_lead_dismissed", "1");
    };

    root.querySelectorAll("[data-lead-close]").forEach((el) => {
      el.addEventListener("click", () => close(true));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !root.hidden) close(true);
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
        at: new Date().toISOString(),
        page: path,
      };
      try {
        const prev = JSON.parse(localStorage.getItem("pixto_lead_leads") || "[]");
        prev.push(payload);
        localStorage.setItem("pixto_lead_leads", JSON.stringify(prev.slice(-50)));
      } catch (_) {}
      localStorage.setItem("pixto_lead_subscribed", "1");
      const note = root.querySelector("[data-lead-note]");
      note.hidden = false;
      note.textContent = "You're in. Opening your free printable trial...";
      setTimeout(() => {
        close(false);
        window.location.href = "printable-trial.html";
      }, 700);
    });

    // Delay so home hero breathes; also open on soft exit intent (desktop)
    const delay = path === "index.html" || path === "" ? 5200 : 3500;
    setTimeout(open, delay);

    let exitArmed = true;
    document.addEventListener("mouseout", (e) => {
      if (!exitArmed || !root.hidden) return;
      if (e.clientY > 12) return;
      exitArmed = false;
      open();
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
    const tabs = Array.from(root.querySelectorAll("[data-user]"));
    const panels = Array.from(root.querySelectorAll("[data-user-panel]"));
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const key = tab.getAttribute("data-user");
        tabs.forEach((t) => {
          const on = t === tab;
          t.classList.toggle("is-active", on);
          t.setAttribute("aria-selected", on ? "true" : "false");
        });
        panels.forEach((p) => {
          const on = p.getAttribute("data-user-panel") === key;
          p.hidden = !on;
        });
      });
    });
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
})();
