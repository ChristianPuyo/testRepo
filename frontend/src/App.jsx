import './App.css'
import StudentForm from './components/dogForm/StudentForm'
import {BrowserRouter, Routes, Route} from 'react-router-dom'  // esto envuelve todo
import StudentList from './components/dogList/dogList'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/perro' element={<StudentForm></StudentForm>}/>
          <Route path='/perroLista' element={<StudentList></StudentList>}/>
 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
