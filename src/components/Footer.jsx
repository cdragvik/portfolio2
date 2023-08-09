import React from 'react';
import "./../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Designed and built by Christiane Dragvik</p>
    </footer>
  );
};

export default Footer;
