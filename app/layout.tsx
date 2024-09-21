import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure your custom CSS is included
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Dive",
  description: "C and JD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Fixed Navigation */}
        <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-black to-black p-4 shadow-lg z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/#">
                <img
                  src="/images/TechTrek.jpeg"
                  width={85}
                  height={85}
                  alt="Tech Trek Logo"
                  className="transition-transform duration-300 ease-in-out" // Removed hover effect
                />
              </a>
              <div className="ml-4 text-2xl font-extrabold text-white transition-transform transform hover:scale-105">
                TechTrek
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/#" className="text-lg font-extrabold text-white transition-transform transform hover:scale-105">
                Home
              </a>
              <a href="/#motive-section" className="text-lg font-extrabold text-white transition-transform transform hover:scale-105">
                Story
              </a>
              <a href="/#resources-section" className="text-lg font-extrabold text-white transition-transform transform hover:scale-105">
                Resources
              </a>
              <a href="/#about-section" className="text-lg font-extrabold text-white transition-transform transform hover:scale-105">
                About
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <nav className="md:hidden mt-2 space-y-2">
            <a href="/#" className="block text-lg font-extrabold text-white transition-transform transform hover:scale-105">
              Home
            </a>
            <a href="/#motive-section" className="block text-lg font-extrabold text-white transition-transform transform hover:scale-105">
              Story
            </a>
            <a href="/#resources-section" className="block text-lg font-extrabold text-white transition-transform transform hover:scale-105">
              Resources
            </a>
            <a href="/#about-section" className="block text-lg font-extrabold text-white transition-transform transform hover:scale-105">
              About
            </a>
          </nav>
        </header>

        <main className="pt-20 relative">
          {/* Background Video */}
          <video
            src="/background.mp4"
            autoPlay
            muted
            loop
            className="fixed top-0 left-0 w-full h-full object-cover z-[-5] pointer-events-none"
          />
          {/* Main Content */}
          {children}
        </main>
      </body>
    </html>
  );
}
