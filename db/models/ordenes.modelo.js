const { Model, DataTypes, Sequelize } = require('sequelize');
const { TABLA_CLIENTE } = require('./cliente.modelo');

const TABLA_ORDEN = 'ordenes';

const EsquemaOrden = {
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
  clienteId: {
    field: 'cliente_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TABLA_CLIENTE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  total: {
    type: DataTypes.VIRTUAL,
    get() {
      if (this.articulos.length > 0) {
        return this.articulos.reduce((total, articulo) => {
          return total + articulo.precio * articulo.OrdenProducto.cantidad;
        }, 0);
      }
      return 0;
    }
  }
};

class Orden extends Model {
  static asosiacion(modelos) {
    this.belongsTo(modelos.Cliente, { as: 'cliente' });
    this.belongsToMany(modelos.Producto, {
      as: 'articulos',
      through: modelos.OrdenProducto,
      foreignKey: 'ordenId',
      otherKey: 'productoId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLA_ORDEN,
      modelName: 'Orden',
      timestamps: false
    };
  }
}

module.exports = { Orden, EsquemaOrden, TABLA_ORDEN };
