// Async / Await

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando Clientes... espere...");

    setTimeout(() => {
      resolve("Los clientes Fueron descargados");
    }, 5000);
  });
}

function descargarUltimosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando Pedidos... espere...");

    setTimeout(() => {
      resolve("Los pedidos Fueron descargados");
    }, 3000);
  });
}

async function app() {
  try {
    // Agracias al promice all podemos aplicar async / await a varias funciones sin que estas se bloquen
    const resultado = await Promise.all([
      descargarNuevosClientes(),
      descargarUltimosPedidos(),
    ]);
    console.log(resultado[0]);
    console.log(resultado[1]);
  } catch {
    console.log(error);
  }
}

app();
