'use strict';

const { EsquemaUsuario, TABLA_USUARIO } = require('../models/usuario.modelo');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(TABLA_USUARIO, EsquemaUsuario);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TABLA_USUARIO);
  }
};
