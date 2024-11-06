import { useState } from "react";
import useStudentStore from "../../store/studentStore";
import { useNavigate } from "react-router-dom";
import styles from "./editForm.module.css";
import Modal from "../modal/modal"; // Asegúrate de que la ruta sea correcta según tu estructura de carpetas.

const EditForm = () => {
  const navigate = useNavigate();
  const { updatePerro, getPerroByid } = useStudentStore();

  const [perroData, setPerroData] = useState({
    nombre,
    raza,
    edad,
    tiempo,
    peso,
  });

  const [idSearched, setidSearched] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar el modal

  const volverAinicio = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...perroData, [name]: value });
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    const idValue = PerroData.id;
    const update = await updatePerro(dniValue, studentData);
    if (update) {
      // Limpiamos los campos después de actualizar
      setPerroData({
        nombre: "",
        raza: "",
        edad: "",
        tiempo: "",
        peso: "",
      });
      setidSearched(false); // Reiniciamos la búsqueda
      setModalOpen(true); // Abrimos el modal de éxito
    }
  };

  // Función para buscar al estudiante por DNI
  const fetchStudentData = async () => {
    const perro = await getStudentByDni(studentData.Dni);
    if (perro) {
      setStudentData({
        nombre: perro.nombre,
        raza: perro.raza,
        edad: perro.edad,
        tiempo: perro.tiempo,
        peso: perro.peso,
      });
      setDniSearched(true);
    } else {
      alert(" no encontrado");
    }
  };

  // Llamada a buscar al estudiante solo cuando el usuario termine de escribir el DNI
  const handleDniBlur = () => {
    if (studentData.id && !idSearched) {
      fetchPerroData();
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={volverAinicio} className={styles.backButton}>
        Regresar
      </button>
      <form className={styles.form} onSubmit={handleSubmitUpdate}>
        <h4 className={styles.title}>Edición </h4>

        <label className={styles.label}>
          Ingrese id:
          <input
            type="text"
            placeholder="Enter id"
            required
            name="id"
            value={perroData.id}
            onChange={handleInputChange}
            onBlur={handleDniBlur}
            className={styles.input}
          />
        </label>

        <label className={styles.label}></label>
          Ingrese nombre:
          <input
            type="text"
            placeholder="Enter name"
            required
            name="nombre"
            value={perroData.nombre}
            onChange={handleInputChange}
            className={styles.input}
          />

        <label className={styles.label}></label>
          Ingrese raza:
          <input
            type="text"
            placeholder="Enter raza"
            required
            name="raza"
            value={perroData.raza}
            onChange={handleInputChange}
            className={styles.input}
          />
        <label className={styles.label}></label>
          Ingrese edad:
          <input
            type="text"
            placeholder="Enter edad"
            required
            name="edad"
            value={perroData.edad}
            onChange={handleInputChange}
            className={styles.input}
          />
        <label className={styles.label}></label>
          Ingrese tiempo:
          <input
            type="text"
            placeholder="Enter tiempo"
            required
            name="tiempo"
            value={perroData.tiempo}
            onChange={handleInputChange}
            className={styles.input}
          />
        <label className={styles.label}></label>
          Ingrese peso:
          <input
            type="text"
            placeholder="Enter peso"
            required
            name="peso"
            value={perroData.peso}
            onChange={handleInputChange}
            className={styles.input}
          />

        <button className={styles.submitButton}>Actualizar</button>
      </form>

      {/* Modal de éxito */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)} // Cierra el modal
        title="Éxito"
        message="actualizado con éxito."
      />
    </div>
  );
};

export default EditForm;
