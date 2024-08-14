calcularPromedionotas = function(){
    let nota1 = recuperarFloat("txtNota1");
    let nota2 = recuperarFloat("txtNota2");
    let nota3 = recuperarFloat("txtNota3");


    let promedio =  calcularPromedio(nota1,nota2,nota3);
    mostrarTexto("lblPromedio",promedio);
    let promedioConDecimales = promedio.toFixed(2);
    if(promedio < 5 && promedio > 0){
        mostrarImagen("Imagenfeliz","gif/reprobado.gif");
        mostrarTexto("lblR","REPROBADO!!")
    }else if(promedio >= 5 && promedio <= 8){
        mostrarImagen("Imagenfeliz","gif/buentrabajo.gif");
        mostrarTexto("lblR","BUEN TRABAJO!!")
    }else if(promedio > 8 && promedio >= 10){
        mostrarImagen("Imagenfeliz","gif/excelente.gif");
        mostrarTexto("lblR","EXCELENTE!!")
    }else{
        mostrarImagen("Imagenfeliz","gif/error.gif");
        mostrarTexto("lblR","ERROR!!")
    }
    return console.log(promedioConDecimales);


}