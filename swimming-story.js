(function () {
  var match = document.querySelector("[data-prog-match]");
  if (match) {
    var tabs = Array.prototype.slice.call(match.querySelectorAll("[data-prog]"));
    var panels = Array.prototype.slice.call(match.querySelectorAll("[data-prog-panel]"));
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var id = tab.getAttribute("data-prog");
        tabs.forEach(function (item) {
          item.setAttribute("aria-pressed", item === tab ? "true" : "false");
        });
        panels.forEach(function (panel) {
          panel.hidden = panel.getAttribute("data-prog-panel") !== id;
        });
      });
    });
  }

  var caseRoot = document.querySelector("[data-case]");
  if (caseRoot) {
    var chapterNames = ["folders", "cards", "toys", "stands"];
    var chapterIndex = 0;
    var innerIndex = 0;
    var caseTimer = 0;
    var reduceCase = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var chapterTabs = Array.prototype.slice.call(caseRoot.querySelectorAll("[data-chapter]"));
    var chapterPanels = Array.prototype.slice.call(caseRoot.querySelectorAll("[data-chapter-panel]"));
    var folderSlides = Array.prototype.slice.call(caseRoot.querySelectorAll("[data-folder]"));
    var kindSlides = Array.prototype.slice.call(caseRoot.querySelectorAll("[data-kind-slide]"));
    var kindDots = Array.prototype.slice.call(caseRoot.querySelectorAll("[data-kind]"));
    var folderDots = Array.prototype.slice.call(caseRoot.querySelectorAll("[data-folder-chip]"));
    var turn = caseRoot.querySelector("[data-turn]");
    var turnCopy = caseRoot.querySelector("[data-turn-copy]");
    var turnHint = caseRoot.querySelector("[data-turn-hint]");

    function resetTurn() {
      if (!turn) return;
      turn.setAttribute("aria-pressed", "false");
      if (turnCopy) turnCopy.textContent = turnCopy.getAttribute("data-front");
      if (turnHint) turnHint.textContent = turnHint.getAttribute("data-front");
    }

    function slidesFor(name) {
      if (name === "folders") return folderSlides;
      if (name === "cards") return kindSlides;
      return [];
    }

    function showCase(name, inner) {
      chapterIndex = chapterNames.indexOf(name);
      if (chapterIndex < 0) chapterIndex = 0;
      name = chapterNames[chapterIndex];
      var slides = slidesFor(name);
      innerIndex = slides.length ? ((inner % slides.length) + slides.length) % slides.length : 0;
      if (name !== "cards") resetTurn();
      chapterPanels.forEach(function (panel) {
        var on = panel.getAttribute("data-chapter-panel") === name;
        panel.hidden = !on;
        panel.classList.toggle("is-on", on);
      });
      chapterTabs.forEach(function (tab) {
        if (tab.getAttribute("data-chapter") === name) tab.setAttribute("aria-current", "true");
        else tab.removeAttribute("aria-current");
      });
      folderSlides.forEach(function (slide, i) {
        var on = name === "folders" && i === innerIndex;
        slide.classList.toggle("is-on", on);
        slide.hidden = !on;
      });
      kindSlides.forEach(function (slide, i) {
        var on = name === "cards" && i === innerIndex;
        slide.classList.toggle("is-on", on);
        slide.hidden = !on;
      });
      kindDots.forEach(function (dot, i) {
        if (name === "cards" && i === innerIndex) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
      folderDots.forEach(function (dot, i) {
        if (name === "folders" && i === innerIndex) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
      caseRoot.querySelectorAll("[data-sub]").forEach(function (sub) {
        sub.hidden = sub.getAttribute("data-sub") !== name;
      });
    }

    var caseHeld = false;

    function holdHere() {
      window.clearInterval(caseTimer);
      caseTimer = 0;
    }

    function pinCase() {
      caseHeld = true;
      holdHere();
    }

    function startCase() {
      window.clearInterval(caseTimer);
      if (reduceCase || caseHeld) return;
      if (turn && chapterNames[chapterIndex] === "cards" && turn.getAttribute("aria-pressed") === "true") return;
      caseTimer = window.setInterval(function () {
        var name = chapterNames[chapterIndex];
        var slides = slidesFor(name);
        if (slides.length && innerIndex < slides.length - 1) showCase(name, innerIndex + 1);
        else showCase(chapterNames[(chapterIndex + 1) % chapterNames.length], 0);
      }, 3000);
    }

    chapterTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        showCase(tab.getAttribute("data-chapter"), 0);
        pinCase();
      });
    });
    kindDots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        showCase("cards", i);
        pinCase();
      });
    });
    folderDots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        showCase("folders", i);
        pinCase();
      });
    });
    Array.prototype.forEach.call(caseRoot.querySelectorAll(".case-sub"), function (menu) {
      menu.addEventListener("mouseenter", holdHere);
      menu.addEventListener("mouseleave", startCase);
    });
    if (turn) {
      turn.addEventListener("click", function () {
        var open = turn.getAttribute("aria-pressed") === "true";
        turn.setAttribute("aria-pressed", open ? "false" : "true");
        var side = open ? "data-front" : "data-back";
        if (turnCopy) turnCopy.textContent = turnCopy.getAttribute(side);
        if (turnHint) turnHint.textContent = turnHint.getAttribute(side);
        if (open) startCase();
        else window.clearInterval(caseTimer);
      });
    }
    caseRoot.addEventListener("mouseleave", function () {
      caseHeld = false;
      if (!caseTimer) startCase();
    });
    showCase("folders", 0);
    startCase();
  }

  var opener = document.querySelector("[data-open-match]");
  var dialog = document.querySelector("#club-match");
  if (opener && dialog && dialog.showModal) {
    opener.addEventListener("click", function () { dialog.showModal(); });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
  }

  var session = document.querySelector("[data-session]");
  if (!session) return;
  var lines = Array.prototype.slice.call(session.querySelectorAll(".session-reel p"));
  var dots = Array.prototype.slice.call(session.querySelectorAll("[data-session-dot]"));
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window);
  var shots = Array.prototype.slice.call(session.querySelectorAll(".float-set"));
  var index = 0;
  var timer = 0;
  var strike = 0;
  var finale = 0;

  function showLine(next) {
    index = (next + lines.length) % lines.length;
    window.clearTimeout(strike);
    window.clearTimeout(finale);
    session.classList.remove("is-done");
    lines.forEach(function (line, i) {
      var on = i === index;
      line.classList.toggle("is-on", on);
      line.classList.remove("is-struck");
    });
    shots.forEach(function (shot, i) {
      shot.classList.toggle("is-on", i === index);
    });
    dots.forEach(function (dot, i) {
      if (i === index) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
    if (reduce) {
      lines[index].classList.add("is-struck");
      return;
    }
    strike = window.setTimeout(function () {
      if (lines[index].classList.contains("is-on")) lines[index].classList.add("is-struck");
    }, 900);
    if (index === lines.length - 1) {
      window.clearInterval(timer);
      finale = window.setTimeout(function () { session.classList.add("is-done"); }, 3400);
    }
  }

  function play() {
    window.clearInterval(timer);
    if (reduce || lines.length < 2 || session.classList.contains("is-done")) return;
    timer = window.setInterval(function () {
      if (index >= lines.length - 1) {
        window.clearInterval(timer);
        return;
      }
      showLine(index + 1);
    }, 5200);
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      showLine(i);
      play();
    });
  });
  session.addEventListener("mouseenter", function () { window.clearInterval(timer); });
  session.addEventListener("mouseleave", play);

  if (reduce || !lines.length) {
    session.classList.add("is-rest");
    if (lines.length) showLine(0);
    return;
  }

  var watch = new IntersectionObserver(function (entries) {
    if (entries.some(function (entry) { return entry.isIntersecting; })) {
      showLine(0);
      play();
      watch.disconnect();
    }
  }, { threshold: 0.2 });
  watch.observe(session);
})();

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
  var kicker = people.querySelector(".who-kicker");
  var packs = Array.prototype.slice.call(document.querySelectorAll("article[data-pack]"));
  var orbit = people.querySelector(".who-orbit");
  var ride = { spin: 0, target: null };
  var labels = { schools: "Schools", coaches: "Coaches", families: "Families" };

  function rideTo(button) {
    if (!orbit || !button) return;
    var i = buttons.indexOf(button);
    var want = Math.PI / 2 - i * (Math.PI * 2 / buttons.length);
    var delta = Math.atan2(Math.sin(want - ride.spin), Math.cos(want - ride.spin));
    ride.target = ride.spin + delta;
  }

  function clearPacks() {
    people.querySelectorAll("[data-pack-chip]").forEach(function (chip) {
      chip.classList.remove("is-on");
    });
    packs.forEach(function (article) {
      article.classList.remove("is-picked");
      var note = article.querySelector(".pack-for");
      if (!note) return;
      note.hidden = true;
      note.textContent = "";
    });
  }

  function closePeople() {
    people.classList.remove("is-open");
    buttons.forEach(function (item) { item.setAttribute("aria-pressed", "false"); });
    panels.forEach(function (panel) { panel.hidden = true; });
    if (invite) invite.hidden = false;
    if (kicker) kicker.textContent = "";
    ride.target = null;
    clearPacks();
  }

  function wantedPacks(button) {
    var list = button.getAttribute("data-packs") || button.getAttribute("data-pack") || "";
    return list.split(",").filter(Boolean);
  }

  function choose(person) {
    var button = buttons.filter(function (item) { return item.getAttribute("data-person") === person; })[0];
    if (!button) return;
    if (button.getAttribute("aria-pressed") === "true") {
      closePeople();
      return;
    }
    var wanted = wantedPacks(button);
    var who = button.getAttribute("data-who");
    people.classList.add("is-open");
    buttons.forEach(function (item) {
      item.setAttribute("aria-pressed", item === button ? "true" : "false");
    });
    panels.forEach(function (panel) {
      panel.hidden = panel.getAttribute("data-panel") !== person;
    });
    if (invite) invite.hidden = true;
    if (kicker) kicker.textContent = "Recommended · " + (labels[person] || who);
    rideTo(button);
    people.querySelectorAll("[data-pack-chip]").forEach(function (chip) {
      chip.classList.toggle("is-on", wanted.indexOf(chip.getAttribute("data-pack-chip")) !== -1);
    });
    packs.forEach(function (article) {
      var on = wanted.indexOf(article.getAttribute("data-pack")) !== -1;
      article.classList.toggle("is-picked", on);
      article.style.setProperty("--pick", "#3f7584");
      var note = article.querySelector(".pack-for");
      if (!note) return;
      note.hidden = !on;
      note.textContent = on ? "For " + who : "";
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      choose(button.getAttribute("data-person"));
    });
  });

  var zoom = document.querySelector("#pack-zoom");
  var zoomImg = document.querySelector("#pack-zoom-img");
  var zoomName = document.querySelector("#pack-zoom-name");
  people.querySelectorAll("[data-pack-chip]").forEach(function (chip) {
    chip.addEventListener("click", function (event) {
      event.stopPropagation();
      if (!zoom || !zoom.showModal) return;
      var img = chip.querySelector("img");
      var name = chip.querySelector("span");
      if (zoomImg && img) {
        zoomImg.src = img.getAttribute("src");
        zoomImg.alt = img.alt;
      }
      if (zoomName && name) zoomName.textContent = name.textContent;
      zoom.showModal();
    });
  });
  if (zoom) {
    zoom.addEventListener("click", function (event) {
      if (event.target === zoom) zoom.close();
    });
  }

  if (orbit) {
    orbit.addEventListener("click", function (event) {
      if (event.target.closest(".who-node") || event.target.closest("[data-pack-chip]")) return;
      if (people.classList.contains("is-open")) closePeople();
    });
    var last = 0;
    function place(now) {
      var dt = Math.min(0.05, (now - last) / 1000 || 0.016);
      last = now;
      var speed = parseFloat(getComputedStyle(orbit).getPropertyValue("--speed")) || 0.12;
      if (ride.target == null) ride.spin += speed * dt;
      else {
        var left = ride.target - ride.spin;
        ride.spin += left * Math.min(1, dt * 4.2);
        if (Math.abs(left) < 0.004) ride.spin = ride.target;
      }
      var w = orbit.clientWidth || 540;
      var style = getComputedStyle(orbit);
      var rx = (parseFloat(style.getPropertyValue("--rx")) || 0.42) * w;
      var ry = (parseFloat(style.getPropertyValue("--ry")) || 0.34) * w;
      var near = parseFloat(style.getPropertyValue("--near")) || 1.05;
      var far = parseFloat(style.getPropertyValue("--far")) || 0.92;
      buttons.forEach(function (node, i) {
        var ang = ride.spin + i * (Math.PI * 2 / buttons.length);
        var depth = (Math.sin(ang) + 1) / 2;
        var sc = far + (near - far) * depth;
        var x = Math.cos(ang) * rx;
        var y = Math.sin(ang) * ry;
        var chosen = node.getAttribute("aria-pressed") === "true";
        node.style.zIndex = y > 0 ? "6" : "2";
        node.style.transform = "translate(-50%,-50%) translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px) scale(" + sc.toFixed(3) + ")";
        node.style.filter = "none";
        var name = node.querySelector(".who-name");
        if (name) name.style.opacity = depth > 0.62 || chosen ? "1" : "0";
      });
      if (!reduce) requestAnimationFrame(place);
    }
    if (reduce) place(0);
    else requestAnimationFrame(place);
  }

  people.querySelectorAll("[data-go]").forEach(function (link) {
    link.addEventListener("click", function () {
      var card = document.querySelector(link.getAttribute("href"));
      if (!card) return;
      card.classList.add("is-picked");
    });
  });
})();


(function(){
  var sets = {"water": [["assets/pack-fan/water-0-a.webp?v=clean1", "wash your face", "assets/pack-fan/water-0-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/water-1-a.webp?v=clean1", "face in the water", "assets/pack-fan/water-1-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/water-2-a.webp?v=clean1", "blow bubbles with pop tube", "assets/pack-fan/water-2-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/water-3-a.webp?v=clean1", "hold breath", "assets/pack-fan/water-3-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/water-4-a.webp?v=clean1", "pouring water", "assets/pack-fan/water-4-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/water-5-a.webp?v=clean1", "blow toy away", "assets/pack-fan/water-5-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/water-6-a.webp?v=clean1", "sitting safety entry", "assets/pack-fan/water-6-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/water-7-a.webp?v=clean1", "move forward with a noodle", "assets/pack-fan/water-7-b.webp?v=clean1", "Break it down"]], "float": [["assets/pack-fan/float-0-a.webp?v=clean1", "float on back", "assets/pack-fan/float-0-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/float-1-a.webp?v=clean1", "float on front", "assets/pack-fan/float-1-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/float-2-a.webp?v=clean1", "rocket float on back", "assets/pack-fan/float-2-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/float-3-a.webp?v=clean1", "rocket float on front", "assets/pack-fan/float-3-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/float-4-a.webp?v=clean1", "roll back to front", "assets/pack-fan/float-4-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/float-5-a.webp?v=clean1", "shout & sign for help", "assets/pack-fan/float-5-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/float-6-a.webp?v=clean1", "tuck float", "assets/pack-fan/float-6-b.webp?v=clean1", "Break it down"]], "stroke": [["assets/pack-fan/stroke-0-a.webp?v=clean1", "front crawl kick", "assets/pack-fan/stroke-0-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/stroke-1-a.webp?v=clean1", "backstroke kick", "assets/pack-fan/stroke-1-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/stroke-2-a.webp?v=clean1", "breaststroke kick on front", "assets/pack-fan/stroke-2-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/stroke-3-a.webp?v=clean1", "dolphin kick", "assets/pack-fan/stroke-3-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/stroke-4-a.webp?v=clean1", "sitting dive", "assets/pack-fan/stroke-4-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/stroke-5-a.webp?v=clean1", "front crawl arms", "assets/pack-fan/stroke-5-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/stroke-6-a.webp?v=clean1", "breaststroke arms", "assets/pack-fan/stroke-6-b.webp?v=clean1", "Break it down"]], "games": [["assets/pack-fan/games-0-a.webp?v=clean1", "swimming costume on", "assets/pack-fan/games-0-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/games-1-a.webp?v=clean1", "swim cap on", "assets/pack-fan/games-1-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/games-2-a.webp?v=clean1", "goggles on", "assets/pack-fan/games-2-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/games-3-a.webp?v=clean1", "clothes on", "assets/pack-fan/games-3-b.webp?v=clean1", "Break it down"], ["assets/pack-fan/games-4-a.webp?v=clean1", "Ball", "assets/pack-fan/games-4-b.webp?v=clean1", "Hoop"], ["assets/pack-fan/games-5-a.webp?v=clean1", "Noodle", "assets/pack-fan/games-5-b.webp?v=clean1", "Float"], ["assets/pack-fan/games-6-a.webp?v=clean1", "Water pistol", "assets/pack-fan/games-6-b.webp?v=clean1", "Pop tube"]]};
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  Object.keys(sets).forEach(function(name){
    var fan = document.querySelector('[data-pack="'+name+'"]');
    if(!fan) return;
    var imgs = fan.querySelectorAll("img.card");
    var pairs = sets[name];
    var index = 0;
    window.setInterval(function(){
      imgs.forEach(function(img){ img.style.opacity = "0"; });
      window.setTimeout(function(){
        index = (index + 2) % pairs.length;
        var a = pairs[index % pairs.length];
        var b = pairs[(index + 1) % pairs.length];
        var next = [a[0], a[2], b[0], b[2]];
        var alts = [a[1], a[3], b[1], b[3]];
        imgs.forEach(function(img, n){
          img.src = next[n];
          img.alt = alts[n];
          img.style.opacity = "1";
        });
      }, 320);
    }, 3000);
  });
})();
