function sumar(n1, n2) {
  return n1 + n2; // Como vemos usamos la palabra reservada return para retornar algo de nuestra función
}

const resultado = sumar(2, 3); // La gran mayoria de Ocaciónes almacenaremos el resultado de nuestras funciones en un variable

console.log(resultado);

let total = 0;

// Ejemplo Practico
function agregarCarrito(precio) {
  return (total += precio);
}

function calcularIva(total) {
  return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

const totalIva = calcularIva(total);

console.log(`El total a pagar sin Iva es de: ${total}`);
console.log(`El total a pagar con Iva es de: ${totalIva}`);
