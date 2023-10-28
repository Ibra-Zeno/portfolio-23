import { Globe2, Mail, Github, Linkedin, FileText } from "lucide-react";
import Minesweeper from "./Minesweeper";
import { Link } from "@nextui-org/react";

export const contactIcons = [
  {
    name: "GitHub",
    href: "https://github.com/Ibra-Zeno",
    icons: <Github size={28} strokeWidth={1.7} />,
  },
  {
    name: "CV",
    href: "https://github.com/Ibra-Zeno",
    icons: <FileText size={28} strokeWidth={1.7} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ibrahim-kalam-a31846165/",
    icons: <Linkedin size={28} strokeWidth={1.7} />,
  },
];

const features = [
  {
    name: "Location:",
    description: () => <p className="text-sm md:text-base">London, UK,</p>,
    icon: (
      <Globe2
        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
        aria-hidden="true"
      />
    ),
  },
  {
    name: "Email",
    description: () => (
      <Link href="mailto:sanity@duck.com" className="text-sm md:text-base">
        sanity@duck.com
      </Link>
    ),
    icon: (
      <Mail
        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
        aria-hidden="true"
      />
    ),
  },
];

const About: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="px-6 sm:px-0 lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-left">
                Connect{" "}
                <span className="ml-2 block text-base font-semibold tracking-wide text-slate-700 md:inline-block">
                  (Only If You Win)
                </span>
              </p>
              <p className="mx-auto mt-4 max-w-[50ch] text-center text-base leading-8 text-gray-600 md:text-lg lg:text-left">
                I&apos;d love to hear from you! The best way to reach me is by
                <Link
                  href="mailto:sanity@duck.com"
                  className="ml-1 leading-8 text-inherit text-sky-600 underline underline-offset-4 hover:text-sky-500"
                >
                  email
                </Link>
                . I&apos;m always open to discussing new projects, creative
                ideas or opportunities to work together. If you have any
                questions or just want to connect, feel free to get in touch. I
                look forward to hearing from you!
              </p>
              <dl className="mx-auto mt-12 flex max-w-xl flex-col gap-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="relative flex justify-between px-9"
                  >
                    <dt className="inline-flex items-center text-sm font-semibold text-gray-900 md:text-base">
                      {feature.icon}
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description()}</dd>
                  </div>
                ))}
              </dl>
              <div className="mx-auto mt-12 flex w-full justify-center gap-x-6">
                {contactIcons.map((icon, i) => (
                  <Link
                    key={i}
                    href={icon.href}
                    aria-label={icon.name}
                    className="text-gray-700 transition-all duration-200 ease-in-out hover:text-gray-500"
                  >
                    {icon.icons}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Minesweeper />
        </div>
      </div>
    </div>
  );
};

export default About;
