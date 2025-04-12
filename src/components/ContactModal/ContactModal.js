import React, { useEffect, useRef, useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Get form data
    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      address: e.target.elements.address.value,
      service: e.target.elements.service.value,
      message: e.target.elements.message.value
    };

    try {
      // Send to backend API
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you for your message! We will get back to you soon.' });
        e.target.reset(); // Clear the form
        
        // Close modal after 2 seconds on success
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: result.message || 'There was an error sending your message. Please try again later.' 
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your internet connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container" ref={modalRef}>
        <button className="modal-close-btn" onClick={onClose}>
          <span style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>✕</span>
        </button>
        
        <div className="modal-header-wrapper">
          <h2>Contact Us</h2>
          <p>Fill out the form below and we'll get back to you as soon as possible!</p>
        </div>
        
        {submitStatus && (
          <div className={`submit-status ${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your Name" 
              required 
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="Your Phone Number" 
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="address">Address *</label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              placeholder="Your Address" 
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="service">Service Interested In *</label>
            <select id="service" name="service" required disabled={isSubmitting}>
              <option value="">Select a Service</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="multi-unit">Multi-Unit</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="How can we help you?" 
              rows="4" 
              required
              disabled={isSubmitting}
            ></textarea>
          </div>
          
          <div className="form-footer">
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
