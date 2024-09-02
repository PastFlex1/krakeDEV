let esNuevo = false;
let roles = [];


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
    document.getElementById('btnRol').disabled = false;
    mostrarEmpleados(); 
};


deshabilitarCampos = function() {
    document.getElementById('txtCedula').disabled = true;
    document.getElementById('txtNombre').disabled = true;
    document.getElementById('txtApellido').disabled = true;
    document.getElementById('txtSueldo').disabled = true;
    document.getElementById('btnGuardar').disabled = true;
    document.getElementById('btnRol').disabled = true;
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

    
    document.getElementById('btnRol').disabled = false;
};

buscarRol = function(nombreRol) {
    let elementosRol;
    let rolEncontrado = null;
    for (let i = 0; i < roles.length; i++) {
        elementosRol = roles[i];
        if (elementosRol.nombre == nombreRol) {
            rolEncontrado = elementosRol;
            break;
        }
    }
    return rolEncontrado;
}

agregarRol = function(rol) {
    let resultado = buscarRol(rol.nombre);
    if (resultado == null) {
        roles.push(rol);
        alert("Rol agregado al sistema");
    } else {
        alert("Ya existe un rol con el nombre: " + rol.nombre);
    }
}

calcularAporteEmpleador = function(sueldo) {
    return sueldo * 0.1115;
}

guardarRol = function() {

    let nombre = recuperarTextoDiv("infoNombre");
    let cedula = recuperarTextoDiv("infoCedula");
    let sueldo = recuperarFloatDiv("infoSueldo");
    let valorAPagar = recuperarFloatDiv("infoPago");
    let aporteIESS = recuperarFloatDiv("infoIESS");

    let aporteEmpleador = calcularAporteEmpleador(sueldo);

    let rol = {};


    rol.nombre = nombre;
    rol.cedula = cedula;
    rol.sueldo = sueldo;
    rol.valorAPagar = valorAPagar;
    rol.aporteIESS = aporteIESS;
    rol.aporteEmpleador = aporteEmpleador

    agregarRol(rol);
    mostrarOpcionRol(rol);
    mostrarRoles();
    mostrarTotales();


    document.getElementById("btnRol").disabled = true;

};


mostrarRoles = function() {
    let contenidoTabla = "<table><tr><th>Cedula</th><th>Nombre</th><th>Valor a pagar</th><th>Aporte empleador</th></tr>";
    let cmpTabla = document.getElementById("tablaResumen");

    for (let i = 0; i < roles.length; i++) {
        let rol = roles[i];
        contenidoTabla += "<tr><td>" + rol.cedula + "</td><td>";
        contenidoTabla += rol.nombre + "</td><td>";
        contenidoTabla += rol.valorAPagar.toFixed(2) + "</td><td>";
        contenidoTabla += (rol.aporteEmpleador || 0).toFixed(2) + "</td></tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

mostrarTotales = function() {
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;

    for (let i = 0; i < roles.length; i++) {
        let rol = roles[i];
        totalEmpleado += rol.aporteEmpleado || 0;
        totalEmpleador += rol.aporteEmpleador || 0;
        totalAPagar += rol.valorAPagar || 0;
    }

    mostrarTexto("infoAporteEmpleado", totalEmpleado.toFixed(2));
    mostrarTexto("infoAporteEmpresa", totalEmpleador.toFixed(2));
    mostrarTexto("infoTotalPago", totalAPagar.toFixed(2));

    let totalNomina = totalEmpleado + totalEmpleador + totalAPagar;
    mostrarTexto("totalNomina", totalNomina.toFixed(2));
};

mostrarOpcionRol = function() {
    let contenidoTabla = "<table><tr><th>ROL</th><th>DESCRIPCIÓN</th></tr>";
    let cmpTabla = document.getElementById("tablaResumen");

    for (let i = 0; i < roles.length; i++) {
        let miRol = roles[i];
        contenidoTabla += "<tr><td>" + miRol.nombre + "</td><td>";
        contenidoTabla += (miRol.descripcion || 'N/A') + "</td></tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
};


