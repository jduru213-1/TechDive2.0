import React from 'react';
import { AiFillLinkedin, AiFillMail, AiFillFileText, AiFillMediumSquare, } from 'react-icons/ai';
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
<h3 className="flex mt-2 text-xl font-bold text-gray-100 transition-transform transform scale-95 duration-700 ease-in-out animate-fadeAndZoom">SIEM Apprentice Instructor | Security Program Manager</h3>
<p className="flex mt-2 text-xl font-bold text-gray-100 animate-fadeAndZoom">"Every disappointment is a blessing in disguise"</p>

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
        <p className="flex mt-20 text-xl text-gray-300 text-center">
  Dedicated cybersecurity student at Frostburg State University, I am deeply passionate about the ever-changing field of technology and security. My enthusiasm drives me to seek out new learning opportunities and keep up with the latest industry advancements. I am committed to using my knowledge to solve real-world problems and actively seeking opportunities for academic and professional development. Furthermore, as president of the African Student Association, I use my position to foster a diverse and inclusive community on campus.
</p>
      </div>

<h1 className="mt-20 text-6xl font-extrabold text-gray-100 animate-fadeAndZoom text-center">Projects</h1>
<p className="mt-2 text-gray-100 animate-fadeAndZoom text-center">A display of my most recent works, projects, and developments.</p>

<div className="flex justify-around items-center mt-6">
  <div className="mx-4">
    <div className="card bg-black w-80 h-[400px] shadow-xl border border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
      <div className="card-body flex flex-col items-center justify-center text-center h-full">
        <h1 className="card-title text-white">Active Directory Detection & Monitoring</h1>
        <p className="mt-2 text-gray-100">Learn how Active Directory (AD) manages user accounts and policies, and how detection monitoring enhances security by tracking suspicious activities. Explore how these tools protect your network</p>
        <div className="card-actions animate-fadeIn mt-4">
          
          <Link href= "https://medium.com/@jduru213/cybersecurity-homelab-building-an-on-premise-domain-environment-with-splunk-windows-and-active-840ba325f3ee">
          <button className="btn bg-white text-black hover:bg-black hover:text-white hover:scale-105 transform transition-transform duration-300">
            Explore
          </button>
          </Link>

        </div>
      </div>
    </div>
  </div>

 
  <div className="mx-4">
    <div className="card bg-black w-80 h-[400px] shadow-xl border border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
      <div className="card-body flex flex-col items-center justify-center text-center h-full">
        <h1 className="card-title text-white">Vulnerability Management</h1>
        <p className="mt-2 text-gray-100 animate-fadeAndZoom">Learn how vulnerability management identifies security weaknesses and how the NIST framework guides effective practices to enhance your cybersecurity.</p>

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

  {/* News Outlets Card */}
  <div className="mx-4">
    <div className="card bg-black w-80 h-[400px] shadow-xl border border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
      <div className="card-body flex flex-col items-center justify-center text-center h-full">
        <h3 className="card-title text-white"> Automated Threat Detection and Incident Response </h3>
        <p className="mt-2 text-gray-100 animate-fadeAndZoom">Discover how automated threat detection identifies security risks in real-time, while incident response quickly addresses and mitigates threats, ensuring your network stays protected</p>
        <div className="card-actions mt-4">
          

          <button className="btn bg-white text-black hover:bg-black hover:text-white hover:scale-105 transform transition-transform duration-300">
            Explore
          </button>

        </div>
      </div>
    </div>
  </div>
</div>

<h1 className="mt-40 mb-2 text-6xl font-extrabold text-gray-100 text-center">Education & Experience</h1>
<p className="text-gray-100 text-center">A display of my most recent works, projects, and developments.</p>

<ul className="mt-16 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical relative">
  <li className="transition-transform duration-500 hover:scale-105">
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
    <div className="timeline-start mb-10 md:text-end  border-white p-4 transition-opacity duration-500 hover:opacity-80">
      <img src="/images/fsu.jpg" alt="Frostburg State University" className="w-20 h-20 rounded-full relative" />
      <p className="font-mono italic text-gray-100 font-bold text-left">August 2023</p>
      <div className="text-lg font-black text-gray-100 text-left">Frostburg State University</div>
      <p className="text-base text-gray-100 text-left">
        Enrolled at Frostburg State University, pursuing a Bachelor of Science in Cybersecurity and Information Assurance degree.
      </p>
    </div>
    <hr />
  </li>

  <li className="transition-transform duration-500 hover:scale-105">
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
    <div className="timeline-end mb-10 border-white p-4 transition-opacity duration-500 hover:opacity-80">
      <img src="/images/twc.jpeg" alt="TWC Internship" className="w-20 h-20 rounded-full" />
      <time className="font-mono italic text-gray-100 font-bold">June - August 2024</time>
      <div className="text-lg font-black text-gray-100">Student Intern - TWC</div>
      <p className="text-base text-gray-100">
        The iMac is Apple's all-in-one desktop that revolutionized personal computing when it launched in 1998. Its
        sleek design and user-friendly features have shaped Apple's desktop line for over two decades.
      </p>
    </div>
    <hr />
  </li>

  <li className="transition-transform duration-500 hover:scale-105">
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
    <div className="timeline-end mb-10 border-white p-4 transition-opacity duration-500 hover:opacity-80">
      <img src="/images/eca.png" alt="Ellington Cyber Academy" className="w-20 h-20 rounded-full" />
      <time className="font-mono italic text-gray-100 font-bold">June - August 2024</time>
      <div className="text-lg font-black text-gray-100">Security Program Manager Intern - Ellington Cyber Academy</div>
      <p className="text-base text-gray-100">
        The iPhone, introduced in 2007, revolutionized the smartphone industry. With over 2.2 billion units sold, it
        remains a major player, accounting for over 15% of the global smartphone market.
      </p>
    </div>
    <hr />
  </li>

  <li className="transition-transform duration-500 hover:scale-105">
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
    <div className="timeline-start mb-10 md:text-end border-white p-4 transition-opacity duration-500 hover:opacity-80">
      <img src="/images/eca.png" alt="Ellington Cyber Academy" className="w-20 h-20 rounded-full relative" />
      <p className="font-mono italic text-gray-100 font-bold text-left">Current - 2024</p>
      <div className="text-lg font-black text-gray-100 text-left">SIEM Instructor - Ellington Cyber Academy</div>
      <p className="text-base text-gray-100 text-left">
        The Apple Watch, launched in 2015, brought fitness tracking and smart technology to the wrist. Seamlessly
        integrating with the Apple ecosystem, it remains a popular choice for health and connectivity.
      </p>
    </div>
  </li>
</ul>


<div className="flex items-center justify-center space-x-4 mt-6 mb-8">
    <p className="text-gray-100 ">
      &copy; 2024 Justin Duru
    </p>
  
  <a 
    href="https://www.linkedin.com/in/justin-duru-97159a250/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group"
  >
    <AiFillLinkedin size={40} className="text-blue-100 group-hover:bg-blue-800 group-hover:text-white p-2 rounded-lg transition-colors duration-300" />
  </a>

  <a 
    href="mailto:jduru213@gmail.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group"
  >
    <AiFillMail size={40} className="text-blue-100 group-hover:bg-blue-800 group-hover:text-white p-2 rounded-lg transition-colors duration-300" />
  </a>

  <a 
    href="https://docs.google.com/document/d/1iUwZ2TQr1kTolBI_w0LW6pcB979RCPIdV0oST8uvP_Y/edit" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group"
  >
    <AiFillFileText size={40} className="text-blue-100 group-hover:bg-blue-800 group-hover:text-white p-2 rounded-lg transition-colors duration-300" />
  </a>

  <a 
    href="https://medium.com/@jduru213" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group"
  >
    <AiFillMediumSquare size={40} className="text-blue-100 group-hover:bg-blue-800 group-hover:text-white p-2 rounded-lg transition-colors duration-300" />
  </a>
</div>
</div>
  
  );
};

export default Justin;
