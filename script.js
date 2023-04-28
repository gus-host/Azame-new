'use strict';

// MODAL SHOW AND CLOSE
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.form-btn');
const btnCloseModal = document.querySelector('.close-modal');
const btnModalBtn = document.querySelector('.modal-btn');
const body = document.querySelector('body');
const attrBtn = document.querySelector('.attr-btn');
const warning = document.querySelector('.warning');
const warningText = document.querySelector('.warning-text');
const heroEmailInput = document.querySelector('.hero-email');

const openModal = function () {
  // if (heroEmail.value.contains('@')) {
  //   console.log(heroEmail);
  // }

  const heroEmail = document.querySelector('.hero-email').value;
  if (heroEmail === '') {
    attrBtn.removeAttribute('href');
    warning.classList.remove('hidden');
    warningText.textContent = 'Please enter your email!';

    heroEmailInput.style.borderColor = 'red';
    // console.log(noCharWarn);
  }

  for (let i = 0; i < heroEmail.length; i++) {
    if (heroEmail[i] === '@') {
      overlay.classList.remove('hidden');
      body.classList.add('no-vert-scroll');
      attrBtn.setAttribute('href', '#');
      heroEmailInput.style.borderColor = '#ababab';
      document.querySelector('.hero-email').value = '';
    } else if (!heroEmail.includes('@')) {
      attrBtn.removeAttribute('href');
      warning.classList.remove('hidden');
      heroEmailInput.style.borderColor = 'red';
      warningText.textContent = 'Email must contain the @ symbol!';
    }
  }
};

const closeModal = function () {
  overlay.classList.add('hidden');
  body.classList.remove('no-vert-scroll');
  attrBtn.setAttribute('href', '#');
  noCharWarn.classList.add('hidden');
  noAtWarn.classList.add('hidden');
};

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
btnModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    {
      closeModal();
    }
  }
});

// SCROLL BEHAVIOUR
const allLinks = document.querySelectorAll('a:link');

//this selects each of the links and call the link
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href == '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // Scrolls to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

// MOBILE NAVIGATION
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      // document.body.classList.add('sticky');
      document.querySelector('.header').classList.add('sticky');
    }

    if (ent.isIntersecting === true) {
      document.querySelector('.header').classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-100px',
  }
);
obs.observe(sectionHeroEl);
