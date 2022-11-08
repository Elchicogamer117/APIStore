const rutaProductos = require('./productos.rutas');
const rutaCategorias = require('./categorias.rutas');
const rutaUsuarios = require('./usuarios.rutas');

function rutaAPI(app) {
  const version = '/api/v1';
  app.use(`${version}/productos`, rutaProductos);
  app.use(`${version}/categorias`, rutaCategorias);
  app.use(`${version}/usuarios`, rutaUsuarios);
}

module.exports = rutaAPI;
