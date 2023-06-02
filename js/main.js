// el logo, en todas las paginas, devuelve a la home
const navegarHome = () => window.location.href = "../index.html";

// para que despues de validar si el input del nombre esta completo me redirija 
const navegarSettings = () => window.location.href = "./settings.html";

// en el input de la vista user-name guardo el dato para utilizarlo en el final del juego
const guardarUser = () => {
    let nombreUser = document.getElementById('nombreUser').value;
    if (nombreUser !== ""){
    sessionStorage.setItem('nombreUser', nombreUser);
    navegarSettings();
    }
console.log (nombreUser);
};

// el nivel y el color picker estan en el mismo HTML, el ultimo oculto.
const desocultarTablero = () => {
    console.log ('estoy aqui');
    document.getElementById('paginaNiveles').style.display = 'none';
    document.getElementById('paginaColorPicker').classList.remove('tableroOculto');
};

// segun el nivel hay diferente cantidad de bolas vacias
let madreBolasVacias = document.getElementById('contenedorBolasVacias');
const activarTableroColor = (numero) => {
    desocultarTablero();
    tituloNivel(numero);
    for (let i = 0; i < numero; i++) {
        const bolasVacias = document.createElement('div');
        bolasVacias.classList.add('bolasVacias');
        madreBolasVacias.appendChild(bolasVacias);
    }
};

// el titulo de la pagina del color picker debe variar en funcion del nivel 
let divTitulo = document.getElementById('tituloNivel');
const tituloNivel = (numero) => {
    let nivelSeleccionado = document.getElementById(`nivel${numero}`);
    let textoNivel = nivelSeleccionado.textContent
    divTitulo.innerHTML = textoNivel;
};

// el color picker tiene que pintar las bolas vacias
let colorPicker = document.getElementById('colorPicker');
let arrayBolasVacias = Array.from(document.getElementsByClassName('bolasVacias'));
const pintarBola = () => {
    arrayBolasVacias.map((bola) => bola.style.background = colorPicker.value)
}
const escucharCambioColor = () => {
    colorPicker.addEventListener('change', pintarBola())
}