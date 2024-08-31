let notas = [];

function agregarElementos() {
    notas.push(5);
    notas.push(10);

    console.log(notas.length);
}

function recorrerArreglo() {
    let notaR;
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR);
    }
}

function probarAgregar() {
    let notaRecuperada;
    notaRecuperada = recuperarTexto("txtNotas");
    agregarNota(notaRecuperada);
}

function agregarNota(nota) {
    let valorNota = parseFloat(nota);
    if (!isNaN(valorNota)) {
        notas.push(valorNota);
        console.log(notas);
    } else {
        console.error('El valor ingresado no es un número válido.');
    }
}

function calcularPromedio() {
    let sumaNotas = 0;

    if (notas.length === 0) {
        console.error('El arreglo de notas está vacío.');
        return;
    }

    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
    }

    let promedio = sumaNotas / notas.length;
    let fixpromedio = promedio.toFixed(2);

    mostrarTexto("lblpromedio", `Promedio: ` + fixpromedio);
    return fixpromedio;
}

// Función para ejecutar el cálculo del promedio
function ejecutarPromedio() {
    calcularPromedio();
}

// Función para recuperar el texto de un input
function recuperarTexto(idComponente) {
    let componente = document.getElementById(idComponente);
    return componente.value;
}

// Función para mostrar texto en un elemento HTML
function mostrarTexto(idComponente, mensaje) {
    let componente = document.getElementById(idComponente);
    if (componente) {
        componente.innerText = mensaje;
    } else {
        console.error(`Elemento con ID ${idComponente} no encontrado.`);
    }
}
