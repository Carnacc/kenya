"use client"

import "../css/Container.css"
import { useRef } from "react"
import Navbar from "./Navbar.jsx"
import Gallery from "./Gallery.jsx"
import FirstSection from "./FirstSection.jsx"
import TopDestinations from "./TopDestinations.jsx"
import SecondSection from "./SecondSection.jsx"
import ThirdSection from "./ThirdSection.jsx"
import { FaWhatsapp } from "react-icons/fa"

function Container() {
  const navbarRef = useRef()
  const phoneNumber = "254112545258"
  const message = "Ciao! Ho bisogno di informazioni."

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleDiscoverClick = () => {
    navbarRef.current?.openDropdown()
  }

  return (
    <div>
      <Navbar ref={navbarRef} />
      <div className="container">
        <div className="content">
          <h1>Esplora il Kenya con Falcone</h1>
          <p style={{ color: "white" }}>Vivi un'esperienza unica tra safari, escursioni e cultura locale.</p>
          <div className="buttons">
            <button className="cta" onClick={handleDiscoverClick}>Scopri le Escursioni</button>
            <button className="cta secondary" onClick={handleClick}>
              <FaWhatsapp style={{ marginRight: "8px" }} />
              Contattaci su whatsapp
            </button>
          </div>
        </div>
      </div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <TopDestinations />
      <Gallery />
    </div>
  )
}

export default Container