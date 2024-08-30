let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function(String) {
    let elementoComputador = generarElemento();

    let rutaImagenComputador = generarRuta(elementoComputador);
    document.getElementById('imagenComputador').src = rutaImagenComputador;

    let resultado = determinarGanador(elementoComputador, String);

    if (resultado === 0) {
        mostrarTexto("lbljugador", "EMPATE");
    } else if (resultado === 1) {
        puntosUsuario ++;
        mostrarTexto("lbljugador", "GANASTE LA PARTIDA!!");
        mostrarTexto("lblpuntosUsuario", "Puntos usuario: " + puntosUsuario);
    } else {
        puntosComputador ++;
        mostrarTexto("lbljugador", "PERDISTE LA PARTIDA!!");
        mostrarTexto("lblpuntosComputador","Puntos computador: " + puntosComputador);
    }
}

mostrarTexto = function(elementId, texto) {
    document.getElementById(elementId).textContent = texto;
}


