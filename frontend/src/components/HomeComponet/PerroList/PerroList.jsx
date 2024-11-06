import React, { useEffect, useState } from 'react'
import usePerroStore from '../../../store/perroStore'
import { Perros } from '../../../../../backend/models';


const PerroList = () => {
    const { fetchPerros, Perros, deleteStudent } = usePerroStore();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPerros, setFilteredPerros] = useState([]);

    useEffect(() => {
        fetchPerros();
    }, []);

    useEffect(() => {
        // Filtrar estudiantes según el término de búsqueda
        setFilteredPerros(
            Perros.filter((student) =>
                `${student.firstName} ${student.lastName}`
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            )

        );
    }, [searchTerm, Perros]);

    const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro?")) {
            deleteStudent(id);
        }
    };


    return (
        <div>PerroList</div>
    )
}

export default PerroList