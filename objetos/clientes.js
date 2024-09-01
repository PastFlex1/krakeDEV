let clientes = [
    {nombre: "Alex", cedula: "1708131133", edad: 14},
    {nombre: "Alexis", cedula: "17022331133", edad: 19},
    {nombre: "Alexander", cedula: "17042321133", edad: 15}
]

mostrarClientes = function(){
    let cmprecuperarTabla =document.getElementById("tablaClientes");
    let mostrarTabla = "<Table><tr>" + "<th>Cliente</th>" +
    "<th>Cedula</th>" +
    "<th>Edad</th>" +
     "</tr>";
    let elementosClientes;
    for(let i = 0; i < clientes.length; i++){
        elementosClientes = clientes[i];
        mostrarTabla += "<tr><td>" + elementosClientes.nombre + "</td>" +
        "<td>" + elementosClientes.cedula + "</td>" +
        "<td>" + elementosClientes.edad + "</td>" +
        "</tr>"
    }
    mostrarTabla += "</Table>"
    cmprecuperarTabla.innerHTML = mostrarTabla;
}

crearCliente = function(){
    let valorNombre = recuperarTexto("txtNombre");
    let valorCedula = recuperarTexto("txtCedula");
    let valorEdad = recuperarInt("txtEdad");

    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;

    agregarClientes(nuevoCliente);
}

agregarClientes = function(cliente){
    let resultado = buscarCliente(cliente.cedula);
    if(resultado == null){
        clientes.push(cliente);
        alert("Cliente agregado al sistema");
    }else{
        alert("Ya existe el cliente con la cedula: " + cliente.cedula)
    }
}

buscarCliente = function(cedula){
    let elementosCliente;
    let clienteEncontrado;
    for(let i = 0;i <  clientes.length; i++){
        elementosCliente = clientes[i];
        if(elementosCliente.cedula == cedula){
            clienteEncontrado = elementosCliente;
            break;
        }
    }
    return clienteEncontrado;
}

EjecutarBusqueda = function(){
    let valorCedula = recuperarTexto("txtCedulaBusqueda")
    let cliente = buscarCliente(valorCedula);
    if(cliente == null){
        alert("Cliente no encontrado");
    }else{
        mostrarTextoEnCaja("txtCedula",cliente.cedula);
        mostrarTextoEnCaja("txtNombre",cliente.nombre);
        mostrarTextoEnCaja("txtEdad",cliente.edad);
    }
}

modificarCliente = function(cliente){
    let clienteEncontrado = buscarCliente(cliente.cedula);
    if(clienteEncontrado != null){
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;
    }
}

guardarCambios = function(){
    let valorNombre = recuperarTexto("txtNombre");
    let valorCedula = recuperarTexto("txtCedula");
    let valorEdad = recuperarInt("txtEdad");

    let datosCliente = {};
    datosCliente.cedula = valorCedula;
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;


    modificarCliente(datosCliente);

    mostrarClientes();
}