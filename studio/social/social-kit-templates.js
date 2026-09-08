/* PixtoLearn Social Studio V2 - template draw registry */
(function (global) {
  "use strict";

  var BRAND = {
    pink: "#d03860",
    pinkDeep: "#b82858",
    amber: "#e8a840",
    slate: "#88b0c0",
    slateDeep: "#5f8a9a",
    ink: "#14242b",
    foam: "#f4f8f9",
    white: "#ffffff"
  };

  function roundRect(ctx, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
    var words = String(text || "").split(/\s+/);
    var line = "";
    var lines = [];
    for (var n = 0; n < words.length; n++) {
      var test = line ? line + " " + words[n] : words[n];
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = words[n];
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    if (maxLines && lines.length > maxLines) {
      lines = lines.slice(0, maxLines);
      lines[maxLines - 1] = lines[maxLines - 1].replace(/\.?$/, "") + "...";
    }
    lines.forEach(function (ln, i) {
      ctx.fillText(ln, x, y + i * lineHeight);
    });
    return lines.length * lineHeight;
  }

  function fitFont(ctx, text, family, weight, maxSize, minSize, maxWidth) {
    var size = maxSize;
    while (size > minSize) {
      ctx.font = weight + " " + size + "px " + family;
      if (ctx.measureText(String(text || "").split(/\s+/).slice(0, 6).join(" ")).width <= maxWidth * 1.35) break;
      size -= 2;
    }
    return size;
  }

  function drawBrandBar(ctx, W, H) {
    var barH = Math.max(8, Math.round(H * 0.012));
    var g = ctx.createLinearGradient(0, 0, W, 0);
    g.addColorStop(0, BRAND.pink);
    g.addColorStop(0.48, BRAND.amber);
    g.addColorStop(1, BRAND.slate);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, barH);
    return barH;
  }

  function drawMarks(ctx, W, H, x, y, onDark) {
    var s = Math.min(W, H) * 0.032;
    [[BRAND.pink], [BRAND.amber], [BRAND.slate]].forEach(function (c, i) {
      ctx.fillStyle = c[0];
      roundRect(ctx, x + i * (s * 1.35), y, s, s * 1.15, s * 0.18);
      ctx.fill();
    });
    ctx.fillStyle = onDark ? "rgba(255,255,255,0.7)" : "rgba(20,36,43,0.65)";
    ctx.font = "600 " + Math.round(H * 0.02) + "px Figtree, sans-serif";
    ctx.fillText("PIXTOLEARN", x + s * 4.3, y + s * 0.85);
    return s * 1.4;
  }

  function drawBackground(ctx, layout, draft, bgImage) {
    var W = layout.w;
    var H = layout.h;
    var variant = draft.bgVariant || "ink";

    if (variant === "foam") {
      ctx.fillStyle = BRAND.foam;
      ctx.fillRect(0, 0, W, H);
      return { onDark: false };
    }

    if ((variant === "photo" || variant === "cutout") && bgImage && bgImage.complete && bgImage.naturalWidth) {
      var zoom = draft.cropZoom || 1;
      var ox = (draft.cropX || 0.5) - 0.5;
      var oy = (draft.cropY || 0.5) - 0.5;
      var iw = bgImage.naturalWidth;
      var ih = bgImage.naturalHeight;
      var scale = Math.max(W / iw, H / ih) * zoom;
      var dw = iw * scale;
      var dh = ih * scale;
      var dx = (W - dw) / 2 - ox * dw * 0.4;
      var dy = (H - dh) / 2 - oy * dh * 0.4;
      ctx.drawImage(bgImage, dx, dy, dw, dh);
      if (variant === "cutout") {
        ctx.fillStyle = "rgba(15,28,34,0.35)";
        ctx.fillRect(0, 0, W, H);
      } else {
        var overlay = typeof draft.overlay === "number" ? draft.overlay : 0.55;
        ctx.fillStyle = "rgba(15,28,34," + overlay + ")";
        ctx.fillRect(0, 0, W, H);
      }
      return { onDark: true };
    }

    var g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, "#0f1c22");
    g.addColorStop(0.55, BRAND.ink);
    g.addColorStop(1, "#1c3a44");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    function orb(x, y, r, color) {
      var og = ctx.createRadialGradient(x, y, 0, x, y, r);
      og.addColorStop(0, color);
      og.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = og;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    orb(W * 0.85, H * 0.12, W * 0.45, "rgba(232,168,64,0.28)");
    orb(W * 0.1, H * 0.75, W * 0.4, "rgba(208,56,96,0.22)");
    orb(W * 0.7, H * 0.85, W * 0.35, "rgba(136,176,192,0.2)");
    return { onDark: true };
  }

  function safeBox(layout) {
    var s = layout.safe || { top: 0.08, right: 0.08, bottom: 0.1, left: 0.08 };
    return {
      x: layout.w * s.left,
      y: layout.h * s.top,
      w: layout.w * (1 - s.left - s.right),
      h: layout.h * (1 - s.top - s.bottom)
    };
  }

  function drawSafeOverlay(ctx, layout) {
    var box = safeBox(layout);
    ctx.save();
    ctx.fillStyle = "rgba(208,56,96,0.12)";
    ctx.fillRect(0, 0, layout.w, box.y);
    ctx.fillRect(0, box.y + box.h, layout.w, layout.h - (box.y + box.h));
    ctx.fillRect(0, box.y, box.x, box.h);
    ctx.fillRect(box.x + box.w, box.y, layout.w - (box.x + box.w), box.h);
    ctx.strokeStyle = "rgba(232,168,64,0.65)";
    ctx.lineWidth = Math.max(2, layout.w * 0.003);
    ctx.setLineDash([10, 8]);
    ctx.strokeRect(box.x, box.y, box.w, box.h);
    ctx.restore();
  }

  function drawFooter(ctx, layout, draft, onDark, box) {
    ctx.fillStyle = onDark ? "rgba(255,255,255,0.55)" : "rgba(20,36,43,0.55)";
    ctx.font = "600 " + Math.round(layout.h * 0.02) + "px Figtree, sans-serif";
    ctx.fillText(draft.footer || "pixtolearn.com", box.x, box.y + box.h - 4);
  }

  function drawCtaPill(ctx, x, y, w, h, label, color) {
    ctx.fillStyle = color;
    roundRect(ctx, x, y, w, h, 999);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "700 " + Math.round(h * 0.42) + "px Figtree, sans-serif";
    ctx.fillText(label, x + h * 0.45, y + h * 0.66);
  }

  function baseChrome(ctx, layout, draft, bgImage) {
    var theme = drawBackground(ctx, layout, draft, bgImage);
    drawBrandBar(ctx, layout.w, layout.h);
    var box = safeBox(layout);
    drawMarks(ctx, layout.w, layout.h, box.x, box.y, theme.onDark);
    return { onDark: theme.onDark, box: box, text: theme.onDark ? "#fff" : BRAND.ink, muted: theme.onDark ? "rgba(255,255,255,0.72)" : "rgba(20,36,43,0.7)" };
  }

  function drawHookBig(ctx, chrome, draft, maxLines) {
    var box = chrome.box;
    var size = fitFont(ctx, draft.hook, "'Bricolage Grotesque', sans-serif", "700", Math.round(layoutH(chrome) * 0.07), 28, box.w);
    ctx.fillStyle = chrome.text;
    ctx.font = "700 " + size + "px 'Bricolage Grotesque', sans-serif";
    var used = wrapText(ctx, draft.hook, box.x, box.y + box.h * 0.28, box.w, size * 1.12, maxLines || 5);
    if (draft.sub) {
      ctx.fillStyle = chrome.muted;
      ctx.font = "500 " + Math.round(layoutH(chrome) * 0.028) + "px Figtree, sans-serif";
      wrapText(ctx, draft.sub, box.x, box.y + box.h * 0.28 + used + 24, box.w, Math.round(layoutH(chrome) * 0.036), 3);
    }
  }

  function layoutH(chrome) {
    return chrome.box.h / 0.75; // approximate full H from safe box - better pass H
  }

  // Fix layoutH - templates should receive layout
  function drawBrand(ctx, layout, draft, bgImage) {
    var chrome = baseChrome(ctx, layout, draft, bgImage);
    var box = chrome.box;
    var size = fitFont(ctx, draft.hook, "'Bricolage Grotesque', sans-serif", "700", Math.round(layout.h * 0.07), 28, box.w);
    ctx.fillStyle = chrome.text;
    ctx.font = "700 " + size + "px 'Bricolage Grotesque', sans-serif";
    var used = wrapText(ctx, draft.hook, box.x, box.y + box.h * 0.28, box.w, size * 1.12, 5);
    if (draft.sub) {
      ctx.fillStyle = chrome.muted;
      ctx.font = "500 " + Math.round(layout.h * 0.028) + "px Figtree, sans-serif";
      wrapText(ctx, draft.sub, box.x, box.y + box.h * 0.28 + used + 20, box.w, Math.round(layout.h * 0.036), 3);
    }
    drawFooter(ctx, layout, draft, chrome.onDark, box);
  }

  function drawTip(ctx, layout, draft, bgImage) {
    var chrome = baseChrome(ctx, layout, draft, bgImage);
    var box = chrome.box;
    var panelY = box.y + box.h * 0.18;
    var panelH = box.h * 0.62;
    ctx.fillStyle = chrome.onDark ? "rgba(255,255,255,0.12)" : "rgba(20,36,43,0.06)";
    roundRect(ctx, box.x, panelY, box.w, panelH, 28);
    ctx.fill();
    ctx.fillStyle = BRAND.amber;
    ctx.font = "700 " + Math.round(layout.h * 0.022) + "px Figtree, sans-serif";
    ctx.fillText(draft.lang === "es" ? "TIP RÁPIDO" : "QUICK TIP", box.x + 28, panelY + panelH * 0.14);
    var size = fitFont(ctx, draft.hook, "'Bricolage Grotesque', sans-serif", "700", Math.round(layout.h * 0.048), 26, box.w - 56);
    ctx.fillStyle = chrome.text;
    ctx.font = "700 " + size + "px 'Bricolage Grotesque', sans-serif";
    wrapText(ctx, draft.hook, box.x + 28, panelY + panelH * 0.3, box.w - 56, size * 1.15, 4);
    if (draft.sub) {
      ctx.fillStyle = chrome.muted;
      ctx.font = "500 " + Math.round(layout.h * 0.026) + "px Figtree, sans-serif";
      wrapText(ctx, draft.sub, box.x + 28, panelY + panelH * 0.7, box.w - 56, Math.round(layout.h * 0.034), 3);
    }
    drawFooter(ctx, layout, draft, chrome.onDark, box);
  }

  function drawProblemSolution(ctx, layout, draft, bgImage) {
    var chrome = baseChrome(ctx, layout, draft, bgImage);
    var box = chrome.box;
    var gap = box.w * 0.04;
    var half = (box.w - gap) / 2;
    var cardY = box.y + box.h * 0.22;
    var cardH = box.h * 0.55;
    ctx.fillStyle = "rgba(208,56,96,0.18)";
    roundRect(ctx, box.x, cardY, half, cardH, 22);
    ctx.fill();
    ctx.fillStyle = "rgba(136,176,192,0.22)";
    roundRect(ctx, box.x + half + gap, cardY, half, cardH, 22);
    ctx.fill();
    ctx.fillStyle = BRAND.pink;
    ctx.font = "700 " + Math.round(layout.h * 0.02) + "px Figtree, sans-serif";
    ctx.fillText(draft.lang === "es" ? "PROBLEMA" : "PROBLEM", box.x + 20, cardY + 36);
    ctx.fillStyle = BRAND.slateDeep;
    ctx.fillText(draft.lang === "es" ? "SOLUCIÓN" : "SOLUTION", box.x + half + gap + 20, cardY + 36);
    ctx.fillStyle = chrome.text;
    ctx.font = "700 " + Math.round(layout.h * 0.03) + "px 'Bricolage Grotesque', sans-serif";
    wrapText(ctx, draft.hook || "Too many words", box.x + 20, cardY + 80, half - 40, Math.round(layout.h * 0.038), 5);
    wrapText(ctx, draft.sub || "One clear visual sequence", box.x + half + gap + 20, cardY + 80, half - 40, Math.round(layout.h * 0.038), 5);
    drawFooter(ctx, layout, draft, chrome.onDark, box);
  }

  function drawFnt(ctx, layout, draft, bgImage) {
    var chrome = baseChrome(ctx, layout, draft, bgImage);
    var box = chrome.box;
    ctx.fillStyle = chrome.text;
    var size = fitFont(ctx, draft.hook, "'Bricolage Grotesque', sans-serif", "700", Math.round(layout.h * 0.042), 24, box.w);
    ctx.font = "700 " + size + "px 'Bricolage Grotesque', sans-serif";
    wrapText(ctx, draft.hook, box.x, box.y + box.h * 0.18, box.w, size * 1.15, 3);
    var steps = draft.lang === "es" ? ["Primero", "Despu\u00e9s", "Luego"] : ["First", "Next", "Then"];
    var colors = [BRAND.pink, BRAND.amber, BRAND.slate];
    var boxW = (box.w - layout.w * 0.04) / 3;
    var boxH = box.h * 0.28;
    var boxY = box.y + box.h * 0.45;
    steps.forEach(function (s, i) {
      var x = box.x + i * (boxW + layout.w * 0.02);
      ctx.fillStyle = chrome.onDark ? "rgba(255,255,255,0.12)" : "rgba(20,36,43,0.06)";
      roundRect(ctx, x, boxY, boxW, boxH, 18);
      ctx.fill();
      ctx.fillStyle = colors[i];
      roundRect(ctx, x, boxY, boxW, 10, 4);
      ctx.fill();
      ctx.fillStyle = chrome.text;
      ctx.font = "700 " + Math.round(layout.h * 0.03) + "px 'Bricolage Grotesque', sans-serif";
      ctx.fillText(s, x + 16, boxY + boxH * 0.55);
    });
    drawFooter(ctx, layout, draft, chrome.onDark, box);
  }

  function drawProduct(ctx, layout, draft, bgImage) {
    var chrome = baseChrome(ctx, layout, draft, bgImage);
    var box = chrome.box;
    ctx.fillStyle = chrome.text;
    var size = fitFont(ctx, draft.hook, "'Bricolage Grotesque', sans-serif", "700", Math.round(layout.h * 0.05), 26, box.w);
    ctx.font = "700 " + size + "px 'Bricolage Grotesque', sans-serif";
    wrapText(ctx, draft.hook, box.x, box.y + box.h * 0.22, box.w * 0.92, size * 1.12, 4);
    if (draft.sub) {
      ctx.fillStyle = chrome.muted;
      ctx.font = "500 " + Math.round(layout.h * 0.028) + "px Figtree, sans-serif";
      wrapText(ctx, draft.sub, box.x, box.y + box.h * 0.55, box.w, Math.round(layout.h * 0.036), 3);
    }
    drawCtaPill(ctx, box.x, box.y + box.h * 0.78, Math.min(box.w * 0.55, 420), layout.h * 0.055, draft.ctaLabel || "Shop packs", BRAND.slateDeep);
    drawFooter(ctx, layout, draft, chrome.onDark, box);
  }

  function drawAcademy(ctx, layout, draft, bgImage) {
    var chrome = baseChrome(ctx, layout, draft, bgImage);
    var box = chrome.box;
    ctx.fillStyle = BRAND.pink;
    ctx.font = "700 " + Math.round(layout.h * 0.02) + "px Figtree, sans-serif";
    ctx.fillText("ACADEMY", box.x, box.y + box.h * 0.18);
    ctx.fillStyle = chrome.text;
    var size = fitFont(ctx, draft.hook, "'Bricolage Grotesque', sans-serif", "700", Math.round(layout.h * 0.05), 26, box.w);
    ctx.font = "700 " + size + "px 'Bricolage Grotesque', sans-serif";
    wrapText(ctx, draft.hook, box.x, box.y + box.h * 0.28, box.w, size * 1.12, 4);
    if (draft.sub) {
      ctx.fillStyle = chrome.muted;
      ctx.font = "500 " + Math.round(layout.h * 0.028) + "px Figtree, sans-serif";
      wrapText(ctx, draft.sub, box.x, box.y + box.h * 0.58, box.w, Math.round(layout.h * 0.036), 3);
    }
    drawCtaPill(ctx, box.x, box.y + box.h * 0.78, Math.min(box.w * 0.55, 420), layout.h * 0.055, draft.ctaLabel || "Explore Academy", BRAND.pink);
    drawFooter(ctx, layout, draft, chrome.onDark, box);
  }

  function drawProof(ctx, layout, draft, bgImage) {
    var chrome = baseChrome(ctx, layout, draft, bgImage);
    var box = chrome.box;
    ctx.fillStyle = chrome.onDark ? "rgba(255,255,255,0.1)" : "rgba(20,36,43,0.05)";
    roundRect(ctx, box.x, box.y + box.h * 0.2, box.w, box.h * 0.55, 24);
    ctx.fill();
    ctx.fillStyle = BRAND.amber;
    ctx.font = "700 " + Math.round(layout.h * 0.08) + "px 'Bricolage Grotesque', sans-serif";
    ctx.fillText("\u201C", box.x + 20, box.y + box.h * 0.38);
    ctx.fillStyle = chrome.text;
    var size = fitFont(ctx, draft.hook, "'Bricolage Grotesque', sans-serif", "700", Math.round(layout.h * 0.04), 22, box.w - 60);
    ctx.font = "700 " + size + "px 'Bricolage Grotesque', sans-serif";
    wrapText(ctx, draft.hook, box.x + 30, box.y + box.h * 0.4, box.w - 60, size * 1.2, 5);
    ctx.fillStyle = chrome.muted;
    ctx.font = "600 " + Math.round(layout.h * 0.022) + "px Figtree, sans-serif";
    ctx.fillText(draft.sub || "Session instructor", box.x + 30, box.y + box.h * 0.82);
    drawFooter(ctx, layout, draft, chrome.onDark, box);
  }

  function drawImpact(ctx, layout, draft, bgImage) {
    var chrome = baseChrome(ctx, layout, draft, bgImage);
    var box = chrome.box;
    ctx.fillStyle = BRAND.amber;
    ctx.font = "700 " + Math.round(layout.h * 0.02) + "px Figtree, sans-serif";
    ctx.fillText(draft.lang === "es" ? "IMPACTO" : "IMPACT", box.x, box.y + box.h * 0.18);
    ctx.fillStyle = chrome.text;
    var size = fitFont(ctx, draft.hook, "'Bricolage Grotesque', sans-serif", "700", Math.round(layout.h * 0.052), 26, box.w);
    ctx.font = "700 " + size + "px 'Bricolage Grotesque', sans-serif";
    wrapText(ctx, draft.hook, box.x, box.y + box.h * 0.28, box.w, size * 1.12, 4);
    if (draft.sub) {
      ctx.fillStyle = chrome.muted;
      ctx.font = "500 " + Math.round(layout.h * 0.028) + "px Figtree, sans-serif";
      wrapText(ctx, draft.sub, box.x, box.y + box.h * 0.6, box.w, Math.round(layout.h * 0.036), 3);
    }
    drawFooter(ctx, layout, draft, chrome.onDark, box);
  }

  function drawChecklist(ctx, layout, draft, bgImage) {
    var chrome = baseChrome(ctx, layout, draft, bgImage);
    var box = chrome.box;
    ctx.fillStyle = chrome.text;
    ctx.font = "700 " + Math.round(layout.h * 0.04) + "px 'Bricolage Grotesque', sans-serif";
    wrapText(ctx, draft.hook, box.x, box.y + box.h * 0.18, box.w, Math.round(layout.h * 0.05), 2);
    var items = (draft.sub || "Create structure\nReduce overload\nUse them anywhere").split(/\n|\|/).map(function (s) { return s.trim(); }).filter(Boolean).slice(0, 5);
    items.forEach(function (item, i) {
      var y = box.y + box.h * 0.4 + i * (box.h * 0.1);
      ctx.fillStyle = BRAND.pink;
      roundRect(ctx, box.x, y, 22, 22, 6);
      ctx.fill();
      ctx.fillStyle = chrome.text;
      ctx.font = "600 " + Math.round(layout.h * 0.028) + "px Figtree, sans-serif";
      ctx.fillText(item, box.x + 40, y + 18);
    });
    drawFooter(ctx, layout, draft, chrome.onDark, box);
  }

  function drawFaq(ctx, layout, draft, bgImage) {
    var chrome = baseChrome(ctx, layout, draft, bgImage);
    var box = chrome.box;
    ctx.fillStyle = BRAND.slate;
    ctx.font = "700 " + Math.round(layout.h * 0.02) + "px Figtree, sans-serif";
    ctx.fillText("FAQ", box.x, box.y + box.h * 0.18);
    ctx.fillStyle = chrome.text;
    ctx.font = "700 " + Math.round(layout.h * 0.042) + "px 'Bricolage Grotesque', sans-serif";
    wrapText(ctx, draft.hook, box.x, box.y + box.h * 0.28, box.w, Math.round(layout.h * 0.052), 3);
    ctx.fillStyle = chrome.muted;
    ctx.font = "500 " + Math.round(layout.h * 0.028) + "px Figtree, sans-serif";
    wrapText(ctx, draft.sub || "No. PixtoLearn is a visual teaching system that slots into your programme.", box.x, box.y + box.h * 0.55, box.w, Math.round(layout.h * 0.036), 5);
    drawFooter(ctx, layout, draft, chrome.onDark, box);
  }

  function drawQuote(ctx, layout, draft, bgImage) {
    drawProof(ctx, layout, draft, bgImage);
  }

  function drawCarouselCover(ctx, layout, draft, bgImage) {
    var chrome = baseChrome(ctx, layout, draft, bgImage);
    var box = chrome.box;
    ctx.fillStyle = chrome.text;
    ctx.font = "700 " + Math.round(layout.h * 0.055) + "px 'Bricolage Grotesque', sans-serif";
    wrapText(ctx, draft.hook, box.x, box.y + box.h * 0.3, box.w, Math.round(layout.h * 0.065), 4);
    ctx.fillStyle = chrome.muted;
    ctx.font = "600 " + Math.round(layout.h * 0.024) + "px Figtree, sans-serif";
    ctx.fillText((draft.slideLabel || "1 / 5") + "   |   " + (draft.sub || "Swipe"), box.x, box.y + box.h * 0.75);
    drawFooter(ctx, layout, draft, chrome.onDark, box);
  }

  function drawCarouselContent(ctx, layout, draft, bgImage) {
    var chrome = baseChrome(ctx, layout, draft, bgImage);
    var box = chrome.box;
    ctx.fillStyle = BRAND.amber;
    ctx.font = "700 " + Math.round(layout.h * 0.022) + "px Figtree, sans-serif";
    ctx.fillText(draft.slideLabel || "02", box.x, box.y + box.h * 0.18);
    ctx.fillStyle = chrome.text;
    ctx.font = "700 " + Math.round(layout.h * 0.045) + "px 'Bricolage Grotesque', sans-serif";
    wrapText(ctx, draft.hook, box.x, box.y + box.h * 0.28, box.w, Math.round(layout.h * 0.055), 4);
    if (draft.sub) {
      ctx.fillStyle = chrome.muted;
      ctx.font = "500 " + Math.round(layout.h * 0.028) + "px Figtree, sans-serif";
      wrapText(ctx, draft.sub, box.x, box.y + box.h * 0.6, box.w, Math.round(layout.h * 0.036), 4);
    }
    drawFooter(ctx, layout, draft, chrome.onDark, box);
  }

  function drawCarouselCta(ctx, layout, draft, bgImage) {
    var chrome = baseChrome(ctx, layout, draft, bgImage);
    var box = chrome.box;
    ctx.fillStyle = chrome.text;
    ctx.font = "700 " + Math.round(layout.h * 0.05) + "px 'Bricolage Grotesque', sans-serif";
    wrapText(ctx, draft.hook || "Start with one clear path", box.x, box.y + box.h * 0.3, box.w, Math.round(layout.h * 0.06), 3);
    drawCtaPill(ctx, box.x, box.y + box.h * 0.65, Math.min(box.w * 0.7, 480), layout.h * 0.06, draft.ctaLabel || "Link in bio", BRAND.pink);
    drawFooter(ctx, layout, draft, chrome.onDark, box);
  }

  function drawReelCover(ctx, layout, draft, bgImage) {
    var chrome = baseChrome(ctx, layout, draft, bgImage);
    var box = chrome.box;
    ctx.fillStyle = chrome.text;
    var size = fitFont(ctx, draft.hook, "'Bricolage Grotesque', sans-serif", "700", Math.round(layout.h * 0.055), 28, box.w * 0.9);
    ctx.font = "700 " + size + "px 'Bricolage Grotesque', sans-serif";
    wrapText(ctx, draft.hook, box.x, box.y + box.h * 0.35, box.w * 0.9, size * 1.12, 5);
    if (draft.sub) {
      ctx.fillStyle = chrome.muted;
      ctx.font = "600 " + Math.round(layout.h * 0.024) + "px Figtree, sans-serif";
      wrapText(ctx, draft.sub, box.x, box.y + box.h * 0.7, box.w * 0.85, Math.round(layout.h * 0.032), 3);
    }
    drawFooter(ctx, layout, draft, chrome.onDark, box);
  }

  function drawComparison(ctx, layout, draft, bgImage) {
    drawProblemSolution(ctx, layout, draft, bgImage);
  }

  var TEMPLATES = {
    brand: { id: "brand", label: { en: "Brand statement", es: "Declaracion de marca" }, group: "brand", draw: drawBrand },
    tip: { id: "tip", label: { en: "Quick tip", es: "Tip rapido" }, group: "education", draw: drawTip },
    problem: { id: "problem", label: { en: "Problem / solution", es: "Problema / solucion" }, group: "education", draw: drawProblemSolution },
    fnt: { id: "fnt", label: { en: "First / Next / Then", es: "Primero / Despues / Luego" }, group: "method", draw: drawFnt },
    product: { id: "product", label: { en: "Product spotlight", es: "Producto" }, group: "commerce", draw: drawProduct },
    compare: { id: "compare", label: { en: "Product comparison", es: "Comparacion" }, group: "commerce", draw: drawComparison },
    academy: { id: "academy", label: { en: "Academy / course", es: "Academy / curso" }, group: "commerce", draw: drawAcademy },
    proof: { id: "proof", label: { en: "Testimonial / proof", es: "Prueba social" }, group: "trust", draw: drawProof },
    impact: { id: "impact", label: { en: "Impact / story", es: "Impacto / historia" }, group: "trust", draw: drawImpact },
    checklist: { id: "checklist", label: { en: "Checklist", es: "Checklist" }, group: "education", draw: drawChecklist },
    faq: { id: "faq", label: { en: "FAQ", es: "FAQ" }, group: "education", draw: drawFaq },
    quote: { id: "quote", label: { en: "Quote", es: "Cita" }, group: "brand", draw: drawQuote },
    carousel_cover: { id: "carousel_cover", label: { en: "Carousel cover", es: "Portada carrusel" }, group: "carousel", draw: drawCarouselCover },
    carousel_content: { id: "carousel_content", label: { en: "Carousel content", es: "Contenido carrusel" }, group: "carousel", draw: drawCarouselContent },
    carousel_cta: { id: "carousel_cta", label: { en: "Carousel CTA", es: "CTA carrusel" }, group: "carousel", draw: drawCarouselCta },
    reel: { id: "reel", label: { en: "Video / Reel cover", es: "Portada video / Reel" }, group: "video", draw: drawReelCover }
  };

  function listTemplates() {
    return Object.keys(TEMPLATES).map(function (id) { return TEMPLATES[id]; });
  }

  function getTemplate(id) {
    return TEMPLATES[id] || TEMPLATES.brand;
  }

  function renderTemplate(ctx, templateId, layout, draft, bgImage, showSafe) {
    var tpl = getTemplate(templateId);
    tpl.draw(ctx, layout, draft, bgImage);
    if (showSafe) drawSafeOverlay(ctx, layout);
  }

  global.TEMPLATES = TEMPLATES;
  global.listTemplates = listTemplates;
  global.getTemplate = getTemplate;
  global.renderTemplate = renderTemplate;
  global.StudioDraw = {
    BRAND: BRAND,
    wrapText: wrapText,
    roundRect: roundRect,
    safeBox: safeBox,
    drawSafeOverlay: drawSafeOverlay,
    drawBackground: drawBackground
  };
})(typeof window !== "undefined" ? window : this);
