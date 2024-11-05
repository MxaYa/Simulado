import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Alocacao = sequelize.define('alocacao', {
    id_alocacao: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    area: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_celular: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:'celular',
            key: 'id_celulares'
        }
    },
    id_representante: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:'Representante',
            key: 'id_representante'
        }
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'alocacao',
    timestamps: false,
});


export default Alocacao;        
