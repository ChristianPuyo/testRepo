import {create} from 'zustand'
import axios from 'axios'

const usePerrosStore = create((set)=>({
    perros:[],
    addPerro: async(perro)=>{
        try {
            const  response = await axios.post('http://localhost:3001/perro',perro)
            set((state)=>({perros:[...state.perros,response.data]}))

        } catch (error) {
            console.log("Error adding dog", error.message)
        }
    },
    fetchPerro:async()=>{
        try {
            const response = await axios.get('http://localhost:3001/perro')
            set({perros:response.data})

        } catch (error) {
            console.log('Error fetching dogs: ',error.message)
        }
    },
    deletePerro:async(id)=>{
        try {
            const response = await axios.delete(`http://localhost:3001/perro/${id}`)
            console.log("dog deleted: ",response.data)
            set((state)=>(
                {perros:state.perros.filter(perro=>perro.id!==id)}
            ))
        } catch (error) {
            console.log("Error deleting dog: ",error.message)
        }
    },
    updatePerro: async (id, updateData) => {
        try {
            const response = await axios.put(`http://localhost:3001/perro/${id}`, updateData);
            console.log("Dog updated: ", response.data);
    
            set((state) => ({
                perros: state.perros.map(perro => 
                    perro.id === id ? response.data : perro
                )
            }));
        } catch (error) {
            console.log("Error updating Perros", error.message);
        }
    }    

}))

export default usePerrosStore;