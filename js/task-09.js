function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector('button.change-color');
const body = document.querySelector('body');
const changeColor = document.querySelector('span.color');

changeBtn.addEventListener('click', e => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  changeColor.textContent = color;
})