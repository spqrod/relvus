import React from 'react';
import '../styles/privacy-policy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <section className="policy-intro">
        <h1>Política de Privacidad</h1>
        <p>En Llama Web, cuidamos tus datos como a un asado en domingo. Acá te explicamos cómo manejamos tu info personal.</p>
      </section>
      <section className="policy-details">
        <h2>Recolección de Datos</h2>
        <p>Recolectamos solo lo necesario, como nombre, email y eso, cuando nos contactás.</p>
        <h2>Uso de Datos</h2>
        <p>Usamos tus datos para responder consultas y mejorar nuestros servicios, nada más.</p>
        <h2>Seguridad</h2>
        <p>Tus datos están seguros con nosotros, che. No los compartimos con terceros sin tu permiso.</p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
