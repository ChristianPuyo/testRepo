import { useEffect } from "react"
import useStudentStore from "../store/DogStore"
import style from "./dog.module.css"
const StudentList = ()=>{
    const { fetchStudents, students, deleteStudent } = useStudentStore();
    useEffect(()=>{
        fetchStudents();
    },[])

    const  handleDelete = (id)=>{
        if(window.confirm("Are you sure?")){
            deleteStudent(id);
        }
    }


    return(<div>
        <h1>Student List</h1>
        {
          students.map((user)=>{
            return(
                <div className={style.container}>
                    <h3>{user.nomperro} {user.raza}</h3>
                    <button onClick={()=>handleDelete(user.id)}>❌</button>
                    <button>✍️</button>
                </div>
            )
          })  
        }
    </div>)
}

export default StudentList