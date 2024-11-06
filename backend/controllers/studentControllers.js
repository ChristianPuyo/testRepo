const Student= require('../models/Student')
const createStudentController = async({id,nombreRaza,tiempoVida,origen,peso})=>{
    try {
        const newStudent = await Student.create({id,nombreRaza,tiempoVida,origen,peso})
        return newStudent
    } catch (error) {
        throw new Error(error.message)
    }
}
// optiene aa todos los estudiantes
const getAllStudentsController = async () =>{
    try {
        const students = await Student.findAll()
        return students
    } catch (error) {
        throw new Error(error.message)
    }
}

// para actualizar
const updateStudentByIdController = async (id, studentData)=>{
    try {
        const student = await Student.findByPk(id)
        if(!student){
            return null
        }
        await student.update(studentData)
        return student
    } catch (error) {
        throw new Error(error.message)
    }
}
// para eliminar

const deletedStudentByIdController = async(id)=>{
   try {
    const student= await Student.findByPk(id)
    if(!student){
        return null
    }
    await student.destroy()
    return student
   } catch (error) {
    throw new  Error(error.message)
   }
}

module.exports={
    createStudentController,
    getAllStudentsController,
    updateStudentByIdController,
    deletedStudentByIdController
}
