import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FAQ from './FAQ';
import Booking from './Booking';
import ServicePricing from './ServicePricing';
import ContactHeroBg from './ContactHeroBg';
import copperBrandLogo from './assets/logos/CopperBrand.svg';

import './BrandServicePage.css';

export default function BrandServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const compareSections = [
    {
      title: "Brand Identity Design & Strategy",
      features: [
        { name: "Brand Voice & Tone Guidelines", plans: [true, true, true] },
        { name: "Target Audience Definition", plans: [true, true, true] },
        { name: "Competitor Analysis", plans: [true, true, true] },
        { name: "Logo System", plans: [true, true, true] },
        { name: "Typography System", plans: [true, true, true] },
        { name: "Color System", plans: [true, true, true] },
        { name: "Brand Illustrations", plans: [true, true, true] },
        { name: "Pattern & Texture Library", plans: [true, true, true] },
        { name: "Brand Guidelines", plans: [true, true, true] }
      ]
    },
    {
      title: "Corporate Branding & Business Assets",
      features: [
        { name: "Business Stationery", plans: [false, true, true] },
        { name: "Visiting Card", plans: [false, true, true] },
        { name: "Letterhead", plans: [false, true, true] },
        { name: "Envelope", plans: [false, true, true] },
        { name: "Invoice & Quotation Template", plans: [false, true, true] },
        { name: "Stamp/Seal Design", plans: [false, true, true] },
        { name: "Employee ID Card", plans: [false, true, true] },
        { name: "Email Signature", plans: [false, true, true] }
      ]
    },
    {
      title: "Marketing Collateral & Social Media Design",
      features: [
        { name: "Brochure/Catalogue Design", plans: [false, true, true] },
        { name: "Flyer/Leaflet Design", plans: [false, true, true] },
        { name: "Banner/Standee Design", plans: [false, true, true] },
        { name: "Social Media Post Design", plans: [false, true, true] },
        { name: "Reel/Story Template", plans: [false, true, true] },
        { name: "Presentation Template", plans: [false, true, true] },
        { name: "Virtual Meeting Background", plans: [false, true, true] },
        { name: "Newsletter Template", plans: [false, true, true] }
      ]
    },
    {
      title: "Packaging, Environmental & Merchandise Design",
      features: [
        { name: "Product Packaging", plans: [false, false, true] },
        { name: "Product Label Design", plans: [false, false, true] },
        { name: "Hand Tag Design", plans: [false, false, true] },
        { name: "Merchandise Design", plans: [false, false, true] },
        { name: "Uniform/Apparel Design", plans: [false, false, true] },
        { name: "Signage & Wayfinding", plans: [false, false, true] },
        { name: "Voucher/Coupon Design", plans: [false, false, true] },
        { name: "Exhibition/Trade Show Booth", plans: [false, false, true] }
      ]
    }
  ];

  return (
    <div className="brand-service-page">
      <Navbar activeSection="services" />
      
      {/* Hero Section */}
      <div className="bs-hero-wrap">
        <div className="bs-hero-card">
          <div className="bs-hero-bg">
            <ContactHeroBg />
          </div>
          <div className="bs-hero-content">
            <h1 className="bs-hero-title">Services To Design<br/>Your Brand</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bs-content-section">
        <div className="bs-content-inner">
          <div className="bs-content-header">
            <span className="bs-tag">BRAND IDENTITY</span>
            <img src={copperBrandLogo} alt="Copper Brand" className="bs-main-logo" />
            <p className="bs-desc">
              <span className="desc-highlight text-orange italic-text">From first impressions to lasting recognition. </span>
              We believe great brands are built through consistency at every touchpoint. By combining strategy, visual identity, print, packaging, and branded assets, we create unified brand experiences that people remember and businesses grow with.
            </p>
          </div>

          <div className="bs-subsection">
            <h3 className="bs-sub-title reveal-up"><strong>Brand Identity Design</strong> <span className="font-regular">& Strategy</span></h3>
            <p className="bs-sub-desc reveal-up" style={{ transitionDelay: '100ms' }}>
              Build a distinctive brand foundation with strategy, visual identity, and design systems that create consistency, recognition, and long-term growth.
            </p>
            <div className="bs-tags-container reveal-up" style={{ transitionDelay: '200ms' }}>
              <span className="bs-skill-tag">Brand Strategy</span>
              <span className="bs-skill-tag">Logo Design</span>
              <span className="bs-skill-tag">Brand Guidelines</span>
              <span className="bs-skill-tag">Typography System</span>
              <span className="bs-skill-tag">Color Palette</span>
              <span className="bs-skill-tag">Brand Illustrations</span>
              <span className="bs-skill-tag">Icons & Favicon</span>
              <span className="bs-skill-tag">Visual Assets</span>
            </div>
            <div className="bs-grid-identity">
              <div className="bs-card bg-light-blue reveal-up" style={{ transitionDelay: '300ms' }}></div>
              <div className="bs-card bg-dark reveal-up" style={{ transitionDelay: '400ms' }}></div>
              <div className="bs-card bg-light-gray reveal-up" style={{ transitionDelay: '500ms' }}></div>
            </div>
          </div>

          <div className="bs-section-divider"></div>

          <div className="bs-subsection">
            <h3 className="bs-sub-title reveal-up"><strong>Corporate Branding</strong> <span className="font-regular">&</span> <strong>Business Assets</strong></h3>
            <p className="bs-sub-desc reveal-up" style={{ transitionDelay: '100ms' }}>
              Equip your business with professional stationery, corporate communication, and digital assets that ensure a consistent brand experience across every touchpoint.
            </p>
            <div className="bs-tags-container reveal-up" style={{ transitionDelay: '200ms' }}>
              <span className="bs-skill-tag">Visiting Card</span>
              <span className="bs-skill-tag">Letterhead</span>
              <span className="bs-skill-tag">Envelope Design</span>
              <span className="bs-skill-tag">Invoice & Quotation</span>
              <span className="bs-skill-tag">Email Signature</span>
              <span className="bs-skill-tag">Presentation Template</span>
              <span className="bs-skill-tag">Employee ID Card</span>
            </div>
            <div className="bs-grid-corporate">
              <div className="bs-card bg-light-blue reveal-up" style={{ transitionDelay: '300ms' }}></div>
              <div className="bs-card bg-dark reveal-up" style={{ transitionDelay: '400ms' }}></div>
              <div className="bs-card bg-light-gray reveal-up" style={{ transitionDelay: '500ms' }}></div>
            </div>
          </div>

          <div className="bs-section-divider"></div>

          <div className="bs-subsection">
            <h3 className="bs-sub-title reveal-up"><strong>Marketing</strong> <span className="font-regular">Collateral &</span> <strong>Social Media</strong> <span className="font-regular">Design</span></h3>
            <p className="bs-sub-desc reveal-up" style={{ transitionDelay: '100ms' }}>
              Expand your brand with impactful marketing materials and social media assets designed to engage audiences and communicate with clarity.
            </p>
            <div className="bs-tags-container reveal-up" style={{ transitionDelay: '200ms' }}>
              <span className="bs-skill-tag">Brochure/Catalogue Design</span>
              <span className="bs-skill-tag">Flyer/Poster Design</span>
              <span className="bs-skill-tag">Social Media Template & Banner</span>
              <span className="bs-skill-tag">Presentation Design</span>
              <span className="bs-skill-tag">Digital Marketing Assets</span>
              <span className="bs-skill-tag">Newsletter Design</span>
            </div>
            <div className="bs-grid-marketing">
              <div className="bs-card bg-light-blue reveal-up" style={{ transitionDelay: '300ms' }}></div>
              <div className="bs-card bg-dark reveal-up" style={{ transitionDelay: '400ms' }}></div>
              <div className="bs-card bg-light-gray reveal-up" style={{ transitionDelay: '500ms' }}></div>
              <div className="bs-card bg-light-gray reveal-up" style={{ transitionDelay: '600ms' }}></div>
              <div className="bs-card bg-light-blue reveal-up" style={{ transitionDelay: '700ms' }}></div>
              <div className="bs-card bg-dark reveal-up" style={{ transitionDelay: '800ms' }}></div>
            </div>
          </div>

          <div className="bs-section-divider"></div>

          <div className="bs-subsection">
            <h3 className="bs-sub-title reveal-up"><strong>Packaging, Environmental & Merchandise</strong> <span className="font-regular">Design</span></h3>
            <p className="bs-sub-desc reveal-up" style={{ transitionDelay: '100ms' }}>
              Bring your brand to life through packaging, retail experiences, signage, and branded merchandise that leave a lasting impression.
            </p>
            <div className="bs-tags-container reveal-up" style={{ transitionDelay: '200ms' }}>
              <span className="bs-skill-tag">Label & Box Design</span>
              <span className="bs-skill-tag">Carry Bag/Tote Design</span>
              <span className="bs-skill-tag">Signage & Wayfinding</span>
              <span className="bs-skill-tag">Office Branding (Wall Graphics)</span>
              <span className="bs-skill-tag">T-Shirt/Uniform Design</span>
              <span className="bs-skill-tag">Mug/Bottle Branding</span>
            </div>
            <div className="bs-grid-packaging">
              <div className="bs-card bg-light-blue reveal-up" style={{ transitionDelay: '300ms' }}></div>
              <div className="bs-card bg-dark reveal-up" style={{ transitionDelay: '400ms' }}></div>
              <div className="bs-card bg-light-gray reveal-up" style={{ transitionDelay: '500ms' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <ServicePricing activeService="brand" showToggle={false} />

      {/* Compare Plans */}
      <div className="compare-plans-section">
        <div className="compare-plans-inner">
          <h2 className="cp-title reveal-up">Compare Plans</h2>
          <p className="cp-subtitle reveal-up" style={{ transitionDelay: '100ms' }}>Every plan includes the core research tools. Pick the one that matches how many shops, products, and advertisers you track.</p>
          
          <div className="cp-table-container">
            <table className="cp-table">
              <thead>
                <tr>
                  <th className="cp-feature-col"></th>
                  <th className="cp-plan-col">
                    <div className="cp-plan-name reveal-up" style={{ transitionDelay: '200ms' }}>Essential</div>
                    <div className="cp-plan-desc reveal-up" style={{ transitionDelay: '300ms' }}>Build a clear, professional brand identity ready for launch</div>
                    <div className="cp-btn-wrap-light reveal-up" style={{ transitionDelay: '400ms' }}>
                      <button className="cp-btn-light">Get Started</button>
                    </div>
                  </th>
                  <th className="cp-plan-col cp-highlight-col">
                    <div className="cp-plan-name reveal-up" style={{ transitionDelay: '300ms' }}>Advance</div>
                    <div className="cp-plan-desc reveal-up" style={{ transitionDelay: '400ms' }}>Strengthen your brand with business, communication and digital assets</div>
                    <div className="cp-btn-wrap-dark reveal-up" style={{ transitionDelay: '500ms' }}>
                      <button className="cp-btn-dark">Get Started</button>
                    </div>
                  </th>
                  <th className="cp-plan-col">
                    <div className="cp-plan-name reveal-up" style={{ transitionDelay: '400ms' }}>Premium</div>
                    <div className="cp-plan-desc reveal-up" style={{ transitionDelay: '500ms' }}>Scale your brand with marketing, packaging and promotional solutions</div>
                    <div className="cp-btn-wrap-light reveal-up" style={{ transitionDelay: '600ms' }}>
                      <button className="cp-btn-light">Get Started</button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareSections.map((section, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <tr className="cp-section-row">
                      <td>
                        <div className="cp-section-title reveal-up">{section.title}</div>
                      </td>
                      <td></td>
                      <td className="cp-highlight-col"></td>
                      <td></td>
                    </tr>
                    {section.features.map((feature, fIdx) => (
                      <tr key={`${sIdx}-${fIdx}`}>
                        <td><div className="cp-feature-name reveal-right">{feature.name}</div></td>
                        <td className="cp-check">
                          {feature.plans[0] ? (
                            <div className="cp-dot-wrap reveal-up" style={{ transitionDelay: '100ms' }}>
                              <span className="cp-dot cp-dot-grey"></span>
                            </div>
                          ) : (
                            <div className="cp-dot-wrap reveal-up" style={{ transitionDelay: '100ms' }}>
                              <span className="cp-dash">-</span>
                            </div>
                          )}
                        </td>
                        <td className="cp-check cp-highlight-col">
                          {feature.plans[1] ? (
                            <div className="cp-dot-wrap reveal-up" style={{ transitionDelay: '200ms' }}>
                              <span className="cp-dot cp-dot-orange"></span>
                            </div>
                          ) : (
                            <div className="cp-dot-wrap reveal-up" style={{ transitionDelay: '200ms' }}>
                              <span className="cp-dash">-</span>
                            </div>
                          )}
                        </td>
                        <td className="cp-check">
                          {feature.plans[2] ? (
                            <div className="cp-dot-wrap reveal-up" style={{ transitionDelay: '300ms' }}>
                              <span className="cp-dot cp-dot-grey"></span>
                            </div>
                          ) : (
                            <div className="cp-dot-wrap reveal-up" style={{ transitionDelay: '300ms' }}>
                              <span className="cp-dash">-</span>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Brands We've Helped Grow */}
      <div className="bs-brands-section">
        <div className="bs-brands-inner">
          <span className="bs-tag">BRANDS & PARTNERS</span>
          <h2 className="bs-brands-title">Brands We've Helped Grow</h2>
          <div className="bs-brands-grid">
            <div className="bs-brand-box"></div>
            <div className="bs-brand-box"></div>
            <div className="bs-brand-box"></div>
            <div className="bs-brand-box"></div>
          </div>
        </div>
      </div>

      <FAQ />
      <Booking />
      <Footer />
    </div>
  );
}
