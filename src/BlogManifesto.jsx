import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './BlogVision.css';
import './BlogPage.css';

export default function BlogManifesto() {
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
              <div className="bv-tag-pill" style={{ background: 'rgba(58, 14, 18, 0.1)', color: '#3A0E12' }}>MANIFESTO</div>
              <div className="bv-meta-text">Jan 21, 2026</div>
              <div className="bv-meta-text">6 min read</div>
            </div>
            
            <h1 className="bv-main-title">The Proactive Design Manifesto: Beyond the Pretty Deck</h1>
            <p className="bv-main-subtitle">
              A manifesto on treating design as a system that anticipates a company's next six months, not a deliverable that answers only what was asked.
            </p>
          </div>

          <div className="bv-content-section reveal-up">
            <p className="bv-lead-paragraph">
              Most design work answers the brief that was written. We think the better version of the job answers the brief that will be written in six months, the one the client hasn't thought to ask for yet, because they're still solving this quarter's problem.
            </p>

            <div className="bv-mission-cards">
              <div className="bv-mcard">
                <div className="bv-mcard-icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 2L20 7V15L11 20L2 15V7L11 2Z" stroke="#C55418" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 7L16 10L11 13L6 10L11 7Z" stroke="#C55418" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 13V20" stroke="#C55418" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="bv-mcard-tag">WHAT WE BELIEVE</div>
                <h3 className="bv-mcard-title">Design should anticipate, not just respond</h3>
                <p className="bv-mcard-desc">A good identity system already has an answer for the merch drop, the conference booth, and the hiring page nobody's built yet.</p>
              </div>

              <div className="bv-mcard">
                <div className="bv-mcard-icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 2L20 7V15L11 20L2 15V7L11 2Z" stroke="#C55418" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 7L16 10L11 13L6 10L11 7Z" stroke="#C55418" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 13V20" stroke="#C55418" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="bv-mcard-tag">HOW WE WORK</div>
                <h3 className="bv-mcard-title">Ask about next quarter, not just this brief</h3>
                <p className="bv-mcard-desc">Every kickoff includes a conversation about where the company is headed, not just what they're asking us to design today.</p>
              </div>

              <div className="bv-mcard">
                <div className="bv-mcard-icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 2L20 7V15L11 20L2 15V7L11 2Z" stroke="#C55418" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 7L16 10L11 13L6 10L11 7Z" stroke="#C55418" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 13V20" stroke="#C55418" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="bv-mcard-tag">WHAT WE BUILD</div>
                <h3 className="bv-mcard-title">Systems with headroom</h3>
                <p className="bv-mcard-desc">Type scales, color ramps, and component libraries that have room to grow into use cases that don't exist yet.</p>
              </div>
            </div>

            <h2 className="bv-section-heading">The Reactive Trap</h2>
            <p className="bv-standard-paragraph">
              Reactive design work optimizes for the deliverable in front of it: this landing page, this deck, this one-off asset. Each piece looks fine in isolation, but six months later a company has a folder of assets that don't agree with each other, three different blues, two different taglines, a logo that only really works on a white background. Nobody made a bad decision. Nobody made any decision about the whole.
            </p>

            <h2 className="bv-section-heading">What Proactive Design Looks Like</h2>
            <p className="bv-standard-paragraph">
              It looks like a color system built with a dark mode variant before anyone asked for one. It looks like a logo mark simple enough to work as a favicon, an app icon, and a conference badge without a special case for each. It looks like naming conventions in a Figma file that a designer joining eighteen months from now can understand without a meeting.
            </p>

            <div className="bv-feature-list">
              <div className="bv-fitem">
                <div className="bv-fnumber">01</div>
                <div className="bv-ftext">
                  <h4>Ask what's next before what's now</h4>
                  <p>Every brief starts with a conversation about the roadmap, not just the immediate ask.</p>
                </div>
              </div>
              <div className="bv-fitem">
                <div className="bv-fnumber">02</div>
                <div className="bv-ftext">
                  <h4>Build with headroom, not just fit</h4>
                  <p>Systems are designed to flex into future use cases, not just satisfy the current one.</p>
                </div>
              </div>
              <div className="bv-fitem">
                <div className="bv-fnumber">03</div>
                <div className="bv-ftext">
                  <h4>Document the reasoning, not just the result</h4>
                  <p>Every system ships with the 'why,' so future decisions can stay consistent without us in the room.</p>
                </div>
              </div>
            </div>

            <h2 className="bv-section-heading">Why We Insist On This</h2>
            <p className="bv-standard-paragraph">
              Companies rarely fail because a single asset looked bad. They accumulate small inconsistencies until the brand feels unreliable, and by then, fixing it costs far more than building it right the first time would have. Proactive design is slower to praise in the moment and much cheaper over two years.
            </p>

            <h2 className="bv-section-heading">The Impact We're Creating</h2>
            <div className="bv-impact-grid">
              <div className="bv-impact-item">
                <h4>Fewer emergency redesigns</h4>
                <p>Systems built with headroom absorb new use cases instead of breaking under them.</p>
              </div>
              <div className="bv-impact-item">
                <h4>Faster internal execution</h4>
                <p>Teams don't need to ask us before building the fortieth landing page, the system already answers most questions.</p>
              </div>
              <div className="bv-impact-item">
                <h4>A brand that ages instead of expiring</h4>
                <p>Considered systems stay relevant for years instead of needing a refresh every product cycle.</p>
              </div>
              <div className="bv-impact-item">
                <h4>Less decision fatigue for founders</h4>
                <p>When the system has already thought ahead, there's one less thing pulling attention away from the business.</p>
              </div>
            </div>

            <div className="bv-commitment-box">
              <div className="bv-cbox-tag">OUR COMMITMENT</div>
              <p>We hold ourselves to this on every project, not just the ones with the budget for it. A proactive system takes more thought up front and it's worth it every time a client comes back eighteen months later and the brand still fits.</p>
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
