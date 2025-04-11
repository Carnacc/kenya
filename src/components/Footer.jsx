import "../css/Footer.css"
import { Facebook, Instagram, Send } from "lucide-react"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>KENYA WORLD</h3>
          <ul>
            <li>
              <a href="#">Il Gruppo</a>
            </li>
            <li>
              <a href="#">Lavora con noi</a>
            </li>
            <li>
              <a href="#">Contatti</a>
            </li>
            <li>
              <a href="#">Area riservata</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>IN EVIDENZA</h3>
          <ul>
            <li>
              <a href="#">Assicurazioni</a>
            </li>
            <li>
              <a href="#">Escursioni</a>
            </li>
            <li>
              <a href="#">Offerte</a>
            </li>
            <li>
              <a href="#">Partnership</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>INFO UTILI</h3>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Condizioni generali</a>
            </li>
            <li>
              <a href="#">Documenti necessari</a>
            </li>
            <li>
              <a href="#">Metodi di pagamento</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
  <h3>MONDO SAFARI</h3>
  <ul>
    <li>
      <a href="#">Perché sceglierci</a>
    </li>
    <li>
      <a href="#">Safari selezionati</a>
    </li>
    <li>
      <a href="#">Prezzi</a>
    </li>
  </ul>
  
  <div className="social-icons">
    <a href="#" aria-label="Facebook">
      <Facebook size={24} />
    </a>
    <a href="#" aria-label="Instagram">
      <Instagram size={24} />
    </a>
    <a href="#" aria-label="Telegram">
      <Send size={24} />
    </a>
  </div>
</div>

      </div>
    </footer>
  )
}

export default Footer

