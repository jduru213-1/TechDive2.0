import React from 'react';
import { GiCyberEye } from 'react-icons/gi';

const Programming = () => {
  return (
    <div className="text-center">
      {/* Container for icon and text */}
      <div className="flex flex-col items-center mt-40">
        <GiCyberEye size={100} className="text-blue-100 mb-4 hover:text-red-600 animate-pulse transition-colors duration-300" />
        <h1 className="text-6xl font-bold text-gray-100 animate-fadeAndZoom">Cybersecurity</h1>
      </div>

      <p className="mt-3 font-extrabold text-gray-100 animate-fadeAndZoom">
        “To be secure, you must be vigilant. To be vigilant, you must be aware.”
      </p>
      <p className="flex mt-20 text-xl text-gray-300 text-center">
        Welcome to the Cybersecurity Hub! Here, you will find everything you need to sharpen your skills and stay ahead in digital security. From our weekly cybersecurity tips and interactive Spot the Phish game to the Password Strength Tester and the Cybersecurity Professional Quiz, we offer practical tools and engaging challenges to help you master the essentials of online safety.
      </p>

      <div>
        <h1 className="mt-40 text-4xl font-bold text-gray-100 animate-fadeAndZoom">Weekly Tip</h1>
      </div>
    </div>
  );
};

export default Programming;
