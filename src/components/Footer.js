// src/components/Footer.js
import React, { useState } from 'react';
import './Footer.css'; // Importamos el CSS para el footer

const Footer = () => {
  const [activeContent, setActiveContent] = useState(null); // Estado para controlar qué contenido está activo

  const toggleContent = (content) => {
    setActiveContent(activeContent === content ? null : content); // Alterna entre mostrar y ocultar
  };

  const contentMap = {
    contacto: (
      <span>
        <span role="img" aria-label="Teléfono">📞</span> 611316684.<br />
        <span role="img" aria-label="Email">✉️</span> suarezsantanajavieracoray@gmail.com.
      </span>
    ),
    privacidad: `En Suarez Santana Javier Acoray, valoramos su privacidad. Esta política describe cómo recopilamos, usamos y protegemos su información personal.
      
      - **Recopilación de Información**: Recopilamos información personal cuando usted se registra en nuestro sitio, realiza una reserva o interactúa con nosotros. Esto puede incluir su nombre, dirección de correo electrónico, número de teléfono y detalles de pago.
      
      - **Uso de la Información**: Utilizamos su información para procesar reservas, comunicarnos con usted y mejorar nuestros servicios.
      
      - **Protección de la Información**: Implementamos medidas de seguridad para proteger su información personal contra accesos no autorizados o divulgaciones.
      
      - **Derechos del Usuario**: Tiene derecho a acceder, corregir o eliminar su información personal en cualquier momento. Para ejercer estos derechos, contáctenos a través del correo electrónico [tu-email@empresa.com].`,
    cookies: `Este sitio web utiliza cookies para mejorar la experiencia del usuario. Al utilizar nuestro sitio, usted acepta el uso de cookies.
      
      - **Qué son las Cookies**: Las cookies son pequeños archivos que se almacenan en su dispositivo mientras navega por nuestro sitio.
      
      - **Cómo Usamos las Cookies**: Utilizamos cookies para recordar sus preferencias, analizar el tráfico del sitio y personalizar contenido.
      
      - **Gestión de Cookies**: Puede gestionar sus preferencias sobre el uso de cookies a través de la configuración de su navegador. Sin embargo, deshabilitar las cookies puede afectar la funcionalidad del sitio.`,
    terminos: `Al utilizar el sitio web de Suarez Santana Javier Acoray, usted acepta cumplir con los siguientes términos.
      
      - **Uso del Servicio**: Usted se compromete a utilizar nuestros servicios solo para fines legales y conforme a todas las leyes aplicables.
      
      - **Reservas**: Todas las reservas están sujetas a disponibilidad y confirmación. Nos reservamos el derecho a cancelar reservas en caso de errores en la disponibilidad o precios.
      
      - **Modificaciones**: Nos reservamos el derecho a modificar estos términos en cualquier momento. Las modificaciones serán efectivas una vez publicadas en nuestro sitio web.`,
  };

  return (
    <footer className="footer" id="footer">
      <div className="payment-methods">
        <img src="/images/visa.png" alt="Visa" />
        <img src="/images/master.png" alt="MasterCard" />
        <img src="/images/amex.png" alt="American Express" />
        <img src="/images/paypal.png" alt="PayPal" />
      </div>
      <p>&copy; 2024 Agency. Todos los derechos reservados.</p>
      <div className="footer-buttons">
        <button onClick={() => toggleContent('contacto')}>Contacto</button>
        <button onClick={() => toggleContent('privacidad')}>Política de Privacidad</button>
        <button onClick={() => toggleContent('cookies')}>Cookies</button>
        <button onClick={() => toggleContent('terminos')}>Términos y Condiciones</button>
      </div>
      {activeContent && (
        <div className="footer-content">
          <p>{contentMap[activeContent]}</p>
        </div>
      )}
    </footer>
  );
};

export default Footer;