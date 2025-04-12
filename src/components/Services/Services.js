import React from 'react';
import './Services.css';
import residentialIcon from '../../assets/residential-icon.svg';
import commercialIcon from '../../assets/commercial-icon.svg';
import multiUnitIcon from '../../assets/multi-unit-icon.svg';

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Professional Power Washing Services</h2>
        
        <div className="services-grid">
          <div className="service-category">
            <div className="service-icon-container">
              <img src={residentialIcon} alt="Residential Services" className="service-icon" />
            </div>
            <h3 className="category-title">Residential</h3>
            <ul className="service-list">
              <li>Soft Washing</li>
              <li>House Washing</li>
              <li>Driveway Cleaning</li>
              <li>Porch Cleaning</li>
              <li>Concrete Sealing</li>
              <li>Paver Cleaning</li>
            </ul>
          </div>
          
          <div className="service-category">
            <div className="service-icon-container">
              <img src={commercialIcon} alt="Commercial Services" className="service-icon" />
            </div>
            <h3 className="category-title">Commercial</h3>
            <ul className="service-list">
              <li>Soft Washing</li>
              <li>Building Washing</li>
              <li>Concrete Cleaning</li>
              <li>Window Cleaning</li>
              <li>Concrete Sealing</li>
              <li>Paver Cleaning</li>
            </ul>
          </div>
          
          <div className="service-category">
            <div className="service-icon-container">
              <img src={multiUnitIcon} alt="Multi-Unit Services" className="service-icon" />
            </div>
            <h3 className="category-title">Multi-Unit</h3>
            <ul className="service-list">
              <li>Apartment Washing</li>
              <li>Townhome Washing</li>
              <li>Tennis Courts</li>
              <li>HOA Cleaning</li>
              <li>Pool Deck Cleaning</li>
              <li>Paver Cleaning</li>
            </ul>
          </div>
        </div>
        
        <h2 className="services-subtitle">Best Pressure Washing Company Near You</h2>
      </div>
    </section>
  );
};

export default Services;
