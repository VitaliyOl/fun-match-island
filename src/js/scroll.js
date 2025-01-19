window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  const header = document.querySelector('header');

  if (window.scrollY > 100) {
    header.style.backgroundColor = '#0F6691';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});
