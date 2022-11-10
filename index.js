const express = require('express');
const rutaAPI = require('./routes/index');
const {
  logErrors,
  errorHandler,
  boomErrorHandler
} = require('./middlewares/error.handler');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Prueba server en Express 🖖');
});

rutaAPI(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Corriendo en puerto: ${port}`);
});
