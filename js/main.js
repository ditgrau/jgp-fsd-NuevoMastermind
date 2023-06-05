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
};

// el nivel y el color picker estan en el mismo HTML, el ultimo oculto.
const desocultarTablero = () => {
    document.getElementById('paginaNiveles').style.display = 'none';
    document.getElementById('paginaColorPicker').classList.remove('tableroOculto');
};

// segun el nivel hay diferente cantidad de bolas vacias
let madreBolasVacias = document.getElementById('contenedorBolasVacias');
let arrayBolasVacias = [];
const activarTableroColor = (numero) => {
    desocultarTablero();
    tituloNivel(numero);
    for (let i = 0; i < numero; i++) {
        const bolasVacias = document.createElement('div');
        bolasVacias.classList.add('bolasVacias');
        madreBolasVacias.appendChild(bolasVacias);
        arrayBolasVacias.push(bolasVacias);
    }
};

// el titulo de la pagina del color picker debe variar en funcion del nivel 
let divTitulo = document.getElementById('tituloNivel');
const tituloNivel = (numero) => {
    let nivelSeleccionado = document.getElementById(`nivel${numero}`);
    let textoNivel = nivelSeleccionado.textContent
    divTitulo.innerHTML = textoNivel;
};


  // cuando el usuario introduce su combinacion aparecen las pistas segun la correspondencia con la combinacion ganadora
    // const comprobacion = () => {
    //     let arrayPistas = [];
    //     let combiCPU = randomRGB.slice();
    //     let combiUsuario = combinacionActual.slice();
    //     console.log (arrayPistas);
    //     console.log (combiCPU);
    //     console.log (combiUsuario); 
    
    //     for (let i = 0; i < 4; i++) {
    //         if (combiUsuario.includes(combiCPU[i]) && combiCPU[i] === combiUsuario[i]){
    //             combiCPU[i] = null;
    //             combiUsuario = null;
    //             arrayPistas.push('#000000');
    //         }  
    //         console.log (arrayPistas);
    //         console.log (combiCPU);
    //         console.log (combiUsuario); 
    //     }
    //     for (let j = 0; j < 4; j++) {
    //         if (combiCPU.includes(combiUsuario[j]) && combiUsuario[j] !== null){
    //             let posicionRandom = combiCPU.indexOf(combiUsuario[j]);
    //             combiCPU[posicionRandom] = null;
    //             combiUsuario[j] = null;
    //             arrayPistas.push('#FFFFFF');
    //         }   
    //     }
    //     console.log (arrayPistas);
    //     console.log (combiCPU);
    //     console.log (combiUsuario);
    // }

