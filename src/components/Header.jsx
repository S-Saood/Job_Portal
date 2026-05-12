import React, { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <h3>BiteX</h3>

      {/* desktop menu */}
      <ul className="desktop-menu">
        <li>Employers</li>
        <li>Our Impact</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>

      {/* mobile toggle button */}
      <span
        className="toggle-on"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX size={35} /> : <FiAlignJustify size={35} />}
      </span>

      {/* mobile menu */}
      <ul className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <li>Employers</li>
        <li>Our Impact</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </header>
  );
}

export default Header;