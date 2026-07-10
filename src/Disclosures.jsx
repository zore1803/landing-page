import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TermsConditionsHeroBg from './TermsConditionsHeroBg';
import './TermsConditions.css';

export default function Disclosures() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <Navbar activeSection="" />
      <div className="projects-page">
        {/* Hero Section */}
        <div className="projects-hero-wrap">
          <div className="services-hero-bg-container">
            <TermsConditionsHeroBg />
          </div>
          <div className="projects-hero-content" style={{ paddingTop: 0 }}>
            <h1 className="projects-hero-title reveal-up" style={{ color: '#000', marginBottom: 0, transform: 'translateY(-60px)' }}>Disclosures</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="global-container" style={{ marginTop: '-238px', position: 'relative', zIndex: 10, paddingBottom: '100px' }}>
          <div className="terms-content reveal-up" style={{ fontSize: '16px', fontWeight: '300', color: '#504F4F' }}>
            <style>{`
              .terms-content p { margin-bottom: 1.5rem; }
              .terms-content h3 { margin-top: 3rem; margin-bottom: 1rem; font-size: 1.5rem; font-weight: 600; color: #000; }
              .terms-content ul { margin-bottom: 1.5rem; padding-left: 1.5rem; }
              .terms-content li { margin-bottom: 0.5rem; }
              .terms-content p.terms-last-updated { font-size: 16px; font-weight: 400; color: #C55418; margin-bottom: 88px; text-transform: uppercase; letter-spacing: 0px; }
            `}</style>
            
            <p className="terms-last-updated">LAST UPDATED: 9TH JULY, 2026</p>

            <p>This Disclosures page explains certain practices on our website, thecopperstudio.com, operated by The Copper Studio ("we", "us", "our"). We believe in being transparent with our visitors and clients. Please read the disclosures below.</p>
            
            <h3>1. Affiliate and referral links:</h3>
            <p>Some links on our Website may be affiliate or referral links. This means that if you click such a link and purchase a product or service, or sign up for a tool we recommend, we may earn a commission or referral fee — at no additional cost to you.</p>
            <p>We only recommend tools, products, and services that we genuinely believe may be useful. A commission or referral arrangement does not influence our honest opinion, and you are never under any obligation to use a linked product or service. Where a commission may arise, we aim to make that relationship clear.</p>

            <h3>2. Client testimonials and results:</h3>
            <p>Our Website may feature testimonials, reviews, and examples of work from our clients. These reflect the genuine experiences and opinions of those specific clients at a specific point in time.</p>
            <p>Testimonials are not a guarantee that you will achieve the same or similar results. Every business, brand, and project is different, and outcomes depend on many factors — including your market, your goals, your involvement, and circumstances outside our control. Testimonials should be taken as individual experiences, not as a promise of results for your business.</p>

            <h3>3. No guarantee of results:</h3>
            <p>We take pride in our work and are committed to delivering high-quality branding, websites, and software for our clients. However, we do not guarantee any specific business result, outcome, or performance from our services — including, for example, particular levels of traffic, leads, sales, search-engine rankings, conversions, or revenue.</p>
            <p>The success of any project depends on numerous factors, many of which are outside our control. Any timelines, projections, or examples shared on our Website or during consultations are illustrative only and are not promises or guarantees. Specific deliverables and commitments for your project will be set out in your written proposal or statement of work.</p>

            <h3>4. Informational content:</h3>
            <p>Content on our Website is provided for general information only. It does not constitute professional, legal, financial, or business advice, and should not be relied upon as such. You should seek appropriate professional advice before making decisions based on any information on our Website.</p>

            <h3>5. Changes to this page:</h3>
            <p>We may update this Disclosures page from time to time. The "Last updated" date reflects the current version.</p>

            <h3>6. Contact us:</h3>
            <p>If you have any questions about these disclosures:<br/>
              The Copper Studio<br/>
              Email: support@thecopperstudio.com/ contact@thecopperstudio.com<br/>
              Phone: +91 9820933877<br/>
              Address: Registered Office No. 721, Floor 7th, Centura Square IT Park, Road Number 27, Wagle Estate, Thane West (400604) - Maharashtra, India.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
