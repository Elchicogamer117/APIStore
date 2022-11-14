const Joi = require('joi');

const id = Joi.string().uuid().messages({
  'string.guid': `"id" Debe ser un uuid valido`
});
const nombre = Joi.string().min(3).max(15).messages({
  'string.base': `"nombre" debe ser de tipo texto`,
  'string.empty': `"nombre" no puede estar vacío`,
  'string.min': `"nombre" debe tener una longitud mínima de {#limit}`,
  'string.max': `"nombre" debe tener una longitud máxima de {#limit}`
});
const precio = Joi.number().integer().strict().min(10).messages({
  'number.base': `"precio" debe ser de tipo number (entero)`,
  'number.empty': `"precio" no puede estar vacío`,
  'number.min': `"precio" debe tener un costo  mínimo de {#limit}`
});
const imagen = Joi.string().uri().messages({
  'string.base': `"imagen" debe ser una url valida de tipo texto`,
  'string.empty': `"imagen" no puede estar vacío`,
  'string.uri': `"imagen" debe ser una url valida`
});

const crearEsquemaProducto = Joi.object({
  nombre: nombre.required(),
  precio: precio.required(),
  imagen: imagen.required()
});

const actualizarEsquemaProducto = Joi.object({
  nombre: nombre,
  precio: precio,
  imagen: imagen
});

const traerEsquemaProducto = Joi.object({
  id: id.required()
});

module.exports = {
  crearEsquemaProducto,
  actualizarEsquemaProducto,
  traerEsquemaProducto
};
