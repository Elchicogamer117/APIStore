const { Usuario, EsquemaUsuario } = require('./usuario.modelo');

function configuracionModelos(sequelize) {
  Usuario.init(EsquemaUsuario, Usuario.config(sequelize));
}

module.exports = configuracionModelos;
