import { create } from "zustand"
import axios from "axios"

const usePerroStore = create((set) => ({
    perros: [],
    currentperros: null, 
    addPerros: async (perro) => {
        try {
            const response = await axios.post("http://localhost:3001/tipos_perros", perro);
            set((state) => ({ perros: [...state.perros, response.data] }));
        } catch (error) {
            console.log("ERROR AGREGANDO", error.message);
        }
    },
    fetchPerros: async () => {
        try {
            const response = await axios.get("http://localhost:3001/tipos_perros");
            set({ perros: response.data });
        } catch (error) {
            console.log("error al encontrar ", error.message);
        }
    },
    deletePerros: async (id) => {
        try {
            console.log("perro eliminado:", id); // 
            const response = await axios.delete(`http://localhost:3001/tipos_perros/${id}`);

            
            if (response) {
                set((state) => ({
                    perros: state.perros.filter((perro) => perro.id !== id),
                }));
            }
            return response; 
        } catch (error) {
            console.error("Error al eliminar ", error.message);
        }
    },

    updateperros: async (id, updatedData) => {  //actualiza los datos de un estudiante
        try {
            const response = await axios.put(`http://localhost:3001/tipos_perros/${id}`, updatedData);
            set((state) => ({
                perros: state.perros.map((perro) =>
                    perro.id === id ? response.data : perro
                ),
            }));
            return response;
        } catch (error) {
            console.log("Error al actualizar ", error.message);
        }
    },
    getPerrosByid: async (id) => {
        try {
            const response = await axios.get(`http://localhost:3001/tipos_perros/${id}`);
            set({ currentPerros: response.data }); // Guardamos el estudiante en el estado global
            return response.data; // Devolvemos el estudiante
        } catch (error) {
            console.error("Error al obtener ", error.message);
            return null;
        }
    },
}));

export default usePerroStore