import { useState } from 'react'

const PerroForm = () => {
    const { addPerro } = usePerroStore();
    const [PerroData, setPerroData] = useState({
        raza: "", esperezanza_vida: "", origen:"", peso: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPerroData({
            ...PerroData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        addPerro(PerroData);
        setPerroData({
            raza: "", esperezanza_vida: "", origen:"", peso: ""
        });
        alert("Perro ingresado exitosamente!");
    };


    return (
        <div>
            <div className="form-content">
                <h1>Formulario de Perro</h1>
                <form onSubmit={handleSubmit}>
                    <label>RAZA:</label>
                    <input
                        type="text"
                        placeholder="Ingrese la raza"
                        required
                        name="raza"
                        value={dogData.raza}
                        onChange={handleInputChange}
                    />

                    <label>ESPERANZA DE VIDA:</label>
                    <input
                        type="text"
                        placeholder="Ingrese la esperanza de vida"
                        required
                        name="esperanza_vida"
                        value={dogData.esperanza_vida}
                        onChange={handleInputChange}
                    />

                    <label>ORIGEN:</label>
                    <input
                        type="text"
                        placeholder="Ingrese el origen"
                        required
                        name="origen"
                        value={dogData.origen}
                        onChange={handleInputChange}
                    />

                    <label>PESO:</label>
                    <input
                        type="text"
                        placeholder="Ingrese el peso"
                        required
                        name="peso"
                        value={dogData.peso}
                        onChange={handleInputChange}
                    />

                    <button type="submit" className="buttonsave">Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default PerroForm;