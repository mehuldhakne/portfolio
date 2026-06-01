/* Inject consistent navbar + drawer into every page */
(function () {
  const nav = `
  <nav class="navbar" id="navbar" aria-label="Main navigation">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo" aria-label="Mehul J Dhakne – Home">
        Mehul<span>.</span>
      </a>
      <ul class="nav-links" role="list">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="skills.html">Skills</a></li>
        <li><a href="activities.html">Activities</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <button class="nav-burger" id="burger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <nav class="nav-drawer" id="drawer" aria-label="Mobile navigation">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="projects.html">Projects</a>
    <a href="skills.html">Skills</a>
    <a href="activities.html">Activities</a>
    <a href="contact.html">Contact</a>
  </nav>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
})();
