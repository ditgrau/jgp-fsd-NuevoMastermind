// empieza el juego 

// la combinacion ganadora es una combinacion aleatoria de los colores elegidos
let coloresElegidos = JSON.parse(sessionStorage.getItem ('coloresUsuario'));
let arrayRandom = [];
const combiRandom = () => {
    for (let i = 0; i < 4; i++) {
        let numIndice = Math.floor(Math.random()*coloresElegidos.length);
        arrayRandom.push(coloresElegidos[numIndice]);
    }
}
combiRandom();

// el tablero de juego se crea dinamicamente dependiendo del nivel seleccionado
let contenedorTablero = document.getElementById('gameBoard');
let contenedorColoresElegidos = document.getElementById('coloresBoard');
let contenedorCombiRandom = document.getElementById('combiRandom');

const tableroJuego = () => {

}
tableroJuego ();

const tableroColores = () => {

}

const tableroRandom = () => {
    for (let i = 0; i < arrayRandom.length; i++) {
        let bolaRandom = document.createElement('div');
        bolaRandom.classList.add('bolasVacias');
        bolaRandom.style.background = arrayRandom[i];
        contenedorCombiRandom.appendChild(bolaRandom);
    }
}
tableroRandom ();