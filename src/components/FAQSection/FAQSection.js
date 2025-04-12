import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can You Remove Oil From My Concrete?",
      answer: "Yes, we can remove most oil stains from concrete surfaces. Our team uses specialized degreasers and hot water pressure washing techniques specifically designed for oil removal. For stubborn or old stains, we may need multiple treatments, but we'll assess this during our initial evaluation."
    },
    {
      question: "Will Your Cleaning Products Harm My Plants?",
      answer: "We use eco-friendly cleaning solutions that are safe for your landscaping when properly diluted. As an additional precaution, we pre-wet all plants before cleaning and rinse them thoroughly afterward to ensure no chemical residue remains. Our technicians are trained to protect your landscaping throughout the cleaning process."
    },
    {
      question: "What Chemicals Do You Use?",
      answer: "We use professional-grade, biodegradable cleaning solutions that are effective yet environmentally responsible. For most residential cleaning, we utilize sodium hypochlorite and surfactants in very diluted concentrations. We adjust our chemical mixtures based on the specific surface and level of contamination while always prioritizing safety."
    },
    {
      question: "How Do You Ensure My Pets and Surrounding Areas Are Safe?",
      answer: "Safety is our priority! We recommend keeping pets indoors during service. We carefully control overspray, use barriers when needed, and thoroughly rinse all treated areas. Our technicians are trained to be aware of their surroundings and take precautions to protect your property and living things."
    },
    {
      question: "Do You Bring Your Own Water On-Site?",
      answer: "For most jobs, we connect to your water supply using a standard garden hose connection. Our equipment is designed to use water efficiently while still delivering excellent cleaning results. If you don't have access to water or prefer we bring our own, we can discuss water tank options for your specific project."
    },
    {
      question: "How Do You Price Exterior Cleaning Services in Charlotte, NC?",
      answer: "Our pricing is based on several factors: square footage, level of dirt/contamination, surface type, accessibility, and specific cleaning needs. We provide free, detailed estimates after assessing your property, ensuring you receive an accurate price for your unique situation rather than a one-size-fits-all estimate. Call us at 704-441-1005 to schedule an assessment."
    },
    {
      question: "How Long Does It Take To Wash a House in Charlotte?",
      answer: "A typical house wash takes 2-4 hours, depending on size, design complexity, level of dirt, and accessibility. Larger homes or those requiring additional services like roof or concrete cleaning will take longer. We'll provide a time estimate during our initial assessment so you can plan accordingly."
    }
  ];

  return (
    <section className="faq-section" id={id}>
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        
        <div className="faq-separator">
          <span className="line"></span>
          <span className="star">★</span>
          <span className="line"></span>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
