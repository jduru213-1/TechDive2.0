"use client";

import React, { useEffect, useState } from 'react';
import { GiCyberEye, GiBrain } from 'react-icons/gi';

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
    <div className="text-center">
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
      <p className="flex mt-20 text-xl text-gray-300 text-center">
        Welcome to the Cybersecurity Hub! Here, you will find everything you need to sharpen your skills and stay ahead in digital security. From our weekly cybersecurity tips and interactive Spot the Phish game to the Password Strength Tester and the Cybersecurity Professional Quiz, we offer practical tools and engaging challenges to help you master the essentials of online safety.
      </p>

      <div className="flex flex-col items-center mt-20 mb-10">
        <GiBrain
          size={100}
          className="text-blue-100 mb-4 hover:text-pink-600 transition-colors duration-300"
        />
        <h1 className="text-4xl font-bold text-gray-100 animate-fadeAndZoom">
           Tip of the day
        </h1>
        <div className="w-88 h-auto bg-gray-300 mt-6 rounded-lg p-4 animate-bounce ">
          <p className="text-gray-700">{weeklyTip}</p>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;
