const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const closeIcon = document.querySelector('.close-icon');
const burgerIcon = document.querySelector('.burger-menu img:not(.close-icon)');
const navLinks = document.querySelectorAll('.nav-list a');

const toggleMenu = () => {
  nav.classList.toggle('active');

  if (nav.classList.contains('active')) {
    closeIcon.style.display = 'block';
    burgerIcon.style.display = 'none';
  } else {
    closeIcon.style.display = 'none';
    burgerIcon.style.display = 'block';
  }
};

burgerMenu.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
      toggleMenu();
    }
  });
});
