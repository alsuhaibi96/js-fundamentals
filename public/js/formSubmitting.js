const form = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const users = document.querySelector('#users');
const msg = document.querySelector('.msg');


form.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();
    if (name.value === '' || email.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields';
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${name.value} : ${email.value}`
        ))
        users.appendChild(li);

        name.value = '';
        email.value = '';
    }
}