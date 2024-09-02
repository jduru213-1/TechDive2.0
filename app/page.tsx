import Link from "next/link";
import ProductCard from "./components/ProductCard";
import styles from "./page.module.css";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <Head>
        <title>Tech Dive</title>
        <meta name="description" content="Discover the Future of Tech - Unlock New Possibilities" />
      </Head>

        {/* Background Video */}
        <video
          src="/background.mp4" // Directly refer to the public folder for video
          autoPlay muted loop className={styles.video}
        />

        {/* Main Content */}
      <div className={styles.contents}>
       <h1>Discover the Future of Tech<br />Unlock New Possibilities</h1>
        <p>A platform and resource designed by students, for students and tech enthusiasts.<br />
          Stay informed with the latest tech news from various sources and dive deeper<br />
          into tech concepts and projects that shape our world and its future.
        </p>
          

          {/* Buttons */}
      <div className={styles.button}>
        <button>About</button>
           <button>
              <a href="#motive-section">Story</a>
          </button>
      </div>

        {/* Motive Section */}
      <div>
        <div id="motive-section" className={styles.motive}>
            <h1>The Motive</h1>
              <p>TechDive was created during our internship in DC as a platform for students and 
              tech enthusiasts to progressively learn about key concepts in technology.  <br />We saw the need for a space that not only combines tech news, projects, and educational resources 
              also serves as a way for us to research and stay current in an ever-evolving field.
             </p>
        </div>
      </div>
    </div>
             
        {/* Navigation */}
      <header className={styles.header}>
          <a href="#" className={styles.logo}>TECH DIVE</a>
            <nav className={styles.navbar}>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#resources-section">Resources</a>
             <a href="#">Outlets</a>
          </nav>
      </header>

{/* Getting our images on the page and button beneath it */}
      <div>
        
      {/* Justin section container */}
      {/* Image and button */}
        <Link href='/users'>
          <div className={styles.Justin} >
            <div className={styles.imgContainer}>
              <img src="/images/Justin.jpg" width={175} height={175} alt="Justin Duru" />
              <div className={styles.textbox}>
              <button>View Profile</button> 
              </div>
            </div>
          </div>
        </Link>
        
      {/* Courage section container */}
      {/* Image and button */}
        <div className={styles.courage}>
          <div className={styles.imgContainer2}>
            <img src="/images/courage.jpg" width={175} height={175} alt="Courage Tikum" />
            <div className={styles.textbox2}>
              <button>View Profile</button>
            </div>
          </div>
        </div>

      {/* Resources section container */}
         <div>
           <div id="resources-section"  className={styles.resources}>
            <h1>Resources</h1>
              </div>
            </div>
          </div>
      </main>
    </>
  );
}
