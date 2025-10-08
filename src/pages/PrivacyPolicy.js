import React from 'react';
import '../styles/privacy-policy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <div className="policy-intro">
        <h1>Política de Privacidad</h1>
        <p>Última actualización: {new Date().toLocaleDateString('es-AR')}</p>
      </div>

      <div className="policy-details">
        <h2>1. Información que Recopilamos</h2>
        <p>Relvus puede recopilar información personal que usted nos proporciona voluntariamente al contactarnos a través de nuestros canales de comunicación, incluyendo pero no limitado a: nombre, dirección de correo electrónico, número de teléfono, y cualquier otra información que decida compartir.</p>

        <h2>2. Uso de la Información</h2>
        <p>La información recopilada puede ser utilizada para:</p>
        <p>- Responder a sus consultas y solicitudes de servicio</p>
        <p>- Proporcionar cotizaciones y presupuestos</p>
        <p>- Comunicarnos con usted sobre proyectos en curso</p>
        <p>- Mejorar nuestros servicios y experiencia del usuario</p>
        <p>- Cumplir con requisitos legales y regulatorios</p>

        <h2>3. Protección de Datos</h2>
        <p>Implementamos medidas de seguridad razonables para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro.</p>

        <h2>4. Compartir Información</h2>
        <p>No vendemos, intercambiamos ni transferimos su información personal a terceros sin su consentimiento, excepto cuando sea requerido por ley o para proteger nuestros derechos legales.</p>

        <h2>5. Cookies y Tecnologías Similares</h2>
        <p>Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia del usuario. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.</p>

        <h2>6. Enlaces a Terceros</h2>
        <p>Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas de privacidad de estos sitios externos.</p>

        <h2>7. Sus Derechos</h2>
        <p>Usted tiene derecho a:</p>
        <p>- Acceder a su información personal</p>
        <p>- Solicitar la corrección de información inexacta</p>
        <p>- Solicitar la eliminación de su información</p>
        <p>- Oponerse al procesamiento de su información</p>
        <p>- Retirar su consentimiento en cualquier momento</p>

        <h2>8. Menores de Edad</h2>
        <p>Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información de menores.</p>

        <h2>9. Cambios a esta Política</h2>
        <p>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios entrarán en vigencia inmediatamente después de su publicación en el sitio web.</p>

        <h2>10. Limitación de Responsabilidad</h2>
        <p>Relvus no será responsable por daños directos, indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de uso de nuestros servicios, incluyendo pero no limitado a pérdida de datos, pérdida de beneficios, o interrupción del negocio.</p>

        <h2>11. Contacto</h2>
        <p>Si tiene preguntas sobre esta política de privacidad, puede contactarnos a través de WhatsApp al +54 11 5897 9663.</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
