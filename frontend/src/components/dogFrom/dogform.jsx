import { useState } from "react";
import useDogStore from "../../store/dogStore"; // Asegúrate de que este hook esté definido


const DogForm = () => {
    
    const { addDog } = useDogStore(); // Asegúrate de tener este método en tu store

    const [dogData, setDogData] = useState({
        nombre_raza: "", 
        esperanza_de_vida: "",
        origen: "",
        peso: ""
    });

    console.log(dogData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDogData({
            ...dogData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        addDog(dogData); 
        setDogData({
            nombre_raza: "",
            esperanza_de_vida: "",
            origen: "",
            peso: ""
        });
        alert("PERRO AGREGADO");
    };

    return (
        <div className="register">
            <h1>FORMULARIO DE PERRO</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre de la raza"
                    required
                    name="nombre_raza" 
                    value={dogData.nombre_raza}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder="Esperanza de vida (años)"
                    required
                    name="esperanza_de_vida"
                    value={dogData.esperanza_de_vida}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Origen"
                    name="origen"
                    value={dogData.origen}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    step="0.1" // Permite decimales en el peso
                    placeholder="Peso (kg)"
                    name="peso"
                    value={dogData.peso}
                    onChange={handleInputChange}
                />
                <button type="submit">AGREGAR</button>  
            </form>
        </div>
    );
};

export default DogForm;