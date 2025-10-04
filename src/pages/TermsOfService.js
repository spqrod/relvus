import React from 'react';
import '../styles/terms-of-service.css';

function TermsOfService() {
  return (
    <div className="terms-of-service">
      <section className="terms-intro">
        <h1>Términos de Servicio</h1>
        <p>Al usar Llama Web, aceptás estos términos. Leelos bien, boludo.</p>
      </section>
      <section className="terms-details">
        <h2>Uso del Sitio</h2>
        <p>Podés navegar libre, pero no copies nuestro contenido sin permiso.</p>
        <h2>Servicios</h2>
        <p>Ofrecemos desarrollo web con garantía de calidad, pero no nos hacemos cargo de errores tuyos.</p>
        <h2>Limitaciones</h2>
        <p>No somos responsables por daños indirectos. Todo bajo ley argentina.</p>
      </section>
    </div>
  );
}

export default TermsOfService;
