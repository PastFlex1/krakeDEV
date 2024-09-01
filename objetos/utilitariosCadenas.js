esMayuscula = function(cadena) {
    for (let i = 0; i < cadena.length; i++) {
        let codigo = cadena.charCodeAt(i);
        if (codigo >= 65 && codigo <= 90) {
            return false; 
        }
    }
    return true;
}


esDigito = function(cadena) {
    for (let i = 0; i < cadena.length; i++) {
        let codigo = cadena.charCodeAt(i);
        if (codigo >= 48 && codigo <= 57) { 
            return false; 
        }
    }
    return true; 
}


esGuion = function(cadena) {
    for (let i = 0; i < cadena.length; i++) {
        let codigo = cadena.charCodeAt(i);
        if (
            (codigo == 42 && codigo == 45 && codigo == 95)   
        ) {
            return false; 
        }
    }
    return true; 
}
