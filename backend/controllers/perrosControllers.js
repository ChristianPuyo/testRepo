const Perro = require('../models/Perros')

// INSERTAR UN USUARIO 
const createPerrosController = async ({ id,nombre,raza,edad,tiempo,peso }) => {
    try {
        const newPerro = await Perro.create({ id,nombre,raza,edad,tiempo,peso })
        return newPerro
    } catch (error) {
        throw new Error(error.message)
    }
}

//OBTENER TODOS LOS DATOS DE LOS ESTUDIANTES 
const getAllSPerrosController = async () => {
    try {
        const perro = await Perro.findAll()
        return perro

    } catch (error) {
        throw new Error(error.message)
    }

}


// ESTE METODO ES SIMPLEMENTE PARA ACTUALIZAR 
const updatePerrosByIdController = async (id, perroData) => {
    try {
        const perro = await Perro.findOne({where :{id}})
        if (!perro) {
            return null
        }
        await student.update(perroData)
        return perro
    } catch (error) {
        throw new Error(error.message)

    }

}
//ESTE METODO ES PARA ELIMINAR UN ESTUDIANTE
const deletePerrosByIdController = async (id) => {
    try {
         // Busca el estudiante por id
         const perro = await Perro.findOne({ where: { id } });
        if (!perro) {
            return null
        }
        await Perro.destroy()
        return perro
    } catch (error) {
        throw new Error(error.message)

    }
}

// ESTE METODO ES PARA OBTENER UN SOLO ESTUDIANTE  POR SU DNI
const getPerrosByidController = async (id) => {
    try {
        const perro = await Perro.findOne({ where: { id } });
        
        
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
    createPerrosController,
    getAllSPerrosController,
    updatePerrosByIdController,
    deletePerrosByIdController,
    getPerrosByidController
}
