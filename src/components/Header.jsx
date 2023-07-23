
import React from "react";
import "./../styles/Header.css";

const Header = () => {
  return (
    <header>
      <h1 className="header-title">Christiane Dragvik</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
