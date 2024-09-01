let frutas = ["pera","manzana","banana"];

probarBusqueda = function(){
    let frutaRecuperada = recuperarTexto("lblFrutas");
    let resultado = buscar(frutaRecuperada);
    if(resultado == null){
        alert("No existe la fruta");
    }else{
        alert("Existe la fruta " + frutaRecuperada + "esta en la cesta!");
    }
}

buscar = function(fruta){
    let elemento;
    let frutaEncontrada = null;
    for(let i = 0;i < frutas.length; i++){
        elemento = frutas[i];
        if(fruta == elemento){
            frutaEncontrada = elemento;
            break;
        }
    }

    return frutaEncontrada;
}