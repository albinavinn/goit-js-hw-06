const inputChange = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

inputChange.addEventListener('change', elem => {
    text.style.fontSize = `${elem.target.value }px`
})


