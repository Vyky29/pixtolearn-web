/* PixtoLearn Social Studio V2 - network + placement registry */
var NETWORKS = {
  instagram: {
    id: "instagram",
    label: { en: "Instagram", es: "Instagram" },
    handle: "@pixtolearn",
    utmSource: "instagram",
    utmMedium: "social",
    chrome: "ig",
    grid: { cols: 3, rows: 4, aspect: 1 },
    placements: {
      feed_portrait: {
        id: "feed_portrait",
        label: { en: "Feed 4:5", es: "Feed 4:5" },
        w: 1080, h: 1350,
        safe: { top: 0.06, right: 0.06, bottom: 0.08, left: 0.06 },
        kind: "feed"
      },
      feed_square: {
        id: "feed_square",
        label: { en: "Feed 1:1", es: "Feed 1:1" },
        w: 1080, h: 1080,
        safe: { top: 0.06, right: 0.06, bottom: 0.08, left: 0.06 },
        kind: "feed"
      },
      carousel: {
        id: "carousel",
        label: { en: "Carousel slide", es: "Slide carrusel" },
        w: 1080, h: 1350,
        safe: { top: 0.06, right: 0.06, bottom: 0.1, left: 0.06 },
        kind: "carousel"
      },
      story: {
        id: "story",
        label: { en: "Story 9:16", es: "Story 9:16" },
        w: 1080, h: 1920,
        safe: { top: 0.14, right: 0.08, bottom: 0.18, left: 0.08 },
        kind: "story"
      },
      reel: {
        id: "reel",
        label: { en: "Reel cover", es: "Portada Reel" },
        w: 1080, h: 1920,
        safe: { top: 0.16, right: 0.18, bottom: 0.22, left: 0.08 },
        kind: "reel"
      }
    }
  },
  tiktok: {
    id: "tiktok",
    label: { en: "TikTok", es: "TikTok" },
    handle: "@pixtolearn",
    utmSource: "tiktok",
    utmMedium: "social",
    chrome: "tt",
    grid: { cols: 3, rows: 3, aspect: 9 / 16 },
    placements: {
      video: {
        id: "video",
        label: { en: "Video / photo 9:16", es: "Video / foto 9:16" },
        w: 1080, h: 1920,
        safe: { top: 0.14, right: 0.22, bottom: 0.24, left: 0.08 },
        kind: "reel"
      },
      cover: {
        id: "cover",
        label: { en: "Cover", es: "Portada" },
        w: 1080, h: 1920,
        safe: { top: 0.16, right: 0.2, bottom: 0.22, left: 0.08 },
        kind: "reel"
      }
    }
  },
  linkedin: {
    id: "linkedin",
    label: { en: "LinkedIn", es: "LinkedIn" },
    handle: "PixtoLearn",
    utmSource: "linkedin",
    utmMedium: "social",
    chrome: "li",
    grid: { cols: 1, rows: 4, aspect: 1.91 },
    placements: {
      feed_portrait: {
        id: "feed_portrait",
        label: { en: "Feed 4:5", es: "Feed 4:5" },
        w: 1080, h: 1350,
        safe: { top: 0.07, right: 0.07, bottom: 0.1, left: 0.07 },
        kind: "feed"
      },
      feed_square: {
        id: "feed_square",
        label: { en: "Feed 1:1", es: "Feed 1:1" },
        w: 1080, h: 1080,
        safe: { top: 0.07, right: 0.07, bottom: 0.1, left: 0.07 },
        kind: "feed"
      },
      link: {
        id: "link",
        label: { en: "Link preview", es: "Vista previa link" },
        w: 1200, h: 627,
        safe: { top: 0.08, right: 0.06, bottom: 0.1, left: 0.06 },
        kind: "link"
      },
      document: {
        id: "document",
        label: { en: "Document / carousel", es: "Documento / carrusel" },
        w: 1080, h: 1080,
        safe: { top: 0.08, right: 0.08, bottom: 0.1, left: 0.08 },
        kind: "carousel"
      }
    }
  },
  facebook: {
    id: "facebook",
    label: { en: "Facebook", es: "Facebook" },
    handle: "PixtoLearn",
    utmSource: "facebook",
    utmMedium: "social",
    chrome: "fb",
    grid: { cols: 3, rows: 3, aspect: 1 },
    placements: {
      feed_square: {
        id: "feed_square",
        label: { en: "Feed 1:1", es: "Feed 1:1" },
        w: 1080, h: 1080,
        safe: { top: 0.06, right: 0.06, bottom: 0.1, left: 0.06 },
        kind: "feed"
      },
      feed_portrait: {
        id: "feed_portrait",
        label: { en: "Feed 4:5", es: "Feed 4:5" },
        w: 1080, h: 1350,
        safe: { top: 0.06, right: 0.06, bottom: 0.1, left: 0.06 },
        kind: "feed"
      },
      link: {
        id: "link",
        label: { en: "Link preview", es: "Vista previa link" },
        w: 1200, h: 630,
        safe: { top: 0.08, right: 0.06, bottom: 0.1, left: 0.06 },
        kind: "link"
      },
      story: {
        id: "story",
        label: { en: "Story / Reel", es: "Story / Reel" },
        w: 1080, h: 1920,
        safe: { top: 0.14, right: 0.1, bottom: 0.2, left: 0.08 },
        kind: "story"
      }
    }
  },
  pinterest: {
    id: "pinterest",
    label: { en: "Pinterest", es: "Pinterest" },
    handle: "PixtoLearn",
    utmSource: "pinterest",
    utmMedium: "social",
    chrome: "pin",
    grid: { cols: 2, rows: 3, aspect: 2 / 3 },
    placements: {
      pin: {
        id: "pin",
        label: { en: "Standard pin 2:3", es: "Pin estandar 2:3" },
        w: 1000, h: 1500,
        safe: { top: 0.08, right: 0.07, bottom: 0.12, left: 0.07 },
        kind: "feed"
      },
      idea: {
        id: "idea",
        label: { en: "Idea pin 9:16", es: "Idea pin 9:16" },
        w: 1080, h: 1920,
        safe: { top: 0.12, right: 0.08, bottom: 0.16, left: 0.08 },
        kind: "story"
      }
    }
  },
  youtube: {
    id: "youtube",
    label: { en: "YouTube", es: "YouTube" },
    handle: "PixtoLearn",
    utmSource: "youtube",
    utmMedium: "social",
    chrome: "yt",
    grid: { cols: 3, rows: 2, aspect: 16 / 9 },
    placements: {
      thumb: {
        id: "thumb",
        label: { en: "Thumbnail 16:9", es: "Miniatura 16:9" },
        w: 1280, h: 720,
        safe: { top: 0.1, right: 0.08, bottom: 0.12, left: 0.08 },
        kind: "link"
      },
      shorts: {
        id: "shorts",
        label: { en: "Shorts cover", es: "Portada Shorts" },
        w: 1080, h: 1920,
        safe: { top: 0.14, right: 0.12, bottom: 0.2, left: 0.08 },
        kind: "reel"
      },
      community: {
        id: "community",
        label: { en: "Community post", es: "Post comunidad" },
        w: 1200, h: 675,
        safe: { top: 0.08, right: 0.07, bottom: 0.1, left: 0.07 },
        kind: "feed"
      },
      banner: {
        id: "banner",
        label: { en: "Channel banner", es: "Banner canal" },
        w: 2560, h: 1440,
        safe: { top: 0.35, right: 0.2, bottom: 0.35, left: 0.2 },
        kind: "banner"
      }
    }
  }
};

function getNetwork(id) {
  return NETWORKS[id] || NETWORKS.instagram;
}

function getPlacement(networkId, placementId) {
  var net = getNetwork(networkId);
  return net.placements[placementId] || Object.values(net.placements)[0];
}

function listNetworks() {
  return Object.keys(NETWORKS).map(function (id) { return NETWORKS[id]; });
}

function listPlacements(networkId) {
  var net = getNetwork(networkId);
  return Object.keys(net.placements).map(function (id) { return net.placements[id]; });
}
