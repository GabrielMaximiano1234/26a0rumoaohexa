// Banco de Dados Oficial - Seleções Brasileiras Históricas
const brazilDraftDatabase = [
  {
    name: "Brasil 1958",
    coach: "Vicente Feola",
    players: [
      { name: "Gilmar", pos: "GOL", rating: 88, desc: "Goleiro bicampeão mundial 58/62" },
      { name: "Djalma Santos", pos: "DEF", rating: 91, desc: "Lateral clássico lendário" },
      { name: "Bellini", pos: "DEF", rating: 88, desc: "O primeiro capitão a erguer a taça" },
      { name: "Orlando Peçanha", pos: "DEF", rating: 86, desc: "Zagueiro seguro de 1958" },
      { name: "Nilton Santos", pos: "DEF", rating: 93, desc: "A Enciclopédia do Futebol" },
      { name: "Zito", pos: "MEI", rating: 88, desc: "Motor de passes do meio-campo" },
      { name: "Didi", pos: "MEI", rating: 94, desc: "Inventor da Folha Seca" },
      { name: "Garrincha", pos: "ATA", rating: 98, desc: "O gênio das pernas tortas" },
      { name: "Pelé", pos: "ATA", rating: 99, desc: "O Rei do Futebol em 1958" },
      { name: "Vavá", pos: "ATA", rating: 90, desc: "Artilheiro brigador de decisões" },
      { name: "Zagallo", pos: "ATA", rating: 89, desc: "Formiguinha tática do ataque" }
    ]
  },
  {
    name: "Brasil 1970",
    coach: "Mário Zagallo",
    players: [
      { name: "Félix", pos: "GOL", rating: 84, desc: "Paredão do tricampeonato de 70" },
      { name: "Carlos Alberto", pos: "DEF", rating: 94, desc: "Autor do gol do Tri" },
      { name: "Brito", pos: "DEF", rating: 87, desc: "Zagueiro forte e imponente" },
      { name: "Piazza", pos: "DEF", rating: 86, desc: "Volante recuado de alto nível" },
      { name: "Everaldo", pos: "DEF", rating: 85, desc: "Segurança pela lateral-esquerda" },
      { name: "Clodoaldo", pos: "MEI", rating: 89, desc: "Gênio dos dribles no meio-campo" },
      { name: "Gérson", pos: "MEI", rating: 93, desc: "O cérebro tático com lançamentos de ouro" },
      { name: "Rivellino", pos: "MEI", rating: 95, desc: "Dono do elástico e da Patada Atômica" },
      { name: "Jairzinho", pos: "ATA", rating: 96, desc: "O Furacão da Copa de 70" },
      { name: "Tostão", pos: "ATA", rating: 92, desc: "Inteligência refinada de falso 9" },
      { name: "Pelé", pos: "ATA", rating: 100, desc: "O maior de todos os tempos no auge" }
    ]
  },
  {
    name: "Brasil 1982",
    coach: "Telê Santana",
    players: [
      { name: "Waldir Peres", pos: "GOL", rating: 82, desc: "Arqueiro do lendário time de 82" },
      { name: "Leandro", pos: "DEF", rating: 91, desc: "Lateral técnico insuperável" },
      { name: "Oscar", pos: "DEF", rating: 87, desc: "Xerife seguro de 1982" },
      { name: "Luizinho", pos: "DEF", rating: 86, desc: "Classe e refinamento técnico na zaga" },
      { name: "Júnior", pos: "DEF", rating: 92, desc: "O Maestro da lateral-esquerda" },
      { name: "Toninho Cerezo", pos: "MEI", rating: 89, desc: "Fôlego inesgotável" },
      { name: "Falcão", pos: "MEI", rating: 94, desc: "O Rei de Roma" },
      { name: "Sócrates", pos: "MEI", rating: 95, desc: "O Doutor do futebol mundial" },
      { name: "Zico", pos: "MEI", rating: 98, desc: "O Galinho de Quintino, craque absoluto" },
      { name: "Éder Aleixo", pos: "ATA", rating: 89, desc: "Dono do chute mais forte da Copa" },
      { name: "Serginho", pos: "ATA", rating: 83, desc: "Centroavante brigador" }
    ]
  },
  {
    name: "Brasil 1994",
    coach: "Carlos Alberto Parreira",
    players: [
      { name: "Taffarel", pos: "GOL", rating: 92, desc: "O herói das cobranças de pênalti do tetra" },
      { name: "Jorginho", pos: "DEF", rating: 90, desc: "Lateral cruzador impecável" },
      { name: "Aldair", pos: "DEF", rating: 92, desc: "Zagueiro elegante e cirúrgico" },
      { name: "Márcio Santos", pos: "DEF", rating: 87, desc: "Zagueiro seguro de 1994" },
      { name: "Branco", pos: "DEF", rating: 89, desc: "Autor do chute histórico de falta em 94" },
      { name: "Mauro Silva", pos: "MEI", rating: 91, desc: "Combate e posicionamento perfeito" },
      { name: "Dunga", pos: "MEI", rating: 91, desc: "O capitão raçudo do tetracampeonato" },
      { name: "Mazinho", pos: "MEI", rating: 87, desc: "Garante o ritmo técnico do meio" },
      { name: "Zinho", pos: "MEI", rating: 86, desc: "O motor tático na armação" },
      { name: "Bebeto", pos: "ATA", rating: 93, desc: "Parceiro brilhante de Romário" },
      { name: "Romário", pos: "ATA", rating: 98, desc: "O gênio da grande área em 1994" }
    ]
  },
  {
    name: "Brasil 2002",
    coach: "Luiz Felipe Scolari",
    players: [
      { name: "Marcos", pos: "GOL", rating: 90, desc: "O 'São Marcos' do pentacampeonato" },
      { name: "Lúcio", pos: "DEF", rating: 91, desc: "Xerife com arrancadas perigosas" },
      { name: "Edmílson", pos: "DEF", rating: 86, desc: "Zagueiro clássico de passes limpos" },
      { name: "Roque Júnior", pos: "DEF", rating: 85, desc: "Força física e combate aéreo" },
      { name: "Cafu", pos: "DEF", rating: 92, desc: "O eterno capitão do penta" },
      { name: "Roberto Carlos", pos: "DEF", rating: 93, desc: "Lateral do chute de trivela de 190km/h" },
      { name: "Gilberto Silva", pos: "MEI", rating: 89, desc: "A maratona tática invisível" },
      { name: "Kléberson", pos: "MEI", rating: 86, desc: "Motor de apoio na final contra a Alemanha" },
      { name: "Ronaldinho", pos: "ATA", rating: 95, desc: "O Bruxo dos dribles mágicos" },
      { name: "Rivaldo", pos: "ATA", rating: 96, desc: "Decisivo, letal e craque em 2002" },
      { name: "Ronaldo", pos: "ATA", rating: 99, desc: "O Fenômeno na sua redenção histórica" }
    ]
  },
  {
    name: "Brasil 2006",
    coach: "Carlos Alberto Parreira",
    players: [
      { name: "Dida", pos: "GOL", rating: 90, desc: "Goleiro de frieza lendária em pênaltis" },
      { name: "Cafu", pos: "DEF", rating: 88, desc: "Lateral do Milan e capitão consagrado" },
      { name: "Lúcio", pos: "DEF", rating: 91, desc: "Zagueiro implacável em desarmes" },
      { name: "Juan", pos: "DEF", rating: 89, desc: "Técnica e tempo de bola perfeitos" },
      { name: "Roberto Carlos", pos: "DEF", rating: 90, desc: "Lateral de força lendária do Real Madrid" },
      { name: "Emerson", pos: "MEI", rating: 86, desc: "Volante de marcação rigorosa" },
      { name: "Zé Roberto", pos: "MEI", rating: 89, desc: "Polivalência e preparo físico impecável" },
      { name: "Kaká", pos: "MEI", rating: 95, desc: "Arrancadas verticais fulminantes" },
      { name: "Ronaldinho", pos: "MEI", rating: 97, desc: "O melhor do mundo no auge tático" },
      { name: "Adriano", pos: "ATA", rating: 93, desc: "O Imperador com chute demolidor de canhota" },
      { name: "Ronaldo", pos: "ATA", rating: 95, desc: "Artilheiro que quebrava defesas com o corpo" }
    ]
  },
  {
    name: "Brasil Moderno",
    coach: "Nova Geração",
    players: [
      { name: "Alisson", pos: "GOL", rating: 91, desc: "Goleiro seguro e preciso" },
      { name: "Marquinhos", pos: "DEF", rating: 90, desc: "Zagueiro de alta velocidade" },
      { name: "Thiago Silva", pos: "DEF", rating: 91, desc: "O monstro eterno do posicionamento" },
      { name: "Éder Militão", pos: "DEF", rating: 88, desc: "Zagueiro de combate implacável" },
      { name: "Guilherme Arana", pos: "DEF", rating: 84, desc: "Apoio importante pela esquerda" },
      { name: "Casemiro", pos: "MEI", rating: 92, desc: "Xerife do meio-campo e desarmes" },
      { name: "Bruno Guimarães", pos: "MEI", rating: 88, desc: "Qualidade na transição ofensiva" },
      { name: "Lucas Paquetá", pos: "MEI", rating: 86, desc: "Meio-campista articulador" },
      { name: "Neymar Jr", pos: "ATA", rating: 96, desc: "Camisa 10 de genialidade e drible" },
      { name: "Vinicius Jr", pos: "ATA", rating: 95, desc: "Velocidade letal, estrela da ponta" },
      { name: "Rodrygo", pos: "ATA", rating: 90, desc: "O Raio de gols decisivos" }
    ]
  }
];

const worldCupOpponents = [
  { name: "Uruguai 1950", flag: "🇺🇾", rating: 88, desc: "Carrasco do Maracanaço", players: ["Ghiggia", "Schiaffino", "Obdulio Varela", "Tejera"] },
  { name: "França 1998", flag: "🇫🇷", rating: 91, desc: "Geração dourada de Zidane", players: ["Zidane", "Petit", "Deschamps", "Barthez"] },
  { name: "Holanda 1974", flag: "🇳🇱", rating: 90, desc: "O Carrossel de Cruyff", players: ["Cruyff", "Neeskens", "Rensenbrink", "Krol"] },
  { name: "Itália 1982", flag: "🇮🇹", rating: 92, desc: "Algoz do Sarriá", players: ["Paolo Rossi", "Zoff", "Gentile", "Tardelli"] },
  { name: "França 2006", flag: "🇫🇷", rating: 93, desc: "O show de Zidane", players: ["Zidane", "Henry", "Vieira", "Ribéry"] },
  { name: "Alemanha 2014", flag: "🇩🇪", rating: 95, desc: "O fantasma do 7-1", players: ["Kroos", "Klose", "Müller", "Lahm"] },
  { name: "Argentina 1986", flag: "🇦🇷", rating: 96, desc: "Clássico contra o time do Maradona", players: ["Maradona", "Valdano", "Burruchaga", "Ruggeri"] }
];

let gameState = {
  coachName: "Mister",
  tactic: "4-3-3",
  squad: new Array(11).fill(null),
  draftRound: 0,
  currentDraftTeam: null,
  currentOptions: [],
  cupWins: 0,
  currentOpponentIndex: 0,
  isClassicMode: true
};

function getPositionsForTactic(tactic) {
  if (tactic === "4-4-2") {
    return ["GOL", "DEF", "DEF", "DEF", "DEF", "MEI", "MEI", "MEI", "MEI", "ATA", "ATA"];
  }
  if (tactic === "3-5-2") {
    return ["GOL", "DEF", "DEF", "DEF", "MEI", "MEI", "MEI", "MEI", "MEI", "ATA", "ATA"];
  }
  return ["GOL", "DEF", "DEF", "DEF", "DEF", "MEI", "MEI", "MEI", "ATA", "ATA", "ATA"];
}

function getPlayerCoords(pos, index, tactic) {
  const def4 = [{ bottom: "22%", left: "15%" }, { bottom: "18%", left: "38%" }, { bottom: "18%", left: "62%" }, { bottom: "22%", left: "85%" }];
  const def3 = [{ bottom: "20%", left: "20%" }, { bottom: "16%", left: "50%" }, { bottom: "20%", left: "80%" }];
  
  const mei3 = [{ bottom: "45%", left: "20%" }, { bottom: "40%", left: "50%" }, { bottom: "45%", left: "80%" }];
  const mei4 = [{ bottom: "46%", left: "15%" }, { bottom: "42%", left: "38%" }, { bottom: "42%", left: "62%" }, { bottom: "46%", left: "85%" }];
  const mei5 = [{ bottom: "48%", left: "12%" }, { bottom: "43%", left: "31%" }, { bottom: "38%", left: "50%" }, { bottom: "43%", left: "69%" }, { bottom: "48%", left: "88%" }];

  const ata3 = [{ bottom: "75%", left: "15%" }, { bottom: "82%", left: "50%" }, { bottom: "75%", left: "85%" }];
  const ata2 = [{ bottom: "78%", left: "33%" }, { bottom: "78%", left: "67%" }];

  const layouts = {
    "4-3-3": { "GOL": [{ bottom: "5%", left: "50%" }], "DEF": def4, "MEI": mei3, "ATA": ata3 },
    "4-4-2": { "GOL": [{ bottom: "5%", left: "50%" }], "DEF": def4, "MEI": mei4, "ATA": ata2 },
    "3-5-2": { "GOL": [{ bottom: "5%", left: "50%" }], "DEF": def3, "MEI": mei5, "ATA": ata2 }
  };

  const layout = layouts[tactic];
  const list = layout[pos];
  
  let count = 0;
  const positionsNeeded = getPositionsForTactic(tactic);
  for (let i = 0; i < index; i++) {
    if (positionsNeeded[i] === pos) count++;
  }
  return list[count % list.length];
}

// Função Auxiliar de Troca de Telas Defensiva
function showScreen(screenId) {
  const screens = ["tela-inicio", "tela-draft", "tela-simulador", "tela-vitoria"];
  screens.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === screenId) {
        el.style.setProperty("display", id === "tela-inicio" ? "block" : "flex", "important");
        el.classList.remove("hidden");
      } else {
        el.style.setProperty("display", "none", "important");
        el.classList.add("hidden");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btnTacticCards = document.querySelectorAll(".tactic-card");
  btnTacticCards.forEach(card => {
    card.addEventListener("click", () => {
      btnTacticCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      gameState.tactic = card.getAttribute("data-tactic");
    });
  });

  const btnIniciar = document.getElementById("btn-iniciar-draft");
  if (btnIniciar) {
    btnIniciar.addEventListener("click", () => {
      const inputCoach = document.getElementById("coach-name-input");
      const toggleClassic = document.getElementById("mode-classic-toggle");

      gameState.coachName = inputCoach ? inputCoach.value.trim() || "Mister" : "Mister";
      gameState.isClassicMode = toggleClassic ? toggleClassic.checked : true;
      
      iniciarDraft();
    });
  }

  const btnSimulate = document.getElementById("btn-simulate-match");
  if (btnSimulate) {
    btnSimulate.addEventListener("click", () => {
      executarSimulacaoMatch();
    });
  }
  
  // Garante que iniciamos no lobby de entrada
  showScreen("tela-inicio");
});

function iniciarDraft() {
  gameState.squad = new Array(11).fill(null);
  gameState.draftRound = 0;
  gameState.currentOpponentIndex = 0;
  gameState.cupWins = 0;

  showScreen("tela-draft");

  renderPitchNodes();
  proximaRodadaDraft();
}

function renderPitchNodes() {
  const pitch = document.getElementById("squad-pitch-container");
  if (!pitch) return;

  pitch.innerHTML = `
    <div class="pitch-line center-circle"></div>
    <div class="pitch-line penalty-area-top"></div>
    <div class="pitch-line penalty-area-bottom"></div>
  `;

  const positions = getPositionsForTactic(gameState.tactic);
  positions.forEach((pos, idx) => {
    const coords = getPlayerCoords(pos, idx, gameState.tactic);
    const div = document.createElement("div");
    div.className = "pitch-player";
    div.style.bottom = coords.bottom;
    div.style.left = coords.left;
    div.setAttribute("data-num", idx + 1);
    
    const player = gameState.squad[idx];
    if (player) {
      div.classList.add("filled");
      div.setAttribute("data-name", player.name.split(" ").pop());
      div.innerText = gameState.isClassicMode ? player.rating : "?";
    } else {
      div.innerText = pos;
      div.setAttribute("data-name", "");
    }

    if (idx === gameState.draftRound) {
      div.classList.add("active");
    }

    pitch.appendChild(div);
  });
}

function proximaRodadaDraft() {
  if (gameState.draftRound >= 11) {
    finalizarConvocacao();
    return;
  }

  const positions = getPositionsForTactic(gameState.tactic);
  const targetPos = positions[gameState.draftRound];

  document.getElementById("draft-round-title").innerText = "CONVOCAÇÃO - CRAQUE " + (gameState.draftRound + 1) + " / 11";
  document.getElementById("draft-roll-info").innerText = "Sorteando um elenco histórico... Escolha uma lenda!";

  // Sorteia um elenco brasileiro completo
  const randomTeam = brazilDraftDatabase[Math.floor(Math.random() * brazilDraftDatabase.length)];
  gameState.currentDraftTeam = randomTeam;

  const teamTitle = document.getElementById("draft-team-title");
  if (teamTitle) {
    teamTitle.innerText = "ELENCO SORTEADO: " + randomTeam.name.toUpperCase();
  }
  const teamSubtitle = document.getElementById("draft-team-subtitle");
  if (teamSubtitle) {
    teamSubtitle.innerText = "Escale um craque do " + randomTeam.name + " (" + randomTeam.coach + ") para a sua seleção!";
  }

  gameState.currentOptions = randomTeam.players;
  renderCandidatos();
  renderPitchNodes();
}

function renderCandidatos() {
  const grid = document.getElementById("draft-players-options");
  if (!grid) return;

  grid.innerHTML = "";
  const positionsNeeded = getPositionsForTactic(gameState.tactic);

  gameState.currentOptions.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    // Encontra a primeira vaga em aberto para essa posição na tática ativa
    const emptySlotIndex = positionsNeeded.findIndex((pos, idx) => pos === player.pos && gameState.squad[idx] === null);
    const isFull = emptySlotIndex === -1;

    if (isFull) {
      card.classList.add("disabled-card");
    }

    const ovrDisplay = gameState.isClassicMode ? player.rating : "?";
    const descDisplay = gameState.isClassicMode ? player.desc : "Atleta brasileiro histórico";

    card.innerHTML = `
      <div class="card-ovr-medal">${ovrDisplay}</div>
      <div class="player-card-name">${player.name}</div>
      <div class="player-card-sub">${player.pos} ${isFull ? '<strong style="color:#d9534f; font-size:0.75rem;">(Sem Vagas)</strong>' : ''}</div>
      <div style="font-size: 0.72rem; color: #777; margin-top: 4px; text-align: center;">${descDisplay}</div>
    `;

    card.addEventListener("click", () => {
      if (isFull) {
        alert("Seu esquema tático (" + gameState.tactic + ") já preencheu todas as vagas para a posição de " + player.pos + "! Por favor, escolha um jogador de outra posição disponível neste elenco convocado.");
        return;
      }
      recrutarJogador(player, emptySlotIndex);
    });
    grid.appendChild(card);
  });
}

function recrutarJogador(player, emptySlotIndex) {
  gameState.squad[emptySlotIndex] = player;
  gameState.draftRound++;

  const totalOvr = gameState.squad.filter(p => p !== null).reduce((acc, p) => acc + p.rating, 0);
  const count = gameState.squad.filter(p => p !== null).length;
  const currentOvr = count > 0 ? Math.round(totalOvr / count) : 0;

  document.getElementById("stat-ovr-val").innerText = gameState.isClassicMode ? currentOvr : "?";
  document.getElementById("stat-count-val").innerText = count + " / 11";

  proximaRodadaDraft();
}

function finalizarConvocacao() {
  showScreen("tela-simulador");

  const totalOvr = gameState.squad.filter(p => p !== null).reduce((acc, p) => acc + p.rating, 0);
  const avgOvr = Math.round(totalOvr / 11);

  document.getElementById("sim-user-team-name").innerText = gameState.coachName + " FC";
  document.getElementById("sim-user-team-ovr").innerText = "OVR: " + (gameState.isClassicMode ? avgOvr : "?");

  prepararOponenteCopa();
}

function prepararOponenteCopa() {
  const opp = worldCupOpponents[gameState.currentOpponentIndex];
  
  document.getElementById("sim-status-desc").innerText = "Copa do Mundo - Confronto " + (gameState.currentOpponentIndex + 1) + " de 7 (" + (gameState.currentOpponentIndex < 3 ? "Fase de Grupos" : "Fase Eliminatória") + ")";
  document.getElementById("sim-opp-flag").innerText = opp.flag;
  document.getElementById("sim-opp-name").innerText = opp.name;
  document.getElementById("sim-opp-ovr").innerText = "OVR: " + (gameState.isClassicMode ? opp.rating : "?");
  document.getElementById("sim-score-board").innerText = "0 - 0";
  document.getElementById("sim-match-live-log").innerText = "Pronto para desafiar " + opp.name + "!";
  document.getElementById("sim-record-val").innerText = gameState.cupWins + " Vitórias";
}

function executarSimulacaoMatch() {
  const btn = document.getElementById("btn-simulate-match");
  if (btn) btn.disabled = true;

  const logBox = document.getElementById("sim-match-live-log");
  logBox.innerHTML = "⚽ <strong>PARTIDA INICIADA! O JUIZ APITA!</strong><br>";

  const opp = worldCupOpponents[gameState.currentOpponentIndex];
  const userOvr = Math.round(gameState.squad.filter(p => p !== null).reduce((acc, p) => acc + p.rating, 0) / 11);
  const oppOvr = opp.rating;

  let userGoals = 0;
  let oppGoals = 0;
  let time = 0;

  const interval = setInterval(() => {
    time += 15;
    if (time < 90) {
      const chance = Math.random() * 100;
      if (chance < 15) {
        const attacker = gameState.squad[Math.floor(Math.random() * 11)];
        if (Math.random() * (userOvr + 10) > Math.random() * oppOvr) {
          userGoals++;
          logBox.innerHTML += "⏱️ " + time + "' - 🇧🇷 <strong>GOL DO BRASIL!</strong> Maravilhosa finalização de " + attacker.name + "! (" + userGoals + " x " + oppGoals + ")<br>";
        } else {
          logBox.innerHTML += "⏱️ " + time + "' - 🇧🇷 Ataque perigoso de " + attacker.name + ", mas a defesa oponente impede!<br>";
        }
      } else if (chance < 28) {
        const oppPlayer = opp.players[Math.floor(Math.random() * opp.players.length)];
        if (Math.random() * (oppOvr + 10) > Math.random() * userOvr) {
          oppGoals++;
          logBox.innerHTML += "⏱️ " + time + "' - ❌ <strong>GOL DO " + opp.name.toUpperCase() + "!</strong> Chute preciso de " + oppPlayer + ". (" + userGoals + " x " + oppGoals + ")<br>";
        } else {
          logBox.innerHTML += "⏱️ " + time + "' - ❌ Perigo! " + oppPlayer + " chuta à queima-roupa, mas fazemos grande defesa!<br>";
        }
      } else {
        logBox.innerHTML += "⏱️ " + time + "' - Disputa intensa pela posse de bola no meio-campo...<br>";
      }
      logBox.scrollTop = logBox.scrollHeight;
      document.getElementById("sim-score-board").innerText = userGoals + " - " + oppGoals;
    } else {
      clearInterval(interval);
      concluirTempoRegulamentar(userGoals, oppGoals, userOvr, oppOvr);
    }
  }, 1000);
}

function concluirTempoRegulamentar(userGoals, oppGoals, userOvr, oppOvr) {
  const logBox = document.getElementById("sim-match-live-log");
  const opp = worldCupOpponents[gameState.currentOpponentIndex];
  
  logBox.innerHTML += "⏱️ 90' - <strong>FIM DO TEMPO REGULAMENTAR!</strong> Brasil " + userGoals + " x " + oppGoals + " " + opp.name + ".<br>";
  
  if (userGoals > oppGoals) {
    avancarCopa();
  } else if (userGoals < oppGoals) {
    eliminarCopa();
  } else {
    logBox.innerHTML += "⏱️ <strong>DECISÃO NOS PÊNALTIS!</strong> Que momento dramático!<br>";
    logBox.scrollTop = logBox.scrollHeight;
    
    setTimeout(() => {
      executarPenaltis(userOvr, oppOvr);
    }, 2000);
  }
}

function executarPenaltis(userOvr, oppOvr) {
  const logBox = document.getElementById("sim-match-live-log");
  const opp = worldCupOpponents[gameState.currentOpponentIndex];
  
  let userPen = 0;
  let oppPen = 0;
  let r = 1;

  const interval = setInterval(() => {
    if (r <= 5 || userPen === oppPen) {
      const userSuccess = Math.random() * userOvr > Math.random() * 40;
      if (userSuccess) {
        userPen++;
        logBox.innerHTML += "⚽ Cobrança " + r + ": 🇧🇷 <strong>GOL do Brasil!</strong> (Série: " + userPen + " x " + oppPen + ")<br>";
      } else {
        logBox.innerHTML += "❌ Cobrança " + r + ": 🇧🇷 Errou! O goleiro defendeu!<br>";
      }

      const oppSuccess = Math.random() * oppOvr > Math.random() * 40;
      if (oppSuccess) {
        oppPen++;
        logBox.innerHTML += "⚽ Cobrança " + r + ": " + opp.flag + " <strong>GOL do " + opp.name + "!</strong> (Série: " + userPen + " x " + oppPen + ")<br>";
      } else {
        logBox.innerHTML += "❌ Cobrança " + r + ": " + opp.flag + " Defendeu! Nosso goleiro busca!<br>";
      }
      
      logBox.scrollTop = logBox.scrollHeight;
      r++;
    } else {
      clearInterval(interval);
      if (userPen > oppPen) {
        logBox.innerHTML += "🎉 <strong>FIM DA DISPUTA! Brasil vence por " + userPen + " x " + oppPen + "!</strong><br>";
        logBox.scrollTop = logBox.scrollHeight;
        avancarCopa();
      } else {
        logBox.innerHTML += "😢 <strong>FIM DA DISPUTA! Oponente vence por " + oppPen + " x " + userPen + "...</strong><br>";
        logBox.scrollTop = logBox.scrollHeight;
        eliminarCopa();
      }
    }
  }, 1200);
}

function avancarCopa() {
  gameState.cupWins++;
  gameState.currentOpponentIndex++;
  
  const btn = document.getElementById("btn-simulate-match");
  if (btn) btn.disabled = false;

  if (gameState.currentOpponentIndex >= 7) {
    exibirTelaHexa();
  } else {
    alert("Vitória épica! Avançamos na Copa do Mundo!");
    prepararOponenteCopa();
  }
}

function eliminarCopa() {
  alert("Fomos eliminados! O sonho do hexa foi adiado. Reformule suas táticas, selecione novos jogadores e tente novamente!");
  location.reload();
}

function exibirTelaHexa() {
  showScreen("tela-vitoria");

  const squadNames = gameState.squad.filter(p => p !== null).map(p => p.name + ' (' + p.rating + ' OVR)').join(', ');

  document.getElementById("victory-header-msg").innerText = "O BRASIL CONQUISTOU O HEXACAMPEONATO MUNDIAL!";
  document.getElementById("victory-desc-msg").innerHTML = `
    <p>O grito de <strong>"É CAMPEÃO!"</strong> finalmente ecoa de norte a sul por todos os cantos da pátria de chuteiras! O esquadrão imortal que você convocou superou com maestria todos os carrascos que um dia nos fizeram chorar, trazendo de volta a nossa glória máxima. O esquadrão brilhante liderado por você derrotou os gigantes mundiais na Copa do Mundo e levantou a sexta estrela ao céu!</p>
    <p style="margin-top: 15px; font-weight: bold; color: var(--br-blue);">SEU ESQUADRÃO VITORIOSO:</p>
    <p style="font-style: italic; background: rgba(0, 151, 57, 0.1); padding: 10px; border-left: 4px solid var(--br-green); border-radius: 4px;">${squadNames}</p>
    <p style="margin-top: 15px;">Parabéns, Professor <strong>${gameState.coachName}</strong>! Seu nome está eternamente escrito na galeria dos imortais do esporte brasileiro! ⭐⭐⭐⭐⭐⭐</p>
  `;
}
