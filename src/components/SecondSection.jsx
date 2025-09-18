import React from "react";
import "../css/SecondSection.css";
import { useNavigate } from "react-router-dom"


function SecondSection() {
  
  const navigate = useNavigate()

  return (
    <div className="second-section">
      {/* Contenitore per il testo e il bottone */}
      <div className="content-wrapper">
        <h2 className="second-section-title">Safari ed Escursioni</h2>
        <p className="section-subtitle">
        Scopri la magia dell’Africa tra safari emozionanti e paesaggi mozzafiato. Un viaggio autentico nel cuore della natura.        </p>
        <button className="section-button" onClick={() => navigate("/safari")}>
          Scopri di più
        </button>
      </div>
    </div>
  );
}

export default SecondSection;
