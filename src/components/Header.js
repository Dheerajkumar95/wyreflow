import React,{useRef} from "react";
import logo from "../assets/images/wyreflow-logohigh.png";
 
const Header = () => {
  
  const navbarRef = useRef();
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
  };
  return (
    <header id="header">
      <div className="header-logo">
        <a href="index.html"><img src={logo} alt="Wyreflow Logo" /></a>
      </div>
      <div class="hamburger" id="hamburger">
                    <i class='bx bx-menu'  onClick={navbarHandler}></i>
                </div>
      <nav className="navbar" ref={navbarRef}>
        <ul id="navbar-list-item">
          <li><a href="./index.html">Home</a></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle">Services <i class='bx bxs-chevron-down'></i></a>
            <div className="dropdown-content services-dropdown">
              <div className="dropdown-grid">
                <a href="/artifical.html" target="blank">Artificial Intelligence</a>
                <a href="./pages-html/cloud.html">Cloud</a>
                <a href="./pages-html/cloud.html">Consulting</a>
                <a href="./pages-html/cloud.html">Cybersecurity</a>
                <a href="./pages-html/cloud.html">Cognitive Business Operations</a>
                <a href="./pages-html/cloud.html">Data and Analytics</a>
                <a href="./pages-html/cloud.html">Enterprises Solution</a>
                <a href="./pages-html/cloud.html">Network Solution and Services</a>
              </div>
            </div>
          </li>
          <li><a href="./pages-html/about.html">About Us</a></li>
          <li><a href="./pages-html/career.html">Career</a></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle">Industries <i class='bx bxs-chevron-down'></i></a>
            <div className="dropdown-content services-dropdown">
              <div className="dropdown-grid">
                <a href="./pages-html/artifical.html">E-commerce</a>
                <a href="./pages-html/cloud.html">Transportation & Logistics</a>
                <a href="./pages-html/cloud.html">Research and Development</a>
                <a href="./pages-html/cloud.html">HealthCare</a>
                <a href="./pages-html/cloud.html">Consulting</a>
                <a href="./pages-html/cloud.html">Data and Analytics</a>
                <a href="./pages-html/cloud.html">Software and Platforms</a>
                <a href="./pages-html/cloud.html">Ed-tech/Education</a>
                <a href="./pages-html/cloud.html">Government & Public Services</a>
                <a href="./pages-html/cloud.html">Communications and Media</a>
                <a href="./pages-html/cloud.html">High Tech</a>
                <a href="./pages-html/cloud.html">Banking</a>
              </div>
            </div>
          </li>
          <li><a href="./pages-html/contact.html">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;