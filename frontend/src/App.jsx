import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import StudentForm from './components/DogForm/DogForm'
import StudentList from './components/Doglist/Doglist'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StudentForm/>}/>
          <Route path='/list' element={<StudentList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

