//Objetos

const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponibilidad: true
}

// Forma Antigua
const precioProducto = producto.precio;
const nombreProducto1 = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);


// Destructuring

// const { precio } = producto;
// const { nombreProducto } = producto;

const { precio, nombreProducto } = producto; // forma resumida de hacerlo

console.log(precio);
console.log(nombreProducto);



