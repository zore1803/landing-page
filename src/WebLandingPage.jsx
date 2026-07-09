import React, { useEffect } from 'react';
import './WebLandingPage.css';
import logoImg from './assets/logo.svg';
import BrandLandingHeroBg from './BrandLandingHeroBg';

import BrandProjectsSection from './BrandProjectsSection';
import ServicePricingComponent from './ServicePricing';
import WallOfLoveComponent from './WallOfLove';
import FAQComponent from './FAQ';
import BookingComponent from './Booking';
import Footer from './Footer';

import logo79 from './assets/logos/Group 79.svg';
import logo80 from './assets/logos/Group 80.svg';
import logo81 from './assets/logos/Group 81.svg';
import logo82 from './assets/logos/Group 82.svg';
import logoDC from './assets/logos/DataCircles White Logo 2 (1).svg';
import nittygrittyLogo from './assets/nittygrittylogo.png';

import connectionIcon from './assets/studio/connection.svg';
import craftsmanshipIcon from './assets/studio/craftsmanship.svg';
import characterIcon from './assets/studio/character.svg';

export default function WebLandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="web-landing-page">
      <div className="bl-hero-wrapper">
        <div className="brand-landing-hero">
          <div className="bl-hero-bg-wrapper">
            <BrandLandingHeroBg />
          </div>
        <nav className="brand-landing-nav">
          <img src={logoImg} alt="Logo" className="bl-logo-img" />
          <button className="bl-lets-talk-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="5" width="16" height="15" rx="3.5" ry="3.5"></rect>
              <line x1="16" y1="3" x2="16" y2="7"></line>
              <line x1="8" y1="3" x2="8" y2="7"></line>
              <line x1="4" y1="11" x2="20" y2="11"></line>
              <circle cx="9" cy="15.5" r="1.5" fill="currentColor" stroke="none"></circle>
            </svg>
            Let's Talk
          </button>
        </nav>
        <div className="brand-landing-hero-content">
          <h1 className="bl-hero-title">A website your<br/>business deserves</h1>
          <p className="bl-hero-subtitle">We design and build custom websites that look distinctive and load fast. The kind that<br/>make people trust you and take action. Let's build yours.</p>
          <div className="bl-hero-btn-wrapper">
            <button className="bl-hero-main-btn">Book A Meeting</button>
            <span className="bl-hero-btn-subtext">Free 30 Mins Video Call</span>
          </div>
        </div>
        <div className="bl-trusted-banner-glass">
          <div className="bl-trusted-text">Brand Who Have<br/>Trusted Us</div>
          <div className="bl-trusted-logos-viewport">
            <div className="bl-trusted-logos-track">
              {/* Original Set */}
              <img src={logo79} alt="Trusted Brand" className="bl-trusted-logo-img logo-1" />
              <img src={logo80} alt="Trusted Brand" className="bl-trusted-logo-img logo-2" />
              <img src={logo81} alt="Trusted Brand" className="bl-trusted-logo-img logo-3" />
              <img src={logo82} alt="Trusted Brand" className="bl-trusted-logo-img logo-4" />
              <img src={logoDC} alt="DataCircles" className="bl-trusted-logo-img logo-dc" />
              <img src={nittygrittyLogo} alt="Nitty Gritty" className="bl-trusted-logo-img logo-nitty" />
              {/* Duplicated Set for infinite loop */}
              <img src={logo79} alt="Trusted Brand" className="bl-trusted-logo-img logo-1" />
              <img src={logo80} alt="Trusted Brand" className="bl-trusted-logo-img logo-2" />
              <img src={logo81} alt="Trusted Brand" className="bl-trusted-logo-img logo-3" />
              <img src={logo82} alt="Trusted Brand" className="bl-trusted-logo-img logo-4" />
              <img src={logoDC} alt="DataCircles" className="bl-trusted-logo-img logo-dc" />
              <img src={nittygrittyLogo} alt="Nitty Gritty" className="bl-trusted-logo-img logo-nitty" />
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Our Belief */}
      <section className="studio-section studio-belief">
        <h2 className="belief-quote reveal-up" style={{ transitionDelay: '100ms' }}>
          <span className="text-light-gray">Inspired by the enduring</span> <span className="text-dark-bold">qualities of copper, our beliefs are rooted in connection, craftsmanship, and thoughtful design,</span> <span className="text-light-gray">guiding how we create brands that grow stronger, connect deeper, and stand the test of time.</span>
        </h2>
        <div className="belief-grid">
          <div className="belief-item reveal-up" style={{ transitionDelay: '200ms' }}>
            <div className="belief-icon">
              <img src={connectionIcon} alt="Connection" className="belief-icon-img" />
            </div>
            <h3>Connection</h3>
            <p>We close the gap between your business and people it's for.</p>
          </div>
          <div className="belief-divider reveal-up" style={{ transitionDelay: '300ms' }}></div>
          <div className="belief-item reveal-up" style={{ transitionDelay: '400ms' }}>
            <div className="belief-icon">
              <img src={craftsmanshipIcon} alt="Craftsmanship" className="belief-icon-img" />
            </div>
            <h3>Craftsmanship</h3>
            <p>Every detail made deliberately, never assembled from a template.</p>
          </div>
          <div className="belief-divider reveal-up" style={{ transitionDelay: '500ms' }}></div>
          <div className="belief-item reveal-up" style={{ transitionDelay: '600ms' }}>
            <div className="belief-icon">
              <img src={characterIcon} alt="Character" className="belief-icon-img" />
            </div>
            <h3>Character</h3>
            <p>Identities with enough personality to be unmistakably yours.</p>
          </div>
        </div>
      </section>

      <BrandProjectsSection />
      
      <div className="bl-pricing-wrapper">
        <ServicePricingComponent activeService="web" showToggle={false} />
      </div>

      <WallOfLoveComponent />
      <FAQComponent />
      <BookingComponent />
      <Footer />

    </div>
  );
}
