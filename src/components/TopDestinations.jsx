import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/TopDestinations.css";
import image1 from "../images/isola-amore.jpg";
import image2 from "../images/litcthaus.jpg";
import image3 from "../images/crab-shack.jpg";

const DESTINATIONS = [
  {
    title: "Isola Dell'Amore",
    description: "Scopri il fascino della savana e ammira la maestosa migrazione degli gnu.",
    image: image1,
    link: "/isola-dell'amore"
  },
  {
    title: "Lichthaus",
    description: "Vivi l'emozione dei safari ai piedi del Kilimangiaro, tra elefanti e panorami unici.",
    image: image2,
    link: "/lichthaus"
  },
  {
    title: "Crab Shark",
    description: "Lasciati stupire dai fenicotteri rosa e da un ecosistema ricco di biodiversità.",
    image: image3,
    link: "/crab-shark"
  },
];

function TopDestinations() {
  const navigate = useNavigate();

  return (
    <section className="top-destinations">
      <h2 className="section-title">Le mete più richieste</h2>
      <div className="cards-container">
        {DESTINATIONS.map((dest, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={dest.image} alt={dest.title} />
            </div>
            <div className="card-content">
              <h3 style={{ color: "black" }}>{dest.title}</h3>
              <p>{dest.description}</p>
              <button
                className="destinations-cta-button"
                onClick={() => navigate(dest.link)}
              >
                Scopri di più
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopDestinations;
