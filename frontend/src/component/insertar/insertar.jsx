import { useState } from "react";
// import styles from "./PerroForm.module.css";
import usePerroStore from "../../store/perroStore";
import { useNavigate } from "react-router-dom";
// import Modal from "../modal/modal"; // Asegúrate de que la ruta sea correcta según tu estructura de carpetas.

const PerroForm = () => {
  const navigate = useNavigate();
  const { addPerro } = usePerroStore();
  
  const [perroData, setPerroData] = useState({
    raza: "",
    esperanzaVida: "",
    origen: "",
    peso: ""
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerroData({ ...perroData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (addPerro(perroData)) {
      setIsSuccessModalOpen(true); // Abre el modal de éxito
      setPerroData({
        raza: "",
        esperanzaVida: "",
        origen: "",
        peso: ""
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
    // Lógica para eliminar el registro de perro
    setIsDeleteModalOpen(false);
    // Mostrar un mensaje de éxito o error si es necesario
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={volverAinicio}>
        Regresar
      </button>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h4 className={styles.title}>Insertar Perro</h4>

        <label className={styles.label}>
          Raza:
          <input
            type="text"
            placeholder="Enter Breed"
            required
            name="raza"
            value={perroData.raza}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Esperanza de Vida:
          <input
            type="text"
            placeholder="Enter Lifespan"
            required
            name="esperanzaVida"
            value={perroData.esperanzaVida}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Origen:
          <input
            type="text"
            placeholder="Enter Origin"
            required
            name="origen"
            value={perroData.origen}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Peso:
          <input
            type="text"
            placeholder="Enter Weight"
            required
            name="peso"
            value={perroData.peso}
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
        message="El perro se ha insertado con éxito."
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

export default PerroForm;
