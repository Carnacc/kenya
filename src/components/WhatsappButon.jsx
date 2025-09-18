// WhatsappButton.jsx
import React from 'react';
import '../css/WhatsappButton.css';
import { FaWhatsapp } from "react-icons/fa"; // Importa l'icona di WhatsApp


const WhatsappButton = () => {
  const phoneNumber = "254112545258"; // <-- sostituisci con il numero reale, senza +
  const message = "Ciao! Ho bisogno di informazioni.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp style={{ marginRight: "5px" }}/>WhatsApp
    </button>
  );
};

export default WhatsappButton;
