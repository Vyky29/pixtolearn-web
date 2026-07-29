/**
 * PixtoLearn Academy - reusable module block interactions (gold-standard shell)
 */
(function (global) {
  "use strict";

  function initMatch(root) {
    var pairs = {};
    root.querySelectorAll("[data-match-pair]").forEach(function (el) {
      pairs[el.getAttribute("data-match-pair")] = true;
    });
    var selectedLeft = null;
    var matched = {};
    var feedback = root.querySelector("[data-match-feedback]");
    var doneFlag = root.querySelector("[data-block-done]");

    function clearSelection() {
      root.querySelectorAll(".mod-match-item.is-selected").forEach(function (el) {
        el.classList.remove("is-selected");
      });
      selectedLeft = null;
    }

    root.querySelectorAll("[data-match-side='left'] .mod-match-item").forEach(function (item) {
      item.addEventListener("click", function () {
        if (item.classList.contains("is-matched")) return;
        clearSelection();
        selectedLeft = item;
        item.classList.add("is-selected");
      });
    });

    root.querySelectorAll("[data-match-side='right'] .mod-match-item").forEach(function (item) {
      item.addEventListener("click", function () {
        if (!selectedLeft || item.classList.contains("is-matched")) return;
        var leftId = selectedLeft.getAttribute("data-match-pair");
        var rightId = item.getAttribute("data-match-pair");
        if (leftId === rightId) {
          selectedLeft.classList.add("is-matched");
          item.classList.add("is-matched");
          selectedLeft.classList.remove("is-selected");
          matched[leftId] = true;
          selectedLeft = null;
          var total = Object.keys(pairs).length;
          var count = Object.keys(matched).length;
          if (feedback) {
            feedback.hidden = false;
            feedback.className = "learn-feedback is-ok";
            feedback.textContent =
              count === total
                ? "All matched. Strong links between challenge and visual support."
                : "Nice match. " + count + " of " + total + " complete.";
          }
          if (count === total && doneFlag) doneFlag.value = "1";
        } else {
          item.classList.add("is-wrong-flash");
          selectedLeft.classList.add("is-wrong-flash");
          if (feedback) {
            feedback.hidden = false;
            feedback.className = "learn-feedback is-bad";
            feedback.textContent = "Not that pair. Try another link.";
          }
          setTimeout(function () {
            item.classList.remove("is-wrong-flash");
            if (selectedLeft) selectedLeft.classList.remove("is-wrong-flash", "is-selected");
            selectedLeft = null;
          }, 450);
        }
      });
    });
  }

  function initScenario(root) {
    var feedback = root.querySelector("[data-scenario-feedback]");
    var doneFlag = root.querySelector("[data-block-done]");
    var checkBtn = root.querySelector("[data-scenario-check]");
    if (!checkBtn) return;
    checkBtn.addEventListener("click", function () {
      var chosen = root.querySelector("input[name='" + root.getAttribute("data-scenario-name") + "']:checked");
      root.querySelectorAll(".learn-option").forEach(function (el) {
        el.classList.remove("is-correct", "is-wrong");
      });
      if (!chosen) {
        if (feedback) {
          feedback.hidden = false;
          feedback.className = "learn-feedback is-bad";
          feedback.textContent = "Choose one option first.";
        }
        return;
      }
      var label = chosen.closest(".learn-option");
      var ok = chosen.hasAttribute("data-correct");
      label.classList.add(ok ? "is-correct" : "is-wrong");
      if (!ok) {
        var right = root.querySelector("[data-correct]");
        if (right) right.closest(".learn-option").classList.add("is-correct");
      }
      if (feedback) {
        feedback.hidden = false;
        feedback.className = "learn-feedback " + (ok ? "is-ok" : "is-bad");
        feedback.textContent = ok
          ? root.getAttribute("data-feedback-ok") || "Strong choice."
          : root.getAttribute("data-feedback-bad") || "Not the strongest option here.";
      }
      if (ok && doneFlag) doneFlag.value = "1";
    });
  }

  function initMcq(root) {
    var feedback = root.querySelector("[data-mcq-feedback]");
    var doneFlag = root.querySelector("[data-block-done]");
    var checkBtn = root.querySelector("[data-mcq-check]");
    var name = root.getAttribute("data-mcq-name");
    if (!checkBtn || !name) return;
    checkBtn.addEventListener("click", function () {
      var chosen = root.querySelector("input[name='" + name + "']:checked");
      root.querySelectorAll(".learn-option").forEach(function (el) {
        el.classList.remove("is-correct", "is-wrong");
      });
      if (!chosen) {
        if (feedback) {
          feedback.hidden = false;
          feedback.className = "learn-feedback is-bad";
          feedback.textContent = "Select an answer first.";
        }
        return;
      }
      var label = chosen.closest(".learn-option");
      var ok = chosen.hasAttribute("data-correct");
      label.classList.add(ok ? "is-correct" : "is-wrong");
      if (!ok) {
        var right = root.querySelector("[data-correct]");
        if (right) right.closest(".learn-option").classList.add("is-correct");
      }
      if (feedback) {
        feedback.hidden = false;
        feedback.className = "learn-feedback " + (ok ? "is-ok" : "is-bad");
        feedback.textContent = ok
          ? root.getAttribute("data-feedback-ok") || "Correct."
          : root.getAttribute("data-feedback-bad") || "Not quite. Review the key idea and try again.";
      }
      if (ok && doneFlag) doneFlag.value = "1";
    });
  }

  function initChecklist(root) {
    var items = root.querySelectorAll("input[type='checkbox'][data-takeaway]");
    var doneFlag = root.querySelector("[data-block-done]");
    var note = root.querySelector("[data-checklist-note]");
    function sync() {
      var all = items.length;
      var checked = 0;
      items.forEach(function (el) {
        if (el.checked) checked += 1;
      });
      if (note) {
        note.textContent = checked + " of " + all + " ready for your next session.";
      }
      if (doneFlag && checked >= Math.min(2, all)) doneFlag.value = "1";
    }
    items.forEach(function (el) {
      el.addEventListener("change", sync);
    });
    sync();
  }

  function initGate(completeBtn, requiredSelectors, messageEl) {
    if (!completeBtn) return;
    completeBtn.addEventListener("click", function (e) {
      var missing = [];
      requiredSelectors.forEach(function (sel) {
        var el = document.querySelector(sel);
        if (!el || el.value !== "1") missing.push(sel);
      });
      if (missing.length) {
        e.preventDefault();
        if (messageEl) {
          messageEl.hidden = false;
          messageEl.textContent = "Complete Try it, Case it and Check before finishing this module.";
        }
        var first = document.querySelector(missing[0]);
        if (first) {
          var block = first.closest(".mod-block") || first;
          if (block.scrollIntoView) block.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return false;
      }
      return true;
    });
  }

  function initSequence(root) {
    var list = root.querySelector("[data-sequence-list]");
    var feedback = root.querySelector("[data-sequence-feedback]");
    var doneFlag = root.querySelector("[data-block-done]");
    var checkBtn = root.querySelector("[data-sequence-check]");
    if (!list || !checkBtn) return;

    var order = [];
    list.querySelectorAll("[data-seq]").forEach(function (btn, idx) {
      order.push(btn);
      btn.addEventListener("click", function () {
        var items = Array.prototype.slice.call(list.querySelectorAll("[data-seq]"));
        var i = items.indexOf(btn);
        if (i < 0) return;
        var swapWith = i === 0 ? 1 : i - 1;
        if (swapWith >= items.length) return;
        if (i === 0 && items.length > 1) {
          list.insertBefore(items[1], items[0]);
        } else {
          list.insertBefore(btn, items[swapWith]);
        }
      });
    });

    checkBtn.addEventListener("click", function () {
      var items = Array.prototype.slice.call(list.querySelectorAll("[data-seq]"));
      var ok = items.every(function (el, i) {
        return String(el.getAttribute("data-seq")) === String(i + 1);
      });
      if (feedback) {
        feedback.hidden = false;
        feedback.className = "learn-feedback " + (ok ? "is-ok" : "is-bad");
        feedback.textContent = ok
          ? root.getAttribute("data-feedback-ok") || "Correct order. Clear sequences are easier to follow."
          : root.getAttribute("data-feedback-bad") || "Not yet. Tap cards to move them up and check again.";
      }
      items.forEach(function (el) {
        el.classList.toggle("is-matched", ok);
        el.classList.toggle("is-wrong-flash", !ok);
      });
      if (ok && doneFlag) doneFlag.value = "1";
      setTimeout(function () {
        items.forEach(function (el) {
          el.classList.remove("is-wrong-flash");
        });
      }, 500);
    });
  }

  function boot() {
    document.querySelectorAll("[data-block='match']").forEach(initMatch);
    document.querySelectorAll("[data-block='scenario']").forEach(initScenario);
    document.querySelectorAll("[data-block='mcq']").forEach(initMcq);
    document.querySelectorAll("[data-block='checklist']").forEach(initChecklist);
    document.querySelectorAll("[data-block='sequence']").forEach(initSequence);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  global.PixtoModuleBlocks = {
    initGate: initGate,
  };
})(typeof window !== "undefined" ? window : this);
