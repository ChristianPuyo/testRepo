import { useState } from "react";
import styles from "./StudentForm.module.css";
import useStudentStore from "../../store/studentStore";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/modal"; // Asegúrate de que la ruta sea correcta según tu estructura de carpetas.

const StudentForm = () => {
  const navigate = useNavigate();
  const { addStudent } = useStudentStore();
  
  const [studentData, setStudentData] = useState({
    firstName: "",
    lastNameP: "",
    lastNameM: "",
    Dni: "",
    Age: "",
    Direccion: "",
    institucion: "",
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (addStudent(studentData)) {
      setIsSuccessModalOpen(true); // Abre el modal de éxito
      setStudentData({
        firstName: "",
        lastNameP: "",
        lastNameM: "",
        Dni: "",
        Age: "",
        Direccion: "",
        institucion: "",
      });
    } else {
      alert("ERROR AL INSERTAR DATOS");
    }
  };

  const volverAinicio = () => {
    navigate("/");
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  const handleDeleteConfirmation = (item) => {
    setItemToDelete(item);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    // Lógica para eliminar el estudiante
    setIsDeleteModalOpen(false);
    // Mostrar un mensaje de éxito o error si es necesario
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={volverAinicio}>
        Regresar
      </button>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h4 className={styles.title}>Insertar Usuario</h4>

        <label className={styles.label}>
          Nombres:
          <input
            type="text"
            placeholder="Enter Firstname"
            required
            name="firstName"
            value={studentData.firstName}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Apellido Paterno:
          <input
            type="text"
            placeholder="Enter Lastname"
            required
            name="lastNameP"
            value={studentData.lastNameP}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Apellido Materno:
          <input
            type="text"
            placeholder="Enter Middle Name"
            required
            name="lastNameM"
            value={studentData.lastNameM}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Dni:
          <input
            type="text"
            placeholder="Enter Dni"
            required
            name="Dni"
            value={studentData.Dni}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Edad de Estudiante:
          <input
            type="text"
            placeholder="Enter Age"
            required
            name="Age"
            value={studentData.Age}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Dirección de Estudiante:
          <input
            type="text"
            placeholder="Enter Address"
            required
            name="Direccion"
            value={studentData.Direccion}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Institución Educativa:
          <input
            type="text"
            placeholder="Enter Institution"
            required
            name="institucion"
            value={studentData.institucion}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.saveButton}>GUARDAR</button>
      </form>

      {/* Modal de éxito */}
      <Modal
        isOpen={isSuccessModalOpen}
        onClose={closeSuccessModal}
        title="Éxito"
        message="El estudiante se ha insertado con éxito."
      />

      {/* Modal de confirmación de eliminación */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirmar Eliminación"
        message={`¿Estás seguro de que deseas eliminar ${itemToDelete}?`}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default StudentForm;
