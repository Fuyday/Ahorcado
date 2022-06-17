function iniciar(){
    document.querySelector("#area-de-juego").classList.remove("invisible");
    document.querySelector(".btnInicio").classList.add("invisible");
    document.querySelector(".btnAgregarPalabra").classList.add("invisible");
    nuevoJuego();
}

var btnInicio = document.querySelector(".btnInicio");
btnInicio.onclick = iniciar;

function agregarPalabra(){
    var nuevaPalabra = prompt("ingrese nueva palabra");
    palabras.push(nuevaPalabra)

}

var btnAgregarPalabra = document.querySelector(".btnAgregarPalabra");
btnAgregarPalabra.onclick = agregarPalabra;