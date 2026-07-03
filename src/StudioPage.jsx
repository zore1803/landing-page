import React, { useEffect, useRef } from 'react';
import './StudioPage.css';
import WallOfLove from './WallOfLove';
import FAQ from './FAQ';
import Booking from './Booking';

import step1Img from './assets/process/1 1.svg';
import step2Img from './assets/process/2 1.svg';
import step3Img from './assets/process/3 1.svg';
import step4Img from './assets/process/4 1.svg';
import step5Img from './assets/process/5 1.svg';
import step6Img from './assets/process/6 2.svg';
import calendlyImg from './assets/studio-calendly.png';

import projImg1 from './assets/brand-identity-brochure.png';
import projImg2 from './assets/common-grounds.jpg';
import projImg3 from './assets/Tea - Boxes 1.png';
import projImg4 from './assets/image.png';

const studioProjects = [projImg1, projImg2, projImg3, projImg4];

const StudioPage = () => {
  const processSectionRef = useRef(null);
  const processWrapperRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!processSectionRef.current || !processWrapperRef.current) {
            ticking = false;
            return;
          }
          
          const glass = processWrapperRef.current;
          const section = processSectionRef.current;
          const viewportHeight = window.innerHeight;
          const wrapperHeight = glass.offsetHeight;
          
          // We want the cards to travel their full height so all rows become visible 
          // while the background text remains frozen.
          const travelDistance = wrapperHeight;
          const scrollDistance = travelDistance + viewportHeight;
          
          const targetHeight = scrollDistance + viewportHeight;
          if (section.style.height !== `${targetHeight}px`) {
            section.style.height = `${targetHeight}px`;
          }
          
          const rect = section.getBoundingClientRect();
          let progress = -rect.top / scrollDistance;
          progress = Math.max(0, Math.min(1, progress));
          
          // Slide the whole wrapper up from below the viewport to exactly 0
          const glassY = viewportHeight - (progress * travelDistance);
          glass.style.transform = `translateY(${glassY}px)`;

          const cards = glass.querySelectorAll('.process-step');

          cards.forEach((card, i) => {
            const startProgress = 0.05 + (i * 0.06); 
            const endProgress = startProgress + 0.25; 
            let cardProgress = (progress - startProgress) / (endProgress - startProgress);
            cardProgress = Math.max(0, Math.min(1, cardProgress));
            const cardEase = 1 - Math.pow(1 - cardProgress, 3);
            
            const cardY = 350 - (cardEase * 350);
            const scale = 0.75 + (cardEase * 0.25);
            const rotX = 45 - (cardEase * 45);
            
            card.style.opacity = cardProgress;
            card.style.transform = `translateY(${cardY}px) scale(${scale}) rotateX(${rotX}deg)`;
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger immediately to set initial transforms!
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="studio-page">
      <div className="studio-bg">
        <div className="bg-blur blur-1"></div>
        <div className="bg-blur blur-2"></div>
        <div className="bg-blur blur-3"></div>
      </div>

      {/* Hero Section */}
      <section className="studio-hero">
        <div className="studio-hero-card">
          <div className="hero-glow-orange"></div>
          <div className="hero-glow-blue"></div>
          <div className="studio-hero-content">
            <h1 className="hero-title">Meet the Studio Behind the Brands</h1>
            <p className="hero-subtitle">
              A premium branding and website studio rooted in the belief that every business has a story that deserves<br/>
              to be seen, remembered, and felt.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="studio-section studio-story">
        <span className="section-label">1 - OUR STORY</span>
        <div className="story-content">
          <div className="story-left">
            <h2>
              Born from the love for creativity,<br/>
              an eye for detail and a deep<br/>
              appreciation for the power of
            </h2>
            <div className="script-text">Storytelling</div>
          </div>
          <div className="story-right">
            <p>Behind every business is a journey of ambition, countless hours of hard work, and a vision that deserves to be seen and remembered. Yet too often, those stories are hidden behind generic branding that fails to capture what makes a business truly unique.</p>
            <p>To us, storytelling is more than a creative process—it's an art form that builds trust, evokes emotion, and creates lasting connections. That belief is at the heart of everything we do at Copper Studio. Through thoughtful branding, strategic design, and purposeful digital experiences, we transform businesses into brands with character, clarity, and meaning.</p>
          </div>
        </div>
      </section>

      {/* Our Belief */}
      <section className="studio-section studio-belief">
        <div className="belief-label-container">
          <span className="section-label">2 - OUR BELIEF</span>
        </div>
        <h2 className="belief-quote">
          <span className="text-light-gray">Inspired by the enduring</span> <span className="text-dark-bold">qualities of copper, our beliefs are rooted in connection, craftsmanship, and thoughtful design,</span> <span className="text-light-gray">guiding how we create brands that grow stronger, connect deeper, and stand the test of time.</span>
        </h2>
        <div className="belief-grid">
          <div className="belief-item">
            <div className="belief-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/></svg>
            </div>
            <h3>Connection</h3>
            <p>We close the gap between your business and people it's for.</p>
          </div>
          <div className="belief-divider"></div>
          <div className="belief-item">
            <div className="belief-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"/><path d="M16 16l6-6"/><path d="M16 16l-6-6"/><path d="M22 10l-6-6"/></svg>
            </div>
            <h3>Craftsmanship</h3>
            <p>Every detail made deliberately, never assembled from a template.</p>
          </div>
          <div className="belief-divider"></div>
          <div className="belief-item">
            <div className="belief-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3>Character</h3>
            <p>Identities with enough personality to be unmistakably yours.</p>
          </div>
        </div>
      </section>

      {/* What makes Copper different */}
      <section className="studio-section">
        <span className="section-label">3 - WHAT MAKES COPPER DIFFERENT?</span>
        <div className="different-grid">
          <div className="diff-card card-cream">
            <div className="diff-card-ellipse-1"></div>
            <div className="diff-card-ellipse-2"></div>
            <h3>A dedicated client portal for complete project transparency.</h3>
          </div>
          <div className="diff-card card-black">
            <div className="diff-card-ellipse-3"></div>
            <div className="diff-card-ellipse-4"></div>
            <div className="diff-card-ellipse-5"></div>
            <h3>Branding, website, and company portals,</h3>
            <h3 style={{ marginTop: 'auto' }}><span className="diff-highlight">all under one roof.</span></h3>
          </div>
          <div className="diff-card card-orange">
            <div className="diff-card-ellipse-6"></div>
            <div className="diff-card-ellipse-7"></div>
            <h3 style={{ marginTop: 'auto' }}>Ongoing hosting & maintenance, and support beyond launch.</h3>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="studio-section studio-process" ref={processSectionRef}>
        <div className="process-sticky-container">

          <div className="process-label-absolute">
            <span className="section-label">4 - OUR PROCESS</span>
          </div>

          <div className="process-header-container">
            <div className="process-header">
              <h2>Here's how we work together.</h2>
              <div className="cursive-accent">Process</div>
            </div>
          </div>

          <div className="process-glass-wrapper" ref={processWrapperRef}>
            
            <div className="process-steps-grid">
              <div className="process-step">
                <div className="step-num">1</div>
                <div className="step-img"><img src={step1Img} alt="Client Onboarding" /></div>
                <hr className="step-divider" />
                <div className="step-title">Client Onboarding</div>
                <p>We close the gap between your business and people it's for.</p>
              </div>
              <div className="process-step">
                <div className="step-num">2</div>
                <div className="step-img"><img src={step2Img} alt="Visual Identity Toolkit" /></div>
                <hr className="step-divider" />
                <div className="step-title">Visual Identity Toolkit</div>
                <p>Explore creative concepts and refine the strongest direction that best represents your brand.</p>
              </div>
              <div className="process-step">
                <div className="step-num">3</div>
                <div className="step-img"><img src={step3Img} alt="Core Brand Design" /></div>
                <hr className="step-divider" />
                <div className="step-title">Core Brand Design</div>
                <p>Create the core brand identity and develop supporting visual assets that strengthen your brand system.</p>
              </div>
              <div className="process-step">
                <div className="step-num">4</div>
                <div className="step-img"><img src={step4Img} alt="Print Collateral Design" /></div>
                <hr className="step-divider" />
                <div className="step-title">Print Collateral Design</div>
                <p>Design market materials that communicate your brand effectively and prepare them for client review.</p>
              </div>
              <div className="process-step">
                <div className="step-num">5</div>
                <div className="step-img"><img src={step5Img} alt="Brand Collateral" /></div>
                <hr className="step-divider" />
                <div className="step-title">Brand Collateral</div>
                <p>Apply the brand across packaging merchandise, advertising and every customer touchpoint.</p>
              </div>
              <div className="process-step">
                <div className="step-num">6</div>
                <div className="step-img"><img src={step6Img} alt="Brand Guidelines" /></div>
                <hr className="step-divider" />
                <div className="step-title">Brand Guidelines</div>
                <p>Document the complete brand system to ensure consistent use across every platform and application.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <WallOfLove />

      {/* Selected Projects */}
      <section className="studio-section">
        <span className="section-label">6 - SELECTED PROJECTS</span>
        <div className="studio-projects-header">
          <h2>Work we're proud of</h2>
          <div className="script-text">Projects</div>
        </div>
        <div className="studio-projects-grid">
          {studioProjects.map((img, i) => (
            <div className="studio-project-card" key={i}>
              <img src={img} alt={`Project ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact */}
      <Booking />
    </div>
  );
};

export default StudioPage;
