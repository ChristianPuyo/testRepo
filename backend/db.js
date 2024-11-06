const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:erixangel@localhost:5432/dogs',{
    logging: false
})

module.exports = sequelize