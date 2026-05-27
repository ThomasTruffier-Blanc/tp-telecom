(function () {
  "use strict";

  const data = window.REVISION_DATA;
  const STORAGE_KEY = "revision-tp-but-rt-v3";
  let memoryState = {};

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (error) {
      return memoryState;
    }
  }

  function setState(next) {
    memoryState = next;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (error) {
      // Some browsers restrict localStorage on file:// pages. Keep the page usable.
    }
  }

  function updateState(mutator) {
    const state = getState();
    mutator(state);
    setState(state);
    return state;
  }

  window.revisionStorage = { getState, setState, updateState, key: STORAGE_KEY };

  function docById(id) {
    return data.sourceDocs.find((doc) => doc.id === id);
  }

  function difficultyClass(value) {
    if (value === "easy") return "easy";
    if (value === "hard") return "hard";
    return "medium";
  }

  function renderShell() {
    const page = document.body.dataset.page;
    const shell = $("#siteShell");
    if (!shell) return;

    shell.innerHTML = `
      <div class="mobile-topbar">
        <strong>Révision TP</strong>
        <button class="menu-toggle" type="button" aria-label="Ouvrir le menu">Menu</button>
      </div>
      <aside class="sidebar" aria-label="Navigation principale">
        <div class="brand-block">
          <div class="brand-mark">RT</div>
          <div>
            <p class="brand-title">Révision TP Télécom</p>
            <p class="brand-subtitle">BUT 1 RT · examen pratique 1h30</p>
          </div>
        </div>
        <nav class="nav">
          ${data.nav.map((item) => `
            <a href="${item.href}" class="${item.page === page ? "active" : ""}">
              <span class="nav-icon">${item.icon}</span>
              <span>${item.label}</span>
            </a>
          `).join("")}
        </nav>
        <div class="sidebar-footer">
          <strong>Conseil rapide</strong><br>
          Une mesure = une valeur + une unité + une interprétation.
        </div>
      </aside>
    `;

    $(".menu-toggle")?.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
    });
  }

  function savedCheckboxHTML(key, title, detail) {
    const state = getState();
    const checked = state.checks?.[key] ? "checked" : "";
    return `
      <label class="check-item">
        <input type="checkbox" class="saved-check" data-key="${escapeHTML(key)}" ${checked}>
        <span><strong>${escapeHTML(title)}</strong>${detail ? `<small>${escapeHTML(detail)}</small>` : ""}</span>
      </label>
    `;
  }

  function attachSavedChecks() {
    $$(".saved-check").forEach((input) => {
      input.addEventListener("change", () => {
        updateState((state) => {
          state.checks = state.checks || {};
          state.checks[input.dataset.key] = input.checked;
        });
        renderHomeProgress();
      });
    });
  }

  function reviewedCount() {
    const reviewed = getState().reviewed || {};
    return data.tps.filter((tp) => reviewed[tp.id]).length;
  }

  function renderHomeProgress() {
    const total = data.tps.length;
    const done = reviewedCount();
    const pct = total ? Math.round((done / total) * 100) : 0;
    const ring = $(".progress-ring");
    const value = $("#homeProgressValue");
    const bar = $("#homeProgressBar");
    const text = $("#homeProgressText");
    if (ring) ring.style.setProperty("--progress", `${pct}%`);
    if (value) value.textContent = `${pct}%`;
    if (bar) bar.style.width = `${pct}%`;
    if (text) text.textContent = `${done}/${total} TP marqués comme révisés.`;
  }

  function renderHome() {
    renderHomeProgress();
    const urgent = $("#urgentList");
    if (urgent) {
      urgent.innerHTML = data.urgentTasks.map((item) => savedCheckboxHTML(item.id, item.title, item.detail)).join("");
    }

    const mustKnow = $("#mustKnowList");
    if (mustKnow) {
      mustKnow.innerHTML = data.mustKnow.map((item) => `
        <div class="stack-item">
          <strong>${escapeHTML(item.title)}</strong>
          <span>${escapeHTML(item.text)}</span>
        </div>
      `).join("");
    }

    const quick = $("#homeQuickCards");
    if (quick) {
      quick.innerHTML = data.quickCards.map((card) => `
        <article class="panel">
          <h3 class="card-title">${escapeHTML(card.title)}</h3>
          <p class="muted">${escapeHTML(card.text)}</p>
          <a class="btn primary small" href="${card.href}">${escapeHTML(card.action)}</a>
        </article>
      `).join("");
    }
    attachSavedChecks();
  }

  function renderPlanning() {
    const timeline = $("#planningTimeline");
    if (timeline) {
      timeline.innerHTML = data.planning.map((item) => `
        <article class="timeline-item">
          <div class="timeline-time">${escapeHTML(item.duration)}</div>
          <div>
            ${savedCheckboxHTML(item.id, item.title, item.detail)}
          </div>
        </article>
      `).join("");
    }

    const tips = $("#lastTips");
    if (tips) {
      tips.innerHTML = data.lastTips.map((tip) => `
        <article class="panel">
          <h3 class="card-title">${escapeHTML(tip.title)}</h3>
          <p class="muted">${escapeHTML(tip.text)}</p>
        </article>
      `).join("");
    }
    attachSavedChecks();
  }

  function setupSelect(select, values, allLabel) {
    if (!select) return;
    select.innerHTML = `<option value="">${allLabel}</option>` + values.map((value) => `<option value="${escapeHTML(value)}">${escapeHTML(value)}</option>`).join("");
  }

  function renderTheoryCards() {
    const root = $("#theoryList");
    if (!root) return;
    const query = ($("#theorySearch")?.value || "").toLowerCase().trim();
    const group = $("#theoryGroup")?.value || "";
    const cards = data.theoryCards.filter((card) => {
      const haystack = `${card.title} ${card.group} ${card.definition} ${card.purpose} ${card.example}`.toLowerCase();
      return (!group || card.group === group) && (!query || haystack.includes(query));
    });
    root.innerHTML = cards.length ? cards.map((card) => `
      <article class="theory-card">
        <div class="badge-row"><span class="badge neutral">${escapeHTML(card.group)}</span></div>
        <h2 class="card-title">${escapeHTML(card.title)}</h2>
        <details open>
          <summary>Définition simple</summary>
          <div class="details-body">${escapeHTML(card.definition)}</div>
        </details>
        <details>
          <summary>À quoi ça sert</summary>
          <div class="details-body">${escapeHTML(card.purpose)}</div>
        </details>
        <details>
          <summary>Exemple concret</summary>
          <div class="details-body">${escapeHTML(card.example)}</div>
        </details>
        <details>
          <summary>Commandes ou réglages liés</summary>
          <div class="details-body">${escapeHTML(card.related)}</div>
        </details>
        <details>
          <summary>Erreur fréquente</summary>
          <div class="details-body">${escapeHTML(card.errors)}</div>
        </details>
        <details>
          <summary>Mini-question possible</summary>
          <div class="details-body">${escapeHTML(card.exam)}</div>
        </details>
      </article>
    `).join("") : `<div class="empty-state">Aucune fiche ne correspond à cette recherche.</div>`;
  }

  function initTheory() {
    setupSelect($("#theoryGroup"), [...new Set(data.theoryCards.map((c) => c.group))], "Toutes les familles");
    $("#theorySearch")?.addEventListener("input", renderTheoryCards);
    $("#theoryGroup")?.addEventListener("change", renderTheoryCards);
    renderTheoryCards();
  }

  function tpCard(tp) {
    const state = getState();
    const reviewed = Boolean(state.reviewed?.[tp.id]);
    const doc = docById(tp.docs[0]);
    return `
      <article class="tp-card">
        <img src="${tp.image}" alt="Illustration ${escapeHTML(tp.shortTitle)}">
        <div class="badge-row">
          <span class="badge neutral">${escapeHTML(tp.theme)}</span>
          <span class="badge ${difficultyClass(tp.difficulty)}">${escapeHTML(tp.difficultyLabel)}</span>
          <span class="badge">${escapeHTML(tp.time)}</span>
        </div>
        <h2 class="card-title">${escapeHTML(tp.title)}</h2>
        <p class="muted">${escapeHTML(tp.summary)}</p>
        <div class="card-actions">
          <a class="btn primary small" href="${tp.href}">Voir le TP</a>
          <a class="btn ghost small" href="${tp.href}#checklist">Checklist</a>
          <a class="btn ghost small" href="${doc ? doc.href : "comptes-rendus.html"}">Compte rendu</a>
          <a class="btn ghost small" href="galerie.html">Photos</a>
          <button class="btn small mark-reviewed" type="button" data-tp="${tp.id}" aria-pressed="${reviewed}">${reviewed ? "Révisé" : "Marquer révisé"}</button>
        </div>
      </article>
    `;
  }

  function renderTpList() {
    const root = $("#tpCards");
    if (!root) return;
    const query = ($("#tpSearch")?.value || "").toLowerCase().trim();
    const theme = $("#tpTheme")?.value || "";
    const difficulty = $("#tpDifficulty")?.value || "";
    const filtered = data.tps.filter((tp) => {
      const haystack = `${tp.title} ${tp.theme} ${tp.summary}`.toLowerCase();
      return (!theme || tp.theme === theme) && (!difficulty || tp.difficulty === difficulty) && (!query || haystack.includes(query));
    });
    root.innerHTML = filtered.length ? filtered.map(tpCard).join("") : `<div class="empty-state">Aucun TP ne correspond aux filtres.</div>`;
    attachReviewedButtons();
  }

  function initTpList() {
    setupSelect($("#tpTheme"), [...new Set(data.tps.map((tp) => tp.theme))], "Tous les thèmes");
    const diffOptions = [
      ["easy", "Facile"],
      ["medium", "Intermédiaire"],
      ["hard", "Avancé"]
    ];
    const diff = $("#tpDifficulty");
    if (diff) diff.innerHTML = `<option value="">Toutes les difficultés</option>` + diffOptions.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
    $("#tpSearch")?.addEventListener("input", renderTpList);
    $("#tpTheme")?.addEventListener("change", renderTpList);
    $("#tpDifficulty")?.addEventListener("change", renderTpList);
    renderTpList();
  }

  function attachReviewedButtons() {
    $$(".mark-reviewed").forEach((button) => {
      button.addEventListener("click", () => {
        const tpId = button.dataset.tp;
        const state = updateState((draft) => {
          draft.reviewed = draft.reviewed || {};
          draft.reviewed[tpId] = !draft.reviewed[tpId];
        });
        const reviewed = Boolean(state.reviewed?.[tpId]);
        button.setAttribute("aria-pressed", String(reviewed));
        button.textContent = reviewed ? "Révisé" : "Marquer révisé";
        renderHomeProgress();
      });
    });
  }

  function renderTable(rows) {
    if (!rows?.length) return "";
    const [head, ...body] = rows;
    return `
      <table class="mini-table">
        <thead><tr>${head.map((cell) => `<th>${escapeHTML(cell)}</th>`).join("")}</tr></thead>
        <tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${escapeHTML(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    `;
  }

  function renderList(items) {
    return `<ul>${(items || []).map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
  }

  function renderCommandBlock(block) {
    return `
      <div class="code-block">
        <button class="copy-code" type="button">Copier</button>
        <pre><code>${escapeHTML(block.code)}</code></pre>
      </div>
    `;
  }

  function renderTpDetail() {
    const root = $("#tpDetail");
    if (!root) return;
    const tp = data.tps.find((item) => item.id === document.body.dataset.tp);
    if (!tp) {
      root.innerHTML = `<section class="page-head"><h1>TP introuvable</h1><p>Retourne à la liste des TP.</p></section>`;
      return;
    }
    const docs = tp.docs.map(docById).filter(Boolean);
    root.innerHTML = `
      <section class="detail-hero">
        <div class="page-head">
          <p class="eyebrow">${escapeHTML(tp.theme)}</p>
          <h1>${escapeHTML(tp.title)}</h1>
          <p>${escapeHTML(tp.summary)}</p>
          <div class="badge-row" style="margin-top: 16px;">
            <span class="badge ${difficultyClass(tp.difficulty)}">${escapeHTML(tp.difficultyLabel)}</span>
            <span class="badge">${escapeHTML(tp.time)}</span>
            <span class="badge neutral">${escapeHTML(tp.theme)}</span>
          </div>
          <div class="hero-actions">
            <button class="btn primary mark-reviewed" type="button" data-tp="${tp.id}" aria-pressed="${Boolean(getState().reviewed?.[tp.id])}">${getState().reviewed?.[tp.id] ? "Révisé" : "Marquer comme révisé"}</button>
            ${docs.map((doc) => `<a class="btn ghost" href="${doc.href}">${escapeHTML(doc.kind)} · ${escapeHTML(doc.title)}</a>`).join("")}
          </div>
        </div>
        <aside class="panel detail-hero">
          <img src="${tp.image}" alt="Schéma ${escapeHTML(tp.shortTitle)}">
        </aside>
      </section>

      <section class="detail-sections">
        <article class="detail-section">
          <h2>Objectif du TP</h2>
          <p>${escapeHTML(tp.objective)}</p>
        </article>
        <article class="detail-section">
          <h2>Matériel utilisé</h2>
          ${renderList(tp.equipment)}
        </article>
        <article class="detail-section">
          <h2>Topologie ou montage</h2>
          <p>${escapeHTML(tp.topology)}</p>
          <p class="muted">Plan d'adressage réseau : non applicable aux TP télécom fournis. La table ci-dessous remplace ce plan par les valeurs de réglage à retenir.</p>
          ${renderTable(tp.addressing)}
        </article>
        <article class="detail-section">
          <h2>Étapes de configuration et manipulation</h2>
          <ol class="step-list">
            ${tp.steps.map((step) => `<li><strong>${escapeHTML(step.title)}</strong>${escapeHTML(step.detail)}</li>`).join("")}
          </ol>
        </article>
        <article class="detail-section">
          <h2>Commandes ou réglages à taper</h2>
          ${tp.commands.map((block) => `<h3>${escapeHTML(block.label)}</h3>${renderCommandBlock(block)}`).join("")}
        </article>
        <article class="detail-section">
          <h2>Tests à réaliser</h2>
          ${renderList(tp.tests)}
        </article>
        <article class="detail-section">
          <h2>Résultats attendus</h2>
          ${renderList(tp.expected)}
        </article>
        <article class="detail-section">
          <h2>Captures d'écran / photos</h2>
          <div class="gallery-grid">
            ${tp.captures.map((src, index) => `
              <figure class="gallery-card">
                <img src="${src}" alt="Capture ${index + 1} ${escapeHTML(tp.shortTitle)}">
                <figcaption><strong>Capture ${index + 1}</strong><br><span class="muted">À observer : réglage, forme du signal, raie ou résultat associé.</span></figcaption>
              </figure>
            `).join("")}
          </div>
        </article>
        <article class="detail-section">
          <h2>Erreurs possibles et corrections</h2>
          ${renderList(tp.errors)}
        </article>
        <article class="detail-section">
          <h2>Questions théoriques possibles</h2>
          ${renderList(tp.theoryQuestions)}
        </article>
        <article class="detail-section">
          <h2>Mini compte rendu déjà rédigé</h2>
          <div class="report-template">
            ${Object.entries(tp.report).map(([key, value]) => `
              <div class="report-block">
                <strong>${escapeHTML(key)}</strong>
                <p>${escapeHTML(value)}</p>
              </div>
            `).join("")}
          </div>
        </article>
        <article class="detail-section" id="checklist">
          <h2>Checklist finale</h2>
          <div class="checklist">
            ${tp.checklist.map((item, index) => savedCheckboxHTML(`${tp.id}-check-${index}`, item, "")).join("")}
          </div>
        </article>
      </section>
    `;
    attachSavedChecks();
    attachReviewedButtons();
    attachCopyButtons();
  }

  function renderCommandCategory(categoryId) {
    const category = data.commandCategories.find((item) => item.id === categoryId) || data.commandCategories[0];
    const list = $("#commandList");
    if (!list) return;
    list.innerHTML = category.commands.map((item) => `
      <article class="command-card">
        <h2 class="card-title">${escapeHTML(item.cmd)}</h2>
        ${renderCommandBlock({ code: item.cmd })}
        <p><strong>Utilité :</strong> ${escapeHTML(item.utility)}</p>
        <p><strong>Exemple :</strong> ${escapeHTML(item.example)}</p>
        <p><strong>Résultat attendu :</strong> ${escapeHTML(item.expected)}</p>
        <p><strong>Erreur fréquente :</strong> ${escapeHTML(item.error)}</p>
      </article>
    `).join("");
    attachCopyButtons();
  }

  function initCommands() {
    const tabs = $("#commandTabs");
    if (!tabs) return;
    tabs.innerHTML = data.commandCategories.map((category, index) => `
      <button type="button" class="tab-btn ${index === 0 ? "active" : ""}" data-category="${category.id}">${escapeHTML(category.label)}</button>
    `).join("");
    tabs.addEventListener("click", (event) => {
      const button = event.target.closest(".tab-btn");
      if (!button) return;
      $$(".tab-btn", tabs).forEach((tab) => tab.classList.remove("active"));
      button.classList.add("active");
      renderCommandCategory(button.dataset.category);
    });
    renderCommandCategory(data.commandCategories[0].id);
  }

  function attachCopyButtons() {
    $$(".copy-code").forEach((button) => {
      button.addEventListener("click", async () => {
        const code = button.parentElement?.querySelector("code")?.textContent || "";
        try {
          await navigator.clipboard.writeText(code);
          button.textContent = "Copié";
        } catch (error) {
          const textarea = document.createElement("textarea");
          textarea.value = code;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          textarea.remove();
          button.textContent = "Copié";
        }
        setTimeout(() => (button.textContent = "Copier"), 1200);
      });
    });
  }

  function renderErrors() {
    const root = $("#errorList");
    if (!root) return;
    const query = ($("#errorSearch")?.value || "").toLowerCase().trim();
    const group = $("#errorGroup")?.value || "";
    const items = data.errors.filter((item) => {
      const haystack = `${item.group} ${item.title} ${item.symptom} ${item.cause} ${item.check} ${item.fix}`.toLowerCase();
      return (!group || item.group === group) && (!query || haystack.includes(query));
    });
    root.innerHTML = items.length ? items.map((item) => `
      <details>
        <summary>${escapeHTML(item.title)} <span class="badge neutral">${escapeHTML(item.group)}</span></summary>
        <div class="details-body">
          <p><strong>Symptôme :</strong> ${escapeHTML(item.symptom)}</p>
          <p><strong>Cause probable :</strong> ${escapeHTML(item.cause)}</p>
          <p><strong>Vérification :</strong> ${escapeHTML(item.check)}</p>
          <p><strong>Correction :</strong> ${escapeHTML(item.fix)}</p>
          <p><strong>Commande utile :</strong> <code>${escapeHTML(item.command)}</code></p>
        </div>
      </details>
    `).join("") : `<div class="empty-state">Aucune erreur trouvée.</div>`;
  }

  function initErrors() {
    setupSelect($("#errorGroup"), [...new Set(data.errors.map((item) => item.group))], "Toutes les familles");
    $("#errorSearch")?.addEventListener("input", renderErrors);
    $("#errorGroup")?.addEventListener("change", renderErrors);
    renderErrors();
  }

  function renderReports() {
    const template = $("#reportTemplate");
    if (template) {
      template.innerHTML = data.reportTemplate.map((block) => `
        <div class="report-block">
          <strong>${escapeHTML(block.title)}</strong>
          <p>${escapeHTML(block.text)}</p>
        </div>
      `).join("");
    }

    const docs = $("#sourceDocs");
    if (docs) {
      docs.innerHTML = data.sourceDocs.map((doc) => `
        <a class="stack-item" href="${doc.href}">
          <strong>${escapeHTML(doc.kind)} · ${escapeHTML(doc.title)}</strong>
          <span class="muted">${escapeHTML(doc.href)}</span>
        </a>
      `).join("");
    }

    const reports = $("#tpReports");
    if (reports) {
      reports.innerHTML = data.tps.map((tp) => `
        <article class="report-card">
          <div class="badge-row"><span class="badge neutral">${escapeHTML(tp.theme)}</span></div>
          <h2 class="card-title">${escapeHTML(tp.title)}</h2>
          ${Object.entries(tp.report).map(([key, value]) => `
            <details>
              <summary>${escapeHTML(key)}</summary>
              <div class="details-body">${escapeHTML(value)}</div>
            </details>
          `).join("")}
          <div class="card-actions">
            <a class="btn primary small" href="${tp.href}">Fiche TP</a>
            ${tp.docs.map(docById).filter(Boolean).map((doc) => `<a class="btn ghost small" href="${doc.href}">${escapeHTML(doc.kind)}</a>`).join("")}
          </div>
        </article>
      `).join("");
    }
  }

  function renderGallery() {
    const root = $("#galleryGrid");
    if (!root) return;
    const query = ($("#gallerySearch")?.value || "").toLowerCase().trim();
    const tp = $("#galleryTp")?.value || "";
    const items = data.gallery.filter((item) => {
      const haystack = `${item.title} ${item.tp} ${item.description} ${item.observe}`.toLowerCase();
      return (!tp || item.tp === tp) && (!query || haystack.includes(query));
    });
    root.innerHTML = items.length ? items.map((item) => `
      <figure class="gallery-card">
        <img src="${item.src}" alt="${escapeHTML(item.title)}">
        <figcaption>
          <div class="badge-row"><span class="badge neutral">${escapeHTML(item.tp)}</span></div>
          <h2 class="card-title">${escapeHTML(item.title)}</h2>
          <p class="muted">${escapeHTML(item.description)}</p>
          <p><strong>À observer :</strong> ${escapeHTML(item.observe)}</p>
        </figcaption>
      </figure>
    `).join("") : `<div class="empty-state">Aucune image ne correspond aux filtres.</div>`;
  }

  function initGallery() {
    setupSelect($("#galleryTp"), [...new Set(data.gallery.map((item) => item.tp))], "Tous les TP");
    $("#gallerySearch")?.addEventListener("input", renderGallery);
    $("#galleryTp")?.addEventListener("change", renderGallery);
    renderGallery();
  }

  function initPage() {
    renderShell();
    const page = document.body.dataset.page;
    if (page === "home") renderHome();
    if (page === "planning") renderPlanning();
    if (page === "cours") initTheory();
    if (page === "tp-list") initTpList();
    if (page === "tp-detail") renderTpDetail();
    if (page === "commandes") initCommands();
    if (page === "erreurs") initErrors();
    if (page === "reports") renderReports();
    if (page === "gallery") initGallery();
  }

  document.addEventListener("DOMContentLoaded", initPage);
})();
