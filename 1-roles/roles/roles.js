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



