const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:dsi2024@localhost:5432/raza_perros',{
    logging: false
})

module.exports=sequelize 