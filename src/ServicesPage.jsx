import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ServicePricing from './ServicePricing';
import ServicesTestimonial from './ServicesTestimonial';
import FAQ from './FAQ';
import Booking from './Booking';
import Footer from './Footer';
import { services } from './servicesData';
import './ContactPage.css';
import './ServicesPage.css';

function ServicesPage() {
  const [pricingService, setPricingService] = useState('brand');

  const stripes = Array.from({ length: 14 });
  const stripeAnimationCSS = useMemo(() => {
    const TOTAL_TIME = 9; 
    const FPS = 15;
    const frames = TOTAL_TIME * FPS;
    let css = '';
    
    for (let i = 0; i < 14; i++) {
      const d = Math.min(i, 13 - i);
      const peaks = [
        0.5 + i * 0.15,               
        3.5 + (13 - i) * 0.15,        
        6.5 + d * 0.15                
      ];
      if (d < 6) {
        peaks.push(7.4 + (6 - d) * 0.15); 
      }

      let keyframes = `@keyframes servicesComplexPulse${i} {\n`;
      
      for (let frame = 0; frame <= frames; frame++) {
        const t = frame / FPS;
        let maxBright = 0.2;
        
        peaks.forEach(peak => {
          let bright = 0.2;
          if (t >= peak - 0.2 && t <= peak) {
            const progress = (t - (peak - 0.2)) / 0.2;
            bright = 0.2 + progress * 1.0;
          } else if (t > peak && t <= peak + 0.6) {
            const progress = (t - peak) / 0.6;
            bright = 1.2 - progress * 1.0;
          }
          if (bright > maxBright) maxBright = bright;
        });
        
        const percent = ((t / TOTAL_TIME) * 100).toFixed(1);
        const progress = (maxBright - 0.2) / 1.0;
        const saturate = (0.5 + progress * 0.6).toFixed(2);
        
        keyframes += `  ${percent}% { filter: brightness(${maxBright.toFixed(2)}) saturate(${saturate}); }\n`;
      }
      keyframes += `}\n`;
      css += keyframes;
    }
    return css;
  }, []);

  return (
    <>
      <Navbar activeSection="services" />

      <div className="services-page">
        {/* New Hero Section */}
        <div className="services-hero-wrap">
          {/* Background blobs / ellipses for Services */}
          <div className="services-blobs-container">
            <div className="services-ellipse services-ellipse-5"></div>
            <div className="services-ellipse services-ellipse-6"></div>
            <div className="services-ellipse services-ellipse-7"></div>
            <div className="services-ellipse services-ellipse-1"></div>
          </div>
          
          <style>{stripeAnimationCSS}</style>
          <div className="stripes-wrapper">
            {stripes.map((_, index) => (
              <div key={index} className="stripe-container">
                <div 
                  className="stripe-auto"
                  style={{ animation: `servicesComplexPulse${index} 9s infinite linear` }}
                ></div>
                <div className="stripe-hover"></div>
              </div>
            ))}
          </div>
          
          <div className="services-hero-content">
            <h1 className="services-hero-title">Services To Design Your Brand</h1>
            <p className="services-hero-sub">From strategy and visual identity to websites and custom portals, we create thoughtful brand experience that helps your business stand out, connect and grow.</p>
          </div>
        </div>

        {/* Three clickable service cards */}
        <div className="svc-cards-section">
          <div className="svc-cards-grid new-layout">
            {services.map((s) => (
              <Link to={`/services/${s.slug}`} className="svc-card new-card" key={s.slug}>
                <div className="svc-card-header">
                  <h2 className="svc-card-name">
                    <span className="svc-card-name-copper">{s.name}</span>
                    <span className="svc-card-name-suffix">{s.suffix}</span>
                  </h2>
                </div>
                <p className="svc-card-desc new-desc">
                  {s.desc}
                </p>
                <div className="svc-card-image-placeholder">
                  {/* Will hold the image, using CSS background for now */}
                </div>
                <div className="svc-card-more new-more">
                  Get To Know More &rsaquo;
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Dark Container for Ecosystem, Pricing, See it in Action */}
        <div className="services-dark-section">
          <div className="ecosystem-header">
            <h2 className="ecosystem-title">Discover The CopperEcosystem</h2>
            <h3 className="ecosystem-subtitle">Services</h3>
          </div>

          <div className="dark-pricing-wrapper">
            <ServicePricing activeService={pricingService} onServiceChange={setPricingService} showToggle={true} />
          </div>

          <div className="custom-req-banner">
            <div className="custom-req-content">
              <span className="custom-req-label">HAVE A CUSTOM REQUIREMENT?</span>
              <h2 className="custom-req-title">Let's Create Something That Fits Your Brand</h2>
              <p className="custom-req-desc">Not every brand fits into a package. If you're looking for specific services, have custom requirements, or need support for a particular project, we'll build a solution designed around your goals.</p>
            </div>
            <div className="custom-req-action">
              <button className="book-meeting-btn" onClick={() => window.location.href = '#contact'}>Book A Meeting</button>
            </div>
          </div>

          <div className="see-in-action-section">
            <h2 className="see-in-action-title">See It In Action</h2>
            <div className="see-in-action-grid">
              <div className="action-box"></div>
              <div className="action-box"></div>
              <div className="action-box"></div>
              <div className="action-box"></div>
            </div>
            <div className="see-in-action-footer">
              <Link to="/#projects" className="see-more-link">Want to See More Projects? &rsaquo;</Link>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <ServicesTestimonial />

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
