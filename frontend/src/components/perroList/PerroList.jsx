import { useEffect, useState } from 'react';
import useStudentStore from '../../store/studentStore';
import { 
    RiDeleteBin6Fill,
    RiSearchLine,
    RiUserSearchLine 
} from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { LuSave } from "react-icons/lu";
import { TiCancel } from "react-icons/ti";
import style from './PerroList.module.css';

const PerroList = () => {
    const { fetchStudents, students, deleteStudent, updateStudent } = useStudentStore();
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({ firstName: '', lastName: '' });
    const [searchTerm, setSearchTerm] = useState('');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState(null);

    useEffect(() => {
        fetchStudents();
    }, [fetchStudents]);

    const startEditing = (student) => {
        setEditingId(student.id);
        setEditData({ 
            firstName: student.firstName, 
            lastName: student.lastName 
        });
        setIsEditModalOpen(true);
    };

    const handleUpdate = async () => {
        if (!editData.firstName.trim() || !editData.lastName.trim()) {
            alert('Por favor complete todos los campos');
            return;
        }
        await updateStudent(editingId, editData);
        setIsEditModalOpen(false);
        setEditingId(null);
        setEditData({ firstName: '', lastName: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData(prev => ({ ...prev, [name]: value }));
    };

    const confirmDelete = (student) => {
        setStudentToDelete(student);
        setIsDeleteModalOpen(true);
    };

    const handleDelete = async () => {
        if (studentToDelete) {
            await deleteStudent(studentToDelete.id);
            setIsDeleteModalOpen(false);
            setStudentToDelete(null);
        }
    };

    const filteredStudents = students.filter(student =>
        `${student.firstName} ${student.lastName}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase().trim())
    );

    return (
        <div className={style.pageContainer}>
            <h1 className={style.title}>Lista de Estudiantes</h1>
            
            <div className={style.searchContainer}>
                <div className={style.searchInputWrapper}>
                    <RiSearchLine className={style.searchIcon} />
                    <input
                        type="text"
                        placeholder="Buscar estudiantes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={style.searchInput}
                    />
                </div>
                <span className={style.resultsCount}>
                    {filteredStudents.length} estudiantes encontrados
                </span>
            </div>

            <div className={style.studentsGrid}>
                {students.length === 0 ? (
                    <div className={style.noResults}>
                        <RiUserSearchLine size={48} />
                        <p>No hay estudiantes registrados</p>
                    </div>
                ) : filteredStudents.length === 0 ? (
                    <div className={style.noResults}>
                        <RiUserSearchLine size={48} />
                        <p>No se encontraron estudiantes con esa búsqueda</p>
                    </div>
                ) : (
                    filteredStudents.map((student) => (
                        <div key={student.id} className={style.studentCard}>
                            <div className={style.studentInfo}>
                                <h3 className={style.studentName}>
                                    {student.firstName} {student.lastName}
                                </h3>
                                <div className={style.buttonGroup}>
                                    <button 
                                        onClick={() => confirmDelete(student)}
                                        className={style.deleteButton}
                                    >
                                        <RiDeleteBin6Fill /> Eliminar
                                    </button>
                                    <button 
                                        onClick={() => startEditing(student)}
                                        className={style.editButton}
                                    >
                                        <FaUserEdit /> Editar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Modal de Edición */}
            {isEditModalOpen && (
                <div className={style.modalOverlay}>
                    <div className={style.modal}>
                        <h2>Editar Estudiante</h2>
                        <div className={style.editForm}>
                            <input
                                type="text"
                                name="firstName"
                                value={editData.firstName}
                                onChange={handleInputChange}
                                placeholder="Nombre"
                                className={style.input}
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={editData.lastName}
                                onChange={handleInputChange}
                                placeholder="Apellido"
                                className={style.input}
                            />
                            <div className={style.buttonGroup}>
                                <button onClick={handleUpdate} className={style.saveButton}>
                                    <LuSave /> Guardar
                                </button>
                                <button 
                                    onClick={() => setIsEditModalOpen(false)} 
                                    className={style.cancelButton}
                                >
                                    <TiCancel /> Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de Confirmación de Eliminación */}
            {isDeleteModalOpen && (
                <div className={style.modalOverlay}>
                    <div className={style.modal}>
                        <h2>Confirmar Eliminación</h2>
                        <p>
                            ¿Estás seguro de que deseas eliminar a{' '}
                            <strong>
                                {studentToDelete?.firstName} {studentToDelete?.lastName}
                            </strong>?
                        </p>
                        <div className={style.buttonGroup}>
                            <button 
                                onClick={() => setIsDeleteModalOpen(false)} 
                                className={style.cancelButton}
                            >
                                <TiCancel /> Cancelar
                            </button>
                            <button 
                                onClick={handleDelete} 
                                className={style.deleteButton}
                            >
                                <RiDeleteBin6Fill /> Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PerroList;

//cual es el error: 