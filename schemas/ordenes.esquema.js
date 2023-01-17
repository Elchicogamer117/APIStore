const Joi = require('joi');

const id = Joi.number().integer();
const clienteId = Joi.number().integer();

const traerEsquemaOrden = Joi.object({
  id: id.required()
});

const crearEsquemaOrden = Joi.object({
  clienteId: clienteId.required()
});

module.exports = { traerEsquemaOrden, crearEsquemaOrden };
