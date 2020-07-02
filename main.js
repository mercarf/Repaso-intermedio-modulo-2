'use strict';

const updateButton = document.querySelector('.js-update');
const moodButton = document.querySelector('.js-mood');
const title = document.querySelector('.js-title');
const main = document.querySelector('.js-main');
const mainImpar = document.querySelector('.js-main-impar');

/* Funcion manejadora que se ejecuta al hacer click en el botón update */
function handleButtonClick(ev) {
  ev.preventDefault();
  updateFace();
  getRandomNumber();
  updateBackground();

  //Número aleatorio que hay que adivinar
  console.log(getRandomNumber());
}
//Función que imprime en pantalla la carita seleccionada
function updateFace() {
  title.innerHTML = moodButton.value;
}

/* Función que actualiza el color de fondo en función del si el 
número aleatorio es par o impar */
function updateBackground() {
  const randomNumber = getRandomNumber();
  main.classList.remove('js-main');
  main.classList.remove('js-main-impar');
  if (randomNumber % 2 === 0) {
    main.classList.add('js-main');
  } else {
    main.classList.add('js-main-impar');
  }
}

/* Funcion que genera un número aleatorio */
const getRandomNumber = function () {
  const randomNumber = parseInt(Math.random() * 100);
  return randomNumber;
};

//Listener
updateButton.addEventListener('click', handleButtonClick);
