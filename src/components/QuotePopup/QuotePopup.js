import React, { useState, useEffect } from 'react';
import './QuotePopup.css';

const QuotePopup = ({ onRequestQuote, resetTrigger }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  
  // Reset state when resetTrigger changes
  useEffect(() => {
    setIsClosed(false);
    setIsVisible(false);
  }, [resetTrigger]);
  
  useEffect(() => {
    // Check if the popup has been previously closed in this session
    const popupClosed = localStorage.getItem('quotePopupClosed') === 'true';
    if (popupClosed) {
      setIsClosed(true);
      return;
    }
    
    const checkScroll = () => {
      const servicesSection = document.getElementById('services');
      
      if (servicesSection && !isVisible && !isClosed) {
        const servicesSectionTop = servicesSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Show popup when services section is in view, and keep it visible
        if (servicesSectionTop < windowHeight) {
          setIsVisible(true);
          // Once we've shown the popup, we can remove the scroll listener
          window.removeEventListener('scroll', checkScroll);
        }
      }
    };
    
    window.addEventListener('scroll', checkScroll);
    // Check once on mount in case we're already at the services section
    checkScroll();
    
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [isVisible, isClosed]);
  
  const handleClose = () => {
    setIsClosed(true);
    // Remember that user closed the popup
    localStorage.setItem('quotePopupClosed', 'true');
  };
  
  if (!isVisible || isClosed) return null;
  
  return (
    <div className="quote-popup">
      <button 
        className="close-popup-button"
        onClick={handleClose}
        aria-label="Close popup"
      >
        ×
      </button>
      <button 
        onClick={onRequestQuote}
        className="quote-popup-button"
      >
        <span className="quote-icon">💬</span>
        Get a Quote
      </button>
    </div>
  );
};

export default QuotePopup;
