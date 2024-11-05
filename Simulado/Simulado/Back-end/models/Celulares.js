import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Celulares = sequelize.define('celulares', {
    id_celulares: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
}, {
    tableName: 'celulares',
    timestamps: false,
});


export default Celulares;        
