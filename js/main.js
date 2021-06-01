const lightBody = document.querySelector('body');
const Btn = document.querySelector('.swicher-light');
const ball = document.querySelector('.ball-light');

Btn.addEventListener('click', function() {
    lightBody.classList.toggle('dark-theme');
})