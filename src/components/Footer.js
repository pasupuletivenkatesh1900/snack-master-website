import React from 'react';
import '../styles/Footer.css'; // Import your CSS file
import logo from '../images/logo/logo.jpeg'
import youtube from '../images/icon/youtube.png'
import whatsapp from '../images/icon/whatsapp.png'
import linkedin from '../images/icon/linkedin.png'

function Footer() {
  return (
    <footer className="bottom-navbar">
      <div className="bottom-navbar-left">
        <img src={logo} alt="Logo" className="bottom-navbar-logo" />
        <span className="bottom-navbar-text">___@tm2023</span>
      </div>
      <div className="bottom-navbar-icons">
        <a href="#" className="bottom-navbar-icon">
          <img src={youtube} alt="YouTube" />
        </a>
        <a href="#" className="bottom-navbar-icon">
          <img src={whatsapp} alt="WhatsApp" />
        </a>
        <a href="#" className="bottom-navbar-icon">
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
