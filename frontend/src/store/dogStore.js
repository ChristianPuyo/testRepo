import { create } from 'zustand';
import axios from 'axios';

const useDogStore = create((set) => ({
    dogs: [],

    addDog: async (dog) => { // Método para agregar un perro
        try {
            const response = await axios.post('http://localhost:3001/dog', dog);
            set((state) => ({ dogs: [...state.dogs, response.data] })); // Actualizar el estado
        } catch (error) {
            console.log('Error al agregar perro:', error.message);
        }
    },

    fetchDogs: async () => { // Método para obtener perros
        try {
            const response = await axios.get('http://localhost:3001/dog');
            set({ dogs: response.data });
        } catch (error) {
            console.log('Error al obtener perros:', error.message);
        }
    },

    deleteDog: async (id) => { // Método para eliminar un perro
        try {
            const response = await axios.delete(`http://localhost:3001/dog/${id}`);
            console.log('Perro eliminado:', response.data);
            set((state) => ({ dogs: state.dogs.filter(dog => dog.id_dog !== id) }));
        } catch (error) {
            console.log('Error al eliminar perro:', error.message);
        }
    },

    updateDog: async (id, updatedData) => { // Método para actualizar un perro
        try {
            const response = await axios.put(`http://localhost:3001/dog/${id}`, updatedData);
            console.log('Perro actualizado:', response.data);
            set((state) => ({
                dogs: state.dogs.map((dog) => dog.id_dog === id ? { ...dog, ...response.data } : dog)
            }));
        } catch (error) {
            console.log('Error al actualizar perro:', error.message);
        }
    }
}));

export default useDogStore;