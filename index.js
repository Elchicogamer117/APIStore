const express = require('express');
const rutaAPI = require('./routes/index');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Prueba server en Express 🖖');
});

rutaAPI(app);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Corriendo en puerto: ${port}`);
});
