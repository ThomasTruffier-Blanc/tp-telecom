(function () {
  "use strict";

  const data = window.REVISION_DATA;
  const storage = window.revisionStorage;
  const root = document.querySelector("#quizContainer");
  if (!root) return;

  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderQuiz() {
    const best = storage.getState().bestQuizScore || 0;
    document.querySelector("#quizCount").textContent = `${data.quizQuestions.length} questions`;
    document.querySelector("#bestScoreBadge").textContent = `Meilleur score : ${best}%`;
    document.querySelector("#quizResult").innerHTML = "";
    root.innerHTML = data.quizQuestions.map((question, questionIndex) => `
      <article class="quiz-question" data-question="${questionIndex}">
        <h2 class="card-title">${questionIndex + 1}. ${escapeHTML(question.question)}</h2>
        <div class="quiz-options">
          ${question.options.map((option, optionIndex) => `
            <label>
              <input type="radio" name="q${questionIndex}" value="${optionIndex}">
              <span>${escapeHTML(option)}</span>
            </label>
          `).join("")}
        </div>
      </article>
    `).join("");
  }

  function submitQuiz() {
    let score = 0;
    const corrections = [];
    data.quizQuestions.forEach((question, index) => {
      const selected = root.querySelector(`input[name="q${index}"]:checked`);
      const selectedValue = selected ? Number(selected.value) : -1;
      const ok = selectedValue === question.answer;
      if (ok) score += 1;
      corrections.push({
        ok,
        question: question.question,
        selected: selectedValue >= 0 ? question.options[selectedValue] : "Pas de réponse",
        answer: question.options[question.answer],
        explanation: question.explanation
      });
    });

    const percent = Math.round((score / data.quizQuestions.length) * 100);
    storage.updateState((state) => {
      state.bestQuizScore = Math.max(state.bestQuizScore || 0, percent);
    });
    document.querySelector("#bestScoreBadge").textContent = `Meilleur score : ${storage.getState().bestQuizScore}%`;

    document.querySelector("#quizResult").innerHTML = `
      <div class="report-block ${percent >= 80 ? "result-good" : "result-bad"}">
        <strong>Score final : ${score}/${data.quizQuestions.length} (${percent}%)</strong>
        <p>${percent >= 80 ? "Très bon niveau pour la partie théorique." : "Relis les corrections puis refais le quiz."}</p>
      </div>
      ${corrections.map((item, index) => `
        <details ${item.ok ? "" : "open"}>
          <summary>${item.ok ? "Correct" : "À revoir"} · Question ${index + 1}</summary>
          <div class="details-body">
            <p><strong>Question :</strong> ${escapeHTML(item.question)}</p>
            <p><strong>Ta réponse :</strong> ${escapeHTML(item.selected)}</p>
            <p><strong>Bonne réponse :</strong> ${escapeHTML(item.answer)}</p>
            <p><strong>Explication :</strong> ${escapeHTML(item.explanation)}</p>
          </div>
        </details>
      `).join("")}
    `;
    document.querySelector("#quizResult").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.querySelector("#submitQuiz")?.addEventListener("click", submitQuiz);
  document.querySelector("#resetQuiz")?.addEventListener("click", renderQuiz);
  document.addEventListener("DOMContentLoaded", renderQuiz);
})();
