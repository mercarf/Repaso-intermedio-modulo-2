"use strict";

const updateButton = document.querySelector(".js-update");
const moodButton = document.querySelector(".js-mood");
const title = document.querySelector(".js-title");
const main = document.querySelector(".js-main");

function handleButtonClick(event) {
  /* console.log(event.target);
  console.log(moodButton.value); */
  title.innerHTML = moodButton.value;

  function aleatorio(minimo, maximo) {
    const result = Math.round(Math.random() * (maximo - minimo) + minimo);
    console.log(result);
    /* return result; */

    if (result % 2 === 0) {
      return (main.style.backgroundColor = "#ffcc00");
    } else {
      return (main.style.backgroundColor = "#ff9900");
    }
  }

  console.log(aleatorio(0, 100));
}

updateButton.addEventListener("click", handleButtonClick);
