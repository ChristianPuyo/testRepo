import {create} from 'zustand'
import axios from 'axios'

const useDogStore = create((set)=>({
    dogs: [],
    addDog: async(dog)=>{
        try {
            const response = await axios.post('http://localhost:3001/dog', dog)
            set((state)=>({
                dog: [...state.dogs, response.data]
            }))
        } catch (error) {
            console.log("Error adding dog", error.message);
        }
    },
    fetchDogs: async ()=>{
        try {
            const response = await axios.get('http://localhost:3001/dog')
            set({dogs: response.data})  
        } catch (error) {
            console.log('Error fetching dogs', error.message)
        }
    },
    deleteDog: async (id) =>{
        try {
            const response = await axios.delete(`http://localhost:3001/dog/${id}`)
            console.log('Dog deleted:', response.data)
            set((state) => ({
                dogs: state.dogs.filter((dog) => dog.id !== id),
            }))
        } catch (error) {
            console.log('Error', error.message)
        }
    },
    updateDog: async (id, updatedData) => {
        try {
            const response = await axios.put(`http://localhost:3001/dog/${id}`, updatedData);
            set((state) => ({
                dogs: state.dogs.map((dog) =>
                    dog.id === id ? response.data : dog
                ),
            }));
        } catch (error) {
            console.log('Error updating dog', error.message);
        }
    }
}))

export default useDogStore