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
      <Navbar />
      <main className="relative w-full">
        <div className="fixed inset-0 -z-10 mx-auto h-screen w-screen translate-y-8">
          <Image
            src="/images/Bg/projectBg.svg"
            className=" h-full w-full object-cover object-center opacity-75"
            alt="background landscape"
            width={1400}
            height={1000}
          />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
