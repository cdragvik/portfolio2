

import React from "react";
import "../styles/Welcome.css"; // Import the CSS file for styling

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-text">
        <h1>Hello, I am Christiane!</h1>
        <h2>Motivated and dedicated aspiring front-end developer with a background in healthcare.</h2>
        <p>While currently pursuing frontend studies at Noroff, I have gained valuable skills in web development - including HTML, CSS, JavaScript, React, and more. With a strong work ethic, attention to detail, and a commitment to user-friendly solutions, I am ready to embark on a new journey as a frontend developer.</p>
          <div className="cta-buttons">
            <a href="/projects" className="cta-button">
              My Projects
            </a>
            <a href="/contact" className="cta-button">  
              Get in touch
            </a>
          </div>
      </div>
      <div className="profile-image-container">
        <img
          src="src/styles/portrait.jpeg"
          alt="Profile"
          className="profile-image"
        />
      </div>
    </section>
  );
};

export default Welcome;
