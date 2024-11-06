import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeComponents from './Components/HomeComponents/HomeComponents'
import DogForm from './Components/DogForm/DogForm'
import DogList from './Components/DogList/DogList'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponents/>} />
          <Route path='/dogform' element={<DogForm/>} />
          <Route path='/doglist' element={<DogList/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
