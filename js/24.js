// // For loop

// for (let i = 0; i <= 10; i++) {
//   if (i === 0) {
//     console.log(`El 0 no es par ni impar`);
//   } else if (i % 2 === 0 && i !== 0) {
//     console.log(`El numero ${i} es par`);
//   } else {
//     console.log(`El numero ${i} es impar`);
//   }
// }
// // Ejemplos

// const carrito = [
//   { nombre: "Monitor de 20 pulgadas", precio: 200 },
//   { nombre: "Televicion 70 pulgadas", precio: 700 },
//   { nombre: "Table", precio: 300 },
//   { nombre: "Teclado", precio: 150 },
//   { nombre: "Audifonos", precio: 50 },
//   { nombre: "Celular", precio: 500 },
//   { nombre: "Laptop", precio: 1200 },
//   { nombre: "Bocinas", precio: 100 },
//   { nombre: "Play 5", precio: 800 },
//   { nombre: "Alexa", precio: 60 },
// ];

// for (let i = 0; i < carrito.length; i++) {
//   console.log(carrito[i].nombre);
// }

// // While loop

// let i = 0;

// while (i < 10) {
//   if (i === 0) {
//     console.log(`El ${i} no es par ni impar!`);
//   } else if (i % 2 === 0 && i !== 0) {
//     console.log(`El numero ${i} es par`);
//   } else {
//     console.log(`El numero ${i} es impar`);
//   }
//   i++;
// }

// while (i < carrito.length) {
//   console.log(carrito[i].nombre);
//   i++;
// }

// Do while loop

let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);

const carrito = [
  { nombre: "Monitor de 20 pulgadas", precio: 200 },
  { nombre: "Televicion 70 pulgadas", precio: 700 },
  { nombre: "Table", precio: 300 },
  { nombre: "Teclado", precio: 150 },
  { nombre: "Audifonos", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Bocinas", precio: 100 },
  { nombre: "Play 5", precio: 800 },
  { nombre: "Alexa", precio: 60 },
];

do {
  console.log(carrito[i].nombre);
  i++;
} while (i < carrito.length);
