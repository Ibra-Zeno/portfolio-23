import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "@nextui-org/react";

import { OrbitIcon } from "lucide-react";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Profile", "Dashboard"];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="custom-font">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="relative pr-3 sm:hidden" justify="start">
        <NavbarBrand>
          <Image
            src="/images/ik-logo.jpg"
            className="max-w-10 absolute top-0 flex max-h-10 justify-center rounded-full"
            alt="IK logo"
          ></Image>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="mx-auto hidden gap-4 sm:flex" justify="start">
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/images/ik-logo.jpg"
              className="max-w-10 max-h-10 rounded-full"
              alt="IK logo"
            ></Image>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="mx-auto hidden justify-center gap-4 font-sans sm:flex"
        justify="end"
      >
        {/* <NavbarBrand>
          <Image
            src="/images/ik-logo.jpg"
            className="max-w-10 max-h-10 rounded-full"
            alt="IK logo"
          ></Image>
        </NavbarBrand> */}
        <Dropdown className="font-sans">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="bg-transparent p-0 font-sans data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                Projects
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px] font-sans"
            itemClasses={{
              base: "gap-4",
              title: "font-sans",
              description: "font-sans",
            }}
          >
            <DropdownItem
              key="autoscaling"
              className="font-sans"
              startContent={<OrbitIcon />}
              description="ACME scales apps to meet user demand, automagically, based on load."
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              startContent={<OrbitIcon />}
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              startContent={<OrbitIcon />}
              description="ACME runs on ACME, join us and others serving requests at web scale."
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              startContent={<OrbitIcon />}
              description="Applications stay on the grid with high availability and high uptime guarantees."
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              startContent={<OrbitIcon />}
              description="Overcome any challenge with a supporting team ready to respond."
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      {/*       <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;

/* <header className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <Link
          href="/"
          className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">{logoText}</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          {links.map((link, idx) => (
            <Link
              className="mr-5 hover:text-gray-900"
              href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
              key={idx}
            >
              {link}
            </Link>
          ))}
        </nav>
        <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="ml-1 h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header> */
