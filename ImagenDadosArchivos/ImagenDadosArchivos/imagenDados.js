let puntos;
puntos = 0;
let lanzamiento;
lanzamiento = 5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamiento(resultado);

   
}

modificarPuntos = function(numero){
    puntos = puntos + numero;
    cambiarTexto("lblPuntaje",puntos);
    if(puntos >= 20){
        cambiarTexto("lblResultado","Ganaste!!");
        limpiar();
    }
}


//No recibe parametros
//Resta 1 a la variable de lanzamientos 



modificarLanzamiento = function(){
    lanzamiento = lanzamiento - 1;
    cambiarTexto("lblLanzamiento",lanzamiento);

    if(lanzamiento == 0){
        cambiarTexto("lblResultado","Perdiste!!")
        
    }else if(lanzamiento == 0){
        limpiar();
    }
}

limpiar = function(){
    puntos = 0;
    lanzamiento = 5;
    cambiarTexto("lblPuntaje", puntos);
    cambiarTexto("lblLanzamiento", lanzamiento);
    cambiarTexto("lblResultado", "");
    cambiarImagen("imgDado", "");
}


mostrarCara = function(numero){
    if(numero == 1){
        cambiarImagen("imgDado","dados1.png");
    }else if(numero == 2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero == 4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero == 5){
        cambiarImagen("imgDado","dados5.png");
    }else if(numero == 6){
        cambiarImagen("imgDado","dados6.png");
    }
}



lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}