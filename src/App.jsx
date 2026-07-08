import React, { useEffect, useRef, useState, useMemo, Suspense, lazy } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

import StudioPage from './StudioPage';
import ServicesPage from './ServicesPage';
import ServiceDetail from './ServiceDetail';
import ContactPage from './ContactPage';
import ProjectsPage from './ProjectsPage';
import BrandServicePage from './BrandServicePage';

import CoordinateSectionComponent from './CoordinateSection';
import ProjectsSectionComponent from './ProjectsSection';
import ServicePricingComponent from './ServicePricing';
import WallOfLoveComponent from './WallOfLove';
import FAQComponent from './FAQ';
import BookingComponent from './Booking';
import ServicesSectionComponent from './ServicesSection';

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

  // Jump to top instantly on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
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

  return (
    <>
      <Navbar activeSection="home" />
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
        <img 
          src={logoImg} 
          alt="Copper Studio Logo" 
          className="main-center-logo" 
          fetchPriority="high"
          loading="eager"
        />
        <h2 className="hero-subtitle">From brand identity to custom websites, <i>all under one roof.</i></h2>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar global-section" style={{ paddingTop: 0, paddingBottom: '30px' }}>
        <div className="global-container bottom-bar-inner">
          <div className="scroll-text">scroll to explore</div>
        
        <div className="bottom-center-pill">
          <a 
            href="/projects" 
            className="view-projects-btn" 
            onClick={(e) => { e.preventDefault(); navigate('/projects'); }}
          >
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

      {/* Offscreen sections without Suspense to prevent hydration blocking */}
      <ServicesSectionComponent />
      <CoordinateSectionComponent />
      <ProjectsSectionComponent />
      <ServicePricingComponent />
      <WallOfLoveComponent />
      <FAQComponent />
      <BookingComponent />
        </>

      <Footer />
    </>
  );
}

function StudioRoute() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <Navbar activeSection="about" />
      <StudioPage />
      <Footer />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function GlobalScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const observeElements = () => {
      document.querySelectorAll('.reveal-up:not(.is-revealed)').forEach(el => {
        observer.observe(el);
      });
    };

    observeElements();
    
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <GlobalScrollReveal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<StudioRoute />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/copper-brand" element={<BrandServicePage />} />
      </Routes>
    </>
  );
}

export default App;
