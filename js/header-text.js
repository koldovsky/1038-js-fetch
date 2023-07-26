const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

const title = document.querySelector('.header__title');

const greetings = [
    'Привіт!',
    'Вітаю!',
    'Hola!',
    'Nice to see you!'
];

title.innerText = getRandom(greetings);

const colors = [
    'red',
    'green',
    'blue',
    'yellow'
];

title.style.color = getRandom(colors);