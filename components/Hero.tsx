import { Button } from "@nextui-org/react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden before:absolute before:left-1/2 before:top-0 before:-z-[1] before:h-full before:w-full before:-translate-x-1/2 before:transform before:bg-cover before:bg-top before:bg-no-repeat">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white p-1 pl-3 text-sm text-gray-800 transition hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-600"
          >
            PRO release - Join to waitlist
          </Link>
        </div>

        <div className="mx-auto mt-5 max-w-2xl text-center">
          <h1 className="block text-4xl font-extrabold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-6xl">
            Let&apos;s Build{" "}
            <span className="bg-gradient-to-tl from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Together
            </span>
          </h1>
        </div>

        <div className="mx-auto mt-5 max-w-3xl text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo aut
            voluptatem reiciendis.
          </p>
        </div>

        <div className="mt-8 grid w-full gap-3 sm:inline-flex sm:justify-center">
          <Link href="#">
            <Button className="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-medium text-white hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800">
              Get started
            </Button>
          </Link>

          <Link href="#">
            <Button className="group relative inline-flex items-center justify-center gap-x-3.5 rounded-md border bg-white p-2 pl-4 text-center font-mono text-sm font-medium shadow-sm transition hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-800 dark:bg-slate-900 dark:text-white dark:shadow-slate-700/[.7] dark:hover:border-gray-600 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
              $ say Hello!
            </Button>
          </Link>
        </div>

        <div className="mt-5 flex items-center justify-center gap-x-1 sm:gap-x-3">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Package Manager:
          </span>
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            big
          </span>
          <Link
            href="#"
            className="inline-flex items-center gap-x-1.5 text-sm font-medium text-blue-600 decoration-2 hover:underline"
          >
            Stop, Drop and Roll
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
