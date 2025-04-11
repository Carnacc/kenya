import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import logo from "../images/logo.png"; // Assicurati di avere il logo in questa posizione
import Dropdown from "../components/DropDown";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);  // Stato per monitorare la visibilità della navbar
  let lastScrollY = 0;

  const handleScroll = () => {
    // Se scorriamo verso il basso, nascondiamo la navbar
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      setIsVisible(false);
    } else if (window.scrollY < lastScrollY && window.scrollY <= 50) {
      // Se scorriamo verso l'alto ma siamo vicini alla parte superiore della pagina, mostriamo la navbar
      setIsVisible(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    // Aggiungi l'event listener per lo scroll
    window.addEventListener("scroll", handleScroll);

    // Rimuovi l'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate(); // Inizializza il navigatore

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div>
      <h1 className="title">Kenya con Falcone</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#" onClick={() => navigate("/home")}>Home</a></li>
      
       <li> <Dropdown /></li>

        <li><a href="#">Chi siamo</a></li>
        <li><a href="#" onClick={() => navigate("/contatti")}>Contatti</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
