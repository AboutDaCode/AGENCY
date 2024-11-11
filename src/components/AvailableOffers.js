// src/components/AvailableOffers.js
import React from 'react';
import { Plane, DollarSign, MapPin } from 'lucide-react'; // Asegúrate de tener lucide-react instalado
import './AvailableOffers.css';

const AvailableOffers = () => {
  const offers = [
    { destination: 'París', origin: 'Madrid', price: 150 },
    { destination: 'Nueva York', origin: 'Barcelona', price: 450 },
    { destination: 'Tokio', origin: 'Londres', price: 700 },
    { destination: 'Roma', origin: 'Berlín', price: 120 },
  ];

  return (
    <section className="available-offers" id="offers">
      <h2>Ofertas Especiales</h2>
      <p>¡Aprovecha nuestras increíbles ofertas en vuelos!</p>
      <div className="offers-container">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <Plane className="offer-icon" />
            <h3>{offer.destination}</h3>
            <p><MapPin className="icon" /> Desde {offer.origin}</p>
            <p className="price"><DollarSign className="icon" /> Desde ${offer.price}</p>
            <button className="book-now">Reservar Ahora</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvailableOffers;