// src/components/CookieBanner.js
import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-banner">
        <h2>Política de Cookies</h2>
        <p>
          Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación. Si continúa navegando, consideramos que acepta su uso. Puede cambiar la configuración u obtener más información en nuestra política de cookies.
        </p>
        <div className="cookie-buttons">
          <button onClick={handleAccept}>Aceptar</button>
          <button onClick={handleReject}>Rechazar</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;