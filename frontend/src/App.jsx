import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeComponent from './components/HomeComponet/HomeComponent'
import PerroForm from './components/HomeComponet/PerroForm/PerroForm'

  function App() {


    return (
      <>
        bro
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeComponent/>} />
            <Route path='/form' element={<PerroForm/>}/>
          </Routes>


        </BrowserRouter>

      </>
    )
  }

export default App
