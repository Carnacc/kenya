"use client"

import { useState } from "react"
import "../css/Footer.css"
import { Facebook, Instagram, Send } from "lucide-react"

function Footer() {
  // Stato per tenere traccia delle sezioni aperte nell'accordion mobile
  const [activeSections, setActiveSections] = useState([])

  // Funzione per gestire il click sulle intestazioni delle sezioni
  const toggleSection = (index) => {
    if (activeSections.includes(index)) {
      setActiveSections(activeSections.filter((i) => i !== index))
    } else {
      setActiveSections([...activeSections, index])
    }
  }

  // Array delle sezioni del footer
  const footerSections = [
    {
      title: "KENYA WORLD",
      links: [
        { text: "Il Gruppo", url: "#" },
        { text: "Lavora con noi", url: "#" },
        { text: "Contatti", url: "#" },
        { text: "Area riservata", url: "#" },
      ],
    },
    {
      title: "IN EVIDENZA",
      links: [
        { text: "Assicurazioni", url: "#" },
        { text: "Escursioni", url: "#" },
        { text: "Offerte", url: "#" },
        { text: "Partnership", url: "#" },
      ],
    },
    {
      title: "INFO UTILI",
      links: [
        { text: "FAQ", url: "#" },
        { text: "Condizioni generali", url: "#" },
        { text: "Documenti necessari", url: "#" },
        { text: "Metodi di pagamento", url: "#" },
      ],
    },
    {
      title: "MONDO SAFARI",
      links: [
        { text: "Perché sceglierci", url: "#" },
        { text: "Safari selezionati", url: "#" },
        { text: "Prezzi", url: "#" },
      ],
      hasSocial: true,
    },
  ]

  // Verifica se siamo su mobile (per applicare l'accordion solo su mobile)
  const isMobile = typeof window !== "undefined" ? window.innerWidth <= 480 : false

  return (
    <footer className="footer">
      <div className="footer-content">
        {footerSections.map((section, index) => (
          <div key={index} className={`footer-section ${activeSections.includes(index) ? "active" : ""}`}>
            <h3
              onClick={() => isMobile && toggleSection(index)}
              role={isMobile ? "button" : undefined}
              aria-expanded={isMobile ? activeSections.includes(index) : undefined}
            >
              {section.title}
            </h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
            {section.hasSocial && (
              <div className="footer-social-icons">
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
            )}
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
