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
      const messages = {
        "apple-pay": "Apple Pay will connect here. Interest saved.",
        "google-pay": "Google Pay will connect here. Interest saved.",
        paypal: "PayPal checkout will connect here. Interest saved.",
        "pay-later": "Pay Later will connect here. Interest saved.",
      };
      toast(messages[method] || "Checkout will connect here. Interest saved.");
    });
  });

  const productId = form?.getAttribute("data-product-id");
  if (productId) initReviewsAndRelated(productId);

  function stars(n) {
    const filled = Math.max(0, Math.min(5, Math.round(Number(n) || 0)));
    return `<span class="review-stars" aria-label="${filled} out of 5 stars">${"<span></span>".repeat(
      filled
    )}${"<i></i>".repeat(5 - filled)}</span>`;
  }

  function avg(list) {
    if (!list.length) return 0;
    return list.reduce((s, r) => s + (Number(r.rating) || 0), 0) / list.length;
  }

  async function initReviewsAndRelated(id) {
    const hostReviews = document.querySelector("[data-product-reviews]");
    const hostRelated = document.querySelector("[data-product-related]");
    if (!hostReviews && !hostRelated) return;

    let data;
    try {
      const res = await fetch("js/reviews-data.json", { cache: "no-cache" });
      data = await res.json();
    } catch (_) {
      return;
    }

    const catalog = data.catalog || {};
    const allReviews = Array.isArray(data.reviews) ? data.reviews : [];
    let reviews = allReviews.filter((r) => r.productId === id);
    if (!reviews.length) {
      reviews = allReviews.filter((r) => r.productId === "full-pack").slice(0, 2);
    }
    reviews = reviews.slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));

    if (hostReviews) {
      const score = avg(reviews);
      const scoreLabel = score.toFixed(1);
      hostReviews.innerHTML = `
        <div class="reviews-head">
          <div class="reviews-score">
            <strong>${scoreLabel}</strong>
            ${stars(score)}
            <span>Based on ${reviews.length} review${reviews.length === 1 ? "" : "s"}</span>
          </div>
          <a class="btn btn-primary reviews-add" href="contact.html?interest=review-${encodeURIComponent(
            id
          )}">Add a review</a>
        </div>
        <div class="reviews-toolbar">
          <span>1-${reviews.length} of ${reviews.length} reviews</span>
          <span class="reviews-sort">Most Recent</span>
        </div>
        <ul class="reviews-list">
          ${reviews
            .map(
              (r) => `
            <li class="review-card">
              <div class="review-top">
                <div class="review-person">
                  <span class="review-avatar" aria-hidden="true">${r.initial || (r.name || "?").slice(0, 1)}
                    ${r.verified ? '<span class="review-verified" title="Verified buyer"></span>' : ""}
                  </span>
                  <span>
                    <strong>${r.name || "Customer"}</strong>
                    <em>${r.role || "Reviewer"}</em>
                  </span>
                </div>
                <time datetime="${r.date || ""}">${r.dateLabel || ""}</time>
              </div>
              <div class="review-mid">
                ${stars(r.rating)}
                <span class="review-product">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 7.5h16v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-11zm2.2-3h11.6l1.2 3H5l1.2-3z"/></svg>
                  ${r.productLabel || ""}
                </span>
              </div>
              <p>${r.body || ""}</p>
              ${
                r.photo
                  ? `<a class="review-photo" href="${r.photo}" target="_blank" rel="noopener"><img src="${r.photo}" alt="Review photo" /></a>`
                  : ""
              }
            </li>`
            )
            .join("")}
        </ul>
      `;
    }

    if (hostRelated) {
      const current = catalog[id];
      const relatedIds = (current && current.related) || Object.keys(catalog).filter((k) => k !== id).slice(0, 3);
      const items = relatedIds.map((rid) => catalog[rid]).filter(Boolean);
      if (!items.length) {
        hostRelated.hidden = true;
        return;
      }
      hostRelated.innerHTML = `
        <div class="related-head">
          <p class="eyebrow">Keep exploring</p>
          <h2>You may also like</h2>
        </div>
        <div class="related-grid">
          ${items
            .map(
              (p) => `
            <a class="related-card" href="${p.href}">
              <img src="${p.image}" alt="" loading="lazy" />
              <div>
                <strong>${p.title}</strong>
                <span>&pound;${p.price}</span>
                <em>View &amp; buy</em>
              </div>
            </a>`
            )
            .join("")}
        </div>
      `;
    }
  }
})();
