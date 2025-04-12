import React from 'react';
import './PropertyCTA.css';
import propertyBg from '../../assets/property-background.svg'; // Import the SVG background image

const PropertyCTA = () => {
  return (
    <section className="property-cta" style={{ backgroundImage: `url(${propertyBg})` }}>
      <div className="property-cta-dark-overlay"></div>
      <div className="property-cta-overlay">
        <h2 className="property-cta-title">
          Large or Small Properties,<br />
          We've got YOU Covered!
        </h2>
        <a href="#contact" className="property-cta-button">Contact Us</a>
      </div>
    </section>
  );
};

export default PropertyCTA;
