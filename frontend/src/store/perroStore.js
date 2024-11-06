import { create } from "zustand"
import axios from "axios"

const usePerroStore = create((set) => ({
    perros: [],
    currentPerro: null, 
    addPerro: async (perro) => {
        try {
            const response = await axios.post("http://localhost:3001/Perro", perro);
            set((state) => ({ perros: [...state.perros, response.data] }));
        } catch (error) {
            console.log("ERROR AGREGANDO PERRO", error.message);
        }
    },
    fetchperros: async () => {
        try {
            const response = await axios.get("http://localhost:3001/Perro");
            set({ perros: response.data });
        } catch (error) {
            console.log("error al encontrar PERRO ", error.message);
        }
    },
    deletePerro: async (id_perro) => {
        try {
            console.log("Eliminando estudiante con DNI:", id_perro); // Para verificar el valor de dni

            // Realiza la solicitud para eliminar el estudiante en el servidor
            const response = await axios.delete(`http://localhost:3001/Perro/${id_perro}`);

            // Actualiza el estado local eliminando al estudiante por DNI
            if (response) {
                set((state) => ({
                    perros: state.perros.filter((perro) => perro.id_perro !== id_perro),
                }));
            }
            return response; // Opcional, devuelve la respuesta si necesitas manejarla en otro lugar
        } catch (error) {
            console.error("Error al eliminar perro", error.message);
        }
    },

    updatePerro: async (id_perro, updatedData) => {
        try {
            const response = await axios.put(`http://localhost:3001/Perro/${id_perro}`, updatedData);
            set((state) => ({
                perros: state.perros.map((perro) =>
                    perro.id_perro === id_perro ? response.data : perro
                ),
            }));
            return response;
        } catch (error) {
            console.log("Error al actualizar perro:", error.message);
        }
    },
    getPerroByid: async (id_perro) => {
        try {
            const response = await axios.get(`http://localhost:3001/Perro/${id_perro}`);
            set({ currentPerro: response.data }); // Guardamos el estudiante en el estado global
            return response.data;
        } catch (error) {
            console.error("Error al obtener el perro:", error.message);
            return null;
        }
    },
}));

export default usePerroStore 