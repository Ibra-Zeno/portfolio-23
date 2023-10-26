import Link from "next/link";
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

const projArr = [
  {
    name: "Odyssey",
    img: "/images/Bg/cardBg.svg",
    icon: "/images/skillIcons/TS.svg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti molestiae quis dolores provident",
    tech: ["React", "Next.js", "Tailwindcss", "Typescript"],
    link: "/odyssey",
  },
  {
    name: "Optima",
    img: "/images/Bg/cardBg1.png",
    icon: "/images/skillIcons/TS.svg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti molestiae quis dolores provident",
    tech: ["React", "Next.js", "Tailwindcss", "Typescript"],
    link: "/optima",
  },
  {
    name: "Ecommerce Store",
    img: "/images/Bg/cardBg.jpg",
    icon: "/images/skillIcons/TS.svg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti molestiae quis dolores provident",
    tech: ["React", "Next.js", "Tailwindcss", "Typescript"],
    link: "/ecommerce",
  },
  {
    name: "Architectural Portfolio",
    img: "/images/Bg/cardBg.jpg",
    icon: "/images/skillIcons/TS.svg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti molestiae quis dolores provident",
    tech: ["React", "Next.js", "Tailwindcss", "Typescript"],
    link: "/arch",
  },
  {
    name: "AI Summariser",
    img: "/images/Bg/cardBg.jpg",
    icon: "/images/skillIcons/TS.svg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti molestiae quis dolores provident",
    tech: ["React", "Next.js", "Tailwindcss", "Typescript"],
    link: "/summariser",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="mx-auto min-h-screen w-full p-8">
      <h1 className="mx-auto py-12 text-center text-5xl font-bold text-slate-900">
        Projects
      </h1>
      <div className="">
        <Card
          className="mx-auto flex w-full max-w-7xl flex-col flex-wrap justify-center gap-x-6  p-12 px-24"
          isBlurred
        >
          <div className="flex w-full flex-col gap-y-16">
            {projArr.map((proj, idx) => (
              <div
                key={idx}
                className="relative flex w-full flex-grow flex-row justify-center gap-x-12"
              >
                <Card
                  className="group max-w-[20rem]"
                  isPressable
                  isHoverable
                  shadow="lg"
                >
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 aspect-square h-full w-full object-cover"
                    src={proj.img}
                  />
                  <div className="absolute inset-0 flex items-center justify-items-center">
                    <Image
                      removeWrapper
                      src={proj.icon}
                      alt="icon"
                      isBlurred
                      className="mx-auto h-14 w-14 object-cover"
                    />
                  </div>
                </Card>
                <div className="relative flex flex-col justify-start gap-y-12">
                  <div className="">
                    <h3 className="my-4 text-5xl font-bold">{proj.name}</h3>
                    <div className="mb-4 flex flex-row gap-x-2">
                      {proj.tech.map((tech, idx) => (
                        <div key={idx} className="flex flex-row">
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
                    <Divider orientation="horizontal" className="mb-8" />
                    <p className="max-w-xl pb-16 text-lg text-gray-600">
                      {proj.desc}
                    </p>
                  </div>
                  <Link href={proj.link}>
                    <Button
                      className="absolute bottom-10 left-0 w-fit border-2 border-slate-800/30 bg-transparent text-sm font-bold text-slate-800"
                      size="md"
                    >
                      Showcase &rarr;
                    </Button>
                  </Link>
                  {/* <div className="flex flex-row absolute bottom-0 items-center gap-x-4 italic">
                      <Avatar src="https://i.pravatar.cc/200" size="lg" />
                      <p>Lorem ipsum dolor sit </p>
                    </div> */}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Projects;

{
  /* <div className="flex flex-row"> */
}
{
  /* <Card
              className="max-h-[500px] group max-w-xs"
              isPressable
              isHoverable
              shadow="lg"
            >
              <CardHeader className="pb-0 absolute top-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny text-white uppercase font-bold">
                  Daily Mix
                </p>
                <small className="text-white">12 Tracks</small>
                <h4 className="font-bold text-large text-white">
                  Frontend Radio
                </h4>
              </CardHeader>
              {/* <CardBody className="overflow-visible py-2"> */
}
//   <Image
//     removeWrapper
//     alt="Card background"
//     className="object-cover  w-full h-full z-0"
//     src="/images/Bg/cardBg.jpg"
//   />
{
  /* </CardBody> */
}
//       <CardFooter className="absolute transition-all duration-200 ease-in-out bottom-0 flex-col justify-between items-center">
//         <div className="">
//           <h4 className="font-bold text-stone-300 text-center w-full text-lg">
//             Odyssey
//           </h4>
//           <p className="text-sm text-stone-300">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//             Corrupti molestiae quis dolores provident
//           </p>
//         </div>
//       </CardFooter>
//     </Card>
//     <div>
//       <h3>Project name</h3>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Suscipit perferendis nulla, quidem vel vitae eligendi eveniet
//         magnam. Eius ipsa architecto totam. Saepe voluptas modi
//         aspernatur sint praesentium, minus eligendi aliquam.
//       </p>
//     </div>
//   </div>
//   <div>
//     <Card
//       className="py-4"
//       isPressable
//       isHoverable
//       shadow="lg"
//       isFooterBlurred
//     >
//       <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//         <p className="text-tiny uppercase font-bold">Daily Mix</p>
//         <small className="text-default-500">12 Tracks</small>
//         <h4 className="font-bold text-large">Frontend Radio</h4>
//       </CardHeader>
//       <CardBody className="overflow-visible py-2">
//         <Image
//           alt="Card background"
//           className="object-cover rounded-xl"
//           src="/images/projectIndex/shots.png"
//           width={270}
//           height={180}
//         />
//       </CardBody>
//       <CardFooter className="flex-row justify-between items-center">
//         <small className="text-default-500">Spotify</small>
//         <div className="flex flex-row items-center">
//           <small className="text-default-500">4:20</small>
//           <div className="flex flex-row items-center">
//             <small className="text-default-500">4.2k</small>
//             <div className="flex flex-row items-center">
//               <small className="text-default-500">4.2k</small>
//             </div>
//           </div>
//         </div>
//       </CardFooter>
//     </Card>
//   </div>
//   <div>
//     <Card
//       className="py-4"
//       isPressable
//       isHoverable
//       shadow="lg"
//       isFooterBlurred
//     >
//       <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//         <p className="text-tiny uppercase font-bold">Daily Mix</p>
//         <small className="text-default-500">12 Tracks</small>
//         <h4 className="font-bold text-large">Frontend Radio</h4>
//       </CardHeader>
//       <CardBody className="overflow-visible py-2">
//         <Image
//           alt="Card background"
//           className="object-cover rounded-xl"
//           src="/images/projectIndex/shots.png"
//           width={270}
//           height={180}
//         />
//       </CardBody>
//       <CardFooter className="flex-row justify-between items-center">
//         <small className="text-default-500">Spotify</small>
//         <div className="flex flex-row items-center">
//           <small className="text-default-500">4:20</small>
//           <div className="flex flex-row items-center">
//             <small className="text-default-500">4.2k</small>
//             <div className="flex flex-row items-center">
//               <small className="text-default-500">4.2k</small>
//             </div>
//           </div>
//         </div>
//       </CardFooter>
//     </Card>
//   </div>
//   <div>
//     <Card
//       className="py-4"
//       isPressable
//       isHoverable
//       shadow="lg"
//       isFooterBlurred
//     >
//       <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//         <p className="text-tiny uppercase font-bold">Daily Mix</p>
//         <small className="text-default-500">12 Tracks</small>
//         <h4 className="font-bold text-large">Frontend Radio</h4>
//       </CardHeader>
//       <CardBody className="overflow-visible py-2">
//         <Image
//           alt="Card background"
//           className="object-cover rounded-xl"
//           src="/images/projectIndex/shots.png"
//           width={270}
//           height={180}
//         />
//       </CardBody>
//       <CardFooter className="flex-row justify-between items-center">
//         <small className="text-default-500">Spotify</small>
//         <div className="flex flex-row items-center">
//           <small className="text-default-500">4:20</small>
//           <div className="flex flex-row items-center">
//             <small className="text-default-500">4.2k</small>
//             <div className="flex flex-row items-center">
//               <small className="text-default-500">4.2k</small>
//             </div>
//           </div>
//         </div>
//       </CardFooter>
//     </Card>
//   </div>
//   <div>
//     <Card
//       className="py-4"
//       isPressable
//       isHoverable
//       shadow="lg"
//       isFooterBlurred
//     >
//       <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//         <p className="text-tiny uppercase font-bold">Daily Mix</p>
//         <small className="text-default-500">12 Tracks</small>
//         <h4 className="font-bold text-large">Frontend Radio</h4>
//       </CardHeader>
//       <CardBody className="overflow-visible py-2">
//         <Image
//           alt="Card background"
//           className="object-cover rounded-xl"
//           src="/images/projectIndex/shots.png"
//           width={270}
//           height={180}
//         />
//       </CardBody>
//       <CardFooter className="flex-row justify-between items-center">
//         <small className="text-default-500">Spotify</small>
//         <div className="flex flex-row items-center">
//           <small className="text-default-500">4:20</small>
//           <div className="flex flex-row items-center">
//             <small className="text-default-500">4.2k</small>
//             <div className="flex flex-row items-center">
//               <small className="text-default-500">4.2k</small>
//             </div>
//           </div>
//         </div>
//       </CardFooter>
//     </Card>
//   </div> */}
