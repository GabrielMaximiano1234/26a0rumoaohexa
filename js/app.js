// Banco de Dados Oficial - Seleções Brasileiras Históricas
const brazilDraftDatabase = [
  {
    name: "Brasil 1958",
    coach: "Vicente Feola",
    players: [
      { name: "Gilmar", pos: "GOL", rating: 88, desc: "Goleiro de extrema segurança, bicampeão em 58 e 62." },
      { name: "Djalma Santos", pos: "DEF", rating: 91, desc: "Lateral técnico lendário, eleito o melhor da Copa jogando apenas a final." },
      { name: "Bellini", pos: "DEF", rating: 88, desc: "O capitão imortalizado pelo gesto de erguer a taça sobre a cabeça." },
      { name: "Orlando Peçanha", pos: "DEF", rating: 86, desc: "Zagueiro clássico de ótimo senso de cobertura e desarmes limpos." },
      { name: "Nilton Santos", pos: "DEF", rating: 93, desc: "A 'Enciclopédia do Futebol', revolucionou a lateral-esquerda apoiando o ataque." },
      { name: "Zito", pos: "MEI", rating: 88, desc: "O motor tático do meio-campo e o líder vocal dentro de campo." },
      { name: "Didi", pos: "MEI", rating: 94, desc: "O cérebro criativo e inventor do chute folha-seca. Eleito o craque da Copa." },
      { name: "Garrincha", pos: "ATA", rating: 98, desc: "O gênio das pernas tortas, dono de dribles desconcertantes insuperáveis." },
      { name: "Pelé", pos: "ATA", rating: 99, desc: "O Rei do Futebol em seu surgimento assombroso com apenas 17 anos." },
      { name: "Vavá", pos: "ATA", rating: 90, desc: "O 'Peito de Aço', artilheiro brigador de decisões históricas." },
      { name: "Zagallo", pos: "ATA", rating: 89, desc: "O ponta-esquerda recuado que dava o equilíbrio tático fundamental." }
    ]
  },
  {
    name: "Brasil 1970",
    coach: "Mário Zagallo",
    players: [
      { name: "Félix", pos: "GOL", rating: 84, desc: "Goleiro ágil e corajoso, segurou a pressão rumo ao tricampeonato." },
      { name: "Carlos Alberto", pos: "DEF", rating: 94, desc: "O Capitão do Tri, autor do gol antológico na grande final." },
      { name: "Brito", pos: "DEF", rating: 87, desc: "Zagueiro de vigor físico imponente e dedicação defensiva absoluta." },
      { name: "Piazza", pos: "DEF", rating: 86, desc: "Volante de origem adaptado com excelência para a zaga do Tri." },
      { name: "Everaldo", pos: "DEF", rating: 85, desc: "Lateral de marcação perfeita que garantia a liberdade dos meias." },
      { name: "Clodoaldo", pos: "MEI", rating: 89, desc: "O jovem gênio dos dribles no meio-campo e passe cadenciado." },
      { name: "Gérson", pos: "MEI", rating: 93, desc: "O 'Canhotinha de Ouro', cérebro com lançamentos milimétricos." },
      { name: "Rivellino", pos: "MEI", rating: 95, desc: "Dono do drible elástico e da 'Patada Atômica' de perna esquerda." },
      { name: "Jairzinho", pos: "ATA", rating: 96, desc: "O 'Furacão da Copa', marcou gols em todos os jogos de 1970." },
      { name: "Tostão", pos: "ATA", rating: 92, desc: "Inteligência genial atuando como falso 9, abrindo espaços para Pelé." },
      { name: "Pelé", pos: "ATA", rating: 100, desc: "O Rei do Futebol em seu auge absoluto e coroa do tricampeonato." }
    ]
  },
  {
    name: "Brasil 1982",
    coach: "Telê Santana",
    players: [
      { name: "Waldir Peres", pos: "GOL", rating: 82, desc: "Goleiro titular da seleção que encantou o mundo com o futebol arte." },
      { name: "Leandro", pos: "DEF", rating: 91, desc: "Lateral clássico de extrema técnica e criatividade saindo pro jogo." },
      { name: "Oscar", pos: "DEF", rating: 87, desc: "Xerife clássico de excelente imposição física e jogo aéreo." },
      { name: "Luizinho", pos: "DEF", rating: 86, desc: "Zagueiro elegante de desarmes limpos e saídas de bola refinadas." },
      { name: "Júnior", pos: "DEF", rating: 92, desc: "O 'Maestro' da lateral-esquerda, atuando como verdadeiro meia de armação." },
      { name: "Toninho Cerezo", pos: "MEI", rating: 89, desc: "Fôlego inesgotável e grande capacidade de transição área-a-área." },
      { name: "Falcão", pos: "MEI", rating: 94, desc: "O 'Rei de Roma', meio-campista completo de passes e chutes cirúrgicos." },
      { name: "Sócrates", pos: "MEI", rating: 95, desc: "O Doutor, inteligência acima da média com toques de calcanhar artísticos." },
      { name: "Zico", pos: "MEI", rating: 98, desc: "O Galinho de Quintino, dono de faltas fatais e visão de jogo mágica." },
      { name: "Éder Aleixo", pos: "ATA", rating: 89, desc: "A 'Bomba de Vespasiano', ponta de chutes violentos de longa distância." },
      { name: "Serginho", pos: "ATA", rating: 83, desc: "Centroavante físico que abria caminhos na base da força física." }
    ]
  },
  {
    name: "Brasil 1994",
    coach: "Carlos Alberto Parreira",
    players: [
      { name: "Taffarel", pos: "GOL", rating: 92, desc: "Goleiro gigante nas penalidades e salvador do Tetracampeonato." },
      { name: "Jorginho", pos: "DEF", rating: 90, desc: "Lateral de cruzamentos impecáveis e excelente apoio ofensivo." },
      { name: "Aldair", pos: "DEF", rating: 92, desc: "Zagueiro refinado e cirúrgico, técnica pura na linha defensiva." },
      { name: "Márcio Santos", pos: "DEF", rating: 87, desc: "Zagueiro de ótima impulsão e posicionamento preciso em 94." },
      { name: "Branco", pos: "DEF", rating: 89, desc: "Dono do chute histórico de falta que eliminou a Holanda em 94." },
      { name: "Mauro Silva", pos: "MEI", rating: 91, desc: "O cão de guarda da defesa, desarmador incansável e tático." },
      { name: "Dunga", pos: "MEI", rating: 91, desc: "O capitão raçudo e símbolo de determinação do Tetra em 94." },
      { name: "Mazinho", pos: "MEI", rating: 87, desc: "Garantia de posse de bola e inteligência na circulação no meio." },
      { name: "Zinho", pos: "MEI", rating: 86, desc: "Trabalho tático incansável de ligação e retenção de bola." },
      { name: "Bebeto", pos: "ATA", rating: 93, desc: "Parceiro genial de Romário, oportunista de técnica refinada." },
      { name: "Romário", pos: "ATA", rating: 98, desc: "O 'Baixinho', carregou o ataque em 94 com finalizações mortais." }
    ]
  },
  {
    name: "Brasil 2002",
    coach: "Luiz Felipe Scolari",
    players: [
      { name: "Marcos", pos: "GOL", rating: 90, desc: "O 'São Marcos' do Penta, autor de milagres contra a Alemanha." },
      { name: "Lúcio", pos: "DEF", rating: 91, desc: "Zagueiro imponente de arrancadas ofensivas fulminantes." },
      { name: "Edmílson", pos: "DEF", rating: 86, desc: "Líbero técnico que facilitava a transição com passes verticais." },
      { name: "Roque Júnior", pos: "DEF", rating: 84, desc: "Vigor físico e dedicação aérea na zaga de três defensores." },
      { name: "Cafu", pos: "DEF", rating: 92, desc: "O capitão recordista de finais de Copa, pulmão inesgotável." },
      { name: "Roberto Carlos", pos: "DEF", rating: 93, desc: "Chutes devastadores de falta e arrancadas imparáveis." },
      { name: "Gilberto Silva", pos: "MEI", rating: 89, desc: "A 'Muralha Invisível', segurança defensiva à frente dos zagueiros." },
      { name: "Kléberson", pos: "MEI", rating: 86, desc: "Dinâmica e assistências na reta final do Penta de 2002." },
      { name: "Ronaldinho", pos: "ATA", rating: 95, desc: "O 'Bruxo' da magia de passes e o gol antológico encobrindo Seaman." },
      { name: "Rivaldo", pos: "ATA", rating: 96, desc: "Decisivo, elegante e artilheiro letal em jogos decisivos de 2002." },
      { name: "Ronaldo", pos: "ATA", rating: 99, desc: "O Fenômeno na sua redenção histórica, marcando 8 gols no Penta." }
    ]
  },
  {
    name: "Brasil 2006",
    coach: "Carlos Alberto Parreira",
    players: [
      { name: "Dida", pos: "GOL", rating: 90, desc: "Goleiro de frieza lendária, pegador de pênaltis e muralha física." },
      { name: "Cicinho", pos: "DEF", rating: 86, desc: "Lateral ultra ofensivo e cruzador de extrema qualidade." },
      { name: "Lúcio", pos: "DEF", rating: 91, desc: "Xerife com tempo de bola exemplar e arrancadas de contra-ataque." },
      { name: "Juan", pos: "DEF", rating: 89, desc: "Zagueiro técnico com tempo de bola e desarmes perfeitos." },
      { name: "Gilberto", pos: "DEF", rating: 84, desc: "Lateral equilibrado com ótimas coberturas defensivas." },
      { name: "Emerson", pos: "MEI", rating: 86, desc: "Volante de marcação pesada, posicionamento e espírito de luta." },
      { name: "Zé Roberto", pos: "MEI", rating: 89, desc: "Versatilidade absurda e preparo físico impecável jogando no meio." },
      { name: "Kaká", pos: "MEI", rating: 95, desc: "Arrancadas fulminantes em linha reta e chutes precisos na corrida." },
      { name: "Ronaldinho", pos: "MEI", rating: 97, desc: "O Bruxo no topo do mundo de sua habilidade plástica." },
      { name: "Adriano", pos: "ATA", rating: 93, desc: "O Imperador com chute demolidor de perna esquerda e força bruta." },
      { name: "Ronaldo", pos: "ATA", rating: 95, desc: "Finalizador cirúrgico que bateu o recorde de gols em Copas em 2006." }
    ]
  },
  {
    name: "Brasil Moderno",
    coach: "Nova Geração",
    players: [
      { name: "Alisson", pos: "GOL", rating: 91, desc: "Goleiro seguro de posicionamento impecável e ótima saída de bola." },
      { name: "Ederson", pos: "GOL", rating: 90, desc: "Muralha elástica de lançamentos milimétricos com o pé esquerdo." },
      { name: "Marquinhos", pos: "DEF", rating: 90, desc: "Zagueiro rápido e inteligente nos desarmes de um contra um." },
      { name: "Thiago Silva", pos: "DEF", rating: 91, desc: "O 'Monstro', leitura de jogo defensivo genial e desarmes cruciais." },
      { name: "Éder Militão", pos: "DEF", rating: 88, desc: "Força física explosiva e versatilidade na zaga ou lateral." },
      { name: "Danilo", pos: "DEF", rating: 85, desc: "Lateral de base defensiva sólida e inteligência tática central." },
      { name: "Casemiro", pos: "MEI", rating: 91, desc: "Muralha defensiva no meio-campo, liderança e desarmes físicos." },
      { name: "Bruno Guimarães", pos: "MEI", rating: 88, desc: "Visão de passe vertical refinada e fôlego de transição constante." },
      { name: "Lucas Paquetá", pos: "MEI", rating: 86, desc: "Criatividade no passe de ataque e ótima chegada aérea à área." },
      { name: "Neymar Jr", pos: "ATA", rating: 96, desc: "Dono de criatividade genial, faltas perigosas e gols históricos." },
      { name: "Vinicius Jr", pos: "ATA", rating: 94, desc: "Velocidade explosiva imparável no um contra um e gols de peso europeu." },
      { name: "Rodrygo", pos: "ATA", rating: 90, desc: "Inteligência tática refinada e frieza extrema na área adversária." },
      { name: "Raphinha", pos: "ATA", rating: 87, desc: "Pontaria afiada em faltas e muita dedicação de combate tático." }
    ]
  }
];

// Configurações dos Esquemas Táticos e Posições (percentuais top, left no campo de futebol)
const formations = {
  "4-3-3": [
    { label: "GOL", pos: "GOL", top: "90%", left: "50%" },
    { label: "LDE", pos: "DEF", top: "72%", left: "15%" },
    { label: "ZAG1", pos: "DEF", top: "75%", left: "38%" },
    { label: "ZAG2", pos: "DEF", top: "75%", left: "62%" },
    { label: "LPE", pos: "DEF", top: "72%", left: "85%" },
    { label: "VOL", pos: "MEI", top: "55%", left: "50%" },
    { label: "MC1", pos: "MEI", top: "45%", left: "30%" },
    { label: "MC2", pos: "MEI", top: "45%", left: "70%" },
    { label: "PD", pos: "ATA", top: "20%", left: "20%" },
    { label: "CA", pos: "ATA", top: "15%", left: "50%" },
    { label: "PE", pos: "ATA", top: "20%", left: "80%" }
  ],
  "4-4-2": [
    { label: "GOL", pos: "GOL", top: "90%", left: "50%" },
    { label: "LDE", pos: "DEF", top: "72%", left: "15%" },
    { label: "ZAG1", pos: "DEF", top: "75%", left: "38%" },
    { label: "ZAG2", pos: "DEF", top: "75%", left: "62%" },
    { label: "LPE", pos: "DEF", top: "72%", left: "85%" },
    { label: "VOL1", pos: "MEI", top: "55%", left: "35%" },
    { label: "VOL2", pos: "MEI", top: "55%", left: "65%" },
    { label: "MEI1", pos: "MEI", top: "40%", left: "25%" },
    { label: "MEI2", pos: "MEI", top: "40%", left: "75%" },
    { label: "CA1", pos: "ATA", top: "18%", left: "40%" },
    { label: "CA2", pos: "ATA", top: "18%", left: "60%" }
  ],
  "3-5-2": [
    { label: "GOL", pos: "GOL", top: "90%", left: "50%" },
    { label: "ZAG1", pos: "DEF", top: "75%", left: "30%" },
    { label: "ZAG2", pos: "DEF", top: "78%", left: "50%" },
    { label: "ZAG3", pos: "DEF", top: "75%", left: "70%" },
    { label: "ALA1", pos: "MEI", top: "52%", left: "12%" },
    { label: "VOL1", pos: "MEI", top: "58%", left: "35%" },
    { label: "VOL2", pos: "MEI", top: "58%", left: "65%" },
    { label: "ALA2", pos: "MEI", top: "52%", left: "88%" },
    { label: "MEI", pos: "MEI", top: "38%", left: "50%" },
    { label: "CA1", pos: "ATA", top: "18%", left: "40%" },
    { label: "CA2", pos: "ATA", top: "18%", left: "60%" }
  ]
};

// Carrascos Históricos da Copa do Mundo (7 partidas)
const cupOpponents = [
  {
    name: "Uruguai 1950",
    flag: "🇺🇾",
    rating: 85,
    stage: "Fase de Grupos - Rodada 1",
    desc: "A assombrosa geração que silenciou o Maracanã com Obdulio Varela e Ghiggia.",
    scorers: ["Ghiggia", "Schiaffino", "Míguez"],
    defenders: ["Tejera", "Varela", "González"],
    goalkeeper: "Máspoli"
  },
  {
    name: "França 1998",
    flag: "🇫🇷",
    rating: 88,
    stage: "Fase de Grupos - Rodada 2",
    desc: "O time de Zidane, Deschamps e Petit que bateu o Brasil no Stade de France.",
    scorers: ["Zidane", "Petit", "Djorkaeff"],
    defenders: ["Desailly", "Thuram", "Lizarazu"],
    goalkeeper: "Barthez"
  },
  {
    name: "Holanda 1974",
    flag: "🇳🇱",
    rating: 90,
    stage: "Fase de Grupos - Rodada 3",
    desc: "O Carrossel Holandês comandado por Cruyff que assombrou o futebol de passes rápidos.",
    scorers: ["Cruyff", "Neeskens", "Rep"],
    defenders: ["Krol", "Rijsbergen", "Suurbier"],
    goalkeeper: "Jongbloed"
  },
  {
    name: "Itália 1982",
    flag: "🇮🇹",
    rating: 92,
    stage: "Oitavas de Final",
    desc: "A implacável Azzurra da Tragédia do Sarriá, com Paolo Rossi devastador.",
    scorers: ["Paolo Rossi", "Tardelli", "Cabrin"],
    defenders: ["Gentile", "Scirea", "Collovati"],
    goalkeeper: "Zoff"
  },
  {
    name: "França 2006",
    flag: "🇫🇷",
    rating: 94,
    stage: "Quartas de Final",
    desc: "Zidane em noite de gala orquestrando uma exibição tática lendária contra o Quadrado Mágico.",
    scorers: ["Henry", "Ribéry", "Vieira"],
    defenders: ["Thuram", "Gallas", "Sagnol"],
    goalkeeper: "Barthez"
  },
  {
    name: "Alemanha 2014",
    flag: "🇩🇪",
    rating: 96,
    stage: "Semifinal",
    desc: "A engrenagem perfeita que aplicou o catastrófico 7 a 1 no Mineirão.",
    scorers: ["Müller", "Kroos", "Klose", "Khedira", "Schürrle"],
    defenders: ["Hummels", "Boateng", "Lahm"],
    goalkeeper: "Neuer"
  },
  {
    name: "Argentina 1986",
    flag: "🇦🇷",
    rating: 98,
    stage: "A Grande Final",
    desc: "O arqui-inimigo sul-americano carregado pelo maior de sua história: Diego Armando Maradona.",
    scorers: ["Maradona", "Valdano", "Burruchaga"],
    defenders: ["Ruggeri", "Brown", "Cuciuffo"],
    goalkeeper: "Pumpido"
  }
];

// Variáveis de Estado do Jogo
let gameState = {
  coachName: "Mister",
  selectedTactic: "4-3-3",
  draftedPlayers: [], // Armazena objetos dos 11 jogadores convocados
  draftedNames: new Set(), // Nomes para evitar duplicidade pura no draft
  currentDraftIndex: 0,
  currentMatchIndex: 0,
  groupPoints: 0, // Pontuação da Fase de Grupos (precisa de >= 4 para classificar)
  squadOvr: 0,
  matchInProgress: false,
  
  // Pênaltis
  penaltyShootout: {
    active: false,
    userScore: 0,
    oppScore: 0,
    userAttempts: [], // 'scored' ou 'missed'
    oppAttempts: [],
    round: 0,
    userTurn: true // true se o usuário está chutando, false se defendendo
  }
};

// Elementos da DOM
const screens = {
  lobby: document.getElementById("tela-inicio"),
  draft: document.getElementById("tela-draft"),
  simulator: document.getElementById("tela-simulador"),
  victory: document.getElementById("tela-vitoria")
};

// Iniciar Listeners ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  setupTacticSelector();
  setupLobbyButton();
  setupSimulateButton();
  setupPenaltyGoalClicks();
});

// 1. LOBBY - Seleção Tática
function setupTacticSelector() {
  const cards = document.querySelectorAll(".tactic-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      gameState.selectedTactic = card.getAttribute("data-tactic");
    });
  });
}

function setupLobbyButton() {
  const btn = document.getElementById("btn-iniciar-draft");
  btn.addEventListener("click", () => {
    const input = document.getElementById("coach-name-input");
    if (input.value.trim() !== "") {
      gameState.coachName = input.value.trim();
    }
    transitionToScreen("draft");
    initDraft();
  });
}

// 2. DRAFT - Fluxo de Convocação
function initDraft() {
  gameState.draftedPlayers = new Array(11).fill(null);
  gameState.draftedNames.clear();
  gameState.currentDraftIndex = 0;
  gameState.squadOvr = 0;
  
  // Ocultar botões extras
  document.getElementById("btn-goto-simulator").classList.add("hidden");
  document.getElementById("draft-players-options").classList.remove("hidden");
  
  renderPitch();
  proximaRodadaDraft();
}

function renderPitch() {
  const container = document.getElementById("squad-pitch-container");
  
  // Manter apenas as linhas fixas do campo
  const lines = container.querySelectorAll(".pitch-line, .penalty-spot-top, .penalty-spot-bottom");
  container.innerHTML = "";
  lines.forEach(l => container.appendChild(l));
  
  // Renderizar cada círculo tático do esquema escolhido
  const tCfg = formations[gameState.selectedTactic];
  tCfg.forEach((posCfg, idx) => {
    const playerDiv = document.createElement("div");
    playerDiv.className = "pitch-player";
    playerDiv.style.top = posCfg.top;
    playerDiv.style.left = posCfg.left;
    playerDiv.setAttribute("data-index", idx);
    
    const drafted = gameState.draftedPlayers[idx];
    if (drafted) {
      playerDiv.classList.add("filled");
      playerDiv.innerText = drafted.rating;
      playerDiv.setAttribute("data-name", drafted.name);
    } else {
      playerDiv.innerText = posCfg.label;
      playerDiv.removeAttribute("data-name");
      if (idx === gameState.currentDraftIndex) {
        playerDiv.classList.add("active");
      }
    }
    container.appendChild(playerDiv);
  });
}

function proximaRodadaDraft() {
  const optionsGrid = document.getElementById("draft-players-options");
  optionsGrid.innerHTML = "";
  
  if (gameState.currentDraftIndex === -1) {
    finishDraft();
    return;
  }
  
  // Sortear uma equipe inteira do banco de dados
  const randomTeam = brazilDraftDatabase[Math.floor(Math.random() * brazilDraftDatabase.length)];
  gameState.currentDrawnTeam = randomTeam;
  
  // Atualizar cabeçalhos de progresso
  const filledCount = gameState.draftedPlayers.filter(p => p !== null).length;
  document.getElementById("draft-round-title").innerText = `CONVOCAÇÃO - ELENCO: ${randomTeam.name.toUpperCase()}`;
  document.getElementById("draft-roll-info").innerText = `Técnico: ${randomTeam.coach}. Escale um craque para uma das vagas de [${gameState.selectedTactic}]`;
  
  renderCandidatos();
  renderPitch();
}

function hasOpenSlot(pos) {
  const formationCfg = formations[gameState.selectedTactic];
  const requiredCount = formationCfg.filter(slot => slot.pos === pos).length;
  const filledCount = gameState.draftedPlayers.filter((drafted, i) => drafted !== null && formationCfg[i].pos === pos).length;
  return filledCount < requiredCount;
}

function renderCandidatos() {
  const optionsGrid = document.getElementById("draft-players-options");
  optionsGrid.innerHTML = "";
  
  const team = gameState.currentDrawnTeam;
  if (!team) return;
  
  team.players.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";
    
    const isAlreadyDrafted = gameState.draftedNames.has(player.name);
    const openSlotExists = hasOpenSlot(player.pos);
    const isDisabled = isAlreadyDrafted || !openSlotExists;
    
    if (isDisabled) {
      card.classList.add("disabled-card");
    }
    
    card.innerHTML = `
      <div class="card-ovr-medal">${player.rating}</div>
      <div class="card-year-badge">${team.name}</div>
      <div class="player-card-name">${player.name}</div>
      <div class="player-card-sub">${player.pos}</div>
      <div class="player-card-desc">${player.desc}</div>
    `;
    
    card.addEventListener("click", () => {
      if (isDisabled) {
        let msg = "";
        if (isAlreadyDrafted) {
          msg = `Você já convocou ${player.name} para a sua Seleção!`;
        } else {
          msg = `Não há mais vagas para a posição de ${player.pos} no esquema ${gameState.selectedTactic}!`;
        }
        alert(msg);
        return;
      }
      draftPlayer(player, team.name);
    });
    
    optionsGrid.appendChild(card);
  });
}

function draftPlayer(player, teamName) {
  // Encontrar a primeira vaga aberta daquela posição na tática
  const formationCfg = formations[gameState.selectedTactic];
  let emptyIdx = -1;
  for (let i = 0; i < formationCfg.length; i++) {
    if (formationCfg[i].pos === player.pos && gameState.draftedPlayers[i] === null) {
      emptyIdx = i;
      break;
    }
  }
  
  if (emptyIdx === -1) return; // Segurança
  
  gameState.draftedPlayers[emptyIdx] = {
    name: player.name,
    pos: player.pos,
    rating: player.rating,
    desc: player.desc,
    year: teamName
  };
  
  gameState.draftedNames.add(player.name);
  
  // Calcular média de OVR
  let sum = 0;
  let count = 0;
  gameState.draftedPlayers.forEach(p => {
    if (p) {
      sum += p.rating;
      count++;
    }
  });
  gameState.squadOvr = Math.round(sum / count);
  
  // Atualizar DOM de estatísticas
  document.getElementById("stat-ovr-val").innerText = gameState.squadOvr;
  document.getElementById("stat-count-val").innerText = `${count} / 11`;
  
  gameState.currentDraftIndex = gameState.draftedPlayers.indexOf(null);
  
  proximaRodadaDraft();
}

function finishDraft() {
  document.getElementById("draft-round-title").innerText = "CONVOCAÇÃO CONCLUÍDA!";
  document.getElementById("draft-roll-info").innerText = "Sua seleção está convocada e pronta para o desafio!";
  
  document.getElementById("draft-players-options").classList.add("hidden");
  
  const btnGo = document.getElementById("btn-goto-simulator");
  btnGo.classList.remove("hidden");
  
  // Limpar escuta anterior antes de anexar para evitar múltiplos cliques
  btnGo.replaceWith(btnGo.cloneNode(true));
  const newBtnGo = document.getElementById("btn-goto-simulator");
  
  newBtnGo.addEventListener("click", () => {
    transitionToScreen("simulator");
    initTournament();
  });
}

// 3. SIMULADOR - Fase da Copa
function initTournament() {
  gameState.currentMatchIndex = 0;
  gameState.groupPoints = 0;
  gameState.matchInProgress = false;
  gameState.penaltyShootout.active = false;
  
  // Configurar o HUD inicial
  document.getElementById("sim-user-team-name").innerText = `Seleção do ${gameState.coachName}`;
  document.getElementById("sim-user-team-ovr").innerText = `OVR: ${gameState.squadOvr}`;
  
  updateMatchupHUD();
}

function updateMatchupHUD() {
  const opp = cupOpponents[gameState.currentMatchIndex];
  
  document.getElementById("sim-status-desc").innerText = `Copa do Mundo - ${opp.stage}`;
  
  // Exibir a pontuação da Fase de Grupos
  if (gameState.currentMatchIndex < 3) {
    document.getElementById("sim-record-val").innerText = `${gameState.groupPoints} Pontos`;
  } else {
    document.getElementById("sim-record-val").innerText = `Mata-Mata`;
  }
  
  document.getElementById("sim-opp-flag").innerText = opp.flag;
  document.getElementById("sim-opp-name").innerText = opp.name;
  document.getElementById("sim-opp-ovr").innerText = `OVR: ${opp.rating}`;
  
  document.getElementById("sim-score-board").innerText = "0 - 0";
  document.getElementById("sim-match-live-log").innerHTML = `<div class="match-log-line">Aguardando início... Oponente pronto: <strong>${opp.desc}</strong></div>`;
  
  const btnSim = document.getElementById("btn-simulate-match");
  btnSim.innerText = "INICIAR PARTIDA ➔";
  btnSim.classList.remove("hidden");
  document.getElementById("penalty-shootout-panel").classList.add("hidden");
}

function setupSimulateButton() {
  const btn = document.getElementById("btn-simulate-match");
  btn.addEventListener("click", () => {
    if (gameState.matchInProgress) return;
    
    const opp = cupOpponents[gameState.currentMatchIndex];
    if (btn.innerText.includes("AVANÇAR")) {
      gameState.currentMatchIndex++;
      updateMatchupHUD();
    } else if (btn.innerText.includes("REINICIAR")) {
      location.reload();
    } else {
      runSimulation();
    }
  });
}

function runSimulation() {
  gameState.matchInProgress = true;
  const btn = document.getElementById("btn-simulate-match");
  btn.classList.add("hidden");
  
  const logBox = document.getElementById("sim-match-live-log");
  logBox.innerHTML = "";
  
  const scoreBoard = document.getElementById("sim-score-board");
  
  const opp = cupOpponents[gameState.currentMatchIndex];
  
  let scoreUser = 0;
  let scoreOpp = 0;
  
  let minutes = 0;
  const timeIntervals = [10, 20, 30, 40, 45, 55, 65, 75, 85, 90];
  let step = 0;
  
  logToBox(0, "O juiz apita! Rola a bola para Brasil contra " + opp.name + "!");
  
  const simInterval = setInterval(() => {
    if (step >= timeIntervals.length) {
      clearInterval(simInterval);
      
      // Decisão pós 90 minutos
      if (scoreUser === scoreOpp && gameState.currentMatchIndex >= 3) {
        // Mata-mata empata: Prorrogação
        logToBox(90, "FIM DO TEMPO REGULAMENTAR! Jogo empatado em " + scoreUser + "x" + scoreOpp + ". Vamos para a PRORROGAÇÃO!");
        runExtraTime(scoreUser, scoreOpp);
      } else {
        finalizeMatch(scoreUser, scoreOpp);
      }
      return;
    }
    
    minutes = timeIntervals[step];
    
    // Intervalo de jogo
    if (minutes === 45) {
      logToBox(45, "Fim do primeiro tempo! O placar segue: " + scoreUser + " x " + scoreOpp);
      step++;
      return;
    }
    
    // Chance de lance ofensivo
    if (Math.random() < 0.6) {
      // Quem ataca? Baseado nos OVRs
      const totalOvr = gameState.squadOvr + opp.rating;
      if (Math.random() * totalOvr < gameState.squadOvr) {
        // Brasil ataca!
        const scorer = getRandomSquadPlayer("ATA", "MEI");
        const goalProb = (gameState.squadOvr / totalOvr) * 0.45;
        
        if (Math.random() < goalProb) {
          scoreUser++;
          scoreBoard.innerText = `${scoreUser} - ${scoreOpp}`;
          logToBox(minutes, `⚽ <span class="goal-event">GOOOOOL DO BRASIL!</span> <strong>${scorer.name}</strong> (${scorer.year}) aproveita com classe e chuta no ângulo!`, true);
        } else {
          const defender = opp.defenders[Math.floor(Math.random() * opp.defenders.length)];
          const failAction = getRandomMissAction(scorer.name, opp.goalkeeper, defender);
          logToBox(minutes, failAction);
        }
      } else {
        // Opponent ataca!
        const scorerName = opp.scorers[Math.floor(Math.random() * opp.scorers.length)];
        const goalProb = (opp.rating / totalOvr) * 0.4;
        
        if (Math.random() < goalProb) {
          scoreOpp++;
          scoreBoard.innerText = `${scoreUser} - ${scoreOpp}`;
          logToBox(minutes, `🚨 <strong>Gol de ${opp.name}!</strong> ${scorerName} encontra espaço e bate sem chances de defesa.`, true);
        } else {
          const myDefender = getRandomSquadPlayer("DEF", "MEI");
          const myKeeper = getRandomSquadPlayer("GOL");
          const failAction = getRandomOppMissAction(scorerName, myKeeper.name, myDefender.name);
          logToBox(minutes, failAction);
        }
      }
    } else {
      // Log genérico de meio campo
      logToBox(minutes, getRandomMidfieldAction());
    }
    
    step++;
  }, 1200);
}

// Simulação de Prorrogação
function runExtraTime(baseScoreUser, baseScoreOpp) {
  let scoreUser = baseScoreUser;
  let scoreOpp = baseScoreOpp;
  
  const scoreBoard = document.getElementById("sim-score-board");
  const opp = cupOpponents[gameState.currentMatchIndex];
  
  let extraMinutes = [100, 105, 115, 120];
  let step = 0;
  
  logToBox(91, "Começa a prorrogação! Quem vacilar agora está fora.");
  
  const extraInterval = setInterval(() => {
    if (step >= extraMinutes.length) {
      clearInterval(extraInterval);
      
      if (scoreUser === scoreOpp) {
        logToBox(120, "FIM DO TEMPO EXTRA! Ninguém quer perder. O semifinalista/campeão será decidido na emocionante DISPUTA DE PÊNALTIS!");
        initPenaltyShootout(scoreUser, scoreOpp);
      } else {
        finalizeMatch(scoreUser, scoreOpp);
      }
      return;
    }
    
    let m = extraMinutes[step];
    if (m === 105) {
      logToBox(105, "Fim do primeiro tempo da prorrogação. Virada rápida de campo.");
      step++;
      return;
    }
    
    // Chance alta de lances dramáticos
    if (Math.random() < 0.7) {
      const totalOvr = gameState.squadOvr + opp.rating;
      if (Math.random() * totalOvr < gameState.squadOvr) {
        const scorer = getRandomSquadPlayer("ATA", "MEI");
        if (Math.random() < 0.35) {
          scoreUser++;
          scoreBoard.innerText = `${scoreUser} - ${scoreOpp}`;
          logToBox(m, `⚽ <span class="goal-event">GOL HEROICO DO BRASIL!</span> <strong>${scorer.name}</strong> explode a torcida com uma pancada na gaveta!`, true);
        } else {
          logToBox(m, `❌ Quase! ${scorer.name} cabeceia rente ao travessão do goleiro ${opp.goalkeeper}!`);
        }
      } else {
        const scorerName = opp.scorers[Math.floor(Math.random() * opp.scorers.length)];
        if (Math.random() < 0.3) {
          scoreOpp++;
          scoreBoard.innerText = `${scoreUser} - ${scoreOpp}`;
          logToBox(m, `🚨 <strong>Gol de ${opp.name}!</strong> ${scorerName} marca na prorrogação e cala a torcida brasileira.`, true);
        } else {
          const myKeeper = getRandomSquadPlayer("GOL");
          logToBox(m, `🛡️ DEFESAÇA! ${myKeeper.name} se estica inteirinho para mandar o chute de ${scorerName} para escanteio.`);
        }
      }
    }
    
    step++;
  }, 1500);
}

// 4. DISPUTA DE PÊNALTIS INTERATIVA
function initPenaltyShootout(finalScoreUser, finalScoreOpp) {
  gameState.matchInProgress = true;
  
  const shootout = gameState.penaltyShootout;
  shootout.active = true;
  shootout.userScore = 0;
  shootout.oppScore = 0;
  shootout.userAttempts = [];
  shootout.oppAttempts = [];
  shootout.round = 1;
  shootout.userTurn = true; // Começa chutando
  
  // Atualizar placar de pênaltis na tela
  document.getElementById("penalty-count-user").innerText = "0";
  document.getElementById("penalty-count-opp").innerText = "0";
  
  // Resetar dots indicadores (visual)
  const dotsUser = document.getElementById("penalty-dots-user");
  const dotsOpp = document.getElementById("penalty-dots-opp");
  dotsUser.innerHTML = "";
  dotsOpp.innerHTML = "";
  
  for(let i=0; i<5; i++) {
    dotsUser.innerHTML += `<div class="penalty-dot" id="dot-user-${i}"></div>`;
    dotsOpp.innerHTML += `<div class="penalty-dot" id="dot-opp-${i}"></div>`;
  }
  
  // Revelar painel
  document.getElementById("penalty-shootout-panel").classList.remove("hidden");
  document.getElementById("sim-match-live-log").classList.add("hidden");
  
  nextPenaltyTurn(finalScoreUser, finalScoreOpp);
}

function nextPenaltyTurn(finalScoreUser, finalScoreOpp) {
  const shootout = gameState.penaltyShootout;
  const opp = cupOpponents[gameState.currentMatchIndex];
  
  // Verificar se acabou antes de começar o chute (ex: após rodadas completas)
  if (checkPenaltyWinner(finalScoreUser, finalScoreOpp)) return;
  
  const instruction = document.getElementById("penalty-turn-instructions");
  const resultText = document.getElementById("penalty-shootout-result-text");
  
  if (shootout.userTurn) {
    const kicker = getRandomSquadPlayerForPenalty(shootout.round - 1);
    instruction.innerText = `Rodada ${shootout.round}: SUA VEZ DE BATER! Escolha um canto. Batedor: ${kicker.name}`;
    resultText.innerText = "Escolha onde quer chutar na baliza!";
  } else {
    const kickerName = opp.scorers[(shootout.round - 1) % opp.scorers.length];
    instruction.innerText = `Rodada ${shootout.round}: HORA DE DEFENDER! Oponente ${kickerName} na bola. Escolha onde pular!`;
    resultText.innerText = "Selecione o canto que você quer defender!";
  }
}

function setupPenaltyGoalClicks() {
  const cells = document.querySelectorAll(".penalty-goal-cell");
  cells.forEach(cell => {
    cell.addEventListener("click", () => {
      const targetCell = parseInt(cell.getAttribute("data-cell"));
      handlePenaltyChoice(targetCell);
    });
  });
}

function handlePenaltyChoice(selectedCell) {
  const shootout = gameState.penaltyShootout;
  const opp = cupOpponents[gameState.currentMatchIndex];
  const resultText = document.getElementById("penalty-shootout-result-text");
  
  const matchUserScore = parseInt(document.getElementById("sim-score-board").innerText.split(" - ")[0]);
  const matchOppScore = parseInt(document.getElementById("sim-score-board").innerText.split(" - ")[1]);
  
  if (shootout.userTurn) {
    // Usuário Chuta. Goleiro adversário escolhe um canto aleatório (0 a 5)
    const keeperDive = Math.floor(Math.random() * 6);
    const kicker = getRandomSquadPlayerForPenalty(shootout.round - 1);
    
    let isGoal = false;
    let desc = "";
    
    if (selectedCell === keeperDive) {
      isGoal = false;
      desc = `❌ SALVOU! O goleiro ${opp.goalkeeper} pulou certo e defendeu a cobrança de ${kicker.name}!`;
    } else {
      // 10% de chance de chutar fora
      if (Math.random() < 0.1) {
        isGoal = false;
        desc = `❌ PARA FORA! ${kicker.name} mandou para longe da baliza!`;
      } else {
        isGoal = true;
        desc = `⚽ GOOOOL DO BRASIL! ${kicker.name} desloca completamente ${opp.goalkeeper}!`;
      }
    }
    
    shootout.userAttempts.push(isGoal ? 'scored' : 'missed');
    if (isGoal) shootout.userScore++;
    
    // Atualizar placar textual
    document.getElementById("penalty-count-user").innerText = shootout.userScore;
    resultText.innerText = desc;
    
    // Atualizar dot visual
    const dotIdx = shootout.round - 1;
    updatePenaltyDot("user", dotIdx, isGoal);
    
    // Transicionar turno do oponente
    shootout.userTurn = false;
    setTimeout(() => {
      nextPenaltyTurn(matchUserScore, matchOppScore);
    }, 1500);
    
  } else {
    // Usuário Defende. Jogador do oponente escolhe onde chutar
    const shooterName = opp.scorers[(shootout.round - 1) % opp.scorers.length];
    const targetShot = Math.floor(Math.random() * 6);
    
    let isGoal = false;
    let desc = "";
    
    if (selectedCell === targetShot) {
      isGoal = false;
      const myKeeper = getRandomSquadPlayer("GOL");
      desc = `🛡️ DEFENDEU! Você acertou o canto e o goleiro ${myKeeper.name} salvou o chute de ${shooterName}!`;
    } else {
      if (Math.random() < 0.12) {
        isGoal = false;
        desc = `❌ NA TRAVE! ${shooterName} mandou na trave esquerda e a bola saiu!`;
      } else {
        isGoal = true;
        desc = `🚨 GOL DA ${opp.name}! ${shooterName} chuta no canto oposto.`;
      }
    }
    
    shootout.oppAttempts.push(isGoal ? 'scored' : 'missed');
    if (isGoal) shootout.oppScore++;
    
    document.getElementById("penalty-count-opp").innerText = shootout.oppScore;
    resultText.innerText = desc;
    
    // Atualizar dot visual
    const dotIdx = shootout.round - 1;
    updatePenaltyDot("opp", dotIdx, isGoal);
    
    // Avançar rodada e mudar turno
    shootout.round++;
    shootout.userTurn = true;
    
    // Se passar das 5 rodadas normais (Sudden Death), adicionar novos dots
    if (shootout.round > 5) {
      const dotsUser = document.getElementById("penalty-dots-user");
      const dotsOpp = document.getElementById("penalty-dots-opp");
      
      const newDotIdx = shootout.round - 1;
      dotsUser.innerHTML += `<div class="penalty-dot" id="dot-user-${newDotIdx}"></div>`;
      dotsOpp.innerHTML += `<div class="penalty-dot" id="dot-opp-${newDotIdx}"></div>`;
    }
    
    setTimeout(() => {
      nextPenaltyTurn(matchUserScore, matchOppScore);
    }, 1500);
  }
}

function updatePenaltyDot(team, index, isGoal) {
  const dot = document.getElementById(`dot-${team}-${index}`);
  if (dot) {
    if (isGoal) {
      dot.classList.add("scored");
    } else {
      dot.classList.add("missed");
    }
  }
}

// Lógica de verificação do vencedor das penalidades
function checkPenaltyWinner(matchUserScore, matchOppScore) {
  const shootout = gameState.penaltyShootout;
  const uAtt = shootout.userAttempts.length;
  const oAtt = shootout.oppAttempts.length;
  
  // Só podemos encerrar se ambos realizaram o mesmo número de chutes na rodada atual
  const uScore = shootout.userScore;
  const oScore = shootout.oppScore;
  
  // Regras normais (até 5 cobranças)
  if (uAtt <= 5 && oAtt <= 5) {
    const uRem = 5 - uAtt;
    const oRem = 5 - oAtt;
    
    // Se um time não pode mais alcançar o outro
    if (uScore > oScore + oRem) {
      finalizePenaltyShootout(true, matchUserScore, matchOppScore);
      return true;
    }
    if (oScore > uScore + uRem) {
      finalizePenaltyShootout(false, matchUserScore, matchOppScore);
      return true;
    }
  }
  
  // Morte Súbita (Sudden Death - após rodada 5 com mesmo número de tentativas)
  if (uAtt >= 5 && oAtt >= 5 && uAtt === oAtt) {
    if (uScore !== oScore) {
      finalizePenaltyShootout(uScore > oScore, matchUserScore, matchOppScore);
      return true;
    }
  }
  
  return false;
}

function finalizePenaltyShootout(userWon, matchUserScore, matchOppScore) {
  gameState.penaltyShootout.active = false;
  
  const scoreBoard = document.getElementById("sim-score-board");
  const pScoreUser = gameState.penaltyShootout.userScore;
  const pScoreOpp = gameState.penaltyShootout.oppScore;
  
  // Esconder painel de pênaltis e mostrar logs novamente
  document.getElementById("penalty-shootout-panel").classList.add("hidden");
  document.getElementById("sim-match-live-log").classList.remove("hidden");
  
  if (userWon) {
    // Venceu nos pênaltis
    scoreBoard.innerText = `${matchUserScore} - ${matchOppScore}`;
    logToBox("PEN", `🇧🇷 FIM DOS PÊNALTIS! O Brasil vence por ${pScoreUser} a ${pScoreOpp}! VAGA ASSEGURADA!`);
    finalizeMatch(matchUserScore + 1, matchOppScore); // Soma 1 no placar lógico para vitória
  } else {
    // Perdeu nos pênaltis
    scoreBoard.innerText = `${matchUserScore} - ${matchOppScore}`;
    logToBox("PEN", `❌ FIM DOS PÊNALTIS! O Brasil perde por ${pScoreUser} a ${pScoreOpp} e está eliminado...`);
    finalizeMatch(matchUserScore, matchOppScore + 1);
  }
}

// 5. FINALIZAÇÃO DA PARTIDA
function finalizeMatch(finalUser, finalOpp) {
  gameState.matchInProgress = false;
  const opp = cupOpponents[gameState.currentMatchIndex];
  const btn = document.getElementById("btn-simulate-match");
  
  btn.classList.remove("hidden");
  
  if (finalUser > finalOpp) {
    // VITÓRIA
    logToBox("FIM", `🎉 VITÓRIA! O Brasil bate o ${opp.name} por ${finalUser}x${finalOpp}!`);
    
    // Contabilizar pontos ou avançar
    if (gameState.currentMatchIndex < 3) {
      gameState.groupPoints += 3;
    }
    
    // Verificar se passou de fase
    if (gameState.currentMatchIndex === 2) {
      // Fim do grupo
      if (gameState.groupPoints >= 4) {
        logToBox("INFO", `✅ CLASSIFICADO! Você terminou a Fase de Grupos com ${gameState.groupPoints} pontos e avança para o mata-mata!`);
        btn.innerText = "AVANÇAR PARA AS OITAVAS ➔";
      } else {
        logToBox("INFO", `❌ ELIMINADO! Apenas ${gameState.groupPoints} pontos não foram suficientes para passar de fase.`);
        btn.innerText = "REINICIAR CAMPANHA 🔄";
      }
    } else if (gameState.currentMatchIndex === 6) {
      // Venceu a final! Hexacampeão!
      setTimeout(() => {
        showVictoryScreen();
      }, 2000);
    } else {
      btn.innerText = "AVANÇAR PARA A PRÓXIMA FASE ➔";
    }
  } else if (finalUser === finalOpp && gameState.currentMatchIndex < 3) {
    // EMPATE NA FASE DE GRUPOS
    logToBox("FIM", `🤝 FIM DE JOGO! Empate em ${finalUser}x${finalOpp} na fase de grupos.`);
    gameState.groupPoints += 1;
    
    if (gameState.currentMatchIndex === 2) {
      if (gameState.groupPoints >= 4) {
        logToBox("INFO", `✅ CLASSIFICADO! Você terminou com ${gameState.groupPoints} pontos e avança de fase!`);
        btn.innerText = "AVANÇAR PARA AS OITAVAS ➔";
      } else {
        logToBox("INFO", `❌ ELIMINADO! Você terminou com ${gameState.groupPoints} pontos e está fora da Copa.`);
        btn.innerText = "REINICIAR CAMPANHA 🔄";
      }
    } else {
      btn.innerText = "AVANÇAR PARA A PRÓXIMA FASE ➔";
    }
  } else {
    // DERROTA
    logToBox("FIM", `💔 DERROTA! O Brasil cai diante do ${opp.name} por ${finalUser}x${finalOpp}. O sonho do Hexa foi adiado.`);
    btn.innerText = "REINICIAR CAMPANHA 🔄";
  }
}

// 6. VITÓRIA DO TORNEIO 🏆
function showVictoryScreen() {
  transitionToScreen("victory");
  
  document.getElementById("victory-header-msg").innerText = `COMANDADO POR ${gameState.coachName.toUpperCase()}`;
  document.getElementById("victory-desc-msg").innerText = `Comandando as lendas do nosso futebol com maestria tática no esquema ${gameState.selectedTactic}, você superou todos os algozes históricos: Uruguai 1950, França 98, Holanda 74, Itália 82, França 2006, Alemanha 2014 e derrotou a Argentina de 1986 na grande final. A sexta estrela dourada agora reluz no peito da Seleção Brasileira!`;
  
  const squadCelebrationList = document.getElementById("victory-squad-list");
  squadCelebrationList.innerHTML = "";
  
  // Listar os craques convocados
  gameState.draftedPlayers.forEach(p => {
    if (p) {
      const tag = document.createElement("div");
      tag.className = "celebration-player-tag";
      tag.innerText = `${p.name} (${p.rating})`;
      squadCelebrationList.appendChild(tag);
    }
  });
}

// Auxiliares e Coleções de Textos de Narrativa do Jogo
function logToBox(minute, text, highlight = false) {
  const logBox = document.getElementById("sim-match-live-log");
  const line = document.createElement("div");
  line.className = "match-log-line";
  if (highlight) {
    line.style.background = "rgba(0, 151, 57, 0.15)";
    line.style.borderLeft = "4px solid var(--br-green)";
    line.style.paddingLeft = "8px";
  }
  
  const minText = (minute === "FIM" || minute === "INFO" || minute === "PEN") ? minute : `${minute}'`;
  line.innerHTML = `<span class="time">[${minText}]</span> ${text}`;
  logBox.appendChild(line);
  logBox.scrollTop = logBox.scrollHeight;
}

function getRandomSquadPlayer(...positions) {
  // Filtra os convocados que correspondem às posições fornecidas (ex: ATA, MEI)
  let matching = gameState.draftedPlayers.filter(p => p && positions.includes(p.pos));
  if (matching.length === 0) {
    matching = gameState.draftedPlayers.filter(p => p); // Backup
  }
  return matching[Math.floor(Math.random() * matching.length)];
}

function getRandomSquadPlayerForPenalty(index) {
  // Ordena batedores: preferência para atacantes e meias de alto rating
  const sorted = [...gameState.draftedPlayers].sort((a, b) => {
    if ((a.pos === "ATA" || a.pos === "MEI") && (b.pos !== "ATA" && b.pos !== "MEI")) return -1;
    if ((b.pos === "ATA" || b.pos === "MEI") && (a.pos !== "ATA" && a.pos !== "MEI")) return 1;
    return b.rating - a.rating;
  });
  return sorted[index % sorted.length];
}

// Ações de jogo mal-sucedidas do Brasil
function getRandomMissAction(kicker, keeper, defender) {
  const missPhrases = [
    `❌ Faltou pontaria! <strong>${kicker}</strong> recebe livre, calibra o pé, mas manda a bola direto na arquibancada!`,
    `❌ <strong>${kicker}</strong> arranca em velocidade, limpa a marcação de ${defender}, mas chuta torto para fora!`,
    `❌ DEFESAÇA! <strong>${kicker}</strong> cabeceia firme no canto, mas o goleiro ${keeper} se estica todo e espalma!`,
    `❌ Travado! <strong>${kicker}</strong> arma o chute na grande área, mas ${defender} chega deslizando no carrinho e faz o desarme.`
  ];
  return missPhrases[Math.floor(Math.random() * missPhrases.length)];
}

// Ações de jogo mal-sucedidas do oponente (mostrando ações dos nossos defensores/goleiro)
function getRandomOppMissAction(kicker, myKeeper, myDefender) {
  const oppMissPhrases = [
    `🛡️ SEGURA! ${kicker} solta uma bomba de longe, mas o goleiro <strong>${myKeeper}</strong> encaixa com tranquilidade.`,
    `🛡️ Interceptado! ${kicker} tenta o drible, mas o zagueiro <strong>${myDefender}</strong> toma a frente e sai jogando de cabeça erguida.`,
    `❌ Sem direção! ${kicker} sobe mais alto que a zaga, cabeceia com força, mas a bola passa por cima do travessão de <strong>${myKeeper}</strong>.`,
    `🛡️ ESPETACULAR! ${kicker} bate colocado buscando o ângulo, mas <strong>${myKeeper}</strong> voa nela e espalma por cima!`
  ];
  return oppMissPhrases[Math.floor(Math.random() * oppMissPhrases.length)];
}

// Ações de meio de campo para dar dinâmica
function getRandomMidfieldAction() {
  const phrases = [
    "A disputa é intensa no círculo central! Disputa física pela posse da bola.",
    "A Seleção Brasileira roda a bola com tranquilidade, procurando espaços na marcação fechada.",
    "O jogo fica truncado com muitas faltas no meio de campo de ambos os lados.",
    "Belo passe de calcanhar no meio, a torcida grita Olé nas arquibancadas!",
    "Marcação pressão do oponente dificulta a saída de bola brasileira."
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

// Utilitários de fluxo geral
function transitionToScreen(targetScreenName) {
  Object.keys(screens).forEach(name => {
    if (name === targetScreenName) {
      screens[name].classList.remove("hidden");
      screens[name].style.display = (name === "draft" || name === "simulator" || name === "victory") ? "flex" : "block";
    } else {
      screens[name].classList.add("hidden");
      screens[name].style.display = "none";
    }
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
