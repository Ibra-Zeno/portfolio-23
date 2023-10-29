import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import { Github } from "lucide-react";
import { contactIcons } from "./Contact";

const Hero: React.FC = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-12 lg:px-24 lg:py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center">
          <div className="mx-auto mb-8 flex flex-col items-start text-left md:mb-0 lg:mb-16 lg:w-1/2 lg:flex-grow lg:pr-6 xl:mt-0 xl:pr-24">
            <h4 className="mx-auto mb-6 rounded-lg border border-sec bg-[#654E30]/75 px-2 py-1 text-sm text-gray-100 shadow-lg dark:border-main dark:bg-main/30 lg:mx-0 ">
              Welcome to my digital landscape 🍃
            </h4>
            <div className="flex flex-col py-6 pt-2">
              <h2 className="w-full text-center text-3xl font-bold tracking-tight  md:text-4xl lg:text-left lg:text-5xl xl:text-6xl">
                Hey, I&apos;m{" "}
                <span className="dark:from-pop1 dark:to-pop2 from-pop1 to-pop2 bg-gradient-to-r bg-clip-text text-transparent">
                  {/* dark:from-[#00c6af] dark:to-[#258579] */}
                  Ibrahim
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-prose text-center text-base leading-7 md:text-lg lg:text-left">
                I&apos;m a full-stack developer of 3 years, focusing on
                front-end, based in London. With a degree in Physics, I&apos;ve
                turned to creating projects and of design theory. Beyond the
                code, I enjoy cycling and Brazilian Jiu-Jitsu.
              </p>
            </div>
            <div className="mx-auto mb-8 mt-6 flex w-full justify-center gap-x-6 lg:justify-start">
              {contactIcons.map((icon, i) => (
                <Link
                  key={i}
                  href={icon.href || ""}
                  target="_blank"
                  aria-label={icon.name}
                  className="rounded-xl border border-[#adb13a]/80 bg-[#697b70] p-2 text-background shadow-xl backdrop-blur-sm transition-all duration-200 ease-in-out dark:border-sec dark:bg-main/10 dark:text-foreground"
                >
                  {icon.icons}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full rounded-xl lg:w-1/2 lg:max-w-lg">
            <div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative rounded-3xl">
                  <Image
                    className="mx-auto hidden  object-cover object-center mix-blend-exclusion dark:block "
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
