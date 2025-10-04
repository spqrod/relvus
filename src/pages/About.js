import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';

function About() {
  return (
    <div className="about">
      <section className="intro-section">
        <h1>Sobre Nosotros</h1>
        <p>Somos un equipo apasionado por crear experiencias web excepcionales. Desde Colegiales, Buenos Aires, ayudamos a empresas y emprendedores a tener presencia digital de calidad.</p>
      </section>

      <section className="team-section">
        <h2>Nuestro Equipo</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/rodion.jpg" alt="Rodion" className="member-image" />
            <h3>Rodion</h3>
            <p>Full-Stack Developer</p>
            <p className="member-bio">Desarrollador con experiencia en React, Node.js y diseño de sistemas escalables.</p>
          </div>
          <div className="team-member">
            <img src="/max.jpg" alt="Sasha" className="member-image" />
            <h3>Sasha</h3>
            <p>Designer</p>
            <p className="member-bio">Diseñadora especializada en UI/UX, creando interfaces intuitivas y atractivas.</p>
          </div>
          <div className="team-member">
            <img src="/sasha.jpg" alt="Max" className="member-image" />
            <h3>Max</h3>
            <p>Marketer</p>
            <p className="member-bio">Especialista en marketing digital y estrategias de conversión.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>¿Querés trabajar con nosotros?</h2>
        <p>Estamos listos para ayudarte a hacer crecer tu negocio en línea</p>
        <Link to="/contact">
          <button>Contactanos</button>
        </Link>
      </section>
    </div>
  );
}

export default About;
