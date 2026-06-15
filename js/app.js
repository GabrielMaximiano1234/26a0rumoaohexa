// 1. Objeto de estado global do jogo
const gameState = {
  coachName: "Mister",
  selectedTactic: "4-3-3",
  isClassicMode: true
};

// Iniciar Listeners ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  setupTacticSelector();
  setupClassicModeToggle();
  setupStartButton();
});

// 2. Seleção de esquema tático
function setupTacticSelector() {
  const cards = document.querySelectorAll(".tactic-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      // Remover classe active de todos
      cards.forEach(c => c.classList.remove("active"));
      // Adicionar classe active ao card clicado
      card.classList.add("active");
      // Atualizar no gameState
      const tacticValue = card.getAttribute("data-tactic");
      if (tacticValue) {
        gameState.selectedTactic = tacticValue;
      }
    });
  });
}

// 3. Switch do Modo Clássico
function setupClassicModeToggle() {
  const toggle = document.getElementById("mode-classic-toggle");
  if (toggle) {
    toggle.addEventListener("change", (event) => {
      gameState.isClassicMode = event.target.checked;
    });
  }
}

// 4. Botão de Iniciar (Convocar Seleção)
function setupStartButton() {
  const btn = document.getElementById("btn-iniciar-draft");
  if (btn) {
    btn.addEventListener("click", () => {
      const input = document.getElementById("coach-name-input");
      if (input) {
        const nameValue = input.value.trim();
        gameState.coachName = nameValue !== "" ? nameValue : "Mister";
      }

      // Salvar todo o gameState no localStorage
      localStorage.setItem("rumoAoHexa_gameState", JSON.stringify(gameState));

      // Exibir alerta interativo
      const modoTexto = gameState.isClassicMode ? "Modo Clássico" : "Modo Desafio";
      alert(`Convocação iniciada! Professor ${gameState.coachName} selecionou a tática ${gameState.selectedTactic} no ${modoTexto}.`);
    });
  }
}
