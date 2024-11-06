import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent/HomeComponent';
import PerroForm from './components/perroForm/PerroForm';
import HamburgerMenu from './components/hamburgerMenu/HamburgerMenu';
import './App.css';
import PerroList from './components/perroList/PerroList';


function App() {
  return (
    <>
      <BrowserRouter>
        <HamburgerMenu/>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/studentform" element={<PerroForm />} />
          <Route path="/studentlist" element={<PerroList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
