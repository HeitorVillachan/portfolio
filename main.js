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
document.getElementById('contato').innerHTML = `
  <div class="contato-inner">
    <div class="contato-text">
      <p class="section-eyebrow">Contato</p>
      <h2 class="section-title">Vamos construir<br>algo juntos.</h2>
      <p class="contato-sub">
        Aberto a oportunidades, freelas e conversas sobre tecnologia.
        Me manda uma mensagem!
      </p>
      <ul class="contato-links">
        <li>
          <a href="heitorvillachan@gmail.com" class="contato-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            heitorvillachan@gmail.com
          </a>
        </li>
        <li>
          <a href="https://github.com/HeitorVillachan" target="_blank" rel="noopener" class="contato-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            github.com/HeitorVillachan
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/heitorvillachan-934961368/" target="_blank" rel="noopener" class="contato-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            linkedin.com/in/seulinkedin
          </a>
        </li>
      </ul>
    </div>
  </div>
`;

// ── FOOTER ───────────────────────────────────────────────
document.getElementById('footer').innerHTML = `
  <div class="footer-inner">
    <p class="footer-copy">© ${new Date().getFullYear()} Heitor Villa-chan.</p>
  </div>
`;