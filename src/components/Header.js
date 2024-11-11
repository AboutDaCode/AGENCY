// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><a href="#hero">Inicio</a></li>
          <div className="nav-right">
            <li><a href="#offers">Ofertas</a></li>
            <li><a href="#footer">Contacto</a></li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;