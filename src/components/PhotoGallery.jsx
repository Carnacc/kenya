import React, { useState } from "react";
import "../css/PhotoGallery.css"; // Il nuovo file di stile
import safari1 from "../images/safari1.jpg";
import safari2 from "../images/safari2.jpg";
import safari3 from "../images/safari3.jpg";
import safari4 from "../images/safari4.jpg";
import gallery5 from "../images/gallery-5.jpg";
import gallery6 from "../images/gallery-6.jpg";
import gallery7 from "../images/gallery-7.jpg";
import gallery8 from "../images/gallery-8.jpg";

const IMMAGINI = [
  { src: safari1, alt: "Safari 1", title: "Savana al tramonto" },
  { src: safari2, alt: "Safari 2", title: "Leoni nella riserva" },
  { src: safari3, alt: "Safari 3", title: "Elefanti al fiume" },
  { src: safari4, alt: "Safari 4", title: "Zebra nella prateria" },
  { src: gallery5, alt: "Safari 5", title: "Paesaggio Kenya" },
  { src: gallery6, alt: "Safari 6", title: "Vita selvaggia" },
  { src: gallery7, alt: "Safari 7", title: "Tramonto africano" },
  { src: gallery8, alt: "Safari 8", title: "Vista panoramica" },
];

function PhotoGallery() {
  const [indiceAttivo, setIndiceAttivo] = useState(null);

  // Apre il lightbox all’immagine cliccata
  const apriLightbox = (index) => {
    setIndiceAttivo(index);
  };

  // Chiude il lightbox
  const chiudiLightbox = () => {
    setIndiceAttivo(null);
  };

  // Naviga immagine successiva
  const immagineSuccessiva = (e) => {
    e.stopPropagation();
    setIndiceAttivo((indiceAttuale) => {
      return indiceAttuale === IMMAGINI.length - 1 ? 0 : indiceAttuale + 1;
    });
  };

  // Naviga immagine precedente
  const immaginePrecedente = (e) => {
    e.stopPropagation();
    setIndiceAttivo((indiceAttuale) => {
      return indiceAttuale === 0 ? IMMAGINI.length - 1 : indiceAttuale - 1;
    });
  };

  return (
    <div className="photoGalleryContainer">
      <h2>Galleria Fotografica</h2>
      <p>
        Scopri la nostra selezione di immagini: panorami mozzafiato, incontri
        straordinari e dettagli unici che raccontano l'essenza del viaggio.
      </p>

      {/* Mosaico di immagini */}
      <div className="photoMosaicGallery">
        {IMMAGINI.map((img, index) => (
          <div
            className="photoGalleryItem"
            key={index}
            data-title={img.title}
            onClick={() => apriLightbox(index)}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Lightbox/popup per navigare tra le foto */}
      {indiceAttivo !== null && (
        <div className="photoLightbox" onClick={chiudiLightbox}>
          <div className="photoLightboxContent" onClick={(e) => e.stopPropagation()}>
            <span className="photoClose" onClick={chiudiLightbox}>
              &times;
            </span>

            <button className="photoPrev" onClick={immaginePrecedente}>
              &#10094;
            </button>

            <img
              src={IMMAGINI[indiceAttivo].src}
              alt={IMMAGINI[indiceAttivo].alt}
              className="photoLightboxImg"
            />

            <button className="photoNext" onClick={immagineSuccessiva}>
              &#10095;
            </button>

            <div className="photoLightboxCaption">
              {IMMAGINI[indiceAttivo].title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;
