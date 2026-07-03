import React from 'react';
import './Pricing.css';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="pricing-check-icon">
    <circle cx="12" cy="12" r="10" stroke="#E06D20" strokeWidth="1.5" fill="none"/>
    <path d="M8 12.5l2.5 2.5 5-5" stroke="#E06D20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const plans = [
  {
    name: "Essential",
    desc: "Build a clear, professional brand identity ready for launch.",
    features: [
      { text: "Brand Voice & Tone Guidelines" },
      { text: "Target Audience Definition" },
      { text: "Competitor Analysis" },
      {
        text: "Logo System",
        subItems: ["Primary & Secondary Logo", "Brand Icon", "Favicon", "Color Variations"]
      },
      {
        text: "Typography System",
        subItems: ["Primary Font Family", "Type Hierarchy"]
      },
      {
        text: "Color System",
        subItems: ["Primary & Secondary Color Palette", "Brand Gradients"]
      },
      {
        text: "Visual Assets",
        subItems: ["Brand Illustrations", "Pattern / Texture Library"]
      }
    ],
    cta: "Get Started"
  },
  {
    name: "Advance",
    desc: "Strengthen your brand with business, communication, and digital assets.",
    features: [
      { text: "Essential Kit" },
      {
        text: "Business Stationery",
        subItems: ["Visiting Card", "Letterhead", "Envelope Design", "Invoice/Quotation Design", "Stamp/Seal Design"]
      },
      { text: "ID Card/Employee Badge" },
      {
        text: "Digital Communication Assets",
        subItems: ["Email Signature & Newsletter Template", "PowerPoint/Presentation Template"]
      },
      {
        text: "Social Media Assets",
        subItems: ["Social Media Profile", "Post & Reel Template"]
      },
      { text: "Zoom/Google Meet Virtual Background" }
    ],
    cta: "Get Started"
  },
  {
    name: "Ultimate",
    desc: "Scale your brand with marketing, packaging and promotional solutions.",
    features: [
      { text: "Essential Kit" },
      { text: "Advance Kit" },
      {
        text: "Corporate Print",
        subItems: ["Brochure/Catalogue Design", "Flyer/Leaflet Design", "Poster Design", "Banner & Standee Design", "Promotional Voucher/Coupon Design"]
      },
      {
        text: "Packaging & Product Assets",
        subItems: ["Product Packaging Design", "Product Label Design", "Hand Tag Design", "Product Mockups"]
      },
      {
        text: "Environmental Branding",
        subItems: ["Signage & Wayfinding Design", "Exhibition/Trade Show Booth Design", "Merchandise Design", "Uniform/Apparel Design"]
      }
    ],
    cta: "Get Started"
  }
];

const Pricing = () => {
  return (
    <section className="pricing-section global-section" id="pricing">
      <div className="pricing-main-container global-container">
        <h2 className="pricing-title">Pricing</h2>
        <div className="pricing-header-text">
          <p className="pricing-subtitle-italic">Find the Right Fit for Your Brand</p>
          <p className="pricing-subtitle">
            Whether you're just getting started, refreshing your identity, or building a complete brand experience, we've put together flexible packages designed around where your business is today and where you want it to go.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.name === 'Advance' ? 'popular-card' : ''}`}>
              {plan.name === 'Advance' && (
                <div className="popular-banner">MOST POPULAR!</div>
              )}
              <div className="pricing-card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.desc}</p>
              </div>

              <div className="pricing-card-body">
                <h4 className="features-title">Features:</h4>
                <ul className="features-list">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="feature-item">
                      <div className="feature-main">
                        <CheckIcon />
                        <span className="feature-text">{feature.text}</span>
                      </div>
                      {feature.subItems && (
                        <ul className="feature-sublist">
                          {feature.subItems.map((sub, sIndex) => (
                            <li key={sIndex} className="feature-subitem">
                              <span className="bullet">&bull;</span>
                              <span className="subitem-text">{sub}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-card-footer">
                <button className="pricing-cta-btn">{plan.cta}</button>
              </div>
            </div>
          ))}
        </div>

        <div className="custom-plan-banner">
          <div className="ellipse-orange"></div>
          <div className="ellipse-blue"></div>
          
          <div className="custom-plan-content">
            <span className="custom-plan-tag">HAVE A CUSTOM REQUIREMENT?</span>
            <h3 className="custom-plan-title">Let's Create Something That Fits Your Brand</h3>
            <p className="custom-plan-desc">
              Not every brand fits into a package. If you're looking for specific services, have custom requirements, or need support for a particular project, we'll build a solution designed around your goals.
            </p>
          </div>
          <button className="custom-plan-btn">Book A Meeting</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
