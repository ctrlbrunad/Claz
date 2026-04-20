// ---------- NAVBAR ----------

const navbar = document.getElementById('navbar');

function handleScroll() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);


const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', function () {
  mobileMenu.classList.toggle('open');
});

const mobileLinks = document.querySelectorAll('.mobile-menu__link');

mobileLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    mobileMenu.classList.remove('open');
  });
});


const elementsToAnimate = document.querySelectorAll(
  '.sobre-card, .produto-card, .contato-content, .sobre__text'
);

elementsToAnimate.forEach(function (el) {
  el.classList.add('fade-in');
});

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

elementsToAnimate.forEach(function (el) {
  observer.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href'); 

    if (targetId === '#') return; 

    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();

      const navbarHeight = navbar.offsetHeight;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight - 16;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  });
});