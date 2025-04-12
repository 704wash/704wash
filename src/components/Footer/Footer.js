import React from 'react';
import './Footer.css';
import logo from '../../images/ODYSSEY LOGO BADGE.PNG';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <img src={logo} alt="Odyssey Pressure Washing Logo" className="footer-logo" />
            <h3>Odyssey Pressure Washing</h3>
            <div className="footer-contact">
              <a href="tel:7044411005" className="phone-link">704-441-1005</a>
              <a href="mailto:704wash@gmail.com" className="email-link">704wash@gmail.com</a>
            </div>
          </div>
          
          <div className="footer-links-section">
            <div className="footer-links-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Residential</a></li>
                <li><a href="#">Commercial</a></li>
                <li><a href="#">Multi-Unit</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#services">Services</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="#areas-served">Areas Served</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#" onClick={(e) => {
                  e.preventDefault();
                  // This would need to be connected to your contact modal
                  // You can add the onContactClick prop and logic if needed
                }}>Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Odyssey Pressure Washing | Charlotte, NC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
