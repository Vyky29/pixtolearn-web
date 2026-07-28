(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
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
})();
