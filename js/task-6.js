let controlsInput = document.querySelector('input[type="number"]');
let min = Number(controlsInput.getAttribute('min'));
let max = Number(controlsInput.getAttribute('max'));
let controlsForm = document.querySelector('#controls');
let createBtn = document.querySelector('button[data-create]');
let destroyBtn = document.querySelector('button[data-destroy]');

controlsInput.addEventListener('click', toggleValue);
createBtn.addEventListener('click', () => {
  createBoxes(Number(controlsInput.value));
});
destroyBtn.addEventListener('click', destroyBoxes);
let newDiv = document.createElement('div');
newDiv.setAttribute('id', 'boxes');
newDiv.style.display = 'flex';
newDiv.style.flexWrap = 'wrap';
newDiv.style.alignItems = 'center';
newDiv.style.marginTop = '30px';
document.body.append(newDiv);

let inputValue = 0;
function toggleValue(event) {
  inputValue = event.currentTarget.value;
}

function createBoxes(amount) {
  newDiv.innerHTML = '';

  let boxSize = 30;
  for (let i = 1; i <= amount; i++) {
    divItem = `<div style = 'width: ${boxSize}px; height: ${boxSize}px; background: ${getRandomHexColor()}'></div>`;
    newDiv.insertAdjacentHTML('beforeend', divItem);
    boxSize += 10;
  }
}

function destroyBoxes() {
  controlsInput.value = '';
  return (newDiv.innerHTML = '');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
