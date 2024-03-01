// Estructuras de Control
const puntaje = 1000;

if (puntaje === 100) {
  // Esto es un condicional, en javascript los tres iguales es una comparación muy estricta
  console.log("El puntaje es 1000");
} else {
  console.log("No es igual");
}

// Ejemplos
const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
  console.log("Si se tiene suficiente dinero");
} else {
  console.log("No tiene suficiente dinero");
}

console.log(`El vuelto es de: ${efectivo}`);

const userRol = "user";

if (userRol === "Administrador") {
  console.log("El usuario tiene acceso valido");
} else if (userRol === "Editor") {
  console.log("Eres editor puedes visualizar pero no editar");
} else {
  console.log("El usuario no tiene los permisos nesesarios");
}
