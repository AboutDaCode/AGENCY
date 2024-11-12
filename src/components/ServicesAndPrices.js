// src/components/ServicesAndPrices.js
import React from 'react';
import './ServicesAndPrices.css';

const ServicesAndPrices = () => {
  const services = [
    {
      name: 'Búsqueda de Vuelos',
      description: 'Acceso a nuestra plataforma avanzada de búsqueda de vuelos con opciones de filtrado y comparación de precios.',
      price: 'Gratis'
    },
    {
      name: 'Reserva de Vuelos',
      description: 'Servicio de reserva de vuelos con confirmación instantánea y selección de asientos.',
      price: '10% del precio del vuelo'
    },
    {
      name: 'Seguro de Viaje',
      description: 'Seguro integral que cubre cancelaciones, pérdida de equipaje y asistencia médica durante el viaje.',
      price: 'Desde $20 por viaje'
    },
    {
      name: 'Asistencia 24/7',
      description: 'Soporte al cliente las 24 horas, los 7 días de la semana, para cualquier consulta o emergencia durante tu viaje.',
      price: 'Incluido en todas las reservas'
    }
  ];

  return (
    <section className="services-and-prices" id="services">
      <h2>Nuestros Servicios y Precios</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p className="price">Precio: {service.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesAndPrices;