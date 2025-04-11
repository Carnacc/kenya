import React, { useState, useEffect } from "react";
import "../css/NavbarDue.css";  
import logo from "../images/logo.png";
import DropdownDue from "../components/DropDownDue";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <nav
      className={`myNavbarContainer ${isVisible ? "myNavVisible" : "myNavHidden"}`}
    >
      <div className="myNavbarLogo">
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <h1 className="myNavbarTitle">Kenya con Falcone</h1>
      </div>
      <ul className="myNavbarLinks">
        <li>
          <a href="#" onClick={() => navigate("/home")}>Home</a>
        </li>
        <li>
          <DropdownDue />
        </li>
        <li>
          <a href="#">Chi siamo</a>
        </li>
        <li>
          <a href="#" onClick={() => navigate("/contatti")}>Contatti</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
