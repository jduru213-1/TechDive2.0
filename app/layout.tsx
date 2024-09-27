import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure your custom CSS is included
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// Metadata for the page
export const metadata: Metadata = {
  title: "TrekInTech",
  description: "C and JD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Define children as React nodes
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Fixed Navigation */}
        <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-black to-black p-4 shadow-lg z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/">
                <img
                  src="/images/TechTrek.jpeg"
                  width={80}
                  height={80}
                  alt="Tech Trek Logo"
                  className="transition-transform duration-300 ease-in-out" // Logo transition effect
                />
              </Link>
              <div className="ml-4 text-4xl font-extrabold text-white transition-transform transform hover:scale-105">
                TrekInTech
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-lg font-extrabold text-white transition-transform transform hover:scale-105 animate-fadeIn">
                Home
              </Link>
              <Link href="/#motive-section" className="text-lg font-extrabold text-white transition-transform transform hover:scale-105 animate-fadeIn">
                Story
              </Link>
              <Link href="/#resources-section" className="text-lg font-extrabold text-white transition-transform transform hover:scale-105 animate-fadeIn">
                Resources
              </Link>
              <Link href="/#about-section" className="text-lg font-extrabold text-white transition-transform transform hover:scale-105 animate-fadeIn">
                About
              </Link>
            </nav>

            {/* Mobile Navigation Button */}
            <button className="md:hidden text-white">
              <nav className="mt-2 space-y-2 text-right">
                <Link 
                  href="/" 
                  className="block text-lg font-extrabold text-white transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white animate-fadeIn"
                  aria-label="Navigate to Home"
                >
                  Home
                </Link>
                <Link 
                  href="/#motive-section" 
                  className="block text-lg font-extrabold text-white transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white animate-fadeIn"
                  aria-label="Navigate to Story"
                >
                  Story
                </Link>
                <Link 
                  href="/#resources-section" 
                  className="block text-lg font-extrabold text-white transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white animate-fadeIn"
                  aria-label="Navigate to Resources"
                >
                  Resources
                </Link>
                <Link 
                  href="/#about-section" 
                  className="block text-lg font-extrabold text-white transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white animate-fadeIn"
                  aria-label="Navigate to About"
                >
                  About
                </Link>
              </nav>
            </button>
          </div>
        </header>

        <main className="pt-20 relative">
          {/* Background Video */}
          <video
            src="/background.mp4"
            autoPlay
            muted
            loop
            className="fixed top-0 left-0 w-full h-full object-cover z-[-5] pointer-events-none animate-fadeIn"
          />
          {/* Main Content */}
          {children}
        </main>
      </body>
    </html>
  );
}
