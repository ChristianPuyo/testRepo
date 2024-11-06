const { DataTypes} = require('sequelize')
const sequelize = require('../db')

const Perros = sequelize.define('Perros',{
    id_perro:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    raza:{
        type: DataTypes.STRING,
        allowNull: false
    },
    esperanza_vida:{
        type:DataTypes.STRING,
        allowNull:false
    },
    origen:{
        type:DataTypes.STRING,
        allowNull:false
    },
    peso:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports= Perros;