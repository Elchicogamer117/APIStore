'use strict';

const { TABLA_CATEGORIA, EsquemaCategoria } = require('../models/categoria.modelo');
const { TABLA_PRODUCTO, EsquemaProducto } = require('../models/producto.modelo');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(TABLA_CATEGORIA, EsquemaCategoria);
    await queryInterface.createTable(TABLA_PRODUCTO, EsquemaProducto);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TABLA_CATEGORIA);
    await queryInterface.dropTable(TABLA_PRODUCTO);
  }
};
