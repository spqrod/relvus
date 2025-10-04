import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">relvus</Link>
          <p className="footer-tagline">Creando experiencias web excepcionales en Argentina</p>
        </div>
        
        <nav className="footer-nav">
          <div className="footer-column">
            <h3>Navegación</h3>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/services">Servicios</Link></li>
              <li><Link to="/about">Nosotros</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><Link to="/privacy-policy">Política de Privacidad</Link></li>
              <li><Link to="/terms-of-service">Términos de Servicio</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      
      <div className="footer-bottom">
        <p className="footer-love">Desde Buenos Aires con amor 💙</p>
        <p>&copy; {new Date().getFullYear()} relvus.com.ar - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
