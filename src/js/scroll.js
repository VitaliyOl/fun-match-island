// window.addEventListener('scroll', () => {
//   const hero = document.getElementById('hero');
//   const header = document.querySelector('header');

//   if (window.scrollY > 100) {
//     header.style.backgroundColor = 'rgba(15, 102, 145, 0.8)';
//   } else {
//     header.style.backgroundColor = 'transparent';
//   }
// });

window.addEventListener('scroll', addBackgroundOnScroll);

addBackgroundOnScroll();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: targetElement.offsetTop - 60,
      behavior: 'smooth',
    });
  });
});
