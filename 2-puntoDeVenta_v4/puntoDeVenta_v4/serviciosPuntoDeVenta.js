calcularValorDescuento = function(){
    let monto;
    let descuento;
    let porcentaje;

    descuento = (monto * porcentaje) / 100;
    return descuento;
}

calcularIVA = function(){
    let iva;
    totalIva = iva * 0.12;
    return totalIva
}

calcularSubtotal = function(subtotal,cantidad){
    let sub;
    sub = (subtotal * cantidad);
    return sub;
}

calcularTotal = function(calcularSubtotal,descuento,totalIva){
    let total;
    total = (calcularSubtotal - descuento + totalIva);
    return total;
}

mostrarTexto = function(IdComponente, mensaje){
    let componente;
    componente = document.getElementById(IdComponente);
    componente.innerText = mensaje;

}