"use client";

import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.replace(newPath);
  };

  return (
    <div>
      <Button
        isIconOnly
        onClick={handleClick}
        variant="faded"
        radius="full"
        className="hidden md:flex pt-0.5"
        size="md"
      >
        {language == "en" ? "فا" : "En"}
      </Button>

      <Button
        isIconOnly
        onClick={handleClick}
        variant="faded"
        radius="full"
        className="flex md:hidden pt-0.5"
        size="sm"
      >
        {language == "en" ? "فا" : "En"}
      </Button>
    </div>
  );
}
