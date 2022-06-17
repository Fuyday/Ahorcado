//Iniciar nuevo juego
function nuevoJuego(){
    letraCorrecta = [];
    letraErronea = [];
    erroresPermitidos = 6;
    espacio = 10;
    letrasEncontradas = 0;
    activarTeclas = true;
    imagen.src = "imagenes/ahorcado-plataforma.png"
    palabra = palabraRandom();

    limpiarCanva();
    dibujarGuiones();

}

function limpiarCanva(){
    pincel.clearRect(0, 0, 1200, 600);
}

var btnNuevoJuego = document.querySelector(".nuevo-juego");
btnNuevoJuego.onclick = nuevoJuego;

//Regresar al menu
function regresarMenu(){
    document.querySelector("#area-de-juego").classList.add("invisible")
    document.querySelector(".btnInicio").classList.remove("invisible");
    document.querySelector(".btnAgregarPalabra").classList.remove("invisible");
    return activarTeclas = false;
}

var btnRegresarMenu = document.querySelector(".regresar");
btnRegresarMenu.onclick = regresarMenu;