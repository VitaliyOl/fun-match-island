document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');

    if (targetId === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else if (targetId && targetId !== '#' && targetId !== '') {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 30,
          behavior: 'smooth',
        });
      }
    }
  });
});
