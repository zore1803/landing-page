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

const services = [
  {
    logo: copperBrandLogo,
    alt: 'CopperBrand',
    highlight: 'From first impressions to lasting recognition.',
    desc: ' We build memorable brands through strategy, identity, print, packaging, and cohesive visual systems that inspire trust and support business growth.',
    img: premiumGroupImg,
    imgAlt: 'CopperBrand',
    link: '/copper-brand',
  },
  {
    logo: copperWebLogo,
    alt: 'CopperWeb',
    highlight: 'From strategy and UX to launch and support.',
    desc: ' We create high-performing websites that blend exceptional design, seamless functionality, and measurable business results.',
    img: dataCirclesImg,
    imgAlt: 'CopperWeb',
    link: null,
  },
  {
    logo: copperFlowLogo,
    alt: 'CopperFlow',
    highlight: 'Digital tools built around your business.',
    desc: ' We design custom client, employee, and business portals that streamline workflows, centralize information, and improve efficiency.',
    img: dataCirclesDashboardImg,
    imgAlt: 'CopperFlow',
    link: null,
  },
];

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

        <div className="services-grid">
          {services.map((s, i) => {
            const inner = (
              <>
                <img src={s.logo} alt={s.alt} className="service-col-logo" />
                <p className="service-col-desc">
                  <span className="desc-highlight text-orange">{s.highlight}</span>{s.desc}
                </p>
                <div className="service-col-card">
                  <img src={s.img} alt={s.imgAlt} className="s-card-img" />
                </div>
                <span className="service-col-more">
                  Get To <strong>Know More</strong>
                  <span className="more-chevron">&rsaquo;</span>
                </span>
              </>
            );
            return (
              <React.Fragment key={i}>
                {i > 0 && <div className="services-col-divider" aria-hidden="true"></div>}
                {s.link ? (
                  <Link
                    to={s.link}
                    className="service-col reveal-up"
                    style={{ transitionDelay: `${i * 100}ms`, textDecoration: 'none' }}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="service-col reveal-up" style={{ transitionDelay: `${i * 100}ms` }}>
                    {inner}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
