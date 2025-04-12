import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import IntroSection from './components/IntroSection/IntroSection';
import ServiceSection from './components/ServiceSection/ServiceSection';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import ProcessSection from './components/ProcessSection/ProcessSection';
import CallToAction from './components/CallToAction/CallToAction';
import MapSection from './components/MapSection/MapSection';
import FAQSection from './components/FAQSection/FAQSection';
import Footer from './components/Footer/Footer';
import QuotePopup from './components/QuotePopup/QuotePopup';
import QuoteCalculatorModal from './components/QuoteCalculatorModal/QuoteCalculatorModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [resetQuotePopup, setResetQuotePopup] = useState(false);
  
  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
  };
  
  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };
  
  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };
  
  const handleHomeClick = () => {
    // Reset the quote popup when home is clicked
    localStorage.removeItem('quotePopupClosed');
    setResetQuotePopup(prev => !prev); // Toggle to trigger effect in QuotePopup
  };
  
  return (
    <div className="App">
      <Header 
        onContactClick={handleOpenContactModal} 
        isModalOpen={isContactModalOpen} 
        onCloseModal={handleCloseContactModal}
        onHomeClick={handleHomeClick}
      />
      <Hero id="home" onQuoteClick={handleOpenContactModal} />
      <IntroSection id="about-us" />
      <ServiceSection id="services" />
      <ServiceDetail />
      <ProcessSection />
      <MapSection id="areas-served" />
      <CallToAction onQuoteClick={handleOpenContactModal} />
      <FAQSection id="faq" />
      <Footer />
      <QuotePopup onRequestQuote={handleOpenContactModal} resetTrigger={resetQuotePopup} />
      <QuoteCalculatorModal isOpen={isQuoteModalOpen} onClose={handleCloseQuoteModal} />
    </div>
  );
}

export default App;
