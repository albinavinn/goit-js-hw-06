const categories = document.getElementById('categories');
// console.log(categories);

const numCategories = categories.querySelectorAll('.item');
console.log('Number of categories:', numCategories.length);

Array.prototype.forEach.call(numCategories, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsLength}`);
});

