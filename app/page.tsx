"use client"; // Add this line at the top

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Page() {

  // Head section for page metadata and favicon
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>TechTrek</title>
        <meta
          name="description"
          content="Discover the Future of Tech - Unlock New Possibilities"
        />
        {/* Import Arial font (it's system-default and does not require external link) */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Arial&display=swap" />
      </Head>

      {/* Web Intro */}
      <div className="flex flex-col items-center mt-20 sm:mt-40 space-y-6 px-6 py-2">
        <h1 className="text-white font-semibold sm:px-16 md:px-24 text-4xl sm:text-5xl md:text-6xl text-center leading-tight animate-fadeAndZoom" style={{ fontFamily: "Arial, sans-serif" }}>
          Discover the Future of Tech
          <br />
          Unlock New Possibilities
        </h1>
        <p className="text-white px-6 sm:px-12 md:px-20 text-center leading-relaxed max-w-4xl text-xl sm:text-xl" style={{ fontFamily: "Arial, sans-serif" }}>
          A platform designed by students, for students and tech enthusiasts, offering a wealth of resources and projects to help you explore the tech landscape. Navigate your path in technology with our interactive games and questionnaires that identify your interests and strengths.
        </p>
      </div>

      {/* Buttons for Navigation */}
      <div className="flex justify-center items-center animate-popup mt-10 space-x-2 sm:space-x-6">
        <Link href="#about-section">
          <button className="relative px-6 py-6 rounded-full text-white uppercase tracking-widest text-lg sm:text-xl transition-transform duration-500 ease-in-out transform hover:-translate-y-2 border border-white hover:bg-white hover:text-black shadow-lg hover:shadow-2xl" style={{ fontFamily: "Arial, sans-serif" }}>
            About
          </button>
        </Link>

        <Link href="#motive-section">
          <button className="relative px-6 py-6 rounded-full text-white uppercase tracking-widest text-lg sm:text-xl transition-transform duration-500 ease-in-out transform hover:-translate-y-2 border border-white hover:bg-white hover:text-black shadow-lg hover:shadow-2xl" style={{ fontFamily: "Arial, sans-serif" }}>
            Story
          </button>
        </Link>
      </div>

      {/* Motive Section */}
      <div id="motive-section" className="flex flex-col items-center justify-center text-center space-y-6 mt-12 py-24 px-6 sm:px-12">
        <h1 className="mt-12 text-white text-5xl sm:text-6xl font-bold" style={{ fontFamily: "Arial, sans-serif" }}>The Motive</h1>

        {/* Profile Sections */}
        <div className="flex justify-center space-x-4 sm:space-x-6">
          <Link href='/justin'>
            <div className="mt-5 relative flex flex-col items-center mx-4 group">
              <img
                src="/images/Justin.jpg"
                className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] rounded-full border-4 border-white transition-transform duration-300 ease-in-out transform hover:scale-110"
                alt="Justin Duru"
              />
              <button className="bg-white font-extrabold text-black px-6 py-3 rounded shadow-lg mt-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" style={{ fontFamily: "Arial, sans-serif" }}>
                View Profile
              </button>
            </div>
          </Link>

          <Link href='/courage'>
            <div className="mt-5 relative flex flex-col items-center mx-4 group">
              <img
                src="/images/Courage2.jpg"
                className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] rounded-full border-4 border-white transition-transform duration-300 ease-in-out transform hover:scale-110"
                alt="Courage Tikum"
              />
              <button className="bg-white font-extrabold text-black px-6 py-3 rounded shadow-lg mt-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" style={{ fontFamily: "Arial, sans-serif" }}>
                View Profile
              </button>
            </div>
          </Link>
        </div>

        <p className="text-white max-w-4xl px-6 sm:px-12 text-xl sm:text-xl" style={{ fontFamily: "Arial, sans-serif" }}>
          TechDive was created during our internship in DC as a platform for students and tech enthusiasts to progressively learn about key concepts in technology. We saw the need for a space that not only combines tech news, projects, and educational resources but also serves as a way for us to research and stay current in an ever-evolving field.
        </p>
      </div>

      {/* Resources Section */}
      <section
        id="resources-section"
        className="relative text-white font-bold text-center py-40 sm:py-11 animate-fancyAnimation transition-all duration-500"
      >
        <h1 className="mt-20 text-5xl sm:text-6xl animate-fadeInDown delay-300" style={{ fontFamily: "Arial, sans-serif" }}>Resources</h1>
        <p className="text-lg font-normal max-w-2xl mx-auto mt-1 text-gray-100 animate-fadeInUp delay-600 px-4 text-xl sm:text-xl" style={{ fontFamily: "Arial, sans-serif" }}>
          Explore resources to boost your skills in programming and cybersecurity
        </p>
        <div className="mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Programming Card */}
          <div className="relative group w-80 sm:w-96">
            <div className="card bg-black w-full h-[450px] shadow-2xl border border-transparent transition-all duration-700 hover:scale-110 hover:shadow-xl transform perspective-1000">
              <figure className="px-10 pt-10 h-[250px]">
                <img
                  src="images/programming.jpg"
                  alt="Programming"
                  className="rounded-xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
              <Link href="/programming">
                <div className="card-body flex flex-col justify-center items-center text-center transition-transform duration-300 transform group-hover:translate-y-2">
                  <h2 className="text-2xl text-white mb-4 transition-colors duration-300 group-hover:text-white" style={{ fontFamily: "Arial, sans-serif" }}>
                    Programming
                  </h2>
                  <div className="card-actions">
                    <button className="btn bg-white text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105" style={{ fontFamily: "Arial, sans-serif" }}>
                      Explore
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Cybersecurity Card */}
          <div className="relative group w-80 sm:w-96">
            <div className="card bg-black w-full h-[450px] shadow-2xl border border-transparent transition-all duration-700 hover:scale-110 hover:shadow-xl transform perspective-1000">
              <figure className="px-10 pt-10 h-[250px]">
                <img
                  src="images/cyber.jpg"
                  alt="Cybersecurity"
                  className="rounded-xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
              <Link href="/cybersecurity">
                <div className="card-body flex flex-col justify-center items-center text-center transition-transform duration-300 transform group-hover:translate-y-2">
                  <h2 className="text-2xl text-white mb-4 transition-colors duration-300 group-hover:text-white" style={{ fontFamily: "Arial, sans-serif" }}>
                    Cybersecurity
                  </h2>
                  <div className="card-actions">
                    <button className="btn bg-white text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105" style={{ fontFamily: "Arial, sans-serif" }}>
                      Explore
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Frequently Asked Questions (FAQs) */}
          <div className="relative group w-80 sm:w-96">
            <div className="card bg-black w-full h-[450px] shadow-2xl border border-transparent transition-all duration-700 hover:scale-110 hover:shadow-xl transform perspective-1000">
              <figure className="px-10 pt-10 h-[250px]">
                <img
                  src="images/qr.jpeg"
                  alt="Cybersecurity"
                  className="rounded-2xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
              <Link href="/FAQs">
                <div className="card-body flex flex-col justify-center items-center text-center transition-transform duration-300 transform group-hover:translate-y-2">
                  <h2 className="text-2xl text-white mb-4 transition-colors duration-300 group-hover:text-white" style={{ fontFamily: "Arial, sans-serif" }}>
                    FAQs
                  </h2>
                  <div className="card-actions">
                    <button className="btn bg-white text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105" style={{ fontFamily: "Arial, sans-serif" }}>
                      Explore
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div id="about-section" className="py-20 relative mb-11 px-6 sm:px-12">
        <h1 className="text-5xl font-extrabold text-center text-white mt-20" style={{ fontFamily: "Arial, sans-serif" }}>Purpose</h1>
        <p className="text-lg font-normal text-center max-w-2xl mx-auto mt-1 text-gray-100 animate-fadeInUp delay-600 px-4 text-xl sm:text-2xl" style={{ fontFamily: "Arial, sans-serif" }}>
          Learn more about our mission and what drives TechTrek
        </p>

        {/* Purpose Card */}
        <div className="flex justify-center mt-5">
          <div className="scale-95 card card-side bg-black shadow-xl w-full max-w-4xl border border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300 rounded-lg overflow-hidden flex flex-col md:flex-row">
            <figure className="flex-shrink-0 w-full md:w-1/2">
              <img
                src="images/mission.jpg"
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="p-6 md:w-1/2">
              <h2 className="text-xl font-semibold text-white text-center mb-4" style={{ fontFamily: "Arial, sans-serif" }}>Why Tech Dive?</h2>
              <p className="text-gray-300 text-center" style={{ fontFamily: "Arial, sans-serif" }}>
                At Tech Dive, we strive to bridge the gap between technology and everyday users, making tech accessible to everyone. Our mission is to foster a community of learners who are equipped with the knowledge and skills to navigate the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="flex justify-center items-center text-white py-6 text-sm sm:text-base">
        <p>&copy; 2024 TechTrek</p>
      </footer>
    </>
  );
}
