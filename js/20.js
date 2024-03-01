// Metodos de Propiedad

const reproductor = {
  // Definiendo un metodo propiedad
  reproducir: function (id) {
    console.log(`Reproduciendo una canción ${id}`);
  },

  pausar: function () {
    console.log("Pusar la canción");
  },

  crearPlaylist: function (nombre) {
    console.log(`Creando la Playlist ${nombre}`);
  },
};
// generando un metodo propiedad fuera del objeto
reproductor.eliminar = function (id) {
  console.log(`Eliminando la canción ${id}`);
};

reproductor.reproducir(1980); // Llamando un metodo propiedad
reproductor.pausar();
reproductor.eliminar(1230);
reproductor.crearPlaylist("Vallenato");
