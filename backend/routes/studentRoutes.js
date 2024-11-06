const {Router}= require('express')
const {createStudentController,getAllStudentsController, updateStudentByIdController,deletedStudentByIdController} = require('../controllers/studentControllers')
const { Student } = require('../models')
const studentRouters = Router()
// create nuew student
// post = publicar, get= obtner, put= actualizar y delete= eliminar
studentRouters.post("/",async(req, res)=>{
    const {id,nombreRaza,tiempoVida,origen,peso} = req.body
    try {
        const newStudent = await createStudentController({id,nombreRaza,tiempoVida,origen,peso})
        // 201 se maneja en servidor que dice que todo salio bien
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(400).json({error: error. message})       
    }
}) 
// creamo la ruta para ver todos los estudiantes get
studentRouters.get("/",async(req,res)=>{
    try {
        const students = await getAllStudentsController()
        res.status(200).json(students)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// para actualizar update
studentRouters.put("/:id", async(req,res)=>{
    const {id}= req.params
    const studentData= req.body
    try {
        const updateStudent = await updateStudentByIdController(id, studentData)
        if(!updateStudent){
            return res.status(404).json({error: "perro no encontrado"})
        }
        res.status(200).json(updateStudent)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// delete o eliminar

studentRouters.delete("/:id", async(req, res)=>{
    const {id} = req.params
    try {
        const deletedStudent = await deletedStudentByIdController(id)
        if(!deletedStudent){
            return res.status.apply(404).json({error: "perro no encontrado"})
        }
        res.status(200).json({message: "perro eliminado existozamente"})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module. exports={
    studentRouters
}