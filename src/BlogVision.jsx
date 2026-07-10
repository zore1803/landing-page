import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './BlogVision.css';
import './BlogPage.css';

export default function BlogVision() {
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
              <div className="bv-tag-pill">VISION & STRATEGY</div>
              <div className="bv-meta-text">Jan 15, 2026</div>
              <div className="bv-meta-text">8 min read</div>
            </div>
            
            <h1 className="bv-main-title">Our Vision: Designing Brands That Move Markets</h1>
            <p className="bv-main-subtitle">
              Why we're building Copper Studio to be the first call for ambitious, growing businesses and how we're balancing craftsmanship with speed every step of the way.
            </p>
          </div>

          <div className="bv-content-section reveal-up">
            <p className="bv-lead-paragraph">
              In a world where every category is one funding round away from three new competitors, the gap between having a real business and looking like one has never been more expensive to ignore. Today we're sharing our vision for how CopperStudio will grow over the next three years, and the belief underneath it: design is not decoration applied at the end, it's infrastructure built from the start.
            </p>

            <div className="bv-mission-cards">
              <div className="bv-mcard">
                <div className="bv-mcard-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C55418" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
                <div className="bv-mcard-tag">Our Mission</div>
                <h4 className="bv-mcard-title">Make craft the default, not the upgrade</h4>
                <p className="bv-mcard-desc">Every company deserves a brand and a site that feel deliberate, whether they've raised $2M or $200M.</p>
              </div>

              <div className="bv-mcard">
                <div className="bv-mcard-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C55418" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <div className="bv-mcard-tag">Our Goal</div>
                <h4 className="bv-mcard-title">Ship 150 identities and sites by 2028</h4>
                <p className="bv-mcard-desc">We're building a studio that can hold quality steady as volume grows, not one that trades one for the other.</p>
              </div>

              <div className="bv-mcard">
                <div className="bv-mcard-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C55418" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div className="bv-mcard-tag">Our Impact</div>
                <h4 className="bv-mcard-title">Give founders back their time</h4>
                <p className="bv-mcard-desc">Every week spent arguing about a logo is a week not spent talking to customers. We want to close that gap.</p>
              </div>
            </div>

            <h2 className="bv-section-heading">The Problem We're Solving</h2>
            <p className="bv-standard-paragraph">
              Every month, founders with genuinely good products lose deals, hires, and investors, not because the product is weak, but because the brand around it doesn't match the ambition inside it. Most of these companies don't need a rebrand. They need someone to translate what they've already built into something people can recognize in three seconds. That translation work is slow, expensive, and usually happens too late, after the mismatch has already cost them a round or a key hire.
            </p>

            <h2 className="bv-section-heading">Our Vision for 2028</h2>
            <p className="bv-standard-paragraph">
              We picture a studio where a founder can go from a rough idea of who they are to a manufacturable brand system, logo, type, color, site, guidelines in weeks, not quarters, without the process feeling rushed. By 2028, we want CopperStudio to be the studio growth stage companies call by name, not the one they find on page four of a Google search.
            </p>

            <div className="bv-feature-list">
              <div className="bv-fitem">
                <div className="bv-fnumber">01</div>
                <div className="bv-ftext">
                  <h4>Identity system generation</h4>
                  <p>A repeatable process for logo, type, color, and voice that holds up from a business card to a billboard.</p>
                </div>
              </div>
              <div className="bv-fitem">
                <div className="bv-fnumber">02</div>
                <div className="bv-ftext">
                  <h4>Web design & build</h4>
                  <p>Sites that are designed and engineered together, so nothing gets lost translating Figma into production.</p>
                </div>
              </div>
              <div className="bv-fitem">
                <div className="bv-fnumber">03</div>
                <div className="bv-ftext">
                  <h4>Ongoing brand support</h4>
                  <p>Guidelines, templates, and a standing relationship so the system keeps working after we hand it off.</p>
                </div>
              </div>
            </div>

            <h2 className="bv-section-heading">Why This Matters Now</h2>
            <p className="bv-standard-paragraph">
              We're at an inflection point in how companies get discovered. Word of mouth now travels through a screenshot before it travels through a conversation. That means a pitch deck slide, a landing page, and a hiring page all do more first impression work than they used to. The studios who understand that shift, and who can move at the speed founders actually need, are going to define what the next decade of company building looks like.
            </p>

            <h2 className="bv-section-heading" style={{ marginTop: '48px' }}>The Impact We're Creating</h2>
            <div className="bv-impact-grid">
              <div className="bv-impact-item">
                <h4>Founders move faster</h4>
                <p>A clear brand system removes months of internal debate about what the company should look like.</p>
              </div>
              <div className="bv-impact-item">
                <h4>Teams hire better</h4>
                <p>Candidates read a careers page as a signal of how a company thinks. A considered one changes who applies.</p>
              </div>
              <div className="bv-impact-item">
                <h4>Fundraising gets easier</h4>
                <p>Investors pattern-match on craft before they read the deck. A strong brand buys credibility before the pitch starts.</p>
              </div>
              <div className="bv-impact-item">
                <h4>Customers trust sooner</h4>
                <p>A site that feels deliberate shortens the distance between landing on a page and reaching for a card.</p>
              </div>
            </div>

            <div className="bv-commitment-box">
              <div className="bv-cbox-tag">Our Commitment</div>
              <p>This vision isn't a mood board, it's our roadmap. Every project we take on, every hire we make, and every process we refine is measured against this goal. We're committed to keeping the quality of our work high as we grow, because the moment craft becomes optional is the moment we stop being the studio we set out to build.</p>
            </div>

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
