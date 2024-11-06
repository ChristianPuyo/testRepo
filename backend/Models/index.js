const {Sequelize} = require('../db')

const Dogs = require('../Models/Dogs')
const sequelize = require('../db')

const db ={
    sequelize,
    Dogs
}

module.exports = db