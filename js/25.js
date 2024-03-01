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

// ForEach este solo se puede ejecutar en arreglos y esto se ejecutan solo una ves por elemento del arreglo

carrito.forEach(function (producto) {
  // generando el forEach y accediendo atraves de producto
  console.log(producto.nombre);
});

// implementando arrow funcción
carrito.forEach((producto) => console.log(producto.precio));

// Map Realiza los mismo que el ForEach, la unica diferencia es que el map se usa para crear nuevo arreglos

// implementando arrow funcción
const newArreglo = carrito.map((producto) => producto.precio);
// Otro ejemplo
const newArreglo2 = carrito.map(
  (producto) => `${producto.nombre} - ${producto.precio}`
);

console.log(newArreglo2);
