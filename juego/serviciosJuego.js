
obtenerAleatorio = function(){
    return Math.floor(Math.random() * 3) + 1;
}


generarElemento = function(){
    const elemento = obtenerAleatorio();
    let nombreElemento = '';

    if (elemento === 1) {
        nombreElemento = 'papel';
    } else if (elemento === 2) {
        nombreElemento = 'piedra';
    } else if (elemento === 3) {
        nombreElemento = 'tijeras';
    }

    return nombreElemento;
}


determinarGanador = function(jugador1, jugador2){
    if (jugador1 === jugador2) {
        return 0; 
    } else if (
        (jugador1 === 'piedra' && jugador2 === 'tijeras') ||
        (jugador1 === 'tijeras' && jugador2 === 'papel') ||
        (jugador1 === 'papel' && jugador2 === 'piedra')
    ) {
        return -1; 
    } else {
        return 1; 
    }
}

generarRuta = function(nombre){
    return `./imagenes/${nombre}.png`;
}
