// src/components/AvailableOffers.js
import React, { useState } from 'react';
import { Plane, DollarSign, MapPin } from 'lucide-react'; // Asegúrate de tener lucide-react instalado
import PurchaseModal from './PurchaseModal'; // Importamos el nuevo componente modal
import './AvailableOffers.css';

const AvailableOffers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const offers = [
    { destination: 'París', origin: 'Madrid', price: 150 },
    { destination: 'Nueva York', origin: 'Barcelona', price: 450 },
    { destination: 'Tokio', origin: 'Londres', price: 700 },
    { destination: 'Roma', origin: 'Berlín', price: 120 },
    { destination: 'Sídney', origin: 'Los Ángeles', price: 800 },
    { destination: 'Dubái', origin: 'Moscú', price: 350 },
    { destination: 'Río de Janeiro', origin: 'Lisboa', price: 500 },
    { destination: 'Bangkok', origin: 'Ámsterdam', price: 600 }
  ];

  const handleOfferClick = (offer) => {
    setSelectedOffer(offer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOffer(null);
  };

  return (
    <section className="available-offers" id="offers">
      <h2>Ofertas Especiales</h2>
      <p>¡Aprovecha nuestras increíbles ofertas en vuelos!</p>
      <div className="offers-container">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card" onClick={() => handleOfferClick(offer)}>
            <Plane className="offer-icon" />
            <h3>{offer.destination}</h3>
            <p><MapPin className="icon" /> Desde {offer.origin}</p>
            <p className="price"><DollarSign className="icon" /> Desde ${offer.price}</p>
            <button className="book-now">Reservar Ahora</button>
          </div>
        ))}
      </div>

      {/* Modal de compra */}
      <PurchaseModal isOpen={isModalOpen} onClose={closeModal} offer={selectedOffer} />
    </section>
  );
};

export default AvailableOffers;