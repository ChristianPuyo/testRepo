import { useState } from "react";
import usePerroStore from "../../store/perroStore";
import { useNavigate } from "react-router-dom";
// import styles from "./editForm.module.css";
// import Modal from "../modal/modal"; // Asegúrate de que la ruta sea correcta según tu estructura de carpetas.

const EditForm = () => {
  const navigate = useNavigate();
  const { updatePerro, getPerroByid } = usePerroStore();

  const [perroData, setPerroData] = useState({
    raza: "",
    esperanzaVida: "",
    Origen: "",
    Peso: ""
 
  });

  const [idSearched, setidSearched] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar el modal

  const volverAinicio = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerroData({ ...perroData, [name]: value });
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    const dniValue = studentData.Dni;
    const update = await updateStudent(dniValue, studentData);
    if (update) {
      // Limpiamos los campos después de actualizar
      setStudentData({
        firstName: "",
        lastNameP: "",
        lastNameM: "",
        Dni: "",
        Age: "",
        Direccion: "",
        institucion: "",
      });
      setDniSearched(false); // Reiniciamos la búsqueda
      setModalOpen(true); // Abrimos el modal de éxito
    }
  };

  // Función para buscar al estudiante por DNI
  const fetchStudentData = async () => {
    const student = await getStudentByDni(studentData.Dni);
    if (student) {
      setStudentData({
        firstName: student.firstName,
        lastNameP: student.lastNameP,
        lastNameM: student.lastNameM,
        Dni: student.Dni,
        Age: student.Age,
        Direccion: student.Direccion,
        institucion: student.institucion,
      });
      setDniSearched(true);
    } else {
      alert("Estudiante no encontrado");
    }
  };

  // Llamada a buscar al estudiante solo cuando el usuario termine de escribir el DNI
  const handleDniBlur = () => {
    if (studentData.Dni && !dniSearched) {
      fetchStudentData();
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={volverAinicio} className={styles.backButton}>
        Regresar
      </button>
      <form className={styles.form} onSubmit={handleSubmitUpdate}>
        <h4 className={styles.title}>Edición de Usuario</h4>

        <label className={styles.label}>
          Ingrese DNI:
          <input
            type="text"
            placeholder="Enter DNI"
            required
            name="Dni"
            value={studentData.Dni}
            onChange={handleInputChange}
            onBlur={handleDniBlur}
            className={styles.input}
          />
        </label>

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
            placeholder="Enter Lastname"
            required
            name="lastNameM"
            value={studentData.lastNameM}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Edad de estudiante:
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
          Dirección de estudiante:
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
            placeholder="Enter School"
            required
            name="institucion"
            value={studentData.institucion}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <button className={styles.submitButton}>Actualizar</button>
      </form>

      {/* Modal de éxito */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)} // Cierra el modal
        title="Éxito"
        message="Estudiante actualizado con éxito."
      />
    </div>
  );
};

export default EditForm;
