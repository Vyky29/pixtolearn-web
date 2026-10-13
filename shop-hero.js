(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-shop-hero]").forEach(function (root) {
    var hero = root.closest(".shop-hero");
    var slides = Array.prototype.slice.call(root.children);
    var dots = hero ? Array.prototype.slice.call(hero.querySelectorAll("[data-shop-hero-dot]")) : [];
    var index = 0;
    var timer = 0;

    function show(next) {
      index = (next + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        var on = i === index;
        slide.classList.toggle("is-on", on);
        slide.setAttribute("aria-hidden", on ? "false" : "true");
      });
      dots.forEach(function (dot, i) {
        if (i === index) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
    }

    function stop() {
      window.clearInterval(timer);
      timer = 0;
    }

    function start() {
      if (reduce || slides.length < 2) return;
      stop();
      timer = window.setInterval(function () {
        show(index + 1);
      }, 6000);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        show(i);
        start();
      });
    });

    if (hero) {
      hero.addEventListener("mouseenter", stop);
      hero.addEventListener("mouseleave", start);
      hero.addEventListener("focusin", stop);
      hero.addEventListener("focusout", start);
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else start();
    });

    show(0);
    start();
  });
})();
