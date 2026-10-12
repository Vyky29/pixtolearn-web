(() => {
  const root = document.querySelector("[data-idea-flow]");
  if (!root) return;
  const ideas = [...root.querySelectorAll(".idea-answers [data-idea]")];
  const scenes = [...root.querySelectorAll(".idea-scene")];
  if (!ideas.length) return;

  function show(idea) {
    ideas.forEach((button) => button.setAttribute("aria-selected", String(button.dataset.idea === idea)));
    scenes.forEach((scene) => scene.classList.toggle("is-on", scene.dataset.idea === idea));
  }

  ideas.forEach((button, index) => {
    button.addEventListener("click", () => show(button.dataset.idea));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === "Home" ? 0 : event.key === "End" ? ideas.length - 1 : (index + (event.key === "ArrowRight" ? 1 : ideas.length - 1)) % ideas.length;
      ideas[next].focus();
      show(ideas[next].dataset.idea);
    });
  });

  show("anticipate");
})();
