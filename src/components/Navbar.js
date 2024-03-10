import React from 'react';
import '../styles/Navbar.css';
import logo from '../images/logo/logo.jpeg'


function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="Snack Master Logo" className="navbar-logo"  />
            <h1>Snack Master</h1>
            <ul className="navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Contact</a></li>
                
            </ul>
        </nav>
    );
}

export default Navbar;
