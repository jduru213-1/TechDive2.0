"use client";  // This line should be at the very top

import { AiFillLinkedin, AiFillMail, AiFillFileText, AiFillMediumSquare } from 'react-icons/ai';
import Link from 'next/link';
import { FaSchool, FaSuitcase, FaLaptop, FaChalkboardTeacher, FaConfluence, FaWindows, FaPen } from "react-icons/fa";
import { SiJira, SiSplunk, SiAwssecretsmanager } from "react-icons/si";
import { TbSettingsAutomation } from "react-icons/tb";
import React, { useEffect, useState } from 'react';
import Loading from '../components/loading';


const Justin = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    // Simulate loading delay (e.g., 2 seconds)
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);  // Stop loading after 2 seconds
      }, 2000);
  
      // Cleanup timer
      return () => clearTimeout(timer);
    }, []);
  
    // Scroll to the top when loading is complete
    useEffect(() => {
      if (!isLoading) {
        window.scrollTo(0, 0);  // Scroll to the top of the page
      }
    }, [isLoading]); // Run this effect when isLoading changes
  
    // Render the loading component if still loading
    if (isLoading) {
      return <Loading />;
    }
 
  return (
    <div>

      {/* Profile Section */}
      <div className="flex flex-col justify-center items-center h-screen -mt-4">
        <div className="mt-16 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-all duration-500 ease-in-out animate-fadeAndZoom">
          <img src="/images/justin.jpg" alt="Justin" className="w-full h-full" />
        </div>
        <h1 className="mt-1 text-6xl font-bold text-gray-100 animate-fadeAndZoom">Justin Duru</h1>
        <h3 className="mt-2 text-xl font-bold text-gray-100 transform scale-95 duration-700 ease-in-out animate-fadeAndZoom">
          SIEM Apprentice Instructor | Security Program Manager
        </h3>
        <p className="mt-0 text-xl font-bold text-gray-100 animate-fadeAndZoom">
          "Every disappointment is a blessing in disguise"
        </p>

    {/* Social Links */}
    <div className="flex space-x-4 mt-4">
      <a href="https://www.linkedin.com/in/justin-duru-97159a250/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size={30} className="text-blue-100 hover:text-blue-800 transition-colors duration-300" />
      </a>
      <a href="mailto:jduru213@gmail.com" target="_blank" rel="noopener noreferrer">
        <AiFillMail size={30} className="text-blue-100 hover:text-blue-800 transition-colors duration-300" />
      </a>
      <a href="https://docs.google.com/document/d/1iUwZ2TQr1kTolBI_w0LW6pcB979RCPIdV0oST8uvP_Y/edit" target="_blank" rel="noopener noreferrer">
        <AiFillFileText size={30} className="text-blue-100 hover:text-blue-800 transition-colors duration-300" />
      </a>
      <a href="https://medium.com/@jduru213" target="Medium Blog Site" rel="noopener noreferrer">
        <AiFillMediumSquare size={30} className="text-blue-100 hover:text-blue-800 transition-colors duration-300" />
      </a>
    </div>

    {/* Profile Description */}
    <p className="flex mt-20 text-xl font-medium text-gray-100 text-center">
  Dedicated cybersecurity student at Frostburg State University, I am deeply passionate about the ever-changing field of technology and security.
  <br />
  My enthusiasm drives me to seek out new learning opportunities and keep up with the latest industry advancements.
</p>

  </div>

  {/* Projects Section */}
<h1 className="mt-20 text-6xl font-extrabold text-gray-100 animate-fadeAndZoom text-center">Projects</h1>
<p className="mt-2 text-gray-100 animate-fadeAndZoom text-center">
  A display of my most recent works, projects, and developments.
</p>

<div className="flex flex-wrap justify-center items-center mt-6">
  {/* Project 1 */}
  <div className="m-4 max-w-xs">
    <div className="card bg-black h-[400px] shadow-xl border-2 border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
      <div className="card-body flex flex-col items-center justify-center text-center h-full">
        <FaWindows size={60} className="text-blue-100" />
        <h1 className="card-title text-white">Active Directory Detection & Monitoring</h1>
        <p className="mt-2 text-gray-100">
          Learn how Active Directory (AD) manages user accounts and policies, and how detection monitoring enhances security by tracking suspicious activities.
        </p>
        <div className="card-actions animate-fadeIn mt-4">
          <Link href="https://medium.com/@jduru213/cybersecurity-homelab-building-an-on-premise-domain-environment-with-splunk-windows-and-active-840ba325f3ee">
            <button className="btn bg-white text-black hover:bg-black hover:text-white hover:scale-105 transform transition-transform duration-300">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* Project 2 */}
  <div className="m-4 max-w-xs">
    <div className="card bg-black h-[400px] shadow-xl border-2 border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
      <div className="card-body flex flex-col items-center justify-center text-center h-full">
        <SiAwssecretsmanager size={70} className="text-blue-100" />
        <h1 className="card-title text-white">Vulnerability Management</h1>
        <p className="mt-2 text-gray-100 animate-fadeAndZoom">
          Learn how vulnerability management identifies security weaknesses and how the NIST framework guides effective practices to enhance your cybersecurity.
        </p>
        <div className="card-actions mt-4">
          <Link href="https://medium.com/@jduru213/vulnerability-management-lab-using-nessus-nist-framework-012bda6dbfd3">
            <button className="btn bg-white text-black hover:bg-black hover:text-white hover:scale-105 transform transition-transform duration-300">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* Project 3 */}
  <div className="m-4 max-w-xs">
    <div className="card bg-black h-[400px] shadow-xl border-2 border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
      <div className="card-body flex flex-col items-center justify-center text-center h-full">
        <TbSettingsAutomation size={70} className="text-blue-100" />
        <h3 className="card-title text-white">Automated Threat Detection and Incident Response</h3>
        <p className="mt-2 text-gray-100 animate-fadeAndZoom">
          Discover how automated threat detection identifies security risks in real-time, while incident response quickly addresses and mitigates threats.
        </p>
        <div className="card-actions mt-4">
          <Link href="https://your-link-here">
            <button className="btn bg-white text-black hover:bg-black hover:text-white hover:scale-105 transform transition-transform duration-300">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

  <h1 className="mt-40 mb-2 text-6xl font-extrabold text-gray-100 text-center">Education & Experience</h1>
<p className="text-gray-100 text-center">A display of my most recent works, projects, and developments.</p>

<ul className="mt-16 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical flex-auto">
  <li className="transition-transform duration-500">
    <div className="timeline-middle">
    <div className="p-4 rounded-full bg-black transition duration-300 hover:bg-white shadow-lg">
    <FaSchool
      size={110} 
      className="text-white transition-colors duration-300 hover:text-black" 
    />
  </div>
</div>    
    <div className="mt-16 timeline-start ml-20 mb-10 md:text-end border-white p-4 transition-opacity duration-500 hover:opacity-80">
      <img src="/images/fsu.jpg" alt="Frostburg State University" className="w-20 h-20 rounded-full" />
      <p className="font-mono italic text-gray-100 font-bold text-left">August 2023 - Current</p>
      <div className="text-lg font-black text-gray-100 text-left">Frostburg State University</div>
      <p className="text-base text-gray-100 text-left">
        Enrolled at Frostburg State University, pursuing a Bachelors of Science in Cybersecurity and Information Assurance.
      </p>
    </div>
    <hr />
  </li>

  <li className="transition-transform duration-500">
    <hr />
    <div className="timeline-middle">
    <div className="p-4 rounded-full bg-black transition duration-300 hover:bg-white shadow-lg">
    <FaSuitcase
      size={110} 
      className="text-white transition-colors duration-300 hover:text-black" 
    />
  </div>
</div>    
    <div className="timeline-end mb-10 border-white p-4 transition-opacity duration-500">
      <img src="/images/twc.jpeg" alt="TWC Internship" className="w-20 h-20 rounded-full" />
      <time className="font-mono italic text-gray-100 font-bold">June - August 2024</time>
      <div className="text-lg font-black text-gray-100">Student Intern - The Washington Center</div>
      <p className="text-base text-gray-100">Researched the cybersecurity field and explored various career paths by reaching out to industry professionals and conducting informational interviews throughout my time in Washington, D.C. Developed skills in effective communication, networking, and teamwork through hands-on experience in a dynamic environment.</p>
      <div className="flex justify-center mt-3">
       <FaPen size={30} className="text-blue-100" />
      </div>
    </div>
    <hr />
  </li>

  <li className="transition-transform duration-500 ">
    <hr />
    <div className="timeline-middle">
    <div className="flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105">
  <div className="p-4 rounded-full bg-black transition duration-300 hover:bg-white shadow-lg">
    <FaLaptop 
      size={110} 
      className="text-white transition-colors duration-300 hover:text-black" 
    />
  </div>
</div>
    </div>
    <div className="timeline-start ml-20 mb-10 border-white p-4 transition-opacity duration-500 hover:opacity-80">
      <img src="/images/eca.png" alt="Ellington Cyber Academy" className="w-20 h-20 rounded-full" />
      <time className="font-mono italic text-gray-100 font-bold">June - August 2024</time>
      <div className="text-lg font-black text-gray-100">Security Program Manager Intern - Ellington Cyber Academy</div>
      <p className="text-base text-gray-100">Led the migration and management of cybersecurity projects using Jira and Confluence. Optimized workflows and enhanced project efficiency with these tools to streamline collaboration and drive innovative security solutions.</p>
      <div className="flex justify-center mt-2 space-x-4">
       <SiJira size={30} className="text-blue-100" />
       <FaConfluence size={30} className="text-blue-100" />
      </div>
    </div>
    <hr />
  </li>

  <li className="transition-transform duration-500">
    <hr />
    <div className="timeline-middle">
    <div className="p-4 rounded-full bg-black transition duration-300 hover:bg-white shadow-lg">
    <FaChalkboardTeacher
      size={110} 
      className="text-white transition-colors duration-300 hover:text-black" 
    />
  </div>
</div>   
    <div className="timeline-end mb-10 md:text-end border-white p-4 transition-opacity duration-500 hover:opacity-80">
      <img src="/images/eca.png" alt="Ellington Cyber Academy" className="w-20 h-20 rounded-full" />
      <p className="font-mono italic text-gray-100 font-bold text-left">Current - 2024</p>
      <div className="text-lg font-black text-gray-100 text-left">SIEM Instructor - Ellington Cyber Academy</div>
      <p className="text-base text-gray-100 text-left">Delivered hands-on training in Security Information and Event Management (SIEM) systems with a focus on Splunk. Provided in-depth instruction on threat detection, incident response, and real-world applications using Splunk Enterprise, enhancing technical proficiency and practical skills.</p>
      <div className="flex justify-center mt-2">
        <SiSplunk size={70} className="text-blue-100" />
      </div>
    </div>
  </li>
</ul>

<div className="flex items-center justify-center space-x-4 mt-6 mb-8">
  <p className="text-gray-100">&copy; 2024 Justin Duru</p>
  <a href="https://www.linkedin.com/in/justin-duru-97159a250/" target="_blank" rel="noopener noreferrer" className="group">
    <AiFillLinkedin size={40} className="text-blue-100 group-hover:bg-blue-800 group-hover:text-white p-2 rounded-lg transition-colors duration-300" />
  </a>
  <a href="mailto:jduru213@gmail.com" target="_blank" rel="noopener noreferrer" className="group">
    <AiFillMail size={40} className="text-blue-100 group-hover:bg-blue-800 group-hover:text-white p-2 rounded-lg transition-colors duration-300" />
  </a>
  <a href="https://docs.google.com/document/d/1iUwZ2TQr1kTolBI_w0LW6pcB979RCPIdV0oST8uvP_Y/edit" target="_blank" rel="noopener noreferrer" className="group">
    <AiFillFileText size={40} className="text-blue-100 group-hover:bg-blue-800 group-hover:text-white p-2 rounded-lg transition-colors duration-300" />
  </a>
  <a href="https://medium.com/@jduru213" target="_blank" rel="noopener noreferrer" className="group">
    <AiFillMediumSquare size={40} className="text-blue-100 group-hover:bg-blue-800 group-hover:text-white p-2 rounded-lg transition-colors duration-300" />
  </a>
</div>
<p className='mt-10 mb-10 font-bold text-center text-white'>TrekInTech @ LLC</p>
</div>
  
  );
};

export default Justin;
