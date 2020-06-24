import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const hamburger = document.querySelector('.hamburger--js');
const addGlass = document.querySelector('.buttons__add');
const removeGlass = document.querySelector('.buttons__remove');
const count = document.querySelector('.counter__number');
const key = new Date().toLocaleString().slice(0, 10);

const localStorageValue = localStorage.getItem(key);
let countNumber = 0;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-opened');
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--opened');
})

addGlass.addEventListener('click', () => {
    countNumber++;
    localStorage.setItem(key, countNumber);
    count.innerHTML = `${countNumber}`;
})

removeGlass.addEventListener('click', () => {
    if (countNumber != 0) {
        countNumber--;
        localStorage.setItem(key, countNumber);
        count.innerHTML = `${countNumber}`;
    }
})

if (localStorageValue) {
    countNumber = localStorageValue;
} else {
    localStorage.setItem(key, 0);
}

count.innerHTML = `${countNumber}`;