import { useState } from "react"
import axios from "axios"
import Navegador from '../Navegador/Navegador'
import useDogStore from "../../Store/DogStore"
import './DogForm.css'

const DogForm = () =>{
    const {addDog} = useDogStore()
    const [DogData, setDogData] = useState({
        razaName:"",
        tiempoVida:"",
        origen:"",
        peso:""
    })

    console.log(DogData);

    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setDogData({
            ...DogData,
            [name]: value
        });
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        addDog(DogData)
        setDogData({
            razaName:"",
            tiempoVida:"",
            origen:"",
            peso:""
        })
        alert("Dog add Successfully")
    }

    return (
        <div className="form-container">
            <Navegador/>
            <div className="form-content">
                <h1>Dogs Form</h1>
                <form onSubmit={handleSubmit}>
                    <label>Nombre de la raza:</label>
                    <input
                        type="text"
                        placeholder="Enter raza Name"
                        required
                        name="razaName"
                        value={DogData.razaName}
                        onChange={handleInputChange}
                    />
                    <label>Esperanza de Vida:</label>
                    <input
                        type="text"
                        placeholder="Enter esperanza de vida"
                        required
                        name="tiempoVida"
                        value={DogData.tiempoVida}
                        onChange={handleInputChange}
                    />
                    <label>Origen:</label>
                    <input
                        type="text"
                        placeholder="Enter origen"
                        required
                        name="origen"
                        value={DogData.origen}
                        onChange={handleInputChange}
                    />
                    <label>peso:</label>
                    <input
                        type="text"
                        placeholder="Enter peso"
                        required
                        name="peso"
                        value={DogData.peso}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default DogForm