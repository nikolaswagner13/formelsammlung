(() => {
  const state = { cat: "Alle Kategorien", q: "" },
    list = document.querySelector("#list"),
    side = document.querySelector("#side"),
    cats = document.querySelector("#cats"),
    search = document.querySelector("#search");
  const categories = [
    "Alle Kategorien",
    ...new Set(FORMULAS.map((x) => x.category)),
  ];
  function matches(f) {
    return (
      (state.cat === "Alle Kategorien" || f.category === state.cat) &&
      (!state.q || Object.values(f).join(" ").toLowerCase().includes(state.q))
    );
  }
  function render() {
    const data = FORMULAS.filter(matches);
    list.innerHTML = data
      .map(
        (f) =>
          `<details class="formula" id="${f.id}"><summary><div><span class="tag">${f.category}</span><h2>${f.title}</h2><div class="math">\\(${f.formula}\\)</div></div></summary><div class="detail"><div class="display">\\[${f.formula}\\]<button class="copy" data-copy="${encodeURIComponent(f.formula)}">Kopieren</button></div><p>${f.explanation}</p><p><b>Formelzeichen und Einheiten:</b> ${f.symbols}</p><div class="hint"><b>Praxis-Hinweis:</b> ${f.tip}</div><div class="meta">Quelle: ${f.source} · Stand: ${f.updated}</div></div></details>`,
      )
      .join("");
    document.querySelector("#active").textContent =
      `${state.cat} · ${data.length} Ergebnisse`;
    cats.innerHTML = categories
      .map(
        (c) =>
          `<button class="${c === state.cat ? "active" : ""}" data-cat="${c}"><span>${c}</span><small>${c === "Alle Kategorien" ? FORMULAS.length : FORMULAS.filter((f) => f.category === c).length}</small></button>`,
      )
      .join("");
    cats.querySelectorAll("button").forEach(
      (b) =>
        (b.onclick = () => {
          state.cat = b.dataset.cat;
          render();
        }),
    );
    list.querySelectorAll(".copy").forEach(
      (b) =>
        (b.onclick = (e) => {
          e.preventDefault();
          navigator.clipboard.writeText(decodeURIComponent(b.dataset.copy));
          b.textContent = "Kopiert ✓";
          setTimeout(() => (b.textContent = "Kopieren"), 1200);
        }),
    );
    if (window.MathJax?.typesetPromise) {
      MathJax.typesetClear([list]);
      MathJax.typesetPromise([list]);
    }
  }
  document.querySelector("#knowledgeContent").innerHTML = KNOWLEDGE_HTML;
  document.querySelectorAll(".placeholder img").forEach((img) => {
    img.onerror = () => (img.style.display = "none");
    img.onload = () => (img.nextElementSibling.style.display = "none");
    if (!img.complete || !img.naturalWidth) img.style.display = "none";
  });
  document.querySelectorAll(".tabs button").forEach(
    (b) =>
      (b.onclick = () => {
        document
          .querySelectorAll(".tabs button")
          .forEach((x) => x.classList.toggle("active", x === b));
        document
          .querySelectorAll(".view")
          .forEach((v) => (v.hidden = v.id !== b.dataset.view));
        side.style.display = b.dataset.view === "formulas" ? "" : "none";
        document.querySelector(".layout").style.gridTemplateColumns =
          b.dataset.view === "formulas" ? "" : "1fr";
        scrollTo({ top: 0, behavior: "smooth" });
      }),
  );
  search.oninput = (e) => {
    state.q = e.target.value.toLowerCase();
    render();
  };
  document.querySelector("#reset").onclick = () => {
    state.cat = "Alle Kategorien";
    state.q = "";
    search.value = "";
    render();
  };
  document.querySelector("#count").firstChild.nodeValue = FORMULAS.length;
  document.querySelector("#theme").onclick = () => {
    const n =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = n;
    localStorage.setItem("theme", n);
  };
  document.documentElement.dataset.theme =
    localStorage.getItem("theme") ||
    (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
  document.querySelector("#print").onclick = () => {
    document.querySelectorAll(".formula").forEach((x) => (x.open = true));
    print();
  };
  if (window.MathJax?.startup?.promise)
    MathJax.startup.promise.then(render).catch(render);
  else render();
})();
