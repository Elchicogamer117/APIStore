const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ServicioCliente {
  constructor() {}

  async crear(datos) {
    return await models.Cliente.create(datos, { include: ['usuario'] });
  }

  async encontrar() {
    return await models.Cliente.findAll({ include: ['usuario'] });
  }

  async encontrarUno(id) {
    const usuario = await models.Cliente.findByPk(id);
    if (!usuario) {
      throw boom.notFound('Cliente no encontrado');
    }
    return usuario;
  }

  async actualizar(id, cambios) {
    const cliente = await this.encontrarUno(id);
    return await cliente.update(cambios);
  }

  async borrar(id) {
    const cliente = await this.encontrarUno(id);
    await cliente.destroy();
    return { id };
  }
}

module.exports = ServicioCliente;
