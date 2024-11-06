const { DataTypes} = require('sequelize')
const sequelize = require('../db')

const Student = sequelize.define('Dog',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreRaza: {
        type: DataTypes.STRING,
        allowNull: false// PARA QUE VAYA VACIO
    },
    tiempoVida: {
        type: DataTypes.STRING,
        allowNull: false
    },
    origen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    peso: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports= Student