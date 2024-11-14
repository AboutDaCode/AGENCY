// src/components/Footer.js
import React, { useState } from 'react';
import './Footer.css';
import CookiePolicy from './CookiePolicy'; // Importamos el componente CookiePolicy
import PrivacyPolicy from './PrivacyPolicy'; // Importamos el componente PrivacyPolicy
import TermsAndConditions from './TermsAndConditions'; // Importamos el componente TermsAndConditions
import DoNotSell from './DoNotSell'; // Importamos el componente DoNotSell

const Footer = () => {
  const [activeContent, setActiveContent] = useState(null);

  const toggleContent = (content) => {
    setActiveContent(activeContent === content ? null : content);
  };

  const contentMap = {
    contacto: (
      <span>
        <span role="img" aria-label="Teléfono">📞</span> 611316684.<br />
        <span role="img" aria-label="Email">✉️</span> suarezsantanajavieracoray@gmail.com
      </span>
    ),
    privacidad: <PrivacyPolicy />, // Usamos el componente PrivacyPolicy aquí
    cookies: <CookiePolicy />, // Usamos el componente CookiePolicy aquí
    terminos: <TermsAndConditions />, // Usamos el componente TermsAndConditions aquí
    doNotSell: <DoNotSell />, // Usamos el componente DoNotSell aquí
  };

  return (
    <footer className="footer" id="footer">
      <div className="payment-methods">
        <img src="/images/visa.png" alt="Visa" />
        <img src="/images/master.png" alt="MasterCard" />
        <img src="/images/amex.png" alt="American Express" />
        <img src="/images/paypal.png" alt="PayPal" />
        <img src="/images/google.png" alt="Google" />
        <img src="/images/apples.png" alt="Apples" />
      </div>
      <p>&copy; 2024 Agency. Todos los derechos reservados.</p>
      <div className="footer-buttons">
        <button onClick={() => toggleContent('contacto')}>Contacto</button>
        <button onClick={() => toggleContent('privacidad')}>Política de Privacidad</button>
        <button onClick={() => toggleContent('cookies')}>Cookies</button>
        <button onClick={() => toggleContent('terminos')}>Términos y Condiciones</button>
        <button onClick={() => toggleContent('doNotSell')}>No Venda Mi Información Personal</button> {/* Nuevo botón */}
      </div>
      {activeContent && (
        <div className="footer-content">
          {typeof contentMap[activeContent] === 'string' 
            ? <p>{contentMap[activeContent]}</p> 
            : contentMap[activeContent]}
        </div>
      )}
    </footer>
  );
};

export default Footer;