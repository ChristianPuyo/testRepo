import {create} from 'zustand'
import axios from 'axios'  // para hacer peticiones

const useStudentStore = create((set)=>({
    students: [],
    addStudent: async(student)=>{
        try {
            const response = await axios.post('http://localhost:3001/student',student)
            set((state)=>({students: [...state.students, response.data]}))// crea una copia el "..."
        } catch (error) {
            console.log("Error adding user", error.message)
        }
    },
    fetchStudents: async()=>{
        try {
            const response = await axios.get('http://localhost:3001/student')
            set({students: response.data})
        } catch (error) {
            console.log("Error fecthing students", error.message)
        }
    },
    deleteStudent: async(id)=>{
        try {
            const response = await axios.delete(`http://localhost:3001/student/${id}`)
            console.log("Student delete:",response.data)
            set((state)=>({students: state.students.filter(student=>student.id !== id)})) // filtra todos lo estudiantes actualizados o
        } catch (error) {                                                               // diferentes del id eliminado
            console.log("Error deleting student:", error.message)
        }
    },
    //____----------Agregado---------------________
    updateStudent: async (id, updatedData) => {
        try {  // Realiza una solicitud PUT para actualizar el estudiante en el servidor.
            const response = await axios.put(`http://localhost:3001/student/${id}`, updatedData)
            console.log("Student updated:", response.data)
            // Actualiza el estado localmente, modificando solo el estudiante con el ID coincidente.
            set((state) => ({students: state.students.map((student)=> student.id === id ? {...student, ...response.data} : student)})) // actualiza el estudiante en el estado
        } catch (error) {
            console.log("Error updating student:", error.message)
        }
    }
    
}))

export default useStudentStore