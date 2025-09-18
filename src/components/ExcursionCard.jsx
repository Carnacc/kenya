import '../css/ExcursionCard.css'
import { useNavigate } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa"; // Importa l'icona di WhatsApp

function ExcursionCard({ subtitle, title, text, image }) {
  const navigate = useNavigate()

  const phoneNumber = "254112545258"
  const message = "Ciao! Ho bisogno di informazioni."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleContattiClick = () => {
    navigate('/contatti')
  }

  return (
    <div className="excursion-card">
      <div className="excursion-left">
        <p className="excursion-subtitle">{subtitle}</p>
        <h1 className="excursion-title">{title}</h1>
        <p className="excursion-text">
          {text.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <div className="excursion-buttons">
          <button className="btn btn-dark" onClick={handleContattiClick}>Contatti</button>
          <button className="btn btn-whatsapp" onClick={handleWhatsAppClick}>
            <FaWhatsapp style={{ marginRight: "5px" }}/>Contattami su Whatsapp
          </button>
        </div>
      </div>
      <div className="excursion-right">
        <img src={image} alt={title} />
      </div>
    </div>
  )
}

export default ExcursionCard
