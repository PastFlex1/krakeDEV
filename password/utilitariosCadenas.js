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
            (codigo >= 33 && codigo <= 47) ||  
            (codigo >= 58 && codigo <= 64) ||  
            (codigo >= 91 && codigo <= 96) ||  
            (codigo >= 123 && codigo <= 126)   
        ) {
            return false; 
        }
    }
    return true; 
}
