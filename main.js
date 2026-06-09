document.getElementById('header').innerHTML = `
  <nav class="nav">
    <span class="nav-logo">Heitor<span class="accent">.</span></span>
    <ul class="nav-links">
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#projetos">Projetos</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
  </nav>
`;
document.getElementById('hero').innerHTML = `
  <div class="hero-inner">
    <p class="hero-eyebrow">Desenvolvedor Front-end</p>
    <h1 class="hero-title">Heitor<br>Villa-chan</h1>
    <p class="hero-sub">
      Crio interfaces que unem código limpo e experiências memoráveis.
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