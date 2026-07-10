import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TermsConditionsHeroBg from './TermsConditionsHeroBg';
import './TermsConditions.css';

export default function PrivacyPolicy() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <Navbar activeSection="" />
      <div className="projects-page">
        {/* Hero Section */}
        <div className="projects-hero-wrap">
          <div className="services-hero-bg-container">
            <TermsConditionsHeroBg />
          </div>
          <div className="projects-hero-content" style={{ paddingTop: 0 }}>
            <h1 className="projects-hero-title reveal-up" style={{ color: '#000', marginBottom: 0, transform: 'translateY(-60px)' }}>Privacy Policy</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="global-container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="terms-content reveal-up" style={{ fontSize: '16px', fontWeight: '300', color: '#504F4F' }}>
            <style>{`
              .terms-content p { margin-bottom: 1.5rem; }
              .terms-content h3 { margin-top: 3rem; margin-bottom: 1rem; font-size: 1.5rem; font-weight: 600; color: #000; }
              .terms-content ul { margin-bottom: 1.5rem; padding-left: 1.5rem; }
              .terms-content li { margin-bottom: 0.5rem; }
              .terms-content p.terms-last-updated { font-size: 16px; font-weight: 400; color: #C55418; margin-bottom: 88px; text-transform: uppercase; letter-spacing: 0px; }
            `}</style>
            
            <p className="terms-last-updated">LAST UPDATED: 9TH JULY, 2026</p>

            <p>The Copper Studio ("we", "us", "our") is a subsidiary owned and operated by of M/s DataCircles Technology with its place of business at Registered Office No. 721, Floor 7th, Centura Square IT Park, Road No. 27, Wagle Estate, Thane (West) - 400604, Maharashtra, India. We are committed to protecting the privacy of everyone who visits our website, thecopperstudio.com (the "Website"), and who contacts us or engages our services.</p>
            <p>This Privacy Policy explains what personal data we collect, why we collect it, how we use and protect it, and the rights you have over it. It is intended to align with the Digital Personal Data Protection Act, 2023 (the "DPDP Act") and other applicable Indian laws. By using our Website or sharing your information with us, you consent to the practices described here.</p>
            
            <h3>1. Who we are (Data Fiduciary):</h3>
            <p>For the purposes of the DPDP Act, The Copper Studio is the "Data Fiduciary" that determines the purpose and means of processing your personal data. You ("you", "your", the "Data Principal") are the individual whose personal data we process.</p>
            <p>Contact for privacy matters:<br/>
              The Copper Studio<br/>
              Email: support@thecopperstudio.com/ contact@thecopperstudio.com<br/>
              Phone: +91 9820933877
            </p>

            <h3>2. What personal data we collect:</h3>
            <p>We collect only the data we need to respond to you and run our business:</p>
            <p><strong>Information you give us directly</strong></p>
            <ul>
              <li>Your name, email address, and phone number when you fill in a contact or enquiry form, book a consultation, or message us.</li>
              <li>The contents of your message, project brief, or enquiry.</li>
              <li>Any information you provide during a consultation or while engaging our services.</li>
            </ul>
            <p><strong>Information collected automatically</strong></p>
            <ul>
              <li>Usage and device data such as your IP address, browser type, device type, pages visited, and time spent on the Website.</li>
              <li>This is collected through cookies and similar technologies, including Google Tag Manager, Google Analytics, and Google Ads tracking (see Section 6).</li>
            </ul>
            <p>We do not intentionally collect sensitive personal data through the Website, and we ask that you do not send us such information through our forms.</p>

            <h3>3. Why we collect it (Purpose):</h3>
            <p>We process your personal data for the following purposes:</p>
            <ul>
              <li>To respond to your enquiries and requests.</li>
              <li>To schedule and conduct consultations.</li>
              <li>To provide, quote for, and deliver our services (branding, web design and development, and custom software).</li>
              <li>To communicate with you about your project or our services.</li>
              <li>To improve our Website and understand how visitors use it.</li>
              <li>To run and measure our marketing and advertising.</li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>

            <h3>4. Legal basis and consent:</h3>
            <p>We process your personal data on the basis of the consent you provide when you submit your information, and for the legitimate purposes for which you approach us. Where we rely on your consent, you may withdraw it at any time by contacting us (see Section 1). Withdrawing consent will not affect processing already carried out, and may limit our ability to respond to you or provide services.</p>

            <h3>5. How we share your data:</h3>
            <p>We do not sell your personal data. We share it only as necessary, with:</p>
            <ul>
              <li>Service providers who help us operate, such as our website hosting provider, email provider, and analytics and advertising platforms (for example, Google).</li>
              <li>Professional advisers such as accountants or legal advisers, where required.</li>
              <li>Authorities, where we are legally required to disclose information.</li>
            </ul>
            <p>Some of these providers (for example, Google) may process data on servers located outside India. Where this happens, we take reasonable steps to ensure your data continues to be protected.</p>

            <h3>6. Cookies and tracking technologies:</h3>
            <p>Our Website uses cookies and similar technologies to function properly, understand usage, and support our advertising. These include:</p>
            <ul>
              <li>Google Tag Manager — to manage the tags and scripts on our site.</li>
              <li>Google Analytics — to understand how visitors use the Website.</li>
              <li>Google Ads — to measure the performance of our advertising and, where applicable, show relevant ads.</li>
            </ul>
            <p>You can control or disable cookies through your browser settings. Disabling some cookies may affect how the Website works. For more information on how Google uses data, see Google's own privacy resources.</p>

            <h3>7. Data retention:</h3>
            <p>We keep your personal data only for as long as necessary for the purposes described in this policy, or as required by law. Enquiry and project data is retained for the duration of our engagement and for a reasonable period afterwards for record-keeping, legal, and tax purposes, after which it is deleted or anonymised.</p>

            <h3>8. Your rights:</h3>
            <p>Subject to applicable law, including the DPDP Act, you have the right to:</p>
            <ul>
              <li>Access — request confirmation of, and access to, the personal data we hold about you.</li>
              <li>Correction — request correction of inaccurate or incomplete data.</li>
              <li>Erasure — request deletion of your personal data, where there is no legal reason for us to keep it.</li>
              <li>Withdraw consent — as described in Section 4.</li>
              <li>Grievance redressal — raise a complaint about how we handle your data.</li>
              <li>Nominate — nominate another individual to exercise your rights in the event of death or incapacity.</li>
            </ul>
            <p>To exercise any of these rights, contact us using the details in Section 1. We will respond within a reasonable time and as required by law.</p>

            <h3>9. Grievance redressal:</h3>
            <p>If you have any concern or complaint about how we handle your personal data, please contact:<br/>
              The Copper Studio<br/>
              Email: support@thecopperstudio.com/ contact@thecopperstudio.com<br/>
              Phone: +91 9820933877
            </p>
            <p>We will acknowledge and address your grievance in accordance with applicable law.</p>

            <h3>10. Children's data:</h3>
            <p>Our Website and services are intended for businesses and adults. We do not knowingly collect the personal data of children (individuals under 18 years of age) without verifiable parental or guardian consent, as required by the DPDP Act. If you believe we have inadvertently collected such data, please contact us and we will delete it.</p>

            <h3>11. Data security</h3>
            <p>We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>

            <h3>12. Third-party links</h3>
            <p>Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to read their privacy policies.</p>

            <h3>13. Changes to this policy</h3>
            <p>We may update this Privacy Policy from time to time. The "Last updated" date at the top reflects the latest version. We encourage you to review this page periodically.</p>

            <h3>14. Contact us</h3>
            <p>For any questions about this Privacy Policy or your personal data:<br/>
              The Copper Studio<br/>
              Email: support@thecopperstudio.com/ contact@thecopperstudio.com<br/>
              Phone: +91 9820933877<br/>
              Address: Registered Office No. 721, Floor 7th, Centura Square IT Park, Road Number 27, Wagle Estate, Thane West (400604) - Maharashtra, India.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
