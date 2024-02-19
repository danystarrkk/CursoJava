// Objetos

const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponibilidad: true
}

// Forma usual de acceder a las propiedades del Objeto

// console.log(producto.precio); // atraves del punto accedemos a las diferents propiedades
// console.log(producto.nombreProducto)
// console.log(producto.disponibilidad)


// Forma poco usada de acceder a las propiedades de los Objetos

// console.log(producto["nombreProducto"]);
// console.log(producto["precio"]);
// console.log(producto["disponibilidad"]);

// Agregando propiedades a nuestro Objetos

producto.imagen = "imagen.jpg";

console.log(producto);

//Eliminar propiedades a nuestro Objetos

delete producto.disponibilidad;

console.log(producto);
