import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Avatar,
} from "@nextui-org/react";

const projArr = [
  {
    name: "Odyssey",
    img: "/images/Bg/cardBg.jpg",
    icon: "/images/skillsIcon/TS.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti molestiae quis dolores provident",
    tech: ["React", "Next.js", "Tailwindcss", "Typescript"],
  },
  {
    name: "Odyssey",
    img: "/images/Bg/cardBg.jpg",
    icon: "/images/skillsIcon/TS.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti molestiae quis dolores provident",
    tech: ["React", "Next.js", "Tailwindcss", "Typescript"],
  },
  {
    name: "Odyssey",
    img: "/images/Bg/cardBg.jpg",
    icon: "/images/skillsIcon/TS.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti molestiae quis dolores provident",
    tech: ["React", "Next.js", "Tailwindcss", "Typescript"],
  },
  {
    name: "Odyssey",
    img: "/images/Bg/cardBg.jpg",
    icon: "/images/skillsIcon/TS.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti molestiae quis dolores provident",
    tech: ["React", "Next.js", "Tailwindcss", "Typescript"],
  },
  {
    name: "Odyssey",
    img: "/images/Bg/cardBg.jpg",
    icon: "/images/skillsIcon/TS.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti molestiae quis dolores provident",
    tech: ["React", "Next.js", "Tailwindcss", "Typescript"],
  },
];

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen mt-12 w-full mx-auto bg-gradient-to-tr from-rose-950 p-8 to-sky-950">
      <h1 className="text-3xl mx-auto text-center font-bold py-5">Projects</h1>
      <div className="">
        <Card
          className="w-full max-w-7xl mx-auto flex flex-col p-12 flex-wrap gap-x-6 gap-y-12 px-36 justify-center"
          isBlurred
        >
          {projArr.map((proj, idx) => (
            <div key={idx} className="flex flex-row gap-x-12">
              <Card
                className="h-[450px] w-[370px] group max-w-xs"
                isPressable
                isHoverable
                shadow="lg"
              >
                <Image
                  removeWrapper
                  alt="Card background"
                  className="object-cover  w-full h-full z-0"
                  src="/images/Bg/cardBg.jpg"
                />
              </Card>
              <div className="flex relative flex-col justify-center gap-y-12">
                <div className="flex gap-x-4 absolute top-0 ">
                  {proj.tech.map((tech, idx) => (
                    <div key={idx} className="flex flex-row">
                      <Button
                        variant="shadow"
                        className="font-bold bg-gradient-to-r from-[#005872] via-[#00848a] to-[#15b18a]  text-white text-xs tracking-wide"
                      >
                        {tech}
                      </Button>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-5xl mb-6 font-bold">{proj.name}</h3>
                  <p className="text-gray-600 text-lg">{proj.desc}</p>
                </div>
                <Button className="w-fit" size="lg">
                  Showcase &rarr;
                </Button>
                {/* <div className="flex flex-row absolute bottom-0 items-center gap-x-4 italic">
                  <Avatar src="https://i.pravatar.cc/200" size="lg" />
                  <p>Lorem ipsum dolor sit </p>
                </div> */}
              </div>
            </div>
          ))}
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
