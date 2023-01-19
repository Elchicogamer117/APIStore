const express = require('express');

const manejadorValidaciones = require('../middlewares/validador.manejador');
const { traerEsquemaOrden, crearEsquemaOrden, esquemaAgregarArticulo } = require('../schemas/ordenes.esquema');
const ServicioOrden = require('../services/ordenes.servicio');

const enrutador = express.Router();
const servicio = new ServicioOrden();

enrutador.get('/:id', manejadorValidaciones(traerEsquemaOrden, 'params'), async (req, res, sig) => {
  try {
    const { id } = req.params;
    const orden = await servicio.encontrarUno(id);
    res.json(orden);
  } catch (error) {
    sig(error);
  }
});

enrutador.post('/', manejadorValidaciones(crearEsquemaOrden, 'body'), async (req, res, sig) => {
  try {
    const datos = req.body;
    const nuevaOrden = await servicio.crear(datos);
    res.status(201).json(nuevaOrden);
  } catch (error) {
    sig(error);
  }
});

enrutador.post('/agregar-articulo', manejadorValidaciones(esquemaAgregarArticulo, 'body'), async (req, res, sig) => {
  try {
    const datos = req.body;
    const nuevaOrden = await servicio.agregarArticulo(datos);
    res.status(201).json(nuevaOrden);
  } catch (error) {
    sig(error);
  }
});

module.exports = enrutador;
