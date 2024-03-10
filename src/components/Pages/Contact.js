import React from 'react';
import '../../styles/pages/contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-info">
                <p>Address: 123 Main Street, City, Country</p>
                <p>Phone: +1234567890</p>
                <p>Email: info@example.com</p>
            </div>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
