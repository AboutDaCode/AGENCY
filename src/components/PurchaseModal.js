// src/components/PurchaseModal.js
import React, { useState } from 'react';
import './PurchaseModal.css'; // Asegúrate de tener este archivo CSS para estilos

const PurchaseModal = ({ isOpen, onClose, offer }) => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Datos de pago:', { cardHolder, cardNumber, expiryDate, cvv, paymentMethod });
    onClose(); // Cerrar modal después de enviar
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirmar Compra</h2>
        <p>¿Deseas comprar el vuelo con la siguiente información?</p>
        <p><strong>Aerolínea:</strong> {offer.destination}</p>
        <p><strong>Desde:</strong> {offer.origin}</p>
        <p><strong>Precio:</strong> ${offer.price}</p>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="cardHolder">Nombre del Titular:</label>
            <input
              type="text"
              id="cardHolder"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="cardNumber">Número de Tarjeta:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="expiryDate">Fecha de Vencimiento:</label>
            <input
              type="text"
              id="expiryDate"
              placeholder="MM/AA"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Método de Pago:</label>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="creditCard">Tarjeta de Crédito</option>
              {/* Aquí puedes agregar más métodos de pago si es necesario */}
            </select>
          </div>

          <button type="submit">Confirmar Compra</button>
        </form>

        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default PurchaseModal;