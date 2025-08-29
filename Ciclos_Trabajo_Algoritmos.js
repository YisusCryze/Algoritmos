
// Ejemplos de ciclos en JavaScript
//let idx = 0; 
  //while (idx <= 10) {
    //console.log(idx); 
    //idx++;
  //}

//1. Algoritmo para imprimir números del 1 al 10 con metodo while
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

console.log("----------------------------------------");

//2. Algoritmo para sumar los primeros 10 números con metodo while  


    let suma = 0;  
    let j = 0; 
    while (j <= 10) {
    console.log(j); 
    j++;
    for (let k = 1; k <= 10; k++) {
        suma += k; 
        
    }
    console.log("la suma de los primeros 10 numeros es: " + suma);
    console.log("----------------------------------------");
    
    }
    //3. Algoritmo para generar la tabla de un numero dado por argumento en una función con metodo while
    
function tablaMultiplicar(numero) {
    let i = 1;
    while (i <= 10) {
        console.log(numero + " x " + i + " = " + (numero * i));
        i++; 
    }
}


tablaMultiplicar(9);
console.log("----------------------------------------");

//4. Algoritmo para contar ocurrencias de 'a' en un texto con metodo while

function contarA(texto) {
    let contador = 0;
    let i = 0;

    while (i < texto.length) {
        if (texto[i] === 'a' || texto[i] === 'A') {
            contador++;
        }
        i++;
    }

    console.log("Cantidad de 'a' encontradas: " + contador);
}

contarA("Aprendamos a generar algoritmos con ciclos y algoritmos en JavaScript");

//5. Algoritmo para calcular el factorial de un número con metodo while

function factorial(numero) {
    let resultado = 1;
    let i = 1;

    while (i <= numero) {
        resultado = resultado * i;
        i++;
    }

    console.log("El factorial de " + numero + " es: " + resultado);
}

factorial(6);
console.log("----------------------------------------");

//6. Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares con metodo while.

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
function filtrarPares(numeros) {
    let pares = [];
    let i = 0;

    while (i < numeros.length) {
        if (numeros[i] % 2 === 0) { // condición de número par
            pares.push(numeros[i]);
        }
        i++;
    }

    return pares;
}

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarPares(lista)); 
console.log("----------------------------------------");

//8. Escribe una función que calcule la potencia de un número (base^exponente) utilizando un ciclo for, sin usar el operador de potencia ** con metodo while.
function potencia(base, exponente) {
    let resultado = 1;
    let i = 0;

    while (i < exponente) {
        resultado = resultado * base;
        i++;
    }

    return resultado;
}

console.log("La potencia es: " +potencia(2, 5)); 
console.log("La potencia es: " +potencia(3, 4)); 
console.log("----------------------------------------");

//9. Desarrolla una función que genere y devuelva los primeros N términos de la serie de Fibonacci con metodo while.

function fibonacci(N) {
    let serie = [];
    
    if (N <= 0) return serie;
    if (N >= 1) serie.push(0);
    if (N >= 2) serie.push(1);

    let i = 2;
    while (i < N) {
        let siguiente = serie[i - 1] + serie[i - 2];
        serie.push(siguiente);
        i++;
    }

    return serie;
}

console.log(fibonacci(10));
console.log("----------------------------------------");
    

//10. Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero con metodo while.

function generarTablas(numero) {
    let i = 1;

    while (i <= numero) {
        console.log("Tabla del " + i + ":");

        let j = 1;
        while (j <= 10) {
            console.log(i + " x " + j + " = " + (i * j));
            j++;
        }

        console.log("-------------------");
        i++;
    }
}

generarTablas(9);
console.log("----------------------------------------");