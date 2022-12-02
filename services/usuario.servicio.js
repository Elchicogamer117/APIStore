const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
// const traerConexion = require('../libs/postgres.client');

class ServicioUsuario {
  constructor() {}

  async crear(data) {
    return await models.Usuario.create(data);
  }

  async encontrar() {
    return await models.Usuario.findAll({ include: ['cliente'] });
  }

  async encontrarUno(id) {
    const usuario = await models.Usuario.findByPk(id);
    if (!usuario) {
      throw boom.notFound('Usuario no encontrado');
    }
    return usuario;
  }

  async actualizar(id, cambios) {
    const usuario = await this.encontrarUno(id);
    return await usuario.update(cambios);
  }

  async borrar(id) {
    const usuario = await this.encontrarUno(id);
    await usuario.destroy();
    return { id };
  }
}

module.exports = ServicioUsuario;
