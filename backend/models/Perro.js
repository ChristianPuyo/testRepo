const {Sequelize,DataTypes} = require('sequelize')

const sequelize = require('../db')

const Student = sequelize.define('Perro',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre_raza:{
        type:DataTypes.STRING,
        allowNull:false
    },
    esperanza_vida:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    origen:{
        type:DataTypes.STRING,
        allowNull:false
    },
    peso:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = Student