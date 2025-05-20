// Header Animation
document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById("element");
    var typed = new Typed(element, {
        strings: ['Designer', 'Jerry Daniels', 'Developer'],
        typeSpeed: 35,
        backSpeed: 40,
        backDelay: 400,
        startDelay: 600,
        loop: true,
    });
})

// Header image scroll
document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    // Adjust movement speed (0.3 = 30% of scroll speed)
    const movement = scrollY * 0.3; 
    header.style.backgroundPosition = `0px ${movement}px`;
});

// Navbar(mobile screen) Closes when user clicks on list item
const navLinks = document.querySelectorAll('.custom-navbar-link');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarToggler = document.querySelector('.navbar-toggler');
navLinks.forEach(function (e) {
    e.addEventListener('click', function (e) {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

// Navbar change colors when scroll
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const navbarBrand = document.querySelector('.navbar-brand');
  const homeSection = document.getElementById('home');
  const homeHeight = homeSection.offsetHeight + 5900;

  window.addEventListener('scroll', function() {
    if (scrollY > homeHeight * 0.1) {
      navbar.classList.add('scrolled');
      navbarBrand.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
      navbarBrand.classList.remove('scrolled');
    }
  });
});

// Navbar list item before pseudo class
const sections = document.querySelectorAll('section');
function updateActiveNav() {
    let currentSection = '#home';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 80) {
            currentSection = '#' + section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active');
        }
    });
}
window.addEventListener('scroll', updateActiveNav);