// script.js
// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Auto-update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Flexible navbar height
const nav = document.getElementById('navbar');
document.documentElement.style.setProperty('--nav-height', nav.offsetHeight + 'px');

// navbar transparent when scrolling
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const heroHeight = document.querySelector('.hero').offsetHeight;

  if (window.scrollY > heroHeight - document.getElementById('navbar')) {
    // Past hero: make transparent
    navbar.classList.add('transparent');
  } else {
    // Over hero: solid background
    navbar.classList.remove('transparent');
  }
});