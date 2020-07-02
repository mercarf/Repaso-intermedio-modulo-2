'use strict';

const updateButton = document.querySelector('.js-update');
const moodButton = document.querySelector('.js-mood');
const title = document.querySelector('.js-title');
const main = document.querySelector('.js-main');
const mainImpar = document.querySelector('.js-main-impar');

function handleButtonClick(ev) {
  /* console.log(event.target);
  console.log(moodButton.value); */
  ev.preventDefault();
  title.innerHTML = moodButton.value;

  console.log(randomNumber(0, 100));
}

function randomNumber(minimo, maximo) {
  const result = Math.round(Math.random() * (maximo - minimo) + minimo);
  console.log(result);
  /* return result; */

  if (result % 2 === 0) {
    return (
      main.classList.add('js-main'), main.classList.remove('js-main-impar')
    );
  } else {
    return (
      main.classList.remove('js-main'), main.classList.add('js-main-impar')
    );
  }
}
updateButton.addEventListener('click', handleButtonClick);

/* if (result % 2 === 0) {
      return (main.style.backgroundColor = "#ffcc00");
    } else {
      return (main.style.backgroundColor = "#ff9900");
    }
  } */
