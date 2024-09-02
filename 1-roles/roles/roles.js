let esNuevo = false;

let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1203456789", nombre: "Carlos", apellido: "Perez", sueldo: 700.0 }
];


mostrarEmpleados = function() {
    let contenidoTabla = "<table><tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";
    let cmpTabla = document.getElementById("tablaEmpleados");

    for (let i = 0; i < empleados.length; i++) {
        let empleado = empleados[i];
        contenidoTabla += `<tr>
            <td>${empleado.cedula}</td>
            <td>${empleado.nombre}</td>
            <td>${empleado.apellido}</td>
            <td>${empleado.sueldo.toFixed(2)}</td>
        </tr>`;
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
};


window.onload = function() {
    deshabilitarCampos();
    document.getElementById('txtBusquedaCedula').disabled = false; 
    document.getElementById('btnBuscar').disabled = false;
    mostrarEmpleados(); 
};


deshabilitarCampos = function() {
    document.getElementById('txtCedula').disabled = true;
    document.getElementById('txtNombre').disabled = true;
    document.getElementById('txtApellido').disabled = true;
    document.getElementById('txtSueldo').disabled = true;
    document.getElementById('btnGuardar').disabled = true;
};


ejecutarNuevo = function() {
    document.getElementById('txtCedula').disabled = false;
    document.getElementById('txtNombre').disabled = false;
    document.getElementById('txtApellido').disabled = false;
    document.getElementById('txtSueldo').disabled = false;
    document.getElementById('btnGuardar').disabled = false;
    document.getElementById('txtBusquedaCedula').disabled = true; 
    esNuevo = true;
};


guardar = function() {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");

    if (cedula === "" || esDigito(cedula)) {
        mostrarTexto("lblErrorCedula", "Cédula inválida");
        return;
    } else {
        mostrarTexto("lblErrorCedula", "");
    }

    if (nombre === "" || esMayuscula(nombre)) {
        mostrarTexto("lblErrorNombre", "Nombre inválido");
        return;
    } else {
        mostrarTexto("lblErrorNombre", "");
    }

    if (apellido === "" || esMayuscula(apellido)) {
        mostrarTexto("lblErrorApellido", "Apellido inválido");
        return;
    } else {
        mostrarTexto("lblErrorApellido", "");
    }

    if (isNaN(sueldo) || sueldo <= 0) {
        mostrarTexto("lblErrorSueldo", "Sueldo inválido");
        return;
    } else {
        mostrarTexto("lblErrorSueldo", "");
    }

    if (esNuevo) {
        let nuevoEmpleado = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            sueldo: sueldo
        };
        empleados.push(nuevoEmpleado);
        alert('EMPLEADO GUARDADO EXITOSAMENTE');
        esNuevo = false;
    } else {
        modificarEmpleado(cedula, nombre, apellido, sueldo);
        alert('EMPLEADO MODIFICADO EXITOSAMENTE');
    }

    mostrarEmpleados();
    limpiarCampos();
};

modificarEmpleado = function(cedula, nombre, apellido, sueldo) {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula === cedula) {
            empleados[i].nombre = nombre;
            empleados[i].apellido = apellido;
            empleados[i].sueldo = sueldo;
            break;
        }
    }
};

limpiarCampos = function() {
    document.getElementById("txtCedula").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtSueldo").value = "";
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");

    deshabilitarCampos();
    document.getElementById('txtBusquedaCedula').disabled = false; 
};

buscarEmpleado = function(cedula) {
    let empleadoEncontrado = null;

    for (let i = 0; i < empleados.length; i++) {
        let empleado = empleados[i];
        if (cedula === empleado.cedula) {
            empleadoEncontrado = empleado;
            break;
        }
    }

    return empleadoEncontrado;
};

ejecutarBusqueda = function() {
    let cedulaRecuperada = recuperarTexto("txtBusquedaCedula");
    let empleadoEncontrado = buscarEmpleado(cedulaRecuperada);

    if (empleadoEncontrado === null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTextoEnCaja('txtCedula', empleadoEncontrado.cedula);
        mostrarTextoEnCaja('txtNombre', empleadoEncontrado.nombre);
        mostrarTextoEnCaja('txtApellido', empleadoEncontrado.apellido);
        mostrarTextoEnCaja('txtSueldo', empleadoEncontrado.sueldo);

        habilitarTexto('txtNombre');
        habilitarTexto('txtApellido');
        habilitarTexto('txtSueldo');
        deshabilitarTexto('txtCedula');
        document.getElementById('btnGuardar').disabled = false;
        esNuevo = false;
    }
};

buscarPorRol = function() {
    const idEmpleado = recuperarTexto("txtBusquedaCedulaRol");
    const empleado = buscarEmpleado(idEmpleado); 
    
    if (empleado) {
        mostrarTexto('infoCedula', empleado.cedula);
        mostrarTexto('infoNombre', empleado.nombre + " " + empleado.apellido);
        mostrarTexto('infoSueldo', empleado.sueldo.toFixed(2));
    } else {
        alert('EMPLEADO NO EXISTE');
    }
};

calcularAporteEmpleado = function(sueldo) {
    return sueldo * 0.0945;
};

calcularValorAPagar = function(sueldo, aporteIESS, descuento) {
    return sueldo - aporteIESS - descuento;
};

calcularRol = function() {
    const sueldo = recuperarFloatDiv('infoSueldo');
    let descuento = recuperarIntDiv('txtDescuentos');

    if (isNaN(sueldo) || isNaN(descuento)) {
        alert('Por favor ingresa valores numéricos válidos');
        return;
    }

    if (isNaN(descuento) || descuento < 0 || descuento > sueldo) {
        alert('El descuento no es válido');
        return;
    }

    const aporteEmpleado = calcularAporteEmpleado(sueldo);
    mostrarTexto('infoIESS', aporteEmpleado.toFixed(2)); // Muestra el aporte con dos decimales
    console.log(aporteEmpleado);

    const valorAPagar = calcularValorAPagar(sueldo, aporteEmpleado, descuento);
    mostrarTexto('infoPago', valorAPagar.toFixed(2)); // Muestra el valor a pagar con dos decimales
    console.log(valorAPagar);
};

