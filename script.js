const toggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle theme on click
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');

  // Switch icon
  if (isDark) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }

  // Save preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
