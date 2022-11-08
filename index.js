const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Prueba server en Express 🖖');
});

app.get('/categorias/:categoriaId/productos/:productoId', (req, res) => {
  const { categoriaId, productoId } = req.params;
  res.json([
    {
      categoriaId,
      productoId
    }
  ]);
});
//* Los endpoints especificos deben declararsen antes de los endpoints dinamicos.
app.get('/productos/John', (req, res) => {
  res.send('Bienvenido de vuelta');
});

app.get('/productos/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    nombre: 'John',
    precio: 343
  });
});

app.get('/productos', (req, res) => {
  const productos = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    productos.push({
      nombre: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      imagen: faker.image.imageUrl()
    });
  }
  res.json(productos);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Corriendo en puerto: ${port}`);
});
