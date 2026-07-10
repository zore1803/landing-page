import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './BlogVision.css';
import './BlogPage.css';

export default function BlogSystems() {
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
              <div className="bv-tag-pill" style={{ background: 'rgba(99, 134, 172, 0.16)', color: '#102E4A' }}>DESIGN SYSTEMS</div>
              <div className="bv-meta-text">Feb 21, 2026</div>
              <div className="bv-meta-text">8 min read</div>
            </div>
            
            <h1 className="bv-main-title">Design Systems: Keeping Every Team on the Same Page</h1>
            <p className="bv-main-subtitle">
              How a well built design system removes friction between founders, marketers, and engineers, and why most systems fail for reasons that have nothing to do with the components.
            </p>
          </div>

          <div className="bv-content-section reveal-up">
            <p className="bv-lead-paragraph">
              A design system isn't a Figma file with a lot of components in it. It's an agreement between design, marketing, and engineering, about what the brand is allowed to look like this week. Most systems that fail don't fail on craft, they fail on that agreement.
            </p>

            <h2 className="bv-section-heading">Start smaller than feels responsible</h2>
            <p className="bv-standard-paragraph">
              Teams often try to document everything before shipping anything: every button state, every breakpoint, every edge case. We build the ten components a team will use every day first, ship them, and expand the system based on where real friction shows up.
            </p>

            <h2 className="bv-section-heading">Name things the way your team already talks</h2>
            <p className="bv-standard-paragraph">
              A system fails quietly when the documentation uses different words than the team does in Slack. If your team says 'the hero,' the component isn't called 'primary banner container.' Matching vocabulary is what makes a system feel usable instead of academic.
            </p>

            <div className="bv-blockquote">
              <p>"A design system isn't a file full of components. It's an agreement about what the brand is allowed to look like this week."</p>
            </div>

            <h2 className="bv-section-heading">Build for the handoff, not just the build</h2>
            <p className="bv-standard-paragraph">
              The best system in the world is useless if the next hire can't understand it in an afternoon. We design every system with a new team member in mind, clear naming, visible rationale, and just enough documentation that nobody has to guess.
            </p>

            <p className="bv-standard-paragraph" style={{ marginTop: '22px' }}>
              Done right, a design system is the thing that lets a five person team ship like a fifteen person team, not because it does the thinking for them, but because it removes the thinking that shouldn't need to happen twice.
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
