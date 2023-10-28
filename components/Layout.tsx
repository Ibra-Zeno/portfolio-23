import Head from "next/head";
import Footer from "./Footer";

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

      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
