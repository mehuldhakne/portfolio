/* ── Navbar scroll + burger + active link ── */
(function () {
  const navbar   = document.querySelector('.navbar');
  const burger   = document.querySelector('.nav-burger');
  const drawer   = document.querySelector('.nav-drawer');
  const page     = window.location.pathname.split('/').pop() || 'index.html';

  // Scroll border
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // Burger toggle
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      drawer.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open);
    });
    // Close on link click
    drawer.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        drawer.classList.remove('open');
      })
    );
  }

  // Active link
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();

/* ── Scroll reveal ── */
(function () {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
