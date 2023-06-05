// el color picker tiene que pintar las bolas vacias
let colorPicker = document.getElementById('colorPicker');
let contadorBolas = 0;
let arrayColoresElegidos = [];
const pintarBola = () => {
    arrayBolasVacias[contadorBolas].style.backgroundColor = colorPicker.value;
    arrayColoresElegidos.push(colorPicker.value);
    contadorBolas ++;
    if (contadorBolas === arrayBolasVacias.length) {
        colorPicker.disabled = true;
    }
    almacenarArrayColores();
}
const escucharCambioColor = () => {
    colorPicker.addEventListener('change', pintarBola);
}
escucharCambioColor();

// necesito el array de los colores seleccionados para el tablero de juego
const almacenarArrayColores = () => {
    let coloresAlmacenados = JSON.stringify(arrayColoresElegidos);
    sessionStorage.setItem('coloresUsuario', coloresAlmacenados);  
}
almacenarArrayColores();

// al apretar al enter en la vista del colorpicker empieza el juego
let aJugar = () => {
    if(arrayColoresElegidos.length === arrayBolasVacias.length && arrayColoresElegidos.length!= 0) {
        window.location.href = './game.html';
    }
}
// game.js

