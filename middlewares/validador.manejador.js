const boom = require('@hapi/boom');

function manejadorValidaciones(esquema, propiedad) {
  return (req, res, sig) => {
    const datos = req[propiedad];
    const { error } = esquema.validate(datos, { abortEarly: false });
    if (error) {
      sig(boom.badRequest(error));
    }
    sig();
  };
}

module.exports = manejadorValidaciones;
