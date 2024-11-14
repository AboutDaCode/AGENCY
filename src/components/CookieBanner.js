// src/components/CookieBanner.js
/* global dataLayer */
import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    } else if (cookieConsent === 'accepted') {
      loadScripts(); // Cargar scripts si se aceptó el consentimiento
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    loadScripts(); // Cargar scripts al aceptar
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    // Aquí puedes agregar lógica para bloquear cookies o scripts no esenciales
  };

  const loadScripts = () => {
    // Ejemplo: Cargar Google Analytics
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"; // Reemplaza con tu ID de seguimiento
    script.async = true;
    document.head.appendChild(script);

    // Inicializar Google Analytics (ejemplo)
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'YOUR_TRACKING_ID'); // Reemplaza con tu ID de seguimiento
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <p>
          Este sitio web utiliza cookies para mejorar la experiencia del usuario. 
          Al continuar navegando, acepta el uso de cookies.
        </p>
        <div className="cookie-banner-buttons">
          <button onClick={handleAccept}>Aceptar</button>
          <button onClick={handleReject}>Rechazar</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;