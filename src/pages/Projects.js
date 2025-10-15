import React, { useState } from 'react';
import '../styles/projects.css';

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentWebsite, setCurrentWebsite] = useState('');

  const openModal = (url) => {
    setCurrentWebsite(url);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentWebsite('');
    document.body.style.overflow = 'unset';
  };

  const projects = [
    {
      url: 'https://drzakharenko.com.ar',
      name: 'Dr. Zakharenko',
      description: 'Sitio web profesional para consultoría médica veterinaria'
    },
    {
      url: 'https://kalaharibiocare.com',
      name: 'Kalahari Biocare',
      description: 'E-commerce de productos naturales y wellness'
    },
    {
      url: 'https://duikertravels.com',
      name: 'Duiker Travels',
      description: 'Plataforma de reservas y turismo personalizado'
    },
    {
      url: 'https://dariazherebtsova.ru',
      name: 'Daria Zherebtsova',
      description: 'Sitio web de psicóloga'
    },
    {
      url: 'https://taradasi.com',
      name: 'Taradasi',
      description: 'Sitio web de distribuidora de equipamiento para clínicas y hospitales'
    },
    {
      url: 'https://drwatsondental.com',
      name: 'Dr. Watson Dental',
      description: 'Clínica dental con sistema de reservas online'
    },
    {
      url: 'https://maxpolinawedding.com',
      name: 'Max & Polina',
      description: 'Sitio web personal de una boda'
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-intro">
        <h1>Proyectos Completados</h1>
        <p>Algunos de los sitios web que hemos creado para nuestros clientes</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => openModal(project.url)}>
            <div className="project-preview">
              <div className="project-browser-bar">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="browser-url">{project.url.replace('https://', '')}</div>
              </div>
              <div className="project-screenshot">
                <iframe
                  src={project.url}
                  title={`${project.name} Preview`}
                  className="project-preview-iframe"
                  scrolling="no"
                />
              </div>
            </div>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

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
    </div>
  );
}

export default Projects;
