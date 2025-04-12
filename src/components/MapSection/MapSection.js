import React from 'react';
import './MapSection.css';
import charlotteMapImage from '../../images/charlotte-map.png';

const MapSection = ({ id }) => {
  // Service areas around Charlotte
  const serviceAreas = [
    "CHARLOTTE, NC",
    "MATTHEWS, NC",
    "MINT HILL, NC",
    "HUNTERSVILLE, NC",
    "CONCORD, NC",
    "PINEVILLE, NC", 
    "INDIAN TRAIL, NC",
    "FORT MILL, SC"
  ];

  return (
    <section className="map-section" id={id}>
      <div className="map-container">
        <div className="map-header">
          <h5 className="map-subtitle">SERVING CHARLOTTE AND SURROUNDING AREAS</h5>
          <h2 className="map-title">With Expert Pressure Washing</h2>
          
          <div className="map-separator">
            <span className="line"></span>
            <span className="star">★</span>
            <span className="line"></span>
          </div>
        </div>
        
        <div className="map-content">
          <div className="map-image-container">
            <img 
              src={charlotteMapImage} 
              alt="Charlotte Service Areas Map" 
              className="charlotte-map" 
            />
          </div>
          
          <div className="service-areas-list">
            {serviceAreas.map((area, index) => (
              <div key={index} className="area-item">
                <div className="location-pin">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M192 0C85.97 0 0 85.97 0 192c0 77.41 26.97 99.03 172.3 309.7c9.531 13.77 29.91 13.77 39.44 0C357 291 384 269.4 384 192C384 85.97 298 0 192 0zM192 272c-44.18 0-80-35.82-80-80S147.8 112 192 112s80 35.82 80 80S236.2 272 192 272z" />
                  </svg>
                </div>
                <span className="area-name">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
