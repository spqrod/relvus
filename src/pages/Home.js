import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <img src="/hero-abstract.svg" alt="Abstract Form" className="hero-image" />
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
                <img src="/service-landing.svg" alt="Landing Page" />
              </div>
              <h3>Landing Page</h3>
              <p>Páginas de aterrizaje efectivas que convierten visitantes en clientes</p>
              <div className="service-details">
                <p className="service-price">Desde $200.000 ARS</p>
                <p className="service-time">Desde 1 semana</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <img src="/service-business.svg" alt="Sitio Web Empresarial" />
              </div>
              <h3>Sitio Web Empresarial</h3>
              <p>Sitios corporativos completos que reflejan la profesionalidad de tu empresa</p>
              <div className="service-details">
                <p className="service-price">Desde $500.000 ARS</p>
                <p className="service-time">Desde 1 semana</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <img src="/service-cms.svg" alt="Sistema de Gestión" />
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
              <img src="/reviewer-1.jpg" alt="Santiago López" className="reviewer-image" />
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
              <img src="/reviewer-2.jpg" alt="Lucía Martínez" className="reviewer-image" />
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
              <img src="/reviewer-3.jpg" alt="Diego Fernández" className="reviewer-image" />
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
