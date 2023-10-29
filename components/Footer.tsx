import Link from "next/link";
import { Image, Chip } from "@nextui-org/react";
import { Instagram, Github, Twitter } from "lucide-react";

const websiteTech = ["React", "TypeScript", "NextJs", "TailwindCSS", "NextUI"];

const Footer: React.FC = () => {
  return (
    <footer className=" backdrop-blur-sm">
      <div className="mx-auto overflow-hidden border-t px-4 pb-7 pt-4 sm:px-6 lg:px-8">
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

        <div className="my-3.5 flex flex-row justify-center gap-x-2">
          {websiteTech.map((tech, idx) => (
            <div key={idx} className=" flex flex-row">
              <Chip
                variant="shadow"
                size="sm"
                className="bg-[#707a6b] text-xs font-bold tracking-wide text-gray-100 dark:bg-[#707a6b]/30"
              >
                {tech}
              </Chip>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center">
          <span className="mx-auto mt-2 text-sm ">
            Made by yours truly, Ibrahim Kalam
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
