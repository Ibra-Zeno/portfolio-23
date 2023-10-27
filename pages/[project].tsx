import { portfolioData, projectOrder } from "@/lib/portfolioData";
import { useRouter } from "next/router";
import { Sparkle, Radio, Code2 } from "lucide-react";
import { Spinner, Image, Chip, Button, ButtonGroup } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";

const Project: React.FC = () => {
  const router = useRouter();
  const { project } = router.query;

  const [isLoading, setIsLoading] = useState(true);

  // Set isLoading to false on initial page load
  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (typeof project !== "string") {
    return isLoading ? (
      <div className="relative grid h-screen w-screen">
        <Spinner
          size="lg"
          label="Loading..."
          className="mx-auto"
          color="primary"
        />
      </div>
    ) : null;
  }

  const projectId = projectOrder.indexOf(project as string);
  const projectData = portfolioData[project as keyof typeof portfolioData];

  const previousProject =
    projectId > 0 ? projectOrder[projectId - 1] : projectOrder[projectId];
  const nextProject =
    projectId < projectOrder.length - 1
      ? projectOrder[projectId + 1]
      : projectOrder[projectId];

  const navigateToProject = (projectId: string) => {
    router.push(`/${projectId}`);
  };
  const handleOpenLink = (url: string) => {
    // Open the link in a new tab or window
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-3xl px-4 py-16 pb-12 sm:px-6 lg:px-8 lg:py-4">
        <div className="max-w-2xl">
          <div className="">
            <div className="gap-y-1">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {projectData.title}
              </h2>
              <p className="mt-1 bg-gradient-to-r from-[#C33764] to-[#1D2671] bg-clip-text text-base font-semibold leading-7 text-transparent">
                {projectData.tagline}
              </p>

              <p className="mb-8 mt-3 flex text-xl leading-8 text-gray-700">
                {projectData.overview}
              </p>
              {projectData.quote !== null && (
                <blockquote className="mb-6 rounded-lg border-x-4 border-x-green-300 bg-gray-100 p-4 text-left text-base font-bold tracking-wide text-gray-700 sm:px-7 md:leading-normal xl:leading-8">
                  {projectData.quote}
                </blockquote>
              )}
            </div>

            <figure>
              <Link href={projectData.website}>
                <Image
                  className="w-full rounded-xl object-cover"
                  src={projectData.img1}
                  alt="Image Description"
                />
              </Link>
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                <div className="flex flex-row flex-wrap justify-center gap-x-2 gap-y-2 rounded-full">
                  {projectData.tech.map((tech, idx) => (
                    <div key={idx} className=" rounded-full bg-gray-100">
                      <Chip
                        size="sm"
                        className="m-1 bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text !font-bold text-transparent hover:bg-gray-200"
                        color="primary"
                        variant="light"
                      >
                        {tech}
                      </Chip>
                    </div>
                  ))}
                </div>
              </figcaption>
            </figure>
            <section className="mb-16 flex flex-col">
              <h3 className="mb-2 mt-6 text-2xl font-semibold">Features</h3>
              {projectData.featuresIntro()}
              <ul
                role="list"
                className=" flex flex-col gap-y-8 border-l-2  border-l-green-600/40  pl-4 text-sm leading-7 text-gray-600 sm:grid sm:grid-cols-2 sm:text-base"
              >
                {projectData.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex h-fit w-fit max-w-[30ch] gap-x-3"
                  >
                    <Sparkle
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <h3 className="mb-3 text-2xl font-semibold">
              {projectData.mainTitle}
            </h3>

            <div className="text-base leading-7 text-gray-700">
              {projectData.main()}
            </div>

            {/* Navigation Buttons */}
            <div className="sticky inset-x-0 bottom-6 z-30 text-center lg:bottom-12">
              <ButtonGroup className="md:hidden">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] font-bold text-stone-50 hover:text-stone-300"
                  onClick={() => handleOpenLink(projectData.website)}
                  color="primary"
                  variant="shadow"
                >
                  <Radio />
                  Live
                </Button>
                <Button
                  size="sm"
                  className="font-sans tracking-wide"
                  startContent={<Code2 strokeWidth={1.7} />}
                  onClick={() => handleOpenLink(projectData.github)}
                >
                  Source
                </Button>
              </ButtonGroup>
              <ButtonGroup className="hidden md:block">
                <Button
                  size="md"
                  color="primary"
                  className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] font-bold text-stone-50 hover:text-stone-300"
                  variant="shadow"
                  onClick={() => handleOpenLink(projectData.website)}
                  startContent={<Radio />}
                >
                  Live
                </Button>
                <Button
                  size="md"
                  className="bg-gray-200/40 font-bold text-gray-700 backdrop-blur-3xl hover:text-gray-900"
                  onClick={() => handleOpenLink(projectData.github)}
                  variant="faded"
                  startContent={<Code2 />}
                >
                  Source
                </Button>
              </ButtonGroup>
            </div>
            <div
              className={`mt-8 flex ${
                projectId !== 0 && projectId !== projectOrder.length - 1
                  ? "justify-between"
                  : "justify-center"
              }`}
            >
              {projectId > 0 && (
                <Button
                  size={"lg"}
                  className="bg-gray-200 px-6 pb-2 pt-2 text-sm font-bold text-slate-800 hover:text-slate-950 md:text-lg"
                  onClick={() => navigateToProject(previousProject)}
                >
                  Previous Project
                </Button>
              )}
              {projectId < projectOrder.length - 1 && (
                <Button
                  size="lg"
                  className="bg-gray-200 font-sans font-bold text-slate-800 hover:text-slate-950 md:text-lg"
                  onClick={() => navigateToProject(nextProject)}
                >
                  Next Project
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* Live and code btns */}
      <Footer />
    </>
  );
};

export default Project;

/* Small title
<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  No server? No problem.
                </h2> 
/top square bg
<div className="absolute inset-0 -z-10 overflow-hidden">
    <svg
    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
    aria-hidden="true"
    >
    <defs>
        <pattern
        id="e813992c-7d03-4cc4-a2bd-151760b470a0"
        width={200}
        height={200}
        x="50%"
        y={-1}
        patternUnits="userSpaceOnUse"
        >
        <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
    </defs>
    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
        <path
        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
        strokeWidth={0}
        />
    </svg>
    <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
    />
    </svg>
</div>

 List                 
<ul role="list" className="mt-8 space-y-8 text-gray-600">
    <li className="flex gap-x-3">
    <UploadCloud
        className="mt-1 h-5 w-5 flex-none text-indigo-600"
        aria-hidden="true"
    />
    <span>
        <strong className="font-semibold text-gray-900">
        Push to deploy.
        </strong>{" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Maiores impedit perferendis suscipit eaque, iste dolor
        cupiditate blanditiis ratione.
    </span>
    </li>
    <li className="flex gap-x-3">
    <UploadCloud
        className="mt-1 h-5 w-5 flex-none text-indigo-600"
        aria-hidden="true"
    />
    <span>
        <strong className="font-semibold text-gray-900">
        SSL certificates.
        </strong>{" "}
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
        irure qui lorem cupidatat commodo.
    </span>
    </li>
    <li className="flex gap-x-3">
    <UploadCloud
        className="mt-1 h-5 w-5 flex-none text-indigo-600"
        aria-hidden="true"
    />
    <span>
        <strong className="font-semibold text-gray-900">
        Database backups.
        </strong>{" "}
        Ac tincidunt sapien vehicula erat auctor pellentesque
        rhoncus. Et magna sit morbi lobortis.
    </span>
    </li>
</ul>*/

{
  /* <div className="mx-auto max-w-screen-sm px-4 md:px-8">
        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated. It may be used to display a
          sample of fonts or generate text for testing. Filler text is dummy
          text which has no meaning however looks very similar to real text. The
          important factor when using filler text is that the text looks
          realistic otherwise it will not look very good.
          <br />
          <br />
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is{" "}
          <Link
            href="#"
            className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
          >
            random
          </Link>{" "}
          or otherwise generated. It may be used to display a sample of fonts or
          generate text for testing. Filler text is dummy text which has no
          meaning however looks very similar to real text.
        </p>

        <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">
          About us
        </h2>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated. It may be used to display a
          sample of fonts or generate text for testing. Filler text is dummy
          text which has no meaning however looks very similar to real text.
        </p>

        <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
          <li>This is a section of some simple filler text</li>
          <li>Also known as placeholder text</li>
          <li>It shares some characteristics of a real written text</li>
        </ul>

        <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">
          “This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated.”
        </blockquote>

        <div className="relative mb-6 w-full overflow-hidden rounded-xl bg-gray-100 shadow-lg md:mb-8">
          <Image
            src={projectData.img}
            loading="lazy"
            alt="Photo by Minh Pham"
            isBlurred
            className="h-full w-full object-fill object-center"
          />
        </div>

        <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">
          Features
        </h2>

        <p className="text-gray-500 sm:text-lg">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated. It may be used to display a
          sample of fonts or generate text for testing. Filler text is dummy
          text which has no meaning however looks very similar to real text.
        </p>
        <div className="mx-auto my-6 flex w-full justify-center gap-x-12">
          <Button className="">Live</Button>
          <Button className="" variant="ghost">
            Source Code
          </Button>
        </div>
      </div> */
}
