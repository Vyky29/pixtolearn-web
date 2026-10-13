(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-hero-reel]").forEach(function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll("img"));
    var scope = root.parentElement;
    var dots = scope ? Array.prototype.slice.call(scope.querySelectorAll("[data-hero-dot]")) : [];
    var index = 0;
    var timer = 0;

    function show(next) {
      index = (next + slides.length) % slides.length;
      slides.forEach(function (img, i) {
        var on = i === index;
        img.classList.toggle("is-on", on);
        img.setAttribute("aria-hidden", on ? "false" : "true");
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
      }, 3000);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        show(i);
        start();
      });
    });

    var pauseOn = root.closest(".photographic-hero, .world-close, .swim-stage");
    if (pauseOn) {
      pauseOn.addEventListener("mouseenter", stop);
      pauseOn.addEventListener("mouseleave", start);
      pauseOn.addEventListener("focusin", stop);
      pauseOn.addEventListener("focusout", start);
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else start();
    });

    show(0);
    start();
  });
})();
