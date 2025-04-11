import "../css/Container.css";
import Navbar from "./Navbar.jsx";
import Gallery from "./Gallery.jsx";
import FirstSection from "./FirstSection.jsx";
import TopDestinations from "./TopDestinations.jsx";
import SecondSection from "./SecondSection.jsx";
import ThirdSection from "./ThirdSection.jsx";
import Footer from "./Footer.jsx";
import { FaWhatsapp } from "react-icons/fa"; // Importa l'icona di WhatsApp


function Container() {

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="content">
          <h1>Esplora il Kenya con Falcone</h1>
          <p>Vivi un'esperienza unica tra safari, escursioni e cultura locale.</p>
          <div className="buttons">
            <button className="cta">Scopri le escursioni</button>
            <button className="cta secondary"   onClick={() => window.open("https://wa.me/393201234567", "_blank")}>
                <FaWhatsapp style={{ marginRight: "8px" }} />Contattaci su whatsapp
            </button>
          </div>
        </div>
      </div>

      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <TopDestinations />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Container;
