const { Model, DataTypes, Sequelize } = require('sequelize');

const TABLA_USUARIO = 'usuario';

const EsquemaUsuario = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  correo: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  contraseña: {
    allowNull: false,
    type: DataTypes.STRING
  },
  creadoEn: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'creado_en',
    defaultValue: Sequelize.NOW
  }
};

class Usuario extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLA_USUARIO,
      modelName: 'Usuario',
      timestamps: false
    };
  }
}

module.exports = { TABLA_USUARIO, EsquemaUsuario, Usuario };
