const sequelize = require('../db')

//Importar los modelos 
const Perro = require('./Perro')

const db = {
    sequelize,
    Perro
    //despues se agrega mas modelos que tengas
}

module.exports = db