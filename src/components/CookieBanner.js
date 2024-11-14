// src/components/CookieBanner.js
import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Aquí puedes habilitar cookies o scripts necesarios
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    // Aquí puedes bloquear cookies o scripts no esenciales
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