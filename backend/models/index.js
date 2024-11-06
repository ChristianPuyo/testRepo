const sequelize = require('../db');

// Importar los modelos
const Dog = require('./Dog');

const db = {
    Dog, // Asegúrate de que el nombre del modelo sea correcto (mayúscula inicial)
    sequelize // Agregar la instancia de sequelize al objeto db
    // Puedes agregar más modelos aquí si es necesario.
};

module.exports = db;