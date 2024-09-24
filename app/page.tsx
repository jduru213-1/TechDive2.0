import Link from "next/link"; 
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>TreckInTech</title>
        <meta
          name="description"
          content="Discover the Future of Tech - Unlock New Possibilities"
        />
      </Head>

      {/* Web Intro */}
      <div className="flex flex-col items-center mt-40 space-y-6 px-4 py-10">
        <h1 className="text-white font-bold sm:px-16 md:px-24 text-3xl sm:text-4xl md:text-5xl text-center leading-tight animate-fancyAnimation">
          Discover the Future of Tech
          <br />
          Unlock New Possibilities
        </h1>
        <p className="text-white px-6 sm:px-12 md:px-20 text-center leading-relaxed max-w-4xl">
          A platform and resource designed by students, for students and tech
          enthusiasts.
          <br />
          Stay informed with the latest tech news from various sources and dive
          deeper
          <br />
          into tech concepts and projects that shape our world and its future.
        </p>
      </div>

      {/* Buttons for Navigation */}
      <div className="-mt-10 flex justify-center items-center animate-popup space-x-4">
        <button className="relative top-20 px-5 py-5 rounded-full text-white uppercase tracking-widest transition-transform duration-500 ease-in-out transform hover:-translate-y-2 border border-white hover:bg-white hover:text-black shadow-lg hover:shadow-2xl">
          <a href="#about-section" className="transition-colors duration-300">
            About
          </a>
        </button>
        <button className="relative top-20 px-5 py-5 rounded-full text-white uppercase tracking-widest transition-transform duration-500 ease-in-out transform hover:-translate-y-2 border border-white hover:bg-white hover:text-black shadow-lg hover:shadow-2xl">
          <a href="#motive-section" className="transition-colors duration-300">
            Story
          </a>
        </button>
      </div>

      {/* Motive Section */}
      <div
        id="motive-section"
        className="flex flex-col items-center justify-center text-center space-y-6 mt-12 py-40 px-4" // min-h-screen ensures it takes full height of the viewport
      >
        <h1 className="mt-12 text-white text-6xl font-bold">The Motive</h1>

        {/* Profile Sections */}
        <div className='flex justify-center space-x-4'>
          {/* Justin's Profile Section */}
          <Link href='/justin'>
            <div className="mt-5 relative flex flex-col items-center mx-4 group">
              <img
                src="/images/Justin.jpg"
                className="h-[175px] w-[175px] rounded-full border-4 border-white transition-transform duration-300 ease-in-out transform hover:scale-110"
                alt="Justin Duru"
              />
              <button className="bg-white font-extrabold text-black px-4 py-2 rounded shadow-lg mt-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                View Profile
              </button>
            </div>
          </Link>

          {/* Courage's Profile Section */}
          <Link href='/courage'>
            <div className="mt-5 relative flex flex-col items-center mx-4 group">
              <img
                src="/images/Courage2.jpg"
                className="h-[175px] w-[175px] rounded-full border-4 border-white transition-transform duration-300 ease-in-out transform hover:scale-110"
                alt="Courage Tikum"
              />
              <button className="bg-white font-extrabold text-black px-4 py-2 rounded shadow-lg mt-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                View Profile
              </button>
            </div>
          </Link>
        </div>

        <p className="text-white max-w-4xl px-4">
          TechDive was created during our internship in DC as a platform for students
          and tech enthusiasts to progressively learn about key concepts in technology. We saw the need for a space that not only combines tech news, projects, and educational resources
          but also serves as a way for us to research and stay current in an ever-evolving field.
        </p>
      </div>

      {/* Resources Section */}
<section
  id="resources-section"
  className="relative text-white font-bold text-center mt-1 py-40 animate-fancyAnimation transition-all duration-500"
>
  {/* Heading */}
  <h1 className="mt-1 text-5xl animate-fadeInDown delay-300">Resources</h1>

  {/* Small paragraph under the Resources heading */}
  <p className="text-lg font-normal max-w-2xl mx-auto mt-1 text-gray-100 animate-fadeInUp delay-600 px-4">
    Explore a collection of tools and materials to enhance your skills in programming and cybersecurity.
  </p>

  {/* Cards Container */}
  <div className="mt-5 flex flex-wrap justify-center items-center gap-8 px-4">
    {/* Programming Card */}
    <div className="relative group w-80">
      <div className="card bg-black w-full h-[400px] shadow-2xl border border-transparent transition-all duration-700 hover:scale-110 hover:shadow-xl transform perspective-1000">
        <figure className="px-10 pt-10 h-[250px]">
          <img
            src="images/programming.jpg"
            alt="Programming"
            className="rounded-xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </figure>
        <Link href="/programming">
          <div className="card-body flex flex-col justify-center items-center text-center transition-transform duration-300 transform group-hover:translate-y-2">
            <h2 className="text-2xl text-white mb-4 transition-colors duration-300 group-hover:text-white">
              Programming
            </h2>
            <div className="card-actions">
              <button className="btn bg-white text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
                Explore
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>

    {/* Cybersecurity Card */}
    <div className="relative group w-80">
      <div className="card bg-black w-full h-[400px] shadow-2xl border border-transparent transition-all duration-700 hover:scale-110 hover:shadow-xl transform perspective-1000">
        <figure className="px-10 pt-10 h-[250px]">
          <img
            src="images/cyber.jpg"
            alt="Cybersecurity"
            className="rounded-xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </figure>
        <Link href="/cybersecurity">
          <div className="card-body flex flex-col justify-center items-center text-center transition-transform duration-300 transform group-hover:translate-y-2">
            <h2 className="text-2xl text-white mb-4 transition-colors duration-300 group-hover:text-white">
              Cybersecurity
            </h2>
            <div className="card-actions">
              <button className="btn bg-white text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
                Explore
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
</section>


      <div id="about-section" className="py-20 relative mb-11 px-4">
        {/* Main heading for the section */}
        <h1 className="text-5xl font-extrabold text-center text-white mt-20">Purpose</h1>
        
        {/* Small paragraph added under the Purpose heading */}
        <p className="text-lg font-semibold text-center text-gray-100 mt-2">
          Discover our commitment to providing clear and practical resources for all who seek to learn about technology and cybersecurity.
        </p>
        
        {/* Centering the card using Flexbox */}
        <div className="flex justify-center mt-5">
          {/* Card with scaling, hover effects, and styling */}
          <div className="scale-95 card card-side bg-black shadow-xl w-full max-w-4xl border border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300 rounded-lg overflow-hidden flex flex-col md:flex-row">
            
            {/* Image section of the card */}
            <figure className="flex-shrink-0 w-full md:w-1/2">
              <img
                src="images/mission.jpg"  
                alt="Mission"
                className="w-full h-full object-cover" // Ensures the image covers the area
              />
            </figure>
            
            {/* Text content section of the card */}
            <div className="p-6 md:w-1/2">
              
              {/* Subheading for explaining why Tech Dive */}
              <h2 className="text-xl font-semibold text-white text-center mb-4">Why Tech Dive?</h2>
              
              {/* Paragraph describing the mission */}
              <p className="text-gray-300 text-center">
                At Tech Dive, we strive to bridge the gap between technology and everyday users, making tech accessible to everyone. 
                Our mission is to foster a community of learners who are equipped with the knowledge and skills to navigate the ever-evolving tech landscape.
              </p>
                
              <h2 className="text-xl mt-4 font-semibold text-white text-center mb-4">Why Tech Dive?</h2>

                {/* Paragraph describing the mission */}
                <p className="text-gray-300 text-center">
                At Tech Dive, we strive to bridge the gap between technology and everyday users, making tech accessible to everyone. 
                Our mission is to foster a community of learners who are equipped with the knowledge and skills to navigate the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="flex justify-center items-center text-white py-4 text-sm">
        <p>&copy; 2024 TrekInTech</p>
      </footer>
    </>
  );
}
