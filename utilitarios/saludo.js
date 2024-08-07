saludar = function(){
    let nombre;
    nombre = recuperarTexto("txtNombre");
    let apellido;
    apellido = recuperarTexto("txtApellido");
    let edad;
    edad = recuperarInt("txtEdad");
    let estatura;
    estatura = recuperarFloat("txtEstatura");

    let bienvenida;
    bienvenida = "Bienvenido" + " " + nombre + " " + apellido;

    mostrarTexto("lblResultado", bienvenida);

    mostrarImagen("ImagenCambio","imagenes/saludos.gif");

    mostrarTextoEnCaja("txtNombre","");
}

