const {Router, response} = require('express')
const {createPerroController,getAllPerroController,updatePerroByIdController,deletePerroByIdController} = require('../controllers/perroControllers')
const perroRouter = Router()

//Create new student
perroRouter.post("/",async(req,res)=>{
    const {id,nombre_raza,esperanza_vida,origen,peso} = req.body
    try {
        const newPerro = await createPerroController({id,nombre_raza,esperanza_vida,origen,peso})
        res.status(201).json(newPerro)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

//Get all students 
perroRouter.get("/",async(req,res)=>{
    try {   
        const perro = await getAllPerroController()
        res.status(200).json(perro)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})
//update student by id  
perroRouter.put("/:id",async(req,res)=>{
    const {id} = req.params
    // const {firstName,lastName} = req.body
    const perroDate = req.body
    try {
        const updatePerro = await updatePerroByIdController(id,perroDate)
        if(!updatePerro){
            return res.status(404).json({error:"Perro no encontrado"})
        }
        res.status(200).json(updatePerro)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})
//delete student by id
perroRouter.delete("/:id", async(req,res)=>{
    const {id} = req.params
    try {
        const deletedPerro = await deletePerroByIdController(id)
        if(!deletedPerro){
            return res.status(404).json({error:"Perro no encontrado"})
        }
        res.status(200).json({message:"Perro eliminado exitosamente"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports={perroRouter}