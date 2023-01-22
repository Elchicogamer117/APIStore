const faker = require('faker');
const boom = require('@hapi/boom');
// const pool = require('../libs/postgres.pool');
const { models } = require('../libs/sequelize');
const { Op } = require('sequelize');

class ServicioProducto {
  constructor() {
    this.productos = [];
    this.generar();
  }

  async generar() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.productos.push({
        id: faker.datatype.uuid(),
        nombre: faker.commerce.productName(),
        precio: parseInt(faker.commerce.price()),
        imagen: faker.image.imageUrl(),
        bloqueado: faker.datatype.boolean()
      });
    }
  }

  async crear(datos) {
    const nuevoProducto = await models.Producto.create(datos);
    return nuevoProducto;
  }

  async encontrar(query) {
    const opciones = {
      include: ['categoria'],
      where: {}
    };
    const { limite, offset } = query;
    if (limite && offset) {
      opciones.limite = limite;
      opciones.offset = opciones;
    }
    const { precioMin, precioMax } = query;
    if (precioMin && precioMax) {
      opciones.where.precio = {
        [Op.gte]: precioMin,
        [Op.lte]: precioMax
      };
    }

    const productos = await models.Producto.findAll(opciones);
    return productos;
  }

  async encontrarUno(id) {
    const producto = this.productos.find(item => item.id === id);
    if (!producto) {
      throw boom.notFound('producto no encontrado');
    }
    if (producto.isBlock) {
      throw boom.conflict('producto esta bloqueado');
    }
    return producto;
  }

  async actualizar(id, cambios) {
    const posicion = this.productos.findIndex(item => item.id === id);
    if (posicion === -1) {
      throw boom.notFound(
        'No se pudo actualizar el pruducto dado que no se encontro el ID ingresado, verifique y vuelva a intentar'
      );
    }
    const producto = this.productos[posicion];
    this.productos[posicion] = {
      ...producto,
      ...cambios
    };
    return this.productos[posicion];
  }

  async borrar(id) {
    const posicion = this.productos.findIndex(item => item.id === id);
    if (posicion === -1) {
      throw boom.notFound(
        'No se pudo borrar el pruducto dado que no se encontro el ID ingresado, verifique y vuelva a intentar'
      );
    }
    this.productos.splice(posicion, 1);
    return id;
  }
}

module.exports = ServicioProducto;
