const { Model, DataTypes, Sequelize } = require('sequelize');
const { TABLA_ORDEN } = require('./ordenes.modelo');
const { TABLA_PRODUCTO } = require('./producto.modelo');

const TABLA_ORDEN_PRODUCTO = 'orden_producto';

const EsquemaOrdenProducto = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  creado: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  cantidad: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  ordenId: {
    field: 'orden_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TABLA_ORDEN,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productoId: {
    field: 'producto_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TABLA_PRODUCTO,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};

class OrdenProducto extends Model {
  // eslint-disable-next-line no-unused-vars
  static associate(modelos) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLA_ORDEN_PRODUCTO,
      modelName: 'OrdenProducto',
      timestamps: false
    };
  }
}

module.exports = { OrdenProducto, EsquemaOrdenProducto, TABLA_ORDEN_PRODUCTO };
