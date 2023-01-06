const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(3).max(30).messages({
  'string.base': `"nombre" debe ser de tipo texto`,
  'string.empty': `"nombre" no puede estar vacío`,
  'string.min': `"nombre" debe tener una longitud mínima de {#limit}`,
  'string.max': `"nombre" debe tener una longitud máxima de {#limit}`
});
const imagen = Joi.string().uri().messages({
  'string.base': `"imagen" debe ser una url valida de tipo texto`,
  'string.empty': `"imagen" no puede estar vacío`,
  'string.uri': `"imagen" debe ser una url valida`
});

const traerEsquemaCategoria = Joi.object({
  id: id.required()
});
const crearEsquemaCategoria = Joi.object({
  nombre: nombre.required(),
  imagen: imagen.required()
});

const actualizarEsquemaCategoria = Joi.object({
  nombre,
  imagen
});

module.exports = { traerEsquemaCategoria, crearEsquemaCategoria, actualizarEsquemaCategoria };
