import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1> Hello World </h1> 
      <h2> Testing the source control</h2>
      <h2> Hello World</h2>
      <h3> Hey man </h3>
      <h4> Yo bro lets get this app ruuning </h4>

      <Link href = "/users">Users</Link>
      <ProductCard />
    </main>
     
  );
}
