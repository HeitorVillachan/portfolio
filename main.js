document.getElementById('header').innerHTML = `
  <nav class="nav">
    <span class="nav-logo"><span class="accent">.</span></span>
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
      Aluno de Ciência da Computação da Cesar School e Apaixonado por tecnologia.
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
    numero: "1-",
    titulo: "HYROX Planner",
    descricao: "HYROX Planner é um sistema desenvolvido em Python para a disciplina de Fundamentos de Programação, com o objetivo de auxiliar atletas na organização e acompanhamento de sua preparação para competições HYROX",
    tags: ["Python", "Ollama", ],
    link: "#https://github.com/HeitorVillachan/projeto-FP"
  },
  {
    numero: "02",
    titulo: "Nome do Projeto",
    descricao: "Breve descrição do que o projeto faz e qual problema resolve. Tecnologias usadas e impacto.",
    tags: ["TypeScript", "Next.js", "Tailwind"],
    link: "#"
  },
]