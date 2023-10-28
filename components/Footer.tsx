import Link from "next/link";
import { Image, Chip } from "@nextui-org/react";
import { Instagram, Github, Twitter } from "lucide-react";

const websiteTech = ["React", "TypeScript", "NextJs", "TailwindCSS", "NextUI"];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto overflow-hidden border-t border-gray-300 px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto mb-4 flex items-center justify-center text-center text-2xl font-bold">
          <Link href="/" className="flex h-fit w-fit justify-center">
            <Image
              src="/images/ik-logo.jpg"
              className="h-10 w-10 rounded-full"
              draggable={false}
              alt="IK logo"
            ></Image>
          </Link>
        </div>
        {/* <div className="mt-5 flex justify-center space-x-6">
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
        </div> */}

        <div className="my-2 flex flex-row justify-center gap-x-2">
          {websiteTech.map((tech, idx) => (
            <div key={idx} className=" flex flex-row">
              <Chip
                variant="shadow"
                size="sm"
                className="bg-stone-400/40 text-xs  font-bold tracking-wide text-slate-700"
              >
                {tech}
              </Chip>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center">
          <span className="mx-auto mt-2 text-sm text-gray-500">
            Made by yours truly,
            <Link
              href="#"
              className="mx-1 text-blue-500 hover:text-gray-500"
              rel="noopener noreferrer"
            >
              Ibrahim Kalam
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
