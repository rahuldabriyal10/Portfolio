//loader logic
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('hidden');
    setTimeout(() => {
      loader.style.display = 'none';
      // Remove loading class so scrolling is enabled
      document.body.classList.remove('loading');
    }, 600);
  }
});

// Theme toggle button logic
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Initialize theme from localStorage or system preference
const storedTheme = localStorage.getItem('theme');

if (storedTheme === 'dark') {
  body.classList.add('dark');
  themeToggleBtn.textContent = '☀️';
} else if (storedTheme === 'light') {
  body.classList.remove('dark');
  themeToggleBtn.textContent = '🌙';
} else {
  // If no preference saved, check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark');
    themeToggleBtn.textContent = '☀️';
  } else {
    body.classList.remove('dark');
    themeToggleBtn.textContent = '🌙';
  }
}

// Toggle dark mode on button click
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

//for lock auto scrolling while refreshing page
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}