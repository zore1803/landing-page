import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FAQ from './FAQ';
import Booking from './Booking';
import ServicePricing from './ServicePricing';
import ContactHeroBg from './ContactHeroBg';
import copperWebLogo from './assets/logos/CopperWeb.svg';

import './WebServicePage.css';

export default function WebServicePage() {
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
    <div className="web-service-page">
      <Navbar activeSection="services" />
      
      {/* Hero Section */}
      <div className="ws-hero-wrap">
        <div className="ws-hero-card">
          <div className="ws-hero-bg">
            <ContactHeroBg />
          </div>
          <div className="ws-hero-content">
            <h1 className="ws-hero-title">Everything Your Brand<br/>Needs</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="ws-content-section">
        <div className="ws-content-inner">
          <div className="ws-content-header">
            <span className="ws-tag">WEB DESIGN & DEVELOPMENT</span>
            <img src={copperWebLogo} alt="Copper Web" className="ws-main-logo" />
            <p className="ws-desc">
              <span className="desc-highlight text-orange italic-text">We take care of everything your website needs, </span>
              from custom design and development to secure hosting, routine maintenance, and continuous optimization, so you can focus on growing your business while your website performs at its best.
            </p>
          </div>

          <div className="ws-subsection">
            <h3 className="ws-sub-title reveal-up"><strong>Content Management System</strong> <span className="font-regular">(CMS)</span></h3>
            <p className="ws-sub-desc reveal-up" style={{ transitionDelay: '100ms' }}>
              Manage your own website through a built-in content management system. Update text and images, and publish new posts, without needing a developer.
            </p>
            <div className="ws-tags-container reveal-up" style={{ transitionDelay: '200ms' }}>
              <span className="ws-skill-tag">Brand Strategy</span>
              <span className="ws-skill-tag">Logo Design</span>
              <span className="ws-skill-tag">Brand Guidelines</span>
              <span className="ws-skill-tag">Typography System</span>
              <span className="ws-skill-tag">Color Palette</span>
              <span className="ws-skill-tag">Brand Illustrations</span>
              <span className="ws-skill-tag">Icons & Favicon</span>
              <span className="ws-skill-tag">Visual Assets</span>
            </div>
            <div className="ws-grid-identity">
              <div className="ws-card bg-light-blue reveal-up" style={{ transitionDelay: '300ms' }}></div>
              <div className="ws-card bg-dark reveal-up" style={{ transitionDelay: '400ms' }}></div>
              <div className="ws-card bg-light-gray reveal-up" style={{ transitionDelay: '500ms' }}></div>
            </div>
          </div>

          <div className="ws-section-divider"></div>

          <div className="ws-subsection">
            <h3 className="ws-sub-title reveal-up"><strong>Third Party</strong> <span className="font-regular">Integrations</span></h3>
            <p className="ws-sub-desc reveal-up" style={{ transitionDelay: '100ms' }}>
              Connect the tools your business runs on, booking calendars, live chat, analytics, or newsletters, directly into your website.
            </p>
            <div className="ws-tags-container reveal-up" style={{ transitionDelay: '200ms' }}>
              <span className="ws-skill-tag">Visiting Card</span>
              <span className="ws-skill-tag">Letterhead</span>
              <span className="ws-skill-tag">Envelope Design</span>
              <span className="ws-skill-tag">Invoice & Quotation</span>
              <span className="ws-skill-tag">Email Signature</span>
              <span className="ws-skill-tag">Presentation Template</span>
              <span className="ws-skill-tag">Employee ID Card</span>
            </div>
            <div className="ws-grid-corporate">
              <div className="ws-card bg-light-blue reveal-up" style={{ transitionDelay: '300ms' }}></div>
              <div className="ws-card bg-dark reveal-up" style={{ transitionDelay: '400ms' }}></div>
              <div className="ws-card bg-light-gray reveal-up" style={{ transitionDelay: '500ms' }}></div>
            </div>
          </div>

          <div className="ws-section-divider"></div>

          <div className="ws-subsection">
            <h3 className="ws-sub-title reveal-up"><strong>SEO</strong> <span className="font-regular">Setup</span></h3>
            <p className="ws-sub-desc reveal-up" style={{ transitionDelay: '100ms' }}>
              On-page SEO is built into every website, giving your business a strong foundation to be found by customers on search engines.
            </p>
            <div className="ws-tags-container reveal-up" style={{ transitionDelay: '200ms' }}>
              <span className="ws-skill-tag">Brochure/Catalogue Design</span>
              <span className="ws-skill-tag">Flyer/Poster Design</span>
              <span className="ws-skill-tag">Social Media Template & Banner</span>
              <span className="ws-skill-tag">Presentation Design</span>
              <span className="ws-skill-tag">Digital Marketing Assets</span>
              <span className="ws-skill-tag">Newsletter Design</span>
            </div>
            <div className="ws-grid-marketing">
              <div className="ws-card bg-light-blue reveal-up" style={{ transitionDelay: '300ms' }}></div>
              <div className="ws-card bg-dark reveal-up" style={{ transitionDelay: '400ms' }}></div>
              <div className="ws-card bg-light-gray reveal-up" style={{ transitionDelay: '500ms' }}></div>
              <div className="ws-card bg-light-gray reveal-up" style={{ transitionDelay: '600ms' }}></div>
              <div className="ws-card bg-light-blue reveal-up" style={{ transitionDelay: '700ms' }}></div>
              <div className="ws-card bg-dark reveal-up" style={{ transitionDelay: '800ms' }}></div>
            </div>
          </div>

          <div className="ws-section-divider"></div>

          <div className="ws-subsection">
            <h3 className="ws-sub-title reveal-up"><strong>Hosting</strong> <span className="font-regular">& Fast-Loading</span></h3>
            <p className="ws-sub-desc reveal-up" style={{ transitionDelay: '100ms' }}>
              Every website launches with the first year of hosting, an SSL certificate, and a performance-optimised build engineered to load quickly.
            </p>
            <div className="ws-tags-container reveal-up" style={{ transitionDelay: '200ms' }}>
              <span className="ws-skill-tag">Label & Box Design</span>
              <span className="ws-skill-tag">Carry Bag/Tote Design</span>
              <span className="ws-skill-tag">Signage & Wayfinding</span>
              <span className="ws-skill-tag">Office Branding (Wall Graphics)</span>
              <span className="ws-skill-tag">T-Shirt/Uniform Design</span>
              <span className="ws-skill-tag">Mug/Bottle Branding</span>
            </div>
            <div className="ws-grid-packaging">
              <div className="ws-card bg-light-blue reveal-up" style={{ transitionDelay: '300ms' }}></div>
              <div className="ws-card bg-dark reveal-up" style={{ transitionDelay: '400ms' }}></div>
              <div className="ws-card bg-light-gray reveal-up" style={{ transitionDelay: '500ms' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <ServicePricing activeService="web" showToggle={false} />

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
      <div className="ws-brands-section">
        <div className="ws-brands-inner">
          <span className="ws-tag">BRANDS & PARTNERS</span>
          <h2 className="ws-brands-title">Brands We've Helped Grow</h2>
          <div className="ws-brands-grid">
            <div className="ws-brand-box"></div>
            <div className="ws-brand-box"></div>
            <div className="ws-brand-box"></div>
            <div className="ws-brand-box"></div>
          </div>
        </div>
      </div>

      <FAQ />
      <Booking />
      <Footer />
    </div>
  );
}
