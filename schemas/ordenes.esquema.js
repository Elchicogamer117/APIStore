const Joi = require('joi');

const id = Joi.number().integer();
const clienteId = Joi.number().integer();
const ordenId = Joi.number().integer();
const productoId = Joi.number().integer();
const cantidad = Joi.number().integer();

const traerEsquemaOrden = Joi.object({
  id: id.required()
});

const crearEsquemaOrden = Joi.object({
  clienteId: clienteId.required()
});

const esquemaAgregarArticulo = Joi.object({
  ordenId: ordenId.required(),
  productoId: productoId.required(),
  cantidad: cantidad.required()
});

module.exports = { traerEsquemaOrden, crearEsquemaOrden, esquemaAgregarArticulo };
