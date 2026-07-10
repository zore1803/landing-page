import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactHeroBg from './ContactHeroBg';
import './BlogPage.css';

const recentArticles = [
  { link: "/blogs/subblog2", tag: "Brand Identity", title: "Brand Identity for Startups: Building Trust Before You Have a Track Record", desc: "How early stage companies use brand identity design to signal credibility long before revenue, retention or a recognizable name can do it for them.", date: "June 30, 2026", time: "7 min read" },
  { link: "/blogs/subblog3", tag: "Web Design", title: "Web Design for E-Commerce: Designing for Scale Without Losing Soul", desc: "How we help consumer brands grow their product catalog and traffic without their site starting to feel like a template with a logo swapped in.", date: "June 24, 2026", time: "8 min read" },
  { link: "/blogs/subblog4", tag: "Design Systems", title: "Design Systems: Keeping Every Team on the Same Page", desc: "How a well-built design system removes friction between founders, marketers, and engineers and why most systems fail for reasons that have nothing to do with the components.", date: "Feb 21, 2026", time: "8 min read" },
  { link: "/blogs/subblog5", tag: "Case Study", title: "Rebranding Without Losing Equity: Lessons from Three Client Rebrands", desc: "What we learned helping three companies evolve their identity without alienating the customers who already knew and trusted the old one.", date: "Apr 17, 2026", time: "6 min read" },
  { link: "/blogs/subblog6", tag: "Web Design", title: "From Wireframe to Website: Our End-to-End Process", desc: "A behind-the-scenes look at how a CopperStudio web project actually moves from a blank page to a live URL, and where most of the real decisions get made.", date: "Mar 18, 2026", time: "6 min read" },
  { link: "/blogs/subblog7", tag: "Manifesto", title: "The Proactive Design Manifesto: Beyond the Pretty Deck", desc: "A manifesto on treating design as a system that anticipates a company's next six months, not a deliverable that answers only what was asked.", date: "Jan 21, 2026", time: "6 min read" }
];

export default function BlogPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
      setStatus('success');
      setMessage('Thanks for subscribing! Check your inbox for a confirmation.');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Navbar activeSection="blogs" />
      <div className="blog-page">
        {/* Hero Section */}
        <div className="blog-hero-wrap">
          <div className="blog-hero-card">
            <div className="services-hero-bg-container">
              <ContactHeroBg />
            </div>
            <div className="blog-hero-content">
              <h1 className="blog-hero-title reveal-up">The Copper Journal</h1>
              <p className="blog-hero-subtitle reveal-up" style={{ transitionDelay: '100ms' }}>
                Explore <strong>practical insights, design inspiration, and expert advice</strong> on branding,<br/>
                UI/UX, websites, and digital experiences that help businesses grow.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Article Section */}
        <div className="blog-featured-section">
          <div className="blog-featured-inner">
            <span className="blog-featured-tag reveal-up">FEATURED ARTICLES</span>
            <h2 className="blog-featured-title reveal-up">Latest from CopperStudio</h2>

            <div className="blog-featured-card reveal-up">
              {/* Left Side (Graphic) */}
              <div className="bfc-left">
                <div className="bfc-graphic">
                  <div className="bfc-circle"></div>
                  <h3>Vision & Manifesto</h3>
                  <p>The future of product development</p>
                </div>
              </div>

              {/* Right Side (Content) */}
              <div className="bfc-right">
                <div className="bfc-meta">
                  <span className="bfc-category">Vision & Strategy</span>
                  <span className="bfc-date">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    Jan 15, 2026
                  </span>
                  <span className="bfc-time">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    8 min read
                  </span>
                </div>
                <h3 className="bfc-title">Our Vision: Designing Brands That Move Markets</h3>
                <p className="bfc-desc">Why we're building Copper Studio to be the first call for ambitious, growing businesses and how we're balancing craftsmanship with speed every step of the way.</p>
                
                <Link to="/blogs/subblog1" className="bfc-link">
                  Read Full Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Articles Section */}
        <div className="blog-recent-section reveal-up">
          <div className="blog-recent-inner">
            <div className="blog-recent-header">
              <h2 className="blog-recent-title">Recent Articles</h2>
              <a href="#" className="blog-recent-view-all">View All Post</a>
            </div>

            <div className="blog-recent-grid">
              {recentArticles.map((article, idx) => (
                <Link to={article.link} key={idx} className="blog-recent-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                  <div className="brc-tag-row">
                    <span className="brc-tag-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    </span>
                    <span className="brc-tag-text">{article.tag}</span>
                  </div>
                  
                  <h3 className="brc-title">{article.title}</h3>
                  <p className="brc-desc">{article.desc}</p>
                  
                  <div className="brc-footer">
                    <div className="brc-meta">
                      <span className="brc-date">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        {article.date}
                      </span>
                      <span className="brc-time">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        {article.time}
                      </span>
                    </div>
                    <span className="brc-arrow">&rarr;</span>
                  </div>
                </Link>
              ))}
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
            <form className="blog-nl-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="blog-nl-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
              />
              <button type="submit" className="blog-nl-button" disabled={status === 'loading'}>
                {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
            {message && (
              <p
                className="blog-nl-message"
                style={{ color: status === 'error' ? '#c0392b' : '#2e7d32', marginTop: '12px' }}
              >
                {message}
              </p>
            )}
            <p className="blog-nl-spam">No spam. Unsubscribe at any time.</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
