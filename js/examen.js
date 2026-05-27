(function () {
  "use strict";

  const data = window.REVISION_DATA;
  const storage = window.revisionStorage;
  const DURATION = 90 * 60;
  let timer = null;
  let remaining = DURATION;

  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function sample(items, count) {
    const copy = [...items];
    const result = [];
    while (copy.length && result.length < count) {
      const index = Math.floor(Math.random() * copy.length);
      result.push(copy.splice(index, 1)[0]);
    }
    return result;
  }

  function getExamState() {
    const state = storage.getState();
    if (!state.exam) {
      state.exam = {
        tpId: randomItem(data.tps).id,
        questions: sample(data.examTheoryPool, 4),
        notes: "",
        checks: {}
      };
      storage.setState(state);
    }
    return state.exam;
  }

  function saveExamState(mutator) {
    storage.updateState((state) => {
      state.exam = state.exam || {};
      mutator(state.exam);
    });
  }

  function setProgress() {
    const checkboxes = Array.from(document.querySelectorAll(".exam-check"));
    const checked = checkboxes.filter((box) => box.checked).length;
    const pct = checkboxes.length ? Math.round((checked / checkboxes.length) * 100) : 0;
    const bar = document.querySelector("#examProgress");
    if (bar) bar.style.width = `${pct}%`;
  }

  function renderExam() {
    const exam = getExamState();
    const tp = data.tps.find((item) => item.id === exam.tpId) || data.tps[0];
    const root = document.querySelector("#examContent");
    if (!root) return;

    root.innerHTML = `
      <section>
        <article class="exam-card">
          <p class="eyebrow">TP tiré au hasard</p>
          <h2>${escapeHTML(tp.title)}</h2>
          <p class="muted">${escapeHTML(tp.summary)}</p>
          <div class="badge-row">
            <span class="badge neutral">${escapeHTML(tp.theme)}</span>
            <span class="badge ${tp.difficulty === "hard" ? "hard" : tp.difficulty === "easy" ? "easy" : "medium"}">${escapeHTML(tp.difficultyLabel)}</span>
            <span class="badge">${escapeHTML(tp.time)}</span>
          </div>
          <div class="card-actions">
            <a class="btn primary small" href="${tp.href}">Ouvrir la fiche</a>
            <button class="btn ghost small" type="button" id="showCorrection">Voir correction</button>
          </div>
        </article>

        <article class="exam-card">
          <h2>Partie questions théoriques</h2>
          <ol>
            ${exam.questions.map((question) => `<li>${escapeHTML(question)}</li>`).join("")}
          </ol>
        </article>

        <article class="exam-card">
          <h2>Partie pratique</h2>
          <p>Tu dois expliquer le montage, réaliser les réglages, obtenir une mesure exploitable, puis rédiger une conclusion courte avec les unités.</p>
          <ol class="step-list">
            ${tp.steps.slice(0, 6).map((step) => `<li><strong>${escapeHTML(step.title)}</strong>${escapeHTML(step.detail)}</li>`).join("")}
          </ol>
        </article>

        <article class="exam-card" id="correctionCard" hidden>
          <h2>Correction / éléments attendus</h2>
          <h3>Résultats attendus</h3>
          <ul>${tp.expected.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
          <h3>Erreurs à éviter</h3>
          <ul>${tp.errors.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
          <h3>Conclusion type</h3>
          <p>${escapeHTML(tp.report.conclusion)}</p>
        </article>
      </section>

      <aside>
        <article class="exam-card">
          <h2>Checklist examen</h2>
          <div class="checklist">
            ${[
              "Lire tout le sujet avant de manipuler",
              "Écrire les valeurs imposées avec unités",
              "Vérifier les branchements et masses",
              "Faire un réglage propre des appareils",
              "Réaliser au moins un test de cohérence",
              "Prendre ou retrouver une capture utile",
              "Rédiger objectif, résultat, analyse, conclusion"
            ].map((item, index) => `
              <label class="check-item">
                <input class="exam-check" type="checkbox" data-index="${index}" ${exam.checks?.[index] ? "checked" : ""}>
                <span><strong>${escapeHTML(item)}</strong></span>
              </label>
            `).join("")}
          </div>
        </article>
        <article class="exam-card">
          <h2>Zone de notes</h2>
          <textarea id="examNotes" placeholder="Écris tes calculs, valeurs mesurées, erreurs vues, conclusion...">${escapeHTML(exam.notes || "")}</textarea>
        </article>
      </aside>
    `;

    document.querySelector("#showCorrection")?.addEventListener("click", () => {
      const card = document.querySelector("#correctionCard");
      if (card) card.hidden = !card.hidden;
    });

    document.querySelector("#examNotes")?.addEventListener("input", (event) => {
      saveExamState((examState) => {
        examState.notes = event.target.value;
      });
    });

    document.querySelectorAll(".exam-check").forEach((box) => {
      box.addEventListener("change", () => {
        saveExamState((examState) => {
          examState.checks = examState.checks || {};
          examState.checks[box.dataset.index] = box.checked;
        });
        setProgress();
      });
    });

    setProgress();
  }

  function tick() {
    remaining = Math.max(0, remaining - 1);
    document.querySelector("#examTimer").textContent = formatTime(remaining);
    if (remaining <= 0) {
      clearInterval(timer);
      timer = null;
      alert("Temps écoulé : passe à la correction et vérifie ta checklist.");
    }
  }

  function startTimer() {
    if (timer) return;
    timer = setInterval(tick, 1000);
  }

  function drawNewTp() {
    saveExamState((examState) => {
      examState.tpId = randomItem(data.tps).id;
      examState.questions = sample(data.examTheoryPool, 4);
      examState.checks = {};
      examState.notes = "";
    });
    renderExam();
  }

  function resetExam() {
    clearInterval(timer);
    timer = null;
    remaining = DURATION;
    document.querySelector("#examTimer").textContent = formatTime(remaining);
    saveExamState((examState) => {
      examState.tpId = randomItem(data.tps).id;
      examState.questions = sample(data.examTheoryPool, 4);
      examState.checks = {};
      examState.notes = "";
    });
    renderExam();
  }

  document.querySelector("#startExam")?.addEventListener("click", startTimer);
  document.querySelector("#drawTp")?.addEventListener("click", drawNewTp);
  document.querySelector("#resetExam")?.addEventListener("click", resetExam);
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#examTimer").textContent = formatTime(remaining);
    renderExam();
  });
})();
