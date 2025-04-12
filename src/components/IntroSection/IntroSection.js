import React from 'react';
import './IntroSection.css';

const IntroSection = ({ id }) => {
  return (
    <section className="intro-section" id={id}>
      <div className="intro-container">
        <h3 className="intro-subtitle">CHARLOTTE'S BEST</h3>
        <h2 className="intro-title">Exterior Cleaning Solutions</h2>
        
        <div className="intro-separator">
          <span className="line"></span>
          <span className="star">★</span>
          <span className="line"></span>
        </div>
        
        <p className="intro-text">
          Need exterior surface cleaning solutions you can count on? Turn to the leading local residential and
          commercial power washing service provider – Odyssey Pressure Washing in Charlotte, NC!
        </p>
        
        <p className="intro-text">
          We use proven, eco-friendly techniques to rid your property's exterior of contaminants and restore its
          stunning visual appeal. Why not speak to us today about high-quality pressure washing services in and
          around Charlotte, North Carolina? We're ready to get your home or business exteriors looking spick and span again!
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
