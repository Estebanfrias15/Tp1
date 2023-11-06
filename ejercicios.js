// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje” 
alert('un mensaje')

/* 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que 
diga «Hello World» (document.write).

document.write('Hello World') */

/* // 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
console.log('La suma de 3 + 5 es: ', 3 + 5 ) */

/* 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un 
texto que diga «Hola nombreUsuario» 

let nombre = prompt('Ingrese su nombre de usuario')
console.log('Hola', nombre) */

/* // 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

let number1 = parseInt(prompt('Ingrese el primer numero:'))
let number2 = parseInt(prompt('Ingrese el segundo numero:'))
console.log('El resultado es: ', number1 + number2) */

/* // 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let number1 = parseInt(prompt('Ingrese el primer numero:'))
let number2 = parseInt(prompt('Ingrese el segundo numero:'))
console.log('El numero mayor es: ',Math.max(number3,number4))
 */

/* // 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let number1 = prompt('Ingrese el primer numero')
let number2 = prompt('Ingrese el segundo numero')
let number3 = prompt('Ingrese el tercer numero')
console.log('El mayor de los tres numeros es:',Math.max(number1,number2,number3)) */

/* // 8.- Escribe un programa que pida un número y diga si es divisible por 2

let number = prompt('Ingrese el numero')

if (number % 2 == 0){
    console.log('El numero ' + number + ' es divisible por 2')
} else {
    console.log('El numero ' + number + ' no es divisible por 2')
}
 */

/* // 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = prompt('Ingrese una frase')
let vocales = ''

console.log(frase.length)
console.log(frase.charAt(10))

for (let i = 0; i < frase.length; i++) {
    if (
        frase.charAt(i).toLowerCase() == 'a' ||
        frase.charAt(i).toLowerCase() == 'e' ||
        frase.charAt(i).toLowerCase() == 'i' ||
        frase.charAt(i).toLowerCase() == 'o' ||
        frase.charAt(i).toLowerCase() == 'u' 
       ) {
        vocales += frase.charAt(i).toLowerCase() + ', ' 
       }
       i++
}
if (vocales.length > 0) {
    console.log('Las vocales son:',vocales)
    
} else {
    console.log(`Tu frase ${frase} no tiene vocales`)
}
 */

/* 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
(sólo hay que comprobar si lo es por uno de los cuatro) 

let number = parseInt(prompt('Ingrese un numero'))

if (number % 2 === 0) {
    console.log(`${number} es divisible por 2`)
} else if (number % 3 === 0) {
    console.log(`${number} es divisible por 3`)
} else if (number % 5 === 0) {
    console.log(`${number} es divisible por 5`)
} else if (number % 7 === 0) {
    console.log(`${number} es divisible por 7`)
} else {
    console.log(`${number} no es divisible por 2, 3, 5 y 7`)
} 
*/

/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible 
(hay que decir todos por los que es divisible)

let number = parseInt(prompt('Ingrese un número:'));

if (number % 2 === 0) {
    console.log(`${number} es divisible por 2`);
}
if (number % 3 === 0) {
    console.log(`${number} es divisible por 3`);
}
if (number % 5 === 0) {
    console.log(`${number} es divisible por 5`);
}
if (number % 7 === 0) {
    console.log(`${number} es divisible por 7`);
}
if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
    console.log(`${number} no es divisible por 2, 3, 5 y 7`);
}
*/
