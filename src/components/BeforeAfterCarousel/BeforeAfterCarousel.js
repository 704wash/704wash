import React from 'react';
import Slider from 'react-slick';
import beforeAfterImage from '../../images/before-after1.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BeforeAfterCarousel.css';

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow custom-next-arrow`} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="#fff">
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow custom-prev-arrow`} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="#fff">
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
      </svg>
    </div>
  );
};

const BeforeAfterCarousel = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  // Array of 7 slides with different titles but same image
  const slides = [
    { id: 1, title: 'Driveway Transformation', description: 'Removing years of dirt and grime' },
    { id: 2, title: 'Deck Revival', description: 'Restoring wood to its original beauty' },
    { id: 3, title: 'Siding Renewal', description: 'Eliminating mold and mildew' },
    { id: 4, title: 'Fence Cleaning', description: 'From weathered to wonderful' },
    { id: 5, title: 'Patio Perfection', description: 'Making outdoor spaces shine' },
    { id: 6, title: 'Roof Restoration', description: 'Removing black streaks and algae' },
    { id: 7, title: 'Sidewalk Refresh', description: 'Clearing moss and stains' },
  ];

  return (
    <div className="before-after-carousel">
      <div className="carousel-container">
        <h2 className="carousel-title">Before & After Transformations</h2>
        
        <div className="carousel-separator">
          <span className="line"></span>
          <span className="star">★</span>
          <span className="line"></span>
        </div>
        
        <div className="carousel-slider-container">
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className="carousel-slide">
                <div className="slide-content">
                  <h3 className="slide-title">{slide.title}</h3>
                  <p className="slide-description">{slide.description}</p>
                  <div className="image-container">
                    <img 
                      src={beforeAfterImage} 
                      alt={`Before and after of ${slide.title}`} 
                      className="before-after-image"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterCarousel;
