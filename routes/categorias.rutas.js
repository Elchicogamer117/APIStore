const express = require('express');

const manejadorValidaciones = require('../middlewares/validador.manejador');
const ServicioCategoria = require('../services/categorias.servicio');
const {
  traerEsquemaCategoria,
  crearEsquemaCategoria,
  actualizarEsquemaCategoria
} = require('../schemas/categoria.esquema');

const enrutador = express.Router();
const servicio = new ServicioCategoria();

enrutador.get('/', async (req, res, next) => {
  try {
    const categories = await servicio.encontrar();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

enrutador.get('/:id', manejadorValidaciones(traerEsquemaCategoria, 'params'), async (req, res, sig) => {
  try {
    const { id } = req.params;
    const category = await servicio.encontrarUno(id);
    res.json(category);
  } catch (error) {
    sig(error);
  }
});

enrutador.post('/', manejadorValidaciones(crearEsquemaCategoria, 'body'), async (req, res, sig) => {
  try {
    const body = req.body;
    const newCategory = await servicio.crear(body);
    res.status(201).json(newCategory);
  } catch (error) {
    sig(error);
  }
});

enrutador.patch(
  '/:id',
  manejadorValidaciones(traerEsquemaCategoria, 'params'),
  manejadorValidaciones(actualizarEsquemaCategoria, 'body'),
  async (req, res, sig) => {
    try {
      const { id } = req.params;
      const datos = req.body;
      const categoria = await servicio.actualizar(id, datos);
      res.json(categoria);
    } catch (error) {
      sig(error);
    }
  }
);

enrutador.delete('/:id', manejadorValidaciones(traerEsquemaCategoria, 'params'), async (req, res, sig) => {
  try {
    const { id } = req.params;
    await servicio.delete(id);
    res.status(201).json({ id });
  } catch (error) {
    sig(error);
  }
});

module.exports = enrutador;
