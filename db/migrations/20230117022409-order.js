'use strict';

const { TABLA_ORDEN, EsquemaOrden } = require('../models/ordenes.modelo');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(TABLA_ORDEN, EsquemaOrden);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TABLA_ORDEN);
  }
};
