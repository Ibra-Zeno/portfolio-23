import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Image } from "@nextui-org/react";

const Hero: React.FC = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-12 lg:px-24 lg:py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center">
          <div className="mb-8 flex flex-col items-start text-left md:mb-0 lg:mb-16 lg:w-1/2 lg:flex-grow lg:pr-6 xl:mt-0 xl:pr-24">
            <span className="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
              {" "}
              Your tagline{" "}
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hey, I&apos;m Ibrahim
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-700">
              I&apos;m a full-stack developer of 3 years, focusing on front-end,
              based in London. With a degree in Physics, I&apos;ve turned to
              creating projects and of design theory. Beyond the code, I enjoy
              cycling and Brazilian Jiu-Jitsu.
            </p>
          </div>
          <div className="w-full rounded-xl lg:w-1/2 lg:max-w-lg">
            <div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative">
                  <Image
                    className="mx-auto rounded-lg object-cover object-center"
                    alt="hero"
                    draggable={false}
                    src="/images/Bg/Beary.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
