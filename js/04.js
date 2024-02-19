// Cadenas de texto

const producto = "Monitor de 20 pulgadas";
const producto2 = String("Monitor de 50 pulgadas"); // se especifica el tipo de archivo
const producto3 = new String("Monitor de 90 pulgadas"); // Esto nos crea un objeto de tipo string

console.log(producto.length); // Nos envia el numero de caracteres que tenemos
console.log(producto.indexOf("Monitor")); // Nos permite buscar elementos en un string nos devuelve un posicion (>0 si existe, -1 si no existe)
console.log(producto.includes("Monitor")); //Nos permite buscar un elemento en el string y devueve ( true o false)

