const Perro= require('../models/perros')

// INSERTAR UNA RAZA DE PERRO
const createPerroController = async ({ id_perro, raza, esperanza_vida, origen, peso}) => {
    try {
        const newPerro= await Perro.create({ id_perro, raza, esperanza_vida, origen, peso })
        return newPerro
    } catch (error) {
        throw new Error(error.message)
    }
}

//OBTENER TODOS LOS PERROS
const getAllPerrosController = async () => {
    try {
        const perros = await Perro.findAll()
        return perros
    }catch(error){
        throw new Error(error.message)
    }

}


module.exports={
    createPerroController,
    getAllPerrosController
}