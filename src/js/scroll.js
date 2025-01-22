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
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;

        console.log('Target offsetTop:', targetElement.offsetTop);
        console.log('Header height:', headerHeight);

        window.scrollTo({
          top: targetElement.offsetTop - headerHeight,
          behavior: 'smooth',
        });
      }
    }
  });
});
