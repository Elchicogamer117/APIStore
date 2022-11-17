const Joi = require('joi');

const id = Joi.number().integer();
const correo = Joi.string().email().messages({
  'string.base': `"correo" debe ser de tipo texto`,
  'string.empty': `"correo" no puede estar vacío`,
  'string.email': `"correo" debe tener la estructura de un correo`
});
const contraseña = Joi.string().min(8).messages({
  'string.base': `"contraseña" debe ser de tipo texto`,
  'string.empty': `"contraseña" no puede estar vacío`,
  'string.min': `"contraseña" debe tener una longitud mínima de {#limit}`,
  'string.max': `"contraseña" debe tener una longitud máxima de {#limit}`
});
// const rol = Joi.string().min(5)

const crearEsquemaUsuario = Joi.object({
  correo: correo.required(),
  contraseña: contraseña.required()
  // rol: rol.required()
});

const actualizarEsquemaUsuario = Joi.object({
  correo: correo,
  contraseña: contraseña
  // rol: rol,
});

const traerEsquemaUsuario = Joi.object({
  id: id.required()
});

module.exports = { crearEsquemaUsuario, actualizarEsquemaUsuario, traerEsquemaUsuario };
