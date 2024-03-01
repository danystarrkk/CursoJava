// Al definir un Promice, se pasan dos valores automaticamente que son: resolve y reject
const usuarioAutenticado = new Promise((resolve, reject) => {
  const auth = true;

  if (auth) {
    resolve(`El usuario esta registrado`); // Si el primice se cumple
  } else {
    reject(`El usuario no esta registrado`); // si no se cumple
  }
});

usuarioAutenticado
  // Impriendo resolve
  .then(function (resultado) {
    console.log(resultado);
  })
  /* como arrow function seria 

  .then(resultado => console.log(resultado))

*/

  // Imprimiendo reject
  .catch(function (error) {
    console.log(error);
  });
/* como arrow function seria 

  .catch(error => console.log(error));

*/

/* Los promices tiene trees valores posibles:
  - Pending : No se a cumplido, pero tampoco se a rechazado
  - Fulfilled : Ya se cumplio el promise
  - Reject : Se rechazo o no se cumple
*/
