// const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class ServicioCategoria {
  constructor() {}
  async crear(datos) {
    return await models.Categoria.create(datos);
  }

  async encontrar() {
    return await models.Categoria.findAll();
  }

  async encontrarUno(id) {
    const categoria = await models.Categoria.findByPk(id, {
      include: ['productos']
    });
    return categoria;
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

module.exports = ServicioCategoria;
