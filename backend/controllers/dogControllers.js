const Dog = require('../models/Dog');
const { dogRouter } = require('../routes/dogRoutes');

// Crea datos
const createDogController = async ({ id_dog, nombre_raza, esperanza_de_vida, origen, peso }) => {
    try {
        const newDog = await Dog.create({ id_dog, nombre_raza, esperanza_de_vida, origen, peso });
        return newDog;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Obtiene todos los datos
const getAllDogsController = async () => {
    try {
        const dogs = await Dog.findAll();
        return dogs;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Actualizar
const updatedDogByIdController = async (id_dog, dogData) => {
    try {
        const dog = await Dog.findByPk(id_dog);
        if (!dog) {
            return null;
        }
        await dog.update(dogData);
        return dog;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Eliminar
const deleteDogByIdController = async (id_dog) => {
    try {
        const dog = await Dog.findByPk(id_dog);
        if (!dog) {
            return null;
        }
        await dog.destroy();
        return dog;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createDogController,
    getAllDogsController,
    updatedDogByIdController,
    deleteDogByIdController
}