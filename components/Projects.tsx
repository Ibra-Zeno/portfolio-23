import Link from "next/link";
import {
  OrbitIcon,
  TrafficCone,
  Gem,
  BrainCircuit,
  Blocks,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Chip,
  Button,
  Avatar,
  Divider,
} from "@nextui-org/react";

export const projArr = [
  {
    id: 1,
    name: "Odyssey",
    img: "/images/projectPage/odyssey.png",
    icon: <OrbitIcon />,
    desc: "A blog web application eith user Authentication allowing users to create, like, edit, comment on and delete posts.",
    tech: [
      "React",
      "TypeScript",
      "NextAuth",
      "TailwindCSS",
      "NextJs",
      "QuillJs",
      "Vercel",
      "PostgreSQL",
      "Prisma",
    ],
    link: "/odyssey",
  },
  {
    id: 2,
    name: "Optima",
    img: "/images/projectPage/optima.png",
    icon: <TrafficCone />,
    desc: "Showcase of a professional business website made for a project and construction planner.",
    tech: ["HTML", "TailwindCSS", "JavaScript"],
    link: "/optima",
  },
  {
    id: 3,
    name: "E-commerce Store",
    img: "/images/projectPage/ecommerce.png",
    icon: <Gem />,
    desc: "An E-commerce store focusing on functionality and ease of use, including a live payment process.",
    tech: [
      "React",
      "JavaScript",
      "Stripe",
      "TypeScript",
      "Sanity",
      "TailwindCSS",
      "NextJs",
      "Vercel",
      "Canvas-Confetti",
    ],
    link: "/ecommerce",
  },
  {
    id: 4,
    name: "Designer Portfolio",
    img: "/images/projectPage/arch.png",
    icon: <Blocks />,
    desc: "Architectural portfolio website for a client, showcasing their previous works and skills.",
    tech: [
      "NextJS",
      "React",
      "TypeScript",
      "TailwindCSS",
      "lucide",
      "NextUI",
      "popmotion",
      "FramerMotion",
    ],
    link: "/arch",
  },
  {
    id: 5,
    name: "AI Summariser",
    img: "/images/projectPage/sum.png",
    icon: <BrainCircuit />,
    desc: "An web application utilising OpenAi's GPT-3 API to summarise text from a given URL.",
    tech: ["React", "Redux", "JavaScript", "Vite", "TailwindCSS"],
    link: "/summariser",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-7xl rounded-lg ">
      <div className="rounded-lg p-4 xs:p-8">
        <h1 className="mb-20 text-center text-3xl font-bold ">Projects</h1>
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-16">
          {projArr.map((proj, idx) => (
            <div
              key={idx}
              className="from-card1 to-card2 relative mx-auto flex w-fit flex-col justify-center justify-items-center gap-x-12 rounded-lg bg-gradient-to-br p-10 shadow-xl lg:flex-row"
            >
              <Image
                removeWrapper
                alt="Card background"
                loading="lazy"
                className="z-0 mx-auto aspect-square h-full w-full max-w-[20rem] object-cover"
                src={proj.img}
              />
              <div className="relative flex flex-col justify-start gap-y-12">
                <div className="w-fit">
                  <h3 className="mb-3 py-2 text-center text-3xl font-extrabold text-sec dark:text-acc  lg:text-left">
                    {proj.name}
                  </h3>
                  <div className="mb-4 flex max-w-lg flex-row flex-wrap justify-center gap-x-2 gap-y-2 lg:justify-start">
                    {proj.tech.map((tech, idx) => (
                      <div
                        key={idx}
                        className="rounded-full bg-[#707a6b] dark:bg-[#707a6b]/30"
                      >
                        <Chip
                          size="sm"
                          variant="solid"
                          className=" bg-[#707a6b] text-xs !font-extrabold tracking-wider text-gray-100 shadow-lg dark:bg-[#707a6b]/30"
                        >
                          {tech}
                        </Chip>
                      </div>
                    ))}
                  </div>
                  <Divider
                    orientation="horizontal"
                    className="mb-8 bg-acc/50"
                  />
                  <p className="mx-auto max-w-md pb-16 text-center text-sm  md:text-base  lg:max-w-xl lg:text-left lg:text-lg">
                    {proj.desc}
                  </p>
                </div>
                <Link href={proj.link} className="w-full">
                  <Button
                    className=" bg-show1 absolute inset-x-0 bottom-10 mx-auto w-fit text-sm font-bold text-white lg:left-0 lg:mx-0"
                    size="md"
                    color="primary"
                  >
                    Showcase &rarr;
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
