var imagen = document.getElementById("ahorcado")

//dice cuando gana el usuario
function ganador(){
    if(letrasEncontradas == palabra.length){
        setTimeout(function(){
            alert("Ganaste");
        }, 100);
        setTimeout(function(){
            nuevoJuego();
        }, 200)
        
    }
}

//cambia de imagen al ahorcado dependiendo del error
function erroresActuales(){
    if(erroresPermitidos === 5){
        imagen.src = "imagenes/ahorcado-error1.png";
    }
    if(erroresPermitidos === 4){
        imagen.src = "imagenes/ahorcado-error2.png";
    }
    if(erroresPermitidos === 3){
        imagen.src = "imagenes/ahorcado-error3.png";
    }
    if(erroresPermitidos === 2){
        imagen.src = "imagenes/ahorcado-error4.png";
    }
    if(erroresPermitidos === 1){
        imagen.src = "imagenes/ahorcado-error5.png";
    }
    if(erroresPermitidos === 0){
        imagen.src = "imagenes/ahorcado-Perdio.png";
        activarTeclas = false;
        setTimeout(function(){
            alert("game over");
        }, 100);
    }
   
}
