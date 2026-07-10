import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FAQ from './FAQ';
import Booking from './Booking';
import ServicePricing from './ServicePricing';
import ContactHeroBg from './ContactHeroBg';
import copperBrandLogo from './assets/logos/CopperBrand.svg';
import copperBrand1 from './assets/projects/copperbrand1.png';
import copperBrand2 from './assets/projects/copperbrand2.png';
import copperBrand3 from './assets/projects/copperbrand3.png';
import project7 from './assets/project-7.png';
import copperBrand4 from './assets/projects/copperbrand4.png';
import copperBrand5 from './assets/projects/copperbrand5.png';
import copperBrand6 from './assets/projects/copperbrand6.png';
import copperBrand7 from './assets/projects/copperbrand7.png';
import copperBrand8 from './assets/projects/copperbrand8.png';
import copperBrand9 from './assets/projects/copperbrand9.png';
import copperBrand10 from './assets/projects/copperbrand10.png';
import copperBrand11 from './assets/projects/copperbrand11.png';
import cottsonClothingImg from './assets/projects/cottsonclothing.png';
import dataCirclesImg from './assets/projects/datacircles.png';
import qodenextImg from './assets/projects/qodenext.png';
import commonGroundsImg from './assets/projects/commongrounds.png';

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
              <div className="bs-card reveal-up" style={{ transitionDelay: '300ms' }}>
                <img src={copperBrand1} alt="Brand Identity Design 1" className="bs-card-img" />
              </div>
              <div className="bs-card reveal-up" style={{ transitionDelay: '400ms' }}>
                <img src={copperBrand2} alt="Brand Identity Design 2" className="bs-card-img" />
              </div>
              <div className="bs-card reveal-up" style={{ transitionDelay: '500ms' }}>
                <img src={copperBrand3} alt="Brand Identity Design 3" className="bs-card-img" />
              </div>
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
              <div className="bs-card reveal-up" style={{ transitionDelay: '300ms' }}>
                <img src={copperBrand5} alt="Corporate Branding" className="bs-card-img" />
              </div>
              <div className="bs-card reveal-up" style={{ transitionDelay: '400ms' }}>
                <img src={project7} alt="Corporate Branding" className="bs-card-img" />
              </div>
              <div className="bs-card reveal-up" style={{ transitionDelay: '500ms' }}>
                <img src={copperBrand4} alt="Corporate Branding" className="bs-card-img" />
              </div>
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
              <div className="bs-card reveal-up" style={{ transitionDelay: '300ms' }}>
                <img src={copperBrand7} alt="Marketing Collateral" className="bs-card-img" />
              </div>
              <div className="bs-card reveal-up" style={{ transitionDelay: '400ms' }}>
                <img src={copperBrand8} alt="Marketing Collateral" className="bs-card-img" />
              </div>
              <div className="bs-card reveal-up" style={{ transitionDelay: '500ms' }}>
                <img src={copperBrand6} alt="Marketing Collateral" className="bs-card-img" />
              </div>
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
              <div className="bs-card reveal-up" style={{ transitionDelay: '300ms' }}>
                <img src={copperBrand11} alt="Packaging & Merchandise Design" className="bs-card-img" />
              </div>
              <div className="bs-card reveal-up" style={{ transitionDelay: '400ms' }}>
                <img src={copperBrand10} alt="Packaging & Merchandise Design" className="bs-card-img" />
              </div>
              <div className="bs-card reveal-up" style={{ transitionDelay: '500ms' }}>
                <img src={copperBrand9} alt="Packaging & Merchandise Design" className="bs-card-img" />
              </div>
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
            <img src={cottsonClothingImg} alt="Cottson Clothing" className="bs-brand-box" />
            <img src={dataCirclesImg} alt="DataCircles" className="bs-brand-box" />
            <img src={qodenextImg} alt="Qodenext" className="bs-brand-box" />
            <img src={commonGroundsImg} alt="Common Grounds" className="bs-brand-box" />
          </div>
          <div className="bs-more-projects-wrap">
            <Link to="/projects" className="bs-more-projects-link">
              <span className="bs-more-projects-text">Want to <strong>See More Projects?</strong></span>
              <div className="bs-more-projects-btn">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 2.5L8 6L4.5 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <FAQ />
      <Booking />
      <Footer />
    </div>
  );
}
