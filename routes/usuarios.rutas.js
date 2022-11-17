const express = require('express');
const manejadorValidaciones = require('../middlewares/validador.manejador');
const { traerEsquemaUsuario, crearEsquemaUsuario, actualizarEsquemaUsuario } = require('../schemas/usuario.esquema');
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

enrutador.get('/:id', manejadorValidaciones(traerEsquemaUsuario, 'params'), async (req, res, sig) => {
  try {
    const { id } = req.params;
    const categoria = await servicio.encontrarUno(id);
    res.json(categoria);
  } catch (error) {
    sig(error);
  }
});

enrutador.post('/', manejadorValidaciones(crearEsquemaUsuario, 'body'), async (req, res, sig) => {
  try {
    const datos = req.body;
    const nuevoUsuario = await servicio.crear(datos);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    sig(error);
  }
});

enrutador.patch(
  '/:id',
  manejadorValidaciones(traerEsquemaUsuario, 'params'),
  manejadorValidaciones(actualizarEsquemaUsuario, 'body'),
  async (req, res, sig) => {
    try {
      const { id } = req.params;
      const cambios = req.body;
      const category = await servicio.actualizar(id, cambios);
      res.json(category);
    } catch (error) {
      sig(error);
    }
  }
);

enrutador.delete('/:id', manejadorValidaciones(traerEsquemaUsuario, 'params'), async (req, res, sig) => {
  try {
    const { id } = req.params;
    await servicio.borrar(id);
    res.status(201).json({ id });
  } catch (error) {
    sig(error);
  }
});

module.exports = enrutador;
