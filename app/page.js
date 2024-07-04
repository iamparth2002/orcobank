import About from "@/components/About";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <About/>
    <Section/>
    <Cta/>
    <Newsletter/>
    <Footer/>
   </main>
  );
}
