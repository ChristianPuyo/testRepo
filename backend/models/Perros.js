const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Perro = sequelize.define('tipos_perros', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    raza: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tiempo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    peso: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

//TEAHER

module.exports = Perro