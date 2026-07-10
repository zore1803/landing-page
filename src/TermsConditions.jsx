import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TermsConditionsHeroBg from './TermsConditionsHeroBg';
import './TermsConditions.css';

export default function TermsConditions() {
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
            <h1 className="projects-hero-title reveal-up" style={{ color: '#000', marginBottom: 0, transform: 'translateY(-60px)' }}>Terms and Conditions</h1>
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

            <p>Welcome to thecopperstudio.com (the "Website"), operated by The Copper Studio, a subsidiary owned and operated by of M/s DataCircles Technology with its place of business at Registered Office No. 721, Floor 7th, Centura Square IT Park, Road No. 27, Wagle Estate, Thane (West) - 400604, Maharashtra, India as ("we", "us", "our").</p>
            <p>These Terms and Conditions ("Terms") govern your use of our Website and your general engagement with us. Please read them carefully. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree, please do not use the Website.</p>
            
            <h3>1. About these Terms:</h3>
            <p>These Terms cover your use of our Website and the general basis on which we engage with prospective and existing clients. The specific terms of any project we undertake for you — including scope, deliverables, timelines, pricing, revisions, and payment schedule — are set out separately in a written proposal, quotation, or statement of work that you approve before work begins. Where those project-specific terms differ from these Terms, the project-specific terms govern that engagement.</p>
            
            <h3>2. Our services:</h3>
            <p>The Copper Studio provides brand identity and design (CopperBrand), website design and development (CopperWeb), and custom software and portal development (CopperFlow). Descriptions and packages shown on the Website are for general information. They are not offers capable of acceptance and may change without notice. A binding engagement is created only when we and you both agree to a specific written proposal or statement of work.</p>
            
            <h3>3. Consultations and enquiries:</h3>
            <p>You may book a consultation or submit an enquiry through the Website. A consultation is a no-obligation discussion and does not create any contract or commitment to purchase. We reserve the right to decline or reschedule consultations at our discretion.</p>
            
            <h3>4. Use of the Website:</h3>
            <p>You agree to use the Website lawfully and not to:</p>
            <ul>
              <li>Use it in any way that breaches applicable laws or regulations.</li>
              <li>Attempt to gain unauthorised access to the Website or its systems.</li>
              <li>Introduce malicious code, or interfere with the Website's operation.</li>
              <li>Copy, reproduce, or exploit any part of the Website except as permitted below.</li>
            </ul>

            <h3>5. Intellectual property:</h3>
            <p>All content on the Website — including text, graphics, logos, designs, layouts, and code — is owned by or licensed to The Copper Studio and is protected by applicable intellectual property laws. You may view and use the Website for your own information and to engage our services. You may not copy, reproduce, distribute, or create derivative works from our content without our prior written permission.</p>
            <p>Ownership of work we create for clients (such as logos, designs, and software) is addressed in the relevant project agreement, not by these Terms.</p>

            <h3>6. Payments and refunds:</h3>
            <p>Payment terms, milestones, and any refund arrangements for our services are set out in your project proposal or statement of work. These Terms do not create any payment obligation on their own. Consultations booked through the Website are free unless stated otherwise.</p>

            <h3>7. Third-party links and tools:</h3>
            <p>The Website may link to or integrate third-party websites and tools. We are not responsible for the content, availability, or practices of third parties. Your use of third-party services is at your own risk and subject to their terms.</p>

            <h3>8. Disclaimer of warranties:</h3>
            <p>The Website and its content are provided on an "as is" and "as available" basis. To the extent permitted by law, we make no warranties, express or implied, regarding the Website's accuracy, reliability, or availability. We do not warrant that the Website will be uninterrupted, error-free, or free of harmful components.</p>

            <h3>9. Limitation of liability:</h3>
            <p>To the maximum extent permitted by law, The Copper Studio shall not be liable for any indirect, incidental, consequential, or special damages arising out of or in connection with your use of the Website. Nothing in these Terms limits any liability that cannot be limited under applicable law. Liability arising from our services is governed by the relevant project agreement.</p>
            
            <h3>10. Indemnity:</h3>
            <p>You agree to indemnify and hold harmless The Copper Studio against any claims, losses, or expenses arising from your misuse of the Website or breach of these Terms.</p>
            
            <h3>11. Changes to these Terms:</h3>
            <p>We may update these Terms from time to time. The "Last updated" date reflects the current version. Continued use of the Website after changes are posted constitutes acceptance of the revised Terms.</p>
            
            <h3>12. Governing law and jurisdiction:</h3>
            <p>These Terms are governed by the laws of India. Any dispute arising in connection with these Terms or the Website shall be subject to the exclusive jurisdiction of the courts at Mumbai, Maharashtra.</p>
            
            <h3>13. Contact us</h3>
            <p>For any questions about these Terms:</p>
            <p>
              The Copper Studio<br/>
              Email: support@thecopperstudio.com / contact@thecopperstudio.com<br/>
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
