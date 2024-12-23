import React from 'react';
import fb from "../assets/images/fb-image.png";
import wy from "../assets/images/wyreflow.image.png";
import insta from "../assets/images/insta-image.png";
import youtub from "../assets/images/yt-image.png";
import linkedin from"../assets/images/linkedin-image.png"
const Footer = () => {
  return (
    <footer id="Footer ">
      <div className="footer-container">
        <div className="footer-social-container">
          <div className="footer-social-heading">
            <h1>Social</h1>
            <h2>Follow us for the latest updates</h2>
          </div>
          <div className="footer-social-media-container">
            <a href="https://www.facebook.com/wyreflowtechnologies/">
              <div className="social-media-content">
                <img src={fb} alt="" className="social-media-img" />
                <div className="social-media-text">
                  <img src={wy} alt="company-logo" />
                  <p>Facebook</p>
                </div>
              </div>
            </a>
            <a href="https://www.instagram.com/wyreflow_technologies/">
              <div className="social-media-content">
                <img src={insta} alt="" className="social-media-img" />
                <div className="social-media-text">
                  <img src={wy} alt="company-logo" />
                  <p>Instagram</p>
                </div>
              </div>
            </a>
            <a href="https://www.youtube.com/@WyreflowTechnologies">
              <div className="social-media-content">
                <img src={youtub} alt="" className="social-media-img" />
                <div className="social-media-text">
                  <img src={wy} alt="company-logo" />
                  <p>YouTube</p>
                </div>
              </div>
            </a>
            <a href="https://www.linkedin.com/company/wyreflow-technologies">
              <div className="social-media-content">
                <img src={linkedin} alt="" className="social-media-img" />
                <div className="social-media-text">
                  <img src={wy} alt="company-logo" />
                  <p>LinkedIn</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div id="footer-middle-line"></div>
        <div className="footer-more-info-container">
          <div className="more-info-list-item">
            <h2>Industries</h2>
            <ul>
              <a href="/pages-html/banking.html"><li>Banking</li></a>
              <a href="/pages-html/industry-consulting.html"><li>Consulting</li></a>
              <a href="/pages-html/communicaton.html"><li>Communications and Media</li></a>
              <a href="/pages-html/e-commerce.html"><li>E-commerce</li></a>
              <a href="/pages-html/ed-tech.html"><li>Ed-Tech / Education</li></a>
              <a href="/pages-html/govt.html"><li>Government & Public Services</li></a>
              <a href="/pages-html/healthcare.html"><li>HealthCare</li></a>
              <a href="/pages-html/high-tech.html"><li>High-Tech</li></a>
              <a href="/pages-html/recrutiment.html"><li>Recruitment</li></a>
              <a href="/pages-html/software&platforms.html"><li>Software and Platforms</li></a>
              <a href="/pages-html/transport.html"><li>Transportation & Logistics</li></a>
            </ul>
          </div>
          <div className="more-info-list-item">
            <h2>Services</h2>
            <ul>
              <a href="/pages-html/artifical.html"><li>Artificial Intelligence</li></a>
              <a href="/pages-html/cloud.html"><li>Cloud</li></a>
              <a href="/pages-html/services-consulting.html"><li>Consulting</li></a>
              <a href="/pages-html/cybersec.html"><li>Cybersecurity</li></a>
              <a href="/pages-html/businessoper.html"><li>Cognitive Business Operations</li></a>
              <a href="/pages-html/data.html"><li>Data & Analytics</li></a>
              <a href="/pages-html/enterprises.html"><li>Enterprises solution</li></a>
              <a href="/pages-html/network.html"><li>Network Solution and Services</li></a>
            </ul>
          </div>
          <div className="more-info-list-item">
            <h2>More Information</h2>
            <ul>
              <a href="/pages-html/about.html"><li>About us</li></a>
              <a href="/pages-html/career.html"><li>Career</li></a>
              <a href="/pages-html/contact.html"><li>Contact us</li></a>
              <a href="/pages-html/privacy.html"><li>Privacy Notice</li></a>
              <a href="/pages-html/disclaimer.html"><li>Disclaimer</li></a>
            </ul>
          </div>
        </div>
        <div className="footer-last-container">
          <div className="footer-last-content">
            <img src={wy} alt="Wyreflow Logo" />
            <p>©️ 2024 Dheeraj kumar. All Rights Reserved</p>
          </div>
          <div className="social-icon-container">
            <a href="https://www.facebook.com/wyreflowtechnologies/"><span><img src={fb}alt="Facebook" /></span></a>
            <a href="https://www.instagram.com/wyreflow_technologies/"><span><img src={insta} alt="Instagram" /></span></a>
            <a href="https://www.youtube.com/@WyreflowTechnologies"><span><img src={youtub}  alt="YouTube" /></span></a>
            <a href="https://www.linkedin.com/company/wyreflow-technologies"><span><img src={linkedin} alt="LinkedIn" /></span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;