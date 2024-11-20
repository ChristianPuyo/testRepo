const { Router } = require('express')
const {createStudentController,
       getAllStudentsController,
       updateStudentByIdController,
       deleteStudentByIdController

} = require('../controllers/dogsControllers')

const studentRouter = Router()

studentRouter.post("/", async(req, res)=>{
    const {id, nomperro, raza,vida} = req.body
    try {
        const newStudent = await createStudentController({id, nomperro, raza,vida})
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}) 


studentRouter.get("/", async(req, res)=>{
    try {
        const students =  await getAllStudentsController()
        res.status(200).json(students)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

studentRouter.put("/:id", async(req, res)=>{
    const {id} = req.params
    const studentData = req.body
    try {
        const  updatedStudent = await updateStudentByIdController(id, studentData)
        if(!updatedStudent){
            return res.status(404).json({error: "Dog not found"})
        }
        res.status(200).json(updatedStudent)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

studentRouter.delete("/:id", async(req, res)=>{
    const {id} = req.params
    try {
        const deletedStudent = await  deleteStudentByIdController(id)
        if(!deletedStudent){
            return res.status(404).json({error: "Dog not found"})
        }
        res.status(200).json({message: "Dog deleted successfully"})

    } catch (error) {
        res.status(500).json({error: error.message})
    }

})

module.exports={
    studentRouter
}