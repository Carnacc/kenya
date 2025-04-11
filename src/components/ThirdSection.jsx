import React from "react";
import "../css/ThirdSection.css";

// Immagini (assumendo che 'travelImage' sia l'immagine scaricata da Freepik)
import safariImage from "../images/safari.jpg";
import travelImage from "../images/travel.jpg";

function ThirdSection() {
  return (
    <div className="third-section">
      {/* Colonna di sinistra: contiene testo in alto e seconda immagine in basso */}
      <div className="third-section-left">
        
        {/* Testo in alto */}
        <div className="third-section-text-container">
          <h2 className="third-section-title">Muoviti Senza Pensieri</h2>
          <p className="third-section-subtitle">
            Dimentica lo stress degli spostamenti! Offriamo servizi di trasporto affidabili
            e confortevoli per garantirti un viaggio senza intoppi. Dai transfer aeroportuali
            agli spostamenti tra città e riserve naturali, viaggia in sicurezza con autisti
            esperti e mezzi attrezzati per ogni tipo di avventura.
          </p>
          <button className="third-section-button">Scopri di più</button>
        </div>

        {/* Nuova immagine in basso */}
        <div className="third-section-lower-image">
          <img
            src={travelImage}
            alt="Trasporti e Transfer"
            className="third-section-lower-image-file"
          />
        </div>
      </div>

      {/* Colonna di destra: immagine principale (come già esistente) */}
      <div className="third-section-image-container">
        <img
          src={safariImage}
          alt="Safari ed escursioni"
          className="third-section-image"
        />
      </div>
    </div>
  );
}

export default ThirdSection;
