const express = require('express');
const manejadorValidaciones = require('../middlewares/validador.manejador');
const { traerEsquemaProducto } = require('../schemas/producto.esquema');
const ServicioUsuario = require('../services/usuario.servicio');

const enrutador = express.Router();
const servicio = new ServicioUsuario();

enrutador.get('/', async (req, res, sig) => {
  try {
    const usuarios = await servicio.encontrar();
    res.json(usuarios);
  } catch (error) {
    sig(error);
  }
});

enrutador.get('/:id', manejadorValidaciones(traerEsquemaProducto, 'params'), async (req, res, sig) => {
  try {
    const { id } = req.params;
    const categoria = await servicio.encontrarUno(id);
    res.json(categoria);
  } catch (error) {
    sig(error);
  }
});

module.exports = enrutador;
