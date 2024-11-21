import {create} from 'zustand'
import axios from 'axios'

const useStudentStore = create((set)=>({
    students: [],
    addStudent: async(student)=>{
        try {
            const response = await axios.post('http://localhost:3001/dogs', student)
            set((state)=>({students: [...state.students, response.data]}))
        } catch (error) {
            console.log("Error adding dog", error.message);
            
        }
    },
    fetchStudents:  async ()=>{
        try {
            const response =  await axios.get('http://localhost:3001/dogs')
            set({students:  response.data})

        } catch (error) {
            console.log("Error fetching dog", error.message)
        }
    },
    deleteStudent: async (id) => {
        try {
            const  response = await axios.delete(`http://localhost:3001/dogs/${id}`)
            console.log("Dog deleted:",response.data)
            set((state)=>(
                {students: state.students.filter(student=>student.id !== id)}
            ))

        } catch (error) {
            console.log("Error deleting Dog:",  error.message)

        }
    }


}))
export default useStudentStore;