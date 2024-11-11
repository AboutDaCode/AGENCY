// src/components/SearchForm.js
import React, { useState } from 'react';
import { MapPin, Calendar, Users } from 'lucide-react'; // Cambiamos Airplane por MapPin
import './SearchForm.css';

const SearchForm = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ origin, destination, departureDate, passengers });
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="origin">Origen</label>
        <div className="input-container">
          <MapPin className="icon" />
          <input
            type="text"
            id="origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
            placeholder="Ciudad de origen"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="destination">Destino</label>
        <div className="input-container">
          <MapPin className="icon" />
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
            placeholder="Ciudad de destino"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="departureDate">Fecha de Salida</label>
        <div className="input-container">
          <Calendar className="icon" />
          <input
            type="date"
            id="departureDate"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="passengers">Pasajeros</label>
        <div className="input-container">
          <Users className="icon" />
          <input
            type="number"
            id="passengers"
            value={passengers}
            onChange={(e) => setPassengers(parseInt(e.target.value))}
            min="1"
            required
          />
        </div>
      </div>
      <button type="submit" className="search-button">Buscar Vuelos</button>
    </form>
  );
};

export default SearchForm;