// Array Metods

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo"); // definiendo un arreglo unidimencional

// forEach
meses.forEach(function (mes) {
  if (mes == "Marzo") {
    // console.log("Marzo si Existe");
  }
});

// Includes: Esto nos sirve con arreglos planos como el del ejemplo
let resutado = meses.includes("Marzo");
// console.log(resutado);

//---------------------------------------//

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

// Some: Es usado para arreglo de objetos

resutado = carrito.some(function (producto) {
  return producto.nombre == "Celular";
});

// .Reduce: Nos permite sacar la suma total de un producto por ejemplo

resutado = carrito.reduce(function (total, producto) {
  // se nesecita dos paramentros, en este caso total y producto
  return total + producto.precio; // total es una  variable en la cual se alamcenara la suma
}, 0); // inicializamos la variable en este caso en 0

// Filter: tal y como se ve nos permite filtrar de diferentes formas

resutado = carrito.filter(function (producto) {
  //   return producto.precio > 400;
  //   return producto.precio < 400;
  //   return producto.nombre == "Celular";
  return producto.nombre !== "Celular";
});

console.log(resutado);
