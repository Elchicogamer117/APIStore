// const boom = require('@hapi/boom');

const traerConexion = require('../libs/postgres.client');

class ServcicioUsuario {
  constructor() {}

  async crear(data) {
    return data;
  }

  async encontrar() {
    const cliente = await traerConexion();
    const rta = await cliente.query('SELECT * FROM tareas');
    return rta.rows;
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
