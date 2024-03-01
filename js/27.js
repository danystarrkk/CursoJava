// POO

/* Object Literal */
const producto = {
  nombre: "Telefono",
  precio: 400,
};

/* Object Constructor */

// Definiendo una clase
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}
/* Prototype */ // Nos permite crear funciones que solo se usen en un objetido especifico
Producto.prototype.formatearProducto = function () {
  return `${this.nombre} tiene un precio de ${this.precio}`;
};

const producto2 = new Producto("Monitor curvo de 20 pulgadas", 400); // Creando una instancia
const producto3 = new Producto("Laptop", 1200);

console.log(producto2.formatearProducto()); // llamando a la funcion asociada al objeto
console.log(producto3.formatearProducto()); // llamando la funcion asociada al objeto
