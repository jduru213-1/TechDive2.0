import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "./globals.css";

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
        {/* Navigation */}
        <header className={`${styles.header} bg-gradient-to-r from-black to-black p-3 shadow-lg rounded-lg`}>
          <div className="container mx-auto flex items-center justify-between">
            <img src="/images/LOGO.png" width={50} height={50} alt="Tech Dive Logo" />
            <a href="/#" className={`${styles.logo} animate-fadeIn text-2xl font-extrabold text-white transition-transform transform hover:scale-105`}>TECH DIVE</a>
            <nav className="hidden md:flex md:space-x-8 mt-2">
              <a href="/#" className="animate-fadeIn text-lg font-extrabold text-white transition-transform transform hover:scale-105">Home</a>
              <a href="/#motive-section" className="animate-fadeIn text-lg font-extrabold text-white transition-transform transform hover:scale-105">Story</a>
              <a href="/#resources-section" className="animate-fadeIn text-lg font-extrabold text-white transition-transform transform hover:scale-105">Resources</a>
              <a href="/#about-section" className="animate-fadeIn text-lg font-extrabold text-white transition-transform transform hover:scale-105">About</a>
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
            <a href="/#" className="block animate-fadeIn text-lg font-extrabold text-white transition-transform transform hover:scale-105">Home</a>
            <a href="/#motive-section" className="block animate-fadeIn text-lg font-extrabold text-white transition-transform transform hover:scale-105">Story</a>
            <a href="/#resources-section" className="block animate-fadeIn text-lg font-extrabold text-white transition-transform transform hover:scale-105">Resources</a>
            <a href="/#about-section" className="block animate-fadeIn text-lg font-extrabold text-white transition-transform transform hover:scale-105">About</a>
          </nav>
        </header>
        
        <main className={styles.main}>
          {/* Background Video */}
          <video
            src="/background.mp4"
            autoPlay
            muted
            loop
            className={styles.video}
          />
          {/* Main Content */}
          {children}
        </main>
      </body>
    </html>
  );
}
