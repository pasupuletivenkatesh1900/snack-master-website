import React from "react";
import CEOImage from "../../images/about/ceo.jpg"; // Import the CEO image
import "../../styles/pages/About.css";

function About() {
  return (
    <div className="about-container">
      <div className="ceo-info">
        <img src={CEOImage} alt="CEO" className="ceo-image" />
        <div className="ceo-description">
          <h2>CEO Venkatesh</h2>
          <p>
            CEO Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <p>Phone: +1234567890</p>
          <p>Email: ceo@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default About;
