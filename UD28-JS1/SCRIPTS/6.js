var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = prompt("Introduce los 7 numeros del DNI (solo numeros)");
var letra = prompt("Introduce la letra del DNI en mayúsculas");
letra = letra.toUpperCase();

if(numero < 0 || numero > 99999999) {
  alert("El número proporcionado no es válido");
}else {
  var calcular = letras[numero % 23];
  if(calcular != letra) {
    alert("El numero o la letra no son correctos");
  }else {
    alert(" Correcto!");
  }
}