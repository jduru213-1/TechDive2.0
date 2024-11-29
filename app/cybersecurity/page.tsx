"use client";

import React, { useEffect, useState } from 'react';
import { GiCyberEye, GiBrain } from 'react-icons/gi';
import { AiFillLinkedin, AiFillMail, AiFillFileText, AiFillMediumSquare, } from 'react-icons/ai';
import Link from 'next/link';
import { FaSchool,FaSuitcase, FaLaptop,FaChalkboardTeacher,FaConfluence, FaWindows, FaPen, FaRoad} from "react-icons/fa";
import { SiJira, SiSplunk, SiAwssecretsmanager,SiNintendogamecube  } from "react-icons/si";
import { TbSettingsAutomation } from "react-icons/tb";
import { GrAid, GrResources } from "react-icons/gr";
import Quiz from '../components/cyberQuiz';
import Loading from '../components/loading';


const Cybersecurity = () => {
  
  const [weeklyTip, setWeeklyTip] = useState('Loading weekly tip...');

  const fetchWeeklyTip = async () => {
    try {
      const response = await fetch('/api/route');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWeeklyTip(data.tip || 'No tip received');
    } catch (error) {
      console.error('Error fetching the weekly tip:', error);
      setWeeklyTip('Failed to load tip.');
    }
  };

  useEffect(() => {
    fetchWeeklyTip();
    const intervalId = setInterval(() => {
      fetchWeeklyTip();
    }, 600000); // Refresh every 10 minutes

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

    const [isLoading, setIsLoading] = useState(true);
  
    // Simulate loading delay (e.g., 2 seconds)
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);  // Stop loading after 2 seconds
      }, 5000);
  
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
    <div className="text-center flex-col">
      <div className="flex flex-col items-center mt-40">
        <GiCyberEye
          size={100}
          className="text-blue-100 mb-4 hover:text-red-600 animate-pulse transition-colors duration-300"
        />
        <h1 className="text-6xl font-bold text-gray-100 animate-fadeAndZoom">
          Cybersecurity
        </h1>
      </div>

    <p className="mt-3 text-gray-100  animate-fadeAndZoom"></p>
      <p className="mt-20 text-gray-300 font-medium text-balance text-xl text-center">
        Welcome to the Cybersecuity Platform! <br/>
         Explore a wealth of resources designed to enhance your cybersecurity knowledge and skills. 
        <br/> From practical tips to engaging quizzes and interactive tools, you'll find everything you need 
      <br/>to stay safe in the digital world. Let’s embark on this journey to strengthen your online 
      Security together!
    </p>


      <div className="flex flex-col items-center mt-40">
        <GiBrain
          size={100}
          className="text-blue-100 mb-4 hover:text-pink-600 transition-colors duration-300"
        />
        <h1 className="text-4xl font-bold text-gray-100 animate-fadeAndZoom">
          DAILY TIP
         </h1>
        <div className="w-95 h-auto bg-gray-100 mt-8 rounded-2lg p-8 animate-bounce  ">
          <p className="text-gray-900">{weeklyTip}</p>
        </div>


  <div className="flex justify-center items-center mt-40 flex-wrap">
   {/* Projects Section */}
<div className="flex flex-col items-center justify-center h-full mt-20">
  {/* Icon */}
  <GrResources size={100} className="text-blue-100 animate-pulse hover:text-yellow-400 transition-colors duration-300" />
  
{/* Heading */}
<h1 className="text-4xl font-extrabold text-gray-100 animate-fadeAndZoom text-center">
  BUILD A LAB ENVIRONMENT
</h1>

{/* Paragraph */}
<p className="flex flex-col mt-2 text-lg text-gray-100 animate-fadeAndZoom text-center">
  Set up a controlled environment to test and experiment with SIEM tools and techniques safely and effectively.
</p>

<div className="flex flex-col justify-center items-center min-h-screen">
  {/* Cards Container */}
  <div className="flex flex-wrap justify-center gap-4 w-full max-w-7xl">
    {/* Project 1 */}
    <div className="m-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl w-full">
      <div className="card bg-black h-full shadow-xl border-2 border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
        <div className="card-body flex flex-col items-center justify-center text-center h-full">
          <FaWindows size={80} className="text-blue-100" />
          <h1 className="card-title text-white text-lg sm:text-xl md:text-2xl">Active Directory Detection & Monitoring</h1>
          <p className="text-gray-100 text-sm sm:text-base md:text-lg">
            Experience a simulated brute force attack on a Windows machine to assess its vulnerability, using Splunk for analysis of failed login attempts and unusual access patterns.
          </p>
          <div className="card-actions mt-4">
            <Link href="https://medium.com/@jduru213/cybersecurity-homelab-building-an-on-premise-domain-environment-with-splunk-windows-and-active-840ba325f3ee">
              <button className="btn bg-white text-black hover:bg-black hover:text-white hover:scale-105 transform transition-transform duration-300" aria-label="Explore Active Directory Detection & Monitoring">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Project 2 */}
    <div className="m-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl w-full">
      <div className="card bg-black h-full shadow-xl border-2 border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
        <div className="card-body flex flex-col items-center justify-center text-center h-full">
          <SiAwssecretsmanager size={80} className="text-blue-100" />
          <h1 className="card-title text-white text-lg sm:text-xl md:text-2xl">Vulnerability Management</h1>
          <p className="text-gray-100 text-sm sm:text-base md:text-lg">
            Engage in a Metasploit vulnerability assessment to pinpoint security weaknesses in systems, following the NIST Cybersecurity Framework for compliance and generating a detailed report on identified vulnerabilities and associated risks.
          </p>
          <div className="card-actions mt-4">
            <Link href="https://medium.com/@jduru213/vulnerability-management-lab-using-nessus-nist-framework-012bda6dbfd3">
              <button className="btn bg-white text-black hover:bg-black hover:text-white hover:scale-105 transform transition-transform duration-300" aria-label="Explore Vulnerability Management">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


{/*
    <div className="flex flex-col justify-center items-center h-screen mt-[-100px] mb-40">
  <SiNintendogamecube
    size={100}
    className="text-blue-100 mb-4 hover:text-red-600 animate-pulse transition-colors duration-300"
  />
  

  <h1 className="text-4xl font-extrabold text-gray-100 animate-fadeAndZoom text-center">
    CYBERSECURITY BEST PRACTICES
  </h1>  

  <p className="text-lg text-gray-100 animate-fadeAndZoom text-center mb-0">
  Dive into engaging challenges that will sharpen your cybersecurity skills and prepare you for real-world situations.
</p>



<a href="https://jduru213-1-cyberquiz-cyber-scenarios-quiz-cvl2.streamlit.app/" className="w-80 h-80"> 
  <div className="card bg-black w-full h-full mt-20 shadow-xl border-4 border-white transition-transform duration-300 hover:scale-105">
    <figure className="w-full h-full">
      <img
        src="/images/cyberGame.jpg"
        className="rounded-xl w-full h-full"
      />
    </figure>
    <div className="card-body items-center text-center">
      <p className='font-extrabold text-white'>Play Now</p>
    </div>
  </div>
</a>
*/}


    <div className="flex flex-col items-center justify-center h-full mt-20">
      {/* Icon */}
        <FaRoad size={100} className="text-blue-100 hover:text-yellow-400 transition-colors duration-30" />
          {/* Heading */} 
          <h1 className=" text-4xl font-extrabold text-gray-100 animate-fadeAndZoom text-center mt-3">
          FIND YOUR CYBERSECURITY CAREER 
          </h1>
          <p className="flex flex-col mt-2 text-lg text-gray-100 animate-fadeAndZoom text-center">
          Take our interactive quiz to explore which cybersecurity career path aligns with your skills and interests</p>
          </div>
          <div className=" w-95 h-auto mt-5 mb-10 p-8">
          <Quiz />
        </div>
        </div>
      </div>
      </div>
<footer className="flex justify-center items-center text-white py-4 text-sm">
        <p>&copy; 2024 TechTrek</p>
      </footer>
</div>
  );
};

export default Cybersecurity;
