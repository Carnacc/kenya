"use client"
import "../css/AboutSection.css"
import image from "../images/falcone.jpg"

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-image-container">
        <img src={image || "/placeholder.svg?height=500&width=400"} alt="La nostra storia" className="about-image" />
      </div>

      <div className="about-content">
        <h2 className="about-title">Dal sogno alla realtà</h2>

        <p className="about-text">
          Creiamo esperienze di viaggio che le persone desiderano vivere. Dal 2015 abbiamo aiutato i nostri clienti a
          trasformare idee e aspirazioni in realtà. La filosofia di base di Kenya con Falcone è creare itinerari
          personalizzati, esteticamente sorprendenti e autentici per i nostri clienti, impiegando guide locali esperte e
          conoscenze approfondite del territorio. Anche se non hai un'idea chiara di cosa vuoi vedere - ti aiuteremo a
          ottenere l'esperienza che hai sempre sognato.
        </p>

        <p className="about-text">
          Crediamo che viaggiare in Africa sia uno degli investimenti più importanti che farai nella vita. Che si tratti
          di un safari, un'esperienza culturale o una vacanza al mare, siamo sempre presenti con un impegno completo
          verso il tuo viaggio, così possiamo creare un'esperienza in cui ti sentirai completamente a tuo agio e
          meravigliato.
        </p>
      </div>
    </div>
  )
}

export default AboutSection
