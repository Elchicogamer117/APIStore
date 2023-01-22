const express = require('express');
const manejadorValidaciones = require('../middlewares/validador.manejador');
const {
  traerEsquemaProducto,
  crearEsquemaProducto,
  actualizarEsquemaProducto,
  esquemaQueryProducto
} = require('../schemas/producto.esquema');
const ServicioProducto = require('./../services/productos.servicio');

const enrutador = express.Router();
const servicio = new ServicioProducto();

enrutador.get('/', manejadorValidaciones(esquemaQueryProducto, 'query'), async (req, res, sig) => {
  try {
    const productos = await servicio.encontrar(req.query);
    res.json({
      cantidad: productos.length,
      productos
    });
  } catch (error) {
    sig(error);
  }
});

enrutador.get('/John', (req, res) => {
  res.send('Bienvenido de vuelta');
});

enrutador.get('/:id', manejadorValidaciones(traerEsquemaProducto, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const producto = await servicio.encontrarUno(id);
    res.status(201).json(producto);
  } catch (error) {
    next(error);
  }
});

enrutador.post('/', manejadorValidaciones(crearEsquemaProducto, 'body'), async (req, res) => {
  try {
    const datos = req.body;
    const nuevoProducto = await servicio.crear(datos);
    res.status(201).json({ nuevoProducto });
  } catch (error) {
    res.status(510).json({
      mensaje: error.message
    });
  }
});

enrutador.patch(
  '/:id',
  manejadorValidaciones(traerEsquemaProducto, 'params'),
  manejadorValidaciones(actualizarEsquemaProducto, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const cambios = req.body;
      const producto = await servicio.actualizar(id, cambios);
      res.status(202).json({ producto });
    } catch (error) {
      next(error);
    }
  }
);

enrutador.delete('/:id', manejadorValidaciones(traerEsquemaProducto, 'params'), async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await servicio.borrar(id);
    res.status(410).json({ producto });
  } catch (error) {
    res.status(404).json({
      mensaje: error.message
    });
  }
});

module.exports = enrutador;
