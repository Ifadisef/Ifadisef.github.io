// JavaScript for the responsive navigation menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          });
          navLinks.classList.remove('active');
      });
  });
});
