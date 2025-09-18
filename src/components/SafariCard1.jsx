import React from "react";
import "../css/SafariCard1.css";

// Immagini (assumendo che 'travelImage' sia l'immagine scaricata da Freepik)
import safariImage from "../images/gallery-8.jpg";

function SafariCard1() {
  return (
    <div className="safari-card-container">
      {/* Colonna di sinistra: contiene testo in alto e seconda immagine in basso */}
      <div className="safari-card-left">
        
        {/* Testo in alto */}
        <div className="safari-card-text-container">
          <h2 className="safari-card-title">Safari 11 giorni</h2>
          <p className="safari-card-subtitle">
              Vivi un'avventura completa tra le meraviglie del Kenya con un safari di 11 giorni.
              Inizia dalla riserva di <strong>Samburu</strong>, terra arida e affascinante, 
              abitata da specie uniche come il gerenuk e l’orice.
              Prosegui verso il <strong>Lago Nakuru</strong>, famoso per i fenicotteri rosa 
              e i rinoceronti bianchi.
          </p>
          <p className="safari-card-subtitle">
              Ai piedi del Kilimangiaro ti aspetta <strong>Amboseli</strong>, 
              con i suoi elefanti maestosi e viste mozzafiato.
              Infine, immergiti nei contrasti di <strong>Tsavo Ovest</strong> e 
              <strong>Tsavo Est</strong>: uno vulcanico e ricco d’acqua, 
              l’altro vasto, selvaggio e attraversato dal fiume Galana.
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
