"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const pathnameSegments = pathname.split("/");
  var language = pathnameSegments[1];
  var newPath = pathname.endsWith("/")
    ? language === "en"
      ? pathname.replace(`/en/`, `/fa/`)
      : pathname.replace(`/fa/`, `/en/`)
    : language == "en"
    ? pathname.replace(`/en`, `/fa`)
    : pathname.replace(`/fa`, `/en`);

  return (
    <Button href={newPath} as={Link} variant="faded">
      {language == "en" ? "فارسی" : "English"}
    </Button>
  );
}
