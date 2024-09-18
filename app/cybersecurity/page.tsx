"use client";

import React, { useEffect, useState } from 'react';
import { GiCyberEye, GiBrain } from 'react-icons/gi';
import { AiFillLinkedin, AiFillMail, AiFillFileText, AiFillMediumSquare, } from 'react-icons/ai';
import Link from 'next/link';
import { FaSchool,FaSuitcase, FaLaptop,FaChalkboardTeacher,FaConfluence, FaWindows, FaPen, FaRoad} from "react-icons/fa";
import { SiJira, SiSplunk, SiAwssecretsmanager } from "react-icons/si";
import { TbSettingsAutomation } from "react-icons/tb";
import { GrAid, GrResources } from "react-icons/gr";
import Quiz from '../components/cyberQuiz';


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

      <p className="mt-3 font-extrabold text-gray-100 animate-fadeAndZoom">
        “To be secure, you must be vigilant. To be vigilant, you must be aware.”
      </p>
      <p className="flex mt-20 text-xl text-gray-300 text-center ">
        Welcome to the Cybersecurity Hub! Here, you will find everything you need to sharpen your skills and stay ahead in digital security. From our weekly cybersecurity tips and interactive Spot the Phish game to the Password Strength Tester and the Cybersecurity Professional Quiz, we offer practical tools and engaging challenges to help you master the essentials of online safety.
      </p>

      <div className="flex flex-col items-center mt-20">
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

{/* Projects Section */}
<div className="flex flex-col items-center justify-center h-full mt-20">
  {/* Icon */}
  <GrResources size={100} className="text-blue-100  hover:text-yellow-400 transition-colors duration-30" />

  {/* Heading */}
  <h1 className=" text-4xl font-extrabold text-gray-100 animate-fadeAndZoom text-center">
    BUILD A LAB ENVIRONMENT
  </h1>

  {/* Paragraph */}
  <p className="flex flex-col mt-2 text-lg text-gray-100 animate-fadeAndZoom text-center">
    Set up a controlled environment to test and experiment with SIEM tools and techniques safely and effectively
  </p>

  {/* Cards Section */}
  <div className="flex justify-around items-center mt-10 flex-wrap">
    {/* Project 1 */}
    <div className="mx-4">
      <div className="card bg-black w-80 h-[400px] shadow-xl border-2 border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
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
    <div className="mx-4">
      <div className="card bg-black w-80 h-[400px] shadow-xl border-2 border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
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
    <div className="mx-4">
      <div className="card bg-black w-80 h-[400px] shadow-xl border-2 border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
        <div className="card-body flex flex-col items-center justify-center text-center h-full">
          <TbSettingsAutomation size={70} className="text-blue-100" />
          <h3 className="card-title text-white">Automated Threat Detection and Incident Response</h3>
          <p className="mt-2 text-gray-100 animate-fadeAndZoom">
            Discover how automated threat detection identifies security risks in real-time, while incident response quickly addresses and mitigates threats.
          </p>
          <div className="card-actions mt-4">
            <button className="btn bg-white text-black hover:bg-black hover:text-white hover:scale-105 transform transition-transform duration-300">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>

    <div className="flex flex-col items-center justify-center h-full mt-40">
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
  </div>
</div>
    
  );
};

export default Cybersecurity;
