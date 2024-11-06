import React from 'react';
import { useLocation } from 'react-router-dom';
import './Navegador.css';
import { IoHome } from "react-icons/io5";

const Navegador = () => {
    const location = useLocation();
    return (
        <div className="navbar">
            <a href="/" className={location.pathname === '/' ? 'active' : ''}><IoHome style={{ fontSize: '24px', color: 'white', marginRight: '8px' }} />Inicio</a>
            <a href="/dogform" className={location.pathname === '/dogform' ? 'active' : ''}>Dog Form</a>
            <a href="/doglist" className={location.pathname === '/doglist' ? 'active' : ''}>Dog List</a>
        </div>
    );
};

export default Navegador;
