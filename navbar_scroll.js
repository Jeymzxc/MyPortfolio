// navbar-scroll.js
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.remove('navbar-shown');
    navbar.classList.add('navbar-hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('navbar-hidden');
    navbar.classList.add('navbar-shown');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
