const { Model, DataTypes, Sequelize } = require('sequelize');
const { TABLA_USUARIO } = require('./usuario.modelo');

const TABLA_CLIENTE = 'cliente';

const EsquemaCliente = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  apellido: {
    allowNull: false,
    type: DataTypes.STRING
  },
  telefono: {
    allowNull: true,
    type: DataTypes.STRING
  },
  creado: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  usuarioId: {
    field: 'usuario_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: TABLA_USUARIO,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};

class Cliente extends Model {
  static asosiacion(modelos) {
    this.belongsTo(modelos.Usuario, { as: 'usuario' });
    this.hasMany(modelos.Orden, {
      as: 'ordenes',
      foreignKey: 'clienteId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLA_CLIENTE,
      modelName: 'Cliente',
      timestamps: false
    };
  }
}

module.exports = { Cliente, EsquemaCliente, TABLA_CLIENTE };
