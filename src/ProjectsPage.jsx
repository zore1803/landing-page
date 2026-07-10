import React, { useState } from 'react';
import Navbar from './Navbar';
import Booking from './Booking';
import Footer from './Footer';
import ProjectsHeroBg from './ProjectsHeroBg';
import './ProjectsPage.css';

import cottsonFull from './assets/projects/cottson-clothing-hq.webp';
import dataCirclesFull from './assets/projects/datacircles-hq.webp';
import nittyGrittyFull from './assets/projects/nitty-gritty-hq.png';
import qodenextFull from './assets/projects/qodenext-hq.webp';
import commonGroundsFull from './assets/projects/commongrounds-hq.webp';

import cottsonThumb from './assets/projects/cottsonclothing-thumb.webp';
import dataCirclesThumb from './assets/projects/datacircles-thumb.webp';
import nittyGrittyThumb from './assets/projects/nittygrity-thumb.webp';
import facilitiesThumb from './assets/projects/facilities-thumb.webp';
import qodenextThumb from './assets/projects/qodenext-thumb.webp';
import commonGroundsThumb from './assets/projects/commongrounds-thumb.webp';

const allProjects = [
  {
    id: 1,
    title: 'Cottson Clothing',
    category: 'Corporate Clothing Manufacturer • Apparel',
    image: cottsonThumb,
    fullImage: cottsonFull,
    industry: 'Corporate'
  },
  {
    id: 2,
    title: 'DataCircles',
    category: 'CRM + Invoicing Software • IT',
    image: dataCirclesThumb,
    fullImage: dataCirclesFull,
    industry: 'Technology/Saas'
  },
  {
    id: 3,
    title: 'Nitty Gritty Labz',
    category: 'Digital Marketing, Production & Development Services • Marketing Agency',
    image: nittyGrittyThumb,
    fullImage: nittyGrittyFull,
    industry: 'Corporate'
  },
  {
    id: 4,
    title: 'Facilities Tours & Travels Pvt.Ltd.',
    category: 'Corporate Transportation Services • Transportation',
    image: facilitiesThumb,
    fullImage: facilitiesThumb,
    industry: 'Corporate'
  },
  {
    id: 5,
    title: 'QodeNext India Pvt. Ltd.',
    category: 'IT Services and Consulting • IT',
    image: qodenextThumb,
    fullImage: qodenextFull,
    industry: 'Technology/Saas'
  },
  {
    id: 6,
    title: 'Common Grounds',
    category: 'Café • Hospitality',
    image: commonGroundsThumb,
    fullImage: commonGroundsFull,
    industry: 'Food & Beverage'
  }
];

const filters = [
  'All',
  'Technology/Saas',
  'Finance',
  'Corporate',
  'Healthcare',
  'Education',
  'Real Estate',
  'Retail/E-commerce',
  'Fashion/Beauty',
  'Food & Beverage'
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeFullImage, setActiveFullImage] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  React.useEffect(() => {
    if (activeFullImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeFullImage]);

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.industry === activeFilter);

  return (
    <>
      <Navbar activeSection="projects" />
      <div className="projects-page">
        {/* Hero Section */}
        <div className="projects-hero-wrap">
          <div className="services-hero-bg-container">
            <ProjectsHeroBg />
          </div>
          <div className="projects-hero-content">
            <h1 className="projects-hero-title reveal-up">Take A Look At What We Have Created!</h1>
            <p className="projects-hero-subtitle reveal-up" style={{ transitionDelay: '100ms' }}>
              A collection of work that reflects <strong>our approach, our process and the impact we've helped create</strong> for brands and businesses.
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="projects-filter-section global-container">
          <div className="filter-header reveal-up" style={{ transitionDelay: '200ms' }}>
            <span className="filter-label">FILTER BY INDUSTRY</span>
          </div>
          <div className="filter-pills reveal-up" style={{ transitionDelay: '300ms' }}>
            {filters.map(f => (
              <button 
                key={f}
                className={`filter-pill ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-section global-container">
          <div className="pp-grid">
            {filteredProjects.map((proj, idx) => (
              <div 
                key={proj.id} 
                className="pp-card-item reveal-up" 
                onClick={() => { 
                  if(proj.fullImage) {
                    setIsImageLoading(true);
                    setActiveFullImage(proj.fullImage); 
                  }
                }}
                style={{ cursor: proj.fullImage ? 'pointer' : 'default', transitionDelay: `${(idx % 3) * 100}ms` }}
              >
                <div className="pp-card-image">
                  {proj.image ? (
                    <img src={proj.image} alt={proj.title} />
                  ) : (
                    <div className="placeholder-image"></div>
                  )}
                </div>
                <h3 className="pp-card-title">{proj.title}</h3>
                <p className="pp-card-category">{proj.category}</p>
              </div>
            ))}
          </div>
        </div>

        <Booking />
        <Footer />
      </div>

      {activeFullImage && (
        <div className="pp-modal-overlay" onClick={() => setActiveFullImage(null)}>
          <div className="pp-modal-close" onClick={() => setActiveFullImage(null)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          {isImageLoading && (
            <div className="copper-loader-container">
              <div className="copper-spinner"></div>
            </div>
          )}
          <div className="pp-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={activeFullImage} 
              alt="Project Full Case Study" 
              className="pp-modal-full"
              style={{ display: isImageLoading ? 'none' : 'block' }}
              onLoad={() => setIsImageLoading(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
