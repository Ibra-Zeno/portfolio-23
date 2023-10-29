import Link from "next/link";
import React from "react";
import { Image } from "@nextui-org/react";
import { Brush, DatabaseZap } from "lucide-react";

const TechIcons = [
  {
    name: "TypeScript",
    icon: "/images/skillIcons/TS.svg",
  },
  {
    name: "JavaScript",
    icon: "/images/skillIcons/JS.svg",
  },
  {
    name: "React",
    icon: "/images/skillIcons/React.svg",
  },
  {
    name: "NextJs",
    icon: "/images/skillIcons/nextjs.svg",
  },
  {
    name: "Prisma",
    icon: "/images/skillIcons/prisma.svg",
  },
  {
    name: "NodeJs",
    icon: "/images/skillIcons/nodejs.svg",
  },
  {
    name: "PostgreSQL",
    icon: "/images/skillIcons/postgres.svg",
  },
  {
    name: "TailwindCSS",
    icon: "/images/skillIcons/tailwind.svg",
  },
  {
    name: "Sanity",
    icon: "/images/skillIcons/sanity.svg",
  },
  {
    name: "HTML5",
    icon: "/images/skillIcons/html.svg",
  },
  {
    name: "CSS",
    icon: "/images/skillIcons/css.svg",
  },
  {
    name: "Redux",
    icon: "/images/skillIcons/redux.svg",
  },
  {
    name: "SCSS",
    icon: "/images/skillIcons/scss.svg",
  },
  {
    name: "Git",
    icon: "/images/skillIcons/git.svg",
  },
  {
    name: "ExpressJs",
    icon: "/images/skillIcons/expressjs.svg",
  },
];

const skillsArr = [
  {
    icon: "/images/Icons/React.svg",
    name: "Front-End",
    description:
      "With years of experience building responsive client-side experiences, I create accessible web interfaces that are optimised for all devices. I bring visual designs to life on the frontend using modern technologies and best practices for performance and SEO.",
  },
  {
    icon: "/images/Icons/database-zap.svg",
    name: "Back-End",
    description:
      " I build efficient server-side logic to power applications, integrating seamlessly with databases and third-party services. With expertise in APIs and microservices, I develop robust and scalable backends to handle complex data and traffic demands.",
  },
  {
    icon: "/images/Icons/design.svg",
    name: "UI/UX",
    description:
      "Using design theory and user-centered methodologies, I conceptualise and design interfaces focused on aesthetics, simplicity and ease of use. My designs enhance user experiences through intuitive flows and interactions that balance business goals, technical capabilities and human needs.",
  },
];

const TechStack: React.FC = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-8 py-8 md:px-12 lg:flex lg:px-16">
        <div className="lg:w-1/2 ">
          <div className="top-0  pb-16 pt-8">
            <div className="mx-auto md:pr-12 lg:pr-24 ">
              <div className="grid w-full grid-cols-3 justify-items-center gap-y-12 rounded-lg py-3">
                {TechIcons.map((icon, idx) => (
                  <div
                    key={idx}
                    className="flex  flex-col items-center rounded-full "
                  >
                    <div className="rounded-full bg-gray-100 p-2.5 shadow-2xl">
                      <Image
                        src={icon.icon}
                        alt={icon.name}
                        isBlurred
                        draggable={false}
                        className="w-12 p-2 xs:w-16"
                        height={100}
                        width={100}
                      />
                    </div>
                    <p className="mt-3.5 text-xs font-bold leading-6 md:text-sm">
                      {icon.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className=" h-full pb-16 pt-8 ">
            <ul
              className="top-24 mt-6 grid list-none grid-cols-1 gap-12 py-3 lg:mt-0 lg:gap-20"
              role="list"
            >
              {skillsArr.map((skill, idx) => (
                <li
                  key={idx}
                  className="rounded-lg border border-main/80 bg-sec/95 px-5 py-4 text-gray-200 shadow-lg dark:bg-main "
                >
                  <div className="flex flex-row items-center gap-x-6 align-middle">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-acc ">
                      <Image
                        src={skill.icon}
                        alt="React icon"
                        height={30}
                        className="p-1.5 "
                        width={40}
                      ></Image>
                    </div>
                    <p className="w-full border-b border-b-acc/60 pb-1 text-base font-bold leading-6  md:text-lg">
                      {skill.name}
                    </p>
                  </div>
                  <div className="mt-4 pl-1 pr-5 text-sm !leading-7 tracking-wide md:text-base">
                    {skill.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
