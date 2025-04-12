import React from 'react';
import './ServiceDetail.css';
import deckImage from '../../images/PRESSURE WASH DECK.jpeg'; // Placeholder image for now

const ServiceDetail = () => {
  return (
    <section className="service-detail">
      <div className="service-detail-container">
        <h5 className="service-detail-subtitle">OUR RESIDENTIAL & COMMERCIAL</h5>
        <h2 className="service-detail-title">Exterior Cleaning Services</h2>
        
        <div className="service-detail-separator">
          <span className="line"></span>
          <span className="star">★</span>
          <span className="line"></span>
        </div>
        
        <p className="service-detail-text">
          Thanks to our extensive expertise, we can confidently deliver professional commercial and residential pressure washing 
          in Charlotte, NC and beyond.
        </p>
        
        <p className="service-detail-text">
          With us, you'll have tailored exterior cleaning solutions for your building or surface type, including gentler techniques for 
          roofs, wood, and glass. We also use advanced equipment for commercial cleaning for safe yet effective results.
        </p>
        
        <div className="service-cards-container">
          {/* Residential Services Card */}
          <div className="service-detail-card">
            <div className="service-card-image">
              <img src={deckImage} alt="Residential Property" />
            </div>
            <div className="service-card-content">
              <h3 className="service-card-heading">Residential Services</h3>
              <ul className="service-list">
                <li className="service-item">HOUSE WASHING</li>
                <li className="service-item">ROOF CLEANING</li>
                <li className="service-item">WINDOW CLEANING</li>
                <li className="service-item">GUTTER CLEANING</li>
                <li className="service-item">DECK CLEANING</li>
                <li className="service-item">CONCRETE CLEANING</li>
                <li className="service-item">CHRISTMAS LIGHT INSTALLATION</li>
              </ul>
            </div>
          </div>
          
          {/* Commercial Services Card */}
          <div className="service-detail-card">
            <div className="service-card-image">
              <img src={deckImage} alt="Commercial Property" />
            </div>
            <div className="service-card-content">
              <h3 className="service-card-heading">Commercial Services</h3>
              <ul className="service-list">
                <li className="service-item">BUILDING WASHING</li>
                <li className="service-item">STOREFRONT CLEANING</li>
                <li className="service-item">DRIVE THRU CLEANING</li>
                <li className="service-item">PARKING LOT & GARAGE</li>
                <li className="service-item">DUMPSTER PAD CLEANING</li>
                <li className="service-item">GRAFFITI REMOVAL</li>
                <li className="service-item">AWNING CLEANING</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
