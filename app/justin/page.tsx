import React from 'react';
import { AiFillLinkedin, AiFillMail, AiFillFileText, AiFillMediumSquare } from 'react-icons/ai';
import Link from 'next/link';

const Justin = () => {
  return (
    <div>
      {/* Profile Section */}
      <div className="flex flex-col justify-center items-center h-screen -mt-40">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-all duration-500 ease-in-out animate-fadeAndZoom">
          <img 
            src="/images/justin.jpg" 
            alt="justin" 
            className="w-full h-full"
          />
        </div>
        <h1 className="mt-2 text-6xl font-bold text-gray-100 animate-fadeAndZoom">Justin Duru</h1>
        <h3 className="flex mt-2 text-xl font-bold text-gray-100 animate-fadeAndZoom">SIEM Instructor | Cybersecurity | Security Program Manager</h3>
        
        <div className="flex space-x-4 mt-4">
          <a 
            href="https://www.linkedin.com/in/justin-duru-97159a250/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={45} className="text-blue-100 hover:text-blue-800 transition-colors duration-300" />
          </a>

          <a 
            href="mailto:example@example.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <AiFillMail size={45} className="text-blue-100 hover:text-blue-800 transition-colors duration-300" />
          </a>

          <a 
            href="https://docs.google.com/document/d/1iUwZ2TQr1kTolBI_w0LW6pcB979RCPIdV0oST8uvP_Y/edit" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <AiFillFileText size={45} className="text-blue-100 hover:text-blue-800 transition-colors duration-300" />
          </a>

          <a 
            href="https://medium.com/@jduru213"
            target="Medium Blog Site" 
            rel="noopener noreferrer"
          >
            <AiFillMediumSquare size={45} className="text-blue-100 hover:text-blue-800 transition-colors duration-300" />
          </a>
        </div>
        <p className="flex mt-2 text-xl font-bold text-gray-100 animate-fadeAndZoom">  </p>
      </div>
      <div className="carousel w-full border-4 border-gray-300 rounded-lg">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
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
              <time className="font-mono italic">1984</time>
              <div className="text-lg font-black">First Macintosh computer</div>
              The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
              personal computer. It played a pivotal role in establishing desktop publishing as a general
              office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
              in a beige case with integrated carrying handle; it came with a keyboard and single-button
              mouse.
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
              <time className="font-mono italic">1998</time>
              <div className="text-lg font-black">iMac</div>
              iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
              been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
              and has evolved through seven distinct forms.
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
              <time className="font-mono italic">2001</time>
              <div className="text-lg font-black">iPod</div>
              The iPod is a discontinued series of portable media players and multi-purpose mobile devices
              designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
              8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
              million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
              over 20 years, the iPod brand is the oldest to be discontinued by Apple.
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
              <time className="font-mono italic">2007</time>
              <div className="text-lg font-black">iPhone</div>
              iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
              operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
              January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
              of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
              accounts for 15.6% of global smartphone market share.
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
              <time className="font-mono italic">2015</time>
              <div className="text-lg font-black">Apple Watch</div>
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

export default Justin;
