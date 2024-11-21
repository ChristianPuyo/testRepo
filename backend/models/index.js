const sequelize = require('../db')

const Student = require('./dogs') 

const db ={
    sequelize,
    Student,
}

module.exports = db