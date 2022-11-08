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
  res.json({
    id,
    nombre: 'John',
    precio: 343
  });
});

module.exports = enrutador;
