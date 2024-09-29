"use client"; // Ensure this is the first line

import { useState } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css"; // Ensure your custom CSS is included

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false); // Function to close the menu

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-black to-black p-4 shadow-lg z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center md:justify-start">
              <img
                src="/images/TechTrek.jpeg"
                width={80}
                height={80}
                alt="Tech Trek Logo"
                className="transition-transform duration-300 ease-in-out"
              />
            </Link>

            {/* Title for larger screens */}
            <div className="hidden ml-8 md:flex flex-grow"> {/* Center title for larger screens */}
              <span className="text-5xl font-extrabold text-white transition-transform transform hover:scale-105">
                TechTrek 
              </span>
            </div>

            {/* Mobile Title */}
            <div className="flex-grow text-center md:hidden">
              <span className="text-4xl mr-7 font-extrabold text-white transition-transform transform hover:scale-105">
                TechTrek 
              </span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-lg font-extrabold text-white">
                Home
              </Link>
              <Link href="/#motive-section" className="text-lg font-extrabold text-white">
                Story
              </Link>
              <Link href="/#resources-section" className="text-lg font-extrabold text-white">
                Resources
              </Link>
              <Link href="/#about-section" className="text-lg font-extrabold text-white">
                About
              </Link>
            </nav>

            <button onClick={toggleMenu} className="md:hidden text-white">
              {/* Hamburger Icon */}
              <div className={`flex flex-col items-center justify-center space-y-1 ${isMenuOpen ? 'open' : ''}`}>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden bg-black p-4 mt-2 space-y-2">
              <Link 
                href="/" 
                className="block text-lg font-extrabold text-white" 
                onClick={closeMenu} // Close menu on link click
              >
                Home
              </Link>
              <Link 
                href="/#motive-section" 
                className="block text-lg font-extrabold text-white" 
                onClick={closeMenu} // Close menu on link click
              >
                Story
              </Link>
              <Link 
                href="/#resources-section" 
                className="block text-lg font-extrabold text-white" 
                onClick={closeMenu} // Close menu on link click
              >
                Resources
              </Link>
              <Link 
                href="/#about-section" 
                className="block text-lg font-extrabold text-white" 
                onClick={closeMenu} // Close menu on link click
              >
                About
              </Link>
            </nav>
          )}
        </header>

        <main className="pt-20 relative h-screen"> {/* Ensure main takes full height */}
          {/* Background Video */}
          <video
            src="/background.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="fixed top-0 left-0 w-full h-full object-cover z-[-5] pointer-events-none"
          />

          {/* Main Content */}
          <div className="relative z-10"> {/* Ensure content appears above video */}
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
