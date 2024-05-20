// Создать кнопку и красный квадрат с размерами 200х200px. 
// При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

const button1 = document.querySelector('#changeButton1');

button1.addEventListener('click', square1);

function square1() {
    const q1 = document.querySelector('.one');
    q1.style.backgroundColor = 'green';
    q1.style.width = '100px';
    q1.style.height = '100px';
}

const button2 = document.querySelector('#changeButton2');

button2.addEventListener('click', square2);

function square2() {
    const q2 = document.querySelector('.two');
    q2.style.backgroundColor = '#0f0db9';
    console.log('Новый цвет - #0f0db9'); 
}

