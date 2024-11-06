import React, { useState } from "react";
import styles from "./eliminarUsuario.module.css";
import { useNavigate } from "react-router-dom";
import useStudentStore from "../../store/studentStore";

const EliminarUsuario = () => {
  const [Dni, setDni] = useState({
    Dni: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { deleteStudent } = useStudentStore();

  const volverAinicio = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDni({ ...Dni, [name]: value });
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    // Abrir el modal de confirmación
    setIsModalOpen(true);
  };

  const confirmarEliminacion = async () => {
    const dniValue = Dni.Dni; // Obtén solo el valor de Dni
    const deleted = await deleteStudent(dniValue); // Pasa solo el valor

    if (deleted) {
      alert("Estudiante Eliminado");
      setDni({
        Dni: "",
      });
    }  
    else if(deleted) {
      alert("NO SE ECONTRO AL ESTUDIANTE");
    }else{
      alert("ERROR AL ELIMINAR")
    }

    // Cerrar el modal después de la eliminación
    setIsModalOpen(false);
  };

  const cancelarEliminacion = () => {
    // Cerrar el modal sin eliminar
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <button onClick={volverAinicio} className={styles.backButton}>
        Regresar
      </button>

      <form className={styles.form} onSubmit={handleDeleteClick}>
        <h2 className={styles.title}>ELIMINAR USUARIO</h2>
        <div className={styles.dataSection}>
          <h3 className={styles.subtitle}>Ingrese DNI de la persona a eliminar:</h3>
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Dni"
            className={styles.input}
            name="Dni"
            value={Dni.Dni}
          />
          <button type="button" onClick={handleDeleteClick} className={styles.deleteButton}>
            Eliminar
          </button>
        </div>
      </form>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>¿Está seguro que desea eliminar al estudiante?</h3>
            <div className={styles.modalActions}>
              <button onClick={confirmarEliminacion} className={styles.confirmButton}>
                Confirmar
              </button>
              <button onClick={cancelarEliminacion} className={styles.cancelButton}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EliminarUsuario;
 