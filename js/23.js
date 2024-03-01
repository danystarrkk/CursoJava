// Estructuras de Control Switch

const metodoPago = "cheque";

switch (metodoPago) {
  case "Targeta":
    console.log("Pagaste con targeta");
    break;

  case "Efectivo":
    console.log("Pagaste con Efectivo");
    break;

  default:
    console.log("Metodo de pago no existente");
    break;
}
