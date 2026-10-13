(function () {
  var LANGS = ["en", "es", "fr", "it", "pt", "de"];
  var FLAGS = { en: "🇬🇧", es: "🇪🇸", fr: "🇫🇷", it: "🇮🇹", pt: "🇵🇹", de: "🇩🇪" };
  var HTML_LANG = { en: "en", es: "es", fr: "fr", it: "it", pt: "pt-PT", de: "de" };
  var dict = window.PIXTO_DICT || {};
  var originals = new WeakMap();
  var attrOriginal = new WeakMap();

  function lookup(lang, text) {
    if (!text) return text;
    var trimmed = text.replace(/\s+/g, " ").trim();
    if (!trimmed) return text;
    var table = lang === "en" ? null : dict[lang];
    var next = table && table[trimmed] ? table[trimmed] : trimmed;
    if (lang === "en") next = trimmed;
    var lead = text.match(/^\s*/)[0];
    var tail = text.match(/\s*$/)[0];
    return lead + next + (tail && next === trimmed ? tail : tail);
  }

  function walk(node, lang) {
    if (!node) return;
    if (node.nodeType === 3) {
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      var orig = originals.get(node);
      if (orig && orig.trim()) node.nodeValue = lookup(lang, orig);
      return;
    }
    if (node.nodeType !== 1) return;
    var tag = node.tagName;
    if (tag === "SCRIPT" || tag === "STYLE") return;
    if (node.closest && node.closest("[data-lang-switch]")) return;
    ["alt", "aria-label", "placeholder", "title"].forEach(function (attr) {
      if (!node.hasAttribute(attr)) return;
      var bag = attrOriginal.get(node);
      if (!bag) { bag = {}; attrOriginal.set(node, bag); }
      if (!(attr in bag)) bag[attr] = node.getAttribute(attr);
      node.setAttribute(attr, lookup(lang, bag[attr]));
    });
    Array.prototype.forEach.call(node.childNodes, function (child) { walk(child, lang); });
  }

  function apply(lang) {
    if (LANGS.indexOf(lang) < 0) lang = "en";
    document.documentElement.lang = HTML_LANG[lang];
    if (document.body) walk(document.body, lang);
    var flag = document.querySelector("[data-lang-flag]");
    if (flag) flag.textContent = FLAGS[lang];
    document.querySelectorAll("[data-set-lang]").forEach(function (button) {
      var on = button.getAttribute("data-set-lang") === lang;
      if (on) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });
    try { localStorage.setItem("pixto-lang", lang); } catch (e) {}
  }

  function closeMenu() {
    var menu = document.querySelector(".lang-menu");
    var toggle = document.querySelector(".lang-toggle");
    if (menu) menu.hidden = true;
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  document.addEventListener("click", function (event) {
    var choice = event.target.closest && event.target.closest("[data-set-lang]");
    if (choice) {
      apply(choice.getAttribute("data-set-lang"));
      closeMenu();
      return;
    }
    var toggle = event.target.closest && event.target.closest(".lang-toggle");
    if (toggle) {
      var menu = document.querySelector(".lang-menu");
      if (!menu) return;
      var willOpen = menu.hidden;
      menu.hidden = !willOpen;
      toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
      return;
    }
    if (!(event.target.closest && event.target.closest("[data-lang-switch]"))) closeMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  var saved = "en";
  try { saved = localStorage.getItem("pixto-lang") || "en"; } catch (e) {}
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { apply(saved); });
  else apply(saved);
  window.pixtoSetLang = apply;
})();
