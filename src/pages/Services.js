import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css';

function Services() {
  return (
    <div className="services">
      <div className="services-intro">
        <h1>Nuestros Servicios</h1>
        <p>Soluciones web personalizadas para cada tipo de negocio. Desde páginas simples hasta sistemas complejos de gestión.</p>
      </div>

      <div className="service-item">
        <div className="service-header">
          <img src="/service-landing.svg" alt="Landing Page" className="service-main-icon" />
          <div>
            <h2>Landing Page</h2>
            <p className="service-subtitle">Páginas de aterrizaje efectivas que convierten visitantes en clientes</p>
          </div>
        </div>
        
        <p>Una landing page es la solución perfecta para promocionar un producto, servicio o evento específico. Diseñada para convertir visitantes en clientes potenciales con un mensaje claro y llamadas a la acción efectivas.</p>
        
        <div className="service-features">
          <h3>¿Qué incluye?</h3>
          <ul>
            <li>Diseño atractivo y profesional enfocado en conversión</li>
            <li>Responsive para todos los dispositivos</li>
            <li>Optimización SEO básica</li>
            <li>Formulario de contacto integrado</li>
            <li>Integración con redes sociales</li>
            <li>Carga ultra rápida</li>
          </ul>
        </div>

        <div className="service-ideal">
          <h3>Ideal para:</h3>
          <p>Emprendedores, freelancers, eventos, lanzamiento de productos, campañas publicitarias.</p>
        </div>

        <div className="service-pricing">
          <div className="pricing-detail">
            <span className="pricing-label">Precio</span>
            <span className="pricing-value">Desde $200.000 ARS</span>
          </div>
          <div className="pricing-detail">
            <span className="pricing-label">Tiempo de entrega</span>
            <span className="pricing-value">Desde 1 semana</span>
          </div>
        </div>

        <Link to="/contact">
          <button>Solicitar Landing Page</button>
        </Link>
      </div>

      <div className="service-item">
        <div className="service-header">
          <img src="/service-business.svg" alt="Sitio Web Empresarial" className="service-main-icon" />
          <div>
            <h2>Sitio Web Empresarial</h2>
            <p className="service-subtitle">Sitios corporativos completos que reflejan la profesionalidad de tu empresa</p>
          </div>
        </div>
        
        <p>Un sitio web empresarial completo que refleja la profesionalidad y valores de tu empresa. Incluye múltiples páginas, secciones informativas y todas las herramientas necesarias para fortalecer tu presencia en línea.</p>
        
        <div className="service-features">
          <h3>¿Qué incluye?</h3>
          <ul>
            <li>Diseño corporativo personalizado</li>
            <li>Múltiples páginas (Inicio, Servicios, Nosotros, Contacto, etc.)</li>
            <li>Sistema de navegación intuitivo</li>
            <li>Optimización SEO avanzada</li>
            <li>Blog o sección de noticias</li>
            <li>Galería de proyectos o portfolio</li>
            <li>Formularios de contacto personalizados</li>
            <li>Integración con Google Analytics</li>
          </ul>
        </div>

        <div className="service-ideal">
          <h3>Ideal para:</h3>
          <p>Empresas, estudios profesionales, agencias, organizaciones que necesitan una presencia digital sólida y completa.</p>
        </div>

        <div className="service-pricing">
          <div className="pricing-detail">
            <span className="pricing-label">Precio</span>
            <span className="pricing-value">Desde $500.000 ARS</span>
          </div>
          <div className="pricing-detail">
            <span className="pricing-label">Tiempo de entrega</span>
            <span className="pricing-value">Desde 1 semana</span>
          </div>
        </div>

        <Link to="/contact">
          <button>Solicitar Sitio Empresarial</button>
        </Link>
      </div>

      <div className="service-item">
        <div className="service-header">
          <img src="/service-cms.svg" alt="Sistema de Gestión" className="service-main-icon" />
          <div>
            <h2>Sistema de Gestión de Clientes</h2>
            <p className="service-subtitle">Plataformas personalizadas para administrar tu negocio eficientemente</p>
          </div>
        </div>
        
        <p>Una plataforma web personalizada para gestionar tu negocio de manera eficiente. Automatiza procesos, organiza información de clientes, gestiona ventas y obtén reportes en tiempo real.</p>
        
        <div className="service-features">
          <h3>¿Qué incluye?</h3>
          <ul>
            <li>Panel de administración completo</li>
            <li>Gestión de clientes y contactos</li>
            <li>Sistema de usuarios con diferentes roles</li>
            <li>Base de datos segura</li>
            <li>Reportes y estadísticas personalizadas</li>
            <li>Sistema de notificaciones</li>
            <li>Exportación de datos</li>
            <li>Integración con APIs externas</li>
            <li>Soporte y mantenimiento incluido por 3 meses</li>
          </ul>
        </div>

        <div className="service-ideal">
          <h3>Ideal para:</h3>
          <p>Empresas que necesitan gestionar clientes, ventas, inventarios o procesos internos de manera digital y automatizada.</p>
        </div>

        <div className="service-pricing">
          <div className="pricing-detail">
            <span className="pricing-label">Precio</span>
            <span className="pricing-value">Desde $3.000.000 ARS</span>
          </div>
          <div className="pricing-detail">
            <span className="pricing-label">Tiempo de entrega</span>
            <span className="pricing-value">Desde 1 mes</span>
          </div>
        </div>

        <Link to="/contact">
          <button>Solicitar Sistema Personalizado</button>
        </Link>
      </div>

      <div className="services-cta">
        <h2>¿No estás seguro cuál necesitas?</h2>
        <p>Contáctanos y te ayudamos a elegir la mejor solución para tu proyecto</p>
        <a href="https://wa.me/5491158979663" target="_blank" rel="noopener noreferrer">
          <button className="whatsapp-cta">Consultar por WhatsApp</button>
        </a>
      </div>
    </div>
  );
}

export default Services;
