import Navbar from "@/components/Nav";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import About from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <TechStack />
        <Projects />
        <About />
      </Layout>
    </>
  );
}
