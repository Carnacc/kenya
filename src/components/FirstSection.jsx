import React from "react";
import "../css/Container.css";
import guy from "../images/blackguy.jpg"; // Assicurati di avere il logo in questa posizione

function FirstSection() {
    return(
                  <div className="first-section">
                    <div className="first-section-left">
                      <div className="text-container">
                        <h2>Mi presento! Piacere Falcone<br/>Ti porto a spasso tra i leoni</h2>
                        <img src={guy} alt="Safari" />
                      </div>
                    </div>
                    <div className="first-section-right">
                      <div className="text-container">
                      <h2>Scopri le nostre offerte</h2>
                      <p>Benvenuti nel mio mondo di avventure in Kenya!
            Sono Falcone, una guida turistica appassionata che ama condividere la bellezza e la ricchezza di questa terra affascinante.<br/><br/>
            Con anni di esperienza come organizzatore di escursioni, safari e altri servizi all'interno dei parchi del Kenya, mi impegno a offrire esperienze autentiche e coinvolgenti.
            La natura è la mia passione, e mi entusiasma guidare gli ospiti attraverso paesaggi mozzafiato, incontrare la fauna selvatica e immergersi nella cultura locale. Ogni viaggio sia unico, emozionante e indimenticabile.
            Unisciti a me per scoprire il vero spirito del Kenya!</p>
                      <button className="first-section-cta">Prenota ora</button>
                    </div>
                    </div>
                  </div>
    );
}

export default FirstSection;