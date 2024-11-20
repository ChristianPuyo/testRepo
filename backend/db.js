const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:junir09@localhost:5432/',{
    logging: false
})

module.exports=sequelize