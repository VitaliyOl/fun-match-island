window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  const header = document.querySelector('header'); 

  if (window.scrollY > 100) {
    
    header.style.backgroundColor = '#e7c000';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});
