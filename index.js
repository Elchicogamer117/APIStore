const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Prueba server en Express 🖖');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Corriendo en puerto: ${port}`);
});
