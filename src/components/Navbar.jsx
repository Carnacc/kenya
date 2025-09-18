// Navbar.jsx
"use client"

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react"
import "../css/Navbar.css"
import logo from "../images/logo.png"
import Dropdown from "../components/DropDown"
import { useNavigate } from "react-router-dom"

const Navbar = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)
  const menuRef = useRef(null)
  const hamburgerRef = useRef(null)
  const lastScrollY = useRef(window.scrollY)
  const dropdownRef = useRef(null)
  const mobileDropdownRef = useRef(null)

  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useImperativeHandle(ref, () => ({
    openDropdown: () => {
      dropdownRef.current?.open()
      mobileDropdownRef.current?.open()
      if (windowWidth <= 1170) {
        setIsMobileMenuOpen(true)
      }
    }
  }))

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth > 1170 && isMobileMenuOpen) setIsMobileMenuOpen(false)
    }
    const handleClickOutside = (event) => {
      const outsideMenu = menuRef.current && !menuRef.current.contains(event.target)
      const outsideHamburger = hamburgerRef.current && !hamburgerRef.current.contains(event.target)
      if (outsideMenu && outsideHamburger) setIsMobileMenuOpen(false)
    }
    window.addEventListener("resize", handleResize)
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current && window.scrollY > 220) {
      setIsVisible(false)
      setIsMobileMenuOpen(false)
    } else if (window.scrollY < lastScrollY.current && window.scrollY <= 50) {
      setIsVisible(true)
    }
    lastScrollY.current = window.scrollY
  }

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <div className="logo">
        <img src={logo || "/placeholder.svg?height=70&width=70"} alt="Logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}/>
      </div>
      <div className="title-container">
        <h1 className="title">Kenya con Falcone</h1>
      </div>
      <div className="nav-links-container">
        {windowWidth > 1170 ? (
          <ul className="nav-links">
            <li><a href="#" onClick={() => navigate("/")}>Home</a></li>
            <li className="dropdown-container"><Dropdown ref={dropdownRef} isMobile={false} /></li>
            <li><a href="#" onClick={() => navigate("/chi-siamo")}>Chi siamo</a></li>
            <li><a href="#" onClick={() => navigate("/contatti")}>Contatti</a></li>
          </ul>
        ) : (
          <>
            <div ref={hamburgerRef} className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
                <span></span><span></span><span></span>
              </div>
            </div>
            <ul ref={menuRef} className={`nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
              <li><a href="#" onClick={() => { navigate("/"); setIsMobileMenuOpen(false) }}>Home</a></li>
              <li className="dropdown-container"><Dropdown ref={mobileDropdownRef} isMobile={true} onCloseMenu={() => setIsMobileMenuOpen(false)} /></li>
              <li><a href="#" onClick={() => { navigate("/chi-siamo"); setIsMobileMenuOpen(false) }}>Chi siamo</a></li>
              <li><a href="#" onClick={() => { navigate("/contatti"); setIsMobileMenuOpen(false) }}>Contatti</a></li>
            </ul>
          </>
        )}
      </div>
    </nav>
  )
})

export default Navbar