"use client"; // Mark this as a Client Component

import React, { useEffect, useState } from "react";
import Loading from "../components/loading";

const FAQs = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay (e.g., 2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
    }, 2000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  // Scroll to the top when loading is complete
  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  }, [isLoading]);

  // Render the loading component if still loading
  if (isLoading) {
    return <Loading />;
  }

  // Function to toggle dropdown visibility
  const toggleDropdown = (index) => {
    const dropdown = document.getElementById(`dropdown-${index}`);
    dropdown.classList.toggle("hidden");
  };

  // Dropdown Content
  const faqs = [
    {
      title: "1. What hands-on certifications can help me break into cybersecurity?",
      answers: [
        "In the world of cybersecurity, knowing the theory is just the start. While it's important to understand the basics, it’s what you can actually do with that knowledge that really matters. Eventually, you’ll need to show that you can take what you’ve learned and apply it in real-world situations. The hands-on experience is where the magic happens. If you're on the Blue Team and focused on the defensive side, there are some great certifications that help you put theory into practice:",
        <>
          - TCM PSAA:{" "}
          <a
            href="https://certifications.tcm-sec.com/psaa/"
            target="_blank"
            className="text-blue-500 underline"
          >
            https://certifications.tcm-sec.com/psaa/
          </a>
        </>,
        <>
          - Hack The Box CDSA:{" "}
          <a
            href="https://academy.hackthebox.com/preview/certifications/htb-certified-defensive-security-analyst"
            target="_blank"
            className="text-blue-500 underline"
          >
            https://academy.hackthebox.com/preview/certifications/htb-certified-defensive-security-analyst
          </a>
        </>,
        <>
          - CCD:{" "}
          <a
            href="https://cyberdefenders.org/blue-team-training/courses/certified-cyberdefender-certification/"
            target="_blank"
            className="text-blue-500 underline"
          >
            https://cyberdefenders.org/blue-team-training/courses/certified-cyberdefender-certification/
          </a>
        </>,
        <>
          - Blue Team Level 1 (BTL1):{" "}
          <a
            href="https://www.securityblue.team/certifications/blue-team-level-1"
            target="_blank"
            className="text-blue-500 underline"
          >
            https://www.securityblue.team/certifications/blue-team-level-1
          </a>
        </>,
        "These certifications are not just for your resume, they’re built to help you solve real cybersecurity problems and get your hands dirty in real-world scenarios. For those interested in the Red Team or offensive security, certifications like these are your best bet:",
        <>
          - TCM PNPT:{" "}
          <a
            href="https://certifications.tcm-sec.com/pnpt/"
            target="_blank"
            className="text-blue-500 underline"
          >
            https://certifications.tcm-sec.com/pnpt/
          </a>
        </>,
        <>
          - OSCP:{" "}
          <a
            href="https://www.offsec.com/courses/pen-200/"
            target="_blank"
            className="text-blue-500 underline"
          >
            https://www.offsec.com/courses/pen-200/
          </a>
        </>,
        <>
          - eJPT:{" "}
          <a
            href="https://security.ine.com/certifications/ejpt-certification/"
            target="_blank"
            className="text-blue-500 underline"
          >
            https://security.ine.com/certifications/ejpt-certification/
          </a>
        </>,
        "Bottom line is In cybersecurity, it's not just about what you know, but how you can use what you know to tackle the challenges we face every day.",
      ],
    },

    {
      title: "2. How can I land an internship in the tech industry?",
      answers: [
        "Networking, leveraging LinkedIn, attending job fairs, and applying directly to companies' internship programs are good strategies.",
      ],
    },
    // More FAQ items...
  ];

  return (
    <div className="container mx-auto py-40 px-4 sm:px-6 md:px-8 animate-fade-in">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Frequently Asked Questions (FAQs)</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-6">
          {/* Dropdown button */}
          <button
            type="button"
            onClick={() => toggleDropdown(index)} // Toggle dropdown visibility
            className="w-full text-white bg-gradient-to-r from-black to-black hover:bg-gradient-to-l focus:ring-4 focus:outline-none font-medium rounded-lg text-xl px-8 py-6 text-left inline-flex justify-between items-center transition-transform transform hover:scale-105 ease-in-out"
          >
            {faq.title}
            <svg
              className="w-6 h-6 transform transition-transform group-hover:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </button>

          {/* Dropdown content */}
          <div
            id={`dropdown-${index}`}
            className="mt-4 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-full dark:bg-gray-700 transition-all duration-300 ease-in-out"
          >
            <ul className="py-4 text-sm text-gray-700 dark:text-gray-200">
              {faq.answers.map((answer, idx) => (
                <li key={idx} className="px-6 py-4">{answer}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
