"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { getDictionaryCommon } from "../[lang]/dictionaries_common";
import { VimiladLogo } from "./icons/VimiladLogo";

interface routeProps {
  label: string;
  url: string;
}

export const NavbarSection = async () => {
  const pathname = usePathname();
  const pathnameSegments = pathname.split("/");
  const language = pathnameSegments[1];
  const path = pathnameSegments[2] ? `/${pathnameSegments[2]}` : "/";
  const dict = await getDictionaryCommon(language);
  const direction = language == "en" ? "ltr" : "rtl";

  const routes: routeProps[] = [
    {
      label: `${dict.about}`,
      url: "/",
    },
    {
      label: `${dict.projects}`,
      url: "/projects",
    },
    {
      label: `${dict.services}`,
      url: "/services",
    },
    {
      label: `${dict.order_project}`,
      url: "/order_project",
    },
  ];

  return (
    <Navbar dir={direction} isBlurred>
      <NavbarBrand>
        <VimiladLogo />
      </NavbarBrand>

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
      </NavbarContent>
    </Navbar>
  );
};
