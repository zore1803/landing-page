import React, { useEffect, useRef, useState } from 'react';
import './ProcessRoadmap.css';
import img1 from './assets/process/1 1.svg';
import img2 from './assets/process/2 1.svg';
import img3 from './assets/process/3 1.svg';
import img4 from './assets/process/4 1.svg';
import img5 from './assets/process/5 1.svg';
import img6 from './assets/process/6 2.svg';

/*
 * Geometry is the single source of truth.
 * Everything (path, nodes, text labels) is expressed in the same
 * 1200 x 1180 coordinate space so nothing drifts out of alignment.
 *
 * The flow is a serpentine: top row left -> right, a U-turn down on the
 * right (node 3 sits at its apex), middle row right -> left, a U-turn
 * down on the left (node 5 sits at its apex), then the bottom row.
 * Text labels always live on the *inside* of a curve so they never
 * cross the track.
 */
const VIEW_W = 1600;
const VIEW_H = 1950;
const PATH_D =
  'M 170 500 L 1240 500 A 225 225 0 0 1 1240 950 L 360 950 A 225 225 0 0 0 360 1400 L 1240 1400';

const ORANGE = '#E06D20';
const RUST = '#8A2F1B';

// Each node sits exactly on PATH_D. `box` positions the text label
// (percent of the container) in a clear, non-overlapping zone.
const steps = [
  {
    num: 1,
    title: "1. Client Onboarding",
    desc: "Understand your business goals, define the project scope and establish a clear roadmap for the project.",
    node: { x: 170, y: 500 },
    color: ORANGE,
    box: { top: '27.2%', left: '3%', width: '20%' },
    img: img1
  },
  {
    num: 2,
    title: "2. Visual Identity Toolkit",
    desc: "Explore creative concepts and refine the strongest direction that best represents your brand.",
    node: { x: 705, y: 500 },
    color: ORANGE,
    box: { top: '3%', left: '34%', width: '20%' },
    img: img2
  },
  {
    num: 3,
    title: "3. Brand Core Design Assets",
    desc: "Create the core brand identity and develop supporting visual assets that strengthen your brand system.",
    node: { x: 1465, y: 725 },
    color: ORANGE,
    box: { top: '27.2%', left: '58%', width: '18%' },
    img: img3
  },
  {
    num: 4,
    title: "4. Print Collateral Design",
    desc: "Apply the brand identity across printed materials ensuring consistency and impact.",
    node: { x: 800, y: 950 },
    color: ORANGE,
    box: { top: '50.2%', left: '54%', width: '20%' },
    img: img4
  },
  {
    num: 5,
    title: "5. Brand Collateral",
    desc: "Expand the brand identity across various touchpoints and applications to build a comprehensive brand presence.",
    node: { x: 135, y: 1175 },
    color: RUST,
    box: { top: '50.2%', left: '22%', width: '20%' },
    img: img5
  },
  {
    num: 6,
    title: "6. Brand Guidelines",
    desc: "Develop comprehensive brand guidelines to ensure consistency and maintain the brand integrity.",
    node: { x: 800, y: 1400 },
    color: RUST,
    box: { top: '73.3%', left: '44%', width: '20%' },
    img: img6
  }
];

const ProcessRoadmap = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Draw the line slowly from when it enters the viewport
      // until the bottom of the container has passed the middle of the screen
      const start = windowHeight;
      const end = windowHeight / 2 - rect.height;
      const range = start - end;

      let progress = (start - rect.top) / range;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="process-s-section" ref={containerRef}>
      <div className="process-s-container">
        <h2 className="process-s-title">Process</h2>

          {/* SVG Track */}
          <svg
            className="process-s-svg"
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Inactive track */}
            <path d={PATH_D} stroke="#D0D0D0" strokeWidth="6" fill="none" strokeLinecap="round" />
            {/* Active (scroll-revealed) track */}
            <path
              ref={pathRef}
              d={PATH_D}
              stroke="#4A4A4A"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={pathLength}
              strokeDashoffset={pathLength - pathLength * scrollProgress}
              style={{ transition: 'stroke-dashoffset 0.4s ease-out' }}
            />

            {/* Nodes */}
            {steps.map((step, i) => (
              <g
                key={step.num}
                style={{
                  opacity: scrollProgress > i / steps.length ? 1 : 0.35,
                  transition: 'opacity 0.4s ease'
                }}
              >
                <circle cx={step.node.x} cy={step.node.y} r={28} fill={step.color} />
                <text
                  x={step.node.x}
                  y={step.node.y}
                  fill="#FFF"
                  fontSize="24"
                  fontWeight="bold"
                  fontFamily="Inter, sans-serif"
                  textAnchor="middle"
                  dy=".35em"
                >
                  {step.num}
                </text>
              </g>
            ))}
          </svg>

          {/* Text labels */}
          {steps.map((step, i) => {
            const isVisible = scrollProgress >= i / steps.length;
            return (
              <div
                key={step.num}
                className="process-s-text"
                style={{ 
                  top: step.box.top, 
                  left: step.box.left, 
                  width: step.box.width,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  pointerEvents: isVisible ? 'auto' : 'none'
                }}
              >
                {step.img && <img src={step.img} alt={step.title} className="process-s-img" />}
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile view */}
        <div className="process-mobile-list">
          <h2 className="process-s-title">Process</h2>
          {steps.map((step) => (
            <div key={step.num} className="process-mobile-item">
              <div className="process-mobile-num" style={{ backgroundColor: step.color }}>
                {step.num}
              </div>
              <div className="process-mobile-content">
                {step.img && <img src={step.img} alt={step.title} className="process-s-img-mobile" />}
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default ProcessRoadmap;
