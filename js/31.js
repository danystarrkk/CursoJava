const boton = document.querySelector("#button"); // Haciendo referencia a un id de el html

// Agregando un evento al boton
boton.addEventListener("click", () => {
  Notification.requestPermission()
    .then((resultado) => {
      console.log(`Resultado es ${resultado}`);
    })
    .catch((error) => {
      console.log(`El resultado es ${error}`);
    });
});

if (Notification.permission === "granted") {
  new Notification("Esta es una Notificación", {
    //icon: "ruta del icono",
    body: "Codigo con Daniel",
  });
}
