import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Minesweeper from "@/components/Minesweeper";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Minesweeper />
      <Footer />
    </>
  );
}
