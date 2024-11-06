const Perro = require("../models/Perros");

const createPerroController = async ({
  id_perro,
  raza,
  esperanzaVida,
  origen,
  peso,
}) => {
  try {
    const newPerro = await Perro.create({
      id_perro,
      raza,
      esperanzaVida,
      origen,
      peso,
    });
    return newPerro;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllPerroController = async () => {
  try {
    const perros = await Perro.findAll();
    return perros;
  } catch (error) {
    throw new Error(error.message);
  }
};


const updatePerroByIdController = async(id,perroData) => {
    try {
        const perro = await Perro.findByPk(id)
        if (!perro) {
            return null
        }
        await perro.update(perroData)
        return perro
        
    } catch (error) {
        throw new Error(error.message)
        
    }
}
//ESTE METODO ES PARA ELIMINAR UN ESTUDIANTE A PARTIR DE SU DNI
const deletePerroController = async(id) => {
    try {
        const deletePerro = await Perro.findByPk(id)
        if(!deletePerro) {
            return null
    }
        await deletePerro.destroy()
        return deletePerro
    } catch (error) {
        throw new Error(error.message)
        
    }
}
const getPerroByIdController = async (id) => {
  try {
      // Busca al estudiante por ID (clave primaria) en la base de datos
      const perro = await Perro.findByPk(id);

      // Si no se encuentra el estudiante, retorna null
      if (!perro) {
          return null;
      }

      // Retorna el estudiante encontrado
      return perro;
  } catch (error) {
      throw new Error(error.message);
  }
};


module.exports = {
    createPerroController,
    getAllPerroController,
    deletePerroController,
    updatePerroByIdController,
    getPerroByIdController
};
