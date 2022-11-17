/* eslint-disable no-unused-vars */

const { ValidationError } = require('sequelize');

/* eslint-disable no-console */
function logErrors(err, req, res, next) {
  console.error('logErrors');
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.error('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(500).json({
      name: err.name,
      error: err.errors
    });
  }
  next(err);
}

// function queryErrorHandler(err, req, res, next) {
//   if (err.parent) {
//     const { fields, parent } = err;
//     res.status(500).json({
//       field: fields,
//       message: parent.detail
//     });
//   }
//   next(err);
// }
module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler };
