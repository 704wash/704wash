import React from 'react';
import './Hero.css';

const Hero = ({ id, onQuoteClick }) => {
  return (
    <section className="hero" id={id}>
      <div className="hero-content">
        <div className="hero-text">
          <h1><span className="highlight">#1 TRUSTED</span></h1>
          <h2>PRESSURE WASHING COMPANY</h2>
          <h3>IN CHARLOTTE, NC</h3>
          
          <div className="hero-buttons">
            <a href="#" className="quote-button" onClick={(e) => {
              e.preventDefault();
              if (onQuoteClick) onQuoteClick();
            }}>
              <span className="button-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5zM19 19.09H5V4.91h14v14.18zM6 15h12v2H6zm0-4h12v2H6zm0-4h12v2H6z" />
                </svg>
              </span>
              GET A FREE QUOTE
            </a>
            <a href="tel:7044411005" className="call-button">
              <span className="button-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              CALL 704-441-1005
            </a>
          </div>
        </div>
      </div>
      
      <div className="bottom-bar"></div>
    </section>
  );
};

export default Hero;