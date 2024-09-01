
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