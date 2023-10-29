import React from "react";
import Router from "next/router";
import { projArr } from "./Projects";
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
import { ThemeSwitcher } from "./ThemeSwitcher";

import { Nunito } from "next/font/google";
const nunito = Nunito({
  preload: true,
  subsets: ["latin-ext"],
  variable: "--font-nunito",
});

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="custom-font "
    >
      {/* Small nav */}
      <NavbarContent className=" relative mx-auto sm:hidden" justify="start">
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
      <NavbarContent className=" relative mx-auto sm:hidden" justify="end">
        <ThemeSwitcher />
      </NavbarContent>

      <NavbarContent className=" mx-auto hidden gap-4 sm:flex" justify="start">
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/images/ik-logo.jpg"
              className="h-12 w-12 rounded-full"
              alt="IK logo"
            ></Image>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      {/* Big Nav */}
      <NavbarContent
        className=" mx-auto hidden justify-center gap-4 font-sans sm:flex"
        justify="end"
      >
        <Dropdown
          className=" bg-background font-sans"
          classNames={{
            base: `font-sans ${nunito.variable}`,
          }}
        >
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className=" bg-transparent p-0 font-sans font-bold data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                Projects
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Ibrahim's Projects"
            className=" w-[340px] font-sans"
            itemClasses={{
              base: "gap-4 ",
              title: "font-sans",
              description: "font-sans",
            }}
          >
            {projArr.map((proj, i) => (
              <DropdownItem
                key={i}
                startContent={proj.icon}
                description={proj.desc}
                onClick={() => Router.push(proj.link)}
              >
                {proj.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
