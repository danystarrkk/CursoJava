// This

const reservacion = {
  nombre: "Daniel",
  apellido: "Estrella",
  total: 5000,
  pagado: false,

  informacion: function () {
    console.log(
      `El cliente ${this.nombre} reservo y la cantidad a pagar es de ${this.total}` // haciendo uso de this para referir a los parametros del objeto dentro del cual se encuentra
    );
  },
};

reservacion.informacion();
