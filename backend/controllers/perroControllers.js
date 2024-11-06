const Perro = require('../models/Perro')

const createPerroController = async({id,nombre_raza,esperanza_vida,origen,peso}) => {
    try {
        const newPerro = await Perro.create({id,nombre_raza,esperanza_vida,origen,peso})
        return newPerro
    } catch (error) {
        throw new Error(error.message)
    }
}
//get all studends

const getAllPerroController = async() => {
    try {
        const perro = await Perro.findAll()
        return perro
    } catch (error) {
        throw new Error(error.message)
    }

}

const updatePerroByIdController = async (id,perroDate)=>{
    try {
        const updatedPerro = await Perro.findByPk(id)
        if(!updatedPerro){
            return null
        }
        await updatedPerro.update(perroDate)
        return updatedPerro
    } catch (error) {
        throw new Error(error.message)
    }
}

const deletePerroByIdController = async(id)=>{
    try {
        const perro = await Perro.findByPk(id)
        if(!perro){
            return null
        }
        await perro.destroy()
        return perro
    } catch (error) {
        throw new Error(error.message)
    }
}
module.exports = {
    createPerroController,
    getAllPerroController,
    updatePerroByIdController,
    deletePerroByIdController
}