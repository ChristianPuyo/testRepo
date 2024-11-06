import {create} from 'zustand';
import axios from 'axios';


const usePerroStore = create((set)=>({
    perros:[],
    addPerro: async(perro)=>{
        try {
            const response = await axios.post('http://localhost:3060/perros', perro);
            set((state)=>({perros: [...state.perros, response.data]}))
        } catch (error) {
            console.log("Error agregando user", error.message);
        }
    },
    fetchPerros: async ()=>{
        try {
            const response = await axios.get('http://localhost:3060/perros')
            set({students: response.data})
        } catch (error) {
            console.log("Error al obtener estudiantes", error.message)
        }
    },
    // deleteStudent: async (id)=>{
    //     try {
    //         const response = await axios.delete(`http://localhost:3001/student/${id}`)
    //         set((state)=>(
    //             {students: state.students.filter(student=>student.id !==id)}
    //         ))


    //     } catch (error) {
    //         console.log("Error eliminando estudiante", error.message)
            
    //     }
    // }

}))

export default usePerroStore;