document.getElementById('header').innerHTML = `
  <nav class="nav">
    
    <ul class="nav-links">
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#projetos">Projetos</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
  </nav>
`;

document.getElementById('hero').innerHTML = `
  <div class="hero-inner">
    <div class="terminal">
      <div class="terminal-bar">
        <span class="t-dot t-red"></span>
        <span class="t-dot t-yellow"></span>
        <span class="t-dot t-green"></span>
        <span class="t-title">heitor+=portfólio </span>
      </div>
      <div class="terminal-body">
        <p><span class="t-prompt">$ </span><span class="t-cmd" id="typed"></span><span class="t-cursor">▋</span></p>
        <p class="t-output" id="t-out" style="opacity:0">Hello World!</p>
      </div>
    </div>
    <h1 class="hero-title">Heitor<br>Villa-chan</h1>
    <div class="hero-ctas">
      <a href="#projetos" class="btn-primary">Ver projetos</a>
      <a href="#contato" class="btn-ghost">Falar comigo</a>
    </div>
  </div>
  <div class="hero-avatar-wrap" aria-hidden="true">
    <div class="hero-avatar">
      <img src="perfil2.jpeg" alt="Heitor" onerror="this.style.display='none'" />
      <div class="avatar-placeholder">HV</div>
    </div>
    <span class="deco-ring"></span>
    <span class="deco-ring deco-ring--2"></span>
  </div>
`;
const cmd = "whoami";
const typed = document.getElementById('typed');
const out = document.getElementById('t-out');
let i = 0;
const type = () => {
  if (i < cmd.length) {
    typed.textContent += cmd[i++];
    setTimeout(type, 90);
  } else {
    setTimeout(() => { out.style.opacity = 1; }, 400);
  }
};
setTimeout(type, 600);
document.getElementById('sobre').innerHTML = `
  <div class="sobre-inner">
    <div class="sobre-text">
      <p class="section-eyebrow">Sobre mim</p>
      <h2 class="section-title">Interesses e<br>Tecnologias.</h2>
      <p class="sobre-bio">
         Sou estudante de Ciência da Computação na Cesar School, estou sempre em busca de aprendizados e desafios que me façam evoluir. Gosto de transformar minhas ideias em projetos reais e explorar as possibilidades que o mundo da tecnologia tem a oferecer, constantemente me adaptando às mudanças e melhorando a cada passo.
      </p>
      <p class="sobre-bio">
        Áreas de interesse: Cybersegurança, Ciência de Dados, Engenharia de Software e Negócios.
      </p>
    </div>
    <div class="sobre-skills">
      <p class="skills-label">Hard Skills</p>
      <ul class="skills-grid">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>C</li>
        <li>Python</li>
        <li>WordPress</li>
      </ul>
      <p class="skills-label" style="margin-top: 2rem;">Soft Skills</p>
      <ul class="skills-grid">
        <li>Comunicação</li>
        <li>Trabalho em equipe</li>
        <li>Resolução de problemas</li>
        <li>Adaptabilidade</li>
        <li>Comunicação não violenta</li>
        <li>Gestão de Projetos</li>
      </ul>
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
    titulo: "Manguetown da lama ao caos",
    descricao: "Manguetown: Da Lama ao Caos é um jogo desenvolvido na disciplina de Projetos 1 que visa incluir pessoas com dislexia ao mundo do RPG, tendo uma temática cultural do Recife.",
    tags: ["Arduino", "C++"],
    link: "https://github.com/gabriellalbq/Manguetown"
  },
  {
    numero: "03",
    titulo: "Heraclida",
    descricao: "Jogo desenvolvido no Bitsy cuja dinâmica se baseia em labirintos com tema da Idade Antiga, mais especificamente Esparta.",
    tags: ["Bitsy"],
    link: "https://caioribeirocesarschool.itch.io/heraclidagame"
  },
   {
    numero: "04",
    titulo: "Portfólio",
    descricao: "Repositório do meu portfólio pessoal, desenvolvido com HTML, CSS e JavaScript. Veja como foi desenvolvido.",
    tags: ["HTML", "CSS", "Java Script"],
    link: "https://github.com/HeitorVillachan/portfolio"
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
document.getElementById('contato').innerHTML = `
  <div class="contato-inner">
    <div class="contato-text">
      <p class="section-eyebrow">Contato</p>
      <h2 class="section-title">Aberto a <br>oportunidades.</h2>
      <p class="contato-sub">
        Me manda uma mensagem!
      </p>
      <ul class="contato-links">
        <li>
          <a href="mailto:heitorvillachan@gmail.com" class="contato-item">
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
            linkedin.com/in/heitorvillachan
          </a>
        </li>
      </ul>
    </div>
  </div>
`;

document.getElementById('footer').innerHTML = `
  <div class="footer-inner">

  
    <p class="footer-copy">© ${new Date().getFullYear()} Heitor Villa-chan.</p>
  </div>
`;