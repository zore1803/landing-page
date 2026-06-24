import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <button className="faq-question-btn" onClick={onClick}>
        <span className="faq-question">{question}</span>
        <span className="faq-toggle-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="plus-vertical-line"/>
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
  const [openIndex, setOpenIndex] = useState(0); // Open the first item by default

  const faqData = [
    {
      question: "What services does Copper Studio offer?",
      answer: "We offer end-to-end branding, identity design, and web development. This includes everything from Logo Systems and Typography Guides, to Custom stationery, Packaging design, and high-performance Web development (built with modern frameworks for top-tier speed)."
    },
    {
      question: "How long does a typical project take?",
      answer: "Timelines vary by scope. A branding-only package (Essential) typically takes 2-3 weeks, while a full visual identity and web development package (Ultimate) takes around 6-8 weeks from onboarding to final launch."
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
      question: "How does the design process work?",
      answer: "We follow a highly transparent 6-step roadmap: Client Onboarding, Visual Identity Toolkit, Brand Core Design Assets, Print Collateral Design, Brand Collateral, and finally, Brand Guidelines. We gather feedback at every stage to ensure the end product is perfect."
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-sidebar">
          <div className="faq-tag">COMMON INQUIRIES</div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-description">
            Everything you need to know about our branding, design, and web development processes. Can't find the answer you're looking for? Reach out to our team directly.
          </p>
          <a href="#contact" className="faq-contact-link">
            <span>Get in touch</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
