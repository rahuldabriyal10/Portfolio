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

//for lock auto scrolling while refreshing page
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Sidebar open/close
const sidebar = document.querySelector('.sidebar');
function openSidebar() { sidebar.style.right = '0'; }
function closeSidebar() { sidebar.style.right = '-260px'; }

// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = '☀️';
} else {
    themeToggle.textContent = '🌙';
}

// Toggle on click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});