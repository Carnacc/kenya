import React from "react";
import "../css/TopDestinations.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

<style>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Noto+Kufi+Arabic:wght@100..900&display=swap');
</style>

const DESTINATIONS = [
  {
    title: "Masai Mara",
    description:
      "Scopri il fascino della savana e ammira la maestosa migrazione degli gnu.",
    image: image1,
  },
  {
    title: "Amboseli",
    description:
      "Vivi l'emozione dei safari ai piedi del Kilimangiaro, tra elefanti e panorami unici.",
    image: image2,
  },
  {
    title: "Lago Nakuru",
    description:
      "Lasciati stupire dai fenicotteri rosa e da un ecosistema ricco di biodiversità.",
    image: image3,
  },
];

function TopDestinations() {
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
              <h3>{dest.title}</h3>
              <p>{dest.description}</p>
              <button className="destinations-cta-button">Scopri di più</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopDestinations;
