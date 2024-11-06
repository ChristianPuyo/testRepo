import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './hamburgerMenu.module.css';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Cerrar el menú cuando cambia la ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={style.header}>
      <div className={style.hamburger_menu}>
        <div className={style.logo}>
          <Link to="/">
            StudentApp
          </Link>
        </div>

        {/* Botón de hamburguesa animado */}
        <button 
          className={`${style.hamburger_icon} ${isOpen ? style.open : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú móvil con overlay */}
        <div className={`${style.menu_overlay} ${isOpen ? style.show : ''}`} onClick={toggleMenu}>
          <nav className={`${style.menu} ${isOpen ? style.show : ''}`} onClick={e => e.stopPropagation()}>
            <Link to="/" className={location.pathname === '/' ? style.active : ''}>
              Home
            </Link>
            <Link to="/studentform" className={location.pathname === '/studentform' ? style.active : ''}>
              Perros Form
            </Link>
            <Link to="/studentlist" className={location.pathname === '/studentlist' ? style.active : ''}>
              Perros List
            </Link>
          </nav>
        </div>

        {/* Menú de escritorio */}
        <nav className={style.desktop_menu}>
          <Link to="/" className={location.pathname === '/' ? style.active : ''}>
            Home
          </Link>
          <Link to="/studentform" className={location.pathname === '/studentform' ? style.active : ''}>
            Perros Form
          </Link>
          <Link to="/studentlist" className={location.pathname === '/studentlist' ? style.active : ''}>
            Perros List
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default HamburgerMenu;