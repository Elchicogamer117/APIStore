'use strict';

const { TABLA_CLIENTE, EsquemaCliente } = require('../models/cliente.modelo');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(TABLA_CLIENTE, EsquemaCliente);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TABLA_CLIENTE);
  }
};
