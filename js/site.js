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
})();
