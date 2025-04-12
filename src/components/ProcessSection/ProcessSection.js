import React from 'react';
import './ProcessSection.css';
import BeforeAfterCarousel from '../BeforeAfterCarousel/BeforeAfterCarousel';

const ProcessSection = () => {
  return (
    <>
      <BeforeAfterCarousel />
      <section className="process-section">
        <div className="process-container">
          <h2 className="process-title">Our Step-by-Step <br />Pressure Washing Process</h2>
          
          <div className="process-separator">
            <span className="line"></span>
            <span className="star">★</span>
            <span className="line"></span>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <h3 className="step-title">Initial Assessment</h3>
              <p className="step-text">
                Our technicians begin by conducting an in-person assessment of your Charlotte home or business. 
                There's no better way to get a clear idea of your property's cleaning needs and how best to address them.
              </p>
            </div>
            
            <div className="process-step">
              <h3 className="step-title">Preparation</h3>
              <p className="step-text">
                With great attention to detail, we'll take steps to prepare your property before the exterior cleaning job.
                For example, we water and cover delicate plants. We also tape sensitive areas to avert potential damage.
              </p>
            </div>
            
            <div className="process-step">
              <h3 className="step-title">Application</h3>
              <p className="step-text">
                Next, we will apply antimicrobial cleaning solutions to kill organic growth like mold, mildew, and algae.
                When dealing with durable surfaces, we'll use stronger solutions. For sensitive areas like metal or shingle roofs, 
                we prefer a soft wash.
              </p>
            </div>
            
            <div className="process-step">
              <h3 className="step-title">Rinse</h3>
              <p className="step-text">
                Once the solution has done its job, a thorough rinsing process removes every speck of the cleaning agent 
                and dirt from your property's surface. We'll also rinse nearby plants to dilute chemicals that may have 
                splashed there.
              </p>
            </div>
            
            <div className="process-step">
              <h3 className="step-title">Final Inspection</h3>
              <p className="step-text">
                To wrap up, we'll walk the property with you and inspect the work together.
                Do you have concerns? We address these right away for satisfactory results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessSection;
