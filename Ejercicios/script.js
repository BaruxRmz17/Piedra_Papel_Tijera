// Esto es un comentario

/*
Conociminetos basicos de Js
-> Variables
-> Tipos de datos
-> Condicionales
-> Ciclos
-> Funciones
-> Condicionlaes
-> Operaciones Matematicas
-> Inputs
-> Outputs
*/


/*
En JavaScrit existen difernetes tipos de datos los 4 mas comunes son los siguintes:
-> Int = Unicamnete acepta numeros enteros
-> Float = Acepta solo numeros decimales (2.5)
-> String = Acepta unicamente caracteres de tipo texto y siempre tiene que ir entre comillas  ("baruc" , "juan")
-> Boolean = Acepta unicamente true o false
*/ 

/**
 // Diferencia entre variables y constantes:
-> Variable = Se puede relacdionar como una "Caja" donde podemos guardar datos para usar en el codigo (x = 9;)
-> Constante = Es un valor que ya no se pude modificar (pi = 3.14)
 */


/*
¿Que es un Dom (Document Object Model)?

Le llamamos dom en javascript es todo lo que se encuentra en el html.
Es lo que hace que funcione la pagina web. Es un obejto sobre el cual vamos a interctuar
sobre el cual vamos a usar el javascript e interactuar. y que todo lo que mandamos el dom 
lo interprete y lo muestre en la pagina web.
*/


/*
Como Declaramos una variable 
let:
Limita el alcance de las variables al bloque, declaración o expresión donde se está usando.
var:
Define una variable global o local en una función sin importar el ámbito del bloque. 

var nombreVariable = valor;
let nombreVariable = valor;
*/ 


// Variables y tipos de datos
var string = "Baruc";
let int = 20;
let float = 2.5;
var boolF = false;
var boolT = true;

// Console.log
// Este nos ayuda a imprimir en la consola
console.log("Hola desde la consola");

//document.write
// Este se impirme directamente en el html
document.write("Hola mundo desde la pagina web")
document.write("</br>")


// Condicional If / else if / else

/* 
if (condition){codigo}
else if (condition){codigo}
else {codigo}
*/
document.write("</br>")
document.write("CONDICION IF / ELSE IF / ELSE")
b = 10;
a = 20;

if (a > b){
    document.write("<br>" +  "A es mayor que b" + "</br>")

}
else if(a < b){
    document.write("<br>" + "A es menor que b" + "</br>")

}
else{
    document.write("<br>" + "A es igual que B" + "</br>")

}
document.write("</br>")


/*
¿Cual es la diferencia entre un ciclo while y un  ciclo for?

- El ciclo while se repite mientras una condición sea verdadera
- El ciclo for se repite un número determinado de veces
*/


//  Ciclo For
// Se utiliza cuando deseas ejecutar el mismo  bloque de código varias veces añadiendo valores diferentes cada ves. 
/* for(statement1; condition; increment/decrement) {
código a ejecutar } */
document.write("</br>")

document.write("CICLO FOR <br>")
for (i = 1; i <= 5;  i++) {
    document.write(i + "<br/>")
}

// Bucle While
// Este bucle se ejecuta siempre y cuando la condicion sea verdadera. Nunca se ejecuta cuando la condicion sea falsa
/* while(condition) { código a ejecutar } */
document.write("</br>")

document.write("CICLO WHILE<br>")
var j = 0;
while (j <= 100){
    document.write(j + "</br>");
    j++;
}



document.write("</br>")
document.write("CICLO DO WHILE<br>")
// Bucle Do while
/* Siempre se ejecuta 1 ves antes de comprobar la condición. Este se ejecuta 1 ves aunque la condicion no sea
verdadera. 
*/

/*
var nombreVariable =  valorInicial;
 do { código a ejecutar } while (condition); */

var k = 1;
do{
    document.write( k + " <br/>");
    k++;
}while(k <= 250);

document.write("</br>")
document.write("CICLO FOR 2<br>")
// Ciclo For
for(i = 1; i <= 500; i++){
    document.write(i + "<br/>");
    i += 5;
}




