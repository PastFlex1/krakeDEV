mostrarNumeros = function(){
    console.log("antes del for");
    for(let i=0;i<4;i++){
        console.log(i);
    }
    console.log("despues del for");
}

mostrarNumeros2 = function(){
    console.log("antes del for");
    for(let indice = 0; indice <= 5; indice++){
        console.log(indice);
    }
    console.log("despues del for");
}

mostrarPares = function(){
    console.log("antes del for");
    for(let x = 2; x <= 10; x += 2){
        console.log(x);
    }

    console.log("despues del for");
}

mostrarInverso = function(){
    console.log("antes del for");
    for(let inverso = 10; inverso > 0;inverso--){
        console.log(inverso);
    }
    console.log("despues del for");
}

hackearNasaPelis = function(){
    console.log("antes del for");
    for(let porcentaje = 0; porcentaje <= 100; porcentaje += 10){
        console.log("Hackeando nasa: " + porcentaje + "%");
    }
    console.log("La nasa ah sido hackeada");
}

mostrarImpares = function(){
    console.log("antes del for");
    for(let impares = 1; impares <= 21; impares += 2){
        console.log(impares);
    }
    console.log("despues del for");
}