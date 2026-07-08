import React, { useEffect, useRef, useState } from 'react';
import './ProjectsSection.css';
import commonGroundsImg from './assets/common-grounds.webp';
import dataCirclesImg from './assets/DataCirclesLaptop.webp';
import premiumGroupImg from './assets/image.webp';
import qodenextImg from './assets/QodenextImage.webp';

import proj1Svg from './assets/projects/cottson-clothing-hq.webp';
import proj2Svg from './assets/projects/CommonGroungsCompressed-hq.webp';
import projQodenextSvg from './assets/projects/Qodenextcompress-hq.webp';
import projDataCirclesSvg from './assets/projects/DataCirclesCompressed-hq.webp';

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const titleRef = useRef(null);
  const [activeSvg, setActiveSvg] = useState(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeSvg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeSvg]);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (!sectionRef.current || !wrapperRef.current) {
        ticking = false;
        return;
      }

      const glass = wrapperRef.current;
      const section = sectionRef.current;
      const viewportHeight = window.innerHeight;
      const wrapperHeight = glass.offsetHeight;

      // While the section is pinned, the user scrolls through `scrollDistance`
      // pixels that drive the animation instead of moving the page.
      // The glass wrapper travels from just below the viewport (100vh) until
      // its bottom aligns with the viewport bottom => travel = wrapperHeight.
      // The extra viewportHeight gives room for the staggered card entrances.
      const scrollDistance = wrapperHeight + viewportHeight;

      // Section height = pinned scroll distance + one viewport for the sticky container.
      const targetHeight = scrollDistance + viewportHeight;
      if (section.style.height !== `${targetHeight}px`) {
        section.style.height = `${targetHeight}px`;
      }

      const rect = section.getBoundingClientRect();
      let progress = -rect.top / scrollDistance;
      progress = Math.max(0, Math.min(1, progress));

      const cards = glass.querySelectorAll('.project-card');
      const btn = glass.querySelector('.view-more-btn');

      // Glass wrapper rises through the pinned viewport.
      const glassY = viewportHeight - progress * wrapperHeight;
      glass.style.transform = `translateY(${glassY}px)`;

      // Cards enter one after another with an extra upward offset.
      cards.forEach((card, i) => {
        const startProgress = 0.05 + i * 0.12;
        const endProgress = startProgress + 0.25;
        let cardProgress = (progress - startProgress) / (endProgress - startProgress);
        cardProgress = Math.max(0, Math.min(1, cardProgress));

        const cardEase = 1 - Math.pow(1 - cardProgress, 3);
        const cardY = 180 - cardEase * 180;
        card.style.transform = `translateY(${cardY}px)`;
        card.style.opacity = cardEase;
      });

      // Button enters last, just before the section unpins.
      if (btn) {
        const btnStart = 0.62;
        let btnProgress = (progress - btnStart) / 0.2;
        btnProgress = Math.max(0, Math.min(1, btnProgress));
        const btnEase = 1 - Math.pow(1 - btnProgress, 3);
        const btnY = 60 - btnEase * 60;
        btn.style.transform = `translateY(${btnY}px)`;
        btn.style.opacity = btnEase;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll(); // Set initial transforms

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const projects = [
    { 
      title: "Cottson Clothing", 
      subtitle: "Corporate Clothing Manufacturer",
      tags: ["Brand Identity", "Company Portal", "Print Collateral", "Product Assets", "Website Design"], 
      img: premiumGroupImg, 
      svgUrl: proj1Svg 
    },
    { 
      title: "Qodenext India Pvt. Ltd.", 
      subtitle: "IT Services and IT Consulting",
      tags: ["Brand Identity"], 
      img: qodenextImg, 
      svgUrl: projQodenextSvg 
    },
    { 
      title: "Common Grounds", 
      subtitle: "Café",
      tags: ["Brand Identity", "Product Assets", "Environmental Branding"], 
      img: commonGroundsImg, 
      svgUrl: proj2Svg 
    },
    { 
      title: "DataCircles", 
      subtitle: "CRM + Invoicing Software",
      tags: ["Brand Identity"], 
      img: dataCirclesImg, 
      svgUrl: projDataCirclesSvg 
    }
  ];

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="projects-sticky-container">

        <div className="projects-header-wrapper" ref={titleRef}>
          <h2 className="section-title">Take A Look At What We Have Created!</h2>
          <div className={`global-cursive-svg-container ${isTitleVisible ? 'write-animation-global' : ''}`}>
            <svg viewBox="0 0 800 200" className="global-cursive-svg">
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">Projects</text>
            </svg>
          </div>
        </div>

        <div className="projects-glass-wrapper" ref={wrapperRef}>
          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <div 
                className="project-card" 
                key={idx}
                onClick={() => setActiveSvg(proj.svgUrl)}
                style={{ cursor: 'pointer' }}
              >
                <img src={proj.img} alt={proj.title} className="project-card-image" />
                <div className="project-card-overlay"></div>
                <div className="project-card-content">
                  <h3 className="project-card-title">{proj.title}</h3>
                  <p className="project-card-subtitle">{proj.subtitle}</p>
                  <div className="project-tags">
                    {proj.tags.map((tag, tIdx) => (
                      <span className="project-tag" key={tIdx}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="view-more-btn">
            See More Projects <span className="arrow-icon">&rsaquo;</span>
          </div>
        </div>

      </div>

      {/* SVG Modal Overlay */}
      {activeSvg && (
        <div className="project-svg-modal-overlay" onClick={() => setActiveSvg(null)}>
          <div className="project-svg-modal-content" onClick={e => e.stopPropagation()}>
            <button className="project-svg-modal-close" onClick={() => setActiveSvg(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img src={activeSvg} alt="Project Presentation" className="project-svg-full" />
          </div>
        </div>
      )}
    </section>
  );
}
