import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ServicePricing from './ServicePricing';
import WallOfLove from './WallOfLove';
import FAQ from './FAQ';
import Booking from './Booking';
import Footer from './Footer';
import { services } from './servicesData';
import ServicesHeroBg from './ServicesHeroBg';
import './ContactPage.css';
import './ServicesPage.css';
import cardImg0 from './assets/servicessvg/card_img_0.webp';
import brandLogo from './assets/logos/CopperBrand.svg';
import webLogo from './assets/logos/CopperWeb.svg';
import flowLogo from './assets/logos/CopperFlow.svg';

import commonGroundsImg from './assets/common-grounds.webp';
import dataCirclesImg from './assets/DataCirclesLaptop.webp';
import premiumGroupImg from './assets/image.webp';
import qodenextImg from './assets/QodenextImage.webp';

const getLogo = (suffix) => {
  if (suffix === 'Brand') return brandLogo;
  if (suffix === 'Web') return webLogo;
  if (suffix === 'Flow') return flowLogo;
  return brandLogo;
};

function ServicesPage() {
  const [pricingService, setPricingService] = useState('brand');

  const handleCalendlyPopup = (e) => {
    if (e) e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/thecopperstudio/30min?hide_gdpr_banner=1&hide_event_type_details=1&hide_landing_page_details=1'
      });
    } else {
      window.open('https://calendly.com/thecopperstudio/30min', '_blank');
    }
  };

  return (
    <>
      <Navbar activeSection="services" />

      <div className="services-page">
        {/* New Hero Section */}
        <div className="services-hero-wrap">
          {/* Animated SVG background container */}
          <div className="services-hero-bg-container">
            <ServicesHeroBg />
          </div>
          
          <div className="services-hero-title-container">
            <h1 className="services-hero-title">Services To Design<br/>Your Brand</h1>
          </div>
        </div>

        <div className="services-hero-subtitle-wrap reveal-up">
          <p className="services-hero-sub">
            From <strong>strategy and visual identity to websites and custom portals</strong>, we create thoughtful brand experience that helps your business stand out, connect and grow.
          </p>
        </div>

        {/* Three clickable service cards */}
        <div className="svc-cards-section">
          <div className="svc-cards-grid new-layout">
            {services.map((s, i) => (
              <Link to={`/services/${s.slug}`} className="svc-card new-card reveal-up" key={s.slug} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="svc-card-header">
                  <img src={getLogo(s.suffix)} alt={`Copper${s.suffix} Logo`} className="svc-card-logo-img" />
                </div>
                <p className="svc-card-desc new-desc">
                  <span className="svc-card-highlight">{s.highlight}</span>{s.desc}
                </p>
                <div className="svc-card-image-placeholder">
                  <img src={cardImg0} alt={s.category} className="svc-card-real-img" />
                </div>
                <div className="svc-card-more new-more">
                  <span className="more-grey">Get To </span><span className="more-orange">Know More &rsaquo;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Dark Container for Ecosystem, Pricing, See it in Action */}
        <div className="services-dark-section">
          <div className="ecosystem-header reveal-up">
            <h2 className="ecosystem-title">Discover The CopperEcosystem</h2>
            <h3 className="ecosystem-subtitle">Services</h3>
          </div>

          <div className="dark-pricing-wrapper">
            <ServicePricing activeService={pricingService} onServiceChange={setPricingService} showToggle={true} hideTitle={true} hideCustomBanner={true} />
          </div>

          <div className="custom-req-banner reveal-up">
            <div className="custom-req-ellipse"></div>
            <div className="custom-req-content reveal-up" style={{ transitionDelay: '100ms' }}>
              <span className="custom-req-label">HAVE A CUSTOM REQUIREMENT?</span>
              <h2 className="custom-req-title">Let's Create Something That Fits Your Brand</h2>
              <p className="custom-req-desc">Not every brand fits into a package. If you're looking for specific services, have custom requirements, or need support for a particular project, we'll build a solution designed around your goals.</p>
            </div>
            <div className="custom-req-action reveal-up" style={{ transitionDelay: '200ms' }}>
              <button className="book-meeting-btn" onClick={handleCalendlyPopup}>Book A Meeting</button>
            </div>
          </div>

          <div className="see-in-action-section">
            <h2 className="see-in-action-title reveal-up">See It In Action</h2>
            <div className="see-in-action-grid">
              <div className="action-box reveal-up" style={{ transitionDelay: '100ms' }}>
                <img src={commonGroundsImg} alt="Common Grounds Project" className="action-box-img" />
              </div>
              <div className="action-box reveal-up" style={{ transitionDelay: '200ms' }}>
                <img src={dataCirclesImg} alt="Data Circles Project" className="action-box-img" />
              </div>
              <div className="action-box reveal-up" style={{ transitionDelay: '300ms' }}>
                <img src={premiumGroupImg} alt="Premium Group Project" className="action-box-img" />
              </div>
              <div className="action-box reveal-up" style={{ transitionDelay: '400ms' }}>
                <img src={qodenextImg} alt="Qodenext Project" className="action-box-img" />
              </div>
            </div>
            <div className="see-in-action-footer">
              <Link to="/#projects" className="see-more-link">
                <span className="see-more-grey">Want to</span>
                <span className="see-more-white">See More Projects?</span>
                <span className="see-more-arrow-circle">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 2L9 6L4 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <WallOfLove />

        {/* End section */}
        <FAQ />
        
        {/* Booking Section matching the design "Excited? Let's Talk Today" */}
        <Booking />
        
        <Footer />
      </div>
    </>
  );
}

export default ServicesPage;
