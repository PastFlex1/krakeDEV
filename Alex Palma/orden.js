personas = [
    {nombre: "Marcos", edad: 18},
    {nombre: "Roberto", edad: 15},
    {nombre: "Kate", edad: 25},
    {nombre: "Diana", edad: 12},
    {nombre: "Benja", edad: 5}
];

agregarPersona = function() {
    let nombre = recuperarTexto('nombre');
    let edad = recuperarInt('edad');
    let validacionExitosa = true;

    // Validar nombre
    if (nombre.length < 3) {
        mostrarTexto('errorNombre', 'El nombre debe tener al menos 3 caracteres.');
        validacionExitosa = false;
    } else {
        mostrarTexto('errorNombre', '');
    }

    // Validar edad
    if (isNaN(edad) || edad < 0 || edad > 100) {
        mostrarTexto('errorEdad', 'La edad debe ser un número entero entre 0 y 100.');
        validacionExitosa = false;
    } else {
        mostrarTexto('errorEdad', '');
    }

    // Si las validaciones pasan
    if (validacionExitosa) {
        let nuevaPersona = {};
        nuevaPersona.nombre = nombre;
        nuevaPersona.edad = edad;
        personas.push(nuevaPersona);

        alert('Persona agregada exitosamente!');
        mostrarTextoEnCaja('nombre', nombre);
        mostrarTextoEnCaja('edad', edad);
        mostrarTablaPersonas();
    }
}

mostrarTablaPersonas = function() {
    let contenidoTabla = "<table class='estiloTabla'><tr><th>EDAD</th><th>NOMBRE</th></tr>";
    let cmpTabla = document.getElementById("tablaPersonas");

    for (let i = 0; i < personas.length; i++) {
        let persona = personas[i];
        contenidoTabla += "<tr><td>" + persona.edad + "</td><td>";
        contenidoTabla += persona.nombre + "</td></tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

encontrarMayor = function() {
    let personaMayor = personas[0]; 
    for (let i = 1; i < personas.length; i++) {
        let elementoPersona = personas[i];
        console.log("Persona: " + elementoPersona.nombre + "- Edad: " + elementoPersona.edad);
        
        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona;  
        }
    }

    return personaMayor;
};


encontrarMenor = function() {
    let personaMenor = personas[0];  

    for (let i = 1; i < personas.length; i++) {
        let elementoPersona = personas[i];
        console.log("Persona: " + elementoPersona.nombre + "- Edad: " + elementoPersona.edad);
        
        if (elementoPersona.edad < personaMenor.edad) {
            personaMenor = elementoPersona;  
        }
    }

    return personaMenor;
};


determinarMayor = function() {
    let mayor = encontrarMayor();
    mostrarTexto("resultadoMayor", "Persona Mayor: " + mayor.nombre + "- Edad: " + mayor.edad) ;
};

determinarMenor = function() {
    let menor = encontrarMenor();
    mostrarTexto("resultadoMenor", "Persona Menor: " + menor.nombre + "- Edad: " + menor.edad) ;
};
