import React from 'react';
import './ServicesPage.css';

const ServicesTestimonial = () => {
  return (
    <div className="services-testimonial-section global-section">
      <div className="st-header">
        <h2 className="st-title">Why Do Our Clients Love Us</h2>
        <h3 className="st-subtitle">Testimonial</h3>
      </div>
      
      <div className="st-grid">
        {/* Left Block - Metrics */}
        <div className="st-metrics-block">
          <div className="st-metric-card light-card">
            <div className="st-metric-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#EE7A1D" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
                <circle cx="12" cy="12" r="6" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
              </svg>
            </div>
            <h4 className="st-metric-title">Strategy Before Style</h4>
            <p className="st-metric-desc">Every visual decision starts with a business objective</p>
          </div>
          <div className="st-metric-card light-card highlight-metric">
            <div className="st-metric-value">4x</div>
            <p className="st-metric-desc dark-text">More project transparency with real-time updates in your client portal</p>
          </div>
        </div>

        {/* Middle Block - Long Testimonial */}
        <div className="st-testimonial-block dark-card">
          <p className="st-testimonial-text">
            "With over 25 years in the travel industry, managing a team working 24/7 was becoming increasingly challenging. Copper Studio built a custom portal that simplified our workflows, improved team coordination, and made day-to-day operations far more efficient. It's made managing our business easier than ever"
          </p>
          <div className="st-testimonial-author">
            <div className="st-author-avatar bg-orange">SM</div>
            <div className="st-author-info">
              <span className="st-author-name">Subhash Mishra</span>
              <span className="st-author-role">Director, Facilities Tours & Travels Pvt. Ltd.</span>
            </div>
          </div>
        </div>

        {/* Right Block - Stacked Testimonial & Metrics */}
        <div className="st-right-block">
          <div className="st-testimonial-block light-border-card">
            <p className="st-testimonial-text dark-text">
              "As a B2B corporate apparel brand, having a strong digital presence was essential. Copper Studio created a brand identity, website, and client portal that feel modern, consistent, and built around our business. We're proud to present our brand to every client we work with."
            </p>
            <div className="st-testimonial-author">
              <div className="st-author-avatar bg-orange">SJ</div>
              <div className="st-author-info">
                <span className="st-author-name dark-text">Shrey Jain</span>
                <span className="st-author-role">Marketing Head, Cottson Clothing</span>
              </div>
            </div>
          </div>
          <div className="st-metric-card dark-card st-satisfaction-card">
            <div className="st-metric-value">98%</div>
            <h4 className="st-metric-title">Client Satisfaction Rate</h4>
            <p className="st-metric-desc">A seamless experience from identity to launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTestimonial;
