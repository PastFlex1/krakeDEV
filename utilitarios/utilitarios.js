mostrarImagen = function(IdComponente, img){
    let componente;
    componente = document.getElementById(IdComponente);
    componente.src = img;

}

mostrarTexto = function(IdComponente, mensaje){
    let componente;
    componente = document.getElementById(IdComponente);
    componente.innerText = mensaje;

}

mostrarTextoEnCaja = function(IdComponente, mensaje){
    let componente;
    componente = document.getElementById(IdComponente);
    componente.value = mensaje;

}

recuperarTexto = function(IdComponente){
    let componente;
    let valorIngresado;

    componente = document.getElementById(IdComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function(IdComponente){
    let valorCaja =  recuperarTexto(IdComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function(IdComponente){
    let valorCaja =  recuperarTexto(IdComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}