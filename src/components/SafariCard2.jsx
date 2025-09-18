import React from "react";
import "../css/SafariCard2.css";

// Immagini (assumendo che 'travelImage' sia l'immagine scaricata da Freepik)
import safariImage from "../images/leone.jpg";

function SafariCard2() {
  return (
    <div className="safari-card-container-2">
      {/* Colonna di sinistra: contiene testo in alto e seconda immagine in basso */}
      <div className="safari-card-left">
        
        {/* Testo in alto */}
        <div className="safari-card-text-container">
          <h2 className="safari-card-title">Safari 6 giorni</h2>
          <p className="safari-card-subtitle">
            <p className="safari-card-subtitle">
                Parti per un safari di 6 giorni tra le meraviglie del Kenya.
                Ammira i grandi predatori del <strong>Masai Mara</strong>, 
                lasciati incantare dai fenicotteri del <strong>Lago Nakuru</strong> 
                e goditi le viste spettacolari del <strong>Amboseli</strong> con il Kilimangiaro sullo sfondo.
            </p>
            <p className="safari-card-subtitle">
                Concludi l’esperienza nel selvaggio <strong>Tsavo Est</strong>, 
                tra distese infinite, elefanti rossi e natura incontaminata. 
                Un viaggio breve ma intenso, pensato per chi vuole vivere il meglio del safari in pochi giorni.
            </p>
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
