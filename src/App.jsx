import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import CoordinateSection from './CoordinateSection';
import ProjectsSection from './ProjectsSection';
import ServicePricing from './ServicePricing';
import WallOfLove from './WallOfLove';
import FAQ from './FAQ';
import Booking from './Booking';
import Footer from './Footer';
import ServicesSection from './ServicesSection';
import StudioPage from './StudioPage';
import ServicesPage from './ServicesPage';
import ServiceDetail from './ServiceDetail';
import ContactPage from './ContactPage';

import logoImg from './assets/logo.svg';
function Home() {
  const navigate = useNavigate();

  // Prevent downloading images/videos via right-click
  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  // 14 stripes based on the Figma spec (Rectangle 89 through 102)
  const stripes = Array.from({ length: 14 });
  console.log("Logo path loaded as:", logoImg);

  // Generate the complex 3-stage wave animation for the hero stripes
  const stripeAnimationCSS = useMemo(() => {
    const TOTAL_TIME = 9; // seconds loop
    const FPS = 15;
    const frames = TOTAL_TIME * FPS;
    let css = '';
    
    for (let i = 0; i < 14; i++) {
      const d = Math.min(i, 13 - i);
      // Define the peak hit times for this specific stripe
      const peaks = [
        0.5 + i * 0.15,               // Phase 1: Left to right
        3.5 + (13 - i) * 0.15,        // Phase 2: Right to left
        6.5 + d * 0.15                // Phase 3a: Outside to inside
      ];
      if (d < 6) {
        peaks.push(7.4 + (6 - d) * 0.15); // Phase 3b: Repel back
      }

      let keyframes = `@keyframes complexPulse${i} {\n`;
      
      // Calculate brightness smoothly over time for a perfect collision blend
      for (let frame = 0; frame <= frames; frame++) {
        const t = frame / FPS;
        let maxBright = 0.2;
        
        peaks.forEach(peak => {
          let bright = 0.2;
          if (t >= peak - 0.2 && t <= peak) {
            const progress = (t - (peak - 0.2)) / 0.2;
            bright = 0.2 + progress * 1.0;
          } else if (t > peak && t <= peak + 0.6) {
            const progress = (t - peak) / 0.6;
            bright = 1.2 - progress * 1.0;
          }
          if (bright > maxBright) maxBright = bright;
        });
        
        const percent = ((t / TOTAL_TIME) * 100).toFixed(1);
        const progress = (maxBright - 0.2) / 1.0;
        const saturate = (0.5 + progress * 0.6).toFixed(2);
        
        keyframes += `  ${percent}% { filter: brightness(${maxBright.toFixed(2)}) saturate(${saturate}); }\n`;
      }
      keyframes += `}\n`;
      css += keyframes;
    }
    return css;
  }, []);

  // Intersection Observer for Trusted Brands Reveal
  const trustedRef = useRef(null);

  // Intersection Observer for Services Reveal
  const servicesRef = useRef(null);

  useEffect(() => {
    // Trusted Brands Observer
    const trustedObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTrustedVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (trustedRef.current) {
      trustedObserver.observe(trustedRef.current);
    }

    // Services Observer
    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsServicesVisible(true);
        }
      },
      { threshold: 0.1 } // Lower threshold so it triggers as soon as the grid starts coming up
    );
    if (servicesRef.current) {
      servicesObserver.observe(servicesRef.current);
    }

    return () => {
      trustedObserver.disconnect();
      servicesObserver.disconnect();
    };
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const [activeSection, setActiveSection] = useState('home');
  const [showStudioPage, setShowStudioPage] = useState(false);

  // Toggling between the landing page and the Studio page swaps the whole
  // document, but the browser keeps the old scroll position (which lands you
  // in the footer). Jump to the top instantly on every switch. 'instant'
  // avoids the smooth-scroll animation from html { scroll-behavior: smooth }.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [showStudioPage]);

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <a href="#home" onClick={() => { toggleMobileMenu(); setActiveSection('home'); setShowStudioPage(false); window.location.hash = '#home'; }}>Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); toggleMobileMenu(); setActiveSection('about'); setShowStudioPage(true); }}>Studio</a>
          <a href="/services" onClick={(e) => { e.preventDefault(); toggleMobileMenu(); navigate('/services'); }}>Services</a>
          <a href="#projects" onClick={() => { toggleMobileMenu(); setActiveSection('projects'); setShowStudioPage(false); window.location.hash = '#projects'; }}>Projects</a>
          <a href="/contact" onClick={(e) => { e.preventDefault(); toggleMobileMenu(); navigate('/contact'); }}>Contact</a>
          <a href="#portal" className="client-portal-btn mobile-client-portal" onClick={toggleMobileMenu}>Client Portal</a>
          <button className="lets-talk-btn mobile-lets-talk">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Let's Talk &rsaquo;
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logoImg} alt="Copper Studio Logo" className="nav-logo-icon" />
        </div>
        
        <div className="nav-divider desktop-only"></div>

        <div className="nav-links desktop-only">
          <a href="#home" className={activeSection === 'home' && !showStudioPage ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('home'); setShowStudioPage(false); window.location.hash = '#home'; }}>Home</a>
          <a href="#about" className={showStudioPage ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('about'); setShowStudioPage(true); }}>Studio</a>
          <a href="/services" className={activeSection === 'services' && !showStudioPage ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('/services'); }}>Services</a>
          <a href="#projects" className={activeSection === 'projects' && !showStudioPage ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('projects'); setShowStudioPage(false); window.location.hash = '#projects'; }}>Projects</a>
          <a href="/contact" className={activeSection === 'contact' && !showStudioPage ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>Contact</a>
        </div>

        <div className="nav-divider desktop-only"></div>

        <div className="nav-action desktop-only">
          <a href="#portal" className="client-portal-link">Client Portal</a>
          <a href="#contact" className="lets-talk-link">
            <span className="lets-talk-icon-wrap">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="5" width="16" height="15" rx="3.5" ry="3.5"></rect>
                <line x1="16" y1="3" x2="16" y2="7"></line>
                <line x1="8" y1="3" x2="8" y2="7"></line>
                <line x1="4" y1="11" x2="20" y2="11"></line>
                <circle cx="9" cy="15.5" r="1.5" fill="currentColor" stroke="none"></circle>
              </svg>
            </span>
            Let's Talk
          </a>
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

      {!showStudioPage ? (
        <>
          <div className="landing-container" id="home">
            {/* Background blobs / ellipses */}
      <div className="blobs-container">
        <div className="ellipse ellipse-2"></div>
        <div className="ellipse ellipse-3"></div>
        <div className="ellipse ellipse-4"></div>
        <div className="ellipse ellipse-5"></div>
        <div className="ellipse ellipse-9"></div>
        <div className="ellipse ellipse-1"></div>
        <div className="ellipse ellipse-8"></div>
        <div className="ellipse ellipse-6"></div>
        <div className="ellipse ellipse-7"></div>
      </div>



      {/* Stripes overlay (Group 12 -> Group 105) */}
      <style>{stripeAnimationCSS}</style>
      <div className="stripes-wrapper">
        {stripes.map((_, index) => (
          <div key={index} className="stripe-container">
            <div 
              className="stripe-auto"
              style={{ animation: `complexPulse${index} 9s infinite linear` }}
            ></div>
            <div className="stripe-hover"></div>
          </div>
        ))}
      </div>
      
      {/* Logo */}
      <div className="logo-container">
        <img src={logoImg} alt="Copper Studio Logo" className="main-center-logo" />
        <h2 className="hero-subtitle">From brand identity to custom websites, <i>all under one roof.</i></h2>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar global-section" style={{ paddingTop: 0, paddingBottom: '30px' }}>
        <div className="global-container bottom-bar-inner">
          <div className="scroll-text">scroll to explore</div>
        
        <div className="bottom-center-pill">
          <a href="#projects" className="view-projects-btn">
            View Projects
          </a>
          <a href="#contact" className="lets-talk-dark-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Let's Talk &rsaquo;
          </a>
        </div>

        <div className="copyright">&copy;2026</div>
        </div>
      </div>
    </div>

      {/* New Services and Trusted Brands Section */}
      <ServicesSection />

      {/* Coordinate Section */}
      <CoordinateSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Pricing Section */}
      <ServicePricing />

      {/* Testimonials / Wall Of Love Section */}
      <WallOfLove />

      {/* FAQ Section */}
      <FAQ />

      {/* Booking Section */}
      <Booking />
        </>
      ) : (
        <StudioPage />
      )}

      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
