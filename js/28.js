// Clases

// Definiendo la clase
class Producto {
  // Definiendo constructor para los parametros de la clase
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  // Definiendo funciones dentro de la clase
  formatearProducto() {
    return `El producto ${this.nombre} cuesta ${this.precio}`;
  }

  precioProducto() {
    return `El precio de ${this.nombre} es $${this.precio} dolares`;
  }
}

const producto1 = new Producto("Laptop G15 1520", 1205);
const producto2 = new Producto("Teclado Gamer", 90);

//Herencia
// La herencia nos permite

class Libro extends Producto {
  constructor(nombre, precio, isbn) {
    // Con super heredamos los elementos del constructor de la clase Producto, por lo tanto los podemos usar, si la palabra super arroja error
    super(nombre, precio);
    this.isbn = isbn;
  }
  // Modificamos la funcion con ayuda de super
  formatearProducto() {
    return `${super.formatearProducto()} y su isbn es ${this.isbn}`;
  }
}

const libro = new Libro("JavaScript Revolución", 120, "1434254326242542");

console.log(libro.formatearProducto());
console.log(producto1.formatearProducto());
