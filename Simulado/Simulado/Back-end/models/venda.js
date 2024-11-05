import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const venda = sequelize.define('venda', {
    id_venda: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_cliente: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model:'cliente',
            key: 'id_clientes'
        },
    },
    id_alocacao: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        references: {
            model:'alocacao',
            key: 'id_alocacao'
        },
    }
}, {
    tableName: 'venda',
    timestamps: false,
});


export default venda;        
