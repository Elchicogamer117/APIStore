const rutaProductos = require('./productos.rutas');
const rutaCategorias = require('./categorias.rutas');
const rutaUsuarios = require('./usuarios.rutas');
const rutaClientes = require('./clientes.rutas');
const rutaOrdenes = require('./ordenes.rutas');

function rutaAPI(app) {
  const version = '/api/v1';
  app.use(`${version}/productos`, rutaProductos);
  app.use(`${version}/categorias`, rutaCategorias);
  app.use(`${version}/usuarios`, rutaUsuarios);
  app.use(`${version}/clientes`, rutaClientes);
  app.use(`${version}/ordenes`, rutaOrdenes);
}

module.exports = rutaAPI;
