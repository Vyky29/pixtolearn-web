(function () {
  var root = document.querySelector("[data-hero-reel]");
  if (!root) return;
  var slides = Array.prototype.slice.call(root.querySelectorAll("img"));
  var dots = Array.prototype.slice.call(document.querySelectorAll("[data-hero-dot]"));
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
    }, 5200);
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      show(i);
      start();
    });
  });

  var hero = root.closest(".photographic-hero");
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
})();
