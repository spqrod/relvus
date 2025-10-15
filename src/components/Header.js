import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

function Header({ isHidden }) {
  const location = useLocation();

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`header ${isHidden ? 'hidden' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={handleLogoClick}>Relvus</Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/services" className={isActive('/services') ? 'active' : ''}>Servicios</Link></li>
            <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''}>Proyectos</Link></li>
            <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>Nosotros</Link></li>
            <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
