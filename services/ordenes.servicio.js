// const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class ServicioOrden {
  constructor() {}

  async crear(datos) {
    const nuevaOrden = await models.Orden.create(datos);
    return nuevaOrden;
  }

  async agregarArticulo(datos) {
    const nuevoArticulo = await models.OrdenProducto.create(datos);
    return nuevoArticulo;
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
        },
        'articulos'
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
