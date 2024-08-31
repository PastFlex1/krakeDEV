Ejecutar = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}


recorrerCadena = function(cadena){
    let caracter;
    for(let posicion = 0; posicion < cadena.length;posicion++){
        caracter = cadena.charAt(posicion);
        console.log("Caracter: " + caracter + "posicion:" + posicion);
    }
}

Ejecutar2 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    invertirCadena(mensaje);
}

invertirCadena = function(cadena){
    let caracter = "";
    for(let posicion = cadena.length -1; posicion >= 0;posicion--){
        caracter += cadena.charAt(posicion);
        mostrarTexto("lblresultado",caracter);
    }
}

buscarLetra = function(cadena,letra){
    let letralterada;
    let existeLetra = false;
    for(let i = 0 ;i < cadena.length ;i++){
        letra = cadena.charAt(i);
        if(letralterada == letra){
            existeLetra = true;
        }
    }
    if(existeLetra == true){
        return true;
    }else{
        return false;
    }
}

contarMayusculas = function(cadena){
    let letra;
    let contadorMayusculas = 0;
    for(let i = 0; i > letra.length;i++){
        letra = cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas++;
        }
    }
}