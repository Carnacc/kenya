"use client";

import { useState, useEffect, useRef } from "react";
import "../css/NavbarDue.css";  // Cambia il percorso per il nuovo file CSS
import logo from "../images/logo.png";
import Dropdown from "../components/DropDownDue";
import { useNavigate } from "react-router-dom";

function NavbarDue() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);

  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current && window.scrollY > 170) {
      setIsVisible(false);
      setIsMobileMenuOpen(false); // Chiude anche il menu mobile e il dropdown
    } else if (window.scrollY < lastScrollY.current && window.scrollY <= 50) {
      setIsVisible(true);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1170 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      const clickedOutsideMenu = menuRef.current && !menuRef.current.contains(event.target);
      const clickedOutsideHamburger = hamburgerRef.current && !hamburgerRef.current.contains(event.target);
      if (clickedOutsideMenu && clickedOutsideHamburger) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`navbar-due ${isVisible ? "visible-due" : "hidden-due"}`}>
      <div className="logo-due">
        <img src={logo || "/placeholder.svg?height=70&width=70"} alt="Logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}/>
      </div>

      <div className="title-container-due">
        <h1 className="title-due">Kenya con Falcone</h1>
      </div>

      <div className="nav-links-container-due">
        {windowWidth > 1170 ? (
          <ul className="nav-links-due">
            <li>
              <a href="#" onClick={() => navigate("/")}>Home</a>
            </li>
            <li className="dropdown-container-due">
              <Dropdown isMobile={false} />
            </li>
            <li>
              <a href="#" onClick={() => navigate("/chi-siamo")}>Chi siamo</a>
            </li>
            <li>
              <a href="#" onClick={() => navigate("/contatti")}>Contatti</a>
            </li>
          </ul>
        ) : (
          <>
            <div
              ref={hamburgerRef}
              className="mobile-menu-toggle-due"
              onClick={toggleMobileMenu}
            >
              <div className={`hamburger-due ${isMobileMenuOpen ? "active-due" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <ul
              ref={menuRef}
              className={`nav-links-due ${isMobileMenuOpen ? "mobile-active-due" : ""}`}
            >
              <li>
                <a href="#" onClick={() => { navigate("/"); setIsMobileMenuOpen(false) }}>Home</a>
              </li>
              <li className="dropdown-container-due">
                <Dropdown isMobile={true} onCloseMenu={() => setIsMobileMenuOpen(false)} />
              </li>
              <li>
                <a href="#" onClick={() => {navigate("/chi-siamo"); setIsMobileMenuOpen(false)}}>Chi siamo</a>
              </li>
              <li>
                <a href="#" onClick={() => { navigate("/contatti"); setIsMobileMenuOpen(false) }}>Contatti</a>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavbarDue;
