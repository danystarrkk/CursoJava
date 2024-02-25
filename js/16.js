// Declaración de una función

function sumar() {
  console.log(10 + 10);
}
// llamando a la función

sumar();

//################################################//

// Expreción de la función
const sumar2 = function () {
  console.log(3 + 3);
};
// Llamando ala expreción de la función
sumar2();

//#################################################//

//IIFE, son funciones que se invocan por si mismas, por lo que no es nesesario llamarlas.
// Nos ayuda a prevenir la lectura de variables en otros archivos

(function () {
  console.log("Esto es una función");
})();
