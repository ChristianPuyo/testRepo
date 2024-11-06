const Dogs = require('../Models/Dogs')

const CreateDogsController = async ({id, razaName, tiempoVida, origen, peso}) =>{
    try {
        const newDog = await Dogs.create({id, razaName, tiempoVida, origen, peso})
        return newDog
    } catch (error) {
        throw new Error(error.message)
    }
}

const getAllDogsController = async () =>{
    try {
        const dogs = await Dogs.findAll()
        return dogs
    } catch (error) {
        throw new Error(error.message);
        
    }
}

const updatedDogsByIdController = async(id, dogData) =>{
    try {
        const updateDog = await Dogs.findByPk(id)
        if(!updateDog){
            return null
        }
        await updateDog.update(dogData)
        return updateDog;
    } catch (error) {
        throw new Error(error.message)
    }
}

const deletedDogsByIdController = async(id) =>{
    try {
        const dog = await Dogs.findByPk(id)
        if(!dog){
            return null
        }
        await dog.destroy()
        return dog
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports={
    CreateDogsController,
    getAllDogsController,
    updatedDogsByIdController,
    deletedDogsByIdController
}