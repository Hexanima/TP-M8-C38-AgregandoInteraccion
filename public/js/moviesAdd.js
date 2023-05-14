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
    let inputTitulo = document.querySelector("input#titulo");

    let estadoSecreto = 0;

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener("mouseover", () => titulo.style.color = randomColor());

    inputTitulo.addEventListener("keypress", (event) => {
        let key = event.key.toLowerCase();
        if (estadoSecreto == 0 && key == "s") return estadoSecreto = 1;
        if (estadoSecreto == 1 && key == "e") return estadoSecreto = 2;
        if (estadoSecreto == 2 && key == "c") return estadoSecreto = 3;
        if (estadoSecreto == 3 && key == "r") return estadoSecreto = 4;
        if (estadoSecreto == 4 && key == "e") return estadoSecreto = 5;
        if (estadoSecreto == 5 && key == "t") return estadoSecreto = 6;
        if (estadoSecreto == 6 && key == "o") {
            estadoSecreto = 0;
            return alert("SECRETO MAGICO")
        }
        return estadoSecreto = 0;
    })
}