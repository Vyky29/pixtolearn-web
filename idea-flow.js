(() => {
  const root = document.querySelector("[data-idea]");
  if (!root) return;

  const sets = {
    anticipate: [
      [
        { src: "assets/idea/brush-object.png", title: "toothbrush", ribete: "brushing teeth", color: "#5B8C7A", alt: "A toothbrush" },
        { src: "assets/idea/brush-now.png", title: "pick up the brush", ribete: "brushing teeth", color: "#5B8C7A", alt: "A hand lifts a toothbrush", out: true }
      ],
      [
        { src: "assets/idea/zoo-ticket.png", title: "ticket", ribete: "going to the zoo", color: "#7A4E9A", alt: "A zoo ticket" },
        { src: "assets/idea/zoo-1.png", title: "open the map", ribete: "going to the zoo", color: "#7A4E9A", alt: "A ticket and a map at the zoo", out: true }
      ],
      [
        { src: "assets/idea/shop-basket.png", title: "basket", ribete: "at the supermarket", color: "#C77830", alt: "A shopping basket" },
        { src: "assets/idea/shop-1.png", title: "check the list", ribete: "at the supermarket", color: "#C77830", alt: "A shopping list", out: true }
      ]
    ],
    recognise: [
      [
        { real: true, src: "assets/idea/real/brush-trim.jpg", alt: "A real toothbrush", focus: "48% 50%" },
        { src: "assets/idea/brush-object.png", title: "toothbrush", ribete: "brushing teeth", color: "#5B8C7A", alt: "The PixtoLearn toothbrush" }
      ],
      [
        { real: true, src: "assets/idea/real/paste-clear.jpg", alt: "A real tube of toothpaste", focus: "42% 50%" },
        { src: "assets/idea/brush-paste.png", title: "toothpaste", ribete: "brushing teeth", color: "#5B8C7A", alt: "The PixtoLearn toothpaste" }
      ],
      [
        { real: true, src: "assets/idea/real/basket-fit.jpg", alt: "A real shopping basket", focus: "50% 46%" },
        { src: "assets/idea/shop-basket.png", title: "basket", ribete: "at the supermarket", color: "#C77830", alt: "The PixtoLearn basket" }
      ]
    ],
    understand: [
      [
        { src: "assets/idea/brush-now.png", title: "pick up the brush", ribete: "brushing teeth", color: "#5B8C7A", alt: "A hand lifts a toothbrush", mark: "Now" },
        { src: "assets/idea/brush-next.png", title: "toothpaste", ribete: "brushing teeth", color: "#5B8C7A", alt: "Toothpaste goes on the brush", mark: "Next" },
        { src: "assets/idea/brush-then.png", title: "wet the brush", ribete: "brushing teeth", color: "#5B8C7A", alt: "The brush under the tap", mark: "Then" }
      ],
      [
        { src: "assets/idea/hotel-2.png", title: "at reception", ribete: "at the hotel", color: "#5B9A8B", alt: "Saying hello at reception", mark: "Now" },
        { src: "assets/idea/hotel-3.png", title: "the key", ribete: "at the hotel", color: "#5B9A8B", alt: "A room key is handed over", mark: "Next" },
        { src: "assets/idea/hotel-1.png", title: "the room", ribete: "at the hotel", color: "#5B9A8B", alt: "Going into the hotel room", mark: "Then" }
      ],
      [
        { src: "assets/idea/shop-1.png", title: "the list", ribete: "at the supermarket", color: "#C77830", alt: "A shopping list", mark: "Now" },
        { src: "assets/idea/shop-2.png", title: "go in", ribete: "at the supermarket", color: "#C77830", alt: "Walking into the supermarket", mark: "Then" }
      ]
    ]
  };

  function card(item) {
    const mark = item.mark ? `<span class="card-mark">${item.mark}</span>` : `<span class="card-mark"></span>`;
    if (item.real) {
      return `<div class="card-slot">${mark}<figure class="real-object"><img alt="${item.alt}" src="${item.src}"${item.focus ? ` style="object-position:${item.focus}"` : ""}></figure></div>`;
    }
    if (item.yellow) {
      return `<div class="card-slot">${mark}<figure class="pixto-yellow"><span class="frame"><img alt="${item.alt}" src="${item.src}"></span><b>${item.title}</b></figure></div>`;
    }
    return `<div class="card-slot${item.out ? " is-out" : ""}">${mark}<figure class="pixto-mini" style="--ribete:${item.color}"><img alt="${item.alt}" src="${item.src}"><b>${item.title}</b><i>${item.ribete}</i></figure></div>`;
  }

  root.querySelectorAll("[data-idea-panel]").forEach((panel) => {
    const items = sets[panel.dataset.ideaPanel];
    const grouped = Array.isArray(items[0]);
    panel.innerHTML = grouped
      ? items.map((pair) => `<div class="idea-example">${pair.map(card).join("")}</div>`).join("")
      : items.map(card).join("");
  });

  const order = ["anticipate", "recognise", "understand"];
  const tabs = [...root.querySelectorAll("[data-idea-tab]")];
  const panels = [...root.querySelectorAll("[data-idea-panel]")];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let index = 0;
  let timer = 0;
  const show = (name) => {
    index = Math.max(0, order.indexOf(name));
    tabs.forEach((tab) => tab.setAttribute("aria-pressed", String(tab.dataset.ideaTab === name)));
    panels.forEach((panel) => panel.toggleAttribute("hidden", panel.dataset.ideaPanel !== name));
  };
  const stop = () => { window.clearInterval(timer); timer = 0; };
  const start = () => {
    stop();
    if (reduce) return;
    timer = window.setInterval(() => {
      index = (index + 1) % order.length;
      show(order[index]);
    }, 3400);
  };
  tabs.forEach((tab) => tab.addEventListener("click", () => { show(tab.dataset.ideaTab); start(); }));
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  show("anticipate");
  start();
})();
