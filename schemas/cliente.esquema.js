const Joi = require('joi');
const { crearEsquemaUsuario } = require('./usuario.esquema');

const id = Joi.number().integer();
const nombre = Joi.string().min(3).max(30).messages({
  'string.base': `"nombre" debe ser de tipo texto`,
  'string.empty': `"nombre" no puede estar vacío`,
  'string.min': `"nombre" debe tener una longitud mínima de {#limit}`,
  'string.max': `"nombre" debe tener una longitud máxima de {#limit}`
});
const apellido = Joi.string().max(30).messages({
  'string.base': `"apellido" debe ser de tipo texto`,
  'string.empty': `"apellido" no puede estar vacío`,
  'string.max': `"apellido" debe tener una longitud máxima de {#limit}`
});
const telefono = Joi.number().integer().messages({
  'number.base': `"telefono" debe ingresar solo numeros`
});
const usuarioId = Joi.number().integer().messages({
  'number.base': `"usuarioId" debe ser de tipo number`
});

const traerEsquemaCliente = Joi.object({
  id: id.required()
});

const crearEsquemaCliente = Joi.object({
  nombre: nombre.required(),
  apellido: apellido.required(),
  telefono: telefono.required(),
  usuario: crearEsquemaUsuario
});

const actualizarEsquemaCliente = Joi.object({
  nombre,
  apellido,
  telefono,
  usuarioId
});

module.exports = { traerEsquemaCliente, crearEsquemaCliente, actualizarEsquemaCliente };
