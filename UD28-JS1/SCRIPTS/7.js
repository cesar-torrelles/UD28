var numero = prompt("Introduce un número:");
var resultado = 1;

for(var i=1; i<=numero; i++) {
  resultado *= i;
}
alert('el factorial de ' +numero +' es ' +resultado);