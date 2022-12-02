const express = require('express');
const ServicioCliente = require('../services/clientes.servicio');
const manejadorValidaciones = require('../middlewares/validador.manejador');
const { crearEsquemaCliente, traerEsquemaCliente, actualizarEsquemaCliente } = require('../schemas/cliente.esquema');

const enrutador = express.Router();
const servicio = new ServicioCliente();

enrutador.get('/', async (req, res, sig) => {
  try {
    res.json(await servicio.encontrar());
  } catch (error) {
    sig(error);
  }
});

enrutador.post('/', manejadorValidaciones(crearEsquemaCliente, 'body'), async (req, res, sig) => {
  try {
    const body = req.body;
    res.status(201).json(await servicio.crear(body));
  } catch (error) {
    sig(error);
  }
});

enrutador.patch(
  '/:id',
  manejadorValidaciones(traerEsquemaCliente, 'params'),
  manejadorValidaciones(actualizarEsquemaCliente, 'body'),
  async (req, res, sig) => {
    try {
      const { id } = req.params;
      const cambios = req.body;
      res.status(201).json(await servicio.actualizar(id, cambios));
    } catch (error) {
      sig(error);
    }
  }
);

enrutador.delete('/:id', manejadorValidaciones(traerEsquemaCliente, 'params'), async (req, res, sig) => {
  try {
    const { id } = req.params;
    res.status(200).json(await servicio.borrar(id));
  } catch (error) {
    sig(error);
  }
});

module.exports = enrutador;
