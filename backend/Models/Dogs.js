const { Sequelize, DataTypes } = require("sequelize")

const sequelize = require('../db')

const Dogs = sequelize.define('Dogs', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    razaName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    tiempoVida:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    origen:{
        type:DataTypes.STRING,
        allowNull: false
    },
    peso:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Dogs