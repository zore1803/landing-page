import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <button className="faq-question-btn" onClick={onClick}>
        <span className="faq-question">{question}</span>
        <span className="faq-toggle-icon">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" fill="#070815"/>
            <path d="M9 14H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
            <path d="M14 9V19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" className="plus-vertical-line"/>
          </svg>
        </span>
      </button>
      <div className="faq-answer-wrapper">
        <p className="faq-answer">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What service does Copper Studio offer?",
      answer: "We offer end-to-end branding, identity design and web development. This includes everything from logo systems and typography guidelines to custom merchandise, packaging design adn high-performance web development (built with modern frameworks fro top-tier speed)."
    },
    {
      question: "How long does a typical project take?",
      answer: "Timelines vary by scope. A branding-only package typically takes 2-3 weeks, while a full visual identity and web development package takes around 6-8 weeks from onboarding to final launch."
    },
    {
      question: "Do we get the source files for our designs?",
      answer: "Yes, absolutely. Upon final payment and project handover, you will receive all high-resolution source files. This includes vector files (.AI, .SVG, .EPS), print-ready PDFs, and shared Figma workspace links."
    },
    {
      question: "Do you provide web hosting and maintenance?",
      answer: "We build websites using highly optimized technology stacks and assist you in deploying to reliable global hosting platforms. We also offer custom monthly maintenance and support packages to keep your website secure, updated, and fast."
    },
    {
      question: "How does the design process work",
      answer: "We follow a highly transparent roadmap: Client Onboarding, Visual Identity Toolkit, Brand Core Design Assets, Print Collateral Design, Brand Collateral, and finally, Brand Guidelines. We gather feedback at every stage to ensure the end product is perfect."
    }
  ];

  return (
    <section className="faq-section global-section" id="faq">
      <div className="faq-container global-container">
        <div className="faq-sidebar reveal-up">
          <div className="faq-tag">HAVE SOME DOUBTS?</div>
          <h2 className="faq-title">Frequently Asked<br/>Questions</h2>
          <p className="faq-description">
            Everything you need to know about our design, branding and web development processes. Can't find the answer you're looking for? Reach out to our team directly.
          </p>
          <a href="#contact" className="faq-contact-link">
            <span>Get in Touch</span>
            <span className="faq-contact-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="#EE7A1D"/>
                <path d="M12 10L16 14L12 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="reveal-up" style={{ transitionDelay: `${index * 100}ms` }}>
              <FAQItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
