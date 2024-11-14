// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import AvailableOffers from './components/AvailableOffers';
import ServicesAndPrices from './components/ServicesAndPrices';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner'; // Importamos el nuevo componente
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchData) => {
    console.log('Búsqueda realizada:', searchData);
    // Simular una búsqueda de vuelos
    const mockFlights = [
      {
        airline: 'AeroLine',
        flightNumber: 'AL123',
        departureTime: '10:00',
        arrivalTime: '12:00',
        duration: '2h',
        price: 150,
        availableSeats: 20
      },
      {
        airline: 'SkyHigh',
        flightNumber: 'SH456',
        departureTime: '14:30',
        arrivalTime: '16:45',
        duration: '2h 15m',
        price: 180,
        availableSeats: 15
      }
    ];
    setSearchResults(mockFlights);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="search-container">
        <SearchForm onSearch={handleSearch} />
        <SearchResults flights={searchResults} />
      </div>
      <AvailableOffers />
      <ServicesAndPrices />
      <Footer />
      <CookieBanner /> {/* Agregamos el nuevo componente CookieBanner aquí */}
    </div>
  );
}

export default App;