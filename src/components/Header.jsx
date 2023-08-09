import React from "react";
import "./../styles/Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <img src="src/styles/cdlogo.png" className="logo" alt="Logo" />
      <nav>
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/projects" className="nav-link">
          Projects
        </a>
        <a href="/about" className="nav-link">
          About
        </a>
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
