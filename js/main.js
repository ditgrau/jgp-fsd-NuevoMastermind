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