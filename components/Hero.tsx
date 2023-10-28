import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import { Github } from "lucide-react";
import { contactIcons } from "./Contact";

const Hero: React.FC = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-12 lg:px-24 lg:py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center">
          <div className="mx-auto mb-8 flex flex-col items-start text-left md:mb-0 lg:mb-16 lg:w-1/2 lg:flex-grow lg:pr-6 xl:mt-0 xl:pr-24">
            <h4 className="dark:border-main dark:bg-main/30 mb-4 rounded-lg py-1 text-sm dark:border-1 dark:px-2 ">
              Welcome to my digital landscape 🍃
            </h4>
            <h2 className="w-full text-center text-3xl font-bold tracking-tight  md:text-4xl lg:text-left lg:text-5xl xl:text-6xl">
              Hey, I&apos;m{" "}
              <span className="from-main to-acc dark:from-acc dark:to-sec bg-gradient-to-r bg-clip-text text-transparent">
                Ibrahim
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-prose text-center text-base leading-7 md:text-lg lg:text-left">
              I&apos;m a full-stack developer of 3 years, focusing on front-end,
              based in London. With a degree in Physics, I&apos;ve turned to
              creating projects and of design theory. Beyond the code, I enjoy
              cycling and Brazilian Jiu-Jitsu.
            </p>
            <div className="mx-auto mb-8 mt-8 flex w-full justify-center gap-x-6 lg:justify-start">
              {contactIcons.map((icon, i) => (
                <Link
                  key={i}
                  href={icon.href}
                  aria-label={icon.name}
                  className="dark:bg-sec bg-sec dark:text-acc rounded-xl p-2 transition-all duration-200 ease-in-out"
                >
                  {icon.icons}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full rounded-xl lg:w-1/2 lg:max-w-lg">
            <div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative">
                  <Image
                    className="mx-auto hidden rounded-lg object-cover object-center mix-blend-exclusion dark:block "
                    alt="hero"
                    draggable={false}
                    src="/images/Bg/HeroDark.jpg"
                  />
                  <Image
                    className="mx-auto rounded-lg object-cover object-center mix-blend-multiply dark:hidden "
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
