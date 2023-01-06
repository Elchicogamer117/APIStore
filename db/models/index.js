const { Categoria, EsquemaCategoria } = require('./categoria.modelo');
const { Cliente, EsquemaCliente } = require('./cliente.modelo');
const { Producto, EsquemaProducto } = require('./producto.modelo');
const { Usuario, EsquemaUsuario } = require('./usuario.modelo');

function configuracionModelos(sequelize) {
  Usuario.init(EsquemaUsuario, Usuario.config(sequelize));
  Cliente.init(EsquemaCliente, Cliente.config(sequelize));
  Categoria.init(EsquemaCategoria, Categoria.config(sequelize));
  Producto.init(EsquemaProducto, Producto.config(sequelize));

  Usuario.asosiacion(sequelize.models);
  Cliente.asosiacion(sequelize.models);
  Categoria.asosiacion(sequelize.models);
  Producto.asosiacion(sequelize.models);
}

module.exports = configuracionModelos;
