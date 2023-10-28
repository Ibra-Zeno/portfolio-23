import { CloudIcon } from "lucide-react";
import Minesweeper from "./Minesweeper";
import { Link } from "@nextui-org/react";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
];

const About: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="px-6 sm:px-0 lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Connect{" "}
                <span className="ml-2 text-base font-semibold tracking-wide text-slate-700">
                  (Only If You Win)
                </span>
              </p>
              <p className="text-lg leading-8 text-gray-600">
                I&apos;d love to hear from you! The best way to reach me is by
                <Link
                  href="mailto:ikalam869@gmail.com"
                  className="ml-1 mt-6 text-lg leading-8 text-sky-600 underline underline-offset-4 hover:text-sky-500"
                >
                  email
                </Link>
                . I&apos;m always open to discussing new projects, creative
                ideas or opportunities to work together. If you have any
                questions or just want to connect, feel free to get in touch. I
                look forward to hearing from you!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <CloudIcon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Minesweeper />
        </div>
      </div>
    </div>
  );
};

export default About;
