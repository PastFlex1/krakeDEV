validarEstructura = function (placa) {
  let esValida = true;
  placa = recuperarTexto("txtValidar");
  if (placa.length < 7 || placa.length > 8) {
    mostrarTexto("lblvalidar", "Debe estar entre 8 u 7 caracteres");
    esValida = false;
  } else {
    mostrarTexto("lblvalidar", "");
  }
  let primer = placa.charAt(0);
  if (esMayuscula(primer) == false) {
    mostrarTexto("lblvalidar2", "Debe ser el primer caracter mayuscula");
    esValida = false;
  } else {
    mostrarTexto("lblvalidar2", "");
  }

  let segundo = placa.charAt(1);
  if (esMayuscula(segundo) == false) {
    mostrarTexto("lblvalidar3", "Debe ser el segundo caracter mayuscula");
    esValida = false;
  } else {
    mostrarTexto("lblvalidar3", "");
  }

  let tercer = placa.charAt(2);
  if (esMayuscula(tercer) == false) {
    mostrarTexto("lblvalidar4", "Debe ser el tercer caracter mayuscula");
    esValida = false;
  } else {
    mostrarTexto("lblvalidar4", "");
  }

  let cuarto = placa.charAt(3);
  if (esGuion(cuarto) == false) {
    mostrarTexto(
      "lblvalidar5",
      "Debe ser el cuarto caracter debe ser un guion"
    );
    esValida = false;
  } else {
    mostrarTexto("lblvalidar5", "");
  }

  let quinto = placa.charAt(4);
  if (esDigito(quinto) == false) {
    mostrarTexto("lblvalidar6", "Debe ser el quinto caracter un digito");
    esValida = false;
  } else {
    mostrarTexto("lblvalidar6", "");
  }

  let sexto = placa.charAt(5);
  if (esDigito(sexto) == false) {
    mostrarTexto("lblvalidar7", "Debe ser el sexto caracter un digito");
    esValida = false;
  } else {
    mostrarTexto("lblvalidar7", "");
  }

  let septimo = placa.charAt(6);
  if (esDigito(septimo) == false) {
    mostrarTexto("lblvalidar8", "Debe ser el septimo caracter un digito");
    esValida = false;
  } else {
    mostrarTexto("lblvalidar8", "");
  }

  return esValida;
};

obtenerProvincia = function (placa) {
  let primer = placa.charAt(0);
  let validarProvincia = null;
  if (primer.charCodeAt(0) === 65) {
    validarProvincia = "Azuay";
  } else if(primer.charCodeAt(0) === 66){
    validarProvincia = "Bolívar";
  } else if(primer.charCodeAt(0) === 85){
    validarProvincia = "Cañar";
  } else if(primer.charCodeAt(0) === 67){
    validarProvincia = "Carchi";
  } else if(primer.charCodeAt(0) === 88){
    validarProvincia = "Cotopaxi";
  } else if(primer.charCodeAt(0) === 72){
    validarProvincia = "Chimborazo";
  } else if(primer.charCodeAt(0) === 79){
    validarProvincia = "El Oro";
  } else if(primer.charCodeAt(0) === 69){
    validarProvincia = "Esmeraldas";
  } else if(primer.charCodeAt(0) === 87){
    validarProvincia = "Galápagos";
  }else if(primer.charCodeAt(0) === 71){
    validarProvincia = "Guayas";
  }else if(primer.charCodeAt(0) === 73){
    validarProvincia = "Imbabura";
  }else if(primer.charCodeAt(0) === 76){
    validarProvincia = "Loja";
  }else if(primer.charCodeAt(0) === 82){
    validarProvincia = "Los Rios";
  }else if(primer.charCodeAt(0) === 77){
    validarProvincia = "Manabí";
  }else if(primer.charCodeAt(0) === 86){
    validarProvincia = "Morona Santiago";
  }else if(primer.charCodeAt(0) === 78){
    validarProvincia = "Napo";
  }else if(primer.charCodeAt(0) === 83){
    validarProvincia = "Pastaza";
  }else if(primer.charCodeAt(0) === 80){
    validarProvincia = "Pichincha";
  }else if(primer.charCodeAt(0) === 75){
    validarProvincia = "Sucumbíos";
  }else if(primer.charCodeAt(0) === 81){
    validarProvincia = "Orellana";
  }else if(primer.charCodeAt(0) === 84){
    validarProvincia = "Tungurahua";
  }else if(primer.charCodeAt(0) === 90){
    validarProvincia = "Zamora chinchipe";
  }else if(primer.charCodeAt(0) === 89){
    validarProvincia = "Santa Elena";
  }
  return validarProvincia;
}

obtenerTipoVehiculo = function(placa){
    let esTipo = null;
    let segundo = placa.charAt(1);
    if(segundo.charCodeAt(0) === 65 || segundo.charCodeAt(0) === 90){
        esTipo = "vahiculos comerciales como taxis o autobuses";
    }
    
    if(segundo.charCodeAt(0) === 69){
        esTipo = "vehiculo gubernamental";
    }

    if(segundo.charCodeAt(0) === 88){
        esTipo = "vehiculo de uso oficial";
    }

    if(segundo.charCodeAt(0) === 83){
        esTipo = "vehiculos del gobierno provincial";
    }

    if(segundo.charCodeAt(0) === 77){
        esTipo = "vehiculo municipales";
    }

    if(segundo.charCodeAt(0) != 65 && segundo.charCodeAt(0) != 90 && segundo.charCodeAt(0) != 69 && segundo.charCodeAt(0) != 88 && segundo.charCodeAt(0) != 83 && segundo.charCodeAt(0) != 77){
        esTipo = "vehiculos privados";
    }
    return esTipo;

}

obtenerDiaPicoyPlaca = function(placa){
    let esPico = null;
    let ultimo = placa.charCodeAt(placa.length - 1);
    if(ultimo === 49 || ultimo === 50){
        esPico = "El día que le toca pico y placa es lunes";
    }
    if(ultimo === 51 || ultimo === 52){
        esPico = "El dia que le toca pico y placa es martes";
    }
    if(ultimo === 53 || ultimo === 54){
        esPico = "El dia que le toca pico y placa es miercoles";
    }
    if(ultimo === 55 || ultimo === 56){
        esPico = "El dia que le toca pico y placa es jueves";
    }
    if(ultimo === 57 || ultimo === 48){
        esPico = "El dia que le toca pico y placa es viernes"
    }
    return esPico;
}

limpiar = function(){
    mostrarTexto("lblvalidar","");
    mostrarTexto("lblvalidar2","");
    mostrarTexto("lblvalidar3","");
    mostrarTexto("lblvalidar4","");
    mostrarTexto("lblvalidar5","");
    mostrarTexto("lblvalidar6","");
    mostrarTexto("lblvalidar7","");
    mostrarTexto("lblvalidar8","");
    mostrarTexto("lblestructura","");
    mostrarTexto("lblprovincia","");
    mostrarTexto("lbltipo","");
    mostrarTexto("lblPico","");

    document.getElementById("txtValidar").value = "";
}
   