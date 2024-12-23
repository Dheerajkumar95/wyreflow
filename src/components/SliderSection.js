import React, { useState, useEffect } from 'react';
import logo from "../assets/images/wyreflow-logohigh.png";

const SliderSection = () => {
  // State to track the active slide
  const [activeSlide, setActiveSlide] = useState(0);

  // Slides data
  const slides = [
    {
      background: "https://as1.ftcdn.net/v2/jpg/05/99/51/76/1000_F_599517628_iZx5tPBHKGUW7A74wa4WTWryQx7HEmlE.jpg",
      title: "Shaping the Future of Business",
      description: "Empowering organizations to thrive in a digital-first world with our advanced technology"
    },
    {
      background: "https://static.vecteezy.com/system/resources/thumbnails/034/637/931/small_2x/a-futuristic-robotic-doctor-in-a-doctor-s-coat-with-a-stethoscope-on-a-blue-background-concept-of-advanced-medical-technology-ai-generative-photo.jpg",
      title: "AI & Digital Transformation",
      description: "Leveraging AI and digital transformation to drive business innovation"
    },
    {
      background: "https://static.vecteezy.com/system/resources/thumbnails/035/657/247/small_2x/futuristic-collaboration-human-and-robot-hands-touching-ai-artificial-intelligence-technological-machine-innovation-global-network-data-photo.jpg",
      title: "Cloud Solutions",
      description: "Securing your future with scalable cloud solutions"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);  // Loop to the first slide when reaching the last
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);  // Cleanup on unmount
  }, [slides.length]);

  // Handle dot click to change active slide
  const handleDotClick = (index) => {
    setActiveSlide(index);  // Update active slide based on dot click
  };

  return (
    <section id="Slider">
      <div className="slider-container">
        {/* Slider wrapper */}
        <div className="slider" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div
              className="slide"
              key={index}
              style={{
                background: `url(${slide.background}) no-repeat center center/cover`,
              }}
            >
              <div className="content">
                <img src={logo} alt="logo" />
                <div>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider controls (dots) */}
        <div className="slider-controls">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${activeSlide === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}  // Click to change active slide
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
