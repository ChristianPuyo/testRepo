const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:leonardojs@localhost:5432/perros',{
    logging: false
})

module.exports=sequelize