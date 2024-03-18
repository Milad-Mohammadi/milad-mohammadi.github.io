"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname, redirect, RedirectType } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { getDictionary } from "../[lang]/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";
import React, { useEffect, useState } from "react";
import { IconMenu } from "./icons/common/IconMenu";
import { Logo } from "./icons/Logo";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchDictionaries = async () => {
      try {
        const dict = await getDictionary(language);
        setRoutes([
          {
            label: `${dict.common.about}`,
            url: `/${language}`,
          },
          {
            label: `${dict.common.projects}`,
            url: `/${language}/projects`,
          },
          /* 
          {
            label: `${dict.common.services}`,
            url: `/${language}/services`,
          },
          */
          {
            label: `${dict.common.order_project}`,
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
    <Navbar
      isBlurred
      className="dark:bg-black"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex md:hidden"
        />
        <NavbarBrand>
          <Link href={`/${language}`}>
            <Logo size={46} classname="hidden md:flex" />
            <Logo size={24} classname="flex md:hidden" />
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
              className={`flex items-center justify-center rounded ${
                path === section.url ? "font-black border-x-2" : ""
              }`}
              href={section.url}
              onClick={() => setIsMenuOpen(false)}
            >
              {section.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
