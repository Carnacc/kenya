import React from "react";
import "../css/SafariCard1.css";

// Immagini (assumendo che 'travelImage' sia l'immagine scaricata da Freepik)
import safariImage from "../images/elefante-massiccio.jpg";

function SafariCard1() {
  return (
    <div className="safari-card-container">
      {/* Colonna di sinistra: contiene testo in alto e seconda immagine in basso */}
      <div className="safari-card-left">
        
        {/* Testo in alto */}
        <div className="safari-card-text-container">
          <h2 className="safari-card-title">Safari 4 giorni</h2>
          <p className="safari-card-subtitle">
  Un’avventura di 4 giorni tra le terre più affascinanti del Kenya. 
  Parti dal <strong>Tsavo Est</strong>, tra savane rosse e branchi di elefanti, 
  e raggiungi l’iconico <strong>Amboseli</strong>, 
  con viste spettacolari sul Kilimangiaro e fauna in libertà.
</p>
<p className="safari-card-subtitle">
  Concludi il viaggio nel rigoglioso <strong>Tsavo Ovest</strong>, 
  tra sorgenti naturali, paesaggi vulcanici e animali selvatici. 
  Un safari breve ma ricco di emozioni e varietà.
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
