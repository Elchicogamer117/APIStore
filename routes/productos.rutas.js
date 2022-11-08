const express = require('express');
const faker = require('faker');

const enrutador = express.Router();

enrutador.get('/', (req, res) => {
  const productos = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    productos.push({
      nombre: faker.commerce.productName(),
      precio: parseInt(faker.commerce.price()),
      imagen: faker.image.imageUrl()
    });
  }
  res.json({
    cantidad: productos.length,
    productos
  });
});

enrutador.get('/John', (req, res) => {
  res.send('Bienvenido de vuelta');
});

enrutador.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '343') {
    res.status(404).json({
      mensaje: 'no encontrado 😓'
    });
  } else {
    res.status(200).json({
      id,
      nombre: 'John',
      precio: 343
    });
  }
});

enrutador.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    mensaje: 'creado',
    datos: body
  });
});

enrutador.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(302).json({
    mensaje: 'actualizado',
    datos: body,
    id
  });
});

enrutador.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(410).json({
    mensaje: 'eliminado',
    id
  });
});

module.exports = enrutador;
