const express = require('express');
const {
    createDogController,
    getAllDogsController,
    updatedDogByIdController,
    deleteDogByIdController
} = require('../controllers/dogControllers'); // Asegúrate de que la ruta sea correcta

const router = express.Router();

// Ruta para crear un nuevo perro
router.post('/', async (req, res) => {
    try {
        const newDog = await createDogController(req.body);
        res.status(201).json(newDog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para obtener todos los perros
router.get('/', async (req, res) => {
    try {
        const dogs = await getAllDogsController();
        res.status(200).json(dogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para actualizar un perro por ID
router.put('/:id_dog', async (req, res) => {
    const { id_dog } = req.params;
    try {
        const updatedDog = await updatedDogByIdController(id_dog, req.body);
        if (!updatedDog) {
            return res.status(404).json({ message: 'Perro no encontrado' });
        }
        res.status(200).json(updatedDog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para eliminar un perro por ID
router.delete('/:id_dog', async (req, res) => {
    const { id_dog } = req.params;
    try {
        const deletedDog = await deleteDogByIdController(id_dog);
        if (!deletedDog) {
            return res.status(404).json({ message: 'Perro no encontrado' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;