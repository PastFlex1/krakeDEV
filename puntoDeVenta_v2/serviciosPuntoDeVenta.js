calcularSubtotal = function(precio, cantidad) {
    return precio * cantidad;
}
calcularValorDescuento = function(monto, porcentajeDescuento) {
    return (monto * porcentajeDescuento) / 100;
}
calcularIVA = function(monto) {
    const tasaIVA = 0.12;
    return monto * tasaIVA;
}

calcularTotal = function(subtotal, descuento, iva) {
    return subtotal - descuento + iva;
}

mostrarTexto = function(IdComponente, mensaje){
    let componente;
    componente = document.getElementById(IdComponente);
    componente.innerText = mensaje;

}

calcularDescuentoPorVolumen = function(subtotal, cantidad) {
    let porcentajeDescuento = 0;

    if (cantidad >= 3 && cantidad <= 5) {
        porcentajeDescuento = 3;
    } else if (cantidad >= 6 && cantidad <= 11) {
        porcentajeDescuento = 4;
    } else if (cantidad >= 12) {
        porcentajeDescuento = 5;
    }

    let valorDescuento = (subtotal * porcentajeDescuento) / 100;
    return valorDescuento;
}

esProductoValido = function(nombreProducto) {
    if (!nombreProducto || nombreProducto.trim() === "") {
        mostrarTexto("lblError1", "*CAMPO OBLIGATORIO");
        return false;
    } else if (nombreProducto.length > 10) {
        mostrarTexto("lblError1", "El nombre del producto no puede tener más de 10 caracteres");
        return false;
    } else {
        mostrarTexto("lblError1", "");
        return true;
    }
}

esCantidadValida = function(cantidad) {
    if (isNaN(cantidad) || cantidad <= 0 || cantidad > 100) {
        mostrarTexto("lblError2", "La cantidad debe ser un número entero entre 0 y 100");
        return false;
    } else {
        mostrarTexto("lblError2", "");
        return true;
    }
}

esPrecioValido = function(precioProducto) {
    if (isNaN(precioProducto) || precioProducto <= 0 || precioProducto > 50) {
        mostrarTexto("lblError3", "El precio debe ser un número entre 0 y 50");
        return false;
    } else {
        mostrarTexto("lblError3", "");
        return true;
    }
}