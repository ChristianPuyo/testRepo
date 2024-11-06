const {Router} = require('express')
const {CreateDogsController,
    getAllDogsController,
    updatedDogsByIdController,
    deletedDogsByIdController
} = require('../Controller/DogController')

const DogRouter = Router()

DogRouter.post('/',async(req, res)=>{
    const {id, razaName, tiempoVida, origen, peso} = req.body
    try{
        const newDog = await CreateDogsController({id, razaName, tiempoVida, origen, peso})
        res.status(201).json(newDog)
    }catch (error){
        res.status(400).json({error: error.message})
    }
})

DogRouter.get('/', async (req, res) =>{
    try {
        const dogs = await getAllDogsController()
        res.status(200).json(dogs)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

DogRouter.put('/:id', async (req, res) => {
    const { id } = req.params
    const dogData = req.body
    try {
        const updatedDogs = await updatedDogsByIdController(id, dogData)
        if(!updatedDogs){
            return res.status(400).json({error: "Dog not found"})
        }
        res.status(200).json(updatedDogs)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

DogRouter.delete('/:id', async (req, res) =>{
    const { id } = req.params
    try {
        const deteledDog = await deletedDogsByIdController(id)
        if(!deteledDog){
            return res.status(404).json({error: "Dog not found"})
        }
        res.status(200).json({message: "Dog deleted successfully"})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports={
    DogRouter
}