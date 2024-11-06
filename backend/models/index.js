const sequelize = require('../db')

//Importar modelos
const Perro = require('./Perros')

const db ={
    sequelize,
    Perro
    //Agregar más módelos aquí.
}

module.exports = db
