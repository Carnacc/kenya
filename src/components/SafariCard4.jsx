import React from "react";
import "../css/SafariCard2.css";

// Immagini (assumendo che 'travelImage' sia l'immagine scaricata da Freepik)
import safariImage from "../images/tramonto.jpg";

function SafariCard2() {
  return (
    <div className="safari-card-container-2">
      {/* Colonna di sinistra: contiene testo in alto e seconda immagine in basso */}
      <div className="safari-card-left">
        
        {/* Testo in alto */}
        <div className="safari-card-text-container">
          <h2 className="safari-card-title">Safari 3 giorni</h2>
          <p className="safari-card-subtitle">
  Vivi 3 giorni di pura immersione nella natura kenyana.
  Scopri le <strong>Taita Hills</strong>, un’oasi di verde e fauna,
  perfetta per safari fotografici e momenti di relax in lodge panoramici.
</p>
<p className="safari-card-subtitle">
  Prosegui verso il <strong>Tsavo Ovest</strong>, 
  tra paesaggi vulcanici e sorgenti cristalline, 
  dove potrai avvistare giraffe, leoni ed elefanti in un ambiente autentico.
</p>

          <button className="safari-card-button">Scopri di più</button>
        </div>

      </div>

      {/* Colonna di destra: immagine principale (come già esistente) */}
      <div className="safari-card-image-container">
        <img
          src={safariImage}
          alt="Safari ed escursioni"
          className="safari-card-image"
        />
      </div>
    </div>
  );
}

export default SafariCard2;
