const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');
// console.log(list);
const li = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.className = 'item';
  item.textContent = ingredient;
  li.push(item);
});

list.append(...li);