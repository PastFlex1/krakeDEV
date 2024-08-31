
numeroAleatorio = function() {
    return Math.floor(Math.random() * 100) + 1;
}

generarAleatorios = function(cantidad) {
    let aleatorios = [];
    
    for (let i = 0; i < cantidad; i++) {
        let numero = numeroAleatorio();
        aleatorios.push(numero);
    }

    return aleatorios;
}


mostrarResultados = function() {
    let cantidad = recuperarInt('txtCantidad');  

    if (isNaN(cantidad) || cantidad < 5 || cantidad > 20) {
        alert('El número debe estar entre 5 y 20.');
        return;
    }

    let aleatorios = generarAleatorios(cantidad);  

    let contenidoTabla = "<table border='1'><tr><th>NÚMERO</th></tr>";

    for (let i = 0; i < aleatorios.length; i++) {
        contenidoTabla += "<tr><td>" + aleatorios[i] + "</td></tr>";
    }

    contenidoTabla += "</table>";
    document.getElementById('tabla').innerHTML = contenidoTabla;  
}

recuperarInt = function(idComponente) {
    let valorCaja = document.getElementById(idComponente).value;
    return parseInt(valorCaja);
}
