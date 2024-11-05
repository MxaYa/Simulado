import { DataTypes } from "sequelize";
import sequelize from "../config/databases.js";

const Clientes = sequelize.define('Clientes', {
    id_clientes: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    quantidade: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'clientes',
    timestamps: false,
});


export default Clientes;        
