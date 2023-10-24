import { Button } from "@nextui-org/react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200"
          >
            PRO release - Join to waitlist
          </Link>
        </div>

        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-extrabold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            Let&apos;s Build{" "}
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              Together
            </span>
          </h1>
        </div>

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo aut
            voluptatem reiciendis.
          </p>
        </div>

        <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
          <Link href="#">
            <Button className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800">
              Get started
            </Button>
          </Link>

          <Link href="#">
            <Button className="relative group inline-flex justify-center items-center gap-x-3.5 text-center bg-white border hover:border-gray-300 shadow-sm font-mono text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition p-2 pl-4 dark:bg-slate-900 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
              $ say Hello!
            </Button>
          </Link>
        </div>

        <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Package Manager:
          </span>
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            big
          </span>
          <Link
            href="#"
            className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
          >
            Stop, Drop and Roll
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
