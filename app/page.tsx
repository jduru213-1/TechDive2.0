import Link from "next/link";
import ProductCard from "./components/ProductCard";
import styles from "./page.module.css";

// Created Title for Website & Linking to src path for video background 
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contents}>
      <h1>Discover the Future of Tech 
      <br/>Unlock New Possibilities</h1>
      <p>A platform and resource designed by students, for students and tech enthusiasts.
      <br/>Stay informed with the latest tech news from various sources 
      and dive deeper <br/>into tech concepts and projects that shape our world and its future.</p>

{/* Buttons  */}
      <div className={styles.button}>
        <button> About</button>
        <button> Story</button>
        </div>

      </div>

{/* Background to the site  */}
      <video src={require('../public/background.mp4')} 
      autoPlay
       muted 
       loop 
       className={styles.video}/>
       

{/* Playing around with the navigation bar  */}
       <body>
        
        <header className={styles.header}>
          <a href="#" className={styles.logo}>TECH DIVE</a>
          

          <nav className={styles.navbar}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Our Story</a>
            <a href="#">News Outlets</a>
            </nav>
            </header>
       </body>
    </main>
  );
}

/* Commented this for the time being brother */
/*  
export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-red-400"> Hello World </h1> 
      <h2> Testing the source control</h2>
      <h2> Hello World</h2>
      <h3> Hey man </h3>
      <h4> Yo bro lets get this app ruuning </h4>
      <p>hi </p>

      <Link href = "/users">Users</Link>
      <ProductCard />
    

      
    </main>
     
  );
}
  */