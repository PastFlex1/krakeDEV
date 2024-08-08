calcularPromedionotas = function(){
    let nota1 = recuperarFloat("txtNota1");
    let nota2 = recuperarFloat("txtNota2");
    let nota3 = recuperarFloat("txtNota3");

    let promedio =  calcularPromedio(nota1,nota2,nota3);
    mostrarTexto("lblPromedio",promedio);
    let promedioConDecimales = promedio.toFixed(2);
    if(promedioConDecimales > 7){
        mostrarImagen("Imagenfeliz","../Ejercicio Git/imagenes/Animated-GIF-Banana.gif");
    }else{
        mostrarImagen("Imagenfeliz","../Ejercicio Git/imagenes/sad.gif")
    }
    return console.log(promedioConDecimales);


}