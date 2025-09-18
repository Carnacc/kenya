"use client"

import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react"
import "../css/Dropdown.css"
import { useNavigate } from "react-router-dom"

const Dropdown = forwardRef(({ isMobile = false, onCloseMenu = () => {} }, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  const toggleDropdown = () => setIsOpen(!isOpen)

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true)
  }))

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="dropdown-toggle"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Escursioni
      </button>
      {isOpen && (
        <ul className={`dropdown-menu ${isMobile ? "mobile-dropdown" : ""}`} role="menu">
          <li><a href="#" onClick={() => { navigate("/safari"); onCloseMenu() }}>Safari</a></li>
          <li><a href="#" onClick={() => { navigate("/marafa-robinson-island"); onCloseMenu() }}>Marafa Robinson Island</a></li>
          <li><a href="#" onClick={() => { navigate("/safari-blu"); onCloseMenu() }}>Il safari blu</a></li>
          <li><a href="#" onClick={() => { navigate("/rovine-di-gede"); onCloseMenu() }}>Rovine di Gede</a></li>
          <li><a href="#" onClick={() => { navigate("/africa-vera"); onCloseMenu() }}>L'africa vera</a></li>
          <li><a href="#" onClick={() => { navigate("/isola-dell'amore"); onCloseMenu() }}>Isola dell'amore</a></li>
          <li><a href="#" onClick={() => { navigate("/sardegna-due"); onCloseMenu() }}>Sardegna Due</a></li>
          <li><a href="#" onClick={() => { navigate("/lichthaus"); onCloseMenu() }}>Lichthaus</a></li>
          <li><a href="#" onClick={() => { navigate("/crab-shark"); onCloseMenu() }}>Crab Shark</a></li>
        </ul>
      )}
    </div>
  )
})

export default Dropdown