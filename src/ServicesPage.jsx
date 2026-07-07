import React, { useState, useMemo } from 'react';
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
import cardImg0 from './assets/servicessvg/card_img_0.png';
import brandLogo from './assets/logos/CopperBrand.svg';
import webLogo from './assets/logos/CopperWeb.svg';
import flowLogo from './assets/logos/CopperFlow.svg';

const getLogo = (suffix) => {
  if (suffix === 'Brand') return brandLogo;
  if (suffix === 'Web') return webLogo;
  if (suffix === 'Flow') return flowLogo;
  return brandLogo;
};

function ServicesPage() {
  const [pricingService, setPricingService] = useState('brand');

  const stripeAnimationCSS = useMemo(() => {
    const TOTAL_TIME = 9; 
    const FPS = 15;
    const frames = TOTAL_TIME * FPS;
    let css = '';
    
    for (let i = 0; i < 15; i++) { // SVG has 15 stripes
      const d = Math.min(i, 14 - i);
      const peaks = [
        0.5 + i * 0.15,               
        3.5 + (14 - i) * 0.15,        
        6.5 + d * 0.15                
      ];
      if (d < 7) {
        peaks.push(7.4 + (7 - d) * 0.15); 
      }

      let keyframes = `@keyframes svgComplexPulse${i} {\n`;
      
      for (let frame = 0; frame <= frames; frame++) {
        const t = frame / FPS;
        let maxBright = 0.2;
        
        peaks.forEach(peak => {
          let bright = 0.2;
          if (t >= peak - 0.2 && t <= peak) {
            const progress = (t - (peak - 0.2)) / 0.2;
            bright = 0.2 + progress * 0.8;
          } else if (t > peak && t <= peak + 0.6) {
            const progress = (t - peak) / 0.6;
            bright = 1.0 - progress * 0.8;
          }
          if (bright > maxBright) maxBright = bright;
        });
        
        const percent = ((t / TOTAL_TIME) * 100).toFixed(1);
        keyframes += `  ${percent}% { opacity: ${maxBright.toFixed(2)}; }\n`;
      }
      keyframes += `}\n`;
      css += keyframes;
      
      css += `.svg-stripe-${i} { animation: svgComplexPulse${i} 9s infinite linear; }\n`;
    }
    
    // Add slow breathing animation for the colored blobs
    css += `
      @keyframes blobBreathe {
        0% { transform: scale(1) rotate(0deg); opacity: 0.8; }
        50% { transform: scale(1.05) rotate(2deg); opacity: 1; }
        100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
      }
      .svg-blob { transform-origin: center; animation: blobBreathe 12s infinite ease-in-out; }
      .svg-blob-orange { animation-delay: -3s; }
      .svg-blob-copper { animation-delay: -6s; }
      .svg-blob-light { animation-delay: -9s; }
    `;
    
    return css;
  }, []);

  return (
    <>
      <Navbar activeSection="services" />

      <div className="services-page">
        {/* New Hero Section */}
        <div className="services-hero-wrap">
          <style>{stripeAnimationCSS}</style>
          {/* Animated SVG background container */}
          <div className="services-hero-bg-container">
            <ServicesHeroBg />
          </div>
          
          <div className="services-hero-title-container">
            <h1 className="services-hero-title">Services To Design<br/>Your Brand</h1>
          </div>
        </div>

        <div className="services-hero-subtitle-wrap">
          <p className="services-hero-sub">
            From <strong>strategy and visual identity to websites and custom portals</strong>, we create thoughtful brand experience that helps your business stand out, connect and grow.
          </p>
        </div>

        {/* Three clickable service cards */}
        <div className="svc-cards-section">
          <div className="svc-cards-grid new-layout">
            {services.map((s) => (
              <Link to={`/services/${s.slug}`} className="svc-card new-card" key={s.slug}>
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
          <div className="ecosystem-header">
            <h2 className="ecosystem-title">Discover The CopperEcosystem</h2>
            <h3 className="ecosystem-subtitle">Services</h3>
          </div>

          <div className="dark-pricing-wrapper">
            <ServicePricing activeService={pricingService} onServiceChange={setPricingService} showToggle={true} hideTitle={true} hideCustomBanner={true} />
          </div>

          <div className="custom-req-banner">
            <div className="custom-req-ellipse"></div>
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
