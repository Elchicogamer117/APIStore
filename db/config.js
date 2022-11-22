const { config } = require('../config/config');

const USUARIO = encodeURIComponent(config.dbUser);
const CONTRASEÑA = encodeURIComponent(config.dbPassword);
const URL = `postgres://${USUARIO}:${CONTRASEÑA}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: URL,
    dialect: 'postgres'
  },
  production: {
    url: URL,
    dialect: 'postgres'
  }
};
