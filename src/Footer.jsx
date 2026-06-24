import React from 'react';
import './Footer.css';
import footerBg from './assets/footer/Footer.svg';
import logoImg from './assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Gradient fade from white into the footer */}
      <div className="footer-fade-overlay"></div>

      {/* Visual signature pleated background */}
      <div className="footer-bg-wrapper">
        <img src={footerBg} alt="" className="footer-bg-svg" />
      </div>

      <div className="footer-content">
        {/* Large brand logo */}
        <div className="footer-brand-section">
          <img src={logoImg} alt="Copper Studio Logo" className="footer-logo" />
        </div>

        {/* Tagline */}
        <p className="footer-tagline">
          From logo to website — everything your brand needs.
        </p>

        {/* CTA button */}
        <a href="#contact" className="footer-cta-btn">
          <span>Start Your Project</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>

        {/* Divider */}
        <div className="footer-divider-line"></div>

        {/* Bottom row: copyright left, socials right */}
        <div className="footer-bottom-row">
          <p className="footer-copyright-text">
            &copy; {new Date().getFullYear()} Copper Studio. All rights reserved.
          </p>

          <div className="footer-social-row">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
              aria-label="X / Twitter"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="mailto:hello@copperstudio.design"
              className="social-icon-link"
              aria-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
