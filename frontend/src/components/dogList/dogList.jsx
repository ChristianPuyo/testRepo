import { useEffect, useState } from "react"
import useStudentStore from "../../store/studentStore"


const StudentList = ()=>{
    const {fetchStudents, students, deleteStudent, updateStudent} = useStudentStore()
    const [editingStudent, setEditingStudent] = useState(null) // Almacena el estudiante que se está editando
    const [formData, setFormData] = useState({ nombreRaza: '', tiempoVida: '', origen: '', peso: '' }) // Datos del formulario de edición

    // Cargar la lista de estudiantes al mostrar el componente
    useEffect(()=>{
        fetchStudents()
    },[])

    // Elimina el estudiante tras confirmar y actualiza la lista
    const handleDelete = (id)=>{
        if(window.confirm("Are you sure?")){
            deleteStudent(id)
            fetchStudents() // Refresca 
        }  
    }
     //////----Agregado----///
    // Configura el estudiante seleccionado para edición y rellena el formulario con sus datos
    const handleEditClick = (student) => {  
        setEditingStudent(student) // Establece el estudiante en edición
        setFormData({ nombreRaza: student.nombreRaza, tiempoVida: student.tiempoVida, origen: student.origen, peso: student.peso }) // Rellena los campos con los datos actuales
    }

    // Maneja los cambios en el formulario de edición
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value // Actualiza solo el campo modificado
        })
    }

    // Actualiza el estudiante en el servidor y refresca la lista
    const handleUpdate = async () => {
        await updateStudent(editingStudent.id, formData) // Espera a que updateStudent complete la actualización
        setEditingStudent(null) // Cierra el formulario de edición
        fetchStudents() // Luego recarga la lista de estudiantes
    }
    /////-------------////

    return (
        <div>
            
        <div>
            
            <div >
                <h1>Student List</h1>

                <div>
                    {
                        students.map((user) => (
                            <div key={user.id}>
                                <h3>{user.id}<br></br> {user.nombreRaza} {user.tiempoVida} {user.origen} {user.peso}</h3>
                                <button onClick={() => handleDelete(user.id)}>❌</button>
                                <button onClick={() => handleEditClick(user)}>✍️</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Muestra el formulario de edición solo si hay un estudiante seleccionado */}
            {editingStudent && (
                        <div >
                            <h3>Edit Student</h3>
                            <input 
                                type="text" 
                                name="nombreRaza" 
                                value={formData.nombreRaza} 
                                onChange={handleInputChange} 
                                placeholder="First Name"
                            />
                            <input 
                                type="text" 
                                name="tiempoVida" 
                                value={formData.tiempoVida} 
                                onChange={handleInputChange} 
                                placeholder="Last Teimpo VIDa"
                            />
                            <input 
                                type="text" 
                                name="origen" 
                                value={formData.origen} 
                                onChange={handleInputChange} 
                                placeholder="Last Origen"
                            />
                            <input 
                                type="text" 
                                name="peso" 
                                value={formData.peso} 
                                onChange={handleInputChange} 
                                placeholder="Last Peso"
                            />
                            <button onClick={handleUpdate}>Save</button>
                            <button onClick={() => setEditingStudent(null)}>Cancel</button>
                        </div>
                    )}
        </div>
        </div>
    )
}

export default StudentList
