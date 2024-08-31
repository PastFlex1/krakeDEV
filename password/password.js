validarPassword = function() {
    let password = recuperarTexto("txtContraseña");
    let esValida = true;

    if (password.length < 8 || password.length > 16) {
        mostrarTexto("lblError", "Debe ser de mínimo 8 caracteres y máximo de 16 caracteres");
        esValida = false;
    } else {
        mostrarTexto("lblError", "");
    }

    if (esMayuscula(password)) {
        mostrarTexto("lblError1", "Debe contener al menos 1 carácter mayúscula");
        esValida = false;
    } else {
        mostrarTexto("lblError1", "");
    }

    if (esDigito(password)) {
        mostrarTexto("lblError2", "Debe contener al menos un dígito");
        esValida = false;
    } else {
        mostrarTexto("lblError2", "");
    }

    if (esGuion(password)) {
        mostrarTexto("lblError3", "Debe contener al menos un carácter especial");
        esValida = false;
    } else {
        mostrarTexto("lblError3", "");
    }

    return esValida;
}


EjecutarValicacion = function(){
    let esValida = validarPassword();
    if (esValida) {
        console.log("Contraseña válida");
    } else {
        console.log("Contraseña inválida");
    }
}
