saludar = function(){
    let nombre;
    nombre = recuperarTexto("txtNombre");
    let apellido;
    apellido = recuperarTexto("txtApellido");
    let edad;
    edad = recuperarInt("txtEdad");
    let estatura;
    estatura = recuperarFloat("txtEstatura");
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