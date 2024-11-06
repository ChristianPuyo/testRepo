import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importa BrowserRouter
import InicioComponente from './component/inicio/inicio';
import PerroForm from './component/insertar/insertar';
function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<InicioComponente />} />
          <Route path="/perroFrom" element={<PerroForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
