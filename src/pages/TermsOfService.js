import React from 'react';
import '../styles/terms-of-service.css';

function TermsOfService() {
  return (
    <div className="terms-of-service">
      <div className="terms-intro">
        <h1>Términos de Servicio</h1>
        <p>Última actualización: {new Date().toLocaleDateString('es-AR')}</p>
      </div>

      <div className="terms-details">
        <h2>1. Aceptación de los Términos</h2>
        <p>Al acceder y utilizar los servicios de Relvus, usted acepta estar legalmente vinculado por estos Términos de Servicio. Si no está de acuerdo con estos términos, no debe utilizar nuestros servicios.</p>

        <h2>2. Descripción de Servicios</h2>
        <p>Relvus ofrece servicios de desarrollo web que incluyen, pero no se limitan a: diseño y desarrollo de landing pages, sitios web empresariales, y sistemas de gestión personalizados. Los servicios específicos se detallarán en propuestas y contratos individuales.</p>

        <h2>3. Modificación de Servicios</h2>
        <p>Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de nuestros servicios en cualquier momento sin previo aviso.</p>

        <h2>4. Propiedad Intelectual</h2>
        <p>Todo el contenido, diseño, código, gráficos y materiales desarrollados por Relvus permanecen como propiedad de Relvus hasta que se complete el pago total acordado. Una vez completado el pago, los derechos de propiedad del trabajo específico se transferirán al cliente según lo acordado en el contrato.</p>

        <h2>5. Responsabilidades del Cliente</h2>
        <p>El cliente es responsable de:</p>
        <p>- Proporcionar información y materiales precisos y completos</p>
        <p>- Realizar pagos según los términos acordados</p>
        <p>- Mantener la confidencialidad de credenciales de acceso</p>
        <p>- Cumplir con todas las leyes y regulaciones aplicables</p>
        <p>- Obtener las licencias necesarias para cualquier contenido proporcionado</p>

        <h2>6. Pagos y Facturación</h2>
        <p>Los términos de pago se establecerán en cada propuesta o contrato individual. El no pago dentro de los plazos acordados puede resultar en la suspensión de servicios.</p>

        <h2>7. Garantías y Limitación de Responsabilidad</h2>
        <p>LOS SERVICIOS SE PROPORCIONAN "TAL CUAL" Y "SEGÚN DISPONIBILIDAD". RELVUS NO OTORGA GARANTÍAS DE NINGÚN TIPO, YA SEAN EXPRESAS O IMPLÍCITAS, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR, O NO INFRACCIÓN.</p>
        
        <p>EN NINGÚN CASO RELVUS SERÁ RESPONSABLE POR DAÑOS DIRECTOS, INDIRECTOS, INCIDENTALES, ESPECIALES, CONSECUENTES O PUNITIVOS, INCLUYENDO PERO NO LIMITADO A:</p>
        <p>- Pérdida de beneficios o ingresos</p>
        <p>- Pérdida de datos o información</p>
        <p>- Interrupción del negocio</p>
        <p>- Pérdida de oportunidades comerciales</p>
        <p>- Daños por uso o imposibilidad de uso de los servicios</p>

        <h2>8. Indemnización</h2>
        <p>El cliente acepta indemnizar y mantener indemne a Relvus de cualquier reclamo, demanda, pérdida, responsabilidad y gasto (incluyendo honorarios legales) que surjan del uso de nuestros servicios o del incumplimiento de estos términos.</p>

        <h2>9. Cancelación y Terminación</h2>
        <p>Cualquiera de las partes puede terminar el servicio con notificación por escrito. En caso de cancelación por parte del cliente, los pagos realizados no son reembolsables. Relvus se reserva el derecho de terminar servicios inmediatamente en caso de incumplimiento de estos términos.</p>

        <h2>10. Confidencialidad</h2>
        <p>Ambas partes acuerdan mantener confidencial cualquier información propietaria o sensible compartida durante la prestación de servicios.</p>

        <h2>11. Fuerza Mayor</h2>
        <p>Relvus no será responsable por ningún retraso o incumplimiento resultante de causas fuera de su control razonable, incluyendo pero no limitado a desastres naturales, actos de guerra, huelgas, o fallas tecnológicas.</p>

        <h2>12. Exclusión de Garantías Técnicas</h2>
        <p>Relvus no garantiza que:</p>
        <p>- Los servicios estarán libres de errores o interrupciones</p>
        <p>- Los defectos serán corregidos</p>
        <p>- Los servicios cumplirán con requisitos específicos no acordados previamente</p>
        <p>- Los resultados obtenidos serán precisos o confiables</p>

        <h2>13. Jurisdicción y Ley Aplicable</h2>
        <p>Estos términos se regirán e interpretarán de acuerdo con las leyes de la República Argentina. Cualquier disputa se resolverá en los tribunales de la Ciudad de Buenos Aires.</p>

        <h2>14. Modificaciones</h2>
        <p>Relvus se reserva el derecho de modificar estos términos en cualquier momento. El uso continuado de los servicios después de las modificaciones constituye la aceptación de los nuevos términos.</p>

        <h2>15. Divisibilidad</h2>
        <p>Si alguna disposición de estos términos se considera inválida o inaplicable, las disposiciones restantes continuarán en pleno vigor y efecto.</p>

        <h2>16. Contacto</h2>
        <p>Para preguntas sobre estos términos de servicio, puede contactarnos a través de WhatsApp al +54 11 5897 9663.</p>
      </div>
    </div>
  );
}

export default TermsOfService;
