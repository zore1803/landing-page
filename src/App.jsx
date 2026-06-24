import React from 'react';
import './App.css';
import ProcessRoadmap from './ProcessRoadmap';
import Pricing from './Pricing';
import WallOfLove from './WallOfLove';
import FAQ from './FAQ';
import Booking from './Booking';
import Footer from './Footer';
import logoImg from './assets/logo.svg';
import brand1 from './assets/logos/Group 79.svg';
import brand2 from './assets/logos/Group 80.svg';
import brand3 from './assets/logos/Group 81.svg';
import brand4 from './assets/logos/CC LOGO 500X500 FAVICON BLUE BG WHITE FONT BIG SIZE Background Removed 2.svg';
import brand5 from './assets/logos/Group 82.svg';
import brand7 from './assets/logos/DataCircles White Logo 2 (1).svg';

import service1 from './assets/servicessvg/Service 1.svg';
import service2 from './assets/servicessvg/Service 2.svg';
import service3 from './assets/servicessvg/Service 3.svg';
import service4 from './assets/servicessvg/Service 4.svg';
import service5 from './assets/servicessvg/Service 7.svg';
import service6 from './assets/servicessvg/Service 8.svg';

const servicesList = [service1, service2, service3, service4, service5, service6];

function App() {
  // 14 stripes based on the Figma spec (Rectangle 89 through 102)
  const stripes = Array.from({ length: 14 });
  console.log("Logo path loaded as:", logoImg);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logoImg} alt="Copper Studio Logo" className="nav-logo-icon" />
        </div>
        
        <div className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="nav-action">
          <button className="lets-talk-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Let's Talk &rsaquo;
          </button>
        </div>
      </nav>

      <div className="landing-container">
        {/* Background blobs / ellipses */}
      <div className="blobs-container">
        <div className="ellipse ellipse-2"></div>
        <div className="ellipse ellipse-3"></div>
        <div className="ellipse ellipse-4"></div>
        <div className="ellipse ellipse-5"></div>
        <div className="ellipse ellipse-9"></div>
        <div className="ellipse ellipse-1"></div>
        <div className="ellipse ellipse-8"></div>
        <div className="ellipse ellipse-6"></div>
        <div className="ellipse ellipse-7"></div>
      </div>



      {/* Stripes overlay (Group 12 -> Group 105) */}
      <div className="stripes-wrapper">
        {stripes.map((_, index) => (
          <div 
            key={index} 
            className="stripe"
            style={{ animationDelay: `${index * 0.15}s` }}
          ></div>
        ))}
      </div>
      
      {/* Logo */}
      <div className="logo-container">
        <img src={logoImg} alt="Copper Studio Logo" className="main-center-logo" />
        <h2 className="hero-subtitle">From logo to website. Everything your brand needs</h2>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        <div className="scroll-text">scroll to explore</div>
        
        <div className="bottom-center-pill">
          <a href="#projects" className="view-projects-btn">
            View Projects
          </a>
          <a href="#contact" className="lets-talk-dark-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Let's Talk &rsaquo;
          </a>
        </div>

        <div className="copyright">&copy;2026</div>
      </div>
    </div>

      {/* Trusted Brands Section */}
      <section className="trusted-section">
        <h3 className="trusted-title">Trusted by Brands Across India</h3>
        <div className="trusted-logos">
          <img src={brand1} alt="Trusted Brand 1" className="brand-placeholder" />
          <img src={brand2} alt="Trusted Brand 2" className="brand-placeholder" />
          <img src={brand3} alt="Trusted Brand 3" className="brand-placeholder" />
          <img src={brand4} alt="Trusted Brand 4" className="brand-placeholder brand-large" />
          <img src={brand5} alt="Trusted Brand 5" className="brand-placeholder brand-large" />
          <img src={brand7} alt="DataCircles Logo" className="brand-placeholder brand-large" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="services-title">What Services do we provide?</h2>
        
        <div className="services-toggle">
          <button className="toggle-btn active">CopperBrand!</button>
          <button className="toggle-btn">CopperWeb!</button>
        </div>

        <div className="services-grid">
          {servicesList.map((svgSrc, index) => (
            <div key={index} className="service-card-wrapper">
              <img src={svgSrc} alt={`Service ${index + 1}`} className="service-card-img" />
            </div>
          ))}
        </div>
      </section>

      {/* Process Roadmap Section */}
      <ProcessRoadmap />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonials / Wall Of Love Section */}
      <WallOfLove />

      {/* FAQ Section */}
      <FAQ />

      {/* Booking Section */}
      <Booking />

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
