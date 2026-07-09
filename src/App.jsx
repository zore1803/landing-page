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
import WebLandingPage from './WebLandingPage';
import TermsConditions from './TermsConditions';

import CoordinateSectionComponent from './CoordinateSection';
import ProjectsSectionComponent from './ProjectsSection';
import ServicePricingComponent from './ServicePricing';
import WallOfLoveComponent from './WallOfLove';
import FAQComponent from './FAQ';
import BookingComponent from './Booking';
import ServicesSectionComponent from './ServicesSection';
import HomepageHeroBg from './HomepageHeroBg';

import logoImg from './assets/logo.svg';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
    this.setState({ info });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', background: 'white', color: 'red' }}>
          <h1>Something went wrong.</h1>
          <pre>{this.state.error && this.state.error.toString()}</pre>
          <pre>{this.state.info && this.state.info.componentStack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

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
  // Generate the complex 3-stage wave animation for the hero stripes
  const stripeAnimationCSS = useMemo(() => {
    const TOTAL_TIME = 9; // seconds loop
    const FPS = 6; // Lowered from 15 - cuts keyframe count ~60% (this is a slow wave, coarser steps look identical) and reduces continuous main-thread work from the filter animation.
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

  // Pause the always-on stripe filter animation once the hero scrolls out of view,
  // so it doesn't keep burning CPU for the rest of the page visit.
  const stripesRef = useRef(null);
  useEffect(() => {
    const wrapper = stripesRef.current;
    if (!wrapper) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        wrapper.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
        wrapper.querySelectorAll('.stripe-auto').forEach((el) => {
          el.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
        });
      },
      { threshold: 0 }
    );
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

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
        <div className="ellipse ellipse-6"></div>
        <div className="ellipse ellipse-7"></div>
        <div className="ellipse ellipse-8"></div>
      </div>
      <div className="hero-bottom-vignette"></div>



      {/* Stripes overlay (Group 12 -> Group 105) */}
      <style>{stripeAnimationCSS}</style>
      <div className="stripes-wrapper" ref={stripesRef}>
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
        <div className="bottom-bar-inner">
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
            <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.42292 10.0771C7.14097 9.79514 7 9.45 7 9.04166C7 8.63333 7.14097 8.28819 7.42292 8.00625C7.70486 7.7243 8.05 7.58333 8.45833 7.58333C8.86667 7.58333 9.21181 7.7243 9.49375 8.00625C9.77569 8.28819 9.91667 8.63333 9.91667 9.04166C9.91667 9.45 9.77569 9.79514 9.49375 10.0771C9.21181 10.359 8.86667 10.5 8.45833 10.5C8.05 10.5 7.70486 10.359 7.42292 10.0771ZM2.91667 12.8333C2.59583 12.8333 2.32118 12.7191 2.09271 12.4906C1.86424 12.2621 1.75 11.9875 1.75 11.6667V3.5C1.75 3.17916 1.86424 2.90451 2.09271 2.67604C2.32118 2.44757 2.59583 2.33333 2.91667 2.33333H3.5V1.16666H4.66667V2.33333H9.33333V1.16666H10.5V2.33333H11.0833C11.4042 2.33333 11.6788 2.44757 11.9073 2.67604C12.1358 2.90451 12.25 3.17916 12.25 3.5V11.6667C12.25 11.9875 12.1358 12.2621 11.9073 12.4906C11.6788 12.7191 11.4042 12.8333 11.0833 12.8333H2.91667ZM2.91667 11.6667H11.0833V5.83333H2.91667V11.6667ZM2.91667 5H7H11.0833V3.5H2.91667V5Z" fill="currentColor"/>
            </svg>
            Let's Talk
          </a>
        </div>
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

// Keeps the desktop layout (1024px+) visually identical to the 1440px design as the
// window narrows, instead of letting content reflow/wrap. Below 1024px the existing
// mobile-tailored CSS breakpoints take over untouched.
const DESIGN_WIDTH = 1440;
const MIN_SCALE_WIDTH = 1024;

function useDesktopScaleLock() {
  useEffect(() => {
    const applyScale = () => {
      // Reset first so innerWidth reflects the real (unzoomed) viewport —
      // otherwise a prior zoom would make this read the already-scaled width.
      document.documentElement.style.zoom = '';
      const vw = window.innerWidth;
      if (vw < MIN_SCALE_WIDTH) return;
      const scale = Math.min(1, vw / DESIGN_WIDTH);
      document.documentElement.style.zoom = scale;
    };

    applyScale();
    window.addEventListener('resize', applyScale);
    return () => {
      window.removeEventListener('resize', applyScale);
      document.documentElement.style.zoom = '';
    };
  }, []);
}

function App() {
  useDesktopScaleLock();
  return (
    <>
      <ScrollToTop />
      <GlobalScrollReveal />
      <ErrorBoundary>
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
          <Route path="/copper-web-landing" element={<WebLandingPage />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
        </Routes>
      </ErrorBoundary>
    </>);
}

export default App;
