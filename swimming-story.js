(function () {
  var film = document.querySelector("[data-water-film]");
  var people = document.querySelector("[data-water-people]");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce && film) {
    var resting = film.querySelector(".water-result");
    if (resting) resting.removeAttribute("aria-hidden");
  }

  if (film && !reduce) {
    var pairs = Array.prototype.slice.call(film.querySelectorAll("[data-line]")).map(function (line) {
      return {
        before: line.getAttribute("data-before"),
        after: line.getAttribute("data-after"),
        tone: line.getAttribute("data-tone")
      };
    });
    var beforeEl = film.querySelector(".water-before");
    var afterEl = film.querySelector(".water-after");
    var index = 0;
    var timer = 0;
    var started = false;

    function show(i) {
      var pair = pairs[i];
      film.classList.remove("is-strike", "is-after");
      beforeEl.textContent = pair.before;
      afterEl.textContent = pair.after;
      film.style.setProperty("--tone", pair.tone);
      window.setTimeout(function () { film.classList.add("is-strike"); }, 700);
      window.setTimeout(function () { film.classList.add("is-after"); }, 1300);
    }

    function advance() {
      index += 1;
      if (index >= pairs.length) {
        film.classList.add("is-result");
        var result = film.querySelector(".water-result");
        if (result) result.removeAttribute("aria-hidden");
        return;
      }
      show(index);
      timer = window.setTimeout(advance, 2800);
    }

    function start() {
      if (started || !pairs.length) return;
      started = true;
      show(0);
      timer = window.setTimeout(advance, 2800);
    }

    if ("IntersectionObserver" in window) {
      var watch = new IntersectionObserver(function (entries) {
        if (entries.some(function (entry) { return entry.isIntersecting; })) {
          start();
          watch.disconnect();
        }
      }, { threshold: 0.45 });
      watch.observe(film);
    } else {
      start();
    }

    }

  if (!people) return;
  var buttons = Array.prototype.slice.call(people.querySelectorAll("[data-person]"));
  var panels = Array.prototype.slice.call(people.querySelectorAll("[data-panel]"));
  var invite = people.querySelector("[data-invite]");
  var packs = Array.prototype.slice.call(document.querySelectorAll("[data-pack]"));

  function choose(person) {
    var button = buttons.filter(function (item) { return item.getAttribute("data-person") === person; })[0];
    if (!button) return;
    var pack = button.getAttribute("data-pack");
    var who = button.getAttribute("data-who");
    buttons.forEach(function (item) {
      item.setAttribute("aria-pressed", item === button ? "true" : "false");
    });
    panels.forEach(function (panel) {
      panel.hidden = panel.getAttribute("data-panel") !== person;
    });
    if (invite) invite.hidden = true;
    var dossier = people.querySelector(".water-dossier");
    if (dossier) dossier.style.setProperty("--c", button.style.getPropertyValue("--c"));
    packs.forEach(function (article) {
      var on = article.getAttribute("data-pack") === pack;
      article.classList.toggle("is-picked", on);
      article.style.setProperty("--pick", button.style.getPropertyValue("--c"));
      var note = article.querySelector(".pack-for");
      if (!note) return;
      note.hidden = !on;
      note.textContent = on ? "For " + who : "";
    });
    var card = document.getElementById("pack-" + pack);
    if (!card) return;
    var box = card.getBoundingClientRect();
    if (box.top > window.innerHeight - 120 || box.bottom < 80) {
      card.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      choose(button.getAttribute("data-person"));
    });
  });

  people.querySelectorAll("[data-go]").forEach(function (link) {
    link.addEventListener("click", function () {
      var card = document.querySelector(link.getAttribute("href"));
      if (!card) return;
      card.classList.add("is-picked");
    });
  });
})();
