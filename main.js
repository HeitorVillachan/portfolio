document.getElementById('header').innerHTML = `
  <nav class="nav">
    <span class="nav-logo">Portfólio<span class="accent">.</span></span>
    <ul class="nav-links">
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#projetos">Projetos</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
  </nav>
`;
document.getElementById('hero').innerHTML = `
  <div class="hero-inner">
    <p class="hero-eyebrow">Hello World!</p>
    <h1 class="hero-title">Heitor<br>Villa-chan</h1>
    <p class="hero-sub">
      Aqui você pode descobrir um pouco sobre mim.
    </p>
    <div class="hero-ctas">
      <a href="#projetos" class="btn-primary">Ver projetos</a>
      <a href="#contato" class="btn-ghost">Falar comigo</a>
    </div>
  </div>
  <div class="hero-deco" aria-hidden="true">
    <span class="deco-ring"></span>
    <span class="deco-ring deco-ring--2"></span>
  </div>
`;
const projetos = [
  {
    numero: "01",
    titulo: "HYROX Planner",
    descricao: "Sistema desenvolvido em Python para auxiliar atletas na organização e acompanhamento de sua preparação para competições HYROX.",
    tags: ["Python", "Ollama"],
    link: "https://github.com/HeitorVillachan/projeto-FP"
  },
  {
    numero: "02",
    titulo: "Manguetwon da lama ao caos",
    descricao: "Manguetown: Da Lama ao Caos é um jogo desenvolvido na disciplina de Projetos 1 que visa incluir pessoas com dislexia ao mundo do RPG, tendo uma temática cultural do Recife.",
    tags: ["Arduino", "C++", ],
    link: "https://github.com/gabriellalbq/Manguetown"
  },
  {
    numero: "03",
    titulo: "Heraclida",
    descricao: "Heraclida é um jogo desenvolvido no Bitsy cuja dinâmica se baseia em labirintos e traz um tema relacionado à Idade Antiga, mais especificamente a Esparta.",
    tags: ["Bitsy"  ],
    link: "https://caioribeirocesarschool.itch.io/heraclidagame"
  },
  
];
document.getElementById('projetos').innerHTML = `
  <div class="projetos-inner">
    <div class="projetos-header">
      <p class="section-eyebrow">Projetos</p>
      <h2 class="section-title">O que já<br>construí.</h2>
    </div>
    <ul class="projetos-lista">
      ${projetos.map(p => `
        <li class="projeto-card">
          <span class="projeto-numero">${p.numero}</span>
          <div class="projeto-body">
            <h3 class="projeto-titulo">${p.titulo}</h3>
            <p class="projeto-desc">${p.descricao}</p>
            <ul class="projeto-tags">
              ${p.tags.map(t => `<li>${t}</li>`).join('')}
            </ul>
          </div>
          <a href="${p.link}" class="projeto-link" target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </li>
      `).join('')}
    </ul>
  </div>
`;
document.getElementById('sobre').innerHTML = `
  <div class="sobre-inner">
    <div class="sobre-text">
      <p class="section-eyebrow">Sobre mim</p>
      <h2 class="section-title">Interesses e <br>sobre mim.</h2>
      <p class="sobre-bio">
        Sou estudante de Ciência da Computação na Cesar School e apaixonado por tecnologia.
      </p>
      <p class="sobre-bio">
        Áreas de Interesse: Cybersegurança, Ciência de Dados, Engenharia de Software e Négocios.
      </p>
    </div>

    <div class="sobre-skills">
      <p class="skills-label">Tecnologias</p>
      <ul class="skills-grid">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>C</li>
        <li>Python</li>
        <li>WordPress</li>
      </ul>
    </div>
  </div>
`;