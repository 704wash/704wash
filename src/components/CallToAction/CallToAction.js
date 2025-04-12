import React from 'react';
import './CallToAction.css';

const CallToAction = ({ onQuoteClick }) => {
  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>
      <div className="cta-container">
        <h2 className="cta-title">Transform Your Charlotte<br />Property Today!</h2>
        <h3 className="cta-subtitle">Get a Free Quote From Odyssey Pressure Washing</h3>
        
        <div className="cta-buttons">
          <button onClick={onQuoteClick} className="cta-button quote-btn">
            GET A FREE QUOTE
          </button>
          <a href="tel:7044411005" className="cta-button call-btn">
            CALL 704-441-1005
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
