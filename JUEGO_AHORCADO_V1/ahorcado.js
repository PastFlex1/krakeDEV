// Variables globales
let palabraSecreta = '';
let intentos = 0;
let coincidencias = 0;
let errores = 0;

// Función para mostrar la letra en el div correspondiente
function mostrarLetra(letra, posicion) {
    let idComponente = 'div' + posicion;
    mostrarTexto(idComponente, letra);
}

// Función para guardar la palabra
function guardarPalabra() {
    let inputPalabra = recuperarTexto('password');
    
    if (inputPalabra.length !== 5) {
        alert('Debe ingresar una palabra de 5 letras mayúsculas.');
        return;
    }
    
    for (let i = 0; i < inputPalabra.length; i++) {
        if (!esMayuscula(inputPalabra.charAt(i))) {
            alert('Debe ingresar una palabra de 5 letras mayúsculas.');
            return;
        }
    }
    
    palabraSecreta = inputPalabra;
}

// Función para validar la letra
function validar(letra) {
    let letrasEncontradas = 0;
    let letraEncontrada = false;

    if (typeof palabraSecreta === 'undefined') {
        console.error('La variable palabraSecreta no está definida.');
        return;
    }

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
            letraEncontrada = true;
            coincidencias++;
        }
    }

    if (!letraEncontrada) {
        alert('LA LETRA NO ES PARTE DE LA PALABRA');
        errores++;
        mostrarAhorcado();
    }

    console.log('Letras encontradas:', letrasEncontradas);
}

// Función para ingresar la letra
function ingresarLetra() {
    let letra = recuperarTexto('txtLetra');

    if (esMayuscula(letra)) {
        intentos++;
        validar(letra);

        if (coincidencias === 5) {
            mostrarImagen('ahorcadoImagen', 'ganador.gif');
        } else if (intentos === 10) {
            mostrarImagen('ahorcadoImagen', 'gameOver.gif');
        }
    } else {
        alert('SOLO SE ACEPTAN MAYÚSCULAS');
    }
}

// Función para mostrar la imagen del ahorcado
// Función para mostrar la imagen del ahorcado
function mostrarAhorcado() {
    let imagenAhorcado = '';

    if (errores === 1) {
        imagenAhorcado = 'Ahorcado_01.png';
    } else if (errores === 2) {
        imagenAhorcado = 'Ahorcado_02.png';
    } else if (errores === 3) {
        imagenAhorcado = 'Ahorcado_03.png';
    } else if (errores === 4) {
        imagenAhorcado = 'Ahorcado_04.png';
    } else if (errores === 5) {
        imagenAhorcado = 'Ahorcado_05.png';
    } else if (errores === 6) {
        imagenAhorcado = 'Ahorcado_06.png';
    } else if (errores === 7) {
        imagenAhorcado = 'Ahorcado_07.png';
    } else if (errores === 8) {
        imagenAhorcado = 'Ahorcado_08.png';
    } else if (errores === 9) {
        imagenAhorcado = 'Ahorcado_09.png';
    } else if (errores === 10) {
        imagenAhorcado = 'gameOver.gif';
    } else {
        imagenAhorcado = ''; 
    }

    mostrarImagen('ahorcadoImagen', imagenAhorcado);
}


function recuperarTexto(idComponente) {
    let componente = document.getElementById(idComponente);
    return componente.value;
}

function esMayuscula(caracter) {
    const ascii = caracter.charCodeAt(0);
    return ascii >= 65 && ascii <= 90;
}

function mostrarTexto(idComponente, mensaje) {
    let componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

function mostrarImagen(idComponente, rutaImagen) {
    let componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
