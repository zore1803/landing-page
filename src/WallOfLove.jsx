import React, { useEffect, useRef, useState } from 'react';
import './WallOfLove.css';
import toolsWorkflowIcon from './assets/tools-workflow.svg';
import brandingWebsiteIcon from './assets/branding-website.svg';
import strategyStyleIcon from './assets/strategy-style.svg';

const useCountUp = (endValue, startValue = 0, duration = 1500) => {
  const [count, setCount] = useState(startValue);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          let startTime = null;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(startValue + (endValue - startValue) * easeOut));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(endValue);
            }
          };
          requestAnimationFrame(animate);
        } else {
          setCount(startValue);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue, startValue, duration]);

  return { count, ref };
};

const WallOfLove = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const titleRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  
  const { count: transparencyCount, ref: transparencyRef } = useCountUp(4, 1, 1500);
  const { count: satisfactionCount, ref: satisfactionRef } = useCountUp(98, 0, 1500);
  
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
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current || !wrapperRef.current) {
            ticking = false;
            return;
          }
          
          const glass = wrapperRef.current;
          const section = sectionRef.current;
          const viewportHeight = window.innerHeight;
          const wrapperHeight = glass.offsetHeight;
          
          // We need the scroll distance to equal the total travel distance of the glass wrapper.
          const scrollDistance = wrapperHeight + viewportHeight;
          
          // Set section height if not set
          const targetHeight = scrollDistance + viewportHeight;
          if (section.style.height !== `${targetHeight}px`) {
            section.style.height = `${targetHeight}px`;
          }
          
          const rect = section.getBoundingClientRect();
          let progress = -rect.top / scrollDistance;
          progress = Math.max(0, Math.min(1, progress));
          
          const cards = glass.querySelectorAll('.bento-card');
          
          // Glass wrapper translation
          const glassY = viewportHeight - (progress * wrapperHeight);
          glass.style.transform = `translateY(${glassY}px)`;
          
          // Cards staggered 3D animation
          cards.forEach((card, i) => {
            const startProgress = 0.05 + (i * 0.06); // Tighter stagger, earlier start
            const endProgress = startProgress + 0.25; // Slower transition for each card
            let cardProgress = (progress - startProgress) / (endProgress - startProgress);
            cardProgress = Math.max(0, Math.min(1, cardProgress));
            
            const cardEase = 1 - Math.pow(1 - cardProgress, 3);
            
            // Dramatic 3D swoop-in math
            const cardY = 350 - (cardEase * 350);
            const scale = 0.75 + (cardEase * 0.25);
            // Dynamic entry angle based on index
            const rotX = 45 - (cardEase * 45);
            const rotY = (i % 2 === 0 ? 20 : -20) - (cardEase * (i % 2 === 0 ? 20 : -20));
            
            card.style.transform = `translateY(${cardY}px) scale(${scale}) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
            card.style.opacity = cardEase;
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger immediately to set initial transforms
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="wall-section global-section" id="testimonials" ref={sectionRef}>
      <div className="wall-sticky-container">
        
        <div className="wall-header-wrapper" ref={titleRef}>
          <h2 className="wall-title">Why Do Our Clients Love Us</h2>
          <div className={`testimonial-svg-container ${isTitleVisible ? 'write-animation' : ''}`}>
            <svg viewBox="0 0 800 200" className="testimonial-svg">
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">Testimonial</text>
            </svg>
          </div>
        </div>

        <div className="wall-glass-wrapper" ref={wrapperRef}>
          <div className="wall-container global-container flex-col-center">
            <div className="testimonial-bento">
              {/* Row 1 */}
              <div className="bento-row">
                <div className="bento-card bento-beige bento-center-content" style={{ flex: 296 }}>
                  <div className="bento-inner-content">
                    <img src={toolsWorkflowIcon} alt="Tools & Workflow" className="bento-icon" />
                    <h3 className="bento-icon-title">Latest Industry Standard Tools & Workflow</h3>
                  </div>
                </div>
                
                <div className="bento-card bento-dark" style={{ flex: 638 }}>
                  <p className="bento-text">
                    As a B2B corporate apparel brand, having a strong digital presence was essential. Copper Studio created a brand identity, website, and client portal that feel modern, consistent, and built around our business. We're proud to present our brand to every client we work with.
                  </p>
                  <div className="bento-author">
                    <div className="author-info">
                      <div className="author-avatar-circle orange-bg">SJ</div>
                      <div className="author-details">
                        <h4>Shrey Jain</h4>
                        <p>Marketing Head</p>
                      </div>
                    </div>
                    <div className="author-company">Cottson Clothing</div>
                  </div>
                </div>
                
                <div className="bento-card bento-white bento-center-content" style={{ flex: 306 }}>
                  <div className="bento-inner-content">
                    <img src={brandingWebsiteIcon} alt="Branding + Website" className="bento-icon" />
                    <h3 className="bento-icon-title">Branding + Website Under One Roof</h3>
                    <p className="bento-icon-desc">A seamless experience from identity to launch</p>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="bento-row">
                <div className="bento-card bento-white bento-center-content" style={{ flex: 228 }}>
                  <div className="bento-inner-content">
                    <h3 className="bento-stat-4x" ref={transparencyRef}>{transparencyCount}x</h3>
                    <p className="bento-stat-desc"><strong>More project transparency</strong><br/>with real-time updates in your client portal</p>
                  </div>
                </div>
                
                <div className="bento-card bento-beige" style={{ flex: 473 }}>
                  <p className="bento-text dark-text">
                    With over 25 years in the travel industry, managing a team working 24/7 was becoming increasingly challenging. Copper Studio built a custom portal that simplified our workflows, improved team coordination, and made day-to-day operations far more efficient. It's made managing our business easier than ever
                  </p>
                  <div className="bento-author">
                    <div className="author-info">
                      <div className="author-avatar-circle orange-bg">MM</div>
                      <div className="author-details dark-text">
                        <h4>Subhash Mishra</h4>
                        <p>Director</p>
                      </div>
                    </div>
                    <div className="author-company dark-text">Facilities Tours & Travels Pvt. Ltd.</div>
                  </div>
                </div>
                
                <div className="bento-card bento-dark bento-center-content" style={{ flex: 259 }}>
                  <div className="bento-inner-content">
                    <h3 className="bento-stat-98" ref={satisfactionRef}>{satisfactionCount}%</h3>
                    <h4 className="bento-stat-subtitle">Client Satisfaction Rate</h4>
                    <p className="bento-stat-desc">from first ideas to final delivery</p>
                  </div>
                </div>

                <div className="bento-card bento-white bento-center-content" style={{ flex: 259 }}>
                  <div className="bento-inner-content">
                    <img src={strategyStyleIcon} alt="Strategy Before Style" className="bento-icon" />
                    <h3 className="bento-icon-title">Strategy Before Style</h3>
                    <p className="bento-icon-desc">Every visual decision starts with a business objective</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WallOfLove;
