const { Cliente, EsquemaCliente } = require('./cliente.modelo');
const { Usuario, EsquemaUsuario } = require('./usuario.modelo');

function configuracionModelos(sequelize) {
  Usuario.init(EsquemaUsuario, Usuario.config(sequelize));
  Cliente.init(EsquemaCliente, Cliente.config(sequelize));

  Usuario.asosiacion(sequelize.models);
  Cliente.asosiacion(sequelize.models);
}

module.exports = configuracionModelos;
