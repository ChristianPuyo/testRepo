import { useState } from "react";
import usePerroStore from "../../store/perroStore";
import style from './PeroForm.module.css';

const PerroForm = () => {
  const { addPerro } = usePerroStore();
  const [perroData, setPerroData] = useState({
    nombreRaza: "",
    esperanzaVida: "",
    origen:"",
    peso:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerroData({
      ...perroData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addPerro(perroData);
    setPerroData({ nombreRaza: "", esperanzaVida: "",origen:"",peso:"" });
    alert("Perro Added Successfully");
  };

  return (
    <div className={style.pageContainer}> 
      <h1 className={style.title}>Dog Form</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          placeholder="Enter Raza dog"
          required
          name="nombreRaza"
          value={perroData.nombreRaza}
          onChange={handleInputChange}
          className={style.input}
        />
        <input
          type="text"
          placeholder="Enter numero esperanza Vida"
          required
          name="esperanzaVida"
          value={perroData.esperanzaVida}
          onChange={handleInputChange}
          className={style.input}
        />
        <input
          type="text"
          placeholder="Enter origen"
          required
          name="origen"
          value={perroData.origen}
          onChange={handleInputChange}
          className={style.input}
        />
        <input
          type="text"
          placeholder="Enter peso"
          required
          name="peso"
          value={perroData.peso}
          onChange={handleInputChange}
          className={style.input}
        />
        <button type="submit" className={style.button}>Save</button>
      </form>
    </div>
  );
};

export default PerroForm;