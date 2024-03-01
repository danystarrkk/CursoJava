// Arrow function
const sumar2 = (n1, n2) => {
  console.log(n1 + n2);
};

// sumar2(5, 10);

// Otra forma de definir
const aprediendo = (tec) => console.log(`Aprendiendo ${tec}`);

aprediendo("JavaScript");

// Array Metods

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo"); // definiendo un arreglo unidimencional

// forEach
meses.forEach((mes) => {
  if (mes == "Marzo") {
    // console.log("Marzo si Existe");
  }
});

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

// Arrow Function Ejemplos
//some
resutado = carrito.some((producto) => producto.nombre == "Celular");
//reduce
resutado = carrito.reduce((total, producto) => total + producto.precio, 0); // inicializamos la variable en este caso en 0
//filter
resutado = carrito.filter((producto) => producto.nombre !== "Celular");

console.log(resutado);
