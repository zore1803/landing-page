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
import WebServicePage from './WebServicePage';
import BrandLandingPage from './BrandLandingPage';

import CoordinateSectionComponent from './CoordinateSection';
import ProjectsSectionComponent from './ProjectsSection';
import ServicePricingComponent from './ServicePricing';
import WallOfLoveComponent from './WallOfLove';
import FAQComponent from './FAQ';
import BookingComponent from './Booking';
import ServicesSectionComponent from './ServicesSection';
import HomepageHeroBg from './HomepageHeroBg';

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
      {/* Homepage Background SVG with animated stripes */}
      <HomepageHeroBg />
      
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
      document.querySelectorAll('.reveal-up:not(.is-revealed), .reveal-right:not(.is-revealed)').forEach(el => {
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
        <Route path="/copper-web" element={<WebServicePage />} />
        <Route path="/copper-brand-landingpage" element={<BrandLandingPage />} />
      </Routes>
    </>
  );
}

export default App;
