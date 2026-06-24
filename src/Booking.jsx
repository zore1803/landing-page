import React, { useEffect } from 'react';
import './Booking.css';

const Booking = () => {
  useEffect(() => {
    // 1. Dynamically append the Calendly widget script if not present
    const scriptId = 'calendly-script';
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // 2. Initialize widget when script loads or if it's already cached
    const initCalendly = () => {
      if (window.Calendly) {
        // Clear container first to avoid duplicate iframe injections on re-renders
        const container = document.getElementById('calendly-inline-container');
        if (container) {
          container.innerHTML = '';
        }
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/thecopperstudio/30min?hide_gdpr_banner=1',
          parentElement: container,
          prefill: {},
          pageSettings: {}
        });
      }
    };

    if (window.Calendly) {
      initCalendly();
    } else {
      script.addEventListener('load', initCalendly);
    }

    return () => {
      if (script) {
        script.removeEventListener('load', initCalendly);
      }
    };
  }, []);

  return (
    <section className="booking-section" id="contact">
      <div className="booking-container">
        <h2 className="booking-title">Excited? Let's Talk Today</h2>
        <p className="booking-subtitle">Schedule a call with us to discuss your brand's roadmap.</p>
        <div 
          id="calendly-inline-container" 
          className="calendly-inline-widget-wrapper" 
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      </div>
    </section>
  );
};

export default Booking;
