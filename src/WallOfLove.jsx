import React from 'react';
import './WallOfLove.css';

const ArrowIcon = () => (
  <div className="wall-arrow-circle">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="wall-arrow-icon">
      <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const WallOfLove = () => {
  return (
    <section className="wall-section" id="testimonials">
      <div className="wall-container">
        <h2 className="wall-title">Our wall of love</h2>
        <p className="wall-subtitle">Not to flex, but we're what brands call a game-changer.</p>

        <div className="wall-grid">
          {/* Card 1: Testimonial 1 */}
          <div className="wall-card testimonial-card color-grey card-span-2">
            <p className="testimonial-text">
              "The visual identity Copper Studio designed completely transformed our brand perception. We went from a local startup to a nationally recognized company, and our revenue doubled in under six months."
            </p>
            <div className="testimonial-footer">
              <div className="author-info">
                <div className="author-avatar avatar-1">BJ</div>
                <div>
                  <h4 className="author-name">Brennen Jackson</h4>
                  <p className="author-role">CVO - MMI Industries</p>
                </div>
              </div>
              <div className="client-logo">MMI Industries</div>
            </div>
          </div>

          {/* Card 2: Stat 1 */}
          <div className="wall-card stat-card color-blue">
            <div>
              <div className="stat-value">98%</div>
              <div className="stat-label">client satisfaction rate</div>
            </div>
            <div className="stat-footer">
              <div className="client-logo-sm">MMI</div>
              <ArrowIcon />
            </div>
          </div>

          {/* Card 3: Stat 2 */}
          <div className="wall-card stat-card color-purple">
            <div>
              <div className="stat-value">40%</div>
              <div className="stat-label">increase in conversion rates</div>
            </div>
            <div className="stat-footer">
              <div className="client-logo-sm">AURA</div>
              <ArrowIcon />
            </div>
          </div>

          {/* Card 4: Stat 3 */}
          <div className="wall-card stat-card color-lime">
            <div>
              <div className="stat-value">10x</div>
              <div className="stat-label">brand engagement growth</div>
            </div>
            <div className="stat-footer">
              <div className="client-logo-sm">TRUCKRS</div>
              <ArrowIcon />
            </div>
          </div>

          {/* Card 5: Stat 4 */}
          <div className="wall-card stat-card color-mint">
            <div>
              <div className="stat-value">2x</div>
              <div className="stat-label">faster web loading speed</div>
            </div>
            <div className="stat-footer">
              <div className="client-logo-sm">LECHLEY</div>
              <ArrowIcon />
            </div>
          </div>

          {/* Card 6: Testimonial 2 */}
          <div className="wall-card testimonial-card color-dark-brand card-span-2">
            <p className="testimonial-text">
              "We were skeptical about redesigning our custom platform, but Copper Studio delivered a design system that saved our engineers hundreds of hours. Their eye for detail is unmatched."
            </p>
            <div className="testimonial-footer">
              <div className="author-info">
                <div className="author-avatar avatar-2">CG</div>
                <div>
                  <h4 className="author-name">Cam Green</h4>
                  <p className="author-role">Product Lead - Cura Search</p>
                </div>
              </div>
              <div className="client-logo">Cura Search</div>
            </div>
          </div>

          {/* Card 7: Stat 5 */}
          <div className="wall-card stat-card color-yellow">
            <div>
              <div className="stat-value">15+</div>
              <div className="stat-label">international design awards</div>
            </div>
            <div className="stat-footer">
              <div className="client-logo-sm">CURA</div>
              <ArrowIcon />
            </div>
          </div>

          {/* Card 8: Stat 6 */}
          <div className="wall-card stat-card color-teal">
            <div>
              <div className="stat-value">2.5x</div>
              <div className="stat-label">increase in online sales</div>
            </div>
            <div className="stat-footer">
              <div className="client-logo-sm">WEFY</div>
              <ArrowIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WallOfLove;
