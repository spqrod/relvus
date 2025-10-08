import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-section footer-brand">
          <Link to="/" className="footer-logo">Relvus</Link>
          <p className="footer-description">Desarrollo web profesional desde Colegiales, Buenos Aires</p>
          <p className="footer-love">Desde Buenos Aires con amor 💙</p>
        </div>

        <div className="footer-section">
          <h4>Navegación</h4>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/about">Nosotros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Servicios</h4>
          <ul className="footer-links">
            <li><Link to="/services">Landing Page</Link></li>
            <li><Link to="/services">Sitio Web Empresarial</Link></li>
            <li><Link to="/services">Sistema de Gestión</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul className="footer-links">
            <li><Link to="/privacy-policy">Política de Privacidad</Link></li>
            <li><Link to="/terms-of-service">Términos de Servicio</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Relvus.com.ar - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
