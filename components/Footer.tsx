import Link from "next/link";
import { Image } from "@nextui-org/react";
import { Instagram, Github, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex items-center justify-center text-center text-2xl font-bold">
          <Link href="/" className="flex h-fit w-fit justify-center">
            <Image
              src="/images/ik-logo.jpg"
              className="h-10 w-10 rounded-full"
              alt="IK logo"
            ></Image>
          </Link>
        </div>
        <div className="mt-4 flex justify-center space-x-6">
          <span className="m-auto inline-flex w-full justify-center gap-3 md:w-auto md:justify-start">
            <Link
              href="#"
              className="h-6 w-6 fill-black transition hover:text-blue-500"
            >
              <span className="sr-only">github</span>
              <Github />
            </Link>
            <Link
              href="#"
              className="h-6 w-6 fill-black transition hover:text-blue-500"
            >
              <span className="sr-only">twitter</span>
              <Twitter />
            </Link>
            <Link
              href="#"
              className="h-6 w-6 fill-black transition hover:text-blue-500"
            >
              <span className="sr-only">Instagram</span>
              <Instagram />
            </Link>
          </span>
        </div>
        <p className="mt-3 text-center">
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
