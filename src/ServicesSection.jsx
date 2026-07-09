import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';

import brand1 from './assets/logos/Group 79.svg';
import brand2 from './assets/logos/Group 80.svg';
import brand3 from './assets/logos/Group 81.svg';
import brand4 from './assets/logos/CC LOGO 500X500 FAVICON BLUE BG WHITE FONT BIG SIZE Background Removed 2.svg';
import brand5 from './assets/logos/Group 82.svg';
import brand7 from './assets/logos/DataCircles White Logo 2 (1).svg';

import copperBrandLogo from './assets/logos/CopperBrand.svg';
import copperWebLogo from './assets/logos/CopperWeb.svg';
import copperFlowLogo from './assets/logos/CopperFlow.svg';

import commonGroundsImg from './assets/common-grounds.webp';
import commonGroundsVid from './assets/Transform_this_static_café_sce.mp4';
import dataCirclesImg from './assets/DataCirclesLaptop.webp';
import dataCirclesDashboardImg from './assets/studio/datacirclesdashboard.png';
import dataCirclesWebImg from './assets/DataCircles_web.webp';
import cottsonWebImg from './assets/Cottson_web.webp';
import premiumGroupImg from './assets/image.webp';
import premiumGroupVid from './assets/Create_a_premium_micro_animati (3).mp4';
import qodenextImg from './assets/QodenextImage_enhanced.webp';

export default function ServicesSection() {
  const logos = [brand1, brand2, brand3, brand4, brand5, brand7];

  return (
    <div className="services-wrapper">
      {/* Trusted Brands Banner */}
      <div className="trusted-banner reveal-up">
        <h3 className="trusted-banner-title">Brands Who Trusted Us With Their Vision</h3>
        <div className="trusted-marquee">
          <div className="trusted-marquee-track">
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                {logos.map((logo, index) => (
                  <img src={logo} alt={`Brand ${index}`} key={`${i}-${index}`} className="trusted-logo" />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Services Area */}
      <div className="services-main-container">
        <div className="services-header reveal-up">
          <h2 className="services-title">Services To Design Your Brand</h2>
          <p className="services-subtitle">
            From strategy and visual identity to websites and ongoing support, we create thoughtful brand experience that helps your business stand out, connect and grow.
          </p>
        </div>

        <div className="services-list">
          <div className="service-divider"></div>

          {/* Service 01 */}
          <div className="service-block block-01">
            <div className="service-split-layout">
              <div className="service-left-col">
                <div className="service-number text-orange reveal-up">01 - BRAND IDENITY</div>
                <div className="service-logo-text reveal-up" style={{ transitionDelay: '100ms' }}>
                  <img src={copperBrandLogo} alt="CopperBrand" className="service-logo-img" />
                </div>
                <p className="service-desc max-w-400 reveal-up" style={{ transitionDelay: '200ms' }}>
                  <span className="desc-highlight text-orange">From first impressions to lasting recognition.</span> We believe great brands are built through consistency at every touchpoint. By combining strategy, visual identity, print, packaging, and branded assets, we create unified brand experiences that people remember and businesses grow with.
                </p>
                <Link to="/services/copperbrand" className="service-more reveal-up" style={{textDecoration: 'none', transitionDelay: '700ms'}}>
                  Want To <strong>Know More?</strong>
                  <div className="more-arrow-btn">
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 4L1 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="service-right-col grid-2x2">
                <div className="s-card reveal-up" style={{ transitionDelay: '300ms' }}>
                  <img src={premiumGroupImg} alt="Cottson Clothing" className="s-card-img" />
                  <video
                    src={premiumGroupVid}
                    className="s-card-vid"
                    muted
                    loop
                    playsInline
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate"
                    aria-hidden="true"
                  >
                    <track kind="captions" srcLang="en" label="English" default />
                  </video>
                </div>
                <div className="s-card reveal-up" style={{ transitionDelay: '400ms' }}>
                  <img src={dataCirclesImg} alt="DataCircles" className="s-card-img" />
                </div>
                <div className="s-card reveal-up" style={{ transitionDelay: '500ms' }}>
                  <img src={commonGroundsImg} alt="Common Grounds" className="s-card-img" />
                  <video
                    src={commonGroundsVid}
                    className="s-card-vid"
                    muted
                    loop
                    playsInline
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate"
                    aria-hidden="true"
                  >
                    <track kind="captions" srcLang="en" label="English" default />
                  </video>
                </div>
                <div className="s-card reveal-up" style={{ transitionDelay: '600ms' }}>
                  <img src={qodenextImg} alt="Qodenext India Pvt. Ltd." className="s-card-img" />
                </div>
              </div>
            </div>
          </div>

          <div className="service-divider"></div>

          {/* Service 02 */}
          <div className="service-block block-02">
            <div className="service-split-layout">
              <div className="service-left-col">
                <div className="service-number text-light-orange reveal-up">02 - WEB DESIGN & DEVELOPMENT</div>
                <div className="service-logo-text reveal-up" style={{ transitionDelay: '100ms' }}>
                  <img src={copperWebLogo} alt="CopperWeb" className="service-logo-img" />
                </div>
                <p className="service-desc max-w-400 reveal-up" style={{ transitionDelay: '200ms' }}>
                  <span className="desc-highlight text-light-orange">We take care of everything your website needs,</span> from custom design and development to secure hosting, routine maintenance, and continuous optimization—so you can focus on growing your business while your website performs at its best.
                </p>
                <div className="service-more reveal-up" style={{ transitionDelay: '500ms' }}>
                  Want To <strong>Know More?</strong>
                  <div className="more-arrow-btn">
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 4L1 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="service-right-col grid-2">
                <div className="s-card reveal-up" style={{ transitionDelay: '300ms' }}>
                  <img src={dataCirclesWebImg} alt="DataCircles Web" className="s-card-img" />
                </div>
                <div className="s-card reveal-up" style={{ transitionDelay: '400ms' }}>
                  <img src={cottsonWebImg} alt="Cottson Web" className="s-card-img" />
                </div>
              </div>
            </div>
          </div>

          <div className="service-divider"></div>

          {/* Service 03 */}
          <div className="service-block block-03">
            <div className="service-split-layout">
              <div className="service-left-col">
                <div className="service-number text-light-orange reveal-up">03 - CLIENT PORTAL</div>
                <div className="service-logo-text reveal-up" style={{ transitionDelay: '100ms' }}>
                  <img src={copperFlowLogo} alt="CopperFlow" className="service-logo-img" />
                </div>
                <p className="service-desc max-w-600 reveal-up" style={{ transitionDelay: '200ms' }}>
                  <span className="desc-highlight text-light-orange">Custom Portals Built Around Your Business.</span> Every business works differently, and your portal should too. We design and develop custom client, employee, and business portals that simplify workflows, centralize information, and create secure, intuitive experiences tailored to the way your team and customers work.
                </p>
                <div className="service-more reveal-up" style={{ transitionDelay: '400ms' }}>
                  Want To <strong>Know More?</strong>
                  <div className="more-arrow-btn">
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 4L1 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="service-right-col grid-1">
                <div className="s-card reveal-up" style={{ transitionDelay: '300ms' }}>
                  <img src={dataCirclesDashboardImg} alt="CopperFlow Dashboard" className="s-card-img" style={{ objectPosition: 'top' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="service-divider last-divider"></div>
        </div>
      </div>
    </div>
  );
}
