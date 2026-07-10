import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './BlogVision.css';
import './BlogPage.css';

export default function BlogCaseStudy() {
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
              <div className="bv-tag-pill" style={{ background: 'rgba(228, 115, 23, 0.14)', color: '#C55418' }}>CASE STUDIES</div>
              <div className="bv-meta-text">Apr 17, 2026</div>
              <div className="bv-meta-text">6 min read</div>
            </div>
            
            <h1 className="bv-main-title">Rebranding Without Losing Equity: Lessons from Three Client Rebrands</h1>
            <p className="bv-main-subtitle">
              What we learned helping three companies evolve their identity without alienating the customers who already knew and trusted the old one.
            </p>
          </div>

          <div className="bv-content-section reveal-up">
            <p className="bv-lead-paragraph">
              Every rebrand carries a quiet risk: the customers who already know you might not recognize you afterward. Across three recent rebrands, the projects that went smoothly all shared one habit, they treated the old brand as research, not as a mistake to erase.
            </p>

            <h2 className="bv-section-heading">Audit what's actually working before changing it</h2>
            <p className="bv-standard-paragraph">
              Before touching a single asset, we catalog what customers already associate with the brand: a color, a shape, a tone of voice in support emails. Those associations are equity. A rebrand that discards all of it starts from zero instead of building on what already exists.
            </p>

            <h2 className="bv-section-heading">Evolve the mark, don't replace the meaning</h2>
            <p className="bv-standard-paragraph">
              In two of the three projects, the new logo kept a recognizable trace of the old one, a angle, a proportion, a color, so existing customers felt continuity even as the system modernized. The new logo answered 'is this still them?' before it answered 'is this better?'
            </p>

            <div className="bv-blockquote">
              <p>"A rebrand that discards all of a company's existing equity starts from zero instead of building on what already exists."</p>
            </div>

            <h2 className="bv-section-heading">Roll out in public, not all at once</h2>
            <p className="bv-standard-paragraph">
              Sudden, total rebrands read as instability to longtime customers. We stage rollouts, packaging first, then site, then app, so the change reads as growth rather than a company trying to become someone else.
            </p>

            <p className="bv-standard-paragraph" style={{ marginTop: '22px' }}>
              The best rebrands don't feel like a reset. They feel like the company finally looks like who it already was, which is exactly the impression you want existing customers to walk away with.
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
