import React from 'react';
import './ServiceSection.css';

// Import deck image as a placeholder for now
import deckImage from '../../images/PRESSURE WASH DECK.jpeg';

const ServiceSection = ({ id }) => {
  return (
    <section className="service-section" id={id}>
      <div className="service-container">
        <h2 className="service-title">Our Main Services</h2>
        
        <div className="service-separator">
          <span className="line"></span>
          <span className="star">★</span>
          <span className="line"></span>
        </div>
        
        <p className="service-intro">
          At Odyssey Pressure Washing, we specialize in the following services, among others:
        </p>
        
        <div className="service-cards">
          {/* Residential Card */}
          <div className="service-card">
            <div className="service-image-container">
              <img src={deckImage} alt="Residential Pressure Washing" className="service-image" />
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                </svg>
              </div>
            </div>
            <h3 className="service-card-title">RESIDENTIAL</h3>
            <p className="service-card-text">
              Our residential services include house washing, driveway cleaning, deck & fence restoration, and more. We use safe, effective methods to enhance your home's appearance and protect your investment.
            </p>
          </div>
          
          {/* Commercial Card */}
          <div className="service-card">
            <div className="service-image-container">
              <img src={deckImage} alt="Commercial Pressure Washing" className="service-image" />
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/>
                </svg>
              </div>
            </div>
            <h3 className="service-card-title">COMMERCIAL</h3>
            <p className="service-card-text">
              We help businesses maintain their professional appearance with storefront cleaning, parking lot washing, graffiti removal, and other commercial exterior cleaning services tailored to your needs.
            </p>
          </div>
          
          {/* Multi-Unit Card */}
          <div className="service-card">
            <div className="service-image-container">
              <img src={deckImage} alt="Multi-Unit Pressure Washing" className="service-image" />
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352h117.4C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/>
                </svg>
              </div>
            </div>
            <h3 className="service-card-title">MULTI-UNIT</h3>
            <p className="service-card-text">
              Our specialized multi-unit services cater to HOAs, apartment complexes, and condominiums. We offer comprehensive exterior cleaning programs to maintain property values and resident satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
