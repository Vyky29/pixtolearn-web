/**
 * Keep in sync with ACADEMY_LOCKED in js/site.js.
 * Add ?preview=1 to a /learn URL to open courses while Academy is locked.
 */
(function () {
  var ACADEMY_LOCKED = true;
  try {
    if (new URLSearchParams(location.search).get("preview") === "1") return;
  } catch (_) {}
  if (!ACADEMY_LOCKED) return;
  location.replace("/academy.html");
})();
