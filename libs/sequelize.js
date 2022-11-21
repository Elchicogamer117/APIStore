const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const configuracionModelos = require('../db/models');

const USUARIO = encodeURIComponent(config.dbUser);
const CONTRASEÑA = encodeURIComponent(config.dbPassword);
// const URL = `postgres://${USUARIO}:${CONTRASEÑA}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URL = `mysql://${USUARIO}:${CONTRASEÑA}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URL, {
  // dialect: 'postgres',
  dialect: 'mysql',
  logging: true
});

configuracionModelos(sequelize);
sequelize.sync();

module.exports = sequelize;
