
probarAtributos = function(){
    let persona = {
        nombre: "Alex",
        apellido: "Palma",
        edad: 18,
        vivo: true
    }
    console.log(persona.nombre);
    console.log(persona.apellido);
    if(persona.vivo == false){
        console.log("esta muerto");
    }else{
        console.log("esta vivo")
    }
}

crearProducto = function(){
    let producto1 = {
        nombre: "Pan",
        precio: parseFloat(1.50), 
        stock: parseInt(7)
    }
    console.log(producto1.nombre);

    let producto2 = {
        nombre: "Queso",
        precio: parseFloat(2.50), 
        stock: parseInt(1)
    }
    console.log(producto1.precio);

    if(producto1.stock > producto2.stock){
        console.log("El producto 1 tiene mayor stock que el producto 2");
    }else if(producto1.stock < producto2.stock){
        console.log("El producto 2 tiene mayor stock que el producto 1");
    }else{
        console.log("Ambos tienen el mismo stock");
    }
}

modificarAtributos = function(){
    let cuenta = {
        numero: "54456745544",
        saldo: 0.0,
    }

    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

crearCliente = function(){
    let cliente = {
        cedula: "1708143977",
        nombre: "Alex"
    }
    //Crea un objeto a base del objeto anterior
    let cliente1 = {};
        cliente1.nombre = "Alexis";
        cliente1.cedula = "1726690744";
}

probarIncrementoSaldo = function(){
    let cta={cuenta: "123932", saldo: 40}
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}

probarDeterminarMayor = function(){
    let p1 = {nombre: "Alex", edad: 18}
    let p2 = {nombre: "Leonel", edad: 17}
    person = determinarMayoor(p1,p2);
    if(person != null){
        console.log("El mayor es: " + person.nombre);
    }
}

incrementarSaldo = function(cuenta,monto){
    cuenta.saldo += monto;
}

determinarMayoor = function(persona1,persona2){
    if(persona1.edad > persona2.edad){
        return persona1;
    }else if(persona1.edad < persona2.edad){
        return persona2;
    }else{
        return null;
    }
}