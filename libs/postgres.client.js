const { Client } = require('pg');
const { config } = require('../config/config');

const USUARIO = encodeURIComponent(config.dbUser);
const CONTRASEÑA = encodeURIComponent(config.dbPassword);
async function traerConexion() {
  //Genera un nuevo cliente cada que se genera una conexión
  const cliente = new Client({
    host: config.dbHost,
    port: config.dbPort,
    user: USUARIO,
    password: CONTRASEÑA,
    database: config.dbName
  });

  await cliente.connect();
  return cliente;
}

module.exports = traerConexion;
