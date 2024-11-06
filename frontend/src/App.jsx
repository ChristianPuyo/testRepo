import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DogForm from './components/dogFrom/dogform';
import HomeComponent  from './components/homecomponent/Homecomponent'



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path='/perro' element={<DogForm/>}/>
        
      </Routes>



    </BrowserRouter>
      
    </>
  )
}

export default App
