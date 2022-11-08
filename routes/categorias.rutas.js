const express = require('express');

const enrutador = express.Router();

enrutador.get('/:categoriaId/productos/:productoId', (req, res) => {
  const { categoriaId, productoId } = req.params;
  res.json([
    {
      categoriaId,
      productoId
    }
  ]);
});

module.exports = enrutador;
