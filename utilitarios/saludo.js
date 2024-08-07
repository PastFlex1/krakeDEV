saludar = function(){
    let nombre;
    nombre = recuperarTexto("txtNombre");
    let apellido;
    apellido = recuperarTexto("txtApellido");
}

recuperarTexto = function(IdComponente){
    let componente;
    let valorIngresado;

    componente = document.getElementById(IdComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}