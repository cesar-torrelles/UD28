function texto(cadena) {

    var resultado = "La cadena \""+cadena+"\" ";
  
    if(cadena == cadena.toUpperCase()) {
      resultado += " está formada sólo por mayúsculas";
    }else if(cadena == cadena.toLowerCase()) {
      resultado += " está formada sólo por minúsculas";
    }else {
      resultado += " está formada por mayúsculas y minúsculas";
    }
  
    return resultado;
  }
  
  alert(texto("PRUEBA 1"));
  alert(texto("prueba 2"));
  alert(texto("prueba NUMERO 3"));