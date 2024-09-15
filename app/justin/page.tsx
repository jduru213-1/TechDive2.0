import React from 'react';
import { AiFillLinkedin, AiFillMail, AiFillFileText, AiFillMediumSquare } from 'react-icons/ai';
import Link from 'next/link';


const Justin = () => {
  return (
    <div>
      {/* Profile Section */}
      <div className="flex flex-col justify-center items-center h-screen -mt-4">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-all duration-500 ease-in-out animate-fadeAndZoom">
          <img 
            src="/images/justin.jpg" 
            alt="justin" 
            className="w-full h-full"
          />
        </div>
        <h1 className="mt-2 text-6xl font-bold text-gray-100 animate-fadeAndZoom">Justin Duru</h1>
        <h3 className="flex mt-2 text-xl font-bold text-gray-100 animate-fadeAndZoom">SIEM Apprentice Instructor | Security Program Manager</h3>
        
        <div className="flex space-x-4 mt-4">
          <a 
            href="https://www.linkedin.com/in/justin-duru-97159a250/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={45} className="text-blue-100 hover:text-blue-800 transition-colors duration-300" />
          </a>

          <a 
            href="mailto:jduru213@gmail.com" 
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
        <p className="flex mt-10 text-xl text-gray-300 animate-fadeAndZoom"> As a dedicated cybersecurity student at Frostburg State University, I am deeply passionate about the ever-changing field of technology and security. My enthusiasm drives me to seek out new learning opportunities and keep up with the latest industry advancements. I am committed to using my knowledge to solve real-world problems and actively seeking opportunities for academic and professional development. Furthermore, as president of the African Student Association, I use my position to foster a diverse and inclusive community on campus. </p>
      </div>


      <h1 className="mt-10 text-6xl font-bold text-gray-100 animate-fadeAndZoom text-center">Projects</h1>
      <div className="flex justify-around items-center">
            {/* Programming Card */}
            <div className="mx-4">
              <div className="card bg-black w-80 h-[400px] shadow-xl border border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
                <figure className="px-10 pt-10 h-[250px]">
                  <img
                    src="images/programming.jpg"
                    alt="Programming"
                    className="rounded-xl object-cover w-full h-full"
                  />
                </figure>
                <Link href='/programming'>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-white">Programming</h2>
                    <div className="card-actions animate-fadeIn">
                      <button className="btn bg-white text-black hover:bg-black hover:text-white hover:scale-105 transform transition-transform duration-300">
                        Explore
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Cybersecurity Card */}
            <div className="mx-4">
              <div className="card bg-black w-80 h-[400px] shadow-xl border border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
                <figure className="px-10 pt-10 h-[250px]">
                  <img
                    src="images/cyber.jpg"
                    alt="Cybersecurity"
                    className="rounded-xl object-cover w-full h-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-white">Cybersecurity</h2>
                  <div className="card-actions">
                    <button className="btn bg-white text-black hover:bg-black hover:text-white hover:scale-105 transform transition-transform duration-300">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* News Outlets Card */}
            <div className="mx-4">
              <div className="card bg-black w-80 h-[400px] shadow-xl border border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
                <figure className="px-10 pt-10 h-[250px]">
                  <img
                    src="images/tines.jpeg"
                    alt="News Outlets"
                    className="rounded-xl object-cover w-full h-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-white">News Outlets</h2>
                  <div className="card-actions">
                    <button className="btn bg-white text-black hover:bg-black hover:text-white hover:scale-105 transform transition-transform duration-300">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>




<h1 className="mt-40 mb-8 text-6xl font-bold text-gray-100 animate-fadeAndZoom text-center">Education & Expereicne </h1>      
      {/* Timeline Section */}
      <div className="flex justify-center mt-25">
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
