var palabras = ["OSO","CAMION","ARAÑA","PERRO","LIBRO","CANCION","PELICULA"];
var areaDeAhorcado = document.querySelector(".canvas");
var pincel = areaDeAhorcado.getContext("2d");
var palabra = palabraRandom().split("");
var erroresPermitidos = 6;
var espacio = 10;
var letrasEncontradas = 0;
pincel.font = "bold 52px 'Press Start 2P'";


//escoje cual sera la palabra a descubrir
function palabraRandom(){
    var random = Math.floor(Math.random()*palabras.length);
    var palabra = palabras[random];
    return palabra;
}

//dibuja los guiones 
function dibujarGuiones(){
    var alturaGuiones = 100;
    var ancho = 1200/palabra.length;
    pincel. lineWidth= 6;
    pincel.fillStyle = "black";
    pincel.beginPath();  
    for(var i = 0; i < palabra.length; i++){
        pincel.moveTo(0+(ancho*i), alturaGuiones);
        pincel.lineTo(50+(ancho*i), alturaGuiones);   
    }
    
   pincel.stroke();
   pincel.closePath();
}



//dibuja las letras que estan correctas
function dibujarLetraCorrecta(letra){
    var alturaLetras = 90;
    var ancho = 1195/palabra.length;
    
        for(var i = 0; i < palabra.length; i++){
            if (palabra[i] == letra){
                pincel.fillText(palabra[i], 10 +(ancho*i), alturaLetras);
                letrasEncontradas = letrasEncontradas + 1;
            }
        }
    return letrasEncontradas;
}

//dibuja las letras erroneas
function dibujarLetraErronea(letra){
    var alturaLetras = 200;   
    
    if (palabra.indexOf(letra) == -1){
        pincel.fillText(letra,espacio + 50, alturaLetras);   
        erroresPermitidos = erroresPermitidos - 1;
    }
        return espacio = espacio + 70; 
        
}
