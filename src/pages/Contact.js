import React from 'react';
import '../styles/contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-intro">
        <h1>Contacto</h1>
        <p>¿Tenés un proyecto en mente? Escribinos por WhatsApp y charlamos</p>
      </div>

      <div className="contact-whatsapp">
        <a href="https://wa.me/5491158979663" target="_blank" rel="noopener noreferrer">
          <button className="whatsapp-button">Contactar por WhatsApp</button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
