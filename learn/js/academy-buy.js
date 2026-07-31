(function () {
  function cartHref() {
    var path = location.pathname || "";
    if (path.indexOf("/learn/") !== -1) return "/cart.html";
    return "cart.html";
  }

  function initAcademyBuy() {
    if (!window.PixtoCart) return;

    document.querySelectorAll("[data-aca-buy]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var id = btn.getAttribute("data-product-id");
        if (!id) return;
        window.PixtoCart.add({
          id: id,
          name: btn.getAttribute("data-product-name") || id,
          price: btn.getAttribute("data-product-price") || "0",
          qty: 1,
          image: btn.getAttribute("data-product-image") || "",
          href: btn.getAttribute("data-product-href") || "",
        });
        var label = btn.textContent;
        btn.textContent = "Added";
        if ("disabled" in btn) btn.disabled = true;
        setTimeout(function () {
          location.href = cartHref();
        }, 350);
        setTimeout(function () {
          btn.textContent = label;
          if ("disabled" in btn) btn.disabled = false;
        }, 1200);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAcademyBuy);
  } else {
    initAcademyBuy();
  }
})();
