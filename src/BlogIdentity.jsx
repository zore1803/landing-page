import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './BlogVision.css';
import './BlogPage.css';

export default function BlogIdentity() {
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
              <div className="bv-tag-pill" style={{ background: 'rgba(228, 115, 23, 0.14)', color: '#C55418' }}>BRAND IDENTITY</div>
              <div className="bv-meta-text">Jun 30, 2026</div>
              <div className="bv-meta-text">7 min read</div>
            </div>
            
            <h1 className="bv-main-title">Brand Identity for Startups: Building Trust Before You Have a Track Record</h1>
            <p className="bv-main-subtitle">
              How early stage companies use identity design to signal credibility long before revenue, retention, or a recognizable name can do it for them.
            </p>
          </div>

          <div className="bv-content-section reveal-up">
            <p className="bv-lead-paragraph">
              A ten person startup and a two hundred person company are judged by the same three second test: does this look like a business I can trust with my money, my data, or my career? Early on, you don't have the track record to answer that question with evidence. Your brand has to answer it with design.
            </p>

            <h2 className="bv-section-heading">Borrowed credibility isn't a strategy</h2>
            <p className="bv-standard-paragraph">
              It's tempting to lean on the visual language of category leaders, the same rounded sans-serif, the same gradient, the same three-word tagline. It reads as safe, but it also reads as interchangeable. Investors and early customers meet a lot of startups; the ones that stick are the ones that look like they know exactly who they are, not the ones that look like everyone else's Series A deck.
            </p>

            <h2 className="bv-section-heading">Design the parts people actually touch first</h2>
            <p className="bv-standard-paragraph">
              You don't need a 40-page brand guideline in month one. You need a wordmark that works at 16 pixels in a browser tab, a type system that holds up in a pitch deck and a support email, and two or three colors you can commit to without a design degree. Build outward from what people will actually see this quarter.
            </p>

            <div className="bv-blockquote">
              <p>"Investors and early customers meet a lot of startups. The ones that stick are the ones that look like they know exactly who they are."</p>
            </div>

            <h2 className="bv-section-heading">Consistency beats cleverness at this stage</h2>
            <p className="bv-standard-paragraph">
              A slightly less original mark used consistently across your site, deck, and product will out perform a brilliant concept that changes every time someone new touches it. Early trust is built through repetition, the same mark, the same voice, showing up in the same way, until it starts to feel familiar.
            </p>

            <p className="bv-standard-paragraph" style={{ marginTop: '22px' }}>
              The startups that raise smoothly and hire well aren't always the ones with the biggest budgets for design, they're the ones who treated identity as a decision to make early and well, rather than a task to outsource once there's money for it.
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
