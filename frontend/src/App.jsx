import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importa BrowserRouter
import InicioComponente from "./components/inicioComponente/inicioComponente";
import StudenForm from "./components/studentForm/StudentForm";
import StudentList from "./components/studentList/studentList";
import EditForm from "./components/editForm/editForm";
import EliminarUsuario from "./components/eliminarUsuario/eliminarUsuario";
// import ActualizarEstudiantes from "./components/actualizarForm/actualizarDatos";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InicioComponente />} />
          <Route path="/student" element={<StudenForm />} />
          <Route path="/studentList" element={<StudentList />} />
          <Route path="/editForm" element={<EditForm />} />
          <Route path="/eliminarUsuario" element={<EliminarUsuario/>} />
          {/* <Route path="/actualizarEstudiantes" element={<ActualizarEstudiantes/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
