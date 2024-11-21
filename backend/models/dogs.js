const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const Student = sequelize.define('dogs',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
    },
    nomperro: {
        type: DataTypes.STRING,
        allowNull:false
    },
    raza: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vida: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    peso: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Student