'use client'
import { useState } from 'react';

const FooterFaqAcordions = () => {
  // State to manage which accordion is open (null if all are closed)
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data
  const faqs = [
    {
      question: 'What is CloudPeak?',
      answer: 'CloudPeak is a cloud-based platform that offers a suite of software as a service (SaaS) solutions designed to streamline the business operations, enhance collaboration, and drive productivity.',
    },
    {
      question: 'What services does CloudPeak offer?',
      answer: 'CloudPeak offers a range of services including cloud storage, collaboration tools, productivity apps, and business automation solutions tailored to various industries.',
    },
    {
      question: 'What are the core features of CloudPeak?',
      answer: 'The core features of CloudPeak include secure cloud storage, real-time collaboration, workflow automation, and seamless integration with third-party apps.',
    },
    {
      question: 'What is CloudPeak?',
      answer: 'CloudPeak is a cloud-based platform that offers a suite of software as a service (SaaS) solutions designed to streamline the business operations, enhance collaboration, and drive productivity.',
    },
    {
      question: 'What services does CloudPeak offer?',
      answer: 'CloudPeak offers a range of services including cloud storage, collaboration tools, productivity apps, and business automation solutions tailored to various industries.',
    },

  ];

  // Toggle function for accordion
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className=" cursor-pointer ">
          {/* Accordion Button */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center text-xl py-5 text-white max-lg:text-base"
          >
            <span className='text-start'>{faq.question}</span>
            <span className="text-white transition-transform duration-300">
              {openIndex === index ? (
                // Minus SVG (when accordion is open)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                </svg>
              ) : (
                // Plus SVG (when accordion is closed)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                </svg>
              )}
            </span>
          </button>

          {/* Accordion Content */}
          <div
            className={`overflow-hidden bg-[#0A0E28]  rounded-2xl transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-40 p-3 px-4' : 'max-h-0'
            }`}
          >
            <div className=" text-sm text-gray-400">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterFaqAcordions;