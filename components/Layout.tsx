import Head from "next/head";
import Navbar from "./Nav";
import Footer from "./Footer";
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
      <main className=" flex-grow">{children}</main>
      <ThemeSwitcher />
      <Footer />
    </div>
  );
};

export default Layout;
