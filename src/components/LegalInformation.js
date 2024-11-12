// src/components/LegalInformation.js
import React from 'react';
import './LegalInformation.css';

const LegalInformation = () => {
  return (
    <div className="legal-information">
      <h1>Información Legal</h1>
      
      <section>
        <h2>Información de la Empresa</h2>
        <p>Nombre: Suarez Santana Javier Acoray</p>
        <p>NIF: 42423336C</p>
        <p>Dirección: Plaza Santa Lucia 9, Santa Lucia de Tirajana, 35280</p>
      </section>

      <section>
        <h2>Contacto</h2>
        <p>Teléfono: [Añadir número de teléfono]</p>
        <p>Email: [Añadir dirección de email]</p>
        <p>Formulario de contacto: <a href="/contacto">Contactar</a></p>
      </section>

      <section>
        <h2>Políticas</h2>
        <p>Política de privacidad: <a href="/privacidad">Ver política</a></p>
        <p>Términos y condiciones: <a href="/terminos">Ver términos</a></p>
        <p>Política de cookies: <a href="/cookies">Ver política</a></p>
      </section>

      <section>
        <h2>Información Adicional</h2>
        <p>Moneda de transacción: Euro (€)</p>
        <p>Registro de agencia de viajes: [Añadir número de registro si aplica]</p>
      </section>
    </div>
  );
};

export default LegalInformation;