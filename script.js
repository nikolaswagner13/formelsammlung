(() => {
  const state = { category: 'Alle Kategorien', query: '' };
  const list = document.getElementById('formulaList');
  const nav = document.getElementById('categoryNav');
  const toc = document.getElementById('toc');
  const empty = document.getElementById('emptyState');
  const search = document.getElementById('searchInput');
  const activeFilter = document.getElementById('activeFilter');
  const sidebar = document.getElementById('sidebar');
  const categories = ['Alle Kategorien', ...new Set(FORMULAS.map(f => f.category))];

  function textIndex(f) {
    return [f.title, f.category, f.explanation, f.formula, f.tip, ...f.symbols.flat()].join(' ').toLowerCase();
  }
  function copyText(text, button) {
    navigator.clipboard.writeText(text).then(() => {
      const old = button.textContent; button.textContent = 'Kopiert ✓';
      setTimeout(() => button.textContent = old, 1400);
    }).catch(() => { button.textContent = 'Nicht möglich'; });
  }
  function card(f) {
    const symbols = f.symbols.map(s => `<tr><td><strong>${s[0]}</strong></td><td>${s[1]}</td><td>${s[2]}</td></tr>`).join('');
    return `<details class="formula-card" id="${f.id}">
      <summary><div><span class="card-category">${f.category}</span><h2 class="card-title">${f.title}</h2><div class="card-formula">\(${f.formula}\)</div></div></summary>
      <div class="card-body">
        <div class="formula-display">\[${f.formula}\]<button class="copy-button" data-copy="${encodeURIComponent(f.formula)}">Formel kopieren</button></div>
        <p>${f.explanation}</p>
        <h3>Formelzeichen und Einheiten</h3>
        <table class="symbols"><thead><tr><th>Zeichen</th><th>Bedeutung</th><th>Einheit</th></tr></thead><tbody>${symbols}</tbody></table>
        <div class="tip"><strong>Praxis-Hinweis:</strong> ${f.tip}</div>
        <div class="meta"><span><strong>Quelle:</strong> ${f.source}</span><span><strong>Stand:</strong> ${f.updated}</span></div>
      </div>
    </details>`;
  }
  function filtered() {
    return FORMULAS.filter(f => (state.category === 'Alle Kategorien' || f.category === state.category) && (!state.query || textIndex(f).includes(state.query)));
  }
  function renderNav() {
    nav.innerHTML = categories.map(c => {
      const count = c === 'Alle Kategorien' ? FORMULAS.length : FORMULAS.filter(f => f.category === c).length;
      return `<button class="category-button ${state.category === c ? 'active' : ''}" data-category="${c}"><span>${c}</span><span>${count}</span></button>`;
    }).join('');
    nav.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
      state.category = b.dataset.category; sidebar.classList.remove('open'); render();
    }));
  }
  function render() {
    const items = filtered();
    list.innerHTML = items.map(card).join('');
    empty.hidden = items.length > 0;
    activeFilter.textContent = `${state.category} · ${items.length} Ergebnis${items.length === 1 ? '' : 'se'}`;
    toc.innerHTML = items.map(f => `<a href="#${f.id}">${f.title}</a>`).join('');
    renderNav();
    list.querySelectorAll('.copy-button').forEach(b => b.addEventListener('click', e => {
      e.preventDefault(); e.stopPropagation(); copyText(decodeURIComponent(b.dataset.copy), b);
    }));
    if (window.MathJax?.typesetPromise) MathJax.typesetPromise([list]);
  }
  search.addEventListener('input', e => { state.query = e.target.value.trim().toLowerCase(); render(); });
  document.getElementById('clearFilters').addEventListener('click', () => { state.category = 'Alle Kategorien'; state.query = ''; search.value = ''; render(); });
  document.getElementById('menuButton').addEventListener('click', e => { const open = sidebar.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', open); });
  document.getElementById('printButton').addEventListener('click', () => { document.querySelectorAll('.formula-card').forEach(d => d.open = true); window.print(); });
  const themeButton = document.getElementById('themeButton');
  const savedTheme = localStorage.getItem('formula-theme');
  const initialTheme = savedTheme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = initialTheme;
  themeButton.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next; localStorage.setItem('formula-theme', next);
  });
  document.getElementById('formulaCount').textContent = FORMULAS.length;
  render();
})();
