// window.addEventListener('scroll', () => {
//   const hero = document.getElementById('hero');
//   const header = document.querySelector('header');

//   if (window.scrollY > 100) {
//     header.style.backgroundColor = 'rgba(15, 102, 145, 0.8)';
//   } else {
//     header.style.backgroundColor = 'transparent';
//   }
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId && targetId !== '#' && targetId !== '') {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: 'smooth',
        });
      }
    }
  });
});
