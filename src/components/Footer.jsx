import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../components/Footer.css'; // Ensure your CSS file is correctly linked

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: support@animalwebsite.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Animal Ave, City, Country</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Animal Website. All rights reserved.</p>
        <div className="footer-buttons">
          <button className="footer-button">Terms</button>
          <button className="footer-button">Policy</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
