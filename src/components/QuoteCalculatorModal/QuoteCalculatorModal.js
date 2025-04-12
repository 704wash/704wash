import React, { useEffect, useRef, useState } from 'react';
import './QuoteCalculatorModal.css';

const QuoteCalculatorModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();
  const [calculatedQuote, setCalculatedQuote] = useState(null);
  const [formData, setFormData] = useState({
    serviceType: '',
    propertyType: 'residential',
    squareFootage: '',
    stories: '1',
    surfaceCondition: 'light',
    additionalServices: []
  });

  // Handle clicking outside the modal to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          additionalServices: [...prev.additionalServices, value]
        };
      } else {
        return {
          ...prev,
          additionalServices: prev.additionalServices.filter(service => service !== value)
        };
      }
    });
  };
  
  // Calculate price based on inputs
  const calculateQuote = () => {
    // Basic rate depends on service type (per square foot)
    const baseRates = {
      'house-washing': 0.25,
      'driveway-cleaning': 0.35,
      'deck-cleaning': 0.40,
      'roof-cleaning': 0.45,
      'fence-cleaning': 0.30,
      'commercial': 0.22
    };
    
    // Get the base rate
    let baseRate = baseRates[formData.serviceType] || 0.30;
    
    // Commercial gets a discount for scale
    if (formData.propertyType === 'commercial') {
      baseRate *= 0.9;
    }
    
    // Multi-unit gets a different discount for multiple units
    if (formData.propertyType === 'multi-unit') {
      baseRate *= 0.85;
    }
    
    // Surface condition multiplier
    const conditionMultiplier = {
      'light': 1,
      'moderate': 1.2,
      'heavy': 1.5
    };
    
    // Stories multiplier
    const storiesMultiplier = parseInt(formData.stories, 10) > 1 ? 
      (1 + ((parseInt(formData.stories, 10) - 1) * 0.25)) : 1;
    
    // Additional services cost
    const additionalServicesCost = formData.additionalServices.reduce((total, service) => {
      const costs = {
        'sanitization': 75,
        'sealant': 150,
        'mold-treatment': 100,
        'gutter-cleaning': 120
      };
      return total + (costs[service] || 0);
    }, 0);
    
    // Calculate base price
    const squareFootage = parseInt(formData.squareFootage, 10) || 0;
    const basePrice = squareFootage * baseRate * conditionMultiplier[formData.surfaceCondition] * storiesMultiplier;
    
    // Calculate total
    const totalPrice = basePrice + additionalServicesCost;
    
    // Generate the quote object
    return {
      basePrice: Math.round(basePrice),
      additionalServicesPrice: additionalServicesCost,
      totalPrice: Math.round(totalPrice),
      estimatedTime: calculateEstimatedTime(squareFootage, formData.serviceType, formData.surfaceCondition)
    };
  };
  
  // Calculate estimated time to complete
  const calculateEstimatedTime = (squareFootage, serviceType, condition) => {
    // Base time in hours per 1000 sq ft
    const baseTimeRates = {
      'house-washing': 1.5,
      'driveway-cleaning': 1,
      'deck-cleaning': 2,
      'roof-cleaning': 2.5,
      'fence-cleaning': 1.8,
      'commercial': 1.2
    };
    
    // Condition multiplier
    const conditionTimeMultiplier = {
      'light': 0.8,
      'moderate': 1,
      'heavy': 1.5
    };
    
    const baseTime = (squareFootage / 1000) * (baseTimeRates[serviceType] || 1.5);
    const totalTime = baseTime * conditionTimeMultiplier[condition];
    
    // Format the time
    if (totalTime < 1) {
      return `${Math.round(totalTime * 60)} minutes`;
    } else if (totalTime < 2) {
      return `${Math.floor(totalTime)} hour ${Math.round((totalTime % 1) * 60)} minutes`;
    } else {
      return `${Math.floor(totalTime)} hours ${Math.round((totalTime % 1) * 60)} minutes`;
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Calculate the quote
    const quote = calculateQuote();
    setCalculatedQuote(quote);
  };
  
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="quote-calculator-modal" ref={modalRef}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        
        <div className="modal-header-wrapper">
          <h2>Get an Instant Quote</h2>
          <p>Fill out the form below to receive an instant estimate for your pressure washing project.</p>
        </div>
        
        {!calculatedQuote ? (
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="serviceType">Service Type</label>
              <select 
                id="serviceType" 
                name="serviceType" 
                value={formData.serviceType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a Service</option>
                <option value="house-washing">House Washing</option>
                <option value="driveway-cleaning">Driveway Cleaning</option>
                <option value="deck-cleaning">Deck & Patio Cleaning</option>
                <option value="roof-cleaning">Roof Cleaning</option>
                <option value="fence-cleaning">Fence Cleaning</option>
                <option value="commercial">Commercial Services</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="propertyType">Property Type</label>
              <select 
                id="propertyType" 
                name="propertyType"
                value={formData.propertyType}
                onChange={handleInputChange}
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="multi-unit">Multi-Unit / HOA</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="squareFootage">Approximate Square Footage</label>
              <input 
                type="number" 
                id="squareFootage" 
                name="squareFootage" 
                placeholder="e.g. 1500" 
                value={formData.squareFootage}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="stories">Number of Stories</label>
              <select 
                id="stories" 
                name="stories"
                value={formData.stories}
                onChange={handleInputChange}
              >
                <option value="1">1 Story</option>
                <option value="2">2 Stories</option>
                <option value="3">3+ Stories</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="surfaceCondition">Surface Condition</label>
              <select 
                id="surfaceCondition" 
                name="surfaceCondition"
                value={formData.surfaceCondition}
                onChange={handleInputChange}
              >
                <option value="light">Light Cleaning Needed</option>
                <option value="moderate">Moderate Cleaning Needed</option>
                <option value="heavy">Heavy Cleaning Needed</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Additional Services</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input 
                    type="checkbox" 
                    id="sanitization" 
                    name="additionalServices" 
                    value="sanitization"
                    onChange={handleCheckboxChange}
                    checked={formData.additionalServices.includes('sanitization')}
                  />
                  <label htmlFor="sanitization">Surface Sanitization</label>
                </div>
                <div className="checkbox-item">
                  <input 
                    type="checkbox" 
                    id="sealant" 
                    name="additionalServices" 
                    value="sealant"
                    onChange={handleCheckboxChange}
                    checked={formData.additionalServices.includes('sealant')}
                  />
                  <label htmlFor="sealant">Sealant Application</label>
                </div>
                <div className="checkbox-item">
                  <input 
                    type="checkbox" 
                    id="mold-treatment" 
                    name="additionalServices" 
                    value="mold-treatment"
                    onChange={handleCheckboxChange}
                    checked={formData.additionalServices.includes('mold-treatment')}
                  />
                  <label htmlFor="mold-treatment">Mold Treatment</label>
                </div>
                <div className="checkbox-item">
                  <input 
                    type="checkbox" 
                    id="gutter-cleaning" 
                    name="additionalServices" 
                    value="gutter-cleaning"
                    onChange={handleCheckboxChange}
                    checked={formData.additionalServices.includes('gutter-cleaning')}
                  />
                  <label htmlFor="gutter-cleaning">Gutter Cleaning</label>
                </div>
              </div>
            </div>
            
            <div className="form-footer">
              <button type="submit" className="submit-button">
                Calculate Quote
              </button>
            </div>
          </form>
        ) : (
          <div className="quote-result">
            <h3>Your Estimated Quote</h3>
            
            <div className="quote-details">
              <div className="quote-item">
                <span className="quote-label">Base Service Price:</span>
                <span className="quote-value">${calculatedQuote.basePrice}</span>
              </div>
              
              {calculatedQuote.additionalServicesPrice > 0 && (
                <div className="quote-item">
                  <span className="quote-label">Additional Services:</span>
                  <span className="quote-value">${calculatedQuote.additionalServicesPrice}</span>
                </div>
              )}
              
              <div className="quote-item total">
                <span className="quote-label">Estimated Total:</span>
                <span className="quote-value">${calculatedQuote.totalPrice}</span>
              </div>
              
              <div className="quote-item">
                <span className="quote-label">Estimated Time to Complete:</span>
                <span className="quote-value">{calculatedQuote.estimatedTime}</span>
              </div>
            </div>
            
            <div className="quote-disclaimer">
              <p>This is an estimate based on the information provided. The final price may vary based on a detailed in-person assessment.</p>
            </div>
            
            <div className="quote-actions">
              <button className="action-button recalculate" onClick={() => setCalculatedQuote(null)}>
                Recalculate
              </button>
              <button className="action-button schedule" onClick={onClose}>
                Contact Us to Schedule
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteCalculatorModal;
