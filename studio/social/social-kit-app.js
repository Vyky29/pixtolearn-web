/* PixtoLearn Social Studio V2 app */
(function () {
  "use strict";

  var STORE_KEY = "pixtolearn-social-kit-v2";
  var state = {
    lang: "en",
    tab: "bios",
    calFilter: "all",
    ops: "export",
    preview: "canvas",
    lastHook: "",
    bgAsset: null,
    bgImage: null,
    assetCatalog: typeof ASSET_CATALOG !== "undefined" ? ASSET_CATALOG : { assets: [] }
  };

  var studio = {
    network: "instagram",
    placement: "feed_portrait",
    template: "brand",
    bgVariant: "ink",
    hook: "Because visuals speak louder",
    sub: "Four paths. One visual language.",
    footer: "pixtolearn.com",
    ctaLabel: "Shop packs",
    cropZoom: 1,
    cropX: 0.5,
    cropY: 0.5,
    overlay: 0.55,
    showSafe: true,
    consentOnly: false,
    slideIndex: 0,
    slides: null,
    caption: ""
  };

  var UI = {
    en: {
      title: "Social Launch Kit",
      subtitle: "Bios, calendar, posts, Social Studio V2 and ops. Six networks. One visual language.",
      tabBios: "Bios", tabCalendar: "Calendar", tabGenerator: "Posts", tabStudio: "Studio", tabOps: "Ops",
      statNet: "networks", statDays: "launch days", statLang: "bilingual",
      kickBios: "Profiles", kickCal: "Launch", kickGen: "Copy", kickStudio: "Creative", kickOps: "Ops",
      biosH2: "Profile kit (P0 networks)",
      biosLead: "Claim Instagram, TikTok and LinkedIn with the same brand voice.",
      biosNote: "Handles: Instagram @pixtolearn (live). Claim TikTok and LinkedIn as PixtoLearn.",
      highlightsH3: "Instagram Highlights", linkBioH3: "Link-in-bio structure", checklistH3: "Week 0 checklist",
      calH2: "28-day launch calendar",
      calLead: "Daily beat with network-aware Studio drafts. Export weeks from Ops.",
      filterAll: "All", filterBrand: "Brand", filterSwim: "Swimming", filterWow: "WOW", filterApp: "App",
      filterAcademy: "Academy", filterImpact: "Impact", filterOffer: "Offer",
      genH2: "Post generator",
      genLead: "Pillar + audience + product + angle. Captions, script, LinkedIn, brief, hashtags.",
      lblPillar: "Pillar", lblAudience: "Audience", lblProduct: "Product", lblAngle: "Angle", lblCta: "CTA",
      lblExtra: "Extra detail (optional)", extraPh: "e.g. noisy pool, First-Next-Then",
      btnGenerate: "Generate posts", btnCopyAll: "Copy all", btnToStudio: "Open in Studio",
      guardH3: "Brand guardrails",
      studioH2: "Social Studio V2",
      studioLead: "Network-first templates, safe zones, post chrome and feed preview. Export platform-ready PNGs.",
      lblNetwork: "Network", lblPlacement: "Placement", lblTemplate: "Template", lblBgVariant: "Background",
      lblHook: "Hook / headline", lblSub: "Supporting line", lblFoot: "Footer / CTA", lblCtaLabel: "CTA button label",
      lblZoom: "Zoom", lblOverlay: "Overlay", lblSafe: "Safe zones", lblConsent: "Safe assets only",
      lblPhoto: "Background from library",
      btnRender: "Refresh", btnDownload: "Download PNG", btnDownloadAll: "Export carousel",
      btnClearBg: "Clear photo", btnAddFeed: "Add to feed", btnClearFeed: "Clear feed",
      btnSlideAdd: "Add slide", btnSlideDup: "Duplicate", btnSlideDel: "Delete",
      carouselH: "Carousel", prevCanvas: "Canvas", prevPost: "Post preview", prevFeed: "Profile / feed",
      videoH3: "Image and video playbook",
      opsH2: "Content ops suite",
      opsLead: "Weekly export, UTMs, approvals, storyboard, metrics, UGC, queue and project backup.",
      opsExport: "Export", opsUtm: "UTM", opsApprove: "Approve", opsStory: "Storyboard",
      opsMetrics: "Metrics", opsUgc: "UGC", opsQueue: "Queue",
      footer: "Internal marketing tool. Not for public indexing. hello@pixtolearn.com",
      copy: "Copy", copied: "Copied", downloaded: "PNG downloaded", saved: "Saved",
      day: "Day", hook: "Hook", cta: "CTA", liNote: "LinkedIn",
      outIg: "Instagram caption", outTt: "TikTok script", outLi: "LinkedIn post",
      outVisual: "Visual brief", outTags: "Hashtags",
      nameLabel: "Display name", bioLabel: "Bio", aboutLabel: "About", headlineLabel: "Headline",
      weekLabel: "Week", btnMd: "Download Markdown", btnCsv: "Download CSV", btnCopyWeek: "Copy week",
      utmBase: "Base URL", utmCampaign: "utm_campaign", utmContent: "utm_content", btnBuildUtm: "Build links",
      approveLead: "Track draft / approved / posted for each launch day. Saved in this browser.",
      storyLead: "Build a Reel/TikTok beat sheet with VO and on-screen text, then send to Studio.",
      metricsLead: "Paste weekly numbers. The kit suggests which pillar to push next.",
      ugcLead: "Log partner clips with consent notes. Export a handoff list.",
      queueLead: "Approved posts ready for Buffer / Meta / LinkedIn scheduling (manual paste).",
      btnAddUgc: "Add UGC item", btnExportUgc: "Export UGC CSV", btnExportQueue: "Copy queue",
      btnBackup: "Backup project JSON", btnImport: "Import project", btnStoryMd: "Export MD",
      lblSaves: "Saves", lblShares: "Shares", lblClicks: "Link clicks", lblReach: "Reach",
      btnScore: "Score week"
    },
    es: {
      title: "Kit de lanzamiento social",
      subtitle: "Bios, calendario, posts, Social Studio V2 y ops. Seis redes. Un lenguaje visual.",
      tabBios: "Bios", tabCalendar: "Calendario", tabGenerator: "Posts", tabStudio: "Studio", tabOps: "Ops",
      statNet: "redes", statDays: "días launch", statLang: "bilingüe",
      kickBios: "Perfiles", kickCal: "Lanzamiento", kickGen: "Copy", kickStudio: "Creativo", kickOps: "Ops",
      biosH2: "Kit de perfiles (redes P0)",
      biosLead: "Activa Instagram, TikTok y LinkedIn con la misma voz de marca.",
      biosNote: "Handles: Instagram @pixtolearn (activo). Crea TikTok y LinkedIn como PixtoLearn.",
      highlightsH3: "Highlights de Instagram", linkBioH3: "Estructura del link-in-bio", checklistH3: "Checklist semana 0",
      calH2: "Calendario de lanzamiento (28 días)",
      calLead: "Ritmo diario con drafts de Studio por red. Exporta semanas desde Ops.",
      filterAll: "Todos", filterBrand: "Marca", filterSwim: "Natación", filterWow: "WOW", filterApp: "App",
      filterAcademy: "Academy", filterImpact: "Impacto", filterOffer: "Oferta",
      genH2: "Generador de posts",
      genLead: "Pilar + audiencia + producto + ángulo. Captions, guion, LinkedIn, brief, hashtags.",
      lblPillar: "Pilar", lblAudience: "Audiencia", lblProduct: "Producto", lblAngle: "Ángulo", lblCta: "CTA",
      lblExtra: "Detalle extra (opcional)", extraPh: "ej. piscina ruidosa, Primero-Después-Luego",
      btnGenerate: "Generar posts", btnCopyAll: "Copiar todo", btnToStudio: "Abrir en Studio",
      guardH3: "Guardrails de marca",
      studioH2: "Social Studio V2",
      studioLead: "Templates por red, zonas seguras, chrome de post y preview de feed. Exporta PNGs listos.",
      lblNetwork: "Red", lblPlacement: "Formato", lblTemplate: "Plantilla", lblBgVariant: "Fondo",
      lblHook: "Gancho / titular", lblSub: "Línea de apoyo", lblFoot: "Footer / CTA", lblCtaLabel: "Texto botón CTA",
      lblZoom: "Zoom", lblOverlay: "Overlay", lblSafe: "Zonas seguras", lblConsent: "Solo assets seguros",
      lblPhoto: "Fondo de fototeca",
      btnRender: "Actualizar", btnDownload: "Descargar PNG", btnDownloadAll: "Exportar carrusel",
      btnClearBg: "Quitar foto", btnAddFeed: "Añadir al feed", btnClearFeed: "Vaciar feed",
      btnSlideAdd: "Añadir slide", btnSlideDup: "Duplicar", btnSlideDel: "Borrar",
      carouselH: "Carrusel", prevCanvas: "Canvas", prevPost: "Preview post", prevFeed: "Perfil / feed",
      videoH3: "Playbook de imagen y vídeo",
      opsH2: "Suite de content ops",
      opsLead: "Export semanal, UTMs, aprobaciones, storyboard, métricas, UGC, cola y backup.",
      opsExport: "Export", opsUtm: "UTM", opsApprove: "Aprobar", opsStory: "Storyboard",
      opsMetrics: "Métricas", opsUgc: "UGC", opsQueue: "Cola",
      footer: "Herramienta interna de marketing. No indexar. hello@pixtolearn.com",
      copy: "Copiar", copied: "Copiado", downloaded: "PNG descargado", saved: "Guardado",
      day: "Día", hook: "Gancho", cta: "CTA", liNote: "LinkedIn",
      outIg: "Caption Instagram", outTt: "Guion TikTok", outLi: "Post LinkedIn",
      outVisual: "Brief visual", outTags: "Hashtags",
      nameLabel: "Nombre visible", bioLabel: "Bio", aboutLabel: "Acerca de", headlineLabel: "Titular",
      weekLabel: "Semana", btnMd: "Descargar Markdown", btnCsv: "Descargar CSV", btnCopyWeek: "Copiar semana",
      utmBase: "URL base", utmCampaign: "utm_campaign", utmContent: "utm_content", btnBuildUtm: "Generar links",
      approveLead: "Estados draft / approved / posted por día. Se guarda en este navegador.",
      storyLead: "Monta un Reel/TikTok con VO y texto en pantalla, luego envíalo a Studio.",
      metricsLead: "Pega números semanales. El kit sugiere qué pilar potenciar.",
      ugcLead: "Registra clips de partners con notas de consentimiento.",
      queueLead: "Posts aprobados listos para pegar en Buffer / Meta / LinkedIn.",
      btnAddUgc: "Añadir UGC", btnExportUgc: "Exportar UGC CSV", btnExportQueue: "Copiar cola",
      btnBackup: "Backup JSON", btnImport: "Importar proyecto", btnStoryMd: "Exportar MD",
      lblSaves: "Guardados", lblShares: "Shares", lblClicks: "Clics link", lblReach: "Alcance",
      btnScore: "Puntuar semana"
    }
  };

  var VIDEO_IDEAS = {
    en: [
      { prio: "now", title: "Network-first stills", body: "Pick Instagram 4:5, TikTok 9:16 or LinkedIn link, then export with safe zones on." },
      { prio: "now", title: "Feed preview before posting", body: "Add 9-12 designs to the profile grid to check colour rhythm and product mix." },
      { prio: "next", title: "Carousel packs", body: "Cover + content + CTA slides, then Export carousel as numbered PNGs." },
      { prio: "next", title: "Reel storyboard", body: "Use Ops Storyboard for 0-2s / 2-12s / 12-20s, then open Reel cover in Studio." },
      { prio: "later", title: "Publish Mode reels", body: "Consent is cleared. Publish the 3 edited Mode reels with licensed music on IG/TikTok." },
      { prio: "later", title: "Project backup", body: "Export JSON from Ops Queue to move drafts between machines." }
    ],
    es: [
      { prio: "now", title: "Stills por red", body: "Elige Instagram 4:5, TikTok 9:16 o LinkedIn link y exporta con zonas seguras." },
      { prio: "now", title: "Preview de feed", body: "Anade 9-12 disenos al grid para revisar ritmo de color y mix de producto." },
      { prio: "next", title: "Packs de carrusel", body: "Portada + contenido + CTA, luego Exportar carrusel en PNGs numerados." },
      { prio: "next", title: "Storyboard Reel", body: "Usa Ops Storyboard para 0-2s / 2-12s / 12-20s y abre la portada en Studio." },
      { prio: "later", title: "Publicar Mode reels", body: "Consentimiento OK. Publica los 3 reels Mode editados con musica licenciada en IG/TikTok." },
      { prio: "later", title: "Backup de proyecto", body: "Exporta JSON desde Ops Cola para mover drafts entre equipos." }
    ]
  };

  function defaultStore() {
    return { version: 2, approvals: {}, ugc: [], story: null, metrics: null, studio: null, feed: {} };
  }
  function loadStore() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) {
        var legacy = localStorage.getItem("pixtolearn-social-kit-v1");
        if (legacy) {
          var old = JSON.parse(legacy);
          var migrated = defaultStore();
          migrated.approvals = old.approvals || {};
          migrated.ugc = old.ugc || [];
          migrated.story = old.story || null;
          migrated.metrics = old.metrics || null;
          return migrated;
        }
        return defaultStore();
      }
      var data = JSON.parse(raw);
      if (!data.version) data.version = 2;
      if (!data.feed) data.feed = {};
      return data;
    } catch (e) {
      return defaultStore();
    }
  }
  function saveStore() {
    store.studio = snapshotStudio();
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
  }
  var store = loadStore();

  function t(key) {
    return (UI[state.lang] && UI[state.lang][key]) || UI.en[key] || key;
  }
  function toast(msg) {
    var el = document.getElementById("toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function () { el.classList.remove("show"); }, 1600);
  }
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { toast(t("copied")); });
    } else {
      var ta = document.createElement("textarea");
      ta.value = text; document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); document.body.removeChild(ta); toast(t("copied"));
    }
  }
  function escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function downloadBlob(filename, content, mime) {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([content], { type: mime || "text/plain;charset=utf-8" }));
    a.download = filename;
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1200);
  }

  function snapshotStudio() {
    return {
      network: studio.network,
      placement: studio.placement,
      template: studio.template,
      bgVariant: studio.bgVariant,
      hook: studio.hook,
      sub: studio.sub,
      footer: studio.footer,
      ctaLabel: studio.ctaLabel,
      cropZoom: studio.cropZoom,
      cropX: studio.cropX,
      cropY: studio.cropY,
      overlay: studio.overlay,
      showSafe: studio.showSafe,
      consentOnly: studio.consentOnly,
      slideIndex: studio.slideIndex,
      slides: studio.slides,
      caption: studio.caption,
      bgAssetId: state.bgAsset ? state.bgAsset.id : null
    };
  }

  function applyStudioSnapshot(s) {
    if (!s) return;
    Object.keys(s).forEach(function (k) {
      if (k !== "bgAssetId" && studio.hasOwnProperty(k)) studio[k] = s[k];
    });
    if (s.bgAssetId) {
      var asset = (state.assetCatalog.assets || []).find(function (a) { return a.id === s.bgAssetId; });
      if (asset) loadAsset(asset);
    }
  }

  function currentDraft() {
    ensureSlides();
    var slide = studio.slides[studio.slideIndex];
    return {
      lang: state.lang,
      hook: slide.hook,
      sub: slide.sub,
      footer: studio.footer,
      ctaLabel: studio.ctaLabel,
      bgVariant: studio.bgVariant,
      cropZoom: studio.cropZoom,
      cropX: studio.cropX,
      cropY: studio.cropY,
      overlay: studio.overlay,
      slideLabel: (studio.slideIndex + 1) + " / " + studio.slides.length
    };
  }

  function ensureSlides() {
    if (!studio.slides || !studio.slides.length) {
      studio.slides = [{ hook: studio.hook, sub: studio.sub, template: studio.template }];
      studio.slideIndex = 0;
    }
    studio.slideIndex = Math.max(0, Math.min(studio.slideIndex, studio.slides.length - 1));
  }

  function syncControlsFromStudio() {
    setVal("sNetwork", studio.network);
    fillPlacements();
    setVal("sPlacement", studio.placement);
    fillTemplates();
    setVal("sTemplate", studio.slides && studio.slides[studio.slideIndex] ? studio.slides[studio.slideIndex].template : studio.template);
    setVal("sBgVariant", studio.bgVariant);
    setVal("sHook", currentDraft().hook);
    setVal("sSub", currentDraft().sub);
    setVal("sFoot", studio.footer);
    setVal("sCtaLabel", studio.ctaLabel);
    setVal("sZoom", studio.cropZoom);
    setVal("sOverlay", studio.overlay);
    setVal("sCropX", studio.cropX);
    setVal("sCropY", studio.cropY);
    var safe = document.getElementById("sSafeZones");
    var consent = document.getElementById("sConsentOnly");
    if (safe) safe.checked = !!studio.showSafe;
    if (consent) consent.checked = !!studio.consentOnly;
  }

  function setVal(id, value) {
    var el = document.getElementById(id);
    if (el) el.value = value;
  }
  function getVal(id) {
    var el = document.getElementById(id);
    return el ? el.value : "";
  }

  function readControlsToStudio() {
    studio.network = getVal("sNetwork") || "instagram";
    studio.placement = getVal("sPlacement") || listPlacements(studio.network)[0].id;
    studio.template = getVal("sTemplate") || "brand";
    studio.bgVariant = getVal("sBgVariant") || "ink";
    studio.footer = getVal("sFoot") || "pixtolearn.com";
    studio.ctaLabel = getVal("sCtaLabel") || "Shop packs";
    studio.cropZoom = Number(getVal("sZoom") || 1);
    studio.overlay = Number(getVal("sOverlay") || 0.55);
    studio.cropX = Number(getVal("sCropX") || 0.5);
    studio.cropY = Number(getVal("sCropY") || 0.5);
    studio.showSafe = !!(document.getElementById("sSafeZones") && document.getElementById("sSafeZones").checked);
    studio.consentOnly = !!(document.getElementById("sConsentOnly") && document.getElementById("sConsentOnly").checked);
    ensureSlides();
    studio.slides[studio.slideIndex].hook = getVal("sHook");
    studio.slides[studio.slideIndex].sub = getVal("sSub");
    studio.slides[studio.slideIndex].template = studio.template;
    studio.hook = studio.slides[studio.slideIndex].hook;
    studio.sub = studio.slides[studio.slideIndex].sub;
  }

  function fillNetworks() {
    var sel = document.getElementById("sNetwork");
    if (!sel) return;
    sel.innerHTML = listNetworks().map(function (n) {
      return '<option value="' + n.id + '">' + escapeHtml(n.label[state.lang] || n.label.en) + "</option>";
    }).join("");
  }
  function fillPlacements() {
    var sel = document.getElementById("sPlacement");
    if (!sel) return;
    var net = getVal("sNetwork") || studio.network;
    sel.innerHTML = listPlacements(net).map(function (p) {
      return '<option value="' + p.id + '">' + escapeHtml(p.label[state.lang] || p.label.en) + "</option>";
    }).join("");
  }
  function fillTemplates() {
    var sel = document.getElementById("sTemplate");
    if (!sel) return;
    sel.innerHTML = listTemplates().map(function (tpl) {
      return '<option value="' + tpl.id + '">' + escapeHtml(tpl.label[state.lang] || tpl.label.en) + "</option>";
    }).join("");
  }

  function renderSlideTabs() {
    ensureSlides();
    var el = document.getElementById("slideTabs");
    if (!el) return;
    el.innerHTML = studio.slides.map(function (s, i) {
      return '<button type="button" data-i="' + i + '" class="' + (i === studio.slideIndex ? "active" : "") + '">Slide ' + (i + 1) + "</button>";
    }).join("");
    el.querySelectorAll("button").forEach(function (btn) {
      btn.onclick = function () {
        readControlsToStudio();
        studio.slideIndex = Number(btn.getAttribute("data-i"));
        syncControlsFromStudio();
        renderSlideTabs();
        renderStudio();
      };
    });
  }

  function applyUiStrings() {
    document.documentElement.lang = state.lang === "es" ? "es" : "en-GB";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (UI[state.lang][key]) el.textContent = UI[state.lang][key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (UI[state.lang][key]) el.setAttribute("placeholder", UI[state.lang][key]);
    });
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === state.lang);
    });
  }

  function approvalStatus(day) {
    return (store.approvals && store.approvals[String(day)]) || "draft";
  }
  function setApproval(day, status) {
    store.approvals[String(day)] = status;
    saveStore();
    toast(t("saved"));
  }

  function renderBios() {
    var b = BIOS[state.lang];
    var grid = document.getElementById("biosGrid");
    grid.innerHTML = "";
    var variants = ["", "amber-label", "slate-label"];
    function bioCard(title, fields, copyPayload, vi) {
      var card = document.createElement("div");
      card.className = "card " + (variants[vi] || "");
      var html = '<div class="label">' + escapeHtml(title) + "</div>";
      fields.forEach(function (f) {
        html += '<p class="meta">' + escapeHtml(f.label) + "</p>";
        html += '<div class="bio-box">' + escapeHtml(f.value) + "</div>";
      });
      html += '<div class="row-actions"><button type="button" class="btn secondary copy-btn">' + t("copy") + "</button></div>";
      card.innerHTML = html;
      card.querySelector(".copy-btn").onclick = function () { copyText(copyPayload); };
      grid.appendChild(card);
    }
    bioCard(b.ig.network, [{ label: t("nameLabel"), value: b.ig.name }, { label: t("bioLabel"), value: b.ig.bio }], b.ig.name + "\n\n" + b.ig.bio, 0);
    bioCard(b.tt.network, [{ label: t("nameLabel"), value: b.tt.name }, { label: t("bioLabel"), value: b.tt.bio }], b.tt.name + "\n\n" + b.tt.bio, 1);
    bioCard(b.li.network, [
      { label: t("nameLabel"), value: b.li.name },
      { label: t("headlineLabel"), value: b.li.headline },
      { label: t("aboutLabel"), value: b.li.about }
    ], b.li.name + "\n" + b.li.headline + "\n\n" + b.li.about, 2);
    document.getElementById("highlightsCard").innerHTML = '<div class="label">Highlights</div><div class="bio-box">' + escapeHtml(b.highlights) + '</div><div class="row-actions"><button type="button" class="btn secondary" id="copyHighlights">' + t("copy") + "</button></div>";
    document.getElementById("copyHighlights").onclick = function () { copyText(b.highlights); };
    document.getElementById("linkBioCard").innerHTML = '<div class="bio-box">' + escapeHtml(b.linkBio) + '</div><div class="row-actions"><button type="button" class="btn secondary" id="copyLinkBio">' + t("copy") + "</button></div>";
    document.getElementById("copyLinkBio").onclick = function () { copyText(b.linkBio); };
    document.getElementById("week0List").innerHTML = b.week0.map(function (i) { return "<li>" + escapeHtml(i) + "</li>"; }).join("");
    document.getElementById("guardList").innerHTML = b.guards.map(function (i) { return "<li>" + escapeHtml(i) + "</li>"; }).join("");
  }

  function openDayInStudio(day) {
    var loc = day[state.lang];
    var sug = (typeof DAY_SUGGESTIONS !== "undefined" && DAY_SUGGESTIONS[day.d]) || { network: "instagram", placement: "feed_portrait", template: "brand" };
    studio.network = sug.network;
    studio.placement = sug.placement;
    studio.template = sug.template;
    studio.hook = loc.hook;
    studio.sub = loc.caption.split(".")[0] + ".";
    studio.caption = loc.caption + "\n\n" + loc.cta;
    studio.slides = [{ hook: studio.hook, sub: studio.sub, template: studio.template }];
    studio.slideIndex = 0;
    if (sug.template.indexOf("carousel") === 0) {
      studio.slides = [
        { hook: loc.hook, sub: loc.beat, template: "carousel_cover" },
        { hook: loc.caption.split(".")[0] + ".", sub: loc.cta, template: "carousel_content" },
        { hook: loc.cta, sub: "pixtolearn.com", template: "carousel_cta" }
      ];
    }
    setTab("studio");
    syncControlsFromStudio();
    renderSlideTabs();
    renderStudio();
    saveStore();
  }

  function renderCalendar() {
    var list = document.getElementById("calendarList");
    list.innerHTML = "";
    DAYS.forEach(function (day) {
      if (state.calFilter !== "all" && day.tag !== state.calFilter) return;
      var loc = day[state.lang];
      var st = approvalStatus(day.d);
      var nets = (typeof dayNetworks === "function" ? dayNetworks(day) : ["instagram", "tiktok"]).join(" | ");
      var sug = (typeof DAY_SUGGESTIONS !== "undefined" && DAY_SUGGESTIONS[day.d]) || {};
      var el = document.createElement("article");
      el.className = "day";
      el.innerHTML =
        '<div class="day-num">' + t("day") + " " + day.d + "<small>" + escapeHtml(day.tag) + "</small></div>" +
        "<div>" +
        '<div><span class="pill">' + escapeHtml(loc.beat) + "</span>" +
        '<span class="pill amber">' + escapeHtml(day.format) + "</span>" +
        '<span class="pill slate">' + escapeHtml(nets) + "</span>" +
        '<span class="pill ' + (st === "posted" ? "ok" : st === "approved" ? "amber" : "warn") + '">' + st + "</span></div>" +
        '<p style="margin:.55rem 0 .25rem"><strong>' + t("hook") + ":</strong> " + escapeHtml(loc.hook) + "</p>" +
        '<div class="day-caption">' + escapeHtml(loc.caption) + "</div>" +
        '<p class="meta" style="margin:0"><strong>' + t("cta") + ":</strong> " + escapeHtml(loc.cta) +
        " | Studio: " + escapeHtml((sug.network || "instagram") + " / " + (sug.template || "brand")) + "</p>" +
        '<div class="row-actions" style="margin-top:.55rem">' +
        '<button type="button" class="btn secondary copy-day">' + t("copy") + "</button>" +
        '<button type="button" class="btn pink to-studio">' + t("btnToStudio") + "</button>" +
        "</div></div>";
      var payload = t("day") + " " + day.d + " | " + loc.beat + "\n" + t("hook") + ": " + loc.hook + "\n\n" + loc.caption + "\n\n" + t("cta") + ": " + loc.cta;
      el.querySelector(".copy-day").onclick = function () { copyText(payload); };
      el.querySelector(".to-studio").onclick = function () { openDayInStudio(day); };
      list.appendChild(el);
    });
  }

  function fillSelect(sel, items) {
    sel.innerHTML = items.map(function (it) {
      return '<option value="' + it.id + '">' + escapeHtml(it.label) + "</option>";
    }).join("");
  }
  function renderGeneratorForm() {
    var L = state.lang;
    fillSelect(document.getElementById("gPillar"), GEN.pillars[L]);
    fillSelect(document.getElementById("gAudience"), GEN.audiences[L]);
    fillSelect(document.getElementById("gProduct"), GEN.products[L]);
    fillSelect(document.getElementById("gAngle"), GEN.angles[L]);
    fillSelect(document.getElementById("gCta"), GEN.ctas[L]);
  }

  function generatePosts() {
    var L = state.lang;
    var pillar = document.getElementById("gPillar").value;
    var audience = document.getElementById("gAudience").value;
    var product = document.getElementById("gProduct").value;
    var angle = document.getElementById("gAngle").value;
    var ctaId = document.getElementById("gCta").value;
    var extra = (document.getElementById("gExtra").value || "").trim();
    var ctaLine = GEN.ctas[L].find(function (c) { return c.id === ctaId; }).line;
    var productLine = PRODUCT_BLURB[L][product];
    var open = AUDIENCE_OPEN[L][audience];
    var detail = extra ? (L === "es" ? " Detalle: " + extra + "." : " Detail: " + extra + ".") : "";
    var hookBank = L === "es"
      ? { problem: "Cuando desaparece el habla, lo visual permanece.", product: "Hecho para sesiones reales, no para la estanteria.", tip: "Menos hablar. Menos adivinar. Mas claridad.", offer: "Un camino claro. Empieza hoy.", story: "Los visuales viajan mas lejos que las palabras.", demo: "Muestra la secuencia: objetivo al frente, pasos al dorso." }
      : { problem: "When speech disappears, visuals stay.", product: "Built for real sessions, not the shelf.", tip: "Less talking. Less guessing. More clarity.", offer: "One clear path. Start today.", story: "Visuals travel farther than words.", demo: "Show the sequence: goal on the front, steps on the reverse." };
    var hook = hookBank[angle] || (L === "es" ? "Porque lo visual habla mas alto." : "Because visuals speak louder.");
    state.lastHook = hook;
    var bodyCore = open + " " + productLine + (L === "es" ? " ayuda a crear estructura y reducir sobrecarga." : " helps create structure and reduce overload.") + detail;
    if (pillar === "method") bodyCore += L === "es" ? " El metodo importa: las herramientas solas no bastan." : " Method matters: tools alone are not enough.";
    if (pillar === "impact") bodyCore += L === "es" ? " El mismo lenguaje visual viaja del borde local al mundo." : " The same visual language stretches from your local pool worldwide.";
    var ig = hook + "\n\n" + bodyCore + "\n\n" + ctaLine + "\n\n#PixtoLearn #VisualLearning #SEN";
    var tt = "HOOK (0-2s):\n" + hook + "\n\nBODY (2-20s):\n" + bodyCore + "\n\nCTA:\n" + ctaLine;
    var li = hook + "\n\n" + bodyCore + "\n\n" + ctaLine + "\n\nwww.pixtolearn.com";
    var visual = "Network-aware Studio draft. Brand #D03860 | #E8A840 | #88B0C0 | #14242B." + (extra ? " " + extra : "");
    var tags = "#PixtoLearn #VisualLearning #SEN #InclusiveEducation #AdaptiveSwimming #VisualSupports #clubSENsational";
    var outs = document.getElementById("genOutputs");
    var blocks = [
      { title: t("outIg"), text: ig }, { title: t("outTt"), text: tt }, { title: t("outLi"), text: li },
      { title: t("outVisual"), text: visual }, { title: t("outTags"), text: tags }
    ];
    outs.innerHTML = "";
    generatePosts._all = blocks.map(function (b) { return b.title.toUpperCase() + "\n" + b.text; }).join("\n\n---\n\n");
    generatePosts._hook = hook;
    generatePosts._caption = bodyCore + "\n\n" + ctaLine;
    blocks.forEach(function (b) {
      var card = document.createElement("div");
      card.className = "card";
      card.innerHTML = '<div class="label">' + escapeHtml(b.title) + '</div><div class="out-box"></div><div class="row-actions"><button type="button" class="btn secondary">' + t("copy") + "</button></div>";
      card.querySelector(".out-box").textContent = b.text;
      card.querySelector("button").onclick = function () { copyText(b.text); };
      outs.appendChild(card);
    });
  }

  function weekDays(weekNum) {
    var start = (weekNum - 1) * 7 + 1;
    return DAYS.filter(function (d) { return d.d >= start && d.d < start + 7; });
  }
  function weekMarkdown(weekNum) {
    var days = weekDays(weekNum);
    var lines = ["# PixtoLearn Launch Week " + weekNum, ""];
    days.forEach(function (day) {
      var loc = day[state.lang];
      var sug = DAY_SUGGESTIONS[day.d] || {};
      lines.push("## " + t("day") + " " + day.d + " | " + loc.beat);
      lines.push("- Status: " + approvalStatus(day.d));
      lines.push("- Networks: " + dayNetworks(day).join(", "));
      lines.push("- Studio: " + (sug.network || "") + " / " + (sug.placement || "") + " / " + (sug.template || ""));
      lines.push("- Hook: " + loc.hook);
      lines.push("- Caption: " + loc.caption);
      lines.push("- CTA: " + loc.cta);
      lines.push("");
    });
    return lines.join("\n");
  }
  function weekCsv(weekNum) {
    var rows = ["day,tag,networks,studio,status,hook,caption,cta"];
    weekDays(weekNum).forEach(function (day) {
      var loc = day[state.lang];
      var sug = DAY_SUGGESTIONS[day.d] || {};
      function q(s) { return '"' + String(s).replace(/"/g, '""') + '"'; }
      rows.push([day.d, day.tag, dayNetworks(day).join("|"), (sug.network || "") + "/" + (sug.template || ""), approvalStatus(day.d), loc.hook, loc.caption, loc.cta].map(q).join(","));
    });
    return rows.join("\n");
  }

  function fillPhotoGroups() {
    var sel = document.getElementById("photoGroup");
    if (!sel) return;
    var groups = ["all"];
    (state.assetCatalog.assets || []).forEach(function (a) {
      if (groups.indexOf(a.group) < 0) groups.push(a.group);
    });
    sel.innerHTML = groups.map(function (g) {
      return '<option value="' + escapeHtml(g) + '">' + escapeHtml(g === "all" ? (state.lang === "es" ? "Todas" : "All") : g) + "</option>";
    }).join("");
  }

  function renderPhotoGrid() {
    var grid = document.getElementById("photoGrid");
    if (!grid) return;
    var groupFilter = (document.getElementById("photoGroup") || {}).value || "all";
    var countEl = document.getElementById("photoCount");
    var total = (state.assetCatalog.assets || []).length;
    var shown = 0;
    grid.innerHTML = "";
    (state.assetCatalog.assets || []).forEach(function (asset) {
      if (groupFilter !== "all" && asset.group !== groupFilter) return;
      if (studio.consentOnly && asset.consent === "review") return;
      shown += 1;
      var label = asset.label || asset.id || "asset";
      var btn = document.createElement("button");
      btn.type = "button";
      btn.title = label + " (" + (asset.group || "") + ", " + (asset.consent || "safe") + ")";
      if (state.bgAsset && state.bgAsset.id === asset.id) btn.classList.add("active");
      var img = document.createElement("img");
      img.src = asset.thumb || asset.path;
      img.alt = label;
      img.loading = "lazy";
      btn.appendChild(img);
      btn.onclick = function () {
        grid.querySelectorAll("button").forEach(function (b) { b.classList.toggle("active", b === btn); });
        // Load full-resolution path for canvas, even if grid shows thumb
        loadAsset(asset, null);
        var full = new Image();
        full.onload = function () { loadAsset(asset, full); };
        full.src = asset.path;
        if (studio.bgVariant === "ink" || studio.bgVariant === "foam") {
          studio.bgVariant = "photo";
          setVal("sBgVariant", "photo");
        }
      };
      grid.appendChild(btn);
    });
    if (countEl) {
      countEl.textContent = state.lang === "es"
        ? ("Mostrando " + shown + " de " + total + " assets")
        : ("Showing " + shown + " of " + total + " assets");
    }
  }

  function loadAsset(asset, thumb) {
    state.bgAsset = asset;
    if (thumb && thumb.complete && thumb.naturalWidth) {
      state.bgImage = thumb;
      renderStudio();
      saveStore();
      return;
    }
    var img = new Image();
    img.onload = function () { state.bgImage = img; renderStudio(); saveStore(); };
    img.onerror = function () {
      state.bgImage = null;
      toast(state.lang === "es" ? "No se pudo cargar la foto" : "Photo failed to load");
      renderStudio();
    };
    img.src = asset.path;
  }

  function renderStudio() {
    readControlsToStudio();
    ensureSlides();
    var canvas = document.getElementById("studioCanvas");
    if (!canvas || typeof renderTemplate !== "function") return;
    var placement = getPlacement(studio.network, studio.placement);
    var draft = currentDraft();
    canvas.width = placement.w;
    canvas.height = placement.h;
    var ctx = canvas.getContext("2d");
    var tplId = studio.slides[studio.slideIndex].template || studio.template;
    renderTemplate(ctx, tplId, placement, draft, state.bgImage, studio.showSafe);
    var net = getNetwork(studio.network);
    document.getElementById("studioMeta").textContent =
      (net.label[state.lang] || net.label.en) + "  |  " +
      (placement.label[state.lang] || placement.label.en) + "  |  " +
      placement.w + " x " + placement.h +
      (state.bgAsset ? "  |  " + state.bgAsset.label : "");
    updatePostChrome(canvas);
    renderFeedGrid();
  }

  function updatePostChrome(canvas) {
    var media = document.getElementById("chromeMedia");
    var handle = document.getElementById("chromeHandle");
    var meta = document.getElementById("chromeMeta");
    var actions = document.getElementById("chromeActions");
    var caption = document.getElementById("chromeCaption");
    var chrome = document.getElementById("postChrome");
    if (!media) return;
    var net = getNetwork(studio.network);
    chrome.className = "post-chrome " + (net.chrome || "");
    handle.textContent = net.handle;
    var actionMap = {
      ig: "Like  |  Comment  |  Share  |  Save",
      tt: "Like  |  Comment  |  Favourite  |  Share",
      li: "Like  |  Comment  |  Repost  |  Send",
      fb: "Like  |  Comment  |  Share",
      pin: "Save  |  Share",
      yt: "Like  |  Comment  |  Share  |  Save"
    };
    actions.textContent = actionMap[net.chrome] || actionMap.ig;
    meta.textContent = (placementKindLabel() + "  |  PixtoLearn");
    caption.textContent = studio.caption || (currentDraft().hook + "\n\n" + (currentDraft().sub || ""));
    media.innerHTML = "";
    var img = document.createElement("img");
    img.alt = "Preview";
    try { img.src = canvas.toDataURL("image/png"); } catch (e) { img.alt = "Preview unavailable"; }
    media.appendChild(img);
  }

  function placementKindLabel() {
    var p = getPlacement(studio.network, studio.placement);
    return p.label[state.lang] || p.label.en;
  }

  function feedKey() { return studio.network; }

  function renderFeedGrid() {
    var grid = document.getElementById("feedGrid");
    var title = document.getElementById("feedTitle");
    if (!grid) return;
    var net = getNetwork(studio.network);
    var slots = store.feed[feedKey()] || [];
    var count = net.grid.cols * net.grid.rows;
    title.textContent = (net.label[state.lang] || net.label.en) + "  |  profile / feed";
    grid.className = "feed-grid feed-" + net.chrome;
    grid.style.gridTemplateColumns = "repeat(" + net.grid.cols + ", 1fr)";
    grid.innerHTML = "";
    for (var i = 0; i < count; i++) {
      var slot = document.createElement("div");
      var aspectClass = "feed-slot";
      if (net.chrome === "tt" || net.id === "tiktok") aspectClass += " feed-slot-tall";
      if (net.chrome === "pin") aspectClass += " feed-slot-pin";
      if (net.chrome === "yt") aspectClass += " feed-slot-wide";
      slot.className = aspectClass;
      if (slots[i] && slots[i].dataUrl) {
        var img = document.createElement("img");
        img.src = slots[i].dataUrl;
        img.alt = slots[i].hook || "Post";
        slot.appendChild(img);
        var x = document.createElement("button");
        x.type = "button";
        x.className = "slot-x";
        x.textContent = "x";
        x.onclick = (function (idx) {
          return function (e) {
            e.stopPropagation();
            store.feed[feedKey()].splice(idx, 1);
            saveStore();
            renderFeedGrid();
          };
        })(i);
        slot.appendChild(x);
      } else {
        slot.innerHTML = '<div class="slot-empty">' + (i + 1) + "</div>";
      }
      grid.appendChild(slot);
    }
  }

  function addToFeed() {
    renderStudio();
    var canvas = document.getElementById("studioCanvas");
    try {
      var dataUrl = canvas.toDataURL("image/png");
      if (!store.feed[feedKey()]) store.feed[feedKey()] = [];
      store.feed[feedKey()].unshift({
        dataUrl: dataUrl,
        hook: currentDraft().hook,
        template: studio.template,
        placement: studio.placement,
        at: Date.now()
      });
      var max = getNetwork(studio.network).grid.cols * getNetwork(studio.network).grid.rows;
      store.feed[feedKey()] = store.feed[feedKey()].slice(0, max);
      saveStore();
      setPreview("feed");
      renderFeedGrid();
      toast(t("saved"));
    } catch (e) {
      toast("Export blocked. Serve via local server.");
    }
  }

  function downloadStudio() {
    studio.showSafe = false;
    var safeEl = document.getElementById("sSafeZones");
    if (safeEl) safeEl.checked = false;
    renderStudio();
    var canvas = document.getElementById("studioCanvas");
    var a = document.createElement("a");
    var name = "pixtolearn-" + studio.network + "-" + studio.placement + "-s" + (studio.slideIndex + 1) + ".png";
    a.download = name;
    try {
      a.href = canvas.toDataURL("image/png");
      a.click();
      toast(t("downloaded"));
    } catch (err) {
      toast("Export blocked (local photo CORS). Use local server.");
    }
    if (safeEl) {
      safeEl.checked = true;
      studio.showSafe = true;
      renderStudio();
    }
  }

  function downloadCarousel() {
    ensureSlides();
    var start = studio.slideIndex;
    var i = 0;
    function next() {
      if (i >= studio.slides.length) {
        studio.slideIndex = start;
        syncControlsFromStudio();
        renderSlideTabs();
        renderStudio();
        return;
      }
      studio.slideIndex = i;
      syncControlsFromStudio();
      studio.showSafe = false;
      renderStudio();
      var canvas = document.getElementById("studioCanvas");
      try {
        var a = document.createElement("a");
        a.download = "pixtolearn-" + studio.network + "-carousel-" + String(i + 1).padStart(2, "0") + ".png";
        a.href = canvas.toDataURL("image/png");
        a.click();
      } catch (e) {
        toast("Carousel export blocked. Use local server.");
        return;
      }
      i += 1;
      setTimeout(next, 250);
    }
    next();
  }

  function renderFeatureCards(targetId, data) {
    var el = document.getElementById(targetId);
    if (!el) return;
    el.innerHTML = "";
    data.forEach(function (item) {
      var card = document.createElement("div");
      card.className = "card feature-card";
      var prioClass = item.prio === "now" ? "" : item.prio === "next" ? " next" : " later";
      var prioLabel = item.prio === "now" ? (state.lang === "es" ? "Ahora" : "Now") : item.prio === "next" ? (state.lang === "es" ? "Siguiente" : "Next") : (state.lang === "es" ? "Despues" : "Later");
      card.innerHTML = '<div class="prio' + prioClass + '">' + prioLabel + "</div><h4></h4><p></p>";
      card.querySelector("h4").textContent = item.title;
      card.querySelector("p").textContent = item.body;
      el.appendChild(card);
    });
  }

  function setOps(which) {
    state.ops = which;
    document.querySelectorAll(".subtabs button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-ops") === which);
    });
    document.querySelectorAll(".ops-panel").forEach(function (p) {
      p.classList.toggle("active", p.id === "ops-" + which);
    });
    if (which === "approve") renderApprovals();
    if (which === "queue") renderQueue();
    if (which === "ugc") renderUgc();
    if (which === "story") renderStoryboard();
  }

  function setPreview(which) {
    state.preview = which;
    document.querySelectorAll("#previewTabs button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-preview") === which);
    });
    document.querySelectorAll(".preview-panel").forEach(function (p) {
      p.classList.toggle("active", p.id === "preview-" + which);
    });
    if (which !== "canvas") renderStudio();
  }

  function renderApprovals() {
    var wrap = document.getElementById("approveTable");
    var rows = DAYS.map(function (day) {
      var loc = day[state.lang];
      var st = approvalStatus(day.d);
      var sug = DAY_SUGGESTIONS[day.d] || {};
      return "<tr><td>" + day.d + "</td><td>" + escapeHtml(loc.beat) + "</td><td>" + escapeHtml((sug.network || "") + " / " + (sug.template || "")) + "</td><td>" + escapeHtml(loc.hook) +
        '</td><td><select class="status-select" data-day="' + day.d + '">' +
        ["draft", "approved", "posted"].map(function (s) {
          return '<option value="' + s + '"' + (s === st ? " selected" : "") + ">" + s + "</option>";
        }).join("") + "</select></td></tr>";
    }).join("");
    wrap.innerHTML = '<div class="table-wrap"><table class="kit"><thead><tr><th>#</th><th>Beat</th><th>Studio</th><th>Hook</th><th>Status</th></tr></thead><tbody>' + rows + "</tbody></table></div>";
    wrap.querySelectorAll("select").forEach(function (sel) {
      sel.onchange = function () { setApproval(sel.getAttribute("data-day"), sel.value); renderCalendar(); };
    });
  }

  function renderQueue() {
    var approved = DAYS.filter(function (d) { return approvalStatus(d.d) === "approved" || approvalStatus(d.d) === "posted"; });
    var lines = approved.map(function (day) {
      var loc = day[state.lang];
      var sug = DAY_SUGGESTIONS[day.d] || {};
      var nets = dayNetworks(day);
      return "DAY " + day.d + " [" + approvalStatus(day.d) + "]\nNETWORKS: " + nets.join(", ") +
        "\nSTUDIO: " + (sug.network || "instagram") + " / " + (sug.placement || "feed_portrait") + " / " + (sug.template || "brand") +
        "\nFILENAME: pixtolearn-" + (sug.network || "instagram") + "-" + (sug.placement || "feed") + "-day" + day.d + ".png" +
        "\nHOOK: " + loc.hook + "\nCAPTION: " + loc.caption + "\nCTA: " + loc.cta + "\n---";
    });
    var box = document.getElementById("queueBox");
    box.textContent = lines.length ? lines.join("\n") : (state.lang === "es" ? "No hay posts approved/posted todavia." : "No approved/posted posts yet.");
    renderQueue._text = box.textContent;
  }

  function renderUgc() {
    var list = document.getElementById("ugcList");
    list.innerHTML = "";
    (store.ugc || []).forEach(function (item, idx) {
      var card = document.createElement("div");
      card.className = "card flat";
      card.innerHTML = "<strong>" + escapeHtml(item.source || "UGC") + "</strong>" +
        '<div class="meta">' + escapeHtml(item.consent || "") + " | " + escapeHtml(item.networks || "") + "</div>" +
        '<div class="bio-box">' + escapeHtml(item.notes || "") + "</div>" +
        '<button type="button" class="btn secondary">Remove</button>';
      card.querySelector("button").onclick = function () {
        store.ugc.splice(idx, 1); saveStore(); renderUgc();
      };
      list.appendChild(card);
    });
  }

  function renderStoryboard() {
    var s = store.story || {
      hook: state.lang === "es" ? "Cuando desaparece el habla, lo visual permanece." : "When speech disappears, visuals stay.",
      demo: state.lang === "es" ? "Mostrar Primero-Después-Luego en el borde." : "Show First-Next-Then stands poolside.",
      cta: "Link in bio: packs / Academy",
      shot: state.lang === "es" ? "Manos + cartas impermeables. Sin caras sin consentimiento." : "Hands + waterproof cards. No faces without consent.",
      vo: "",
      onscreen: state.lang === "es" ? "Primero → Despues → Luego" : "First → Next → Then"
    };
    setVal("storyHook", s.hook);
    setVal("storyDemo", s.demo);
    setVal("storyCta", s.cta);
    setVal("storyShot", s.shot);
    setVal("storyVo", s.vo || "");
    setVal("storyOnscreen", s.onscreen || "");
  }

  function buildUtmLinks() {
    var base = getVal("utmBase") || "https://www.pixtolearn.com/shop";
    var campaign = getVal("utmCampaign") || "launch28";
    var content = getVal("utmContent") || "week1";
    var lines = listNetworks().map(function (n) {
      var url;
      try {
        var u = new URL(base);
        u.searchParams.set("utm_source", n.utmSource);
        u.searchParams.set("utm_medium", n.utmMedium);
        u.searchParams.set("utm_campaign", campaign);
        u.searchParams.set("utm_content", content);
        url = u.toString();
      } catch (e) {
        url = base + (base.indexOf("?") >= 0 ? "&" : "?") + "utm_source=" + n.utmSource + "&utm_medium=" + n.utmMedium + "&utm_campaign=" + encodeURIComponent(campaign) + "&utm_content=" + encodeURIComponent(content);
      }
      return (n.label.en || n.id).toUpperCase() + "\n" + url;
    });
    document.getElementById("utmOut").textContent = lines.join("\n\n") + "\n\nShort-link tip: name them pl-" + campaign + "-" + content + "-ig (etc).";
  }

  function scoreMetrics() {
    var saves = Number(getVal("mSaves") || 0);
    var shares = Number(getVal("mShares") || 0);
    var clicks = Number(getVal("mClicks") || 0);
    var reach = Number(getVal("mReach") || 1);
    var saveRate = saves / reach;
    var shareRate = shares / reach;
    var ctr = clicks / reach;
    store.metrics = { saves: saves, shares: shares, clicks: clicks, reach: reach };
    saveStore();
    var tips = [];
    if (saveRate >= 0.04) tips.push("High save rate: double tip + First-Next-Then templates.");
    else tips.push("Low save rate: more actionable tips, fewer brand-only posts.");
    if (shareRate >= 0.02) tips.push("Good shares: push impact and before/after problem templates.");
    else tips.push("Low shares: try problem/solution hard cut creatives.");
    if (ctr >= 0.01) tips.push("Healthy CTR: lean into product and Academy CTAs.");
    else tips.push("Low CTR: sharper CTA labels + per-network UTMs.");
    tips.push("Suggested mix: 30% tips, 25% product, 20% Academy, 15% impact, 10% offer.");
    var max = Math.max(saveRate, shareRate, ctr, 0.0001);
    document.getElementById("metricBars").innerHTML =
      [["Saves", saveRate], ["Shares", shareRate], ["CTR", ctr]].map(function (row) {
        var pct = Math.min(100, Math.round((row[1] / max) * 100));
        return '<div class="metric-row"><span>' + row[0] + '</span><div class="bar"><i style="width:' + pct + '%"></i></div><span>' + (row[1] * 100).toFixed(2) + "%</span></div>";
      }).join("");
    document.getElementById("metricTips").innerHTML = tips.map(function (x) { return "<li>" + escapeHtml(x) + "</li>"; }).join("");
  }

  function setTab(tab) {
    state.tab = tab;
    document.querySelectorAll(".tabs button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-tab") === tab);
    });
    document.querySelectorAll(".panel").forEach(function (p) {
      p.classList.toggle("active", p.id === "panel-" + tab);
    });
    if (tab === "studio") {
      fillNetworks();
      syncControlsFromStudio();
      fillPhotoGroups();
      renderPhotoGrid();
      renderSlideTabs();
      renderStudio();
    }
    if (tab === "ops") setOps(state.ops);
  }

  function refresh() {
    applyUiStrings();
    renderBios();
    renderCalendar();
    renderGeneratorForm();
    document.getElementById("genOutputs").innerHTML = "";
    renderFeatureCards("videoIdeas", VIDEO_IDEAS[state.lang]);
    fillNetworks();
    fillPhotoGroups();
    if (state.tab === "studio") {
      syncControlsFromStudio();
      renderPhotoGrid();
      renderSlideTabs();
      renderStudio();
    }
    if (state.tab === "ops") setOps(state.ops);
  }

  function loadAssetsCatalog() {
    return fetch("social-kit-assets.json", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (json) {
        state.assetCatalog = json;
        if (typeof ASSET_CATALOG !== "undefined") ASSET_CATALOG = json;
      })
      .catch(function () {
        state.assetCatalog = typeof ASSET_CATALOG !== "undefined" ? ASSET_CATALOG : { assets: [] };
      });
  }

  // events
  document.querySelectorAll(".tabs button").forEach(function (b) {
    b.addEventListener("click", function () { setTab(b.getAttribute("data-tab")); });
  });
  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { state.lang = b.getAttribute("data-lang"); refresh(); });
  });
  document.getElementById("calFilters").addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-filter]");
    if (!btn) return;
    state.calFilter = btn.getAttribute("data-filter");
    document.querySelectorAll("#calFilters button").forEach(function (x) { x.classList.toggle("active", x === btn); });
    renderCalendar();
  });
  document.querySelectorAll(".subtabs button").forEach(function (b) {
    b.addEventListener("click", function () { setOps(b.getAttribute("data-ops")); });
  });
  document.querySelectorAll("#previewTabs button").forEach(function (b) {
    b.addEventListener("click", function () { setPreview(b.getAttribute("data-preview")); });
  });

  document.getElementById("btnGenerate").onclick = generatePosts;
  document.getElementById("btnCopyAll").onclick = function () {
    if (!generatePosts._all) generatePosts();
    if (generatePosts._all) copyText(generatePosts._all);
  };
  document.getElementById("btnToStudio").onclick = function () {
    if (!generatePosts._hook) generatePosts();
    studio.hook = generatePosts._hook || studio.hook;
    studio.sub = (generatePosts._caption || studio.sub).split("\n")[0];
    studio.caption = generatePosts._caption || studio.caption;
    studio.slides = [{ hook: studio.hook, sub: studio.sub, template: studio.template || "tip" }];
    studio.slideIndex = 0;
    setTab("studio");
  };

  document.getElementById("sNetwork").addEventListener("change", function () {
    readControlsToStudio();
    fillPlacements();
    studio.placement = listPlacements(studio.network)[0].id;
    setVal("sPlacement", studio.placement);
    renderStudio();
    saveStore();
  });
  ["sPlacement", "sTemplate", "sBgVariant", "sHook", "sSub", "sFoot", "sCtaLabel", "sZoom", "sOverlay", "sCropX", "sCropY"].forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", function () { renderStudio(); });
    el.addEventListener("change", function () { renderStudio(); saveStore(); });
  });
  document.getElementById("sSafeZones").onchange = function () { renderStudio(); saveStore(); };
  document.getElementById("sConsentOnly").onchange = function () { readControlsToStudio(); renderPhotoGrid(); saveStore(); };
  document.getElementById("photoGroup").onchange = renderPhotoGrid;
  document.getElementById("btnRender").onclick = function () { renderStudio(); saveStore(); };
  document.getElementById("btnDownload").onclick = downloadStudio;
  document.getElementById("btnDownloadAll").onclick = downloadCarousel;
  document.getElementById("btnClearBg").onclick = function () {
    state.bgAsset = null; state.bgImage = null; studio.bgVariant = "ink"; setVal("sBgVariant", "ink");
    renderPhotoGrid(); renderStudio(); saveStore();
  };
  document.getElementById("btnAddFeed").onclick = addToFeed;
  document.getElementById("btnClearFeed").onclick = function () {
    store.feed[feedKey()] = [];
    saveStore();
    renderFeedGrid();
  };

  document.getElementById("btnSlideAdd").onclick = function () {
    readControlsToStudio();
    studio.slides.push({ hook: studio.hook, sub: studio.sub, template: "carousel_content" });
    studio.slideIndex = studio.slides.length - 1;
    syncControlsFromStudio();
    renderSlideTabs();
    renderStudio();
    saveStore();
  };
  document.getElementById("btnSlideDup").onclick = function () {
    readControlsToStudio();
    ensureSlides();
    var copy = JSON.parse(JSON.stringify(studio.slides[studio.slideIndex]));
    studio.slides.splice(studio.slideIndex + 1, 0, copy);
    studio.slideIndex += 1;
    syncControlsFromStudio();
    renderSlideTabs();
    renderStudio();
    saveStore();
  };
  document.getElementById("btnSlideDel").onclick = function () {
    readControlsToStudio();
    ensureSlides();
    if (studio.slides.length === 1) return;
    studio.slides.splice(studio.slideIndex, 1);
    studio.slideIndex = Math.max(0, studio.slideIndex - 1);
    syncControlsFromStudio();
    renderSlideTabs();
    renderStudio();
    saveStore();
  };

  document.getElementById("btnCopyWeek").onclick = function () { copyText(weekMarkdown(Number(getVal("weekNum") || 1))); };
  document.getElementById("btnMd").onclick = function () {
    var w = Number(getVal("weekNum") || 1);
    downloadBlob("pixtolearn-week-" + w + ".md", weekMarkdown(w), "text/markdown;charset=utf-8");
  };
  document.getElementById("btnCsv").onclick = function () {
    var w = Number(getVal("weekNum") || 1);
    downloadBlob("pixtolearn-week-" + w + ".csv", weekCsv(w), "text/csv;charset=utf-8");
  };
  document.getElementById("btnBuildUtm").onclick = buildUtmLinks;
  document.getElementById("btnCopyUtm").onclick = function () { copyText(document.getElementById("utmOut").textContent || ""); };
  document.getElementById("btnExportQueue").onclick = function () { copyText(renderQueue._text || ""); };
  document.getElementById("btnScore").onclick = scoreMetrics;
  document.getElementById("btnAddUgc").onclick = function () {
    store.ugc = store.ugc || [];
    store.ugc.unshift({
      source: getVal("ugcSource") || "Partner",
      consent: getVal("ugcConsent") || "pending",
      networks: getVal("ugcNetworks") || "IG/TikTok",
      notes: getVal("ugcNotes") || ""
    });
    saveStore();
    setVal("ugcNotes", "");
    renderUgc();
    toast(t("saved"));
  };
  document.getElementById("btnExportUgc").onclick = function () {
    var rows = ["source,consent,networks,notes"];
    (store.ugc || []).forEach(function (u) {
      function q(s) { return '"' + String(s || "").replace(/"/g, '""') + '"'; }
      rows.push([u.source, u.consent, u.networks, u.notes].map(q).join(","));
    });
    downloadBlob("pixtolearn-ugc.csv", rows.join("\n"), "text/csv;charset=utf-8");
  };
  document.getElementById("btnSaveStory").onclick = function () {
    store.story = {
      hook: getVal("storyHook"),
      demo: getVal("storyDemo"),
      cta: getVal("storyCta"),
      shot: getVal("storyShot"),
      vo: getVal("storyVo"),
      onscreen: getVal("storyOnscreen")
    };
    saveStore();
    toast(t("saved"));
  };
  document.getElementById("btnStoryStudio").onclick = function () {
    studio.network = "tiktok";
    studio.placement = "cover";
    studio.template = "reel";
    studio.hook = getVal("storyHook");
    studio.sub = getVal("storyOnscreen") || getVal("storyDemo");
    studio.caption = getVal("storyDemo") + "\n\n" + getVal("storyCta");
    studio.slides = [{ hook: studio.hook, sub: studio.sub, template: "reel" }];
    studio.slideIndex = 0;
    setTab("studio");
  };
  document.getElementById("btnCopyStory").onclick = function () {
    copyText("REEL STORYBOARD (20s)\n0-2s HOOK: " + getVal("storyHook") + "\n2-12s DEMO: " + getVal("storyDemo") + "\n12-20s CTA: " + getVal("storyCta") + "\nSHOT: " + getVal("storyShot") + "\nVO: " + getVal("storyVo") + "\nON-SCREEN: " + getVal("storyOnscreen"));
  };
  document.getElementById("btnStoryMd").onclick = function () {
    var md = "# PixtoLearn Reel storyboard\n\n" +
      "## 0-2s Hook\n" + getVal("storyHook") + "\n\n" +
      "## 2-12s Demo\n" + getVal("storyDemo") + "\n\n" +
      "## 12-20s CTA\n" + getVal("storyCta") + "\n\n" +
      "## Shot\n" + getVal("storyShot") + "\n\n" +
      "## Voiceover\n" + getVal("storyVo") + "\n\n" +
      "## On-screen text\n" + getVal("storyOnscreen") + "\n";
    downloadBlob("pixtolearn-storyboard.md", md, "text/markdown;charset=utf-8");
  };

  document.getElementById("btnBackup").onclick = function () {
    store.studio = snapshotStudio();
    downloadBlob("pixtolearn-social-project.json", JSON.stringify(store, null, 2), "application/json;charset=utf-8");
  };
  document.getElementById("importProject").onchange = function (e) {
    var file = e.target.files && e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var data = JSON.parse(reader.result);
        store = data;
        if (!store.feed) store.feed = {};
        localStorage.setItem(STORE_KEY, JSON.stringify(store));
        applyStudioSnapshot(store.studio);
        refresh();
        toast(t("saved"));
      } catch (err) {
        toast("Invalid project JSON");
      }
    };
    reader.readAsText(file);
  };

  // boot
  if (store.studio) applyStudioSnapshot(store.studio);
  loadAssetsCatalog().then(function () {
    refresh();
    buildUtmLinks();
    if (store.metrics) {
      setVal("mSaves", store.metrics.saves || "");
      setVal("mShares", store.metrics.shares || "");
      setVal("mClicks", store.metrics.clicks || "");
      setVal("mReach", store.metrics.reach || "");
    }
  });
})();
