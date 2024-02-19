//Objetos

const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponibilidad: true
}


const medidas = {
  peso: "1kilo",
  largo: "1metro"
}

// Uniendo dos propiedades
const nuevoProducto = { ...producto, ...medidas };

console.log(nuevoProducto);
