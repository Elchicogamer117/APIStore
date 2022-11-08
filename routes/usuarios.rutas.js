const express = require('express');

const enrutador = express.Router();

enrutador.get('/', (req, res) => {
  res.send('Coloque nombre/id ');
});

enrutador.get('/:nombre', (req, res) => {
  res.send('Coloque /id ');
});

enrutador.get('/:nombre/:id', (req, res) => {
  const { nombre, id } = req.params;
  res.json([
    {
      nombre,
      id
    }
  ]);
});

module.exports = enrutador;
