// src/components/SearchResults.js
import React from 'react';
import './SearchResults.css';

const SearchResults = ({ flights }) => {
  return (
    <div className="search-results-container">
      <div className="search-results">
        <h2>Resultados de la búsqueda</h2>
        {flights.length === 0 ? (
          <p>No se encontraron vuelos.</p>
        ) : (
          <ul className="flight-list">
            {flights.map((flight, index) => (
              <li key={index} className="flight-item">
                <div className="flight-info">
                  <span className="airline">{flight.airline}</span>
                  <span className="flight-number">{flight.flightNumber}</span>
                </div>
                <div className="flight-times">
                  <span className="departure">{flight.departureTime}</span>
                  <span className="arrival">{flight.arrivalTime}</span>
                </div>
                <div className="flight-details">
                  <span className="duration">Duración: {flight.duration}</span>
                  <span className="price">Precio: ${flight.price}</span>
                  <span className="seats">Asientos disponibles: {flight.availableSeats}</span>
                </div>
                <button className="select-flight" onClick={() => console.log('Vuelo seleccionado:', flight)}>
                  Seleccionar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="search-image"></div> {/* Contenedor para la imagen */}
    </div>
  );
};

export default SearchResults;