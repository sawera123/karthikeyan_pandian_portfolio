import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);


  return (
    <header className="main-header sticky-top">
      <div className="nav-container">
        <div className="logo-area">
          <a href="#hero" className="logo">Port<span>Folio</span></a>
        </div>

        <nav className={`nav-center ${menuOpen ? "active" : ""}`}>
  <ul className="nav-links">
    <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
    <li><a href="#resume" onClick={() => setMenuOpen(false)}>Experience</a></li>
    <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
    <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
  </ul>

  {/* Close icon inside mobile menu */}
  <button onClick={toggleMenu} className="menu-btn close-btn">
    {menuOpen ? <FaTimes /> : null}
  </button>
</nav>


        <div className="nav-actions">
          <button onClick={toggleMenu} className="menu-btn">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
