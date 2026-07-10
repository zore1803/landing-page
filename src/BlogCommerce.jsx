import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './BlogVision.css';
import './BlogPage.css';

export default function BlogCommerce() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar activeSection="blogs" />
      <div className="blog-vision-page">
        <div className="bv-main-wrapper">
          
          <div className="bv-header-section reveal-up">
            <Link to="/blogs" className="bv-back-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              <span>All articles</span>
            </Link>
            
            <div className="bv-meta-row">
              <div className="bv-tag-pill" style={{ background: 'rgba(99, 134, 172, 0.16)', color: '#102E4A' }}>WEB DESIGN</div>
              <div className="bv-meta-text">Jun 24, 2026</div>
              <div className="bv-meta-text">8 min read</div>
            </div>
            
            <h1 className="bv-main-title">Web Design for E-Commerce: Designing for Scale Without Losing Soul</h1>
            <p className="bv-main-subtitle">
              How we help consumer brands grow their product catalog and traffic without their site starting to feel like a template with a logo swapped in.
            </p>
          </div>

          <div className="bv-content-section reveal-up">
            <p className="bv-lead-paragraph">
              Most e-commerce sites are beautiful at launch, with twelve hero products and a founder story that fits on one screen. The real design problem shows up eighteen months later, once there are four hundred SKUs, three collections, and a marketing team shipping a new landing page every week.
            </p>

            <h2 className="bv-section-heading">Design the system, not the page</h2>
            <p className="bv-standard-paragraph">
              A homepage is one artifact. A component library, product cards, filters, collection headers, size charts, is the thing that actually scales. We design the pieces and the rules for combining them, so growth doesn't require a designer for every new page.
            </p>

            <h2 className="bv-section-heading">Performance is a design decision</h2>
            <p className="bv-standard-paragraph">
              A product photo that takes four seconds to load has already lost the sale, no matter how good the layout is underneath it. We treat load time, image weight, and mobile performance as part of the design brief, not a problem for engineering to solve afterward.
            </p>

            <div className="bv-blockquote">
              <p>"A component library is the thing that actually scales. We design the pieces and the rules for combining them."</p>
            </div>

            <h2 className="bv-section-heading">Keep the founder's voice in the machinery</h2>
            <p className="bv-standard-paragraph">
              As a catalog grows, it's easy for a site to drift into generic e-commerce template language, badges, countdown timers, the same promotional banners everyone else uses. We build in guardrails so growth teams can move fast without eroding the brand voice that got customers to trust the site in the first place.
            </p>

            <p className="bv-standard-paragraph" style={{ marginTop: '22px' }}>
              The goal isn't a site that looks impressive in a case study screenshot. It's a system flexible enough to survive two years of real growth without a redesign, and consistent enough that it never stops feeling like the brand customers fell for.
            </p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="blog-newsletter-section reveal-up">
          <div className="blog-newsletter-inner">
            <h2 className="blog-nl-title">Stay Updated</h2>
            <p className="blog-nl-subtitle">
              Get practical insights on branding, UI/UX, web design, and digital<br />
              strategy delivered straight to your inbox.
            </p>
            <form className="blog-nl-form">
              <input type="email" placeholder="Enter your email address" className="blog-nl-input" />
              <button type="submit" className="blog-nl-button">Subscribe</button>
            </form>
            <p className="blog-nl-spam">No spam. Unsubscribe at any time.</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
