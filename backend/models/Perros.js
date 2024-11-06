const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Perro = sequelize.define('Perro', {
    id_perro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    raza: {
        type: DataTypes.STRING,
        allowNull: false
    },
    esperanzaVida: {
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

//TEAHER

module.exports = Perro