// src/components/LegalInformation.js
import React, { useState } from 'react';
import './LegalInformation.css';

const LegalInformation = () => {
  const [activePolicy, setActivePolicy] = useState(null); // Estado para controlar qué política está activa

  const policies = [
    {
      id: 1,
      title: 'Política de Privacidad',
      content: `En Suarez Santana Javier Acoray, valoramos su privacidad. Esta política describe cómo recopilamos, usamos y protegemos su información personal.
      
      - **Recopilación de Información**: Recopilamos información personal cuando usted se registra en nuestro sitio, realiza una reserva o interactúa con nosotros. Esto puede incluir su nombre, dirección de correo electrónico, número de teléfono y detalles de pago.
      
      - **Uso de la Información**: Utilizamos su información para procesar reservas, comunicarnos con usted y mejorar nuestros servicios.
      
      - **Protección de la Información**: Implementamos medidas de seguridad para proteger su información personal contra accesos no autorizados o divulgaciones.
      
      - **Derechos del Usuario**: Tiene derecho a acceder, corregir o eliminar su información personal en cualquier momento. Para ejercer estos derechos, contáctenos a través del correo electrónico [tu-email@empresa.com].`
    },
    {
      id: 2,
      title: 'Términos y Condiciones',
      content: `Al utilizar el sitio web de Suarez Santana Javier Acoray, usted acepta cumplir con los siguientes términos:
      
      - **Uso del Servicio**: Usted se compromete a utilizar nuestros servicios solo para fines legales y conforme a todas las leyes aplicables.
      
      - **Reservas**: Todas las reservas están sujetas a disponibilidad y confirmación. Nos reservamos el derecho a cancelar reservas en caso de errores en la disponibilidad o precios.
      
      - **Modificaciones**: Nos reservamos el derecho a modificar estos términos en cualquier momento. Las modificaciones serán efectivas una vez publicadas en nuestro sitio web.`
    },
    {
      id: 3,
      title: 'Política de Cookies',
      content: `Este sitio web utiliza cookies para mejorar la experiencia del usuario. Al utilizar nuestro sitio, usted acepta el uso de cookies.
      
      - **Qué son las Cookies**: Las cookies son pequeños archivos que se almacenan en su dispositivo mientras navega por nuestro sitio.
      
      - **Cómo Usamos las Cookies**: Utilizamos cookies para recordar sus preferencias, analizar el tráfico del sitio y personalizar contenido.
      
      - **Gestión de Cookies**: Puede gestionar sus preferencias sobre el uso de cookies a través de la configuración de su navegador. Sin embargo, deshabilitar las cookies puede afectar la funcionalidad del sitio.`
    }
  ];

  const togglePolicy = (id) => {
    setActivePolicy(activePolicy === id ? null : id); // Alterna entre mostrar y ocultar
  };

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
        {policies.map(policy => (
          <div key={policy.id} className="policy-item">
            <p>{policy.title}: 
              <button className="policy-button" onClick={() => togglePolicy(policy.id)}>
                {activePolicy === policy.id ? 'Cerrar' : 'Ver política'}
              </button>
            </p>
            {activePolicy === policy.id && (
              <div className="policy-content">
                <p>{policy.content}</p>
              </div>
            )}
          </div>
        ))}
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