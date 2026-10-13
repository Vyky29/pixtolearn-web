(function () {
  var root = document.querySelector("[data-offer-reel]");
  if (!root) return;
  var slides = Array.prototype.slice.call(root.querySelectorAll("a"));
  var dots = Array.prototype.slice.call(root.querySelectorAll("[data-offer-dot]"));
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
    }, 3000);
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      show(i);
      start();
    });
  });

  var card = root.closest("article");
  if (card) {
    card.addEventListener("mouseenter", stop);
    card.addEventListener("mouseleave", start);
  }
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop();
    else start();
  });

  show(0);
  start();
})();
