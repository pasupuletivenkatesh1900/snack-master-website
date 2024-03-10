import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../images/logo/logo.jpeg';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={logo} alt="Snack Master Logo" className="navbar-logo" />
            </Link>
            <h1>Snack Master</h1>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
