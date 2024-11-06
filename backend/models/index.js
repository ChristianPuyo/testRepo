const sequelize = require('../db')

//importar los modelos
const Perros = require('./perros')

const db ={
    sequelize,
    Perros
    //agregar si hay mas modelos aqui.
}

module.exports = db
