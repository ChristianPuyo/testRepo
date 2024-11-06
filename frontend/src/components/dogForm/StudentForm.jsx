import { useState } from "react"
import axios from 'axios'
import useStudentStore from "../../store/studentStore"


const StudentForm= ()=>{
    const {addStudent} = useStudentStore()
    const [studentData, setStudentData] = useState ({
        nombreRaza:"",
        tiempoVida:"",
        origen:"",
        peso:""
    })

    console.log(studentData)

    // escucha lo que se ecribe en los input de la interfaz creada.
    const handleInputChange = (e)=>{
       const {name, value} = e. target 
       setStudentData({
        ...studentData,
        [name]:value
       })
    }

    // creamos la funcion que graba los datos de los input
    const handelSubmit = async(e)=>{
        e.preventDefault();     // previene algo por defecto nose
        addStudent(studentData)
        setStudentData({
            nombreRaza:"",
            tiempoVida:"",
            origen:"",
            peso:""
        })
        alert("perro added Successfully")
    }

    return (
        <div>
        <div>
            
            
        <div>       
        <div>
            <h1>Formulario de Perros</h1>
            <form onSubmit={handelSubmit}>
                <input
                type="text"
                placeholder="enter nombreRaza"
                required
                name="nombreRaza"
                value={studentData.nombreRaza}
                onChange={handleInputChange}
                />
                <input
                type="text"
                placeholder="enter tiempoVida"
                required
                name="tiempoVida"
                value={studentData.tiempoVida}
                onChange={handleInputChange}
                />
                <input
                type="text"
                placeholder="enter origen"
                required
                name="origen"
                value={studentData.origen}
                onChange={handleInputChange}
                />
                <input
                type="text"
                placeholder="enter peso"
                required
                name="peso"
                value={studentData.peso}
                onChange={handleInputChange}
                />
                <button>Guardar 🗃️</button>
            </form>
        </div>
        </div>
        </div>
        </div>
    )
}

export default StudentForm