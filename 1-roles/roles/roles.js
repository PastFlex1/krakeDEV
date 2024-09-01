let esNuevo = false;

let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula: "1203456789", nombre: "Carlos", apellido: "Perez", sueldo: 700.0} 
]

mostrarEmpleados = function() {
    let contenidoTabla = "<table><tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";
    let cmpTabla = document.getElementById("tablaEmpleados");
    let empleado;

    for(let i = 0; i < empleados.length; i++){
        empleado = empleados[i];
        contenidoTabla += "<tr><td>" + empleado.cedula + "</td>";
        contenidoTabla += "<td>" + empleado.nombre + "</td>";
        contenidoTabla += "<td>" + empleado.apellido + "</td>";
        contenidoTabla += "<td>" + empleado.sueldo.toFixed(2) + "</td></tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}


window.onload = function() {
    mostrarOpcionEmpleado();
    deshabilitarCampos();
};

deshabilitarCampos = function() {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
};


ejecutarNuevo = function() {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
};


guardar = function() {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");

    // Validaciones
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


    let empleado = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        sueldo: sueldo
    };

    empleados.push(empleado);

    alert("Empleado guardado exitosamente");
    limpiarCampos();
    mostrarEmpleados();
}

limpiarCampos = function() {
    document.getElementById("txtCedula").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtSueldo").value = "";
    mostrarTexto("lblErrorCedula", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");
}

buscarEmpleado = function(cedula) {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula === cedula) {
            return empleados[i];
        }
    }
    return null;
};

agregarEmpleado = function(empleado) {
    if (buscarEmpleado(empleado.cedula) === null) {
        empleados.push(empleado);
        return true;
    }
    return false;
};
