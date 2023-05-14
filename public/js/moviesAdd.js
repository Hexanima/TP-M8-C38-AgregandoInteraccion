// Afanado de documentacion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#examples
function randomNum() {
    min = Math.ceil(0);
    max = Math.floor(99);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
    let r = randomNum();
    let g = randomNum();
    let b = randomNum();
    return `#${r}${g}${b}`;
}

window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');


    titulo.addEventListener("mouseover", () => titulo.style.color = randomColor());
}