const { Model, DataTypes, Sequelize } = require('sequelize');

const TABLA_CATEGORIA = 'categoria';

const EsquemaCategoria = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  creado: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
};

class Categoria extends Model {
  static asosiacion(modelos) {
    this.hasMany(modelos.Producto, {
      as: 'productos',
      foreignKey: 'categoriaId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLA_CATEGORIA,
      modelName: 'Categoria',
      timestamps: false
    };
  }
}

module.exports = { Categoria, EsquemaCategoria, TABLA_CATEGORIA };
