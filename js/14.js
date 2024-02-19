// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50]; // definiendo un arreglo de numeros

console.log(numeros) // vista normal
console.table(numeros) // vista en tabla

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo"); // definiendo un arreglo mediante el constructor

const deTodo = ["hola", 2, 3, 3, 4, [1, 2, 3, 4], { nombre: "Daniel", edad: 20 }, "Adios"];

console.log(deTodo);

// Acceder a los valores de un arreglo

console.log(numeros[2]);

// Conocer el numero de elementos de un arreglo

console.log(meses.length);

//recorrer Arreglos

numeros.forEach(function(numero) {
  console.log(numero);
})


