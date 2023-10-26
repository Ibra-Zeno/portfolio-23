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
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="custom-font"
    >
      <NavbarContent
        className="relative mx-auto pr-3 sm:hidden"
        justify="center"
      >
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
    </Navbar>
  );
};

export default Nav;
