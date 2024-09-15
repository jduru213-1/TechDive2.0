import React from 'react';
import { AiFillLinkedin, AiFillMail, AiFillFileText } from 'react-icons/ai';

const Couragepage = () => {
  return (
    <div>
      {/* Profile Section */}
      <div className="flex flex-col justify-center items-center h-screen -mt-40">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-all duration-500 ease-in-out animate-fadeAndZoom">
          <img 
            src="/images/Courage2.jpg" 
            alt="courage" 
            className="w-full h-full"
          />
        </div>
        <h1 className="mt-2 text-6xl font-bold text-gray-100 animate-fadeAndZoom">Courage Tikum</h1>
        <p className="mt-2 text-xl font-bold text-gray-100 animate-fadeAndZoom">Programmer</p>
        
        <div className="flex space-x-4 mt-4">
          <a 
            href="https://www.linkedin.com/in/couragetikumfsu/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <AiFillLinkedin size={45} className="text-blue-100 hover:text-blue-800 transition-colors duration-300" />
          </a>

          <a 
            href="mailto:mctikum0@frostburg.edu?cc=couragetikum@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <AiFillMail size={45} className="text-blue-100 hover:text-blue-800 transition-colors duration-300" />
          </a>

          <a 
            href="https://docs.google.com/document/d/1wSgEtoFXH6y1dLjL7pKwdqwOJ9X1JoZT7ysAdPUO8bo/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <AiFillFileText size={45} className="text-blue-100 hover:text-blue-800 transition-colors duration-300" />
          </a>

          <a 
            href="https://medium.com/@jduru213"
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            {/* Add the correct icon for Medium or remove if not needed */}
          </a>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="flex justify-center mt-20">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
            <img src="/images/fsu.jpg" alt="Frostburg State University" className="w- h-20 rounded-full relative" />
              <time className="font-mono italic text-base text-gray-100 text-left">August 2020</time>
              <div className="text-lg font-black text-base text-gray-100 text-left">Frostburg State University</div>
              <p className='text-base text-gray-100 text-left'>
              Officially enrolled at Frostburg State Univesity with a major in Computer Science and Minor in Mathemathics 
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-end mb-10">
            <img src="/images/SPARKLabs.jpg" alt="Frostburg State University" className="w- h-20 rounded-full relative" />
              <time className="font-mono italic text-base text-gray-100 text-left">January 2023</time>
              <div className="text-lg font-black text-base text-gray-100 text-left">Frostburg State University</div>
              <p className='text-base text-gray-100 text-left'>
              Officially created the Frostburg State University Spark Inovation Lab for innovative students. A work space for students with creative ideas, and 
              practicle projects for any field such as Artificial intelligence, Augmented Reality, App devlopment, Research work, robotics, and much more!
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
            <img src="/images/twc.jpeg" alt="Frostburg State University" className="w- h-20 rounded-full relative" />
              <time className="font-mono italic text-base text-gray-100 text-left">May 2024</time>
              <div className="text-lg font-black text-base text-gray-100 text-left">The Washington Center</div>
              <p className='text-base text-gray-100 text-left'>
              Officially created the Frostburg State University Spark Inovation Lab for innovative students. A work space for students with creative ideas, and 
              practicle projects for any field such as Artificial intelligence, Augmented Reality, App devlopment, Research work, robotics, and much more!
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-end mb-10">
            <img src="/images/twc.jpeg" alt="Frostburg State University" className="w- h-20 rounded-full relative" />
              <time className="font-mono italic text-base text-gray-100 text-left">May 2024</time>
              <div className="text-lg font-black text-base text-gray-100 text-left">Devlopment monitors</div>
              <p className='text-base text-gray-100 text-left'>
              Officially created the Frostburg State University Spark Inovation Lab for innovative students. A work space for students with creative ideas, and 
              practicle projects for any field such as Artificial intelligence, Augmented Reality, App devlopment, Research work, robotics, and much more!
              </p>
  
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">June 10</time>
              <div className="text-lg font-black">Iorn Shapens Iorn</div>
              The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
              tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
              iOS and other Apple products and services.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Couragepage;
