calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto = recuperarTexto("txtProducto");
    let precioProducto = recuperarFloat("txtPrecio");
    let cantidad = recuperarInt("txtCantidad");

    //variables para almacenar los retornos de las funciones
    let valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    let valorIVA = calcularIVA(valorSubtotal);
    let valorTotal = calcularTotal(valorSubtotal, 0, valorIVA);

    if (!esProductoValido(nombreProducto) || !esCantidadValida(cantidad) || !esPrecioValido(precioProducto)) {
        return;
    }


    //1. Recuperar el nombre del producto como String
    recuperarTexto = function (idComponente) {
        let componente;
        let valorIngresado;
        componente = document.getElementById(idComponente);
        valorIngresado = componente.value;
        return valorIngresado;
    }
    //2. Recuperar el precio como float
    recuperarFloat = function (idComponente) {
        let valorCaja = recuperarTexto(idComponente);
        let valorFlotante = parseFloat(valorCaja);
        return valorFlotante;
    }
    
    //3. Recuperar cantidad como int
    recuperarInt = function (idComponente) {
        let valorCaja = recuperarTexto(idComponente);
        let valorEntero = parseInt(valorCaja);
        return valorEntero;
    }
    //4. Recuperar el porcentaje de descuento como int

    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    valorSubtotal = calcularSubtotal(precioProducto, cantidad);

    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los parametros cuando invoca la funcion.
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    mostrarTexto("lblSubtotal", valorSubtotal);
    // Utilizar mostrarTexto
        /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4  
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */
    //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
    valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
    mostrarTexto("lblDescuento", valorDescuento);
    /*
        Caso de prueba: 
            - cantidad: 10 
            - precioProducto: 5.4  
            - descuento: 10
            - Descuento esperado: 5.4
        Si el caso de prueba es exitoso, hacer un commit
     */
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    valorIVA = calcularIVA(valorSubtotal);
    // El IVA debe calcularse sobre el valor del subtotal menos el descuento
    mostrarTexto("lblValorIVA", valorIVA);
    //9. Mostrar el resultado en el componente lblValorIVA    
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10

                    - valorSubtotal: 54
                    - descuento:5.4
                    - valorSubtotal 
                    - descuento: 48.6

                IVA esperado: 5.832

            Si el caso de prueba es exitoso, hacer un commit
        */
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal = calcularTotal(valorSubtotal, 0, valorIVA);
    //11. Mostrar el resultado en el componente lblTotal
    mostrarTexto("lblTotal", valorTotal);
    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4 
            - descuento: 10

                --valorSubtotal: 5.4
                --descuento: 5.4
                --IVA: 5.832

                Total esperado: 54.432

                Si el caso de prueba es exitoso, hacer un commit
       */
            
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */

}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
        document.getElementById("txtProducto").value = "";
        document.getElementById("txtPrecio").value = "";
        document.getElementById("txtCantidad").value = "";
    
        mostrarTexto("lblSubtotal", "0.0");
        mostrarTexto("lblDescuento", "0.0");
        mostrarTexto("lblValorIVA", "0.0");
        mostrarTexto("lblTotal", "0.0");
}
/* SI TODO FUNCIONA, HACER UN PUSH */

