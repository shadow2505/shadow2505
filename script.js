const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
const themeButton = document.getElementById('themeButton');
const filters = [...document.querySelectorAll('.filter')];
const projectCards = [...document.querySelectorAll('.project-card')];
const projectSearch = document.getElementById('projectSearch');
const emptyState = document.getElementById('emptyState');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

if (themeButton) {
  themeButton.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
  });
}

let activeFilter = 'all';

function updateProjects() {
  const query = (projectSearch?.value || '').trim().toLowerCase();
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const categories = card.dataset.category || '';
    const searchText = `${card.dataset.search || ''} ${card.textContent}`.toLowerCase();
    const matchesFilter = activeFilter === 'all' || categories.includes(activeFilter);
    const matchesSearch = !query || searchText.includes(query);
    const visible = matchesFilter && matchesSearch;

    card.classList.toggle('hidden', !visible);
    if (visible) visibleCount += 1;
  });

  if (emptyState) emptyState.hidden = visibleCount !== 0;
}

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    activeFilter = button.dataset.filter || 'all';
    updateProjects();
  });
});

projectSearch?.addEventListener('input', updateProjects);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

updateProjects();
