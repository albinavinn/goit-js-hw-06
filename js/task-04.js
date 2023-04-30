let counterValue = 0;

const neutral = document.getElementById('value');
// console.log(neutral);
const minus = document.querySelector('button[data-action="decrement"]');
const plus = document.querySelector('button[data-action="increment"]');

minus.addEventListener('click', () => {
    counterValue--
    neutral.textContent = counterValue
});

plus.addEventListener('click', () => {
    counterValue +=1
    neutral.textContent = counterValue
});