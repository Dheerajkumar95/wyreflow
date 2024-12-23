import React from 'react';
import Artificial from "../assets/images/Artifical-image.png";
import Cloud from "../assets/images/cloud-home-page-png.png";
import Consulting from "../assets/images/Consulting-images.png";
import Cybersecurity from "../assets/images/Cybersecurity-image.png";
import Data from "../assets/images/Data-image.png";
import cognitive from "../assets/images/cognitive-image.png";
import Enterprineaure from "../assets/images/Enterprineaure-image.png";
import Network from "../assets/images/Network-image.png";
 
const ServicesSection = () => {
  return (
    <section id="Services">
      <div className="service-container">
        <div className="services-heading">
          <h1>Services</h1>
          <h2>Transform your business with advanced technologies</h2>
        </div>
        <div className="service-container-content">
          <a href="/pages-html/artifical.html">
            <div className="service-img-container">
              <img src={Artificial} alt="Artificial Intelligence" />
              <div className="service-overlay">
                <p>Artificial Intelligence</p>
              </div>
            </div>
          </a>
          <a href="/pages-html/artifical.html">
            <div className="service-img-container">
              <img src={Cloud} alt="Cloud" />
              <div className="service-overlay">
                <p>Cloud</p>
              </div>
            </div>
          </a>
          <a href="/pages-html/artifical.html">
            <div className="service-img-container">
              <img src={Consulting} alt="Consulting" />
              <div className="service-overlay">
                <p>Consulting</p>
              </div>
            </div>
          </a>
          <a href="/pages-html/artifical.html">
            <div className="service-img-container">
              <img src={Cybersecurity} alt="Cybersecurity" />
              <div className="service-overlay">
                <p>Cybersecurity</p>
              </div>
            </div>
          </a>
        </div>
        <div className="service-container-content">
          <a href="/pages-html/artifical.html">
            <div className="service-img-container">
              <img src={cognitive} alt="cognitive" />
              <div className="service-overlay">
                <p>Cognitive Business Operations</p>
              </div>
            </div>
          </a>
          <a href="/pages-html/artifical.html">
            <div className="service-img-container">
              <img src={Data} alt="Data" />
              <div className="service-overlay">
                <p>Data and Analytics</p>
              </div>
            </div>
          </a>
          <a href="/pages-html/artifical.html">
            <div className="service-img-container">
              <img src={Enterprineaure} alt="Enterprineaure" />
              <div className="service-overlay">
                <p>Enterprises Solution</p>
              </div>
            </div>
          </a>
          <a href="/pages-html/artifical.html">
            <div className="service-img-container">
              <img src={Network} alt="Network" />
              <div className="service-overlay">
                <p>Network Solution and Services</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;