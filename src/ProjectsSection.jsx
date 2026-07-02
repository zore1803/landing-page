import React, { useEffect, useRef } from 'react';
import './ProjectsSection.css';

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

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
    { title: "Copper Brand", tags: ["UI/UX", "Branding", "Development"] },
    { title: "Transforming the future of fashion", tags: ["Web Design"] },
    { title: "Project Three", tags: ["Design", "Strategy", "Print"] },
    { title: "Project Four", tags: ["Development"] }
  ];

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="projects-sticky-container">

        <div className="projects-header-wrapper">
          <h2 className="section-title">Take A Look At What We Have Created!</h2>
          <div className="cursive-accent">Projects</div>
        </div>

        <div className="projects-glass-wrapper" ref={wrapperRef}>
          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <div className="project-card" key={idx}>
                <div className="project-card-content">
                  <h4 className="project-card-title">{proj.title}</h4>
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
    </section>
  );
}
