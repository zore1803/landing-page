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
    <section className="pricing-section" id="pricing">
      <div className="pricing-main-container">
        <h2 className="pricing-title">Pricing</h2>
        <p className="pricing-subtitle">Design Bundles Offered:</p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className="pricing-card">
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
      </div>
    </section>
  );
};

export default Pricing;
