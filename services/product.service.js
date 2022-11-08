const faker = require('faker');

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
        imagen: faker.image.imageUrl()
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
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolver, rechazar) => {
      setTimeout(() => {
        resolver(this.productos);
      }, 5000);
    });
    // return this.productos;
  }

  async encontrarUno(id) {
    const producto = this.productos.find(item => item.id === id);
    if (producto) {
      return producto;
    } else {
      throw new Error('Producto no encontrado, verifique ID');
    }
  }

  async actualizar(id, cambios) {
    const posicion = this.productos.findIndex(item => item.id === id);
    if (posicion === -1) {
      throw new Error(
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
      throw new Error(
        'No se pudo borrar el pruducto dado que no se encontro el ID ingresado, verifique y vuelva a intentar'
      );
    }
    this.productos.splice(posicion, 1);
    return id;
  }
}

module.exports = ServicioProducto;