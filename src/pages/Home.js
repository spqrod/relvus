import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import heroImage from '../images/hero-abstract.svg';
import serviceLanding from '../images/service-landing.svg';
import serviceBusiness from '../images/service-business.svg';
import serviceCms from '../images/service-cms.svg';
import reviewer1 from '../images/reviewer-1.jpg';
import reviewer2 from '../images/reviewer-2.jpg';
import reviewer3 from '../images/reviewer-3.jpg';

function Home({ setIsModalOpen }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentWebsite, setCurrentWebsite] = useState('');

  const openModal = (url) => {
    setCurrentWebsite(url);
    setModalOpen(true);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentWebsite('');
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <img src={heroImage} alt="Abstract Form" className="hero-image" />
          <div className="text-container">
            <h1>Creamos tu sitio web</h1>
            <p>Diseño y desarrollo web profesional en Argentina</p>
            <Link to="/contact">
              <button>Comenzar proyecto</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Nuestros Servicios</h2>
        <div className="services-content">
          <div className="services-items">
            <div className="service-item">
              <div className="service-icon">
                <img src={serviceLanding} alt="Landing Page" />
              </div>
              <h3>Landing Page</h3>
              <p>Páginas de aterrizaje efectivas que convierten visitantes en clientes</p>
              <div className="service-details">
                <p className="service-price">Desde $400.000 ARS</p>
                <p className="service-time">Desde 1 semana</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <img src={serviceBusiness} alt="Sitio Web Empresarial" />
              </div>
              <h3>Sitio Web Empresarial</h3>
              <p>Sitios corporativos completos que reflejan la profesionalidad de tu empresa</p>
              <div className="service-details">
                <p className="service-price">Desde $700.000 ARS</p>
                <p className="service-time">Desde 1 semana</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <img src={serviceCms} alt="Sistema de Gestión" />
              </div>
              <h3>Sistema de Gestión de Clientes</h3>
              <p>Plataformas personalizadas para administrar tu negocio eficientemente</p>
              <div className="service-details">
                <p className="service-price">Desde $3.000.000 ARS</p>
                <p className="service-time">Desde 1 mes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h2>Proyectos Completados</h2>
        <p className="projects-intro">Algunos de los sitios web que hemos creado para nuestros clientes</p>
        <div className="projects-grid">
          <div className="project-card" onClick={() => openModal('https://drzakharenko.com.ar')}>
            <div className="project-preview">
              <div className="project-browser-bar">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="browser-url">drzakharenko.com.ar</div>
              </div>
              <div className="project-screenshot">
                <iframe
                  src="https://drzakharenko.com.ar"
                  title="Dr. Zakharenko Preview"
                  className="project-preview-iframe"
                  scrolling="no"
                />
              </div>
            </div>
            <div className="project-info">
              <h3>Dr. Zakharenko</h3>
              <p>Sitio web profesional para consultoría médica veterinaria</p>
            </div>
          </div>

          <div className="project-card" onClick={() => openModal('https://kalaharibiocare.com')}>
            <div className="project-preview">
              <div className="project-browser-bar">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="browser-url">kalaharibiocare.com</div>
              </div>
              <div className="project-screenshot">
                <iframe
                  src="https://kalaharibiocare.com"
                  title="Kalahari Biocare Preview"
                  className="project-preview-iframe"
                  scrolling="no"
                />
              </div>
            </div>
            <div className="project-info">
              <h3>Kalahari Biocare</h3>
              <p>E-commerce de productos naturales y wellness</p>
            </div>
          </div>

          <div className="project-card" onClick={() => openModal('https://duikertravels.com')}>
            <div className="project-preview">
              <div className="project-browser-bar">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="browser-url">duikertravels.com</div>
              </div>
              <div className="project-screenshot">
                <iframe
                  src="https://duikertravels.com"
                  title="Duiker Travels Preview"
                  className="project-preview-iframe"
                  scrolling="no"
                />
              </div>
            </div>
            <div className="project-info">
              <h3>Duiker Travels</h3>
              <p>Plataforma de reservas y turismo personalizado</p>
            </div>
          </div>
        </div>
        <div className="projects-cta">
          <Link to="/projects">
            <button>Ver más proyectos</button>
          </Link>
        </div>
      </section>

      {modalOpen && (
        <>
          <div className="modal-backdrop" onClick={closeModal}></div>
          <div className="website-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>✕</button>
              <iframe
                src={currentWebsite}
                title="Website Preview"
                className="website-iframe"
              />
            </div>
          </div>
        </>
      )}

      <section className="advantages-section">
        <h2>¿Por qué elegirnos?</h2>
        <div className="advantages-content">
          <ul>
            <li>
              <span className="advantage-icon">🚀</span>
              <span>Diseños modernos y profesionales</span>
            </li>
            <li>
              <span className="advantage-icon">⚡</span>
              <span>Carga rápida y optimizada</span>
            </li>
            <li>
              <span className="advantage-icon">📱</span>
              <span>Responsive en todos los dispositivos</span>
            </li>
            <li>
              <span className="advantage-icon">🎯</span>
              <span>Enfoque en resultados</span>
            </li>
            <li>
              <span className="advantage-icon">📍</span>
              <span>Equipo local diseñando desde Colegiales, Buenos Aires</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="reviews-section">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="reviews-static">
          <div className="review-item">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Excelente trabajo, superaron nuestras expectativas. El sitio quedó increíble y las ventas aumentaron notablemente."</p>
            <div className="reviewer-info">
              <img src={reviewer1} alt="Santiago López" className="reviewer-image" />
              <div>
                <strong>Santiago López</strong>
                <p>Director de E-commerce</p>
              </div>
            </div>
          </div>
          <div className="review-item">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Muy profesionales y atentos a cada detalle. La comunicación fue excelente durante todo el proyecto."</p>
            <div className="reviewer-info">
              <img src={reviewer3} alt="Lucía Martínez" className="reviewer-image" />
              <div>
                <strong>Lucía Martínez</strong>
                <p>CEO Startup Tech</p>
              </div>
            </div>
          </div>
          <div className="review-item">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"El mejor equipo con el que trabajé. Entregaron antes de tiempo y el resultado superó mis expectativas."</p>
            <div className="reviewer-info">
              <img src={reviewer2} alt="Diego Fernández" className="reviewer-image" />
              <div>
                <strong>Diego Fernández</strong>
                <p>Gerente de Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>¿Listo para comenzar?</h2>
        <p>Contáctanos hoy y hagamos realidad tu proyecto web</p>
        <a href="https://wa.me/5491158979663" target="_blank" rel="noopener noreferrer">
          <button className="whatsapp-button">Contactar por WhatsApp</button>
        </a>
      </section>
    </div>
  );
}

export default Home;
