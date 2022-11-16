// const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');
// const traerConexion = require('../libs/postgres.client');

class ServcicioUsuario {
  constructor() {}

  async crear(data) {
    return data;
  }

  async encontrar() {
    return await models.Usuario.findAll();
  }

  async encontrarUno(id) {
    return { id };
  }

  async actualizar(id, cambios) {
    return {
      id,
      cambios
    };
  }

  async borrar(id) {
    return { id };
  }
}

module.exports = ServcicioUsuario;
