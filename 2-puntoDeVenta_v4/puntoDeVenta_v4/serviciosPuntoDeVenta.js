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