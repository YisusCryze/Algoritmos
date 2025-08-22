//1. Algoritmo para imprimir números del 1 al 10 

  let imprimirNumeros = 0; 

  for (let i = 1; i <= 10; i++) {
       console.log(i);
      

}      
 console.log("----------------------------------------");

//2. Algoritmo para sumar los primeros 10 números

    let suma = 0;  
     
    for (let i = 1; i <= 10; i++) {
        suma += i; 
        
    }
    console.log("la suma de los primeros 10 numeros es: " + suma);
    console.log("----------------------------------------");
    

    //3. Algoritmo para generar la tabla de un numero dado por argumento en una función
function tablaMultiplicar(numero) {

    for (let i = 1; i <= 10; i++) {

        console.log(`${numero} x ${i} = ${numero * i}`);
        
    }
}
tablaMultiplicar(2); 
console.log("----------------------------------------");

//4. Algoritmo para contar ocurrencias de 'a' en un texto
let texto = "Las personas que aman la naturaleza son felices. La naturaleza es vida.";
let contador = 0;
for (texto of texto){
    if (texto.includes("a") || texto.includes('A')) {
        contador++;
    }
}
console.log("la letra 'a' aparece " + contador + " veces");
console.log("----------------------------------------");

//5. Algoritmo para calcular el factorial de un número

let numeroFactorial = 6; 
let factorial = 1;
for(let i = 1; i <= numeroFactorial; i++) {
    factorial *= i;
}
console.log("El factorial de "  + numeroFactorial + " es: " +factorial);
console.log("----------------------------------------");

//6. Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = [];

for (let i = 0; i < numeros.length; i++) {
    
    if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i]);
    }
}
console.log("Los números pares son: " + numerosPares);
console.log("----------------------------------------");

//7. Implementa una función que calcule la suma de los cuadrados de los primeros N números naturales.
let numerosNaturales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumaDeNumeros = [];

function sumaCuadrados(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i] * numeros[i];
    }
    return suma;
    
}
console.log("La suma de los cuadrados de los primeros 10 números naturales es: " + sumaCuadrados(numerosNaturales));
console.log("----------------------------------------");

//8. Escribe una función que calcule la potencia de un número (base^exponente) utilizando un ciclo for, sin usar el operador de potencia **.
function potencia(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}
console.log("La potencia de 2 elevado a 3 es: " + potencia(2, 3));
console.log("----------------------------------------");

//9. Desarrolla una función que genere y devuelva los primeros N términos de la serie de Fibonacci.

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}
console.log("Los primeros 10 términos de la serie de Fibonacci son: " + fibonacci(10));
console.log("----------------------------------------");    

//10. Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero.

function tablasMultiplicar(totalTablas) {
   for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
    console.log('-------------------');
    }
}
console.log("Tablas de multiplicar del 1 al 9:");
tablasMultiplicar(9);