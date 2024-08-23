import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1> Hello World Yo yo yo </h1> 
      <h2> Testing the source control</h2>
      <Link href = "/users">Users</Link>
      <ProductCard />
    </main>
     
  );
}
