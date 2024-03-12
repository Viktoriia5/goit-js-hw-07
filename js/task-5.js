let btnSubmit = document.querySelector('.change-color');

btnSubmit.addEventListener('click', handleChangeColor);
let widgetBody = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleChangeColor(event) {
  console.log('widget');
  let widgetSpan = document.querySelector('.color');
  widgetBody.style.backgroundColor = getRandomHexColor();
  widgetSpan.innerHTML = getRandomHexColor();
}
