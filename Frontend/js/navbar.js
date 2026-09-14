const navToggle = document.querySelector('.nav-toggle');
const navbarText = document.querySelector('#navbarText');

navToggle.addEventListener('click', () => {
  const isOpen = navbarText.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close menu after clicking a link
document.querySelectorAll('#navbarText a').forEach(link => {
  link.addEventListener('click', () => {
    navbarText.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('#languages button').forEach(button => {
  button.addEventListener('click', () => {
    navbarText.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', (event) => {
  const isClickInsideNav = navbarText.contains(event.target) || navToggle.contains(event.target);

  if (!isClickInsideNav && navbarText.classList.contains('open')) {
    navbarText.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});