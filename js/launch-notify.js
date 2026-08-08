/**
 * Launch waitlist — posts to Formspree when data-endpoint is set.
 * Set data-endpoint on [data-launch-notify] to e.g. https://formspree.io/f/xxxxxxxx
 * Until then, emails are stored locally so the UI still works in preview.
 */
(function () {
  const form = document.querySelector("[data-launch-notify]");
  if (!form) return;

  const note = form.querySelector("[data-launch-note]");
  const endpoint = (form.getAttribute("data-endpoint") || "").trim();

  function setNote(text, ok) {
    if (!note) return;
    note.textContent = text;
    note.classList.toggle("is-ok", !!ok);
    note.classList.toggle("is-err", ok === false);
  }

  function saveLocal(email) {
    try {
      const prev = JSON.parse(localStorage.getItem("pixto_launch_notify") || "[]");
      prev.push({
        email,
        source: "launch",
        at: new Date().toISOString(),
      });
      localStorage.setItem("pixto_launch_notify", JSON.stringify(prev.slice(-200)));
    } catch (_) {}
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    const honey = String(data.get("company") || "").trim();
    if (honey) return;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNote("Please enter a valid email.", false);
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    if (btn) btn.disabled = true;
    setNote("Sending…", null);

    saveLocal(email);

    if (!endpoint) {
      setNote("Nice — we’ll email you as soon as we launch!", true);
      form.reset();
      if (btn) btn.disabled = false;
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: (() => {
          const body = new FormData();
          body.set("email", email);
          body.set("_subject", "PixtoLearn — notify at launch");
          body.set("source", "launch-waitlist");
          return body;
        })(),
      });

      if (!res.ok) throw new Error("bad status");
      setNote("Nice — we’ll email you as soon as we launch!", true);
      form.reset();
    } catch (_) {
      setNote("Saved locally — check your connection and try again.", false);
    } finally {
      if (btn) btn.disabled = false;
    }
  });
})();
