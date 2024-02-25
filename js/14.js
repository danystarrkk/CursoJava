// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50]; // definiendo un arreglo de numeros

// console.log(numeros); // vista normal
// console.table(numeros); // vista en tabla

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo"); // definiendo un arreglo mediante el constructor

console.table(meses);

// const deTodo = [
//   "hola",
//   2,
//   3,
//   3,
//   4,
//   [1, 2, 3, 4],
//   { nombre: "Daniel", edad: 20 },
//   "Adios",
// ];

// console.log(deTodo);

// Acceder a los valores de un arreglo

// console.log(numeros[2]);

// Conocer el numero de elementos de un arreglo

// console.log(meses.length);

// recorrer Arreglos

// numeros.forEach(function (numero) {
//   console.log(numero);
// });

// Metodos para los Arreglos

// Agredando elementos al final
numeros[5] = 60; // atraves de los indices
numeros.push(70); // agregand con un metodo
numeros.push(10, 50, 90); // Agregando multiples elementos

//Agregando elementos al inicio
numeros.unshift(-10, -20, -50); //Agregando elementos al inicio de un arreglo

// Eliminar elementos de un arreglo
numeros.pop(); //elimina el ultimo elemento de un arreglo
numeros.shift(); //elimina el primer elemento de un arreglo

// Eliminando elemento especifico

numeros.splice(5, 1); // Elimina el valor dependiendo de su indice y apartir de ahi se especifica cuantos elimina.

console.table(numeros); // vista en tabla

//Rest Operation o Spret Operator

const nuevosNumeros = [...numeros, 400]; // Agrega el valor al final

const nuevosNumeros2 = [500, ...numeros]; // Agrega elementos al comiezo del arreglo
console.table(nuevosNumeros);
