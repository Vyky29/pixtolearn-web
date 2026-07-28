(function () {
  const DATA_URL = "js/blog-data.json";

  function formatViews(n) {
    const v = Math.max(0, Math.floor(Number(n) || 0));
    if (v >= 10000) return (v / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    if (v >= 1000) return v.toLocaleString("en-GB");
    return String(v);
  }

  function shareTargets(url, title) {
    const u = encodeURIComponent(url);
    const t = encodeURIComponent(title);
    return [
      {
        id: "facebook",
        label: "Facebook",
        href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      },
      {
        id: "x",
        label: "X",
        href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      },
      {
        id: "whatsapp",
        label: "WhatsApp",
        href: `https://api.whatsapp.com/send?text=${t}%20${u}`,
      },
      {
        id: "email",
        label: "Email",
        href: `mailto:?subject=${t}&body=${t}%0A%0A${u}`,
      },
    ];
  }

  function iconSvg(id) {
    const icons = {
      facebook:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.6l.4-3H14V9z"/></svg>',
      x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h4.1l4.2 5.8L17.5 4H20l-6.1 7.2L20.4 20h-4.1l-4.5-6.2L7 20H4.4l6.4-7.6L4 4z"/></svg>',
      linkedin:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.5 9.5H3.7V20h2.8V9.5zM5.1 4A1.7 1.7 0 1 0 5.1 7.4 1.7 1.7 0 0 0 5.1 4zM20.3 20h-2.8v-5.4c0-1.5-.6-2.5-2-2.5-1 0-1.6.7-1.9 1.3-.1.3-.1.6-.1.9V20h-2.8s.0-9.2 0-10.5h2.8v1.5c.4-.7 1.3-1.8 3.2-1.8 2.3 0 4 1.5 4 4.8V20z"/></svg>',
      whatsapp:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3.2A8.7 8.7 0 0 0 4.4 16.3L3.2 20.8l4.6-1.2A8.7 8.7 0 1 0 12 3.2zm0 15.8c-1.4 0-2.7-.4-3.8-1l-.3-.2-2.3.6.6-2.2-.2-.3a6.4 6.4 0 1 1 6 3.1zm3.5-4.7c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1l-.6.7c-.1.2-.3.2-.5.1-.2-.1-.9-.3-1.7-1.1-.6-.6-1.1-1.3-1.2-1.5-.1-.2 0-.3.1-.5l.4-.5c.1-.1.1-.3.2-.4 0-.1 0-.3-.1-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.4 2.3.9 2.3.6 2.7.6.4 0 1.3-.5 1.5-1 .2-.5.2-.9.1-1 0-.1-.2-.2-.4-.3z"/></svg>',
      email:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm8 6.2L4.8 7.4V17h14.4V7.4L12 12.2zm0-1.5 7-4.2H5l7 4.2z"/></svg>',
      link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M10.6 13.4a3.5 3.5 0 0 1 0-5l2.1-2.1a3.5 3.5 0 1 1 5 5l-1 1-.9-.9 1-1a2.2 2.2 0 1 0-3.1-3.1l-2.1 2.1a2.2 2.2 0 0 0 0 3.1l.4.4-.9.9-.4-.4zm2.8-2.8a3.5 3.5 0 0 1 0 5l-2.1 2.1a3.5 3.5 0 1 1-5-5l1-1 .9.9-1 1a2.2 2.2 0 1 0 3.1 3.1l2.1-2.1a2.2 2.2 0 0 0 0-3.1l-.4-.4.9-.9.4.4z"/></svg>',
    };
    return icons[id] || "";
  }

  function buildShare(url, title) {
    const wrap = document.createElement("div");
    wrap.className = "blog-share";
    wrap.innerHTML = `<span class="blog-share-label">Share</span><div class="blog-share-actions"></div>`;
    const actions = wrap.querySelector(".blog-share-actions");

    shareTargets(url, title).forEach((t) => {
      const a = document.createElement("a");
      a.className = `blog-share-btn is-${t.id}`;
      a.href = t.href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", `Share on ${t.label}`);
      a.innerHTML = iconSvg(t.id);
      actions.appendChild(a);
    });

    const copy = document.createElement("button");
    copy.type = "button";
    copy.className = "blog-share-btn is-link";
    copy.setAttribute("aria-label", "Copy link");
    copy.innerHTML = iconSvg("link");
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(url);
        copy.classList.add("is-copied");
        copy.setAttribute("aria-label", "Link copied");
        setTimeout(() => {
          copy.classList.remove("is-copied");
          copy.setAttribute("aria-label", "Copy link");
        }, 1600);
      } catch (_) {
        window.prompt("Copy this link", url);
      }
    });
    actions.appendChild(copy);
    return wrap;
  }

  function viewKey(id) {
    return `pixto_blog_viewed_${id}`;
  }

  function storeKey(id) {
    return `pixto_blog_views_${id}`;
  }

  function resolveViews(post) {
    const seed = Number(post.seedViews) || 0;
    let extra = 0;
    try {
      extra = Number(localStorage.getItem(storeKey(post.id)) || 0);
    } catch (_) {}
    let total = seed + extra;
    try {
      if (sessionStorage.getItem(viewKey(post.id)) !== "1") {
        sessionStorage.setItem(viewKey(post.id), "1");
        const already = localStorage.getItem(viewKey(post.id)) === "1";
        if (!already) {
          localStorage.setItem(viewKey(post.id), "1");
          extra += 1;
          localStorage.setItem(storeKey(post.id), String(extra));
          total = seed + extra;
        }
      }
    } catch (_) {}
    return total;
  }

  function buildMeta(post, views) {
    const el = document.createElement("div");
    el.className = "blog-meta-bar";
    const cat = post.category
      ? `<a class="blog-cat-pill is-${post.category}" href="updates.html#${post.category}">${post.category}</a>`
      : "";
    el.innerHTML = `
      ${cat}
      <span>${post.dateLabel || ""}</span>
      <span>${post.minutes || 5} min read</span>
      <span class="blog-views" title="On-site reads for this article"><span data-blog-views>${formatViews(
        views
      )}</span> reads</span>
    `;
    return el;
  }

  function buildContinue(data, post) {
    const prev = data.posts.find((p) => p.id === post.prev && !p.resource);
    const next = data.posts.find((p) => p.id === post.next && !p.resource);
    if (!prev && !next) return null;

    const section = document.createElement("section");
    section.className = "blog-continue";
    section.innerHTML = `<h2>Continue reading</h2><div class="blog-continue-grid"></div>`;
    const grid = section.querySelector(".blog-continue-grid");

    const card = (item, label) => {
      const a = document.createElement("a");
      a.className = "blog-continue-card";
      a.href = item.slug;
      a.innerHTML = `
        <img src="${item.image}" alt="" loading="lazy" />
        <div>
          <span class="blog-continue-kicker">${label}</span>
          <strong>${item.title}</strong>
          <p>${item.excerpt}</p>
        </div>
      `;
      return a;
    };

    if (prev) grid.appendChild(card(prev, "Previous"));
    if (next) grid.appendChild(card(next, "Next"));
    return section;
  }

  async function enhanceArticle() {
    const article = document.querySelector("[data-blog-id]");
    if (!article) return;
    const id = article.getAttribute("data-blog-id");
    let data;
    try {
      const res = await fetch(DATA_URL, { cache: "no-cache" });
      data = await res.json();
    } catch (_) {
      return;
    }
    const post = data.posts.find((p) => p.id === id);
    if (!post) return;

    const url = location.href.split("#")[0];
    const title = post.title;
    const views = resolveViews(post);

    const toolbar = article.querySelector("[data-blog-toolbar]");
    if (toolbar) {
      toolbar.replaceChildren();
      toolbar.appendChild(buildMeta(post, views));
      toolbar.appendChild(buildShare(url, title));
    }

    const footer = article.querySelector("[data-blog-footer]");
    if (footer) {
      footer.replaceChildren();
      const shareAgain = buildShare(url, title);
      shareAgain.classList.add("is-footer");
      footer.appendChild(shareAgain);
      const cont = buildContinue(data, post);
      if (cont) footer.appendChild(cont);
    }
  }

  function filterUpdates() {
    const root = document.querySelector("[data-updates]");
    if (!root) return;

    const params = new URLSearchParams(location.search);
    const hash = (location.hash || "").replace("#", "");
    const active = params.get("cat") || hash || "all";

    root.querySelectorAll("[data-cat-card]").forEach((card) => {
      const id = card.getAttribute("data-cat-card");
      card.classList.toggle("is-active", id === active);
    });

    root.querySelectorAll("[data-post-cat]").forEach((post) => {
      const cat = post.getAttribute("data-post-cat");
      const show = active === "all" || active === cat;
      post.hidden = !show;
    });

    root.querySelectorAll("[data-cat-section]").forEach((sec) => {
      const id = sec.getAttribute("data-cat-section");
      if (active === "all") {
        sec.hidden = false;
        return;
      }
      sec.hidden = id !== active;
    });

    const empty = root.querySelector("[data-updates-empty]");
    if (empty) {
      const visible = Array.from(root.querySelectorAll("[data-post-cat]")).filter((p) => !p.hidden);
      empty.hidden = visible.length > 0;
    }
  }

  enhanceArticle();
  filterUpdates();
  window.addEventListener("hashchange", filterUpdates);
})();
