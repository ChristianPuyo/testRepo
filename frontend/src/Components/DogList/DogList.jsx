import { useEffect, useState } from "react";
import useDogStore from "../../Store/DogStore";
import style from "./DogList.module.css";
import Navegador from '../Navegador/Navegador';

const DogList = () => {
    const { fetchDogs, dogs, deleteDog, updateDog } = useDogStore();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredDogs, setFilteredDogs] = useState([]);
    const [selectedDog, setSelectedDog] = useState(null);
    useEffect(() => {
        fetchDogs();
    }, []);

    useEffect(() => {
        setFilteredDogs(
            dogs.filter((dog) =>
                `${dog.razaName} ${dog.tiempoVida}`
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, dogs]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            deleteStudent(id);
        }
    };

    const handleSelectDog = (dog) => {
        setSelectedDog(dog);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setSelectedDog({
            ...selectedDog,
            [name]: value
        });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        updateDog(selectedDog.id, selectedDog);
        setSelectedDog(null);
    };

    return (
        <div className="contenedorGeneral">
            <Navegador />
            <h1>Student List</h1>
            <input
                type="text"
                placeholder="Buscar perro..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={style.searchInput}
            />
            <div className={style.container}>
                {filteredDogs.map((user) => (
                    <div key={user.id} className={style.listContainer}>
                        <h3>{user.firstName} {user.lastName}</h3>
                        <button className={style.delet} onClick={() => handleDelete(user.id)}>❌</button>
                        <button className={style.edit} onClick={() => handleSelectDog(user)}>✍️</button>
                    </div>
                ))}
            </div>
            {selectedDog && (
                <div className={style.editContainer}>
                    <h2>Edit Dog</h2>
                    <form onSubmit={handleEditSubmit}>
                        <label>
                            Nombre de Raza:
                            <input
                                type="text"
                                name="razaName"
                                value={selectedDog.razaName}
                                onChange={handleEditChange}
                            />
                        </label>
                        <label>
                            Tiempo de Vida:
                            <input
                                type="text"
                                name="tiempoVida"
                                value={selectedDog.tiempoVida}
                                onChange={handleEditChange}
                            />
                        </label>
                        <label>
                            Origen:
                            <input
                                type="text"
                                name="origen"
                                value={selectedDog.origen}
                                onChange={handleEditChange}
                            />
                        </label><label>
                            peso:
                            <input
                                type="text"
                                name="peso"
                                value={selectedDog.peso}
                                onChange={handleEditChange}
                            />
                        </label>
                        <button type="submit">Save</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default DogList;
