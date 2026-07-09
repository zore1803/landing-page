import React from 'react';
import Navbar from './Navbar';
import FAQ from './FAQ';
import Booking from './Booking';
import Footer from './Footer';
import ContactHeroBg from './ContactHeroBg';
import './ContactPage.css';

function ContactPage() {
  return (
    <>
      <Navbar activeSection="contact" />

      <div className="contact-page">
        <div className="contact-hero-wrap">
          <div className="contact-hero-card">
            <div className="services-hero-bg-container">
              <ContactHeroBg />
            </div>
            <div className="contact-hero-content">
              <h1 className="contact-hero-title reveal-up">Contact Us</h1>
              <span className="contact-hero-tag reveal-up" style={{ transitionDelay: '100ms' }}>GET IN TOUCH</span>
            </div>
          </div>
        </div>

        {/* Contact methods section */}
        <div className="contact-methods-section">
          <div className="contact-methods-inner">
            <div className="contact-cards-grid">
              <div className="contact-card reveal-up" style={{ transitionDelay: '200ms' }}>
                <div className="contact-card-icon">
                  <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.125 21.3125H18.875L23.75 26V21.3125H27V8.8125H23.75M1 1H18.875V13.5H9.125L4.25 18.1875V13.5H1V1Z" stroke="#070815" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="contact-card-title">Chat to Sales</h3>
                <a className="contact-card-link" href="mailto:ruchi@thecopperstudio.com">ruchi@thecopperstudio.com</a>
              </div>
              <div className="contact-card reveal-up" style={{ transitionDelay: '300ms' }}>
                <div className="contact-card-icon">
                  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7.875H16.0125M11 7.875H11.0125M6 7.875H6.0125M2.25 1H19.75C20.0815 1 20.3995 1.1317 20.6339 1.36612C20.8683 1.60054 21 1.91848 21 2.25V13.5C21 13.8315 20.8683 14.1495 20.6339 14.3839C20.3995 14.6183 20.0815 14.75 19.75 14.75H11.5C11.179 14.7496 10.8702 14.8727 10.6375 15.0937L7.055 18.4975C6.96631 18.5816 6.85492 18.6378 6.7346 18.6592C6.61429 18.6807 6.49033 18.6664 6.37806 18.6181C6.2658 18.5698 6.17015 18.4897 6.10295 18.3876C6.03576 18.2855 5.99996 18.166 6 18.0438V16C6 15.6685 5.8683 15.3505 5.63388 15.1161C5.39946 14.8817 5.08152 14.75 4.75 14.75H2.25C1.91848 14.75 1.60054 14.6183 1.36612 14.3839C1.1317 14.1495 1 13.8315 1 13.5V2.25C1 1.91848 1.1317 1.60054 1.36612 1.36612C1.60054 1.1317 1.91848 1 2.25 1Z" stroke="#070815" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="contact-card-title">Chat to Support</h3>
                <a className="contact-card-link" href="mailto:ruchi@thecopperstudio.com">ruchi@thecopperstudio.com</a>
              </div>
              <div className="contact-card reveal-up" style={{ transitionDelay: '400ms' }}>
                <div className="contact-card-icon">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 16.25C15.9946 16.25 16.9484 15.8549 17.6517 15.1517C18.3549 14.4484 18.75 13.4946 18.75 12.5C18.75 11.5054 18.3549 10.5516 17.6517 9.84835C16.9484 9.14509 15.9946 8.75 15 8.75C14.0054 8.75 13.0516 9.14509 12.3483 9.84835C11.6451 10.5516 11.25 11.5054 11.25 12.5C11.25 13.4946 11.6451 14.4484 12.3483 15.1517C13.0516 15.8549 14.0054 16.25 15 16.25Z" stroke="#070815" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22.2496 17.4225H22.2359C23.1382 16.0999 23.6603 14.5552 23.7454 12.9564C23.8306 11.3576 23.4754 9.76618 22.7186 8.35529C21.9619 6.94441 20.8325 5.76821 19.4535 4.95475C18.0745 4.1413 16.4988 3.72179 14.8979 3.7419C13.297 3.76201 11.7323 4.22097 10.3742 5.0688C9.0161 5.91663 7.91664 7.12083 7.19555 8.55028C6.47446 9.97973 6.15938 11.5796 6.28463 13.1757C6.40988 14.7719 6.97066 16.303 7.90589 17.6025H7.88589L8.06089 17.8162C8.18589 17.975 8.31089 18.13 8.43589 18.28L14.9996 26.25L21.4121 18.44C21.6546 18.1787 21.8796 17.9037 22.0871 17.6162L22.2496 17.4225Z" stroke="#070815" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="contact-card-title">Visit Us</h3>
                <a className="contact-card-link" href="https://share.google/Bqenkvy3nbX5VUJ7p" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
              </div>
              <div className="contact-card reveal-up" style={{ transitionDelay: '500ms' }}>
                <div className="contact-card-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2094 11.3528L17.6383 12.7827C17.8564 12.9653 18.0318 13.1936 18.1521 13.4513C18.2724 13.7092 18.3348 13.9902 18.3348 14.2748C18.3348 14.5593 18.2724 14.8405 18.1521 15.0982C18.0318 15.356 17.561 15.8796 17.343 16.0622C13.4464 19.9636 8.87564 18.1947 4.96205 14.2805C1.04847 10.3662 -0.716985 5.79346 3.19873 1.90371C3.98255 1.12964 5.34062 0.476444 6.47177 1.60839L7.96064 3.09831C9.44951 4.58822 8.40589 5.51747 7.34489 6.60293C6.18893 7.75884 6.52435 8.76222 7.34489 9.58272L9.68401 11.9235C10.0789 12.3186 10.6144 12.5405 11.1728 12.5405C11.7313 12.5405 12.2668 12.3186 12.6616 11.9235C13.7396 10.8908 14.7806 9.92297 16.2094 11.3528Z" stroke="#070815" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="contact-card-title">Call Us</h3>
                <a className="contact-card-link" href="tel:+919820933877">+91 98209 33877</a>
              </div>
            </div>
          </div>
        </div>

        {/* Get in Touch — map + contact details */}
        <div className="git-section">
          <div className="git-header reveal-up">
            <span className="git-tag">VISIT US</span>
            <h2 className="git-main-title">We are always<br/>ready to help you and<br/>answer your questions</h2>
          </div>
          <div className="git-card">
            {/* Left: map */}
            <a
              className="git-map-wrap reveal-up"
              style={{ transitionDelay: '200ms' }}
              href="https://www.google.com/maps/search/?api=1&query=The+Copper+Studio,+Thane"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open location in Google Maps"
            >
              <iframe
                className="git-map-iframe"
                title="Copper Studio Location"
                src="https://www.google.com/maps?q=The+Copper+Studio,+Centura+Square+IT+Park,+Thane&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="git-map-overlay">
                <span className="git-map-cta">Open in Google Maps ↗</span>
              </div>
            </a>

            {/* Right: details */}
            <div className="git-details">
              <div className="git-heading-block reveal-up" style={{ transitionDelay: '300ms' }}>
                <h2 className="git-title">Get in Touch</h2>
                <p className="git-desc">Have a question or just want to say hello? We'd love to hear from you. Reach out and we'll get back to you as soon as possible.</p>
              </div>

              <div className="git-divider reveal-up" style={{ transitionDelay: '400ms' }} />

              <div className="git-contact-group">
                <div className="git-info-row reveal-up" style={{ transitionDelay: '500ms' }}>
                  <div className="git-info-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="git-address">Registered Office No. 721, Floor 7th, Centura Square IT Park, Road Number 27, Wagle Estate, Thane West (400604) - Maharashtra, India.</p>
                </div>

                <div className="git-info-row reveal-up" style={{ transitionDelay: '600ms' }}>
                  <div className="git-info-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="git-contact-links">
                    <a className="git-phone" href="tel:+919820933877">+91 98209 33877</a>
                  </div>
                </div>

                <div className="git-info-row reveal-up" style={{ transitionDelay: '700ms' }}>
                  <div className="git-info-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="git-contact-links">
                    <a className="git-email" href="mailto:sales@thecopperstudio.com">sales@thecopperstudio.com</a>
                    <a className="git-email" href="mailto:support@thecopperstudio.com">support@thecopperstudio.com</a>
                    <a className="git-email" href="mailto:help@thecopperstudio.com">help@thecopperstudio.com</a>
                  </div>
                </div>
              </div>

              <div className="git-divider reveal-up" style={{ transitionDelay: '800ms' }} />

              <div className="git-info-row git-social-row reveal-up" style={{ transitionDelay: '900ms' }}>
                <a className="git-social-link" href="https://www.instagram.com/the_copperstudio/" target="_blank" rel="noopener noreferrer">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                  </svg>
                  Instagram
                </a>
                <a className="git-social-link" href="https://www.linkedin.com/company/thecopperstudio" target="_blank" rel="noopener noreferrer">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="9" width="4" height="12" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* End section — same as home page */}
        <FAQ />
        <Booking />
        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
