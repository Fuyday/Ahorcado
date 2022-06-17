var letraCorrecta = [];
var letraErronea = [];
var teclasValidas = new RegExp("^[A-Z\u00d1]$","i");
var activarTeclas = false;


document.onkeydown = (e) => {
    var letra = e.key.toUpperCase();

    if(activarTeclas == true){      //solo deja apretar las teclas si ya se apreto iniciar juego
        if(teclasValidas.test(letra)){
            if(palabra.indexOf(letra) === -1){
                if(letraErronea.indexOf(letra) === -1){
                    if(erroresPermitidos != 0){
                        letraErronea.push(letra); //agrega la letra la array
                        dibujarLetraErronea(letra); //dibuja la letra erronea
                        erroresActuales(); //cambia la imagen dependiendo del error que lleve le usuario
                    }
                }
                else{
                    alert("es incorrecta ya se puso");
                }
            }
            
            else{
                if(letraCorrecta.indexOf(letra) === -1){
                    letraCorrecta.push(letra); 
                    dibujarLetraCorrecta(letra);
                    ganador();    
                }
                
                else{
                    alert("es correcta ya se puso");
                }   
            }
        }

        else{
            alert("no es una letra");
        }
    }
}
