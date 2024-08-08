jugar = function(){
    
    let aleatorio;

    aleatorio = lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    // return console.log(aleatorio);
    if(aleatorio > 3){
        cambiarTexto("lblResultado", "GANASTE!!")
    }else{
        cambiarTexto("lblResultado", "PERDISTE!!")
    }
}

lanzarDado = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;

    aleatorio = Math.random();
    numeroMultiplicado = aleatorio * 6;
    // console.log(numeroMultiplicado);
    numeroEntero = parseInt(numeroMultiplicado);
    // console.log(numeroEntero);
    valorDado = numeroEntero + 1;

    return valorDado;
}