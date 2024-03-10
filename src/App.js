import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home.js";
import About from "./components/Pages/About.js";
import Contact from "./components/Pages/Contact.js";
import Product from "./components/Pages/Product.js";

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
