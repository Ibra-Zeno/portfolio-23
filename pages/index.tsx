import Image from "next/image";
import { Inter } from "next/font/google";
// Use next/font to optimize images
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Footer />
    </>
  );
}
