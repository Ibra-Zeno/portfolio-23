import Navbar from "@/components/Nav";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Layout from "@/components/Layout";
import Head from "next/head";
import About from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ibrahim Kalam</title>
        <meta name="description" content="Ibrahim Kalam's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <TechStack />
        <Projects />
        <About />
      </Layout>
    </>
  );
}
