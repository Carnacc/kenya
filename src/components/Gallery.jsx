import "../css/Gallery.css"
import safari1 from "../images/safari1.jpg"
import safari2 from "../images/safari2.jpg"
import safari3 from "../images/safari3.jpg"
import safari4 from "../images/safari4.jpg"
import gallery5 from "../images/gallery-5.jpg"
import gallery6 from "../images/gallery-6.jpg"
import gallery7 from "../images/gallery-7.jpg"
import gallery8 from "../images/gallery-8.jpg"
import { Link } from "lucide-react"
import { useNavigate } from "react-router-dom"; // Importa useNavigate


const IMAGES = [
  { src: safari1, alt: "Safari 1", title: "Savana al tramonto" },
  { src: safari2, alt: "Safari 2", title: "Leoni nella riserva" },
  { src: safari3, alt: "Safari 3", title: "Elefanti al fiume" },
  { src: safari4, alt: "Safari 4", title: "Zebra nella prateria" },
  { src: gallery8, alt: "Safari 5", title: "Vista panoramica" },
  { src: gallery6, alt: "Safari 6", title: "Vita selvaggia" },
  { src: gallery7, alt: "Safari 7", title: "Tramonto africano" },
  { src: gallery5, alt: "Safari 8", title: "Paesaggio Kenya" },
]

function Gallery() {
  const navigate = useNavigate(); // Inizializza il navigatore

  return (
    <div className="gallery">
      <div className="text-container">
        <h2>Galleria Fotografica</h2>
        <p>
          Scopri la nostra selezione di immagini: panorami mozzafiato, incontri straordinari e dettagli unici che
          raccontano l'essenza del viaggio.
        </p>
      </div>
      <div className="mosaic-gallery">
        {IMAGES.map((image, index) => (
          <div
            className="gallery-item"
            key={index}
            data-title={image.title} // Aggiunto l'attributo data-title
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} />
          </div>
        ))}
      </div>
      <button 
        className="third-section-button" 
        onClick={() => navigate("/galleria")}>
        Apri la galleria
      </button>
    </div>
  )
}

export default Gallery

