import { useState } from "react";
import axios from 'axios';
import useStudentStore from "../store/DogStore";

const StudentForm = ()=>{
    const {addStudent} = useStudentStore()
    const [studentData, setStudenteData] = useState({
        nomperro:"",
        raza:"",
        vida:"",
        peso:""
    })

    console.log(studentData);

    const handleInputChange = (e)=>{
        const  {name, value} = e.target;
        setStudenteData({
            ...studentData,
            [name]:value
        })

    }

    const  handleSubmit = async(e)=>{
        e.preventDefault();
        addStudent(studentData)
        setStudenteData({
            nomperro:"",
            raza:"",
            vida:"",
            peso:""
        })
        alert("dog Added Successfully")

        
    }

    

    return(
        <div>
            <h1>Student Form</h1>
            <form  onSubmit={handleSubmit}>

                <input
                  type="text"
                  placeholder="Enter nombre"
                  required
                  name="nomperro"
                  value={studentData.nomperro}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter raza"
                  required
                  name="raza"
                  value={studentData.raza}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter vida"
                  required
                  name="vida"
                  value={studentData.vida}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter peso"
                  required
                  name="peso"
                  value={studentData.peso}
                  onChange={handleInputChange}
                />
                <button>Save</button>
            </form>
        </div>
    )
}

export default  StudentForm;
