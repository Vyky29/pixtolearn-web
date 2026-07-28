(function (global) {
  const CART_KEY = "pixtolearn_cart";

  function readCart() {
    try {
      const raw = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
      return Array.isArray(raw) ? raw : [];
    } catch (_) {
      return [];
    }
  }

  function writeCart(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    global.dispatchEvent(new CustomEvent("pixto:cart", { detail: { items } }));
  }

  function money(n) {
    return "£" + Number(n || 0).toFixed(2);
  }

  function cartCount(items) {
    return (items || readCart()).reduce((s, it) => s + (Number(it.qty) || 0), 0);
  }

  function cartSubtotal(items) {
    return (items || readCart()).reduce(
      (s, it) => s + (Number(it.price) || 0) * (Number(it.qty) || 0),
      0
    );
  }

  const api = {
    key: CART_KEY,
    read: readCart,
    write: writeCart,
    count: () => cartCount(),
    subtotal: () => cartSubtotal(),
    money,
    add(item) {
      const items = readCart();
      const id = String(item.id || "");
      if (!id) return items;
      const qty = Math.max(1, Math.min(99, Number(item.qty) || 1));
      const existing = items.find((it) => it.id === id);
      if (existing) {
        existing.qty = Math.min(99, (Number(existing.qty) || 0) + qty);
        if (item.image) existing.image = item.image;
        if (item.name) existing.name = item.name;
        if (item.price != null) existing.price = String(item.price);
        if (item.href) existing.href = item.href;
      } else {
        items.push({
          id,
          name: item.name || id,
          price: String(item.price ?? "0"),
          qty,
          image: item.image || "",
          href: item.href || "",
        });
      }
      writeCart(items);
      return items;
    },
    setQty(id, qty) {
      const items = readCart();
      const row = items.find((it) => it.id === id);
      if (!row) return items;
      const next = Math.max(0, Math.min(99, Number(qty) || 0));
      if (next <= 0) return api.remove(id);
      row.qty = next;
      writeCart(items);
      return items;
    },
    remove(id) {
      const items = readCart().filter((it) => it.id !== id);
      writeCart(items);
      return items;
    },
    clear() {
      writeCart([]);
    },
  };

  global.PixtoCart = api;

  function initCartNav() {
    const targets = new Set();
    document.querySelectorAll(".nav-icons a.nav-icon").forEach((a, i) => {
      const label = (a.getAttribute("aria-label") || "").toLowerCase();
      if (label.includes("basket") || label.includes("cart")) targets.add(a);
      else if (i === 0) targets.add(a);
    });

    targets.forEach((a) => {
      a.href = "cart.html";
      a.setAttribute("aria-label", "Cart");
      if (!a.querySelector("[data-cart-badge]")) {
        const badge = document.createElement("span");
        badge.className = "cart-badge";
        badge.hidden = true;
        badge.setAttribute("data-cart-badge", "");
        a.appendChild(badge);
      }
    });

    const sync = () => {
      const n = cartCount();
      document.querySelectorAll("[data-cart-badge]").forEach((badge) => {
        if (n > 0) {
          badge.hidden = false;
          badge.textContent = n > 99 ? "99+" : String(n);
        } else {
          badge.hidden = true;
          badge.textContent = "";
        }
      });
    };
    sync();
    global.addEventListener("pixto:cart", sync);
    global.addEventListener("storage", (e) => {
      if (e.key === CART_KEY) sync();
    });
  }

  function initCartPage() {
    const root = document.querySelector("[data-cart-page]");
    if (!root) return;
    const list = root.querySelector("[data-cart-list]");
    const summary = root.querySelector("[data-cart-summary]");
    if (!list || !summary) return;

    const render = () => {
      const items = readCart();
      if (!items.length) {
        list.innerHTML = `
          <div class="cart-empty">
            <h2>Your cart is empty</h2>
            <p>Browse swimming packs and accessories, then add what you need.</p>
            <a class="btn btn-primary" href="shop.html">Continue shopping</a>
          </div>`;
        summary.innerHTML = "";
        summary.hidden = true;
        return;
      }
      summary.hidden = false;
      list.innerHTML = `
        <ul class="cart-lines">
          ${items
            .map(
              (it) => `
            <li class="cart-line" data-id="${it.id}">
              <a class="cart-line-media" href="${it.href || "shop.html"}">
                ${it.image ? `<img src="${it.image}" alt="" />` : `<span class="cart-line-ph" aria-hidden="true"></span>`}
              </a>
              <div class="cart-line-copy">
                <a href="${it.href || "shop.html"}"><strong>${it.name}</strong></a>
                <span class="cart-line-price">${money(it.price)} each</span>
                <div class="cart-line-actions">
                  <label class="cart-qty">
                    <span class="visually-hidden">Quantity for ${it.name}</span>
                    <button type="button" data-cart-dec aria-label="Decrease quantity">-</button>
                    <input type="number" min="1" max="99" value="${it.qty}" data-cart-qty />
                    <button type="button" data-cart-inc aria-label="Increase quantity">+</button>
                  </label>
                  <button type="button" class="cart-remove" data-cart-remove>Remove</button>
                </div>
              </div>
              <div class="cart-line-total">${money((Number(it.price) || 0) * (Number(it.qty) || 0))}</div>
            </li>`
            )
            .join("")}
        </ul>
        <p class="note"><a href="shop.html">&larr; Continue shopping</a></p>`;

      const sub = cartSubtotal(items);
      summary.innerHTML = `
        <h2>Order summary</h2>
        <div class="cart-sum-row"><span>Items</span><strong>${cartCount(items)}</strong></div>
        <div class="cart-sum-row"><span>Subtotal</span><strong>${money(sub)}</strong></div>
        <p class="note">Shipping and taxes calculated at checkout.</p>
        <button type="button" class="btn btn-primary cart-checkout" data-cart-checkout>Checkout</button>
        <div class="product-pay cart-pay" aria-label="Express checkout">
          <p class="product-pay-label">Express checkout</p>
          <div class="product-pay-express">
            <button type="button" class="pay-btn pay-apple" data-cart-express="apple-pay" aria-label="Pay with Apple Pay">
              <span class="pay-apple-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <strong>Pay</strong>
              </span>
            </button>
            <button type="button" class="pay-btn pay-google" data-cart-express="google-pay" aria-label="Pay with Google Pay">
              <span class="pay-google-mark" aria-hidden="true">Google Pay</span>
            </button>
          </div>
          <button type="button" class="pay-btn pay-paypal" data-cart-express="paypal" aria-label="Pay with PayPal">
            <span class="pay-paypal-mark">Pay<span>Pal</span></span>
          </button>
        </div>
        <p class="note">Secure payment connects next. Your cart is saved in this browser for now.</p>`;
    };

    list.addEventListener("click", (e) => {
      const line = e.target.closest(".cart-line");
      if (!line) return;
      const id = line.getAttribute("data-id");
      if (e.target.closest("[data-cart-remove]")) {
        api.remove(id);
        return;
      }
      if (e.target.closest("[data-cart-inc]")) {
        const input = line.querySelector("[data-cart-qty]");
        api.setQty(id, Number(input.value || 1) + 1);
        return;
      }
      if (e.target.closest("[data-cart-dec]")) {
        const input = line.querySelector("[data-cart-qty]");
        api.setQty(id, Number(input.value || 1) - 1);
      }
    });

    list.addEventListener("change", (e) => {
      const input = e.target.closest("[data-cart-qty]");
      if (!input) return;
      const line = input.closest(".cart-line");
      if (!line) return;
      api.setQty(line.getAttribute("data-id"), input.value);
    });

    summary.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-cart-checkout], [data-cart-express]");
      if (!btn) return;
      const method = btn.getAttribute("data-cart-express") || "checkout";
      try {
        const prev = JSON.parse(localStorage.getItem("pixtolearn_cart_intent") || "[]");
        prev.push({ action: method, items: readCart(), at: new Date().toISOString() });
        localStorage.setItem("pixtolearn_cart_intent", JSON.stringify(prev.slice(-20)));
      } catch (_) {}
      summary.querySelector(".cart-flash")?.remove();
      const note = document.createElement("p");
      note.className = "cart-flash";
      note.textContent =
        method === "checkout"
          ? "Checkout will connect here. Your cart is saved."
          : "Payment will connect here. Your cart is saved.";
      summary.appendChild(note);
    });

    render();
    global.addEventListener("pixto:cart", render);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initCartNav();
      initCartPage();
    });
  } else {
    initCartNav();
    initCartPage();
  }
})(window);
