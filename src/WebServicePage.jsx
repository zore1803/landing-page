import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FAQ from './FAQ';
import Booking from './Booking';
import ServicePricing from './ServicePricing';
import ContactHeroBg from './ContactHeroBg';
import copperWebLogo from './assets/logos/CopperWeb.svg';
import fourthCardSvg from './assets/fourthcard.svg';

import './WebServicePage.css';

export default function WebServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const compareSections = [
    {
      title: "Design & Build",
      features: [
        { name: "Custom Responsive Design", plans: [true, true, true] },
        { name: "Mobile & Tablet Optimization", plans: [true, true, true] },
        { name: "Content Management System (CMS)", plans: [false, true, true] },
        { name: "Blog / News Section", plans: [false, true, true] },
        { name: "E-commerce / Product Catalogue", plans: [false, false, true] },
        { name: "Secure Checkout", plans: [false, false, true] }
      ]
    },
    {
      title: "Marketing & Analytics",
      features: [
        { name: "Contact Form Integration", plans: [true, true, true] },
        { name: "Basic On-Page SEO Setup", plans: [true, true, true] },
        { name: "Advanced SEO Optimization", plans: [false, true, true] },
        { name: "Google Analytics Integration", plans: [false, true, true] }
      ]
    },
    {
      title: "Hosting, Support & Advanced",
      features: [
        { name: "Domain & Hosting Setup", plans: [true, true, true] },
        { name: "Performance & Speed Optimization", plans: [false, true, true] },
        { name: "Third-Party API Integrations", plans: [false, false, true] },
        { name: "Ongoing Maintenance & Support", plans: [false, false, true] },
        { name: "Priority Support", plans: [false, false, true] }
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

          <div className="ws-features-grid">
            {/* Card 1 */}
            <div className="ws-feature-card ws-fc-1 reveal-up">
              <h3 className="ws-feature-title">Content Management System(CMS)</h3>
              <div className="ws-circle-1"></div>
              <p className="ws-feature-desc">Manage your website through a <strong>built-in content management system</strong>. Update text and images, and publish new posts without a developer.</p>
            </div>

            {/* Card 2 */}
            <div className="ws-feature-card ws-fc-2 reveal-up" style={{ transitionDelay: '100ms' }}>
              <h3 className="ws-feature-title text-white">Third Party Integrations</h3>
              <div className="ws-circle-2"></div>
              <div className="ws-circle-3"></div>
              <p className="ws-feature-desc text-white">Connects the <strong>tools your business runs on</strong>, booking calendars, live chat, analytics or newsletter or directly into your website</p>
            </div>

            {/* Card 3 */}
            <div className="ws-feature-card ws-fc-3 reveal-up" style={{ transitionDelay: '200ms' }}>
              <h3 className="ws-feature-title">SEO Setup</h3>
              <div className="ws-circle-4"></div>
              <p className="ws-feature-desc"><strong>On page SEO</strong> is built into every website, giving your business a strong foundation to be found by customer on search engines</p>
            </div>

            {/* Card 4 */}
            <div className="ws-feature-card ws-fc-4 reveal-up" style={{ transitionDelay: '300ms' }}>
              <h3 className="ws-feature-title">Hosting & Fast-Loading</h3>
              <img src={fourthCardSvg} alt="Hosting & Fast-Loading" className="ws-vector" />
              <p className="ws-feature-desc">Every website launches with the first year of hosting, an SSL certificate and a <strong>performance optimized</strong> build engineered to load quickly</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <ServicePricing activeService="web" showToggle={false} />

      {/* Every Website Comes With */}
      <div className="ws-every-website-section">
        <div className="ws-every-website-inner">
          <h2 className="ws-every-title reveal-up">Every Website Comes With</h2>
          
          <div className="ws-every-grid">
            {/* Card 1 */}
            <div className="ws-every-card ws-every-card-dark reveal-up">
              <div className="ws-every-icon">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 18C15.5376 18 18 15.5376 18 12.5C18 9.46243 15.5376 7 12.5 7C9.46243 7 7 9.46243 7 12.5C7 15.5376 9.46243 18 12.5 18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 21L7.5 17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.5 7L16 3.5C16.3314 3.16863 16.8686 3.16863 17.2 3.5L21.5 7.8C21.8314 8.13137 21.8314 8.66863 21.5 9L18 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="ws-every-content">
                <h4 className="ws-every-heading text-white">Custom Figma Design</h4>
                <div className="ws-every-line ws-every-line-dark"></div>
                <p className="ws-every-desc text-white">Approved before development begins</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="ws-every-card ws-every-card-light reveal-up" style={{ transitionDelay: '100ms' }}>
              <div className="ws-every-icon">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="6" width="17" height="13" rx="2" stroke="#070815" strokeWidth="2"/>
                  <path d="M4 11H21" stroke="#070815" strokeWidth="2"/>
                  <circle cx="7.5" cy="15.5" r="1" fill="#070815"/>
                </svg>
              </div>
              <div className="ws-every-content">
                <h4 className="ws-every-heading">First Year Hosting</h4>
                <div className="ws-every-line ws-every-line-light"></div>
                <p className="ws-every-desc">Includes SSL certificate and domain setup</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="ws-every-card ws-every-card-light reveal-up" style={{ transitionDelay: '200ms' }}>
              <div className="ws-every-icon">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="6" width="15" height="9" rx="1" stroke="#070815" strokeWidth="2"/>
                  <path d="M3 18H22" stroke="#070815" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M11 15V18" stroke="#070815" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M14 15V18" stroke="#070815" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="ws-every-content">
                <h4 className="ws-every-heading">Responsive Design</h4>
                <div className="ws-every-line ws-every-line-light"></div>
                <p className="ws-every-desc">Across desktop, tablet and mobile</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="ws-every-card ws-every-card-light reveal-up" style={{ transitionDelay: '300ms' }}>
              <div className="ws-every-icon">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11.5" cy="11.5" r="5.5" stroke="#070815" strokeWidth="2"/>
                  <path d="M20 20L15.5 15.5" stroke="#070815" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="ws-every-content">
                <h4 className="ws-every-heading">Hosting & Fast-Loading</h4>
                <div className="ws-every-line ws-every-line-light"></div>
                <p className="ws-every-desc">Optimized for search visibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                    <div className="cp-plan-desc reveal-up" style={{ transitionDelay: '300ms' }}>A strong foundation for brands ready to get started</div>
                    <div className="cp-btn-wrap-light reveal-up" style={{ transitionDelay: '400ms' }}>
                      <button className="cp-btn-light">Get Started</button>
                    </div>
                  </th>
                  <th className="cp-plan-col cp-highlight-col">
                    <div className="cp-plan-name reveal-up" style={{ transitionDelay: '300ms' }}>Advance</div>
                    <div className="cp-plan-desc reveal-up" style={{ transitionDelay: '400ms' }}>Perfect for growing businesses ready to elevate their digital presence</div>
                    <div className="cp-btn-wrap-dark reveal-up" style={{ transitionDelay: '500ms' }}>
                      <button className="cp-btn-dark">Get Started</button>
                    </div>
                  </th>
                  <th className="cp-plan-col">
                    <div className="cp-plan-name reveal-up" style={{ transitionDelay: '400ms' }}>Ultimate</div>
                    <div className="cp-plan-desc reveal-up" style={{ transitionDelay: '500ms' }}>The most comprehensive solution for brands that want it all</div>
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
