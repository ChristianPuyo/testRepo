const sequelize = require('../db')

// importamos modelos
const Student = require('./Student')

const db={
    sequelize,
    Student
    // agregar mas modelos aqui
}

module.exports = db