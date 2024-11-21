const Student = require('../models/dogs')

const createStudentController =  async ({id, nomperro, raza,vida,peso}) => {
    try {
        const newStudent = await Student.create({id, nomperro, raza,vida,peso})
        return newStudent
    } catch (error) {
        throw new Error(error.message)
    }
}

const getAllStudentsController = async () => {
    try {
        const students =  await Student.findAll()
        return students

    } catch (error) {
        throw new Error(error.message)
    }

}

const updateStudentByIdController  = async (id, studentData) => {
    try {
        const student = await Student.findByPk(id)
        if(!student) {
            return null
        }
        await student.update(studentData)
        return student
    } catch (error) {
        throw  new Error(error.message)

    }

}

const deleteStudentByIdController = async(id)=>{
    try {
        const student = await Student.findByPk(id)
        if(!student) {
            return null
        }
        await  student.destroy()
        return student

    } catch (error) {
        throw new Error(error.message)
    }
}



module.exports = {
    createStudentController,
    getAllStudentsController,
    updateStudentByIdController,
    deleteStudentByIdController
}
