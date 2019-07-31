"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

console.log('Hej!');
const name = 'Mateusz Krause';
const age = 27;
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat`);

console.log('Gdzie mi tu zaglądasz pod s..tronę?');

const about = document.querySelector('.about__paragraph--js');
console.log(about.innerHTML);

about.innerHTML = `Nazywam się <strong>${name}</strong> i mam ${age} lat`;

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[3]);

if ('javascript' != 'java') {
  console.log('To prawda!');
}

if (age > 20) {
  console.log('Masz więcej niż 20 lat');
} else {
  console.log('Masz mniej niż 20 lat');
}
switch (age) {
  case 20:
    console.log('Masz równo 20 lat');
    break;
  case 30:
    console.log('Masz równo 30 lat');
    break;
  default:
    console.log(`Masz ${age} lat`);
    break;
}

let oldIndicator;
if (age > 70) {
  oldIndicator = 'yes';
} else {
  oldIndicator = 'no';
}
console.log(oldIndicator);

const amIOld = (age > 70) ? 'yes' : 'no';
console.log(amIOld);

function calculate(x) {
  x = x + 3;
  console.log(`Tradycyjnie: ${x}`);
  return x * 7;
}

console.log(calculate(2));

const calculateFat = x => (x + 3) * 7;

console.log(calculateFat(2));

function welcome(x, y) {
  console.log(`Cześć ${x}! Masz ${y} lat, prawda?`);
}
welcome("Andrzej", 37);

const button = document.querySelector('.main__button--js');
console.log(button);
function handleClick(e) {
  console.log(e);
  console.log('Halo!');
}
button.addEventListener('click', handleClick);
button.addEventListener('click', (e) => {
  console.log(e.target);
  console.log('Halo arrow function!');
});
button.addEventListener('click', (e) => {
  const header = document.querySelector('.main__heading--js');
  header.innerHTML = 'Klik!';
  header.classList.toggle('main__heading--red');

  if (header.classList.contains('main__heading--red')) {
    console.log('Jest klasa "main__heading--red".');
  } else {
    console.log('Brak klasy "main__heading--red".')
  }
});

const navigationSwitcher = document.querySelector('.navigation__switcher--js');
navigationSwitcher.addEventListener('click', (e) => {
  const navigationList = document.querySelector('.navigation__list--js');
  navigationList.classList.toggle('navigation__list--visible');
  if (navigationList.classList.contains('navigation__list--visible')) {
    navigationSwitcher.innerHTML = '&#10005';
  } else {
  navigationSwitcher.innerHTML = '&#9776';
  }
});
