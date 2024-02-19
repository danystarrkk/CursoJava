"use strict";
//Objetos

const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponibilidad: true
}

Object.seal(producto);

// producto.imagen = "Imagen.jpg";


console.log(Object.isFrozen(producto));
