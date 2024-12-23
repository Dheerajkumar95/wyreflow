import React from 'react';
import bank from "../assets/images/Bankkkinng.png";
import consultttingg from "../assets/images/consultttingg.png";
import ecommerce from "../assets/images/E-commerce.png";
import healthcare from "../assets/images/healthcare-homepage.png";
import Research from "../assets/images/Research-development.png";
import Software from "../assets/images/Software and Platforms.png";
import Communication from "../assets/images/Communication-media.png";
import EdTECH from "../assets/images/Ed-TECH_ education.png"; 
import Government from "../assets/images/Government -public.png";
import High from "../assets/images/High-tech.png";
import recutiment from "../assets/images/recutiment-image.png";
import Transportation from "../assets/images/Transportation-Logistics.png";

const IndustrySection = () => {
  return (
    <section id="industry">
      <div className="industry-container">
        <h1>Pick Your Industry. See Our Results</h1>
        <div className="industry-content-box-wrap">

          <div className="industry-content-box">
            <a href="./pages-html/banking.html">
              <div className="industry-content-list-item">
                <span className="icon"><img src={bank} alt="Banking" /></span>
                <span>Banking</span>
              </div>
            </a>
            <a href="./pages-html/banking.html">
              <div className="industry-content-list-item">
                <span className="icon"><img src={consultttingg} alt="consultttingg" /></span>
                <span>Consulting</span>
              </div>
            </a>
            <a href="./pages-html/banking.html">
              <div className="industry-content-list-item">
                <span className="icon"><img src={ecommerce} alt="ecommerce" /></span>
                <span>E-commerce</span>
              </div>
            </a>
            <a href="./pages-html/banking.html">
              <div className="industry-content-list-item">
                <span className="icon"><img src={healthcare} alt="healthcare" /></span>
                <span>Healthcare</span>
              </div>
            </a>
            <a href="./pages-html/banking.html">
              <div className="industry-content-list-item">
                <span className="icon"><img src={Research} alt="Research" /></span>
                <span>Research and Development</span>
              </div>
            </a>
            <a href="./pages-html/banking.html">
              <div className="industry-content-list-item">
                <span className="icon"><img src={Software} alt="Software" /></span>
                <span>Software and Platforms</span>
              </div>
            </a>
          </div>
          <div className="industry-content-box">
            <a href="./pages-html/banking.html">
              <div className="industry-content-list-item">
                <span className="icon"><img src={Communication} alt="Communication" /></span>
                <span>Communication and Media</span>
              </div>
            </a>
            <a href="./pages-html/banking.html">
              <div className="industry-content-list-item">
                <span className="icon"><img src={EdTECH} alt="Ed-TECH" /></span>
                <span>Ed-Tech/Education</span>
              </div>
            </a>
            <a href="./pages-html/banking.html">
              <div className="industry-content-list-item">
                <span className="icon"><img src={Government} alt="Government" /></span>
                <span>Government & Public Services</span>
              </div>
            </a>
            <a href="./pages-html/banking.html">
              <div className="industry-content-list-item">
                <span className="icon"><img src={High} alt="High-Tech" /></span>
                <span>High-Tech</span>
              </div>
            </a>
            <a href="./pages-html/banking.html">
              <div className="industry-content-list-item">
                <span className="icon"><img src={recutiment} alt="recutiment" /></span>
                <span>Recruitment</span>
              </div>
            </a>
            <a href="./pages-html/banking.html">
              <div className="industry-content-list-item">
                <span className="icon"><img src={Transportation} alt="Transportation" /></span>
                <span>Transportation & Logistics</span>
              </div>
            </a>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default IndustrySection;