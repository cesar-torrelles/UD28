function palindromo(cadena) {

    var resultado = "La cadena \""+cadena+"\" ";
    var cadenaOriginal = cadena.toLowerCase();
    var letrasEspacios = cadenaOriginal.split("");
    var cadenaSinEspacios = "";

    for(i in letrasEspacios) {
        if(letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }

    var letras = cadenaSinEspacios.split("");
    var letrasReverse = cadenaSinEspacios.split("").reverse();

    var iguales = true;
    for(i in letras) {
        if(letras[i] != letrasReverse[i]) {
            iguales = false;
        }

    }

    if(iguales) {
        resultado += " es un palíndromo";
    }else {
        resultado += " no es un palíndromo";
    }

    return resultado;
}

alert(palindromo("La ruta nos aporto otro paso natural"));
alert(palindromo("comprobacion de que esto no es un palíndromo"));