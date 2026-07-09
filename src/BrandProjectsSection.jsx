import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BrandProjectsSection.css';
import './ProjectsSection.css';
//images "Take A Look At What We Have Created!" 
import img1 from './assets/image.webp';
import img2 from './assets/QodenextImage.webp';
import img3 from './assets/nittygritty21.png';
import img4 from './assets/common-grounds.webp';
import img5 from './assets/project-4.png';
import img6 from './assets/project-6.png'; 
import img7 from './assets/project-7.png'; 
import img8 from './assets/last-project.png'; 

import proj1Svg from './assets/projects/cottson-clothing-hq.webp';
import proj2Svg from './assets/projects/commongrounds-hq.webp';
import projQodenextSvg from './assets/projects/qodenext-hq.webp';
import projDataCirclesSvg from './assets/projects/datacircles-hq.webp';
import projNittyGritty from './assets/nittygritty.png';

export default function BrandProjectsSection() {
  const navigate = useNavigate();
  const [activeSvg, setActiveSvg] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    if (activeSvg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeSvg]);

  const handleCardClick = (src) => {
    setIsImageLoading(true);
    setActiveSvg(src);
  };

  return (
    <section className="brand-projects-section global-section">
      <div className="global-container">
        <h2 className="bp-title">Take A Look At What We Have Created!</h2>
        
        <div className="bp-grid">
          {/* Top Row */}
          <div className="bp-card" onClick={() => handleCardClick(proj1Svg)} style={{ cursor: 'pointer' }}><img src={img1} alt="Project 1" /></div>
          <div className="bp-card" onClick={() => handleCardClick(projQodenextSvg)} style={{ cursor: 'pointer' }}><img src={img2} alt="Project 2" /></div>
          <div className="bp-card" onClick={() => handleCardClick(projNittyGritty)} style={{ cursor: 'pointer' }}><img src={img3} alt="Project 3" /></div>
          
          {/* Bottom Row */}
          <div className="bp-card" onClick={() => handleCardClick(projDataCirclesSvg)} style={{ cursor: 'pointer' }}><img src={img4} alt="Project 4" /></div>
          <div className="bp-card" onClick={() => handleCardClick(projDataCirclesSvg)} style={{ cursor: 'pointer' }}><img src={img5} alt="Project 5" /></div>
          
          {/* Bottom Right Complex Cell */}
          <div className="bp-complex-cell">
            <div className="bp-tall" onClick={() => handleCardClick(img6)} style={{ cursor: 'pointer' }}><img src={img6} alt="Project 6" /></div>
            <div className="bp-small-col">
              <div className="bp-small" onClick={() => handleCardClick(img7)} style={{ cursor: 'pointer' }}><img src={img7} alt="Project 7" /></div>
              <div className="bp-small" onClick={() => handleCardClick(img8)} style={{ cursor: 'pointer' }}><img src={img8} alt="Project 8" /></div>
            </div>
          </div>
        </div>

        <div className="bp-view-more-container">
          <button className="bp-view-more-btn" onClick={() => { window.scrollTo(0, 0); navigate('/projects'); }}>
            See More Projects &gt;
          </button>
        </div>
      </div>

      {/* SVG Modal Overlay */}
      {activeSvg && (
        <div className="project-svg-modal-overlay" onClick={() => setActiveSvg(null)}>
          {isImageLoading && (
            <div className="copper-loader-container">
              <div className="copper-spinner"></div>
            </div>
          )}
          <div className="project-svg-modal-content" onClick={e => e.stopPropagation()}>
            <button className="project-svg-modal-close" onClick={() => setActiveSvg(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={activeSvg} 
              alt="Project Presentation" 
              className="project-svg-full" 
              style={{ display: isImageLoading ? 'none' : 'block' }}
              onLoad={() => setIsImageLoading(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
