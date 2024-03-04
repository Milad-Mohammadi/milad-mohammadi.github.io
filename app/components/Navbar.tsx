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
  DropdownMenu,
} from "@nextui-org/react";
import { usePathname, redirect, RedirectType } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { getDictionaryCommon } from "../[lang]/dictionaries_common";
import { LanguageSwitcher } from "./LanguageSwitcher";
import React, { useEffect, useState } from "react";
import { IconMenu, VimiladLogo } from "./icons";

interface routeProps {
  label: string;
  url: string;
}

export const NavbarSection = () => {
  const pathname = usePathname();
  const pathnameSegments = pathname.split("/");
  const language = pathnameSegments[1];
  const path = pathnameSegments[2]
    ? `/${language}/${pathnameSegments[2]}`
    : `/${language}`;
  const [routes, setRoutes] = useState<routeProps[]>([]);
  const direction = language === "en" ? "ltr" : "rtl";

  useEffect(() => {
    const fetchDictionaries = async () => {
      try {
        const dict = await getDictionaryCommon(language);
        setRoutes([
          {
            label: `${dict.about}`,
            url: `/${language}`,
          },
          {
            label: `${dict.projects}`,
            url: `/${language}/projects`,
          },
          /* 
          {
            label: `${dict.services}`,
            url: `/${language}/services`,
          },
          */
          {
            label: `${dict.order_project}`,
            url: `/${language}/order_project`,
          },
        ]);
      } catch (error) {
        console.error("Error fetching dictionaries:", error);
      }
    };

    fetchDictionaries();
  }, [language]);

  return (
    <Navbar isBlurred className="dark:bg-black">
      <NavbarContent>
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button
              isIconOnly
              variant="light"
              className="visible md:invisible p-0"
            >
              <IconMenu />
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Menu">
            {routes.map((section: routeProps) => (
              <DropdownItem key={section.url}>
                <Link
                  className={`flex w-full h-full items-center justify-center rounded ${
                    path === section.url ? "font-black border-x-1" : ""
                  }`}
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

      <NavbarContent className="hidden md:flex gap-4" dir={direction}>
        {routes.map((section: routeProps) => (
          <NavbarItem key={section.url} isActive={path === section.url}>
            <Link
              className={
                path === section.url
                  ? "px-3 py-1.5 rounded-lg bg-onWhite/10 dark:bg-onBlack/10"
                  : "px-3 py-1.5 rounded-lg transition duration-300 outline outline-0 hover:outline-2 outline-onWhite/40 dark:outline-onBlack/30"
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
