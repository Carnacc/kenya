"use client"

import { useState, useRef, useEffect } from "react"
import "../css/DropdownDue.css"
import { useNavigate } from "react-router-dom"; // Importa useNavigate


const DropdownDue = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

    const navigate = useNavigate(); // Inizializza il navigatore
  
  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isOpen}>
        Escursioni
      </button>
      {isOpen && (
        <ul className="dropdown-menu" role="menu">
          <li>
            <a href="#" onClick={() => navigate("/safari")} role="menuitem">
              Safari
            </a>
          </li>
          <li>
            <a href="#" role="menuitem">
              Marafa Robinson Island
            </a>
          </li>
          <li>
            <a href="#" role="menuitem">
              Il safari blu
            </a>
          </li>
          <li>
            <a href="#" role="menuitem">
              Rovina di Gede
            </a>
          </li>
          <li>
            <a href="#" role="menuitem">
              L'africa vera
            </a>
          </li>
          <li>
            <a href="#" role="menuitem">
              Isola dell'amore
            </a>
          </li>
          <li>
            <a href="#" role="menuitem">
              Sardegna Due
            </a>
          </li>
          <li>
            <a href="#" role="menuitem">
              Crab Shark
            </a>
          </li>
        </ul>
      )}
    </div>
  )
}

export default DropdownDue

