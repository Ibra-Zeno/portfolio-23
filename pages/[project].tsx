import { portfolioData, projectOrder } from "@/lib/portfolioData";
import { useRouter } from "next/router";
import { Sparkle, Radio, Code2 } from "lucide-react";
import { Spinner, Image, Chip, Button, ButtonGroup } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Head from "next/head";
import Navbar from "@/components/Nav";
import Layout from "@/components/Layout";

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
      <Head>
        <title>{projectData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="mx-auto flex max-w-3xl px-4 py-5 pb-12 sm:px-6 lg:px-8 ">
          <div className="max-w-2xl">
            <div className="">
              <div className="gap-y-1">
                <h2 className="mt-2 text-2xl font-bold tracking-tight  sm:text-4xl">
                  {projectData.title}
                </h2>
                <p className="mt-1 bg-gradient-to-r from-[#C33764] to-[#1D2671] bg-clip-text text-sm font-semibold leading-7 text-transparent md:text-base">
                  {projectData.tagline}
                </p>

                <p className="mb-8 mt-3 flex text-sm font-semibold leading-6 tracking-wide  md:text-base lg:leading-8">
                  {projectData.overview}
                </p>
                {projectData.quote !== null && (
                  <blockquote className="mb-12 rounded-lg border-x-4 border-x-sky-700 bg-gray-50 px-4 py-2 text-center text-base font-bold tracking-wide  shadow-lg sm:px-7 md:leading-normal xl:leading-8">
                    {projectData.quote()}
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
                <figcaption className="mt-3 text-center text-sm ">
                  <div className="flex flex-row flex-wrap justify-center gap-x-2 gap-y-2 rounded-full">
                    {projectData.tech.map((tech, idx) => (
                      <div key={idx} className=" rounded-full bg-gray-100">
                        <Chip
                          size="sm"
                          className="m-1 bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-xs !font-bold text-transparent hover:bg-gray-200 md:text-sm"
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
                <h3 className="mb-2 mt-6 text-lg font-bold md:text-2xl">
                  Features
                </h3>
                {projectData.featuresIntro()}
                <ul
                  role="list"
                  className=" flex flex-col gap-y-6 border-l-2  border-l-green-600/40 pl-4 text-xs font-bold leading-7 tracking-wide  xs:gap-y-8 xs:text-sm sm:grid sm:grid-cols-2"
                >
                  {projectData.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex h-fit w-fit max-w-[30ch] items-center gap-x-3 md:items-start"
                    >
                      <Sparkle
                        className="h-5 w-5 flex-none text-sky-700"
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

              <div className="text-base leading-7 ">{projectData.main()}</div>

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
                    className="font-sans font-bold tracking-wide"
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
                    className="hover: bg-gray-200/40  font-bold backdrop-blur-3xl"
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
                  <>
                    <div className="sm:hidden">
                      <Button
                        size={"sm"}
                        className="bg-gray-200 px-4 py-5 text-sm font-bold  hover:text-slate-950"
                        onClick={() => navigateToProject(previousProject)}
                      >
                        Previous Project
                      </Button>
                    </div>
                    <div className="hidden sm:block">
                      <Button
                        size={"lg"}
                        className="bg-gray-200  px-6 pb-2 pt-2 text-sm font-bold  hover:text-slate-950 lg:text-base"
                        onClick={() => navigateToProject(previousProject)}
                      >
                        Previous Project
                      </Button>
                    </div>
                  </>
                )}
                {projectId < projectOrder.length - 1 && (
                  <>
                    <div className="sm:hidden">
                      <Button
                        size="sm"
                        className="bg-gray-200 px-4 py-5 text-sm font-bold  hover:text-slate-950"
                        onClick={() => navigateToProject(nextProject)}
                      >
                        Next Project
                      </Button>
                    </div>
                    <div className="hidden sm:block">
                      <Button
                        size="lg"
                        className="bg-gray-200 font-sans text-sm font-bold  hover:text-slate-950 lg:text-base"
                        onClick={() => navigateToProject(nextProject)}
                      >
                        Next Project
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
        {/* Live and code btns */}
      </Layout>
    </>
  );
};

export default Project;
