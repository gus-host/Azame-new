'use strict';
// fetch('http://localhost:5000')
//   .then(res => {
//     return res.json();
//   })
//   .then(data => {
//     data;
//   });

const postEmail = function () {
  const addEmail = {
    email: heroEmail.value,
  };
  fetch('http://localhost:5000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'User 1',
      email: heroEmail.value,
    }),
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      data;
    });
};

// MODAL SHOW AND CLOSE
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.form-btn');
const btnCloseModal = document.querySelector('.close-modal');
const btnModalBtn = document.querySelector('.modal-btn');
const body = document.querySelector('body');
const attrBtn = document.querySelector('.attr-btn');
const modalHeading = document.querySelector('.modal-heading');
const modalText = document.querySelector('.modal-text');
const modalIcon = document.querySelector('.modal-icon');
const heroEmail = document.querySelector('.hero-email');

const openModal = function () {
  // if (heroEmail.value.contains('@')) {
  //   console.log(heroEmail);
  // }

  const heroEmail = document.querySelector('.hero-email').value;
  if (heroEmail === '') {
    overlay.classList.remove('hidden');
    body.classList.add('no-vert-scroll');
    modalHeading.textContent = 'Error';
    // modalText.textContent =
    //   'Pls provide text for modal box - showing error message';
    modalIcon.name = 'backspace-outline';
    // console.log(noCharWarn);
  }

  for (let i = 0; i < heroEmail.length; i++) {
    if (heroEmail[i] === '@' || !heroEmail.includes('@')) {
      overlay.classList.remove('hidden');
      body.classList.add('no-vert-scroll');
    }
    if (heroEmail[i] === '@') {
      postEmail();
      modalHeading.textContent = 'Success';
      // modalText.textContent =
      //   'Pls provide text for modal box - showing successfully joined waitlist';
      modalIcon.name = 'checkmark-outline';
      document.querySelector('.hero-email').value = '';
    } else if (!heroEmail.includes('@')) {
      modalHeading.textContent = 'Error';
      // modalText.textContent =
      //   'Pls provide text for modal box - showing error message';
      modalIcon.name = 'backspace-outline';
    }
  }
};

const closeModal = function () {
  overlay.classList.add('hidden');
  body.classList.remove('no-vert-scroll');
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

    // Closes mobile Navigation
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
      heroEmail.style.opacity = '1';
    }
  });
});

// MOBILE NAVIGATION
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');

  if (headerEl.classList.contains('nav-open')) {
    heroEmail.style.opacity = '0.2';
    // console.log('nigger');
  } else {
    heroEmail.style.opacity = '1';
  }
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
