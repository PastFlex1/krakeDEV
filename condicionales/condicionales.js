calcularTasaInteres = function(ingresoAnual) {
    let ingresoAnual = parseFloat(ingresoAnual);
    let tasa;

    if (ingresoAnual < 300000) {
        tasa = 0.16; 
    } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
        tasa = 0.15; 
    } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
        tasa = 0.14; 
    } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
        tasa = 0.13; 
    } else {
        tasa = 0.12; 
    }

    return tasa;
}

calcularCapacidadPago = function(edad, ingresos, egresos) {
    ingresos = parseFloat(ingresos);
    egresos = parseFloat(egresos);

    let sobrante = ingresos - egresos;
    let capacidadPago;

    if (edad > 50) {
        capacidadPago = sobrante * 0.30; 
    } else {
        capacidadPago = sobrante * 0.40; 
    }

    return capacidadPago;
}

calcularDescuento = function(precio, cantidad) {
    precio = parseFloat(precio);
    let descuento = 0;

    if (cantidad >= 3 && cantidad <= 5) {
        descuento = 0.02; 
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = 0.03; 
    } else if (cantidad >= 12) {
        descuento = 0.04; 
    }

    let totalDescuento = precio * descuento;

    let precioFinal = precio - totalDescuento;

    return precioFinal * cantidad;
}

determinarColesterolLDL = function(nivelColesterol) {
    nivelColesterol = parseFloat(nivelColesterol); 
    let categoria;

    if (nivelColesterol < 100) {
        categoria = "Óptimo";
    } else if (nivelColesterol >= 100 && nivelColesterol < 129) {
        categoria = "Cerca de óptimo";
    } else if (nivelColesterol >= 130 && nivelColesterol < 159) {
        categoria = "Límite alto";
    } else if (nivelColesterol >= 160 && nivelColesterol < 189) {
        categoria = "Alto";
    } else {
        categoria = "Muy alto";
    }

    return categoria;
}

validarClave = function(clave) {
    if (clave.length >= 8 && clave.length <= 16) {
        return true;
    } else {
        return false;
    }
}

esMayuscula = function(caracter) {
    if (caracter.length !== 1) {
        return false;
    }

    let codigoAscii = caracter.charCodeAt(0);

    if (codigoAscii >= 65 && codigoAscii <= 90) {
        return true;
    } else {
        return false;
    }
}

esMinuscula = function(caracter) {
    if (caracter.length !== 1) {
        return false;
    }

    let codigoAscii = caracter.charCodeAt(0);

    if ((codigoAscii >= 97 && codigoAscii <= 122) || 
        (codigoAscii >= 224 && codigoAscii <= 250)) {
        return true;
    } else {
        return false;
    }
}

esDigito = function(caracter) {
    if (caracter.length !== 1) {
        return false;
    }

    let codigoAscii = caracter.charCodeAt(0);

    if (codigoAscii >= 48 && codigoAscii <= 57) {
        return true;
    } else {
        return false;
    }
}

dejarSalir = function(notaMatematica, notaFisica, notaGeometria) {
    notaMatematica = parseFloat(notaMatematica);
    notaFisica = parseFloat(notaFisica);
    notaGeometria = parseFloat(notaGeometria);

 
    if ((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && (notaFisica > notaMatematica)) {
        return true;
    } else {
        return false;
    }
}

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria) {
    notaMatematica = parseFloat(notaMatematica);
    notaFisica = parseFloat(notaFisica);
    notaGeometria = parseFloat(notaGeometria);

    if ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80) {
        return true;
    } else {
        return false;
    }
}

darPermiso = function(notaMatematica, notaFisica, notaGeometria) {
    notaMatematica = parseFloat(notaMatematica);
    notaFisica = parseFloat(notaFisica);
    notaGeometria = parseFloat(notaGeometria);

    if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
        return true;
    } else {
        return false;
    }
}