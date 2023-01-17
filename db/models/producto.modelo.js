const { Model, DataTypes, Sequelize } = require('sequelize');
const { TABLA_CATEGORIA } = require('./categoria.modelo');

const TABLA_PRODUCTO = 'productos';

const EsquemaProducto = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  creado: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  categoriaId: {
    field: 'categoria_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TABLA_CATEGORIA,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};

class Producto extends Model {
  static asosiacion(modelos) {
    this.belongsTo(modelos.Categoria, { as: 'categoria' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLA_PRODUCTO,
      modelName: 'Producto',
      timestamps: false
    };
  }
}

module.exports = { Producto, EsquemaProducto, TABLA_PRODUCTO };
