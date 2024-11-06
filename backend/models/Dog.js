const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Dog = sequelize.define('Dog', {
    id_dog: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Se recomienda para que el ID sea autoincremental
    },
    nombre_raza: {
        type: DataTypes.STRING,
        allowNull: false
    },
    esperanza_de_vida: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    origen: {
        type: DataTypes.STRING,
        allowNull: true 
    },
    peso: {
        type: DataTypes.FLOAT, // Usamos FLOAT para permitir pesos decimales
        allowNull: true // Puede ser nulo si no se proporciona información
    }
}, {
    tableName: 'dogs', // Nombre de la tabla en la base de datos
    timestamps: false // Desactivar timestamps si no se requieren
});

module.exports = Dog;