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
    name: "TypeScript",
    icon: "/images/skillIcons/TS.svg",
  },
  {
    name: "TypeScript",
    icon: "/images/skillIcons/TS.svg",
  },
  {
    name: "TypeScript",
    icon: "/images/skillIcons/TS.svg",
  },
  {
    name: "TypeScript",
    icon: "/images/skillIcons/TS.svg",
  },
  {
    name: "TypeScript",
    icon: "/images/skillIcons/TS.svg",
  },
  {
    name: "TypeScript",
    icon: "/images/skillIcons/TS.svg",
  },
];

const TechStack: React.FC = () => {
  return (
    <section
      aria-labelledby="feature-five"
      id="feature-five"
      className="overflow-y-auto bg-white lg:h-screen"
    >
      <div className="px-8 py-24 mx-auto lg:px-16 max-w-7xl md:px-12 lg:flex">
        <div className="lg:w-1/2 ">
          <div className="top-0 pt-8 pb-16 lg:sticky">
            <div className="lg:pr-24 md:pr-12 grid grid-cols-3 gap-y-12 mx-auto  justify-items-center w-full ">
              {TechIcons.map((icon, idx) => (
                <div
                  key={idx}
                  className="flex  items-center flex-col text-black rounded-full"
                >
                  <div className="rounded-full bg-gray-100 p-3.5 shadow-sm">
                    <Image
                      src={icon.icon}
                      alt={icon.name}
                      isBlurred
                      className="p-3 w-20"
                      height={100}
                      width={100}
                    />
                  </div>
                  <p className="mt-5 text-sm font-bold leading-6 text-stone-800">
                    {icon.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="flex-shrink-0">
            <ul
              className="grid grid-cols-1 gap-12 mt-6 list-none lg:mt-0 lg:gap-24"
              role="list"
            >
              {/* You can also map over an array if these items are repetitive */}
              {/* This is just a single item as an example */}
              <li>
                <div className="flex flex-row gap-x-6 items-center align-middle">
                  <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
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
                <div className="flex flex-row gap-x-6 items-center align-middle">
                  <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
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
                <div className="flex flex-row gap-x-6 items-center align-middle">
                  <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
