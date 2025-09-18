"use client";

import { useState, useRef, useEffect } from "react";
import "../css/DropdownDue.css"; // Cambia il percorso per il nuovo file CSS
import { useNavigate } from "react-router-dom";

const DropdownDue = ({ isMobile = false, onCloseMenu = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-due" ref={dropdownRef}>
      <button
        className="dropdown-toggle-due"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Escursioni
      </button>
      {isOpen && (
        <ul className={`dropdown-menu ${isMobile ? "mobile-dropdown" : ""}`} role="menu">
        <li>
          <a
            href="#"
            onClick={() => {
              navigate("/safari")
              onCloseMenu()
            }}
            role="menuitem"
          >
            Safari
          </a>
        </li>
        <li>
          <a 
            href="#" onClick={() => {
              navigate("/marafa-robinson-island")
              onCloseMenu()
            }} 
            role="menuitem"
          >
            Marafa Robinson Island
          </a>
        </li>
        <li>
          <a 
            href="#" onClick={() => { 
              navigate("/safari-blu")
              onCloseMenu()
            }}  
            role="menuitem"
            >
              Il safari blu
          </a>
        </li>
        <li>
          <a 
            href="#" onClick={() => { 
              navigate("/rovine-di-gede")
              onCloseMenu()
            }}  
            role="menuitem"
            >
              Rovine di Gede
          </a>
        </li>    
        <li>
          <a 
            href="#" onClick={() => { 
              navigate("/africa-vera")
              onCloseMenu()
            }}  
            role="menuitem"
            >
              L'africa vera
          </a>
        </li>          
        <li>
          <a 
            href="#" onClick={() => { 
              navigate("/isola-dell'amore")
              onCloseMenu()
            }}  
            role="menuitem"
            >
              Isola dell'amore
          </a>
        </li>          
        <li>
          <a 
            href="#" onClick={() => { 
              navigate("/sardegna-due")
              onCloseMenu()
            }}  
            role="menuitem"
            >
              Sardegna Due
          </a>
        </li>          
        <li>
          <a 
            href="#" onClick={() => { 
              navigate("/lichthaus")
              onCloseMenu()
            }}  
            role="menuitem"
            >
              Lichthaus
          </a>
        </li>          
        <li>
          <a 
            href="#" onClick={() => { 
              navigate("/crab-shark")
              onCloseMenu()
            }}  
            role="menuitem"
            >
              Crab Shark
          </a>
        </li>        
      </ul>
      )}
    </div>
  );
};

export default DropdownDue;
