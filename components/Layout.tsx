import Head from "next/head";
import Navbar from "./Nav";
import Footer from "./Footer";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Ibrahim K</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="relative w-full">
        <div className="fixed inset-0 -z-10 mx-auto h-screen w-screen translate-y-8">
          <Image
            src="/images/Bg/flat-mountains.svg"
            className=" h-full w-full object-cover object-top opacity-75"
            alt="background landscape"
            width={1400}
            height={1000}
          />
        </div>
        {children}
      </main>
      <ThemeSwitcher />
      <Footer />
    </div>
  );
};

export default Layout;
