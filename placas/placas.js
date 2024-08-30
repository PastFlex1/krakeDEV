validarPlaca = function() {
    let placa = recuperarTexto("txtValidar");

    let erroresEstructura = validarEstructura(placa);

    if (erroresEstructura == false) {
        mostrarTexto("lblestructura", "ESTRUCTURA INCORRECTA: ");
    } else {
        mostrarTexto("lblestructura", "ESTRUCTURA VALIDA"); 
        let provincia = obtenerProvincia(placa);

        if (provincia !== null) {
            mostrarTexto("lblprovincia", provincia);  // Muestra la provincia si es válida
        } else {
            mostrarTexto("lblprovincia", "Provincia incorrecta");  // Muestra un mensaje si no se encuentra la provincia
        }
    }
}