validarPlaca = function() {
    let placa = recuperarTexto("txtValidar");

    let erroresEstructura = validarEstructura(placa);

    if (erroresEstructura == false) {
        mostrarTexto("lblestructura", "ESTRUCTURA INCORRECTA: ");
    } else {
        mostrarTexto("lblestructura", "ESTRUCTURA VALIDA"); 
        let provincia = obtenerProvincia(placa);
        let tipo = obtenerTipoVehiculo(placa);
        let picoYplaca = obtenerDiaPicoyPlaca(placa);

        if (provincia !== null) {
            mostrarTexto("lblprovincia", provincia);  // Muestra la provincia si es válida
        } else {
            mostrarTexto("lblprovincia", "Provincia incorrecta");  // Muestra un mensaje si no se encuentra la provincia
        } 

        if(tipo !== null){
            mostrarTexto("lbltipo",tipo);
        }else{
            mostrarTexto("lbltipo","El tipo de placa es incorrecto");
        }

        if(picoYplaca !== null){
            mostrarTexto("lblPico",picoYplaca);
        }else{
            mostrarTexto("lblPico","Incorrecto");
        }
    }
}