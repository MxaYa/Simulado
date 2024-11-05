import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Representantes = sequelize.define('representantes', {
    id_representante: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    representante: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'representante',
    timestamps: false,
});


export default Representantes;        
