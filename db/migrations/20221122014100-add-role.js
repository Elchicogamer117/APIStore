'use strict';

const { EsquemaUsuario, TABLA_USUARIO } = require('../models/usuario.modelo');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(TABLA_USUARIO, 'rol', EsquemaUsuario.rol);
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(TABLA_USUARIO, 'rol');
  }
};
