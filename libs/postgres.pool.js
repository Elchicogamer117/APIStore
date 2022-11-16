const { Pool } = require('pg');
const { config } = require('../config/config');

const USUARIO = encodeURIComponent(config.dbUser);
const CONTRASEÑA = encodeURIComponent(config.dbPassword);
const URL = `postgres://${USUARIO}:${CONTRASEÑA}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({ connectionString: URL });

module.exports = pool;
