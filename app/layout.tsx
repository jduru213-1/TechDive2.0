import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure your custom CSS is included

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
              <a href="/#">
                <img
                  src="/images/TechTrek.jpeg"
                  width={85}
                  height={85}
                  alt="Tech Trek Logo"
                  className="transition-transform duration-300 ease-in-out" // Logo transition effect
                />
              </a>
              <div className="ml-4 text-4xl font-extrabold text-white transition-transform transform hover:scale-105">
                TrekInTech
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

            {/* Mobile Navigation Button */}
            <button className="md:hidden text-white">
              <nav className="mt-2 space-y-2 text-right">
                <a 
                  href="/#" 
                  className="block text-lg font-extrabold text-white transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Navigate to Home"
                >
                  Home
                </a>
                <a 
                  href="/#motive-section" 
                  className="block text-lg font-extrabold text-white transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Navigate to Story"
                >
                  Story
                </a>
                <a 
                  href="/#resources-section" 
                  className="block text-lg font-extrabold text-white transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Navigate to Resources"
                >
                  Resources
                </a>
                <a 
                  href="/#about-section" 
                  className="block text-lg font-extrabold text-white transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Navigate to About"
                >
                  About
                </a>
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
            className="fixed top-0 left-0 w-full h-full object-cover z-[-5] pointer-events-none"
          />
          {/* Main Content */}
          {children}
        </main>
      </body>
    </html>
  );
}
