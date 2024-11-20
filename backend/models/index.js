const sequelize = require('../db')

const Student = require('./dog') 

const db ={
    sequelize,
    Student,
}

module.exports = db