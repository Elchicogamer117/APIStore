'use strict';

const { TABLA_ORDEN_PRODUCTO, EsquemaOrdenProducto } = require('../models/orden-producto.modelo');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(TABLA_ORDEN_PRODUCTO, EsquemaOrdenProducto);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TABLA_ORDEN_PRODUCTO);
  }
};
