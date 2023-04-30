const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const gallery = document.querySelector('.gallery');
// console.log(gallery);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

// gallery.append(li1, li2, li3)

function renderList() {
  const markup = images.map(image => `<li><img class="picture" src=${image.url} width = '300' alt='${image.alt}'></img></li>`)
	.join('')
  gallery.insertAdjacentHTML('beforeend', markup);
}

renderList()