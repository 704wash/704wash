import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/ODYSSEY LOGO BADGE.PNG'; // Using the Odyssey Logo Badge from images folder
import ContactModal from '../ContactModal/ContactModal';

const Header = ({ onContactClick, isModalOpen, onCloseModal, onHomeClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    }
  };

  const handleHomeClick = (e) => {
    if (onHomeClick) {
      onHomeClick();
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileNavClick = (callback) => {
    // Close the mobile menu
    setMobileMenuOpen(false);
    // Execute the callback if provided
    if (callback) {
      callback();
    }
  };

  return (
    <header className="header">
      {/* Mobile header */}
      <div className="mobile-header">
        <div className="mobile-logo">
          <div className="logo-circle">
            <img src={logo} alt="Odyssey Pressure Washing Logo" className="nav-logo" />
          </div>
        </div>
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu} 
          aria-label="Toggle menu"
        >
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div className={`mobile-menu-dropdown ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-menu">
          <li className="mobile-nav-item">
            <a href="#home" onClick={() => handleMobileNavClick(onHomeClick)}>HOME</a>
          </li>
          <li className="mobile-nav-item">
            <a href="#about-us" onClick={() => handleMobileNavClick()}>ABOUT US</a>
          </li>
          <li className="mobile-nav-item">
            <a href="#services" onClick={() => handleMobileNavClick()}>SERVICES</a>
          </li>
          <li className="mobile-nav-item">
            <a href="#faq" onClick={() => handleMobileNavClick()}>FAQ</a>
          </li>
          <li className="mobile-nav-item">
            <a href="#areas-served" onClick={() => handleMobileNavClick()}>AREAS SERVED</a>
          </li>
          <li className="mobile-nav-item contact-nav">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleMobileNavClick(onContactClick);
            }}>CONTACT US</a>
          </li>
        </ul>
      </div>
      
      {/* Centered logo for desktop */}
      <div className="centered-logo">
        <div className="logo-circle">
          <img src={logo} alt="Odyssey Pressure Washing Logo" className="nav-logo" />
        </div>
      </div>
      
      <nav className="main-nav">
        <div className="nav-container">
          <ul className="nav-menu left-menu">
            <li className="nav-item home-item"><a href="#home" onClick={handleHomeClick}>HOME</a></li>
            <li className="star-separator">★</li>
            <li className="nav-item dropdown"><a href="#about-us">ABOUT US</a></li>
            <li className="star-separator">★</li>
            <li className="nav-item dropdown"><a href="#services">SERVICES</a></li>
          </ul>
          
          {/* Space for logo */}
          <div className="logo-space"></div>
          
          <ul className="nav-menu right-menu">
            <li className="nav-item dropdown"><a href="#faq">FAQ</a></li>
            <li className="star-separator">★</li>
            <li className="nav-item"><a href="#areas-served">AREAS SERVED</a></li>
            <li className="star-separator">★</li>
            <li className="nav-item contact-nav"><a href="#" onClick={handleContactClick}>CONTACT US</a></li>
          </ul>
        </div>
      </nav>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={onCloseModal} 
      />
    </header>
  );
};

export default Header;
