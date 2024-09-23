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
      <div className="flex flex-col items-center mt-40 space-y-6">
        <h1 className="text-white font-bold px-8 sm:px-16 md:px-24 text-3xl sm:text-4xl md:text-5xl text-center leading-tight animate-fancyAnimation">
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
        className="flex flex-col items-center justify-center text-center space-y-6 py-10"
      >
        <h1 className="mt-40 text-white text-6xl font-bold">The Motive</h1>
      
        {/* Profile Sections */}
<div className='flex justify-center space-x-4'> {/* Added space-x-4 for spacing between the images */}

{/* Justin's Profile Section */}
<Link href='/justin'>
  <div className=" mt-5 relative flex flex-col items-center mx-4 group"> {/* Added group class */}
    <img
      src="/images/Justin.jpg"
      className="h-[175px] w-[175px] rounded-full border-4 border-white transition-transform duration-300 ease-in-out transform hover:scale-110"
      alt="Justin Duru"
    />
    {/* Button hidden by default and displayed on image hover */}
    <button className="bg-white font-extrabold text-black px-4 py-2 rounded shadow-lg mt-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
      View Profile
    </button>
  </div>
</Link>

{/* Courage's Profile Section */}
<Link href='/courage'>
  <div className=" mt-5 relative flex flex-col items-center mx-4 group"> {/* Added group class */}
    <img
      src="/images/Courage2.jpg"
      className="h-[175px] w-[175px] rounded-full border-4 border-white transition-transform duration-300 ease-in-out transform hover:scale-110"
      alt="Courage Tikum"
    />
    {/* Button hidden by default and displayed on image hover */}
    <button className="bg-white font-extrabold text-black px-4 py-2 rounded shadow-lg mt-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
      View Profile
    </button>
  </div>
</Link>
      </div>
        <p className="text-white max-w-3xl leading-relaxed mt-5">
          TechDive was created during our internship in DC as a platform for students
          and tech enthusiasts to progressively learn about key concepts in technology.
          We saw the need for a space that not only combines tech news, projects, and educational resources
          but also serves as a way for us to research and stay current in an ever-evolving field.
        </p>
      </div>


{/* Resources Section */}
<div
  id="resources-section"
  className="text-white font-bold text-5xl text-center whitespace-nowrap py-40 animate-fancyAnimation relative"
>
  <h1>Resources</h1>
  
  {/* Small paragraph added under the Resources heading */}
  <p className="text-lg font-normal mt-2">
    Explore various tools and materials to enhance your skills in programming and cybersecurity. 
  </p>
  
  <div className="mt-5 flex justify-center items-center space-x-4"> {/* Changed to space-x-4 for consistent spacing */}
    {/* Programming Card */}
    <div>
      <div className="card bg-black w-80 h-[400px] shadow-xl border border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
        <figure className="px-10 pt-10 h-[250px]">
          <img
            src="images/programming.jpg"
            alt="Programming"
            className="rounded-xl object-cover w-full h-full"
          />
        </figure>
        <Link href="/programming">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">Programming</h2>
            <div className="card-actions animate-fadeIn">
              <button className="btn bg-white text-black hover:bg-black hover:text-white hover:scale-105 transform transition-transform duration-300">
                Explore
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>

    {/* Cybersecurity Card */}
    <div>
      <div className="card bg-black w-80 h-[400px] shadow-xl border border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
        <figure className="px-10 pt-10 h-[250px]">
          <img
            src="images/cyber.jpg"
            alt="Cybersecurity"
            className="rounded-xl object-cover w-full h-full"
          />
        </figure>
        <Link href="/cybersecurity">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">Cybersecurity</h2>
            <div className="card-actions">
              <button className="btn bg-white text-black hover:bg-black hover:text-white hover:scale-105 transform transition-transform duration-300">
                Explore
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
</div>


<div id="about-section" className="py-20 relative mb-11">
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
        <p className="text-gray-300 text-center leading-relaxed text-sm">
          At Tech Dive, our mission is to empower individuals by demystifying the complex world of technology and cybersecurity. We are dedicated to fostering continuous learning by breaking down foundational concepts and presenting them in a clear and accessible manner.
        </p>
        
        {/* Subheading for explaining the goal */}
        <h2 className="text-xl font-semibold text-white text-center mt-8 mb-4">What is the Goal?</h2>
        
        {/* Paragraph describing the goal */}
        <p className="text-gray-300 text-center leading-relaxed text-sm">
          Through our platform, users will gain a comprehensive understanding of key cybersecurity principles and their critical role in today’s digital age. By focusing on practical insights and actionable knowledge, we help users enhance their ability to protect personal data and navigate the rapidly evolving tech landscape with confidence.
        </p>
        
      </div>
    </div>
  </div>

  <p className='mt-10 font-bold text-white text-center'>TrekInTech @ LLC</p>
</div>

</>
  );
}
