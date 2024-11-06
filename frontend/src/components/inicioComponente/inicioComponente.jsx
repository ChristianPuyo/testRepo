import React from 'react';
import style from "./inicio.module.css";
import { useNavigate } from 'react-router-dom';

const InicioComponente = () => {
  const navigate = useNavigate();

  const iraEdit = () => {
    navigate("/editPerro");
  };
  const handleClick = () => {
    navigate("/perroList");
  };
  const handlenviaraRegistro = () => {
    navigate("/perro");
  };
  const eliminarUsuario = () => {
    navigate("/eliminarperro");
  };

  return (
    <div className={style.inicioPadre}>
      <nav className={style.nav}>
        <h4 className={style.title}>IESTP Suiza -EJERCICIO DE CRUD</h4>
      </nav>
      <div className={style.botones}>
        <button className={style.button} onClick={handlenviaraRegistro}>
          Agregar Usuario
        </button>
        <button className={style.button} onClick={iraEdit}>
          Editar Usuario
        </button>
        <button className={style.button} onClick={eliminarUsuario}>
          Eliminar Usuario
        </button>
        <button className={style.button} onClick={handleClick}>
          Listar Usuarios
        </button>
      </div>
    </div>
  );
};

export default InicioComponente;
