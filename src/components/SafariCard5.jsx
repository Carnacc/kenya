import React from "react";
import "../css/SafariCard1.css";

// Immagini (assumendo che 'travelImage' sia l'immagine scaricata da Freepik)
import safariImage from "../images/gallery-6.jpg";

function SafariCard1() {
  return (
    <div className="safari-card-container">
      {/* Colonna di sinistra: contiene testo in alto e seconda immagine in basso */}
      <div className="safari-card-left">
        
        {/* Testo in alto */}
        <div className="safari-card-text-container">
          <h2 className="safari-card-title">Safari 2 giorni</h2>
          <p className="safari-card-subtitle">
  Ideale per chi ha poco tempo ma non vuole rinunciare al fascino del Kenya selvaggio.
  Questo safari di 2 giorni ti porta nel cuore del <strong>Tsavo Ovest</strong>,
  tra colline, lava nera e natura incontaminata.
</p>
<p className="safari-card-subtitle">
  Esplora paesaggi spettacolari, ammira gli animali liberi nella savana
  e goditi il silenzio magico di una delle riserve più autentiche del Paese.
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

export default SafariCard1;
