const faker = require('faker');
const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');

class ServicioProducto {
  constructor() {
    this.productos = [];
    this.generar();
    this.pool = pool;
    // eslint-disable-next-line no-console
    this.pool.on('error', error => console.error(error));
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
    const nuevoProducto = {
      id: faker.datatype.uuid(),
      ...datos
    };
    this.productos.push(nuevoProducto);
    return nuevoProducto;
  }

  async encontrar() {
    const rta = await this.pool.query('SELECT * FROM tareas');
    return rta.rows;
  }

  async encontrarUno(id) {
    // const name = this.getTotal();
    const producto = this.productos.find(item => item.id === id);
    if (!producto) {
      throw boom.notFound('Producto no encontrado, verifique ID');
    }
    if (producto.bloqueado) {
      throw boom.conflict('El producto esta bloqueado');
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
