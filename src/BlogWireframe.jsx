import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './BlogVision.css';
import './BlogPage.css';

export default function BlogWireframe() {
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
              <div className="bv-meta-text">Mar 16, 2026</div>
              <div className="bv-meta-text">7 min read</div>
            </div>
            
            <h1 className="bv-main-title">From Wireframe to Website: Our End-to-End Process</h1>
            <p className="bv-main-subtitle">
              A behind the scenes look at how a CopperStudio web project actually moves from a blank page to a live URL, and where most of the real decisions get made.
            </p>
          </div>

          <div className="bv-content-section reveal-up">
            <p className="bv-lead-paragraph">
              Clients usually expect the design phase to be where a web project lives or dies. In practice, the highest leverage decisions happen earlier, in the week before a single pixel gets placed, when we're still deciding what the site needs to do.
            </p>

            <h2 className="bv-section-heading">Content and structure before visuals</h2>
            <p className="bv-standard-paragraph">
              We write real headlines and draft real copy before we design a single screen. A layout built around placeholder text almost always breaks once the actual words go in. Getting the content right first means the design is solving a real problem, not an imaginary one.
            </p>

            <h2 className="bv-section-heading">Wireframe in grayscale, on purpose</h2>
            <p className="bv-standard-paragraph">
              Stripping out color and type forces every conversation with a client back to hierarchy and flow, what should someone see first, second, third, instead of whether they like a particular shade of orange. Those are two different conversations, and they go better separately.
            </p>

            <div className="bv-blockquote">
              <p>"A layout built around placeholder text almost always breaks once the actual words go in."</p>
            </div>

            <h2 className="bv-section-heading">Design and build in parallel, not in sequence</h2>
            <p className="bv-standard-paragraph">
              We bring engineering into the project during design, not after handoff. That overlap catches the gap between what looks good in Figma and what's actually buildable within a reasonable timeline, before it becomes an expensive surprise in week six.
            </p>

            <p className="bv-standard-paragraph" style={{ marginTop: '22px' }}>
              By the time a site launches, the visual design is often the least surprising part of the project, because the harder decisions about structure, content, and feasibility were made weeks earlier, when they were still cheap to change.
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
