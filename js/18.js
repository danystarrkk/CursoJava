function sumar(numero1, numero2) {
  // numero1 y numero2 son dos parametros que estan dentro de la función
  console.log(numero1 + numero2);
}
sumar(10, 10); // Los 10 son valoes reales o Argumentos que se le pasa a la función.

// Recordemos que las funciónes son reutilizables por lo que podemos usar varias veses
sumar(1, 112);
sumar(5, 16);
sumar(145, 13);
sumar(2, 3);

const sumar2 = function (n1, n2) {
  console.log(n1 + n2);
};
sumar2(5, 10);
// Recordemos que las funciónes son reutilizables por lo que podemos usar varias veses
sumar2(1, 4);
sumar2(10, 5);

// Parametros por default, son parametros que toman un valor en el caso de que no se atribuya alguno al llamar la funcion
function sumar(numero1 = 1, numero2 = 1) {
  // numero1 y numero2 son dos parametros por default que tiene un valor en caso de no se enviado inguno al llamarse
  console.log(numero1 + numero2);
}
sumar(10); // Al solo enviar el primer valor el valor de numero 2 sera de 1 ya que no enviamos nada
