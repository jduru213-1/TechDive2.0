import Link from "next/link";
import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Dive</title>
        <meta name="description" content="Discover the Future of Tech - Unlock New Possibilities" />
      </Head>

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
        <div className={styles.contents}>
          {/* Main Heading */}
          <h1>
            Discover the Future of Tech<br />Unlock New Possibilities
          </h1>
          {/* Introduction Paragraph */}
          <p>
            A platform and resource designed by students, for students and tech enthusiasts.<br />
            Stay informed with the latest tech news from various sources and dive deeper<br />
            into tech concepts and projects that shape our world and its future.
          </p>

          {/* Buttons for Navigation */}
          <div className={styles.button}>
            <button>
              <a href="#about-section">About</a>
            </button>
            <button>
              <a href="#motive-section">Story</a>
            </button>
          </div>

          {/* Motive Section */}
          <div id="motive-section" className={styles.motive}>
            <h1>The Motive</h1>
            {/* Motive Description */}
            <p>
              TechDive was created during our internship in DC as a platform for students and 
              tech enthusiasts to progressively learn about key concepts in technology. <br />
              We saw the need for a space that not only combines tech news, projects, and educational resources 
              but also serves as a way for us to research and stay current in an ever-evolving field.
            </p>
          </div>
        </div>

      {/* Profile Sections */}
<div className={styles.profileSections}>
  {/* Justin's Profile Section */}
  <Link href='/justin'>
    <div className={styles.Justin}>
      <div className={styles.imgContainer}>
        <img src="/images/Justin.jpg" width={175} height={175} alt="Justin Duru" />
        <div className={styles.textbox}>
          <button>View Profile</button>
        </div>
      </div>
    </div>
  </Link>

  {/* Courage's Profile Section */}
  <Link href='/courage'>
    <div className={styles.courage}>
      <div className={styles.imgContainer2}>
        <img src="/images/Courage2.jpg" width={175} height={175} alt="Courage Tikum" />
        <div className={styles.textbox2}>
          <button>View Profile</button>
        </div>
      </div>
    </div>
  </Link>
</div>

{/* Resources Section */}
<div id="resources-section" className={styles.resources}>
  <h1>Resources</h1>
  <div className="flex justify-around items-center">
    {/* Programming Card */}
    <div className="mx-4">
      <div className="card bg-black w-80 h-[400px] shadow-xl border border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
        <figure className="px-10 pt-10 h-[250px]">
          <img
            src="images/programming.jpg"
            alt="Programming"
            className="rounded-xl object-cover w-full h-full"
          />
        </figure>
        <Link href='/programming'>
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
    <div className="mx-4">
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

    {/* News Outlets Card */}
    <div className="mx-4">
      <div className="card bg-black w-80 h-[400px] shadow-xl border border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
        <figure className="px-10 pt-10 h-[250px]">
          <img
            src="images/news.jpg"
            alt="News Outlets"
            className="rounded-xl object-cover w-full h-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">News Outlets</h2>
          <div className="card-actions">
            <button className="btn bg-white text-black hover:bg-black hover:text-white hover:scale-105 transform transition-transform duration-300">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div id="about-section" className="relative mb-11">
  {/* Main heading for the section */}
  <h1 className="text-6xl font-bold text-center text-white mt-40">Purpose</h1>
  
  {/* Container to center the card and add bottom margin */}
  <div className="flex justify-center mb-32">
    
    {/* Card with scaling, hover effects, and styling */}
    <div className="scale-95 card card-side bg-black shadow-xl w-full max-w-4xl border border-transparent hover:border-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300 rounded-lg overflow-hidden">
      
      {/* Image section of the card */}
      <figure className="flex-shrink-0 w-full md:w-1/2">
        <img
          src="images/mission.jpg"  
          alt="Mission"
          className="w-full h-full object-cover rounded-l-lg"
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
</div>

</main> {/* Closes the main tag */}
</>

  );
}
