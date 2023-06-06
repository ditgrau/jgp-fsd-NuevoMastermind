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
            pistas.classList.add(`pistas${i}`);
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
let combinacionActual = [];

const iteraColor = (event) => {
    const bola = event.target;
    bola.style.backgroundColor = coloresElegidos[numeroClic];
    numeroClic++

    if (numeroClic===coloresElegidos.length){
        numeroClic = 0;
    }
}

const filasClicables = () => {
    let filasClicables = Array.from(document.getElementsByClassName(`celda${numeroFila}`));
    filasClicables.forEach(bola => bola.addEventListener('click', iteraColor));
} 
filasClicables ();

const ejecucionFilas = () => {
    let filaBolitas = Array.from(document.getElementsByClassName(`celda${numeroFila}`));
    if(filaBolitas.find(bola => !bola.style.backgroundColor)) return;
    filaBolitas.map((bolas)=>{
        bolaBackground = bolas.style.backgroundColor
        combinacionActual.push(bolaBackground);
    })
    
    let combiUser = combinacionActual.slice();
    let combiCPU = randomRGB.slice();
    let arrayPistas = [];
        // cuando el usuario introduce su combinacion hay que ver coincidencias con la combinacion ganadora 
        for (let i = 0; i < 4; i++) {
            if (combiUser.includes(combiCPU[i]) && combiCPU[i] === combiUser[i]) {
                combiCPU[i] = null;
                combiUser[i] = null;
                arrayPistas.push('#000000');
            } 
        }
        for (let j = 0; j < 4; j++) { 
            if (combiUser[j] !== null && combiCPU.includes(combiUser[j])){
                let posicion = combiCPU.indexOf(combiUser[j]);
                combiCPU[posicion] = null;
                combiUser[j] = null;
                arrayPistas.push('#FFFFFF');
            }
        }
        // las pistas blancas y negras aparecen para ayudar al usuario a resolver la combinacion

        let pistas = Array.from(document.getElementsByClassName(`pistas${numeroFila}`));
        let blancasNegras = arrayPistas.sort();
        for (let k = 0; k < 4; k++) {
            pistas[k].style.backgroundColor = blancasNegras[k];  
        }

        if (blancasNegras.every(pista => pista === '#000000') && blancasNegras.length === 4) {
            
        }


    filaBolitas.forEach(bola => {
        bola.removeEventListener("click", iteraColor)
    })
    numeroFila++;
    combinacionActual = [];
    filasClicables();
}

//// boton de delete

const borrar = () => { 
    let filaBolitas = Array.from(document.getElementsByClassName(`celda${numeroFila}`));
    filaBolitas.forEach((bola)=>{
        bola.style.backgroundColor = "";
    })
}
