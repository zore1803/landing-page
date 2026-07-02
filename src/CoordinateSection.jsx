import React from 'react';
import './CoordinateSection.css';

export default function CoordinateSection() {
  return (
    <section className="coordinate-section">
      <div className="global-container flex-col-center">
        <h2 className="section-title">How Do We Co-ordinate?</h2>
        <p className="section-subtitle">
          <span className="subtitle-italic">Stay connected to your project from start to finish.</span><br/>
          Our client portal gives you a dedicated space to track progress, view project timelines, access upcoming meetings, share files, and download every deliverable.<br/>
          With lifetime access, your portal remains available long after your project is complete, giving you a permanent home for everything we've created together.
        </p>
        <div className="coordinate-video-box"></div>
      </div>
    </section>
  );
}
