// models/Area.js
import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Area extends Model {}

Area.init({
  id_area: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Area',
});

export default Area;
