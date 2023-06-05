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

const tableroJuego = (filas) => {
    for (let i = 0; i < filas; i++) {
        let filaTablero = document.createElement('div');
        filaTablero.classList.add('row');
        contenedorTablero.appendChild(filaTablero);
        filaTablero.classList.add(`fila${i}`);

        for (let j = 0; j < 4; j++) {
            let celdaTablero = document.createElement('div');
            celdaTablero.classList.add('bolasPequeñas');
            celdaTablero.classList.add('cursorPointer');
            filaTablero.appendChild(celdaTablero);
            celdaTablero.classList.add(`celda${i}`);
            
        }

        let pistasTablero = document.createElement('div');
        pistasTablero.classList.add('cajon');
        filaTablero.appendChild(pistasTablero);

        for (let k = 0; k < 4; k++) {
            let pistas = document.createElement('div');
            pistas.classList.add('pistas');
            pistasTablero.appendChild(pistas);
        }
    }
    
    }

tableroJuego ();

if (coloresElegidos.length===6) {
    tableroJuego (6);
} else if (coloresElegidos.length===5) {
    tableroJuego (8);
} else {
    tableroJuego (10);
}

// Saco los colores elegidos por pantalla para que el user sepa que opciones de color tiene
const tableroColores = () => {
    for (let i = 0; i < coloresElegidos.length; i++) {
        let bolaElegida = document.createElement('div');
        bolaElegida.classList.add('bolasPequeñas');
        bolaElegida.style.background = coloresElegidos[i];
        contenedorColoresElegidos.appendChild(bolaElegida);
    }
}
tableroColores();

/* la combinacion secreta permanecera oculta pero la necesito para mostrarla al final del juego 
y para obtener el color en RGB */
const tableroRandom = () => {
    for (let i = 0; i < arrayRandom.length; i++) {
        let bolaRandom = document.createElement('div');
        bolaRandom.classList.add('bolasVacias');
        bolaRandom.style.background = arrayRandom[i];
        contenedorCombiRandom.appendChild(bolaRandom);
    }
}
tableroRandom ();

// al coger el color del picker el dato esta en hexadecimal, con esta funcion lo convierto a RGB para las comparaciones
let randomRGB = [];
const coloresRGB = () => {
    let arrayBolasRandom = Array.from(contenedorCombiRandom.getElementsByClassName('bolasVacias'));
    arrayBolasRandom.map((bola) => {
        let guardarRandom = bola.style.backgroundColor
        randomRGB.push(guardarRandom);
    })
}
coloresRGB ();

// para que el usuario seleccione el color con el que pintar las bolas
let numeroFila = 0;
let numeroClic = 0;
let combinacionElegida = [];
let fila = Array.from(document.getElementsByClassName(`fila${numeroFila}`));

const iteraColor = (event) => {
    const bola = event.target;
    bola.style.backgroundColor = coloresElegidos[numeroClic];
    numeroClic++

    if (numeroClic===coloresElegidos.length){
        numeroClic = 0;
    }
}

const clicCeldas = () => {
    let celdas = Array.from(document.getElementsByClassName(`celda${numeroFila}`));
    celdas.forEach((bola) =>{
        bola.addEventListener('click', iteraColor)
        })
}

const clicFilas = () => {
    fila.forEach( (f) => {
        clicCeldas();
        }
    ) 
    numeroFila ++
    numeroClic = 0
}
clicFilas ();

// // boton de delete

// const borrar = () => {
//     celdas.forEach((bola) =>{
//     bola.style.backgroundColor = "";
//     })
// }

// const capturaColores = () => {
//     fila.map ((bola) => {
//         let capturarCombinacion = bola.style.background //aqui
//         combinacionElegida.push(capturarCombinacion);
//     })
//     console.log (combinacionElegida);
// }