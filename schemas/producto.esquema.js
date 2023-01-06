const Joi = require('joi');

const id = Joi.number().integer().messages({
  'number.base': `"id" debe ser solo numeros enteros`,
  'number.empty': `"id" no puede estar vacío`
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
const descripcion = Joi.string().min(12).messages({
  'string.base': `"descripcion" debe ser de tipo texto`,
  'string.empty': `"descripcion" no puede estar vacío`,
  'string.min': `"descripcion" debe tener una longitud mínima de {#limit}`
});
const imagen = Joi.string().uri().messages({
  'string.base': `"imagen" debe ser una url valida de tipo texto`,
  'string.empty': `"imagen" no puede estar vacío`,
  'string.uri': `"imagen" debe ser una url valida`
});
const categoriaId = Joi.number().integer().messages({
  'number.base': `"categoriaId" debe ser de tipo number (entero)`,
  'number.empty': `"categoriaId" no puede estar vacío`
});
const crearEsquemaProducto = Joi.object({
  nombre: nombre.required(),
  precio: precio.required(),
  descripcion: descripcion.required(),
  imagen: imagen.required(),
  categoriaId: categoriaId.required()
});

const actualizarEsquemaProducto = Joi.object({
  nombre: nombre,
  precio: precio,
  descripcion: descripcion,
  imagen: imagen,
  categoriaId: categoriaId
});

const traerEsquemaProducto = Joi.object({
  id: id.required()
});

module.exports = {
  crearEsquemaProducto,
  actualizarEsquemaProducto,
  traerEsquemaProducto
};
