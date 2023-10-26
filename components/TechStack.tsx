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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolore illo, quasi corrupti debitis ipsam. Perferendis harum officia non blanditiis, aspernatur magni praesentium inventore illo fuga rem tenetur voluptatem excepturi?",
  },
  {
    icon: "/images/Icons/database-zap.svg",
    name: "Back-End",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolore illo, quasi corrupti debitis ipsam. Perferendis harum officia non blanditiis, aspernatur magni praesentium inventore illo fuga rem tenetur voluptatem excepturi?",
  },
  {
    icon: "/images/Icons/design.svg",
    name: "UI/UX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolore illo, quasi corrupti debitis ipsam. Perferendis harum officia non blanditiis, aspernatur magni praesentium inventore illo fuga rem tenetur voluptatem excepturi?",
  },
];

const TechStack: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-8 py-16 md:px-12 lg:flex lg:px-16">
        <div className="lg:w-1/2 ">
          <div className="top-0 pb-16 pt-8">
            <div className="mx-auto grid w-full grid-cols-3 justify-items-center gap-y-12  md:pr-12 lg:pr-24 ">
              {TechIcons.map((icon, idx) => (
                <div
                  key={idx}
                  className="flex  flex-col items-center rounded-full text-black"
                >
                  <div className="rounded-full bg-gray-100 p-2.5 shadow-sm">
                    <Image
                      src={icon.icon}
                      alt={icon.name}
                      isBlurred
                      draggable={false}
                      className="xs:w-16 w-12 p-2"
                      height={100}
                      width={100}
                    />
                  </div>
                  <p className="mt-3.5 text-sm font-bold leading-6 text-stone-800">
                    {icon.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className=" h-full pb-16 pt-8 ">
            <ul
              className="top-24 mt-6 grid list-none grid-cols-1 gap-12 lg:mt-0 lg:gap-24"
              role="list"
            >
              {skillsArr.map((skill, idx) => (
                <li key={idx}>
                  <div className="flex flex-row items-center gap-x-6 align-middle">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-black">
                      <Image
                        src={skill.icon}
                        alt="React icon"
                        height={30}
                        className="p-1.5"
                        width={40}
                      ></Image>
                    </div>
                    <p className="text-lg font-bold leading-6 text-black">
                      {skill.name}
                    </p>
                  </div>
                  <div className="mt-4 pl-1 pr-5 text-base text-gray-500">
                    {skill.description}
                  </div>
                </li>
              ))}
              {/* You can also map over an array if these items are repetitive */}
              {/* This is just a single item as an example */}
              {/* <li>
                <div className="flex flex-row items-center gap-x-6 align-middle">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-black">
                    <DatabaseZap />
                  </div>
                  <p className="text-lg font-bold leading-6 text-black">
                    Tools for every stack
                  </p>
                </div>
                <div className="mt-4 pl-1 pr-5 text-base text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem dolore illo, quasi corrupti debitis ipsam. Perferendis
                  harum officia non blanditiis, aspernatur magni praesentium
                  inventore illo fuga rem tenetur voluptatem excepturi?
                </div>
              </li>
              <li>
                <div className="flex flex-row items-center gap-x-6 align-middle">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-black">
                    <Image
                      src="/images/Icons/React.svg"
                      alt="React icon"
                      height={30}
                      className="p-1.5"
                      width={40}
                    ></Image>
                  </div>
                  <p className="text-lg font-bold leading-6 text-black">
                    Tools for every stack
                  </p>
                </div>
                <div className="mt-4 pl-1 pr-5 text-base text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem dolore illo, quasi corrupti debitis ipsam. Perferendis
                  harum officia non blanditiis, aspernatur magni praesentium
                  inventore illo fuga rem tenetur voluptatem excepturi?
                </div>
              </li>
              <li>
                <div className="flex flex-row items-center gap-x-6 align-middle">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-black">
                    <Brush />
                  </div>
                  <p className="text-lg font-bold leading-6 text-black">
                    Tools for every stack
                  </p>
                </div>
                <div className="mt-4 pl-1 pr-5 text-base text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem dolore illo, quasi corrupti debitis ipsam. Perferendis
                  harum officia non blanditiis, aspernatur magni praesentium
                  inventore illo fuga rem tenetur voluptatem excepturi?
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
