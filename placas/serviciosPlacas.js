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
  