import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-opened');
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--opened');
})