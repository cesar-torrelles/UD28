var valores = [true,5,false,"hola","adios",2];


var hola = valores[3].length;
var adios = valores[4].length;

if (hola>adios)   
    alert('hola es mayor que adios ?: '+ valores[0]);

else 
    alert('hola es mayor que adios ?: ' + valores[2]);

alert("suma 5+2: "+(valores[1]+valores[5]));
alert("resta 5-2: "+(valores[1]-valores[5]));
alert("resta 2-5: "+(valores[5]-valores[1]));
alert("multiplicacion: "+valores[1]*valores[5]);
alert(" division 5/2: "+valores[1]/valores[5]);
alert("division 2/5: "+valores[5]/valores[1]);
