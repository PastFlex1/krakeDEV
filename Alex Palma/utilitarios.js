
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }

mostrarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarTexto = function(idComponente){
    document.getElementById(idComponente).disabled = true;
}

habilitarTexto = function(idComponente){
    document.getElementById(idComponente).disabled = false;
}

mostrarOpcionEmpleado = function() {
    mostrarComponente('divEmpleado');
    ocultarComponente('divRol');
    ocultarComponente('divResumen');
    mostrarEmpleados();
};

mostrarOpcionRol = function() {
    mostrarComponente('divRol');
    ocultarComponente('divEmpleado');
    ocultarComponente('divResumen');
};

mostrarOpcionResumen = function() {
    mostrarComponente('divResumen');
    ocultarComponente('divEmpleado');
    ocultarComponente('divRol');
};

recuperarTextoDiv = function(idDiv) {
    const div = document.getElementById(idDiv);
    return div ? div.textContent : '';
};

recuperarFloatDiv = function(idDiv) {
    return parseFloat(recuperarTextoDiv(idDiv)) || 0;
};

recuperarIntDiv = function(idDiv) {
    return parseInt(recuperarTextoDiv(idDiv)) || 0;
};

