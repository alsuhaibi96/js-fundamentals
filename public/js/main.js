const itemes = document.querySelectorAll('li');
const users = document.getElementById('users');
const element = document.querySelector('.item')
const ul = document.querySelector('.items');

ul.firstElementChild.textContent = 'Abdu'
ul.children[1].innerHTML = 'Hello'
ul.lastElementChild.textContent = 'Nice'

const btn = document.querySelector('.btn');

// btn.style.background = 'red';

btn.addEventListener('click', (e) => {
    e.preventDefault()
        // console.log(e.target.className)
    document.querySelector('#my-form').style.background = '#ccc'
    document.querySelector('body').classList.add('bg-dark')
    itemes.lastElementChild.innerHTML = '<h1>hello</h1>';
    itemes.lastElementChild.style.color = '#ffff'
})

// console.log(ul)
// console.log(element);
// console.log(users);
// itemes.forEach((element) => console.log(element))