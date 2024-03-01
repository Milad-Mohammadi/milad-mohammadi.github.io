"use client";
import Link from "next/link";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  DropdownMenu,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { getDictionaryCommon } from "../[lang]/dictionaries_common";
import { VimiladLogo } from "./icons/VimiladLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import React from "react";
import { IconMenu } from "./icons/IconMenu";

interface routeProps {
  label: string;
  url: string;
}

export const NavbarSection = async () => {
  const pathname = usePathname();
  const pathnameSegments = pathname.split("/");
  const language = pathnameSegments[1];
  const path = pathnameSegments[2]
    ? `/${language}/${pathnameSegments[2]}`
    : `/${language}`;
  const dict = await getDictionaryCommon(language);
  const direction = language === "en" ? "ltr" : "rtl";

  const routes: routeProps[] = [
    {
      label: `${dict.about}`,
      url: `/${language}`,
    },
    {
      label: `${dict.projects}`,
      url: `/${language}/projects`,
    },
    {
      label: `${dict.services}`,
      url: `/${language}/services`,
    },
    {
      label: `${dict.order_project}`,
      url: `/${language}/order_project`,
    },
  ];

  return (
    <Navbar dir={direction} isBlurred>
      <NavbarContent>
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button variant="ghost" className="visible md:invisible">
              <IconMenu />
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Static Actions">
            {routes.map((section: routeProps) => (
              <DropdownItem key={section.url}>
                <Link
                  className={path === section.url ? "font-black" : ""}
                  href={section.url}
                >
                  {section.label}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <NavbarBrand>
          <Link href={`/${language}`}>
            <VimiladLogo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4">
        {routes.map((section: routeProps) => (
          <NavbarItem key={section.url} isActive={path === section.url}>
            <Link
              className={
                path === section.url
                  ? "px-3 py-1.5 rounded-lg bg-red-200"
                  : "px-3 py-1.5 rounded-lg"
              }
              href={section.url}
            >
              {section.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </NavbarContent>

      <NavbarMenu>
        {routes.map((section: routeProps) => (
          <NavbarMenuItem key={section.url}>
            <Link
              className={
                path === section.url
                  ? "w-full px-3 py-1.5 rounded-lg bg-red-200"
                  : "w-full px-3 py-1.5 rounded-lg"
              }
              href={section.url}
            >
              {section.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
