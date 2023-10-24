import Link from "next/link";
import { Instagram, Github, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <div className="font-bold mx-auto items-center text-center text-2xl">
          IK
        </div>
        <div className="flex justify-center mt-8 space-x-6">
          <span className="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto">
            <Link
              href="#"
              className="w-6 h-6 transition fill-black hover:text-blue-500"
            >
              <span className="sr-only">github</span>
              <Github />
            </Link>
            <Link
              href="#"
              className="w-6 h-6 transition fill-black hover:text-blue-500"
            >
              <span className="sr-only">twitter</span>
              <Twitter />
            </Link>
            <Link
              href="#"
              className="w-6 h-6 transition fill-black hover:text-blue-500"
            >
              <span className="sr-only">Instagram</span>
              <Instagram />
            </Link>
          </span>
        </div>
        <p className="mt-8 text-center">
          <span className="mx-auto mt-2 text-sm text-gray-500">
            Copyright © 2020 - 2021
            <Link
              href="#"
              className="mx-2 text-blue-500 hover:text-gray-500"
              rel="noopener noreferrer"
            >
              @unwrappedHQ
            </Link>
            .Since 2020
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
