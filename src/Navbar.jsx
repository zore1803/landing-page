import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from './assets/logo.svg';

function Navbar({ activeSection, setActiveSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <Link to="/" className={activeSection === 'home' ? 'active' : ''} onClick={() => { toggleMobileMenu(); if(setActiveSection) setActiveSection('home'); }}>Home</Link>
          <Link to="/studio" className={activeSection === 'about' ? 'active' : ''} onClick={() => { toggleMobileMenu(); if(setActiveSection) setActiveSection('about'); }}>Studio</Link>
          <Link to="/services" className={activeSection === 'services' ? 'active' : ''} onClick={() => { toggleMobileMenu(); if(setActiveSection) setActiveSection('services'); }}>Services</Link>
          <Link to="/projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => { toggleMobileMenu(); if(setActiveSection) setActiveSection('projects'); }}>Projects</Link>
          <Link to="/contact" className={activeSection === 'contact' ? 'active' : ''} onClick={toggleMobileMenu}>Contact</Link>
          <a href="https://portal.thecopperstudio.com" className="client-portal-btn mobile-client-portal" onClick={toggleMobileMenu}>Client Portal</a>
          <button className="lets-talk-btn mobile-lets-talk">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.42292 10.0771C7.14097 9.79514 7 9.45 7 9.04166C7 8.63333 7.14097 8.28819 7.42292 8.00625C7.70486 7.7243 8.05 7.58333 8.45833 7.58333C8.86667 7.58333 9.21181 7.7243 9.49375 8.00625C9.77569 8.28819 9.91667 8.63333 9.91667 9.04166C9.91667 9.45 9.77569 9.79514 9.49375 10.0771C9.21181 10.359 8.86667 10.5 8.45833 10.5C8.05 10.5 7.70486 10.359 7.42292 10.0771ZM2.91667 12.8333C2.59583 12.8333 2.32118 12.7191 2.09271 12.4906C1.86424 12.2621 1.75 11.9875 1.75 11.6667V3.5C1.75 3.17916 1.86424 2.90451 2.09271 2.67604C2.32118 2.44757 2.59583 2.33333 2.91667 2.33333H3.5V1.16666H4.66667V2.33333H9.33333V1.16666H10.5V2.33333H11.0833C11.4042 2.33333 11.6788 2.44757 11.9073 2.67604C12.1358 2.90451 12.25 3.17916 12.25 3.5V11.6667C12.25 11.9875 12.1358 12.2621 11.9073 12.4906C11.6788 12.7191 11.4042 12.8333 11.0833 12.8333H2.91667ZM2.91667 11.6667H11.0833V5.83333H2.91667V11.6667ZM2.91667 5H7H11.0833V3.5H2.91667V5Z" fill="currentColor"/>
            </svg>
            Let's Talk &rsaquo;
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img src={logoImg} alt="Copper Studio Logo" className="nav-logo-icon" />
          </Link>
        </div>

        <div className="nav-divider desktop-only"></div>

        <div className="nav-links desktop-only">
          <Link to="/" className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection && setActiveSection('home')}>Home</Link>
          <Link to="/studio" className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection && setActiveSection('about')}>Studio</Link>
          <Link to="/services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setActiveSection && setActiveSection('services')}>Services</Link>
          <Link to="/projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setActiveSection && setActiveSection('projects')}>Projects</Link>
          <Link to="/contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection && setActiveSection('contact')}>Contact</Link>
        </div>

        <div className="nav-divider desktop-only"></div>

        <div className="nav-action desktop-only">
          <a href="https://portal.thecopperstudio.com" className="client-portal-link">Client Portal</a>
          <Link to="/contact" className="lets-talk-link">
            <span className="lets-talk-icon-wrap">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.42292 10.0771C7.14097 9.79514 7 9.45 7 9.04166C7 8.63333 7.14097 8.28819 7.42292 8.00625C7.70486 7.7243 8.05 7.58333 8.45833 7.58333C8.86667 7.58333 9.21181 7.7243 9.49375 8.00625C9.77569 8.28819 9.91667 8.63333 9.91667 9.04166C9.91667 9.45 9.77569 9.79514 9.49375 10.0771C9.21181 10.359 8.86667 10.5 8.45833 10.5C8.05 10.5 7.70486 10.359 7.42292 10.0771ZM2.91667 12.8333C2.59583 12.8333 2.32118 12.7191 2.09271 12.4906C1.86424 12.2621 1.75 11.9875 1.75 11.6667V3.5C1.75 3.17916 1.86424 2.90451 2.09271 2.67604C2.32118 2.44757 2.59583 2.33333 2.91667 2.33333H3.5V1.16666H4.66667V2.33333H9.33333V1.16666H10.5V2.33333H11.0833C11.4042 2.33333 11.6788 2.44757 11.9073 2.67604C12.1358 2.90451 12.25 3.17916 12.25 3.5V11.6667C12.25 11.9875 12.1358 12.2621 11.9073 12.4906C11.6788 12.7191 11.4042 12.8333 11.0833 12.8333H2.91667ZM2.91667 11.6667H11.0833V5.83333H2.91667V11.6667ZM2.91667 5H7H11.0833V3.5H2.91667V5Z" fill="currentColor"/>
              </svg>
            </span>
            Let's Talk
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
