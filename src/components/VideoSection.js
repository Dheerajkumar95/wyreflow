import React from 'react';
import vidio1 from "../assets/images/ezgif-2-31f0e6d883.gif";
import vidio2 from "../assets/ezgif-7-e15a0f5635.gif";
 
const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-wrapper">
           <img className="video" src={vidio1} alt="logo" />
          <div className="overlay">
            <h1>Your Partner in Digital Innovation</h1>
            <div className="overlay-text">
              <p>Driving progress with tailored technology solutions for a dynamic marketplace</p>
            </div>
          </div>
        </div>
        <div className="video-wrapper">
           <img className="video" src={vidio2} alt="logo" />
          <div className="overlay">
            <h1>Accelerating Digital Transformation</h1>
            <div className="overlay-text">
              <p>Building seamless integrations and connectivity solutions that drive modern enterprises</p>
            </div>
          </div>
        </div>
    </div>
  </section>
);
};

export default VideoSection;