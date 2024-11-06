import React, { useEffect } from 'react';
import styles from './modal.module.css'; // Asegúrate de que la ruta sea correcta

const Modal = ({ isOpen, onClose, title, message }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      },900); // Cierra el modal después de 3 segundos
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3>{title}</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.checkIcon}>
            <span role="img" aria-label="success">✅</span>
          </div>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
