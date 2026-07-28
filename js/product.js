(function () {
  const stage = document.querySelector("[data-product-stage]");
  if (!stage) return;

  const img = stage.querySelector("[data-product-image]");
  const video = stage.querySelector("[data-product-video]");
  const thumbs = Array.from(document.querySelectorAll("[data-product-thumb]"));

  function showImage(src) {
    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
      video.hidden = true;
    }
    if (img) {
      img.hidden = false;
      img.src = src;
    }
  }

  function showVideo(src, poster) {
    if (img) img.hidden = true;
    if (!video) return;
    video.hidden = false;
    if (poster) video.setAttribute("poster", poster);
    video.src = src;
    video.play().catch(() => {});
  }

  thumbs.forEach((btn) => {
    btn.addEventListener("click", () => {
      thumbs.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const kind = btn.getAttribute("data-product-thumb");
      if (kind === "video") {
        showVideo(btn.getAttribute("data-video"), btn.getAttribute("data-poster"));
      } else {
        showImage(btn.getAttribute("data-src"));
      }
    });
  });

  function toast(message) {
    let el = document.querySelector(".product-toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "product-toast";
      el.setAttribute("role", "status");
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("is-on");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("is-on"), 3200);
  }

  function rememberInterest(payload) {
    try {
      const key = "pixtolearn_cart_intent";
      const prev = JSON.parse(localStorage.getItem(key) || "[]");
      prev.push({ ...payload, at: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(prev.slice(-20)));
    } catch (_) {}
  }

  const form = document.querySelector("[data-product-purchase]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const qty = Number(form.qty?.value || 1);
      const id = form.getAttribute("data-product-id");
      const name = form.getAttribute("data-product-name");
      const price = form.getAttribute("data-product-price");
      rememberInterest({ action: "add_to_cart", id, name, price, qty });
      toast("Added to cart preview. Checkout connects next.");
    });
  }

  document.querySelectorAll("[data-pay]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const method = btn.getAttribute("data-pay");
      const id = form?.getAttribute("data-product-id");
      const name = form?.getAttribute("data-product-name");
      const price = form?.getAttribute("data-product-price");
      const qty = Number(form?.qty?.value || 1);
      rememberInterest({ action: method, id, name, price, qty });
      if (method === "paypal") {
        toast("PayPal checkout will connect here. Interest saved.");
      } else {
        toast("Pay Later will connect here. Interest saved.");
      }
    });
  });
})();
