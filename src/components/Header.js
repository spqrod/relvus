import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const location = useLocation();

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={handleLogoClick}>Relvus</Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/about">Nosotros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
