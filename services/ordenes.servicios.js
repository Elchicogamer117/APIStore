// const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class ServicioOrden {
  constructor() {}

  async crear(data) {
    const nuevaOrden = await models.Orden.create(data);
    return nuevaOrden;
  }

  async encontrar() {
    return [];
  }

  async encontrarUno(id) {
    const orden = await models.Orden.findByPk(id, {
      include: [
        {
          association: 'cliente',
          include: ['usuario']
        }
      ]
    });
    return orden;
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

module.exports = ServicioOrden;
